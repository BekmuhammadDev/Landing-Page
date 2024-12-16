import React from "react";
import "./style.css"; 

const Container = ({ children, className }) => {
  return (
    <div className={`container mx-auto ${className || ""}`}>
      {children}
    </div>
  );
};

export default Container;
