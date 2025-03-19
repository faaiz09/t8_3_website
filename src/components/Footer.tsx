import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Confetti from "./animations/Confetti";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const particlesRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const [keySequence, setKeySequence] = useState<string>("");
  const [showEasterEgg, setShowEasterEgg] = useState<boolean>(false);
  const [copyrightClicks, setCopyrightClicks] = useState<number>(0);
  const [konamiSequence, setKonamiSequence] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Easter egg key sequence handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // T8DEV sequence
      const newSequence = keySequence + e.key.toUpperCase();
      setKeySequence(newSequence.slice(-5));

      // Konami code sequence
      const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
      if (e.keyCode === konamiCode[konamiSequence]) {
        setKonamiSequence(prev => prev + 1);
      } else {
        setKonamiSequence(0);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keySequence, konamiSequence]);
  
  // Check for the secret sequences
  useEffect(() => {
    if (keySequence === "T8DEV" || konamiSequence === 10) {
      setShowEasterEgg(true);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
      
      // Hide the easter egg after 5 seconds
      const timer = setTimeout(() => {
        setShowEasterEgg(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [keySequence, konamiSequence]);

  // Handle copyright clicks
  const handleCopyrightClick = () => {
    setCopyrightClicks(prev => prev + 1);
    if (copyrightClicks + 1 === 5) {
      setShowEasterEgg(true);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
      setCopyrightClicks(0);
    }
  };

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
    { icon: <InstagramLogoIcon className="h-5 w-5" />, href: "https://www.instagram.com/technocraftscare?igsh=dnpsMnFjbTAzdW53", rel: "noopener noreferrer", target: "_blank", label: "Instagram" },
    { icon: <Youtube className="h-5 w-5" />, href: "https://www.youtube.com/@technocraftsautomation", rel: "noopener noreferrer", target: "_blank", label: "Youtube" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/technocrafts-kiosk-and-automation-division/", rel: "noopener noreferrer", target: "_blank", label: "LinkedIn" },
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      text: "sales@technocrafts.co.in",
      href: "mailto:sales@technocrafts.co.in",
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
      ref={footerRef}
      className={cn(
        "relative bg-gray-900 text-white py-12 overflow-hidden",
        className
      )}
    >
      {/* Audio element for easter egg sound */}
      <audio ref={audioRef} src="/assets/sounds/easter-egg.mp3" preload="auto" />

      {/* Easter Egg Modal */}
      <AnimatePresence>
        {showEasterEgg && (
          <>
            <Confetti isActive={true} />
            <motion.div 
              className="fixed inset-0 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-black/60" onClick={() => setShowEasterEgg(false)} />
              <motion.div 
                className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 p-1 rounded-lg relative z-10"
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0.8, rotate: 5 }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                <div className="bg-gray-900 rounded-md p-8 flex flex-col items-center">
                  <h3 className="text-2xl font-bold mb-2 text-white">Easter Egg Found! 🎉</h3>
                  <p className="text-gray-300 mb-4">This website was designed and developed by:</p>
                  <p className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 animate-gradient">
                    Faaiz Akhtar
                  </p>
                  <p className="text-gray-400 mt-4 italic text-center max-w-md">
                    "Coding is like humor. When you have to explain it, it's bad."
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Try typing "T8DEV", the Konami code (↑↑↓↓←→←→BA), or clicking the copyright year 5 times to see this again!
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
                  rel={social.rel}
                  target={social.target}
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

          {/* Certifications and Partnerships */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Certifications & Partnerships</h3>
            <div className="flex items-center space-x-6">
              <motion.a
                href="https://www.makeinindia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/assets/images/make-in-india.png"
                  alt="Make in India Logo"
                  className="h-16 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 hover:brightness-100 transition-opacity duration-300"
                />
                <div className="absolute -bottom-6 left-0 right-0 text-center text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Make in India
                </div>
              </motion.a>
            </div>
          </div>
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
            © <span onClick={handleCopyrightClick} className="cursor-pointer hover:text-white transition-colors">{currentYear}</span> T8. All rights reserved.
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
