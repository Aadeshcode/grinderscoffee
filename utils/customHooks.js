import { useEffect, useState } from "react";

export const useElementOnScreen = (ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-100px",
      threshhold: 1,
    };
    const observer = new IntersectionObserver(callbackFunction, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);
  return [isVisible];
};
