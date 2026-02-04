"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useLoading } from "./LoadingContext";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false); // Disabled loading screen
  const [showContent, setShowContent] = useState(true); // Show content immediately
  const { setLoadingComplete } = useLoading();

  useEffect(() => {
    // Loading screen disabled - set to complete immediately
    setLoadingComplete(true);
    
    /* LOADING SCREEN CODE - COMMENTED OUT FOR NOW
    // Check if this is the first load
    const hasLoaded = sessionStorage.getItem("hasLoadedBefore");
    
    if (hasLoaded) {
      // Skip loading screen on subsequent visits
      setIsLoading(false);
      setShowContent(true);
      setLoadingComplete(true);
    } else {
      // Show loading screen on first visit
      sessionStorage.setItem("hasLoadedBefore", "true");
    }
    */
  }, [setLoadingComplete]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay before showing content for smooth transition
    setTimeout(() => {
      setShowContent(true);
      // Signal that loading is complete so Hero animations can start
      setLoadingComplete(true);
    }, 200);
  };

  return (
    <>
      {/* Loading screen commented out */}
      {/* {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />} */}
      <div style={{ opacity: showContent ? 1 : 0, transition: "opacity 0.3s ease-in-out" }}>
        {children}
      </div>
    </>
  );
}
