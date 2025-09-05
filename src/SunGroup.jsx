import React, { useState } from "react";
import Sun from "./Sun.jsx";

function SunGroup() {
  const [hovered, setHovered] = useState(false);

  const sunStyle = (offsetY) => ({
    position: "absolute",
    transition: "transform 0.5s ease",
    transform: `translateY(${offsetY}px)`,
  });

  return (
    <div
      style={{ position: "relative", width: "400px", height: "400px", margin: "0 auto" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Pair 1 */}
      <Sun size={100} color="orange" glowColor="rgba(255,165,0,0.6)" glowRadius={100} style={sunStyle(hovered ? -100 : 0)} />
      <Sun size={100} color="orange" glowColor="rgba(255,165,0,0.6)" glowRadius={100} style={sunStyle(hovered ? 100 : 0)} />

      {/* Pair 2 */}
      <Sun size={100} color="yellow" glowColor="rgba(255,255,0,0.6)" glowRadius={100} style={sunStyle(hovered ? -80 : 0)} />
      <Sun size={100} color="yellow" glowColor="rgba(255,255,0,0.6)" glowRadius={100} style={sunStyle(hovered ? 80 : 0)} />

      {/* Pair 3 */}
      <Sun size={100} color="red" glowColor="rgba(255,0,0,0.6)" glowRadius={100} style={sunStyle(hovered ? -60 : 0)} />
      <Sun size={100} color="red" glowColor="rgba(255,0,0,0.6)" glowRadius={100} style={sunStyle(hovered ? 60 : 0)} />

      {/* Pair 4 */}
      <Sun size={100} color="pink" glowColor="rgba(255,192,203,0.6)" glowRadius={100} style={sunStyle(hovered ? -40 : 0)} />
      <Sun size={100} color="pink" glowColor="rgba(255,192,203,0.6)" glowRadius={100} style={sunStyle(hovered ? 40 : 0)} />
    </div>
  );
}

export default SunGroup;
