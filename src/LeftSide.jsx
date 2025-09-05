import React from "react";
import Triangle from "./Triangle.jsx";

function LeftSide({ offsetX = 0 }) {
  const leftStyle = {
    display: "flex",
    flexDirection: "column",
    transform: `translateX(${offsetX}px)`, // move left or right
    transition: "transform 0.5s ease",     // smooth movement
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      <div className="login" style={leftStyle}>
        <div style={{ display: "flex", marginBottom: "-98px" }}>
          <Triangle points="50,0 50,50 1000,1000" color="blue" size={200} flipY />
        </div>
        <div style={{ display: "flex" }}>
          <Triangle points="50,0 50,50 1000,1000" color="blue" size={200} rotate={90} />
        </div>
        <div style={{ display: "flex" }}>
          <Triangle points="50,0 50,50 1000,1000" color="blue" size={200} rotate={90} flipX />
        </div>
        <div style={{ display: "flex" }}>
          <Triangle points="50,0 50,50 1000,1000" color="blue" size={200} />
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
