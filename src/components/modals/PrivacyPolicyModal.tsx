import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Shield, Lock, Eye, FileText, X } from "lucide-react";

interface PrivacyPolicyModalProps {
  trigger?: React.ReactNode;
}

const PrivacyPolicyModal = ({ trigger }: PrivacyPolicyModalProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button variant="link">Privacy Policy</Button>}
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0 gap-0 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="flex flex-col h-full">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 p-6 text-white transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Shield className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">Privacy Policy</h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                className="text-white hover:bg-white/20 rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-white/80 mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto p-6 space-y-6 flex-grow text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <section className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-300" />
                    <h3 className="text-xl font-semibold">1. Introduction</h3>
                  </div>
                  <p className="pl-7 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    T8 ("we", "our", or "us") is committed to protecting your
                    privacy. This Privacy Policy explains how we collect, use,
                    disclose, and safeguard your information when you visit our
                    website or use our services.
                  </p>
                </section>

                <section className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-300" />
                    <h3 className="text-xl font-semibold">
                      2. Information We Collect
                    </h3>
                  </div>
                  <p className="pl-7 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    We may collect information about you in a variety of ways.
                    The information we may collect includes:
                  </p>
                  <ul className="list-disc pl-12 space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    <li>
                      <strong className="text-gray-900 dark:text-white transition-colors duration-300">
                        Personal Data:
                      </strong>{" "}
                      Personally identifiable information, such as your name,
                      email address, telephone number, and other similar contact
                      data that you voluntarily give to us when you register or
                      when you choose to participate in various activities
                      related to our services.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white transition-colors duration-300">
                        Derivative Data:
                      </strong>{" "}
                      Information our servers automatically collect when you
                      access our website, such as your IP address, browser type,
                      operating system, access times, and the pages you have
                      viewed.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white transition-colors duration-300">
                        Financial Data:
                      </strong>{" "}
                      Financial information, such as data related to your
                      payment method (e.g., valid credit card number, card
                      brand, expiration date) that we may collect when you
                      purchase our services.
                    </li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-300" />
                    <h3 className="text-xl font-semibold">
                      3. Use of Your Information
                    </h3>
                  </div>
                  <p className="pl-7 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Having accurate information about you permits us to provide
                    you with a smooth, efficient, and customized experience.
                    Specifically, we may use information collected about you via
                    our website to:
                  </p>
                  <ul className="list-disc pl-12 space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    <li>Create and manage your account.</li>
                    <li>Process transactions.</li>
                    <li>Send you emails regarding your account or order.</li>
                    <li>
                      Fulfill and manage purchases, orders, payments, and other
                      transactions related to our services.
                    </li>
                    <li>
                      Increase the efficiency and operation of our website and
                      services.
                    </li>
                    <li>
                      Monitor and analyze usage and trends to improve your
                      experience with our website and services.
                    </li>
                    <li>Notify you of updates to our website and services.</li>
                    <li>Resolve disputes and troubleshoot problems.</li>
                  </ul>
                </section>

                {/* Additional sections would continue here */}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;