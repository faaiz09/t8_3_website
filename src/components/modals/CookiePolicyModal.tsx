import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Cookie, Info, ExternalLink, Link2, X } from "lucide-react";

interface CookiePolicyModalProps {
  trigger?: React.ReactNode;
}

const CookiePolicyModal = ({ trigger }: CookiePolicyModalProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button variant="link">Cookie Policy</Button>}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto p-0 gap-0 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="flex flex-col">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-700 dark:to-orange-800 p-6 text-white sticky top-0 z-10 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Cookie className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">Cookie Policy</h2>
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

          {/* Content */}
          <div className="p-6 space-y-6 text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <section className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-amber-600 dark:text-amber-400 transition-colors duration-300" />
                    <h3 className="text-xl font-semibold">
                      1. What Are Cookies
                    </h3>
                  </div>
                  <p className="pl-7 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Cookies are small pieces of text sent to your web browser by
                    a website you visit. A cookie file is stored in your web
                    browser and allows the service or a third-party to recognize
                    you and make your next visit easier and the service more
                    useful to you.
                  </p>
                </section>

                <section className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Cookie className="h-5 w-5 text-amber-600 dark:text-amber-400 transition-colors duration-300" />
                    <h3 className="text-xl font-semibold">
                      2. How We Use Cookies
                    </h3>
                  </div>
                  <p className="pl-7 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    When you use and access our website, we may place a number
                    of cookie files in your web browser. We use cookies for the
                    following purposes:
                  </p>
                  <ul className="list-disc pl-12 space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    <li>
                      <strong className="text-gray-900 dark:text-white transition-colors duration-300">
                        Essential cookies:
                      </strong>{" "}
                      These are cookies that are required for the operation of
                      our website. They include, for example, cookies that
                      enable you to log into secure areas of our website.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white transition-colors duration-300">
                        Analytical/performance cookies:
                      </strong>{" "}
                      They allow us to recognize and count the number of
                      visitors and to see how visitors move around our website
                      when they are using it. This helps us to improve the way
                      our website works, for example, by ensuring that users are
                      finding what they are looking for easily.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white transition-colors duration-300">
                        Functionality cookies:
                      </strong>{" "}
                      These are used to recognize you when you return to our
                      website. This enables us to personalize our content for
                      you, greet you by name and remember your preferences (for
                      example, your choice of language or region).
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white transition-colors duration-300">
                        Targeting cookies:
                      </strong>{" "}
                      These cookies record your visit to our website, the pages
                      you have visited and the links you have followed. We will
                      use this information to make our website and the
                      advertising displayed on it more relevant to your
                      interests.
                    </li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Link2 className="h-5 w-5 text-amber-600 dark:text-amber-400 transition-colors duration-300" />
                    <h3 className="text-xl font-semibold">
                      3. Third-Party Cookies
                    </h3>
                  </div>
                  <p className="pl-7 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    In addition to our own cookies, we may also use various
                    third-party cookies to report usage statistics of the
                    service, deliver advertisements on and through the service,
                    and so on.
                  </p>
                </section>

                <section className="space-y-3">
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-amber-600 dark:text-amber-400 transition-colors duration-300" />
                    <h3 className="text-xl font-semibold">
                      4. Where Can You Find More Information About Cookies
                    </h3>
                  </div>
                  <p className="pl-7 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    You can learn more about cookies at the following
                    third-party websites:
                  </p>
                  <ul className="list-disc pl-12 space-y-2">
                    <li>
                      <a
                        href="http://www.allaboutcookies.org/"
                        className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 hover:underline flex items-center gap-1 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        AllAboutCookies
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://www.networkadvertising.org/"
                        className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 hover:underline flex items-center gap-1 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Network Advertising Initiative
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
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

export default CookiePolicyModal;