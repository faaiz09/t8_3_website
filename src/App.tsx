import { Suspense, lazy, useState, useEffect } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import routes from "tempo-routes";

// Lazy load components
const Home = lazy(() => import("./components/home"));
const Careers = lazy(() => import("./components/careers"));

// Loading component
const LoadingFallback: React.FC = () => {
  const [showLoader, setShowLoader] = useState(true);
  
  useEffect(() => {
    // For testing - keep the loader visible for 5 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null;
  
  return (
    <div className="flex items-center justify-center h-screen bg-white/80">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 animate-ping rounded-full h-16 w-16 border-2 border-red-400 opacity-30"></div>
        <div className="absolute top-2 left-2 right-2 bottom-2 animate-pulse rounded-full h-12 w-12 border-2 border-red-300 opacity-50"></div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <>
        {/* For the tempo routes */}
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}

        <Routes>
          <Route 
            path="/" 
            element={
              <Suspense fallback={<LoadingFallback />}>
                <Home />
              </Suspense>
            } 
          />
          <Route 
            path="/careers" 
            element={
              <Suspense fallback={<LoadingFallback />}>
                <Careers />
              </Suspense>
            } 
          />
          {/* Add this before any catchall route */}
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
      </>
    </Suspense>
  );
};

export default App;
