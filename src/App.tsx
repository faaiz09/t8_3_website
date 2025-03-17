import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import routes from "tempo-routes";

// Lazy load components
const Home = lazy(() => import("./components/home"));
const Careers = lazy(() => import("./components/careers"));

// Loading component
const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

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
