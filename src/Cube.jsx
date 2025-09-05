import React from "react";

function Cube({
  size = 150,
  rotateX = -20,
  rotateY = 30,
  colors = {
    front:  "#4f46e5",
    back:   "#4338ca",
    left:   "#60a5fa",
    right:  "#2563eb",
    top:    "#a78bfa",
    bottom: "#7c3aed",
  },
  style = {},      // extra inline styles for the outer wrapper if you want to absolutely position it
}) {
  const face = {
    position: "absolute",
    width: `${size}px`,
    height: `${size}px`,
    display: "grid",
    placeItems: "center",
    border: "1px solid rgba(0,0,0,0.08)",
    backfaceVisibility: "hidden",
  };

  return (
    <div
      style={{
        perspective: `${size * 6}px`,
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 300ms ease",
        }}
      >
        {/* Front */}
        <div
          style={{
            ...face,
            background: colors.front,
            transform: `translateZ(${size / 2}px)`,
          }}
        />
        {/* Back */}
        <div
          style={{
            ...face,
            background: colors.back,
            transform: `rotateY(180deg) translateZ(${size / 2}px)`,
          }}
        />
        {/* Right */}
        <div
          style={{
            ...face,
            background: colors.right,
            transform: `rotateY(90deg) translateZ(${size / 2}px)`,
          }}
        />
        {/* Left */}
        <div
          style={{
            ...face,
            background: colors.left,
            transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
          }}
        />
        {/* Top */}
        <div
          style={{
            ...face,
            background: colors.top,
            transform: `rotateX(90deg) translateZ(${size / 2}px)`,
          }}
        />
        {/* Bottom */}
        <div
          style={{
            ...face,
            background: colors.bottom,
            transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
          }}
        />
      </div>
    </div>
  );
}

export default Cube;
