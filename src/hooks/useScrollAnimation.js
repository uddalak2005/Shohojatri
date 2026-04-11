import { useEffect, useRef } from 'react';

/**
 * Custom hook for IntersectionObserver scroll reveals
 * @param {string} animationClass - Class to add when visible
 * @param {object} options - IntersectionObserver options
 */
const useScrollAnimation = (animationClass = 'animate-in', options = { threshold: 0.1 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible', animationClass);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animationClass, options]);

  return elementRef;
};

export default useScrollAnimation;
