import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  Award,
} from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Team", href: "/team" },
  { name: "Latest Blog", href: "/blogs" },
];

const services = [
  { name: "Business Development", href: "/services" },
  { name: "Digital Marketing", href: "/services" },
  { name: "Investment Strategies", href: "/services" },
  { name: "Market Analysis", href: "/services" },
  { name: "Project Management", href: "/services" },
  { name: "Web Development", href: "/services" },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: <Facebook size={16} /> },
  { name: "Twitter", href: "#", icon: <Twitter size={16} /> },
  { name: "Linkedin", href: "#", icon: <Linkedin size={16} /> },
];

const Footer = () => {
  return (
    <footer
      className="w-full bg-[#181210] pt-14 pb-6 px-4 text-white relative"
      style={{
        background: "radial-gradient(ellipse at top, #2d1808 0%, #181210 80%)",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & Contact */}
        <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <span className="text-3xl font-extrabold tracking-tight">
              Pouch<span className="text-orange-400">Care</span>
            </span>
          </div>
          <div className="mb-2 text-sm">
            <span className="font-semibold text-orange-400">24/7 CALL US</span>
            <br />
            <span>+8809638421042</span>
          </div>
          <div className="mb-4 text-sm">
            <span className="font-semibold text-orange-400">24/7 EMAIL US</span>
            <br />
            <span>Contact@pouchcare.com</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="flex items-center gap-1 px-2 py-1 bg-[#23201d] rounded text-sm hover:bg-orange-500 transition"
              >
                {item.icon} {item.name}
              </Link>
            ))}
          </div>
        </div>
        {/* Quicklinks */}
        <div className="flex-1 min-w-[200px] mb-8 md:mb-0">
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="text-orange-400 text-xl">•</span> Quicklinks
          </h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="hover:text-orange-400 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Our Services */}
        <div className="flex-1 min-w-[200px] mb-8 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="hover:text-orange-400 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Get Updates */}
        <div className="flex-1 min-w-[220px]">
          <h4 className="text-lg font-semibold mb-4">Get Updates</h4>
          <p className="text-sm mb-4 text-gray-300">
            Welcome to Seoinux. Signup For Our Latest news & Article. We Won't
            give you spam mail and irrelevant messages.
          </p>
          <form className="flex items-center mb-3">
            <input
              type="email"
              placeholder="Email Address"
              className="px-3 py-2 rounded-l bg-[#23201d] text-white text-sm outline-none border-none"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded-r text-white"
            >
              <Send size={18} />
            </button>
          </form>
          <div className="flex items-center gap-2 text-sm text-orange-400">
            <Award size={16} />
            <span>Best Agency Award Winner – Business Agency</span>
          </div>
        </div>
      </div>
      <div className="border-t border-[#23201d] mt-10 pt-4 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} PouchCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
