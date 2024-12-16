import React from "react";
import { useInView } from "react-intersection-observer";
import "./style.css";

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, 
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`animated-section ${inView ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
