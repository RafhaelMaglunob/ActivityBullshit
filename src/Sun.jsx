import React from "react";

function Sun({
  size = 100,                // diameter of the sun
  color = "yellow",          // sun color
  glowColor = "rgba(255, 255, 0, 0.5)", // glow color
  glowRadius = 50,           // how far the glow spreads
  offsetX = 0,               // horizontal offset
  offsetY = 0,               // vertical offset
  absolute = false,          // whether the Sun is absolute
}) {
  const style = {
    width: size,
    height: size,
    borderRadius: "50%",
    backgroundColor: color,
    boxShadow: `0 0 ${glowRadius}px ${glowColor}`,
    position: absolute ? "absolute" : "static",  // absolute if needed
    transform: `translate(${offsetX}px, ${offsetY}px)`,
    transition: "transform 0.5s ease",
  };

  return <div style={style} />;
}

export default Sun;
