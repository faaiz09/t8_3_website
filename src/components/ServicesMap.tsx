import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Download, Search, CheckCircle2, MapPin, Phone, Globe2, Shield, Bell } from 'lucide-react';
import IndiaMap from './IndiaMap';
import { STATES_DATA } from '../data/serviceLocations';

// Service highlights with enhanced icons and descriptions
const SERVICE_HIGHLIGHTS = [
  {
    name: 'NOCC',
    description: 'Network Operations Control Center - 24/7 monitoring and management',
    icon: <Globe2 className="h-6 w-6 text-red-500" />,
    details: 'Real-time network monitoring, proactive issue detection, and immediate response capabilities'
  },
  {
    name: 'PAN India Service',
    description: 'Comprehensive coverage across all Indian states',
    icon: <MapPin className="h-6 w-6 text-red-500" />,
    details: 'Extensive service network covering major cities and remote locations'
  },
  {
    name: 'Call Management',
    description: 'Dedicated 24/7 customer support center',
    icon: <Phone className="h-6 w-6 text-red-500" />,
    details: 'Professional support team handling inquiries, technical issues, and service requests'
  },
  {
    name: 'Software Support',
    description: 'Expert technical assistance and maintenance',
    icon: <Shield className="h-6 w-6 text-red-500" />,
    details: 'Regular updates, bug fixes, and continuous improvement of software systems'
  },
  {
    name: 'Alerts and Reports',
    description: 'Comprehensive monitoring and analytics',
    icon: <Bell className="h-6 w-6 text-red-500" />,
    details: 'Customized reporting, real-time alerts, and detailed performance analytics'
  },
];

const ServicesMap = () => {
  const [searchPincode, setSearchPincode] = useState('');
  const [activePin, setActivePin] = useState<string | null>(null);
  const [activeState, setActiveState] = useState<string | null>(null);
  const [searchResult, setSearchResult] = useState<{ found: boolean; message: string } | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const handleSearch = () => {
    let found = null;
    let state = null;

    for (const stateData of STATES_DATA) {
      const pincode = stateData.pincodes.find(p => p.code === searchPincode);
      if (pincode) {
        found = pincode;
        state = stateData;
        break;
      }
    }

    if (found && state) {
      setActivePin(searchPincode);
      setActiveState(state.code);
      setSearchResult({ 
        found: true, 
        message: `Service available in ${found.city}, ${state.name}` 
      });
    } else {
      setActivePin(null);
      setActiveState(null);
      setSearchResult({ found: false, message: 'Service not available in this area' });
    }
  };

  const handleStateClick = (stateCode: string) => {
    setActiveState(activeState === stateCode ? null : stateCode);
    setActivePin(null);
    setSearchResult(null);
  };

  const handleDownloadExcel = () => {
    const link = document.createElement('a');
    link.href = '/assets/documents/service_map.xlsx';
    link.download = 'service_locations.xlsx';
    link.click();
  };

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-8">
      {/* Service Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
          Our Services
        </h3> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_HIGHLIGHTS.map((service) => (
            <motion.div
              key={service.name}
              className="relative group"
              onMouseEnter={() => setHoveredService(service.name)}
              onMouseLeave={() => setHoveredService(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900/20">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                      {service.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <AnimatePresence>
                  {hoveredService === service.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="mt-4 text-sm text-gray-500 dark:text-gray-400"
                    >
                      {service.details}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Search and Download Section */}
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-center gap-6 bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex-1 w-full md:w-auto">
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter pincode to check service availability"
              value={searchPincode}
              onChange={(e) => setSearchPincode(e.target.value)}
              className="w-full pr-12 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 focus:border-red-500 dark:focus:border-red-500 transition-colors duration-200"
            />
            <Button
              onClick={handleSearch}
              className="absolute right-0 top-0 h-full px-3 bg-red-600 hover:bg-red-700 transition-colors duration-200"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <AnimatePresence mode="wait">
            {searchResult && (
              <motion.p
                key={searchResult.message}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mt-2 text-sm ${
                  searchResult.found ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}
              >
                {searchResult.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <Button
          onClick={handleDownloadExcel}
          className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 px-6 py-2 rounded-lg transform hover:scale-105 transition-all duration-200"
        >
          <Download className="h-4 w-4" />
          Download Service Areas
        </Button>
      </motion.div>

      {/* Map Section */}
      <motion.div 
        className="relative w-full h-[600px] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <IndiaMap 
          activePincode={activePin}
          states={STATES_DATA}
          onStateClick={handleStateClick}
          activeState={activeState}
        />
      </motion.div>
    </div>
  );
};

export default ServicesMap; 