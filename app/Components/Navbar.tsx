"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          {/* 
          <Image
            src="/logo.png"
            alt="Zikks Logo"
            width={120}
            height={50}
            className="h-12 w-auto"
            priority
          />
          */}

          <h1 className="text-2xl font-bold text-black">
            Zikks
          </h1>

        </Link>



        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">


          {/* WHAT WE DO */}
          <div className="group relative">

            <Link
              href=""
              className="flex items-center gap-1 text-black hover:text-indigo-600"
            >
              What we do
              <ChevronDown size={16}/>
            </Link>


            {/* Sub Navigation */}
            <div className="absolute left-0 top-full hidden pt-4 group-hover:block">

              <div className="w-60 rounded-md bg-white p-3 shadow-lg">


                <Link
                  href="/digitalmarketing"
                  className="block rounded-md px-4 py-2 text-black hover:bg-gray-100"
                >
                  Digital Marketing
                </Link>


                <Link
                  href="/ai"
                  className="block rounded-md px-4 py-2 text-black hover:bg-gray-100"
                >
                  AI Solutions
                </Link>


                <Link
                  href="/customapp"
                  className="block rounded-md px-4 py-2 text-black hover:bg-gray-100"
                >
                  Custom App Development
                </Link>


                <Link
                  href="/salesforce"
                  className="block rounded-md px-4 py-2 text-black hover:bg-gray-100"
                >
                  Salesforce Services
                </Link>


              </div>

            </div>

          </div>




          {/* WHO WE ARE */}
          <div className="group relative">

            <Link
              href="#"
              className="flex items-center gap-1 text-black hover:text-indigo-600"
            >
              Who we are
              <ChevronDown size={16}/>
            </Link>


            <div className="absolute left-0 top-full hidden pt-4 group-hover:block">

              <div className="w-52 rounded-md bg-white p-3 shadow-lg">


                <Link
                  href="/about"
                  className="block rounded-md px-4 py-2 text-black hover:bg-gray-100"
                >
                  About Us
                </Link>


                <Link
                  href="/team"
                  className="block rounded-md px-4 py-2 text-black hover:bg-gray-100"
                >
                  Our Team
                </Link>


                <Link
                  href="/faqs"
                  className="block rounded-md px-4 py-2 text-black hover:bg-gray-100"
                >
                  FAQs
                </Link>


              </div>

            </div>

          </div>





          {/* WHAT WE THINK */}
          <div className="group relative">

            <Link
              href="#"
              className="flex items-center gap-1 text-black hover:text-indigo-600"
            >
              What we think
              <ChevronDown size={16}/>
            </Link>


            <div className="absolute left-0 top-full hidden pt-4 group-hover:block">


              <div className="w-52 rounded-md bg-white p-3 shadow-lg">


                <Link
                  href="/blog"
                  className="block rounded-md px-4 py-2 text-black hover:bg-gray-100"
                >
                  Blog
                </Link>


                <Link
                  href="/insights"
                  className="block rounded-md px-4 py-2 text-black hover:bg-gray-100"
                >
                  Insights
                </Link>


                <Link
                  href="/case-studies"
                  className="block rounded-md px-4 py-2 text-black hover:bg-gray-100"
                >
                  Case Studies
                </Link>


              </div>


            </div>


          </div>




          {/* CONTACT */}
          <Link
            href="/contact"
            className="text-white text-bold bg-[#0a2840] py-2 px-3 rounded-md hover:text-gray-100"
          >
            Contact
          </Link>


        </div>





        {/* Mobile Button */}
        <button
          className="text-black md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {
            isOpen
            ? <X size={28}/>
            : <Menu size={28}/>
          }
        </button>


      </div>





      {/* Mobile Menu */}
      {
        isOpen && (

          <div className="border-t bg-white md:hidden">

            <div className="flex flex-col gap-4 px-6 py-5">


              <Link
                href="/what-we-do"
                className="text-black"
              >
                What we do
              </Link>


              <Link
                href="/who-we-are"
                className="text-black"
              >
                Who we are
              </Link>


              <Link
                href="/what-we-think"
                className="text-black"
              >
                What we think
              </Link>


              <Link
                href="/contact"
                className="text-black"
              >
                Contact
              </Link>


            </div>

          </div>

        )
      }


    </nav>
  );
}