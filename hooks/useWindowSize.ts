import { useState, useEffect } from 'react'

interface WindowSizeType {
    height: number | undefined;
    width: number | undefined;
}

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState<WindowSizeType>({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }