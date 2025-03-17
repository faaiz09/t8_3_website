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
  const [hoveredPincode, setHoveredPincode] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full">
      {/* Background Map */}
      <motion.img 
        src={indiaSvg} 
        alt="India Map" 
        className="w-full h-full object-contain opacity-80 dark:opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
      />
      
      {/* State Labels */}
      <AnimatePresence>
        {states.map((state) => (
          <motion.div
            key={state.code}
            className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10`}
            style={{
              left: `${state.coordinates.x}%`,
              top: `${state.coordinates.y}%`,
            }}
            onClick={() => onStateClick(state.code)}
            onMouseEnter={() => setHoveredState(state.code)}
            onMouseLeave={() => setHoveredState(null)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <motion.div
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300
                ${activeState === state.code || hoveredState === state.code
                  ? 'bg-red-600 text-white shadow-lg scale-110'
                  : 'bg-white/90 text-gray-800 dark:bg-gray-800/90 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-red-900/20'
                } backdrop-blur-sm`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
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
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0"
                >
                  {state.pincodes.map((pincode) => (
                    <motion.div
                      key={pincode.code}
                      className="absolute"
                      style={{
                        left: `${pincode.coordinates.x}%`,
                        top: `${pincode.coordinates.y}%`,
                      }}
                      onMouseEnter={() => setHoveredPincode(pincode.code)}
                      onMouseLeave={() => setHoveredPincode(null)}
                    >
                      {/* Pincode Marker */}
                      <motion.div
                        className={`relative w-3 h-3 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2
                          ${activePincode === pincode.code
                            ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50'
                            : 'bg-yellow-300 hover:bg-yellow-400'
                          }`}
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: activePincode === pincode.code ? 1.5 : 1,
                          boxShadow: activePincode === pincode.code ? '0 0 20px rgba(250, 204, 21, 0.5)' : 'none'
                        }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Ripple Effect */}
                        {(activePincode === pincode.code || hoveredPincode === pincode.code) && (
                          <motion.div
                            className="absolute inset-0 rounded-full bg-yellow-400"
                            initial={{ scale: 1, opacity: 0.5 }}
                            animate={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        )}
                      </motion.div>

                      {/* Pincode Tooltip */}
                      <AnimatePresence>
                        {(hoveredPincode === pincode.code || activePincode === pincode.code) && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-20"
                          >
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 text-center whitespace-nowrap backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                              <p className="font-semibold text-gray-900 dark:text-white">
                                {pincode.city}
                              </p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {pincode.code}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default IndiaMap; 