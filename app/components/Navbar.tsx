"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Load Calculator", href: "/calculator" },
    { name: "Services", href: "/services" },
    { name: "Partners", href: "/partners" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#023F5E]/90 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="SMB" width={40} height={40} />
          <span className="font-bold text-lg text-white">SMB</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-200 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#023F5E] shadow hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#023F5E]/95 backdrop-blur-md shadow-lg">
          <ul className="flex flex-col items-center py-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-200 hover:text-white text-lg transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-[#023F5E] shadow hover:bg-gray-100 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
