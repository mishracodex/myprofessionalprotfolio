"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface LoadingContextType {
  isLoadingComplete: boolean;
  setLoadingComplete: (value: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoadingComplete: false,
  setLoadingComplete: () => {},
});

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    // Check if this is the first load
    const hasLoaded = sessionStorage.getItem("hasLoadedBefore");
    
    if (hasLoaded) {
      // Skip loading screen on subsequent visits - animations can start immediately
      setIsLoadingComplete(true);
    }
    // Otherwise, loading screen will set this to true when it completes
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoadingComplete, setLoadingComplete: setIsLoadingComplete }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
}
