// components/Button.jsx
import React from "react";
import "./style.css"

const Button = ({ text, width,onclick, height, className }) => {

  return (
    <>
      <button
        className={` ${className}`}
        style={{ width, height }}
        onClick={onclick}
      >
        {text}
      </button>
    </>

  );
};

export default Button;
