// components/Footer.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#023F5E] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-bold text-lg">SMB Gadgets</span>
          </Link>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Powering a brighter, sustainable future with reliable solar
            solutions, inverters, and batteries trusted by thousands worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/products/low-capacity" className="hover:text-white transition">
                Low Capacity Inverters
              </Link>
            </li>
            <li>
              <Link href="/products/high-capacity" className="hover:text-white transition">
                High Capacity Inverters
              </Link>
            </li>
            <li>
              <Link href="/products/batteries" className="hover:text-white transition">
                Batteries
              </Link>
            </li>
            <li>
              <Link href="/products/solar-panels" className="hover:text-white transition">
                Solar Panels
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-300">📍 Abuja, Nigeria</p>
          <p className="text-gray-300">📞 +234 800 123 4567</p>
          <p className="text-gray-300">✉️ support@smbgadgets.com</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20">
              <FaFacebookF />
            </Link>
            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20">
              <FaTwitter />
            </Link>
            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20">
              <FaInstagram />
            </Link>
            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} SMB Gadgets. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
