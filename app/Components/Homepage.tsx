"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
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
    <main className="bg-white overflow-x-hidden w-full relative">
      {/* HERO */}
      <section
        className="
          relative
          overflow-hidden
          isolate
          bg-gradient-to-br
          from-[#a82364]
          via-[#a82364]
          to-indigo-900
          py-16
          md:py-28
          text-white
          w-full
        "
      >
        {/* Ballpit Background - Added strict pointer events blocker */}
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-none select-none md:block">
          <Ballpit
            count={40}
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

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h1
              className="
                mx-auto
                max-w-5xl
                text-3xl
                sm:text-5xl
                md:text-7xl
                font-bold
                leading-tight
                tracking-tight
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
                text-base
                sm:text-lg
                md:text-xl
                text-blue-100
                px-2
              "
            >
              We specialize in AI, Salesforce, and custom app solutions to accelerate
              business growth.
            </p>
            
            <div className="mt-8 md:mt-10">
              <Link
                href="/contact"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  bg-white
                  px-8
                  sm:px-10
                  py-3
                  sm:py-4
                  text-base
                  sm:text-lg
                  font-bold
                  text-black
                  shadow-lg
                  transition
                  duration-300
                  animate-bounce
                "
              >
                <span className="relative z-10 animate-pulse transition duration-300">
                  Let's Talk
                </span>
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 transition duration-500 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS & FEATURED CARDS */}
      <section className="py-12 md:py-16 border-b-2 border-gray-100 relative z-10">
        <h1 className="mb-8 md:mb-10 text-center text-3xl md:text-4xl font-bold text-black px-4">
          What We Do
        </h1>

        {/* Stats Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:gap-6 px-4 md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gray-50 p-4 sm:p-6 text-center shadow-sm"
            >
              <h2 className="text-2xl sm:text-4xl font-bold text-blue-900">
                {item.number}
              </h2>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Service Core Feature Cards */}
        <div className="mx-auto mt-12 md:mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 px-4 md:grid-cols-3">
          
          {/* Salesforce Card */}
          <Link href="/salesforce" className="block overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer w-full">
            <div className="flex flex-col h-full">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
                alt="Salesforce services"
                className="h-48 sm:h-56 w-full object-cover"
              />
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-900">
                  Salesforce Solutions
                </h2>
                <p className="mt-3 text-sm sm:text-base text-gray-600 flex-grow">
                  We build and customize Salesforce solutions to improve business
                  processes, automation, and customer relationships.
                </p>
                <div className="mt-5 inline-block text-center rounded-lg bg-[#0a2840] px-5 py-2 text-sm font-semibold text-white hover:bg-opacity-90 w-max">
                  Learn More
                </div>
              </div>
            </div>
          </Link>

          {/* AI Card */}
          <Link href="/ai" className="block overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer w-full">
            <div className="flex flex-col h-full">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                alt="Artificial Intelligence"
                className="h-48 sm:h-56 w-full object-cover"
              />
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-900">
                  Artificial Intelligence
                </h2>
                <p className="mt-3 text-sm sm:text-base text-gray-600 flex-grow">
                  We create AI-powered solutions that automate tasks, analyze data,
                  and help businesses make smarter decisions.
                </p>
                <div className="mt-5 inline-block text-center rounded-lg bg-[#0a2840] px-5 py-2 text-sm font-semibold text-white hover:bg-opacity-90 w-max">
                  Learn More
                </div>
              </div>
            </div>
          </Link>

          {/* Custom App Development Card */}
          <Link href="/customapp" className="block overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer w-full">
            <div className="flex flex-col h-full">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Custom app development"
                className="h-48 sm:h-56 w-full object-cover"
              />
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-900">
                  Custom App Development
                </h2>
                <p className="mt-3 text-sm sm:text-base text-gray-600 flex-grow">
                  We develop scalable web and mobile applications tailored to your
                  business requirements.
                </p>
                <div className="mt-5 inline-block text-center rounded-lg bg-[#09234f] px-5 py-2 text-sm font-semibold text-white hover:bg-opacity-90 w-max">
                  Learn More
                </div>
              </div>
            </div>
          </Link>
          
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-16 md:py-20 bg-white relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-bold tracking-wider text-blue-700 uppercase">WHAT WE DO</p>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-black max-w-2xl mx-auto">
              Technology Solutions For Your Business
            </h2>
          </div>

          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="
                    rounded-3xl
                    border
                    border-gray-100
                    p-6
                    sm:p-8
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    bg-white
                  "
                >
                  <div className="inline-flex rounded-xl bg-[#0a2840] p-3 sm:p-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-bold text-black">
                    {service.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-16 md:py-20 relative z-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm font-bold tracking-wider text-blue-700 uppercase">WHY CHOOSE US</p>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight">
              We Create Solutions
              <br />
              That Make An Impact
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              We combine creativity, technology and business strategy to deliver
              solutions that create real value.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
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
                  p-4
                  sm:p-5
                  shadow-sm
                  border border-gray-100
                "
              >
                <CheckCircle className="text-blue-900 shrink-0" size={20} />
                <span className="text-sm sm:text-base text-black font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#0a2840] py-16 md:py-20 text-white text-center px-4 relative z-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Ready To Build Something Amazing?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-blue-100 max-w-md mx-auto">
            Let's discuss your next digital project.
          </p>
          <div className="mt-6 sm:mt-8">
            <Link
              href="/contact"
              className="
                inline-block
                rounded-xl
                bg-white
                px-6
                sm:px-8
                py-3
                text-sm
                sm:text-base
                font-semibold
                text-blue-900
                hover:bg-blue-50
                transition-colors
                duration-200
                shadow-md
              "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}