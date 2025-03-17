import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import Maps from 'fusioncharts/fusioncharts.maps';
import India from 'fusionmaps/maps/fusioncharts.india';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts';

// Initialize FusionCharts with required modules
FusionCharts.addDep(Charts);
FusionCharts.addDep(Maps);
FusionCharts.addDep(India);
FusionCharts.addDep(FusionTheme);

// Initialize ReactFC
ReactFC.fcRoot(FusionCharts, Maps, India, FusionTheme);

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

interface ReactFCIndiaMapProps {
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

const ReactFCIndiaMap: React.FC<ReactFCIndiaMapProps> = ({ 
  activePincode, 
  onStateClick,
  activeState 
}) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [statesLoaded, setStatesLoaded] = useState(false);
  const [pincodeData, setPincodeData] = useState<StateData[]>([]);
  const [markers, setMarkers] = useState<any[]>([]);
  const [chartConfig, setChartConfig] = useState<any>(null);

  // Load pincode data
  useEffect(() => {
    fetch('/data/pincodes.json')
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

  // Update chart configuration
  useEffect(() => {
    const config = {
      type: 'india',
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
          entitytooltext: "$lname"
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
  }, [markers, activeState, onStateClick]);

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
        {chartConfig && (
          // @ts-ignore
          <ReactFC {...chartConfig} />
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
              {pincodeData.find(s => s.code === activeState)?.name}
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

export default ReactFCIndiaMap; 