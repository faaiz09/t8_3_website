import React, { useState, useEffect, useRef } from "react";
import { MapPin, ZoomIn, ZoomOut } from "lucide-react";
import { motion } from "framer-motion";

interface InteractiveMapProps {
  location?: {
    lat: number;
    lng: number;
    address: string;
  };
  zoom?: number;
  height?: string;
}

const InteractiveMap = ({
  location = {
    lat: 19.076,
    lng: 72.8777,
    address: "T8 Headquarters, Maharashtra, India",
  },
  zoom = 12,
  height = "500px",
}: InteractiveMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(zoom);
  const [isPanning, setIsPanning] = useState(false);
  const [mapPosition, setMapPosition] = useState({ x: 0, y: 0 });
  const [startPanPosition, setStartPanPosition] = useState({ x: 0, y: 0 });
  const [touchStartPosition, setTouchStartPosition] = useState({ x: 0, y: 0 });

  // Simulate map loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Handle zoom in
  const handleZoomIn = () => {
    if (currentZoom < 20) {
      setCurrentZoom((prev) => prev + 1);
    }
  };

  // Handle zoom out
  const handleZoomOut = () => {
    if (currentZoom > 1) {
      setCurrentZoom((prev) => prev - 1);
    }
  };

  // Handle mouse down for panning
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPanning(true);
    setStartPanPosition({ x: e.clientX, y: e.clientY });
  };

  // Handle mouse move for panning
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPanning) {
      e.preventDefault();
      const deltaX = e.clientX - startPanPosition.x;
      const deltaY = e.clientY - startPanPosition.y;

      setMapPosition((prev) => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY,
      }));

      setStartPanPosition({ x: e.clientX, y: e.clientY });
    }
  };

  // Handle mouse up to stop panning
  const handleMouseUp = () => {
    setIsPanning(false);
  };

  // Handle mouse leave to stop panning
  const handleMouseLeave = () => {
    setIsPanning(false);
  };

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsPanning(true);
      setTouchStartPosition({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isPanning && e.touches.length === 1) {
      const deltaX = e.touches[0].clientX - touchStartPosition.x;
      const deltaY = e.touches[0].clientY - touchStartPosition.y;

      setMapPosition((prev) => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY,
      }));

      setTouchStartPosition({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsPanning(false);
  };

  // Handle wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  return (
    <div
      className="w-full bg-white rounded-lg shadow-md overflow-hidden"
      style={{ height }}
    >
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
        <p className="text-sm text-gray-500">{location.address}</p>
      </div>

      <div
        ref={mapRef}
        className="relative w-full h-full bg-blue-50 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
      >
        {!isMapLoaded ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Map background - simulated with a gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200"
              style={{
                transform: `translate(${mapPosition.x}px, ${mapPosition.y}px) scale(${currentZoom / 10})`,
                transformOrigin: "center",
                transition: isPanning ? "none" : "transform 0.3s ease-out",
              }}
            >
              {/* Simulated roads */}
              <div className="absolute left-1/4 top-1/4 w-1/2 h-1 bg-gray-300 rotate-45"></div>
              <div className="absolute left-1/3 top-1/3 w-1/3 h-1 bg-gray-300 rotate-12"></div>
              <div className="absolute left-1/2 top-1/2 w-1/2 h-1 bg-gray-300 -rotate-45"></div>
              <div className="absolute left-1/4 top-2/3 w-1/3 h-1 bg-gray-300 rotate-90"></div>

              {/* Buildings */}
              <div className="absolute left-1/2 top-1/2 w-12 h-12 bg-blue-700 rounded-md transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute left-[45%] top-[45%] w-8 h-10 bg-blue-800 rounded-md"></div>
              <div className="absolute left-[55%] top-[48%] w-6 h-8 bg-blue-600 rounded-md"></div>
              <div className="absolute left-[40%] top-[55%] w-10 h-6 bg-gray-700 rounded-md"></div>

              {/* Location marker */}
              <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
              >
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-red-500 rounded-full opacity-20 animate-ping"></div>
                    <MapPin
                      size={30 + currentZoom / 2}
                      className="text-red-500 drop-shadow-lg"
                    />
                  </div>
                  <div
                    className="mt-1 px-2 py-1 bg-white rounded-md shadow-md text-xs font-medium"
                    style={{ fontSize: `${10 + currentZoom / 5}px` }}
                  >
                    T8 HQ
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Map controls */}
            <div className="absolute bottom-4 right-4 flex flex-col bg-white rounded-md shadow-md">
              <button
                onClick={handleZoomIn}
                className="p-2 hover:bg-gray-100 border-b border-gray-200 focus:outline-none"
                aria-label="Zoom in"
              >
                <ZoomIn size={20} />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 hover:bg-gray-100 focus:outline-none"
                aria-label="Zoom out"
              >
                <ZoomOut size={20} />
              </button>
            </div>

            {/* Map instructions */}
            <div className="absolute top-4 left-4 bg-white bg-opacity-80 rounded-md p-2 text-xs text-gray-600">
              <p>Drag to pan • Scroll to zoom</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InteractiveMap;
