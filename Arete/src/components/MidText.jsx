import React from "react";

const MidText = () => {
  return (
    <div className="relative flex h-[300px] overflow-hidden items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center -z-20">
        <svg viewBox="0 0 243 400" preserveAspectRatio="none">
          <path
            d="M 50 350 L 200 50" // Start at (50,350) and end at (200,50)
            // stroke="blue"
            stroke="#83938F"
            strokeWidth="0.25"
            fill="#83938F"
          />
        </svg>
      </div>
      <div className="w-[40%] text-center bg-white p-10 z-60">
        <span className="font-normal text-lg">
          Indulge in the pinnacle of luxury living with Arete Properties.
          Nestled in the heart of Dubai, we specialize in crafting exquisite
          villas that redefine opulence. Experience a lifestyle of
          sophistication and elegance unlike any other.
        </span>
      </div>
    </div>
  );
};

export default MidText;
