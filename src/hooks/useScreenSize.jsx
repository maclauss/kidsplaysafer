import { useState, useEffect } from "react";
import { MEDIUM_FROM, LARGE_FROM } from "../constants/mobile";

export const useScreenSize = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const isSmallSize = deviceWidth < MEDIUM_FROM;
  const isMediumSize = deviceWidth >= MEDIUM_FROM && deviceWidth < LARGE_FROM;
  const isLargeSize = deviceWidth >= LARGE_FROM;

  useEffect(() => {
    let timeoutId;
    const onResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setDeviceWidth(window.innerWidth);
      }, 300);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return {
    isSmallSize,
    isMediumSize,
    isLargeSize,
  };
};
