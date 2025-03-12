import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import logo from "@/assets/img/logo.png";

interface NavbarProps {
  links?: { name: string; href: string }[];
}

const Navbar = ({
  links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Products", href: "/#products" },
    { name: "Clients", href: "/#clients" },
    { name: "Services", href: "/#services" },
    { name: "Careers", href: "/careers" },
  ],
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);

    // Only apply smooth scrolling for hash links
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("/")) {
      // Use window.location for full page navigation
      window.location.href = href;
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white dark:bg-gray-900 shadow-md py-2" : "bg-transparent py-4"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={logo} alt="T8 Logo" className="h-10 w-auto" />
            <span
              className={`ml-2 font-bold text-xl ${isScrolled ? "text-gray-800 dark:text-white" : "text-red-600"} transition-colors duration-300`}
            >
              T<span className="animate-pulse dark:text-white text-red-600">8</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className={`font-medium hover:text-red-600 transition-colors ${isScrolled ? "text-gray-800 dark:text-gray-200" : "text-red-600 dark:text-gray-200 hover:text-black"}`}
                whileHover={{ y: -2 }}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </motion.a>
            ))}
            <ThemeToggle className="mr-2" />
            <Button
              className="bg-red-600 hover:bg-red-700 text-white hover:scale-105 transition-all duration-300"
              onClick={(e) => handleLinkClick(e as any, "#contact")}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <motion.button
              className="text-gray-800 dark:text-white focus:outline-none transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <X
                  className={
                    isScrolled ? "text-gray-800 dark:text-white" : "text-white"
                  }
                  size={24}
                />
              ) : (
                <Menu
                  className={
                    isScrolled ? "text-gray-800 dark:text-white" : "text-white"
                  }
                  size={24}
                />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-gray-900 z-40 pt-20 px-4 transition-colors duration-300"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 mt-8">
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-800 dark:text-white font-medium text-lg py-2 border-b border-gray-100 dark:border-gray-700 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                </motion.a>
              ))}
              <Button
                className="bg-red-600 hover:bg-red-700 text-white mt-4 w-full hover:scale-105 transition-all duration-300"
                onClick={(e) => handleLinkClick(e as any, "#contact")}
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
