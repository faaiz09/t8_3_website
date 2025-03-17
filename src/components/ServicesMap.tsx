import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Download, Search, CheckCircle2, MapPin, Phone, Globe2, Shield, Bell, Info, X } from 'lucide-react';
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
  const [showGuide, setShowGuide] = useState(true);

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
    setShowGuide(false);
  };

  const handleDownloadExcel = () => {
    const link = document.createElement('a');
    link.href = '/assets/documents/service_map.xlsx';
    link.download = 'service_locations.xlsx';
    link.click();
  };

  // Get active state data
  const activeStateData = STATES_DATA.find(state => state.code === activeState);

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
        className="flex flex-col md:flex-row justify-between items-center gap-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 p-6 rounded-xl shadow-md"
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
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
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
              <motion.div
                key={searchResult.message}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mt-2 flex items-center gap-2 ${
                  searchResult.found ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}
              >
                {searchResult.found ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <X className="h-4 w-4" />
                )}
                <p className="text-sm">{searchResult.message}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Button
          onClick={handleDownloadExcel}
          className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 px-6 py-2 rounded-lg transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
        >
          <Download className="h-4 w-4" />
          Download Service Areas
        </Button>
      </motion.div>

      {/* Map Section with Title */}
      <div className="space-y-4">
        <motion.div 
          className="flex justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Service Coverage Map
          </h3>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={() => setShowGuide(!showGuide)}
          >
            <Info className="h-4 w-4 mr-1" />
            {showGuide ? 'Hide Guide' : 'Show Guide'}
          </Button>
        </motion.div>
        
        <motion.div 
          className="relative w-full h-[600px] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Interactive Guide Overlay */}
          <AnimatePresence>
            {showGuide && (
              <motion.div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md shadow-2xl"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">How to Use the Map</h3>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      onClick={() => setShowGuide(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="bg-red-100 dark:bg-red-900/20 p-1 rounded-full mt-0.5">
                        <MapPin className="h-4 w-4 text-red-600 dark:text-red-400" />
                      </div>
                      <p className="text-sm">Click on any state to see service locations within that state</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-yellow-100 dark:bg-yellow-900/20 p-1 rounded-full mt-0.5">
                        <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
                      </div>
                      <p className="text-sm">Yellow dots represent cities where our services are available</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-gray-100 dark:bg-gray-700 p-1 rounded-full mt-0.5">
                        <Search className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </div>
                      <p className="text-sm">Use the search box to check if your pincode is covered</p>
                    </li>
                  </ul>
                  <Button 
                    className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => setShowGuide(false)}
                  >
                    Got it
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <IndiaMap 
            activePincode={activePin}
            states={STATES_DATA}
            onStateClick={handleStateClick}
            activeState={activeState}
          />
        </motion.div>
        
        {/* Active State Information Panel */}
        <AnimatePresence>
          {activeStateData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <MapPin className="h-5 w-5 text-red-500 mr-2" />
                  {activeStateData.name} Service Locations
                </h4>
                <span className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {activeStateData.pincodes.length} locations
                </span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {activeStateData.pincodes.map((pincode) => (
                  <motion.div
                    key={pincode.code}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`p-3 rounded-lg text-center cursor-pointer transition-colors duration-200 ${
                      activePin === pincode.code
                        ? 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800'
                        : 'bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setActivePin(activePin === pincode.code ? null : pincode.code)}
                  >
                    <p className="font-medium text-gray-900 dark:text-white">{pincode.city}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{pincode.code}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServicesMap; 