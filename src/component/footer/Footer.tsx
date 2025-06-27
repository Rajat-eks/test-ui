"use client";

import Image from "next/image";
import logo from "@/@/component/assets/logo1.png";

import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const footerLinks = [
  {
    title: "For Our Users",
    links: [
      { label: "Terms and Conditions", href: "/terms" },
      { label: "Interest Rate Policy", href: "/interest-rate-policy" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Credit Policy", href: "/credit-policy" },
      { label: "Lending Policy", href: "/lending-policy" },
      { label: "Refund and Cancellation", href: "/refund-policy" },
      { label: "Disclaimer and Disclosure", href: "/disclaimer" },
      { label: "Fair Practice Code", href: "/fair-practice-code" },
    ],
  },
  {
    title: "Loan Services",
    links: [
      { label: "Instant Personal Loans", href: "/instant-personal-loan" },
      { label: "Loan On Aadhaar Card", href: "/aadhaar-loan" },
      { label: "Personal Loan for Salaried", href: "/salaried-loan" },
      { label: "Credit Score Personal Loans", href: "/credit-score-loan" },
      { label: "Our Presence", href: "/locations" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Our Partner", href: "/partners" },
      { label: "Our Sourcing Partners", href: "/sourcing-partners" },
      { label: "Refund and Cancellation", href: "/refund-policy" },
      { label: "Grievance Redressal", href: "/grievance" },
      { label: "Grievance Redressal Policy", href: "/grievance-policy" },
      // { label: "R.K. Bansal Finance", href: "/rkb-finance" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0a1544] text-white px-6 pt-16 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Company Info Section */}
        <motion.div
          className="md:col-span-2 space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Image src={logo} alt="Loan Plus Logo" width={150} height={60} />
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Loan Plus is a next-generation fintech platform dedicated to
            simplifying the borrowing experience for individuals and small
            businesses. With a focus on speed, security, and transparency,
            Loan Plus offers instant personal and business loans through a
            completely digital process.
          </p>
          <div>
            <h4 className="font-semibold mb-1">Quick Connect</h4>
            <div className="text-gray-300 text-sm space-y-1">
              <p className="flex items-center gap-2">
                <FaPhoneAlt /> +91 000 00 00000
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope /> info@loanplus.com
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-4 text-xl text-white">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank"><FaFacebookF /></a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank"><FaInstagram /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank"><FaLinkedinIn /></a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank"><FaXTwitter /></a>
            <a href="https://youtube.com" aria-label="YouTube" target="_blank"><FaYoutube /></a>
          </div>
        </motion.div>

        {/* Footer Navigation Links */}
        {footerLinks.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-400 mt-12 pt-6 border-t border-gray-700">
        © 2025 Loan Plus Private Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
