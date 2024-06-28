import React, { useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const radomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = () => {
    let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[radomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  };

  const handleCreateRandomRgbColor = () => {
    const r = radomColorUtility(256);
    const g = radomColorUtility(256);
    const b = radomColorUtility(256);
    let rgbColor = `rgb(${r},${g},${b})`;

    console.log(rgbColor);
    setColor(rgbColor);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        padding: "3px",
      }}
    >
      <h3>Random Color Generator</h3>
      <button
        style={{ marginRight: "10px" }}
        onClick={() => setTypeOfColor("hex")}
      >
        Create Hex Color
      </button>
      <button
        style={{ marginRight: "10px" }}
        onClick={() => setTypeOfColor("rgb")}
      >
        Create Rgb Color
      </button>
      <button
        style={{ marginRight: "10px" }}
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
          fontSize: "40px",
          marginTop: "10px",
          flexDirection: "column",
        }}
      >
        <h3>{typeOfColor === "hex" ? "HEX COLOR" : "RGB COLOR"} </h3>
        <h2>{color}</h2>
      </div>
    </div>
  );
}

export default RandomColor;
