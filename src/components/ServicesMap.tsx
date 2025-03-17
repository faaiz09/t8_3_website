import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Download, Search, CheckCircle2, MapPin, Phone, Globe2, Shield, Bell, Info, X } from 'lucide-react';
import IndiaMapComponent from './IndiaMap';

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
  const [pincodeData, setPincodeData] = useState<any[]>([]);

  // Load pincode data
  useEffect(() => {
    fetch('/data/pincodes.json')
      .then(response => response.json())
      .then(data => {
        setPincodeData(data.pincodes);
      })
      .catch(error => {
        console.error("Error loading pincode data:", error);
      });
  }, []);

  const handleSearch = () => {
    let found = null;
    let state = null;

    for (const stateData of pincodeData) {
      const pincode = stateData.cities.find((p: any) => p.pincode === searchPincode);
      if (pincode) {
        found = pincode;
        state = stateData;
        break;
      }
    }

    if (found && state) {
      setActivePin(searchPincode);
      // Map state name to code
      const stateCode = state.state === 'Andhra Pradesh' ? 'AP' :
                        state.state === 'Arunachal Pradesh' ? 'AR' :
                        state.state === 'Assam' ? 'AS' :
                        state.state === 'Bihar' ? 'BR' :
                        state.state === 'Chhattisgarh' ? 'CG' :
                        state.state === 'Delhi' ? 'DL' :
                        state.state === 'Goa' ? 'GA' :
                        state.state === 'Gujarat' ? 'GJ' :
                        state.state === 'Haryana' ? 'HR' :
                        state.state === 'Himachal Pradesh' ? 'HP' :
                        state.state === 'Jharkhand' ? 'JH' :
                        state.state === 'Karnataka' ? 'KA' :
                        state.state === 'Kerala' ? 'KL' :
                        state.state === 'Madhya Pradesh' ? 'MP' :
                        state.state === 'Maharashtra' ? 'MH' :
                        state.state === 'Manipur' ? 'MN' :
                        state.state === 'Meghalaya' ? 'ML' :
                        state.state === 'Mizoram' ? 'MZ' :
                        state.state === 'Nagaland' ? 'NL' :
                        state.state === 'Odisha' ? 'OD' :
                        state.state === 'Punjab' ? 'PB' :
                        state.state === 'Rajasthan' ? 'RJ' :
                        state.state === 'Sikkim' ? 'SK' :
                        state.state === 'Tamil Nadu' ? 'TN' :
                        state.state === 'Telangana' ? 'TS' :
                        state.state === 'Tripura' ? 'TR' :
                        state.state === 'Uttar Pradesh' ? 'UP' :
                        state.state === 'Uttarakhand' ? 'UK' :
                        state.state === 'West Bengal' ? 'WB' : '';
      
      setActiveState(stateCode);
      setSearchResult({ 
        found: true, 
        message: `Service available in ${found.name}, ${state.state}` 
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
  const activeStateData = pincodeData.find(state => {
    const stateCode = state.state === 'Andhra Pradesh' ? 'AP' :
                      state.state === 'Arunachal Pradesh' ? 'AR' :
                      state.state === 'Assam' ? 'AS' :
                      state.state === 'Bihar' ? 'BR' :
                      state.state === 'Chhattisgarh' ? 'CG' :
                      state.state === 'Delhi' ? 'DL' :
                      state.state === 'Goa' ? 'GA' :
                      state.state === 'Gujarat' ? 'GJ' :
                      state.state === 'Haryana' ? 'HR' :
                      state.state === 'Himachal Pradesh' ? 'HP' :
                      state.state === 'Jharkhand' ? 'JH' :
                      state.state === 'Karnataka' ? 'KA' :
                      state.state === 'Kerala' ? 'KL' :
                      state.state === 'Madhya Pradesh' ? 'MP' :
                      state.state === 'Maharashtra' ? 'MH' :
                      state.state === 'Manipur' ? 'MN' :
                      state.state === 'Meghalaya' ? 'ML' :
                      state.state === 'Mizoram' ? 'MZ' :
                      state.state === 'Nagaland' ? 'NL' :
                      state.state === 'Odisha' ? 'OD' :
                      state.state === 'Punjab' ? 'PB' :
                      state.state === 'Rajasthan' ? 'RJ' :
                      state.state === 'Sikkim' ? 'SK' :
                      state.state === 'Tamil Nadu' ? 'TN' :
                      state.state === 'Telangana' ? 'TS' :
                      state.state === 'Tripura' ? 'TR' :
                      state.state === 'Uttar Pradesh' ? 'UP' :
                      state.state === 'Uttarakhand' ? 'UK' :
                      state.state === 'West Bengal' ? 'WB' : '';
    return stateCode === activeState;
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
      {/* Service Highlights */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Service Highlights</h3>
          <div className="space-y-4">
            {SERVICE_HIGHLIGHTS.map((service, index) => (
              <motion.div 
                key={service.name}
                className={`p-4 rounded-lg transition-all duration-200 cursor-pointer
                  ${hoveredService === service.name 
                    ? 'bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30' 
                    : 'bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800'
                  }`}
                whileHover={{ scale: 1.02 }}
                onMouseEnter={() => setHoveredService(service.name)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {service.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-semibold text-gray-900 dark:text-white">{service.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{service.description}</p>
                    
                    <AnimatePresence>
                      {hoveredService === service.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 text-xs text-gray-500 dark:text-gray-400"
                        >
                          {service.details}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Download Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Resources</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Download our complete service location list with detailed information about each center.
          </p>
          <Button 
            onClick={handleDownloadExcel}
            className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download Service Locations
          </Button>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="lg:col-span-2 space-y-6">
        {/* Search Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-grow">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Enter pincode to check service availability"
                  className="pl-10 pr-4 py-2 w-full"
                  value={searchPincode}
                  onChange={(e) => setSearchPincode(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
            </div>
            <Button 
              onClick={handleSearch}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Check Availability
            </Button>
          </div>
          
          {/* Search Result */}
          <AnimatePresence>
            {searchResult && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`mt-3 p-3 rounded-md flex items-center gap-2 ${
                  searchResult.found 
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300' 
                    : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                }`}
              >
                {searchResult.found ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400" />
                ) : (
                  <X className="h-5 w-5 text-red-500 dark:text-red-400" />
                )}
                <span className="text-sm">{searchResult.message}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Map Container */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700 h-[600px] relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Map Guide Overlay */}
          <AnimatePresence>
            {showGuide && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/50 z-40 flex items-center justify-center p-4"
              >
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                      <Info className="h-5 w-5 text-red-500 mr-2" />
                      How to use the map
                    </h3>
                    <button 
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      onClick={() => setShowGuide(false)}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="bg-red-100 dark:bg-red-900/20 p-1 rounded-full mt-0.5">
                        <MapPin className="h-4 w-4 text-red-600 dark:text-red-400" />
                      </div>
                      <p className="text-sm">Click on any state to see service locations within that state</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-green-100 dark:bg-green-900/20 p-1 rounded-full mt-0.5">
                        <div className="h-4 w-4 rounded-full bg-green-500"></div>
                      </div>
                      <p className="text-sm">Green dots represent cities where our services are available</p>
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
          
          <IndiaMapComponent 
            activePincode={activePin}
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
                  {activeStateData.state} Service Locations
                </h4>
                <span className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {activeStateData.cities.length} locations
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                {activeStateData.cities.map((city: any) => (
                  <div 
                    key={city.pincode}
                    className={`p-3 rounded-lg border ${
                      activePin === city.pincode
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                        : 'bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className={`w-3 h-3 rounded-full mt-1.5 ${
                        activePin === city.pincode
                          ? 'bg-blue-500'
                          : 'bg-green-500'
                      }`}></div>
                      <div className="ml-2">
                        <h5 className="text-sm font-medium text-gray-900 dark:text-white">{city.name}</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Pincode: {city.pincode}</p>
                      </div>
                    </div>
                  </div>
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