import { useEffect } from 'react'

// This component ensures that content becomes visible after a timeout
// even if animations or IntersectionObserver don't work properly
const AnimationFallback = () => {
  useEffect(() => {
    // Set a timeout to make all sections visible after 1 second
    const timeout = setTimeout(() => {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        section.classList.add('visible');
      });
      
      // Make all motion divs visible
      const motionElements = document.querySelectorAll('.motion-element');
      motionElements.forEach(element => {
        element.classList.add('motion-visible');
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return null;
};

export default AnimationFallback;
