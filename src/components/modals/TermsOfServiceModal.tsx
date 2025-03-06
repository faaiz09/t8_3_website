import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { FileText, CheckCircle, AlertTriangle, Scale, X } from "lucide-react";

interface TermsOfServiceModalProps {
  trigger?: React.ReactNode;
}

const TermsOfServiceModal = ({ trigger }: TermsOfServiceModalProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button variant="link">Terms of Service</Button>}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 gap-0 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="flex flex-col h-full max-h-[90vh]">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-800 dark:from-purple-800 dark:to-indigo-900 p-6 text-white transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Scale className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">Terms of Service</h2>
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
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 transition-colors duration-300" />
                    <h3 className="text-xl font-semibold">
                      1. Acceptance of Terms
                    </h3>
                  </div>
                  <p className="pl-7 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    By accessing and using T8's website and services, you accept
                    and agree to be bound by the terms and provisions of this
                    agreement. If you do not agree to abide by the above, please
                    do not use this service.
                  </p>
                </section>

                <section className="space-y-3">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400 transition-colors duration-300" />
                    <h3 className="text-xl font-semibold">2. Use License</h3>
                  </div>
                  <p className="pl-7 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Permission is granted to temporarily download one copy of
                    the materials on T8's website for personal, non-commercial
                    transitory viewing only. This is the grant of a license, not
                    a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-12 space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    <li>Modify or copy the materials;</li>
                    <li>
                      Use the materials for any commercial purpose, or for any
                      public display (commercial or non-commercial);
                    </li>
                    <li>
                      Attempt to decompile or reverse engineer any software
                      contained on T8's website;
                    </li>
                    <li>
                      Remove any copyright or other proprietary notations from
                      the materials; or
                    </li>
                    <li>
                      Transfer the materials to another person or "mirror" the
                      materials on any other server.
                    </li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-purple-600 dark:text-purple-400 transition-colors duration-300" />
                    <h3 className="text-xl font-semibold">3. Disclaimer</h3>
                  </div>
                  <p className="pl-7 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    The materials on T8's website are provided on an 'as is'
                    basis. T8 makes no warranties, expressed or implied, and
                    hereby disclaims and negates all other warranties including,
                    without limitation, implied warranties or conditions of
                    merchantability, fitness for a particular purpose, or
                    non-infringement of intellectual property or other violation
                    of rights.
                  </p>
                  <p className="pl-7 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Further, T8 does not warrant or make any representations
                    concerning the accuracy, likely results, or reliability of
                    the use of the materials on its website or otherwise
                    relating to such materials or on any sites linked to this
                    site.
                  </p>
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

export default TermsOfServiceModal;