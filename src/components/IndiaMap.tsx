import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import indiaSvg from '../assets/documents/india.svg';

interface PincodeLocation {
  code: string;
  city: string;
  coordinates: { x: number; y: number };
}

interface StateData {
  name: string;
  code: string;
  coordinates: { x: number; y: number };
  pincodes: PincodeLocation[];
}

interface IndiaMapProps {
  activePincode: string | null;
  states: StateData[];
  onStateClick: (stateCode: string) => void;
  activeState: string | null;
}

const IndiaMap: React.FC<IndiaMapProps> = ({ 
  activePincode, 
  states, 
  onStateClick,
  activeState 
}) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full">
      <img src={indiaSvg} alt="India Map" className="w-full h-full object-contain" />
      
      {/* State Labels */}
      {states.map((state) => (
        <motion.div
          key={state.code}
          className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2`}
          style={{
            left: `${state.coordinates.x}%`,
            top: `${state.coordinates.y}%`,
          }}
          onClick={() => onStateClick(state.code)}
          onMouseEnter={() => setHoveredState(state.code)}
          onMouseLeave={() => setHoveredState(null)}
        >
          <motion.div
            className={`px-2 py-1 rounded-md text-sm font-medium transition-colors
              ${activeState === state.code || hoveredState === state.code
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              }`}
            whileHover={{ scale: 1.1 }}
          >
            {state.name}
          </motion.div>

          {/* Pincodes for Active State */}
          <AnimatePresence>
            {activeState === state.code && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-0 left-0"
              >
                {state.pincodes.map((pincode) => (
                  <motion.div
                    key={pincode.code}
                    className={`absolute w-2 h-2 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
                      activePincode === pincode.code
                        ? 'bg-yellow-400 scale-150'
                        : 'bg-yellow-300 hover:scale-125'
                    }`}
                    style={{
                      left: `${pincode.coordinates.x}%`,
                      top: `${pincode.coordinates.y}%`,
                    }}
                    whileHover={{ scale: 1.2 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    {/* Pincode Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1">
                      <div className="bg-white dark:bg-gray-800 text-xs rounded shadow-lg p-1 hidden group-hover:block whitespace-nowrap">
                        <p className="font-semibold">{pincode.city}</p>
                        <p className="text-gray-500">{pincode.code}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default IndiaMap; 