import React from "react";
import FuzzyText from "./FuzzyText";

const Nopage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <FuzzyText baseIntensity={0.1} hoverIntensity={0.1} enableHover={true}>
        <div className="text-center">
          <h1 className="text-white text-6xl font-bold">404</h1>
          <h1 className="text-white text-6xl font-bold">Erorr</h1>
        </div>
      </FuzzyText>
    </div>
  );
};

export default Nopage;
