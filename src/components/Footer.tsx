import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface FooterProps {
  companyName?: string;
  companyLogo?: React.ReactNode;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  navigationLinks?: {
    title: string;
    href: string;
  }[];
}

const Footer = ({
  companyName = "T8",
  companyLogo = (
    <div className="w-12 h-12">
      <img
        src="https://i.ibb.co/Qj1bRfL/t8-logo.png"
        alt="T8 Logo"
        className="w-full h-full object-contain"
      />
    </div>
  ),
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  contactInfo = {
    email: "contact@t8banking.com",
    phone: "+91 123 456 7890",
    address: "T8 Headquarters, Maharashtra, India",
  },
  navigationLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Solutions", href: "/solutions" },
    { title: "Clients", href: "/clients" },
    { title: "Contact", href: "/contact" },
  ],
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-200 py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              {companyLogo}
              <span className="text-xl font-semibold">{companyName}</span>
            </div>
            <p className="text-gray-600 text-sm">
              Revolutionizing Banking with Intelligent Software & Kiosks
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Facebook size={20} />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-gray-500 hover:text-blue-400 transition-colors"
                >
                  <Twitter size={20} />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-500 hover:text-pink-600 transition-colors"
                >
                  <Instagram size={20} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-500 hover:text-blue-700 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-red-600 transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.email && (
                <li className="flex items-start space-x-2">
                  <Mail size={18} className="text-gray-500 mt-0.5" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-600 hover:text-red-600 transition-colors text-sm"
                  >
                    {contactInfo.email}
                  </a>
                </li>
              )}
              {contactInfo.phone && (
                <li className="flex items-start space-x-2">
                  <Phone size={18} className="text-gray-500 mt-0.5" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-600 hover:text-red-600 transition-colors text-sm"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
              )}
              {contactInfo.address && (
                <li className="flex items-start space-x-2">
                  <MapPin size={18} className="text-gray-500 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    {contactInfo.address}
                  </span>
                </li>
              )}
            </ul>
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-600 text-sm">
              Subscribe to our newsletter for the latest updates on our products
              and services.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
              />
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>

        <Separator className="my-8" />

        {/* Client Logos */}
        <div className="py-6">
          <p className="text-sm text-center text-gray-500 mb-4">
            Our Trusted Banking Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img
              src="https://i.ibb.co/VVDgctS/hdfc-bank.png"
              alt="HDFC Bank"
              className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://i.ibb.co/Jt2kGGY/icici-bank.png"
              alt="ICICI Bank"
              className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://i.ibb.co/Lk4Lv1L/axis-bank.png"
              alt="Axis Bank"
              className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://i.ibb.co/0jHvZZ2/canara-bank.png"
              alt="Canara Bank"
              className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {currentYear} {companyName}. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-red-600 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-red-600 transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-red-600 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
