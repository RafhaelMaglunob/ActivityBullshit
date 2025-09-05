import React from "react";

function Triangle({
  points = "0,0 100,0 50,100",
  size = 400,
  flipX = false,
  flipY = false,
  rotate = 0, // rotation in degrees
  color = "blue" // optional fill color
}) {
  // Build transform string properly
  const transforms = [];
  if (flipX) transforms.push("scaleX(-1)");
  if (flipY) transforms.push("scaleY(-1)");
  if (rotate) transforms.push(`rotate(${rotate}deg)`);

  const style = {
    transform: transforms.join(" "),
    transformOrigin: "50% 50%", // rotate/scale around center
    display: "block" // remove inline svg gap
  };

  return (
    <svg
      width={size}
      height={size}
      style={style}
      viewBox="0 0 100 100"
    >
      <polygon points={points} fill={color} />
    </svg>
  );
}

export default Triangle;
