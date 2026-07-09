"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Brain,
  Palette,
  Megaphone,
  Cloud,
  CheckCircle,
} from "lucide-react";
import Ballpit from "./Ballpit";

export default function HomePage() {
  // Scroll Animation
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const move = Math.min(scrollY * 0.15, 40);
  const rotate = 280 + scrollY * 0.08;
  const scale = 1 + Math.min(scrollY * 0.0008, 0.08);

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      desc: "Modern, scalable and high-performance websites built for your business.",
    },
    {
      icon: Smartphone,
      title: "Custom App Development",
      desc: "Powerful mobile applications designed for your customers.",
    },
    {
      icon: Brain,
      title: "AI Solutions",
      desc: "Automate processes with intelligent AI-powered solutions.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      desc: "Beautiful experiences that users love to interact with.",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      desc: "Grow your brand with result-driven marketing strategies.",
    },
    {
      icon: Cloud,
      title: "Salesforce Services",
      desc: "Optimize your business with Salesforce solutions.",
    },
  ];

  const stats = [
    {
      number: "56+",
      text: "Projects Delivered",
    },
    {
      number: "30+",
      text: "Happy Clients",
    },
    {
      number: "10+",
      text: "Industries",
    },
    {
      number: "24/7",
      text: "Support",
    },
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-[#a82364]
          via-[#a82364]
          to-indigo-900
          py-28
          text-white
        "
      >
        {/* Ballpit Background */}
        <div className="absolute inset-0 z-0 opacity-80">
          <Ballpit
            count={100}
            gravity={0.01}
            friction={0.9975}
            wallBounce={0.95}
            followCursor={false}
            colors={[0x3b82f6, 0x6366f1, 0x0a2840]}
          />
        </div>

        {/* Left Floating SVG */}
        <div
          className="absolute left-8 top-40 hidden lg:block pointer-events-none z-10"
          style={{
            transform: `translateY(${move}px) rotate(${-rotate}deg)`,
            transition: "transform .2s linear",
          }}
        >
          <Image
            src="/herosection.svg"
            alt="Hero Left"
            width={140}
            height={190}
            className="object-contain drop-shadow-2xl"
            style={{
              transform: `rotate(${-rotate}deg) scale(${scale})`,
              filter: "drop-shadow(0 0 20px rgba(99,102,241,.4))",
            }}
          />
        </div>

        {/* Right Floating SVG */}
        <div
          className="absolute right-8 top-40 hidden lg:block pointer-events-none z-10"
          style={{
            transform: `translateY(${move}px) rotate(${rotate}deg)`,
            transition: "transform .2s linear",
          }}
        >
          <Image
            src="/herosection.svg"
            alt="Hero Right"
            width={140}
            height={190}
            className="object-contain drop-shadow-2xl"
            style={{
              transform: `rotate(${rotate}deg) scale(${scale})`,
              filter: "drop-shadow(0 0 20px rgba(99,102,241,.4))",
            }}
          />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-6">
  <div className="mx-auto max-w-5xl text-center">

    <h1
      className="
        mx-auto
        max-w-5xl
        text-4xl
        font-bold
        leading-tight
        md:text-7xl
      "
    >
      From consulting to development, we deliver
      <span className="text-[#0e4980]"> technology </span>
      that fits your needs perfectly.
    </h1>

    <p
      className="
        mx-auto
        mt-6
        max-w-2xl
        text-center
        text-lg
        text-blue-100
        md:text-xl
      "
    >
      We specialize in AI, Salesforce, and custom app solutions to accelerate
      business growth.
    </p>
<Link
  href="/contact"
  className="
    group
    md:mt-10
    relative
    inline-flex
    items-center
    justify-center
    overflow-hidden
    rounded-full
    bg-white
    px-10
    py-4
    text-lg
    font-bold
    text-black
    shadow-lg
    transition
    duration-300
    animate-bounce
  "
>
  <span
    className="
      relative
      z-10
      animate-pulse
      transition
      duration-300
    "
  >
    Let's Talk
  </span>

  <span
    className="
      absolute
      inset-0
      -z-0
      to-orange-500
      opacity-0
      transition
      duration-500
      group-hover:opacity-100
    "
  />
</Link>
  </div>
</div>
      </section>

      {/* STATS */}
     <section className="py-16 border-2">
  <h1 className="mb-10 text-center text-4xl font-bold text-black">
    What We Do
  </h1>

  <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-4">
    {stats.map((item, index) => (
      <div
        key={index}
        className="rounded-2xl bg-gray-50 p-6 text-center"
      >
        <h2 className="text-4xl font-bold text-blue-900">
          {item.number}
        </h2>

        <p className="mt-2 text-gray-600">{item.text}</p>
      </div>
    ))}
  </div>

  {/* Service Cards */}
  <div className="mx-auto mt-16 grid max-w-6xl gap-8 px-6 md:grid-cols-3">
    {/* Salesforce Card */}
<div className="overflow-hidden rounded-2xl bg-white shadow-lg cursor-pointer">
  <Link href="/salesforce">
    <img
      src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
      alt="Salesforce services"
      className="h-56 w-full object-cover"
    />

    <div className="p-6">
      <h2 className="text-2xl font-bold text-blue-900">
        Salesforce Solutions
      </h2>

      <p className="mt-3 text-gray-600">
        We build and customize Salesforce solutions to improve business
        processes, automation, and customer relationships.
      </p>

      <button className="mt-5 rounded-lg bg-[#0a2840] px-5 py-2 text-white hover:shadow-lg cursor-pointer">
        Learn More
      </button>
    </div>
  </Link>
</div>

    {/* AI Card */}
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg cursor-pointer">
      <Link href="/ai">
      <img
        src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
        alt="Artificial Intelligence"
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-900">
          Artificial Intelligence
        </h2>

        <p className="mt-3 text-gray-600">
          We create AI-powered solutions that automate tasks, analyze data,
          and help businesses make smarter decisions.
        </p>

        <button  className="mt-5 rounded-lg bg-[#0a2840] px-5 py-2 text-white hover:shadow-lg cursor-pointer">
          <Link href="/ai">
          Learn More
          </Link>
        </button>
      </div>
      </Link>
    </div>

    {/* Custom App Development Card */}
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg cursor-pointer">
      <Link href="/customapp">
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        alt="Custom app development"
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-900">
          Custom App Development
        </h2>

        <p className="mt-3 text-gray-600">
          We develop scalable web and mobile applications tailored to your
          business requirements.
        </p>

        <button className="mt-5 rounded-lg bg-[#09234f] px-5 py-2 text-white hover:shadow-lg cursor-pointer">
          <Link href="/customapp">
          Learn More
          </Link>
        </button>
      </div>
      </Link>
    </div>
  </div>
</section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-semibold text-blue-700">WHAT WE DO</p>

            <h2 className="mt-3 text-4xl font-bold text-black">
              Technology Solutions For Your Business
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="
                    rounded-3xl
                    border
                    p-8
                    transition
                    hover:-translate-y-2
                    hover:shadow-xl 
                    cursor-pointer
                  "
                >
                  <div className="inline-flex rounded-xl bg-[#0a2840] p-4">
                    <Icon className="text-white" size={30} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-black">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-gray-600">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY ZIKKS */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="font-semibold text-blue-700">WHY CHOOSE US</p>

            <h2 className="mt-4 text-4xl font-bold text-black">
              We Create Solutions
              <br />
              That Make An Impact
            </h2>

            <p className="mt-5 text-gray-600">
              We combine creativity, technology and business strategy to deliver
              solutions that create real value.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Experienced technology team",
              "Latest tools and frameworks",
              "Business focused approach",
              "Long term support",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-white
                  p-5
                  shadow-sm
                "
              >
                <CheckCircle className="text-blue-900" />

                <span className="text-black">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a2840] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Ready To Build Something Amazing?
          </h2>

          <p className="mt-4 text-blue-100">
            Let's discuss your next digital project.
          </p>

          <Link
            href="/contact"
            className="
              mt-8
              inline-block
              rounded-xl
              bg-white
              px-8
              py-3
              font-semibold
              text-blue-900
            "
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}