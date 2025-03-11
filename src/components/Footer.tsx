import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";
import PrivacyPolicyModal from "./modals/PrivacyPolicyModal";
import TermsOfServiceModal from "./modals/TermsOfServiceModal";
import CookiePolicyModal from "./modals/CookiePolicyModal";
import logo from "@/assets/img/logo.png";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const particlesRef = useRef<HTMLDivElement>(null);

  // 3D particles effect
  useEffect(() => {
    if (!particlesRef.current) return;

    const container = particlesRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Create canvas
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Create particles
    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.5,
        color: "rgba(255, 255, 255, 0.3)",
        speedX: Math.random() * 0.3 - 0.15,
        speedY: Math.random() * 0.3 - 0.15,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      // Connect particles with lines if they're close enough
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 70) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, []);

  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { name: "Software Development", href: "#products" },
        { name: "Banking Kiosks", href: "#products" },
        { name: "Digital Transformation", href: "#services" },
        { name: "Cloud Migration", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "/careers" },
        { name: "News", href: "#" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Case Studies", href: "#clients" },
        { name: "Documentation", href: "#" },
        { name: "Support", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/share/1BPeKHmUKG/?mibextid=wwXIfr", rel: "noopener noreferrer", target: "_blank", label: "Facebook" },
    // { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Youtube className="h-5 w-5" />, href: "https://www.youtube.com/@technocraftsautomation", rel: "noopener noreferrer", target: "_blank", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/technocrafts-kiosk-and-automation-division/", rel: "noopener noreferrer", target: "_blank", label: "LinkedIn" },
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      text: "hr@technocrafts.net",
      href: "mailto:hr@technocrafts.net",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      text: "02228479999",
      href: "tel:02228479999",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      text: "T8, Renaissance Industrial Smart City, Bhiwandi, Vashere",
      href: "https://maps.app.goo.gl/TZk4ciXYF8Kcg4kz9",
      target:"_blank",
      rel:"noopener noreferrer"
    },
  ];

  return (
    <footer
      className={cn(
        "bg-gray-900 dark:bg-gray-950 text-white py-12 px-4 relative overflow-hidden transition-colors duration-300",
        className,
      )}
      id="footer"
    >
      {/* 3D Particles Background */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* 3D Floating Elements */}
      {[1, 2, 3].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-red-500/10"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: "blur(40px)",
          }}
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 10 + 10,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="flex items-center mb-4 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={logo} alt="T8 Logo" className="h-10 w-auto mr-2" />
              <span className="text-2xl font-bold text-white">T8</span>
            </motion.a>
            <p className="text-gray-400 mt-4 max-w-md">
              Transforming financial institutions with innovative software and
              kiosk solutions that enhance customer experience and operational
              efficiency.
            </p>

            {/* Contact Information */}
            <div className="mt-6 space-y-3">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="mr-2">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>

            {/* Social Media Links with 3D effects */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 dark:bg-gray-900 p-2 rounded-full text-gray-400 hover:text-white hover:bg-red-600 transition-colors duration-300"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px rgba(239, 68, 68, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links with 3D hover effects */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors inline-block"
                      whileHover={{ x: 5, color: "#ffffff" }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar with 3D separator */}
        <motion.div
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* 3D separator line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

          <p className="text-gray-500 text-sm">
            © {currentYear} T8. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <PrivacyPolicyModal
              trigger={
                <motion.button
                  className="text-gray-500 hover:text-white text-sm"
                  whileHover={{ y: -2 }}
                >
                  Privacy Policy
                </motion.button>
              }
            />
            <TermsOfServiceModal
              trigger={
                <motion.button
                  className="text-gray-500 hover:text-white text-sm"
                  whileHover={{ y: -2 }}
                >
                  Terms of Service
                </motion.button>
              }
            />
            <CookiePolicyModal
              trigger={
                <motion.button
                  className="text-gray-500 hover:text-white text-sm"
                  whileHover={{ y: -2 }}
                >
                  Cookie Policy
                </motion.button>
              }
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
