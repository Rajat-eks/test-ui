"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "@/@/component/assets/logo1.png"; // Update this path as per your structure

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Services", href: "/services" },
    { label: "Repay Loan", href: "/repay-loan" },
    { label: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Loan Plus Logo"
            width={150}
            height={50}
            className="h-auto w-auto object-contain"
          />
        </Link>

        {/* Desktop / Tablet Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 whitespace-nowrap">
          <nav className="flex flex-wrap gap-4 lg:gap-6 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  scrolled ? "text-black" : "text-white"
                } hover:text-blue-600`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/apply"
            className="bg-blue-800 hover:bg-blue-600 text-white font-semibold py-2 px-4 lg:px-6 rounded-full transition duration-300"
          >
            APPLY NOW
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className={`${scrolled ? "text-black" : "text-white"}`}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-6 space-y-4 shadow-lg transition-all duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-800 text-base font-medium hover:text-blue-600 transition"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            onClick={() => setMenuOpen(false)}
            className="block bg-blue-800 hover:bg-blue-600 text-white text-center font-semibold py-2 px-4 rounded-full shadow-md transition duration-300"
          >
            APPLY NOW
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
