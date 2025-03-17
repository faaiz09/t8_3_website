import React, { useState, useEffect, memo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import Maps from 'fusioncharts/fusioncharts.maps';
import India from 'fusionmaps/maps/fusioncharts.india';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Initialize FusionCharts with all modules
try {
  ReactFC.fcRoot(FusionCharts, Charts, Maps, India, FusionTheme);
  
  // @ts-ignore
  FusionCharts.options.license = {
    key: "qqA3ydjA5C5B3C4F4G4D4H4C10B2D3D2nyqE1C3fd1npaE4D4tlA-21D7E4F4F1F1E1E4F1C11C6C2B5A4E2F2D1hwqD1B5D1aG4A19A32twbC6D3G4lhJ-7A9C11A5B-13ddA2I3A1B9B3D7A2B4G2H3H1F-7smC8B2XB4cetB8A7A5mxD3SG4F2tvgB2A3B2E4C3I3C9B3E5C5A2C3A2G4J-7==",
    creditLabel: false
  };
} catch (error) {
  console.error("Error initializing FusionCharts:", error);
}

// Define the TopoJSON URL for Indian states
const INDIA_TOPO_JSON = '/india.json';
const PINCODES_JSON = '/data/pincodes.json';

interface PincodeLocation {
  name: string;
  pincode: string;
  coordinates: [number, number];
}

interface StateData {
  code: string;
  name: string;
  pincodes: PincodeLocation[];
}

interface IndiaMapProps {
  activePincode: string | null;
  onStateClick: (stateCode: string) => void;
  activeState: string | null;
}

// Map state names to their codes
const stateNameToCode: Record<string, string> = {
  'Andhra Pradesh': 'AP',
  'Arunachal Pradesh': 'AR',
  'Assam': 'AS',
  'Bihar': 'BR',
  'Chhattisgarh': 'CG',
  'Delhi': 'DL',
  'Goa': 'GA',
  'Gujarat': 'GJ',
  'Haryana': 'HR',
  'Himachal Pradesh': 'HP',
  'Jharkhand': 'JH',
  'Karnataka': 'KA',
  'Kerala': 'KL',
  'Madhya Pradesh': 'MP',
  'Maharashtra': 'MH',
  'Manipur': 'MN',
  'Meghalaya': 'ML',
  'Mizoram': 'MZ',
  'Nagaland': 'NL',
  'Odisha': 'OD',
  'Punjab': 'PB',
  'Rajasthan': 'RJ',
  'Sikkim': 'SK',
  'Tamil Nadu': 'TN',
  'Telangana': 'TS',
  'Tripura': 'TR',
  'Uttar Pradesh': 'UP',
  'Uttarakhand': 'UK',
  'West Bengal': 'WB'
};

// Map state codes to their IDs in FusionMaps
const stateCodeToId: Record<string, string> = {
  'AP': '01',
  'AR': '02',
  'AS': '03',
  'BR': '04',
  'CG': '33',
  'DL': '07',
  'GA': '08',
  'GJ': '09',
  'HR': '10',
  'HP': '11',
  'JH': '34',
  'KA': '12',
  'KL': '13',
  'MP': '14',
  'MH': '15',
  'MN': '16',
  'ML': '17',
  'MZ': '18',
  'NL': '19',
  'OD': '20',
  'PB': '21',
  'RJ': '22',
  'SK': '23',
  'TN': '24',
  'TS': '36',
  'TR': '25',
  'UP': '26',
  'UK': '35',
  'WB': '28'
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

const IndiaMapComponent: React.FC<IndiaMapProps> = ({ 
  activePincode, 
  onStateClick,
  activeState 
}) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [statesLoaded, setStatesLoaded] = useState(false);
  const [pincodeData, setPincodeData] = useState<StateData[]>([]);
  const [markers, setMarkers] = useState<any[]>([]);
  const [useFallback, setUseFallback] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstanceRef = useRef<any>(null);
  const [chartConfig, setChartConfig] = useState<any>(null);
  const [fusionChartsError, setFusionChartsError] = useState<boolean>(false);

  // Load pincode data
  useEffect(() => {
    fetch(PINCODES_JSON)
      .then(response => response.json())
      .then(data => {
        const formattedData = data.pincodes.map((item: any) => ({
          code: stateNameToCode[item.state] || '',
          name: item.state,
          pincodes: item.cities.map((city: any) => ({
            name: city.name,
            pincode: city.pincode,
            coordinates: city.coordinates
          }))
        }));
        setPincodeData(formattedData);
        setStatesLoaded(true);
      })
      .catch(error => {
        console.error("Error loading pincode data:", error);
        setStatesLoaded(true); // Set to true even on error to avoid infinite loading
      });
  }, []);

  // Simulate a loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Handle FusionCharts error
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes('FusionCharts') || event.message.includes('chart type')) {
        console.error('FusionCharts error detected, switching to fallback map');
        setUseFallback(true);
      }
    };

    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  // Update markers when active state changes
  useEffect(() => {
    if (activeState && statesLoaded) {
      const state = pincodeData.find(s => s.code === activeState);
      if (state && state.pincodes.length > 0) {
        const newMarkers = state.pincodes.map(pincode => ({
          id: pincode.pincode,
          x: pincode.coordinates[1].toString(),
          y: pincode.coordinates[0].toString(),
          label: pincode.name,
          tooltext: `${pincode.name}: ${pincode.pincode}`,
          shape: "circle",
          radius: activePincode === pincode.pincode ? "8" : "5",
          fillcolor: activePincode === pincode.pincode ? "#3b82f6" : "#10b981",
          bordercolor: "#ffffff",
          borderthickness: "2"
        }));
        setMarkers(newMarkers);
      } else {
        setMarkers([]);
      }
    } else {
      setMarkers([]);
    }
  }, [activeState, pincodeData, activePincode, statesLoaded]);

  // Update chart configuration for ReactFC
  useEffect(() => {
    try {
      const config = {
        type: 'maps/india',
        width: '100%',
        height: '100%',
        dataFormat: 'json',
        dataSource: {
          chart: {
            animation: "1",
            showbevel: "0",
            usehovercolor: "1",
            showlegend: "0",
            legendposition: "BOTTOM",
            legendborderalpha: "0",
            legendbordercolor: "ffffff",
            legendallowdrag: "0",
            legendshadow: "0",
            caption: "",
            connectorcolor: "F1F1F1",
            fillalpha: "100",
            hovercolor: "#f87171",
            theme: "fusion",
            bordercolor: "#FFFFFF",
            borderthickness: "0.5",
            showlabels: "1",
            entityfillhovercolor: "#f87171",
            entitytooltext: "$lname",
            key: "qqA3ydjA5C5B3C4F4G4D4H4C10B2D3D2nyqE1C3fd1npaE4D4tlA-21D7E4F4F1F1E1E4F1C11C6C2B5A4E2F2D1hwqD1B5D1aG4A19A32twbC6D3G4lhJ-7A9C11A5B-13ddA2I3A1B9B3D7A2B4G2H3H1F-7smC8B2XB4cetB8A7A5mxD3SG4F2tvgB2A3B2E4C3I3C9B3E5C5A2C3A2G4J-7=="
          },
          colorrange: {
            gradient: "0",
            color: [
              {
                maxvalue: "100",
                displayvalue: "States",
                code: "#e5e7eb"
              }
            ]
          },
          markers: {
            items: markers
          },
          data: Object.entries(stateCodeToId).map(([code, id]) => ({
            id,
            value: "10",
            showlabel: "1",
            shortlabel: code,
            displayvalue: code,
            color: code === activeState ? "#ef4444" : "#e5e7eb",
            hovercolor: "#f87171",
            alpha: code === activeState ? "100" : "80",
            fontbold: "1"
          }))
        },
        events: {
          entityClick: function(eventObj: any, dataObj: any) {
            const stateId = dataObj.id;
            const stateCode = Object.entries(stateCodeToId).find(([code, id]) => id === stateId)?.[0];
            if (stateCode) {
              onStateClick(stateCode);
            }
          },
          entityRollOver: function(eventObj: any, dataObj: any) {
            const stateId = dataObj.id;
            const stateCode = Object.entries(stateCodeToId).find(([code, id]) => id === stateId)?.[0];
            if (stateCode) {
              setHoveredState(stateCode);
            }
          },
          entityRollOut: function() {
            setHoveredState(null);
          },
          renderComplete: function() {
            setMapLoaded(true);
          }
        }
      };

      setChartConfig(config);
    } catch (error) {
      console.error("Error creating chart config:", error);
      setUseFallback(true);
    }
  }, [markers, activeState, onStateClick]);

  // Initialize and update the chart using direct FusionCharts API
  useEffect(() => {
    if (useFallback || !chartRef.current) return;

    try {
      // Dispose previous chart instance if it exists
      if (chartInstanceRef.current) {
        chartInstanceRef.current.dispose();
        chartInstanceRef.current = null;
      }

      const chartConfig = {
        type: 'maps/india',
        renderAt: chartRef.current,
        width: '100%',
        height: '100%',
        dataFormat: 'json',
        dataSource: {
          chart: {
            animation: "1",
            showbevel: "0",
            usehovercolor: "1",
            showlegend: "0",
            legendposition: "BOTTOM",
            legendborderalpha: "0",
            legendbordercolor: "ffffff",
            legendallowdrag: "0",
            legendshadow: "0",
            caption: "",
            connectorcolor: "F1F1F1",
            fillalpha: "100",
            hovercolor: "#f87171",
            theme: "fusion",
            bordercolor: "#FFFFFF",
            borderthickness: "0.5",
            showlabels: "1",
            entityfillhovercolor: "#f87171",
            entitytooltext: "$lname",
            key: "qqA3ydjA5C5B3C4F4G4D4H4C10B2D3D2nyqE1C3fd1npaE4D4tlA-21D7E4F4F1F1E1E4F1C11C6C2B5A4E2F2D1hwqD1B5D1aG4A19A32twbC6D3G4lhJ-7A9C11A5B-13ddA2I3A1B9B3D7A2B4G2H3H1F-7smC8B2XB4cetB8A7A5mxD3SG4F2tvgB2A3B2E4C3I3C9B3E5C5A2C3A2G4J-7=="
          },
          colorrange: {
            gradient: "0",
            color: [
              {
                maxvalue: "100",
                displayvalue: "States",
                code: "#e5e7eb"
              }
            ]
          },
          markers: {
            items: markers
          },
          data: Object.entries(stateCodeToId).map(([code, id]) => ({
            id,
            value: "10",
            showlabel: "1",
            shortlabel: code,
            displayvalue: code,
            color: code === activeState ? "#ef4444" : "#e5e7eb",
            hovercolor: "#f87171",
            alpha: code === activeState ? "100" : "80",
            fontbold: "1"
          }))
        }
      };

      // Create new chart instance
      chartInstanceRef.current = new FusionCharts(chartConfig);

      // Add event listeners
      chartInstanceRef.current.addEventListener('entityClick', function(eventObj: any, dataObj: any) {
        const stateId = dataObj.id;
        const stateCode = Object.entries(stateCodeToId).find(([code, id]) => id === stateId)?.[0];
        if (stateCode) {
          onStateClick(stateCode);
        }
      });

      chartInstanceRef.current.addEventListener('entityRollOver', function(eventObj: any, dataObj: any) {
        const stateId = dataObj.id;
        const stateCode = Object.entries(stateCodeToId).find(([code, id]) => id === stateId)?.[0];
        if (stateCode) {
          setHoveredState(stateCode);
        }
      });

      chartInstanceRef.current.addEventListener('entityRollOut', function() {
        setHoveredState(null);
      });

      chartInstanceRef.current.addEventListener('renderComplete', function() {
        setMapLoaded(true);
      });

      // Render the chart
      chartInstanceRef.current.render();
    } catch (error) {
      console.error("Error initializing FusionCharts:", error);
      setUseFallback(true);
    }

    // Cleanup function
    return () => {
      if (chartInstanceRef.current) {
        try {
          chartInstanceRef.current.dispose();
          chartInstanceRef.current = null;
        } catch (error) {
          console.error("Error disposing chart:", error);
        }
      }
    };
  }, [markers, activeState, onStateClick, useFallback]);

  // Render fallback SVG map
  const renderFallbackMap = () => {
  return (
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
          {activeState && pincodeData.find(s => s.code === activeState)?.pincodes.map((pincode, index) => (
            <g key={pincode.pincode}>
              <circle 
                cx={states.find(s => s.code === activeState)?.x || 0 + (index % 3 - 1) * 20} 
                cy={states.find(s => s.code === activeState)?.y || 0 + Math.floor(index / 3) * 20} 
                r={activePincode === pincode.pincode ? 8 : 5}
                fill={activePincode === pincode.pincode ? '#3b82f6' : '#10b981'}
                stroke="#ffffff"
                strokeWidth="1"
                onClick={() => onStateClick(activeState)}
                style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
              />
            </g>
          ))}
        </svg>
      </div>
    );
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-xl">
      {/* Loading overlay */}
      <AnimatePresence>
        {!mapLoaded && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex flex-col items-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300">Loading map...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Map Container */}
                <motion.div
        className="w-full h-full"
                  initial={{ opacity: 0 }}
        animate={{ opacity: mapLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {useFallback ? (
          renderFallbackMap()
        ) : (
          <div ref={chartRef} className="w-full h-full"></div>
                        )}
                      </motion.div>

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
              {pincodeData.find(s => s.code === activeState)?.name || 
               states.find(s => s.code === activeState)?.name || 
               activeState}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {pincodeData.find(s => s.code === activeState)?.pincodes.length || 0} service locations
            </p>
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

export default memo(IndiaMapComponent); 