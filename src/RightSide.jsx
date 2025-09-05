import React from "react";
import Triangle from "./Triangle.jsx";

function RightSide({ offsetX = 0 }) {
  const rightStyle = {
    display: "flex",
    flexDirection: "column",
    transform: `translateX(${offsetX}px)`, // move left or right
    transition: "transform 0.5s ease",    // smooth movement
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
      <div className="login" style={rightStyle}>
        <div style={{ display: "flex", marginBottom: "-98px" }}>
          <Triangle points="50,0 50,50 1000,1000" color="blue" size={200} flipX flipY />
        </div>
        <div style={{ display: "flex" }}>
          <Triangle points="50,0 50,50 1000,1000" color="blue" size={200} rotate={90} flipX />
        </div>
        <div style={{ display: "flex" }}>
          <Triangle points="50,0 50,50 1000,1000" color="blue" size={200} rotate={90} />
        </div>
        <div style={{ display: "flex" }}>
          <Triangle points="50,0 50,50 1000,1000" color="blue" size={200} flipX />
        </div>
      </div>
    </div>
  );
}

export default RightSide;
