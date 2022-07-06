import React from "react";
import ColorBox from "./Components/ColorBox";
import "./App.css";

const BG_COLORS = ["#1A481C", "#113F45", "#481C46", "#19184B"];
const TEXT_COLORS = ["#F5AEAE", "#A9FFDB", "#F6E861", "#D39DFE"];

const App = () => {
  return (
    <>
      <div className="bg-box">
        {BG_COLORS.map((color) => (
          <ColorBox color={color} key={color} type="bg" />
        ))}
      </div>
      <div className="text-div">
        <h1 id="welcome-text">Welcome to Color Palette App</h1>
      </div>

      <div className="text-box">
        {TEXT_COLORS.map((color) => (
          <ColorBox color={color} key={color} type="text" />
        ))}
      </div>
    </>
  );
};

export default App;
