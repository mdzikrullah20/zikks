"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Zikks Logo"
            width={56}
            height={56}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/what-we-do" className="text-gray-700 hover:text-indigo-600">
            What we do
          </Link>
          <Link href="/who-we-are" className="text-gray-700 hover:text-indigo-600">
            Who we are
          </Link>
          <Link href="/what-we-think" className="text-gray-700 hover:text-indigo-600">
            What we think
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-indigo-600">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="flex flex-col space-y-4 px-6 py-5">
            <Link href="/what-we-do" onClick={() => setIsOpen(false)}>
              What we do
            </Link>
            <Link href="/who-we-are" onClick={() => setIsOpen(false)}>
              Who we are
            </Link>
            <Link href="/what-we-think" onClick={() => setIsOpen(false)}>
              What we think
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}