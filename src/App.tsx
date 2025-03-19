
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Health from "./pages/Health";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Create a new QueryClient for React Query
const queryClient = new QueryClient();

const App = () => {
  // State to track whether we're in dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Effect to apply dark mode class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Create a toggle function that we'll pass to components
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route 
              path="/home" 
              element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} 
            />
            <Route path="/report" element={<Report />} />
            <Route path="/health" element={<Health />} />
            <Route path="/community" element={<Community />} />
            <Route 
              path="/profile" 
              element={<Profile isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} 
            />
            {/* Redirect index to splash screen */}
            <Route path="/index" element={<Navigate to="/" replace />} />
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
