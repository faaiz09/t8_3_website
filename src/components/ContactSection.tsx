import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components//ui/card";
import { Button } from "../components//ui/button";
import { Input } from "../components//ui/input";
import { Textarea } from "../components//ui/textarea";
import { Label } from "../components/ui/label";
import { Mail, Phone, Send, MapIcon } from "lucide-react";
import ParticleEffects from "../components/animations/ParticleEffects";
import InteractiveMap from "./InteractiveMap";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  email?: string;
  phone?: string;
  address?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title = "Get in Touch",
  subtitle = "Have questions about our banking solutions? Our team is here to help.",
  email = "hr@technocrafts.net",
  phone = "+91-9987571950",
  address = "WB-VII, Unit No. 1 to 10, Renaissance Industrial Smart City, Bhiwandi, Vashere, Maharashtra 421302",
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleChange);
    return () => darkModeMediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section
      className="py-20 px-4 md:px-8 bg-white dark:bg-gray-950 relative transition-colors duration-300"
      id="contact"
    >
      {/* Background particle effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ParticleEffects
          color={isDarkMode ? "#42A5F5" : "#0D47A1"}
          opacity={1}
          particleCount={100}
          width="100%"
          height="100%"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#0D47A1] dark:text-blue-400 mb-4 transition-colors duration-300"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-none shadow-lg bg-gradient-to-br from-[#0D47A1] to-[#42A5F5] text-white dark:from-blue-900 dark:to-blue-700 transition-colors duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-white/80 mb-8">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-white/80">{phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-white/80">{email}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 mr-4 mt-1">
                      <MapIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-white/80">{address}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/20">
                  <h4 className="font-medium mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/share/1BPeKHmUKG/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    {/* <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a> */}
                    <a
                      href="https://www.youtube.com/@technocraftsautomation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.615 3.184C18.4 2.8 12 2.8 12 2.8s-6.4 0-7.615.384C3.2 3.6 2.4 4.4 2.015 5.615 1.6 6.8 1.6 12 1.6 12s0 5.2.415 6.385c.384 1.215 1.184 2.015 2.4 2.4C5.6 21.2 12 21.2 12 21.2s6.4 0 7.615-.415c1.215-.384 2.015-1.184 2.4-2.4.415-1.185.415-6.385.415-6.385s0-5.2-.415-6.385c-.384-1.215-1.184-2.015-2.4-2.4zM9.6 15.2V8.8l6.4 3.2-6.4 3.2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/technocrafts-kiosk-and-automation-division/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
              <CardContent className="p-8">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="dark:text-white transition-colors duration-300"
                      >
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="First"
                        className="border-gray-300 focus:border-[#0D47A1] focus:ring-[#0D47A1] dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="dark:text-white transition-colors duration-300"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Last"
                        className="border-gray-300 focus:border-[#0D47A1] focus:ring-[#0D47A1] dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="dark:text-white transition-colors duration-300"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="first.last@example.com"
                        className="border-gray-300 focus:border-[#0D47A1] focus:ring-[#0D47A1] dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="dark:text-white transition-colors duration-300"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+91 555-123-4567"
                        className="border-gray-300 focus:border-[#0D47A1] focus:ring-[#0D47A1] dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <Label
                      htmlFor="subject"
                      className="dark:text-white transition-colors duration-300"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      className="border-gray-300 focus:border-[#0D47A1] focus:ring-[#0D47A1] dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-300"
                    />
                  </div>

                  <div className="space-y-2 mb-6">
                    <Label
                      htmlFor="message"
                      className="dark:text-white transition-colors duration-300"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Write your message here..."
                      className="min-h-[150px] border-gray-300 focus:border-[#0D47A1] focus:ring-[#0D47A1] dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-300"
                    />
                  </div>

                  <div className="flex items-center space-x-2 mb-6">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="rounded border-gray-300 text-[#0D47A1] focus:ring-[#0D47A1] dark:border-gray-600 dark:bg-gray-700 transition-colors duration-300"
                    />
                    <Label
                      htmlFor="privacy"
                      className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300"
                    >
                      I agree to the{" "}
                      <a
                        href="#footer"
                        className="text-[#0D47A1] dark:text-blue-400 hover:underline transition-colors duration-300"
                      >
                        privacy policy
                      </a>
                      .
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#0D47A1] hover:bg-[#0D47A1]/90 text-white py-6 h-auto text-lg flex items-center justify-center gap-2 transition-colors duration-300"
                  >
                    Send Message
                    <Send className="h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Interactive Map */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* <h3 className="text-2xl font-bold text-center mb-8 text-[#0D47A1] dark:text-blue-400 transition-colors duration-300">
            Our Location
          </h3> */}
          {/* <InteractiveMap height="400px" /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
