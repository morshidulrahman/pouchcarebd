"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-[#100A08] backdrop-blur border-b border-b-[#2a1c17] group transition-all duration-300"
      style={{
        backgroundImage:
          "url('https://wordpress.zozothemes.com/seoinux/wp-content/uploads/sites/33/2024/12/2c72c316-1851-43cd-9145-fae5f176f7b6.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 relative z-10">
        <span className="text-3xl font-bold text-white">
          Pouch<span className="text-orange-400">Care</span>
        </span>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
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
        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-40 z-50 transition-opacity duration-300 ${
            menuOpen ? "block" : "hidden"
          } md:hidden`}
          onClick={() => setMenuOpen(false)}
        ></div>
        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-0 right-0 h-screen w-64 bg-black shadow-lg z-50 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
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
          <ul className="flex flex-col space-y-6 text-white font-medium px-6 py-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
