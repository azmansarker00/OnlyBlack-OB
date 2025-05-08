import React from "react";

const FuzzyText = ({
  baseIntensity = 0.2,
  hoverIntensity = 0.5,
  enableHover = true,
  children,
}) => {
  return (
    <span
      style={{
        filter: `blur(${baseIntensity}rem)`,
        transition: "filter 0.3s ease-in-out",
        display: "inline-block",
      }}
      onMouseEnter={(e) => {
        if (enableHover) e.target.style.filter = `blur(${hoverIntensity}rem)`;
      }}
      onMouseLeave={(e) => {
        if (enableHover) e.target.style.filter = `blur(${baseIntensity}rem)`;
      }}
    >
      {children}
    </span>
  );
};

export default FuzzyText;
