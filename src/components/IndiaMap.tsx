import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import indiaSvg from '../assets/documents/indiaMap.svg';

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
  const [mapLoaded, setMapLoaded] = useState(false);
  const [statesLoaded, setStatesLoaded] = useState(false);

  // Simulate a loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 500);

    const statesTimer = setTimeout(() => {
      setStatesLoaded(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(statesTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Map with enhanced animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <motion.img 
        src={indiaSvg} 
        alt="India Map" 
        className="w-full h-full object-contain opacity-80 dark:opacity-60 z-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: mapLoaded ? 0.8 : 0,
          scale: mapLoaded ? 1 : 0.9,
        }}
        transition={{ 
          duration: 1.2,
          ease: "easeOut"
        }}
        onLoad={() => setMapLoaded(true)}
      />
      
      {/* Map Overlay - Adds a subtle glow effect when a state is active */}
      {activeState && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-yellow-500/5 dark:from-red-500/10 dark:to-yellow-500/10 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
      
      {/* State Labels with enhanced animations */}
      <AnimatePresence>
        {states.map((state, index) => (
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
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: statesLoaded ? 1 : 0,
              opacity: statesLoaded ? 1 : 0,
            }}
            transition={{ 
              type: "spring", 
              duration: 0.5,
              delay: index * 0.03, // Staggered animation
              bounce: 0.4
            }}
          >
            <motion.div
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300
                ${activeState === state.code || hoveredState === state.code
                  ? 'bg-red-600 text-white shadow-lg scale-110'
                  : 'bg-white/90 text-gray-800 dark:bg-gray-800/90 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-red-900/20'
                } backdrop-blur-sm`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              {state.name}
              
              {/* State selection indicator */}
              {activeState === state.code && (
                <motion.div 
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                />
              )}
            </motion.div>

            {/* Connection lines from state to pincodes */}
            <AnimatePresence>
              {activeState === state.code && state.pincodes.length > 0 && (
                <motion.div
                  className="absolute top-0 left-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {state.pincodes.map((pincode) => (
                    <motion.div
                      key={`line-${pincode.code}`}
                      className="absolute top-0 left-0 w-full h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <svg className="absolute top-0 left-0 w-full h-full">
                        <motion.line
                          x1="50%"
                          y1="50%"
                          x2={`${50 + pincode.coordinates.x}%`}
                          y2={`${50 + pincode.coordinates.y}%`}
                          stroke={activePincode === pincode.code ? "#FBBF24" : "#CBD5E1"}
                          strokeWidth="1.5"
                          strokeDasharray="2,2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        />
                      </svg>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pincodes for Active State with enhanced animations */}
            <AnimatePresence>
              {activeState === state.code && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0"
                >
                  {state.pincodes.map((pincode, pIndex) => (
                    <motion.div
                      key={pincode.code}
                      className="absolute"
                      style={{
                        left: `${50 + pincode.coordinates.x}%`,
                        top: `${50 + pincode.coordinates.y}%`,
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        delay: 0.1 + (pIndex * 0.05) // Staggered animation
                      }}
                      onMouseEnter={() => setHoveredPincode(pincode.code)}
                      onMouseLeave={() => setHoveredPincode(null)}
                    >
                      {/* Pincode Marker with enhanced effects */}
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
                        {/* Ripple Effect - Enhanced with multiple ripples for active pincodes */}
                        {activePincode === pincode.code && (
                          <>
                            <motion.div
                              className="absolute inset-0 rounded-full bg-yellow-400"
                              initial={{ scale: 1, opacity: 0.5 }}
                              animate={{ scale: 2, opacity: 0 }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                            <motion.div
                              className="absolute inset-0 rounded-full bg-yellow-400"
                              initial={{ scale: 1, opacity: 0.5 }}
                              animate={{ scale: 2, opacity: 0 }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                            />
                          </>
                        )}
                        
                        {/* Single ripple for hovered pincodes */}
                        {hoveredPincode === pincode.code && !activePincode && (
                          <motion.div
                            className="absolute inset-0 rounded-full bg-yellow-400"
                            initial={{ scale: 1, opacity: 0.5 }}
                            animate={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        )}
                      </motion.div>

                      {/* Pincode Tooltip with enhanced styling */}
                      <AnimatePresence>
                        {(hoveredPincode === pincode.code || activePincode === pincode.code) && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.9 }}
                            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-20"
                          >
                            <div className={`
                              rounded-lg shadow-lg p-2 text-center whitespace-nowrap backdrop-blur-sm
                              ${activePincode === pincode.code 
                                ? 'bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700'
                                : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                              }
                            `}>
                              <p className={`font-semibold ${activePincode === pincode.code ? 'text-yellow-700 dark:text-yellow-300' : 'text-gray-900 dark:text-white'}`}>
                                {pincode.city}
                              </p>
                              <p className={`text-sm ${activePincode === pincode.code ? 'text-yellow-600 dark:text-yellow-400' : 'text-gray-500 dark:text-gray-400'}`}>
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
      
      {/* State Info Panel - Shows when a state is active */}
      <AnimatePresence>
        {activeState && (
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg p-3 z-30 border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {states.find(s => s.code === activeState)?.name || ''}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                {states.find(s => s.code === activeState)?.pincodes.length || 0} service locations
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IndiaMap; 