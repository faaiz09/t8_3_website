import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Download, Search, CheckCircle2 } from 'lucide-react';
import IndiaMap from './IndiaMap';

// Service highlights
const SERVICE_HIGHLIGHTS = [
  {
    name: 'NOCC',
    description: 'Network Operations Control Center',
    icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
  },
  {
    name: 'PAN India Service',
    description: 'Service coverage across all states',
    icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
  },
  {
    name: 'Call Management',
    description: '24/7 customer support',
    icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
  },
  {
    name: 'Software Support',
    description: 'Technical assistance and maintenance',
    icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
  },
  {
    name: 'Alerts and Reports',
    description: 'Real-time monitoring and reporting',
    icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
  },
];

// Sample state data (replace with actual data)
const STATES_DATA = [
  {
    name: 'Maharashtra',
    code: 'MH',
    coordinates: { x: 45, y: 55 },
    pincodes: [
      { 
        code: '400001', 
        city: 'Mumbai',
        coordinates: { x: 43, y: 53 }
      },
      { 
        code: '411001', 
        city: 'Pune',
        coordinates: { x: 46, y: 57 }
      }
    ]
  },
  {
    name: 'Delhi',
    code: 'DL',
    coordinates: { x: 48, y: 35 },
    pincodes: [
      { 
        code: '110001', 
        city: 'New Delhi',
        coordinates: { x: 48, y: 35 }
      }
    ]
  },
  {
    name: 'Tamil Nadu',
    code: 'TN',
    coordinates: { x: 52, y: 75 },
    pincodes: [
      { 
        code: '600001', 
        city: 'Chennai',
        coordinates: { x: 52, y: 75 }
      }
    ]
  },
  {
    name: 'West Bengal',
    code: 'WB',
    coordinates: { x: 65, y: 45 },
    pincodes: [
      { 
        code: '700001', 
        city: 'Kolkata',
        coordinates: { x: 65, y: 45 }
      }
    ]
  }
];

const ServicesMap = () => {
  const [searchPincode, setSearchPincode] = useState('');
  const [activePin, setActivePin] = useState<string | null>(null);
  const [activeState, setActiveState] = useState<string | null>(null);
  const [searchResult, setSearchResult] = useState<{ found: boolean; message: string } | null>(null);

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
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      {/* Service Highlights */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICE_HIGHLIGHTS.map((service) => (
            <motion.div
              key={service.name}
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {service.icon}
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {service.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Search and Download Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex-1 w-full md:w-auto">
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter pincode to check service availability"
              value={searchPincode}
              onChange={(e) => setSearchPincode(e.target.value)}
              className="w-full pr-12"
            />
            <Button
              onClick={handleSearch}
              className="absolute right-0 top-0 h-full px-3 bg-red-600 hover:bg-red-700"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
          {searchResult && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-2 text-sm ${
                searchResult.found ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {searchResult.message}
            </motion.p>
          )}
        </div>
        <Button
          onClick={handleDownloadExcel}
          className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          Download Service Areas
        </Button>
      </div>

      {/* Map Section */}
      <div className="relative w-full h-[500px] bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
        <IndiaMap 
          activePincode={activePin}
          states={STATES_DATA}
          onStateClick={handleStateClick}
          activeState={activeState}
        />
      </div>
    </div>
  );
};

export default ServicesMap; 