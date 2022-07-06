import React from "react";
import "./ColorBox.css";

const ColorBox = ({ color, type }) => {
  const handleBgColorChange = () => {
    if (type === "bg") {
      const bodyElt = document.querySelector("body");
      bodyElt.style.backgroundColor = color;
    } else {
      const text = document.getElementById("welcome-text");
      text.style.color = color;
    }
  };
  return (
    <div
      className="box"
      style={{ backgroundColor: color }}
      onClick={handleBgColorChange}
    />
  );
};

export default ColorBox;
