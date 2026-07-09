"use client";

import React, { useEffect, useRef } from "react";
import {
  Vector3,
  MeshPhysicalMaterial,
  Camera,
  ColorRepresentation,
  InstancedMesh,
  Timer,
  AmbientLight,
  SphereGeometry,
  Scene,
  Color,
  Object3D,
  MeshPhysicalMaterialParameters,
  SRGBColorSpace,
  MathUtils,
  Object3DEventMap,
  PMREMGenerator,
  Vector2,
  WebGLRenderer,
  PerspectiveCamera,
  PointLight,
  ACESFilmicToneMapping,
  Plane,
  Raycaster,
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

interface EngineSize {
  width: number;
  height: number;
  wWidth: number;
  wHeight: number;
  ratio: number;
  pixelRatio: number;
}

interface RendererOptions {
  antialias?: boolean;
  alpha?: boolean;
}

interface EngineConfig {
  canvas?: HTMLCanvasElement;
  id?: string;
  size: "parent" | { width: number; height: number };
  rendererOptions?: RendererOptions;
}

class ThreeEngine {
  #rendererOptions: EngineConfig;
  canvas!: HTMLCanvasElement;
  camera!: Camera;
  cameraMinAspect?: number;
  cameraMaxAspect?: number;
  cameraFov!: number;
  maxPixelRatio?: number;
  minPixelRatio?: number;
  scene!: Scene<Object3DEventMap>;
  renderer!: WebGLRenderer;
  #postprocessingEffect: any;
  size: EngineSize = { width: 0, height: 0, wWidth: 0, wHeight: 0, ratio: 0, pixelRatio: 0 };
  render: () => void = this.#defaultRender;
  onBeforeRender: (time: { elapsed: number; delta: number }) => void = () => {};
  onAfterRender: (time: { elapsed: number; delta: number }) => void = () => {};
  onAfterResize: (size: EngineSize) => void = () => {};
  #isIntersecting = false;
  #isAnimating = false;
  isDisposed = false;
  #intersectionObserver?: IntersectionObserver;
  #resizeObserver?: ResizeObserver;
  #resizeTimeout?: ReturnType<typeof setTimeout>;
  #timer = new Timer();
  #timeData = { elapsed: 0, delta: 0 };
  #animationFrameId?: number;

  constructor(options: EngineConfig) {
    this.#rendererOptions = { ...options };
    this.#initCamera();
    this.#initScene();
    this.#initRenderer();
    this.resize();
    this.#initObservers();
  }

  #initCamera() {
    this.camera = new PerspectiveCamera();
    this.cameraFov = (this.camera as PerspectiveCamera).fov;
  }

  #initScene() {
    this.scene = new Scene();
  }

  #initRenderer() {
    if (this.#rendererOptions.canvas) {
      this.canvas = this.#rendererOptions.canvas;
    } else if (this.#rendererOptions.id) {
      this.canvas = document.getElementById(this.#rendererOptions.id) as HTMLCanvasElement;
    } else {
      console.error("Three: Missing canvas or id parameter");
    }
    this.canvas.style.display = "block";
    
    const options = {
      canvas: this.canvas,
      powerPreference: "high-performance" as const,
      ...(this.#rendererOptions.rendererOptions ?? {}),
    };
    this.renderer = new WebGLRenderer(options);
    this.renderer.outputColorSpace = SRGBColorSpace;
  }

  #initObservers() {
    if (typeof this.#rendererOptions.size !== "object") {
      window.addEventListener("resize", this.#handleResizeDebounce.bind(this));
      if (this.#rendererOptions.size === "parent" && this.canvas.parentNode) {
        this.#resizeObserver = new ResizeObserver(this.#handleResizeDebounce.bind(this));
        this.#resizeObserver.observe(this.canvas.parentNode as Element);
      }
    }
    this.#intersectionObserver = new IntersectionObserver(this.#handleIntersection.bind(this), {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });
    this.#intersectionObserver.observe(this.canvas);
    document.addEventListener("visibilitychange", this.#handleVisibilityChange.bind(this));
  }

  #removeObservers() {
    window.removeEventListener("resize", this.#handleResizeDebounce.bind(this));
    this.#resizeObserver?.disconnect();
    this.#intersectionObserver?.disconnect();
    document.removeEventListener("visibilitychange", this.#handleVisibilityChange.bind(this));
  }

  #handleIntersection(entries: IntersectionObserverEntry[]) {
    this.#isIntersecting = entries[0].isIntersecting;
    this.#isIntersecting ? this.#startAnimation() : this.#stopAnimation();
  }

  #handleVisibilityChange() {
    if (this.#isIntersecting) {
      document.hidden ? this.#stopAnimation() : this.#startAnimation();
    }
  }

  #handleResizeDebounce() {
    if (this.#resizeTimeout) clearTimeout(this.#resizeTimeout);
    this.#resizeTimeout = setTimeout(this.resize.bind(this), 100);
  }

  resize() {
    let width = 0;
    let height = 0;
    if (typeof this.#rendererOptions.size === "object" && this.#rendererOptions.size !== null) {
      width = this.#rendererOptions.size.width;
      height = this.#rendererOptions.size.height;
    } else if (this.#rendererOptions.size === "parent" && this.canvas.parentNode) {
      width = (this.canvas.parentNode as HTMLElement).offsetWidth;
      height = (this.canvas.parentNode as HTMLElement).offsetHeight;
    } else {
      width = window.innerWidth;
      height = window.innerHeight;
    }
    this.size.width = width;
    this.size.height = height;
    this.size.ratio = width / height;
    this.#updateCameraMatrix();
    this.#updateRendererSize();
    this.onAfterResize(this.size);
  }

 #updateCameraMatrix() {
    if (this.camera instanceof PerspectiveCamera) {
      this.camera.aspect = this.size.width / this.size.height;
      if (this.cameraFov) {
        if (this.cameraMinAspect && this.camera.aspect < this.cameraMinAspect) {
          this.#adjustFov(this.cameraMinAspect);
        } else if (this.cameraMaxAspect && this.camera.aspect > this.cameraMaxAspect) {
          this.#adjustFov(this.cameraMaxAspect);
        } else {
          this.camera.fov = this.cameraFov;
        }
      }
      this.camera.updateProjectionMatrix();
      this.updateWorldSize();
    }
  }

  #adjustFov(aspectThreshold: number) {
    if (this.camera instanceof PerspectiveCamera) {
      const t = Math.tan(MathUtils.degToRad(this.cameraFov / 2)) / (this.camera.aspect / aspectThreshold);
      this.camera.fov = 2 * MathUtils.radToDeg(Math.atan(t));
    }
  }

  updateWorldSize() {
    if (this.camera instanceof PerspectiveCamera) {
      const fovRad = (this.camera.fov * Math.PI) / 180;
      this.size.wHeight = 2 * Math.tan(fovRad / 2) * this.camera.position.length();
      this.size.wWidth = this.size.wHeight * this.camera.aspect;
    }
  }

  #updateRendererSize() {
    this.renderer.setSize(this.size.width, this.size.height);
    this.#postprocessingEffect?.setSize(this.size.width, this.size.height);
    let pixelRatio = window.devicePixelRatio;
    if (this.maxPixelRatio && pixelRatio > this.maxPixelRatio) {
      pixelRatio = this.maxPixelRatio;
    } else if (this.minPixelRatio && pixelRatio < this.minPixelRatio) {
      pixelRatio = this.minPixelRatio;
    }
    this.renderer.setPixelRatio(pixelRatio);
    this.size.pixelRatio = pixelRatio;
  }

  get postprocessing() {
    return this.#postprocessingEffect;
  }

  set postprocessing(effect: any) {
    this.#postprocessingEffect = effect;
    this.render = effect.render.bind(effect);
  }

  #startAnimation() {
    if (this.#isAnimating) return;
    const animate = () => {
      this.#animationFrameId = requestAnimationFrame(animate);
      this.#timer.update();
      this.#timeData.delta = this.#timer.getDelta();
      this.#timeData.elapsed += this.#timeData.delta;
      this.onBeforeRender(this.#timeData);
      this.render();
      this.onAfterRender(this.#timeData);
    };
    this.#isAnimating = true;
    this.#timer.reset();
    animate();
  }

  #stopAnimation() {
    if (this.#isAnimating) {
      if (this.#animationFrameId !== undefined) cancelAnimationFrame(this.#animationFrameId);
      this.#isAnimating = false;
    }
  }

  #defaultRender() {
    this.renderer.render(this.scene, this.camera);
  }

  clear() {
    this.scene.traverse((object: any) => {
      if (object.isMesh && object.material) {
        if (typeof object.material === "object") {
          Object.keys(object.material).forEach((key) => {
            const materialProp = object.material[key];
            if (materialProp && typeof materialProp.dispose === "function") {
              materialProp.dispose();
            }
          });
        }
        if (typeof object.material.dispose === "function") object.material.dispose();
        if (object.geometry && typeof object.geometry.dispose === "function") object.geometry.dispose();
      }
    });
    this.scene.clear();
  }

  dispose() {
    this.#removeObservers();
    this.#stopAnimation();
    this.#timer.dispose();
    this.clear();
    this.#postprocessingEffect?.dispose();
    this.renderer.dispose();
    this.isDisposed = true;
  }
}

interface InteractionHandler {
  position: Vector2;
  nPosition: Vector2;
  hover: boolean;
  touching: boolean;
  onEnter: (handler: InteractionHandler) => void;
  onMove: (handler: InteractionHandler) => void;
  onClick: (handler: InteractionHandler) => void;
  onLeave: (handler: InteractionHandler) => void;
  dispose?: () => void;
}

const activeInteractions = new Map<HTMLElement, InteractionHandler>();
const currentPointerPos = new Vector2();
let isListeningToEvents = false;

function setupInteraction(options: { domElement: HTMLElement; onMove?: () => void; onLeave?: () => void }) {
  const handler: InteractionHandler = {
    position: new Vector2(),
    nPosition: new Vector2(),
    hover: false,
    touching: false,
    onEnter() {},
    onMove() {},
    onClick() {},
    onLeave() {},
    ...options,
  };

  if (!activeInteractions.has(options.domElement)) {
    activeInteractions.set(options.domElement, handler);
    if (!isListeningToEvents) {
      document.body.addEventListener("pointermove", handlePointerMove);
      document.body.addEventListener("pointerleave", handlePointerLeave);
      document.body.addEventListener("click", handlePointerClick);

      document.body.addEventListener("touchstart", handleTouchStart, { passive: false });
      document.body.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.body.addEventListener("touchend", handleTouchEnd, { passive: false });
      document.body.addEventListener("touchcancel", handleTouchEnd, { passive: false });

      isListeningToEvents = true;
    }
  }

  handler.dispose = () => {
    activeInteractions.delete(options.domElement);
    if (activeInteractions.size === 0) {
      document.body.removeEventListener("pointermove", handlePointerMove);
      document.body.removeEventListener("pointerleave", handlePointerLeave);
      document.body.removeEventListener("click", handlePointerClick);

      document.body.removeEventListener("touchstart", handleTouchStart);
      document.body.removeEventListener("touchmove", handleTouchMove);
      document.body.removeEventListener("touchend", handleTouchEnd);
      document.body.removeEventListener("touchcancel", handleTouchEnd);

      isListeningToEvents = false;
    }
  };
  return handler;
}

function handlePointerMove(e: PointerEvent) {
  currentPointerPos.x = e.clientX;
  currentPointerPos.y = e.clientY;
  processInteractions();
}

function processInteractions() {
  for (const [elem, handler] of activeInteractions) {
    const rect = elem.getBoundingClientRect();
    if (isInsideBoundingRect(rect)) {
      updatePositions(handler, rect);
      if (!handler.hover) {
        handler.hover = true;
        handler.onEnter(handler);
      }
      handler.onMove(handler);
    } else if (handler.hover && !handler.touching) {
      handler.hover = false;
      handler.onLeave(handler);
    }
  }
}

function handlePointerClick(e: MouseEvent) {
  currentPointerPos.x = e.clientX;
  currentPointerPos.y = e.clientY;
  for (const [elem, handler] of activeInteractions) {
    const rect = elem.getBoundingClientRect();
    updatePositions(handler, rect);
    if (isInsideBoundingRect(rect)) handler.onClick(handler);
  }
}

function handlePointerLeave() {
  for (const handler of activeInteractions.values()) {
    if (handler.hover) {
      handler.hover = false;
      handler.onLeave(handler);
    }
  }
}

function handleTouchStart(e: TouchEvent) {
  if (e.touches.length > 0) {
    e.preventDefault();
    currentPointerPos.x = e.touches[0].clientX;
    currentPointerPos.y = e.touches[0].clientY;

    for (const [elem, handler] of activeInteractions) {
      const rect = elem.getBoundingClientRect();
      if (isInsideBoundingRect(rect)) {
        handler.touching = true;
        updatePositions(handler, rect);
        if (!handler.hover) {
          handler.hover = true;
          handler.onEnter(handler);
        }
        handler.onMove(handler);
      }
    }
  }
}

function handleTouchMove(e: TouchEvent) {
  if (e.touches.length > 0) {
    e.preventDefault();
    currentPointerPos.x = e.touches[0].clientX;
    currentPointerPos.y = e.touches[0].clientY;

    for (const [elem, handler] of activeInteractions) {
      const rect = elem.getBoundingClientRect();
      updatePositions(handler, rect);

      if (isInsideBoundingRect(rect)) {
        if (!handler.hover) {
          handler.hover = true;
          handler.touching = true;
          handler.onEnter(handler);
        }
        handler.onMove(handler);
      } else if (handler.hover && handler.touching) {
        handler.onMove(handler);
      }
    }
  }
}

function handleTouchEnd() {
  for (const [, handler] of activeInteractions) {
    if (handler.touching) {
      handler.touching = false;
      if (handler.hover) {
        handler.hover = false;
        handler.onLeave(handler);
      }
    }
  }
}

function updatePositions(handler: InteractionHandler, rect: DOMRect) {
  const { position, nPosition } = handler;
  position.x = currentPointerPos.x - rect.left;
  position.y = currentPointerPos.y - rect.top;
  nPosition.x = (position.x / rect.width) * 2 - 1;
  nPosition.y = (-position.y / rect.height) * 2 + 1;
}

function isInsideBoundingRect(rect: DOMRect) {
  const { x, y } = currentPointerPos;
  const { left, top, width, height } = rect;
  return x >= left && x <= left + width && y >= top && y <= top + height;
}

const { randFloat, randFloatSpread } = MathUtils;
const tempV1 = new Vector3();
const tempV2 = new Vector3();
const tempV3 = new Vector3();
const tempV4 = new Vector3();
const tempV5 = new Vector3();
const tempV6 = new Vector3();
const tempV7 = new Vector3();
const tempV8 = new Vector3();
const tempV9 = new Vector3();
const tempV10 = new Vector3();

interface BallpitConfig {
  count: number;
  colors: ColorRepresentation[];
  ambientColor: ColorRepresentation;
  ambientIntensity: number;
  lightIntensity: number;
  materialParams: {
    metalness: number;
    roughness: number;
    clearcoat: number;
    clearcoatRoughness: number;
  };
  minSize: number;
  maxSize: number;
  size0: number;
  gravity: number;
  friction: number;
  wallBounce: number;
  maxVelocity: number;
  maxX: number;
  maxY: number;
  maxZ: number;
  controlSphere0: boolean;
  followCursor: boolean;
}

class PhysicsSystem {
  config: BallpitConfig;
  positionData: Float32Array;
  velocityData: Float32Array;
  sizeData: Float32Array;
  center: Vector3;

  constructor(config: BallpitConfig) {
    this.config = config;
    this.positionData = new Float32Array(3 * config.count).fill(0);
    this.velocityData = new Float32Array(3 * config.count).fill(0);
    this.sizeData = new Float32Array(config.count).fill(1);
    this.center = new Vector3();
    this.#resetPositions();
    this.setSizes();
  }

  #resetPositions() {
    const { config, positionData } = this;
    this.center.toArray(positionData, 0);
    for (let i = 1; i < config.count; i++) {
      const index = 3 * i;
      positionData[index] = randFloatSpread(2 * config.maxX);
      positionData[index + 1] = randFloatSpread(2 * config.maxY);
      positionData[index + 2] = randFloatSpread(2 * config.maxZ);
    }
  }

  setSizes() {
    const { config, sizeData } = this;
    sizeData[0] = config.size0;
    for (let i = 1; i < config.count; i++) {
      sizeData[i] = randFloat(config.minSize, config.maxSize);
    }
  }

  update(time: { delta: number }) {
    const { config, center, positionData, sizeData, velocityData } = this;
    let startIdx = 0;
    if (config.controlSphere0) {
      startIdx = 1;
      tempV1.fromArray(positionData, 0);
      tempV1.lerp(center, 0.1).toArray(positionData, 0);
      tempV4.set(0, 0, 0).toArray(velocityData, 0);
    }
    
    for (let idx = startIdx; idx < config.count; idx++) {
      const base = 3 * idx;
      tempV2.fromArray(positionData, base);
      tempV5.fromArray(velocityData, base);
      tempV5.y -= time.delta * config.gravity * sizeData[idx];
      tempV5.multiplyScalar(config.friction);
      tempV5.clampLength(0, config.maxVelocity);
      tempV2.add(tempV5);
      tempV2.toArray(positionData, base);
      tempV5.toArray(velocityData, base);
    }

    for (let idx = startIdx; idx < config.count; idx++) {
      const base = 3 * idx;
      tempV2.fromArray(positionData, base);
      tempV5.fromArray(velocityData, base);
      const radius = sizeData[idx];

      for (let jdx = idx + 1; jdx < config.count; jdx++) {
        const otherBase = 3 * jdx;
        tempV3.fromArray(positionData, otherBase);
        tempV6.fromArray(velocityData, otherBase);
        const otherRadius = sizeData[jdx];
        tempV7.copy(tempV3).sub(tempV2);
        const dist = tempV7.length();
        const sumRadius = radius + otherRadius;

        if (dist < sumRadius) {
          const overlap = sumRadius - dist;
          tempV8.copy(tempV7).normalize().multiplyScalar(0.5 * overlap);
          tempV9.copy(tempV8).multiplyScalar(Math.max(tempV5.length(), 1));
          tempV10.copy(tempV8).multiplyScalar(Math.max(tempV6.length(), 1));
          tempV2.sub(tempV8);
          tempV5.sub(tempV9);
          tempV2.toArray(positionData, base);
          tempV5.toArray(velocityData, base);
          tempV3.add(tempV8);
          tempV6.add(tempV10);
          tempV3.toArray(positionData, otherBase);
          tempV6.toArray(velocityData, otherBase);
        }
      }

      if (config.controlSphere0) {
        tempV7.copy(tempV1).sub(tempV2);
        const dist = tempV7.length();
        const sumRadius0 = radius + sizeData[0];
        if (dist < sumRadius0) {
          const diff = sumRadius0 - dist;
          tempV8.copy(tempV7).normalize().multiplyScalar(diff);
          tempV9.copy(tempV8).multiplyScalar(Math.max(tempV5.length(), 2));
          tempV2.sub(tempV8);
          tempV5.sub(tempV9);
        }
      }

      if (Math.abs(tempV2.x) + radius > config.maxX) {
        tempV2.x = Math.sign(tempV2.x) * (config.maxX - radius);
        tempV5.x = -tempV5.x * config.wallBounce;
      }
      if (config.gravity === 0) {
        if (Math.abs(tempV2.y) + radius > config.maxY) {
          tempV2.y = Math.sign(tempV2.y) * (config.maxY - radius);
          tempV5.y = -tempV5.y * config.wallBounce;
        }
      } else if (tempV2.y - radius < -config.maxY) {
        tempV2.y = -config.maxY + radius;
        tempV5.y = -tempV5.y * config.wallBounce;
      }
      const maxBoundary = Math.max(config.maxZ, config.maxSize);
      if (Math.abs(tempV2.z) + radius > maxBoundary) {
        tempV2.z = Math.sign(tempV2.z) * (config.maxZ - radius);
        tempV5.z = -tempV5.z * config.wallBounce;
      }
      tempV2.toArray(positionData, base);
      tempV5.toArray(velocityData, base);
    }
  }
}

const DEFAULT_CONFIG: BallpitConfig = {
  count: 200,
  colors: [0x000000, 0x000000, 0x000000],
  ambientColor: 16777215,
  ambientIntensity: 1,
  lightIntensity: 200,
  materialParams: {
    metalness: 0.5,
    roughness: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.15,
  },
  minSize: 0.5,
  maxSize: 1,
  size0: 1,
  gravity: 0.5,
  friction: 0.9975,
  wallBounce: 0.95,
  maxVelocity: 0.15,
  maxX: 5,
  maxY: 5,
  maxZ: 2,
  controlSphere0: false,
  followCursor: true,
};

const dummyTransformObject = new Object3D();

class BallpitMesh extends InstancedMesh {
  config: BallpitConfig;
  physics: PhysicsSystem;
  ambientLight!: AmbientLight;
  light!: PointLight;

  constructor(renderer: WebGLRenderer, options = {}) {
    const mergedConfig = { ...DEFAULT_CONFIG, ...options };
    const roomEnv = new RoomEnvironment();
    const pmremTexture = new PMREMGenerator(renderer).fromScene(roomEnv).texture;
    const geometry = new SphereGeometry();
    const material = new MeshPhysicalMaterial({ envMap: pmremTexture, ...mergedConfig.materialParams });
    material.envMapRotation.x = -Math.PI / 2;
    
    super(geometry, material, mergedConfig.count);
    this.config = mergedConfig;
    this.physics = new PhysicsSystem(mergedConfig);
    this.#initLights();
    this.setColors(mergedConfig.colors);
  }

  #initLights() {
    this.ambientLight = new AmbientLight(this.config.ambientColor, this.config.ambientIntensity);
    this.add(this.ambientLight);
    this.light = new PointLight(this.config.colors[0], this.config.lightIntensity);
    this.add(this.light);
  }

  setColors(colorArray: ColorRepresentation[]) {
    if (Array.isArray(colorArray) && colorArray.length > 0) {
      const colorGradient = (() => {
        let originalColors = colorArray;
        let instantiatedColors: Color[] = [];
        const updateColors = (colors: ColorRepresentation[]) => {
          originalColors = colors;
          instantiatedColors = originalColors.map((col) => new Color(col));
        };
        updateColors(colorArray);
        return {
          getColorAt: (ratio: number, out = new Color()) => {
            const scaled = Math.max(0, Math.min(1, ratio)) * (originalColors.length - 1);
            const idx = Math.floor(scaled);
            const start = instantiatedColors[idx];
            if (idx >= originalColors.length - 1) return start.clone();
            const alpha = scaled - idx;
            const end = instantiatedColors[idx + 1];
            out.r = start.r + alpha * (end.r - start.r);
            out.g = start.g + alpha * (end.g - start.g);
            out.b = start.b + alpha * (end.b - start.b);
            return out;
          },
        };
      })();

      for (let idx = 0; idx < this.count; idx++) {
        const color = colorGradient.getColorAt(idx / this.count);
        this.setColorAt(idx, color);
        if (idx === 0) {
          this.light.color.copy(color);
        }
      }
      if (this.instanceColor) this.instanceColor.needsUpdate = true;
    }
  }

  update(time: { delta: number }) {
    this.physics.update(time);
    for (let idx = 0; idx < this.count; idx++) {
      dummyTransformObject.position.fromArray(this.physics.positionData, 3 * idx);
      if (idx === 0 && !this.config.followCursor) {
        dummyTransformObject.scale.setScalar(0);
      } else {
        dummyTransformObject.scale.setScalar(this.physics.sizeData[idx]);
      }
      dummyTransformObject.updateMatrix();
      this.setMatrixAt(idx, dummyTransformObject.matrix);
      if (idx === 0) this.light.position.copy(dummyTransformObject.position);
    }
    this.instanceMatrix.needsUpdate = true;
  }
}

function createBallpitEngine(canvasElement: HTMLCanvasElement, options = {}) {
  const engine = new ThreeEngine({
    canvas: canvasElement,
    size: "parent",
    rendererOptions: { antialias: true, alpha: true },
  });
  
  let meshInstance: BallpitMesh;
  engine.renderer.toneMapping = ACESFilmicToneMapping;
  engine.camera.position.set(0, 0, 20);
  engine.camera.lookAt(0, 0, 0);
  engine.cameraMaxAspect = 1.5;
  engine.resize();
  
  function initializeMesh(opts: any) {
    if (meshInstance) {
      engine.clear();
      engine.scene.remove(meshInstance);
    }
    meshInstance = new BallpitMesh(engine.renderer, opts);
    engine.scene.add(meshInstance);
  }
  
  initializeMesh(options);
  
  const raycaster = new Raycaster();
  const plane = new Plane(new Vector3(0, 0, 1), 0);
  const intersectionPoint = new Vector3();
  let isPaused = false;

  canvasElement.style.touchAction = "none";
  canvasElement.style.userSelect = "none";
  canvasElement.style.webkitUserSelect = "none";

  const interaction = setupInteraction({
    domElement: canvasElement,
    onMove() {
      raycaster.setFromCamera(interaction.nPosition, engine.camera);
      engine.camera.getWorldDirection(plane.normal);
      raycaster.ray.intersectPlane(plane, intersectionPoint);
      meshInstance.physics.center.copy(intersectionPoint);
      meshInstance.config.controlSphere0 = true;
    },
    onLeave() {
      meshInstance.config.controlSphere0 = false;
    },
  });

  engine.onBeforeRender = (time) => {
    if (!isPaused) meshInstance.update(time);
  };

  engine.onAfterResize = (size) => {
    meshInstance.config.maxX = size.wWidth / 2;
    meshInstance.config.maxY = size.wHeight / 2;
  };

  return {
    three: engine,
    get spheres() {
      return meshInstance;
    },
    setCount(count: number) {
      initializeMesh({ ...meshInstance.config, count });
    },
    togglePause() {
      isPaused = !isPaused;
    },
    dispose() {
      interaction.dispose?.();
      engine.dispose();
    },
  };
}

interface BallpitProps extends Partial<BallpitConfig> {
  className?: string;
}

const Ballpit: React.FC<BallpitProps> = ({ className = "", followCursor = true, ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineInstanceRef = useRef<ReturnType<typeof createBallpitEngine> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    engineInstanceRef.current = createBallpitEngine(canvas, { followCursor, ...props });

    return () => {
      engineInstanceRef.current?.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default Ballpit;