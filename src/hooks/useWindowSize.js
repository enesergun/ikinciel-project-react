import { useLayoutEffect, useState } from "react";

const useWindowSize = (w, h) => {
  const [width, setWidth] = useState(w);
  

  useLayoutEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);      
    }
    updateSize();

    window.addEventListener('resize', updateSize);
    return () => window.addEventListener('resize', updateSize);
  }, []);

  return [width];
}

export default useWindowSize;