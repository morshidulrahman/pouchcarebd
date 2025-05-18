"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Blog", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-[#100A08] border-b border-b-[#2a1c17] transition-all duration-300"
      style={{
        backgroundImage: "url('/pouchbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 relative">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-white">
          Pouch<span className="text-orange-400">Care</span>
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors duration-200 pb-1 border-b-2 ${
                  pathname === link.href
                    ? "border-orange-500 text-orange-400"
                    : "border-transparent hover:text-orange-400 hover:border-orange-500"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 z-[99] transition-opacity duration-300 ${
          menuOpen ? "block" : "hidden"
        } md:hidden`}
        onClick={() => setMenuOpen(false)}
      ></div>
      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col bg-[#181210] transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        style={{ willChange: "transform" }}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#2a1c17]">
          <span className="text-2xl font-bold text-white">
            Pouch<span className="text-orange-400">Care</span>
          </span>
          <button
            className="text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col space-y-8 text-white font-medium px-8 py-10 text-lg">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-orange-400"
                    : "hover:text-orange-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
