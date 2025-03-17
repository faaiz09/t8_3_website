import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SimpleIndiaMapProps {
  activePincode: string | null;
  onStateClick: (stateCode: string) => void;
  activeState: string | null;
}

const SimpleIndiaMap: React.FC<SimpleIndiaMapProps> = ({ 
  activePincode, 
  onStateClick,
  activeState 
}) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  // Map of state codes to their names
  const stateCodeToName: Record<string, string> = {
    'AP': 'Andhra Pradesh',
    'AR': 'Arunachal Pradesh',
    'AS': 'Assam',
    'BR': 'Bihar',
    'CG': 'Chhattisgarh',
    'DL': 'Delhi',
    'GA': 'Goa',
    'GJ': 'Gujarat',
    'HR': 'Haryana',
    'HP': 'Himachal Pradesh',
    'JH': 'Jharkhand',
    'KA': 'Karnataka',
    'KL': 'Kerala',
    'MP': 'Madhya Pradesh',
    'MH': 'Maharashtra',
    'MN': 'Manipur',
    'ML': 'Meghalaya',
    'MZ': 'Mizoram',
    'NL': 'Nagaland',
    'OD': 'Odisha',
    'PB': 'Punjab',
    'RJ': 'Rajasthan',
    'SK': 'Sikkim',
    'TN': 'Tamil Nadu',
    'TS': 'Telangana',
    'TR': 'Tripura',
    'UP': 'Uttar Pradesh',
    'UK': 'Uttarakhand',
    'WB': 'West Bengal'
  };

  // List of states with their positions for the simplified map
  const states = [
    { code: 'JK', name: 'Jammu & Kashmir', x: 120, y: 60 },
    { code: 'HP', name: 'Himachal Pradesh', x: 150, y: 100 },
    { code: 'PB', name: 'Punjab', x: 120, y: 120 },
    { code: 'UK', name: 'Uttarakhand', x: 180, y: 120 },
    { code: 'HR', name: 'Haryana', x: 140, y: 140 },
    { code: 'DL', name: 'Delhi', x: 150, y: 160 },
    { code: 'RJ', name: 'Rajasthan', x: 100, y: 180 },
    { code: 'UP', name: 'Uttar Pradesh', x: 200, y: 180 },
    { code: 'BR', name: 'Bihar', x: 260, y: 200 },
    { code: 'SK', name: 'Sikkim', x: 300, y: 180 },
    { code: 'AR', name: 'Arunachal Pradesh', x: 360, y: 160 },
    { code: 'NL', name: 'Nagaland', x: 360, y: 190 },
    { code: 'MN', name: 'Manipur', x: 360, y: 210 },
    { code: 'MZ', name: 'Mizoram', x: 340, y: 230 },
    { code: 'TR', name: 'Tripura', x: 320, y: 230 },
    { code: 'AS', name: 'Assam', x: 330, y: 190 },
    { code: 'ML', name: 'Meghalaya', x: 310, y: 210 },
    { code: 'WB', name: 'West Bengal', x: 280, y: 230 },
    { code: 'JH', name: 'Jharkhand', x: 250, y: 230 },
    { code: 'OD', name: 'Odisha', x: 240, y: 260 },
    { code: 'CG', name: 'Chhattisgarh', x: 200, y: 250 },
    { code: 'MP', name: 'Madhya Pradesh', x: 170, y: 220 },
    { code: 'GJ', name: 'Gujarat', x: 80, y: 230 },
    { code: 'MH', name: 'Maharashtra', x: 140, y: 280 },
    { code: 'TS', name: 'Telangana', x: 180, y: 300 },
    { code: 'AP', name: 'Andhra Pradesh', x: 180, y: 330 },
    { code: 'KA', name: 'Karnataka', x: 140, y: 340 },
    { code: 'TN', name: 'Tamil Nadu', x: 170, y: 380 },
    { code: 'KL', name: 'Kerala', x: 140, y: 390 },
    { code: 'GA', name: 'Goa', x: 110, y: 330 },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-xl">
      <div className="w-full h-full flex items-center justify-center">
        <svg 
          viewBox="0 0 450 450" 
          className="w-full h-full max-w-3xl"
          style={{ maxHeight: '80vh' }}
        >
          {/* Map outline */}
          <path 
            d="M80,50 C60,100 40,150 50,200 C60,250 70,300 100,350 C130,400 180,420 230,400 C280,380 320,350 350,300 C380,250 390,200 370,150 C350,100 300,70 250,60 C200,50 150,40 100,50 Z" 
            fill="#e5e7eb" 
            stroke="#d1d5db" 
            strokeWidth="2"
          />
          
          {/* States */}
          {states.map((state) => (
            <g key={state.code}>
              <circle 
                cx={state.x} 
                cy={state.y} 
                r={activeState === state.code ? 18 : 15}
                fill={activeState === state.code ? '#ef4444' : (hoveredState === state.code ? '#f87171' : '#e5e7eb')}
                stroke="#ffffff"
                strokeWidth="1"
                onClick={() => onStateClick(state.code)}
                onMouseEnter={() => setHoveredState(state.code)}
                onMouseLeave={() => setHoveredState(null)}
                style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
              />
              <text 
                x={state.x} 
                y={state.y} 
                textAnchor="middle" 
                dominantBaseline="middle"
                fontSize="10"
                fontWeight={activeState === state.code ? 'bold' : 'normal'}
                fill={activeState === state.code ? '#ffffff' : '#4b5563'}
                style={{ pointerEvents: 'none' }}
              >
                {state.code}
              </text>
            </g>
          ))}
          
          {/* Active state pincodes */}
          {activeState && (
            <g>
              {/* This would be populated with pincode markers */}
            </g>
          )}
        </svg>
      </div>
      
      {/* State Info Panel */}
      <AnimatePresence>
        {activeState && (
          <motion.div
            className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-xs"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              {stateCodeToName[activeState] || activeState}
            </h3>
            <button
              className="mt-2 text-xs text-blue-600 dark:text-blue-400 hover:underline"
              onClick={() => onStateClick('')}
            >
              Back to all states
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SimpleIndiaMap; 