"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface DesktopMenuProps {
  title: string;
  mainHref: string;
  items: NavItem[];
}

interface MobileMenuItemProps {
  title: string;
  id: string;
  items: NavItem[];
  openSubMenu: string | null;
  setOpenSubMenu: (id: string | null) => void;
  closeMobileMenu: () => void;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenSubMenu(null);
  };

  const menuData = {
    whatWeDo: {
      mainHref: "#", 
      items: [
        { label: "Digital Marketing", href: "/digitalmarketing" },
        { label: "AI Solutions", href: "/ai" },
        { label: "Custom App Development", href: "/customapp" },
        { label: "Salesforce Services", href: "/salesforce" },
      ]
    },
    whoWeAre: {
      mainHref: "#", 
      items: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "FAQs", href: "/faqs" },
      ]
    },
    whatWeThink: {
      mainHref: "#", 
      items: [
        { label: "Blog", href: "/blog" },
        { label: "Insights", href: "/insights" },
        { label: "Case Studies", href: "/case-studies" },
      ]
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-40 w-full border-b bg-white shadow-sm">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-xl font-bold text-black sm:text-2xl">Zikks</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <DesktopMenu title="What we do" mainHref={menuData.whatWeDo.mainHref} items={menuData.whatWeDo.items} />
            <DesktopMenu title="Who we are" mainHref={menuData.whoWeAre.mainHref} items={menuData.whoWeAre.items} />
            <DesktopMenu title="What we think" mainHref={menuData.whatWeThink.mainHref} items={menuData.whatWeThink.items} />

            <Link
              href="/contact"
              className="rounded-md bg-[#0a2840] px-4 py-2 text-white transition hover:bg-[#0f3554]"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Icon Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-black md:hidden relative z-30"
            aria-label="Open menu"
          >
            <Menu size={30} strokeWidth={2} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Rendered outside the nav layer to prevent stacking context freeze) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* Backdrop/Overlay */}
          <div
            className="fixed inset-0 bg-black/40 transition-opacity duration-300"
            onClick={closeMobileMenu}
          />

          {/* Drawer Sidebar Container */}
          <div className="relative w-[85%] max-w-sm h-full bg-white shadow-2xl overflow-y-auto flex flex-col z-10 transition-transform duration-300 ease-in-out">
            {/* Drawer Header */}
            <div className="flex h-16 items-center justify-between border-b px-5 shrink-0">
              <h2 className="text-xl font-bold text-black">Zikks</h2>
              <button
                onClick={closeMobileMenu}
                className="flex h-10 w-10 items-center justify-center rounded-md text-black pointer-events-auto active:scale-95 transition-transform"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Mobile Links Content */}
            <div className="flex-1 flex flex-col gap-5 px-5 py-6">
              <MobileMenuItem
                title="What we do"
                id="what"
                openSubMenu={openSubMenu}
                setOpenSubMenu={setOpenSubMenu}
                closeMobileMenu={closeMobileMenu}
                items={menuData.whatWeDo.items}
              />

              <MobileMenuItem
                title="Who we are"
                id="who"
                openSubMenu={openSubMenu}
                setOpenSubMenu={setOpenSubMenu}
                closeMobileMenu={closeMobileMenu}
                items={menuData.whoWeAre.items}
              />

              <MobileMenuItem
                title="What we think"
                id="think"
                openSubMenu={openSubMenu}
                setOpenSubMenu={setOpenSubMenu}
                closeMobileMenu={closeMobileMenu}
                items={menuData.whatWeThink.items}
              />

              {/* Contact Link */}
              <div className="border-t pt-4 mt-auto">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full rounded-md bg-[#0a2840] px-3 py-3 text-center font-medium text-white transition hover:bg-[#0f3554] active:bg-[#0c1b2b] pointer-events-auto"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function DesktopMenu({ title, mainHref, items }: DesktopMenuProps) {
  return (
    <div className="group relative">
      <Link href={mainHref} className="flex items-center gap-1 text-black hover:text-indigo-600 py-2">
        {title}
        <ChevronDown size={16} />
      </Link>

      <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
        <div className="w-60 rounded-md bg-white p-3 shadow-lg border">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block rounded-md px-4 py-2 text-black hover:bg-gray-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMenuItem({
  title,
  id,
  items,
  openSubMenu,
  setOpenSubMenu,
  closeMobileMenu,
}: MobileMenuItemProps) {
  const isExpanded = openSubMenu === id;

  return (
    <div className="border-b border-gray-100 pb-3 last:border-0 block w-full">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpenSubMenu(isExpanded ? null : id);
        }}
        className="flex w-full items-center justify-between py-2 text-left pointer-events-auto select-none"
      >
        <span className="text-base font-medium text-black">
          {title}
        </span>
        <ChevronDown
          size={18}
          className={`text-gray-500 transform transition-transform duration-200 ${
            isExpanded ? "rotate-180 text-black" : ""
          }`}
        />
      </button>

      {isExpanded && (
        <div className="ml-3 mt-1 flex flex-col gap-3 border-l-2 border-gray-100 pl-3 transition-all duration-200">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={closeMobileMenu}
              className="text-sm py-2 text-gray-600 hover:text-black active:text-indigo-600 block w-full pointer-events-auto"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}