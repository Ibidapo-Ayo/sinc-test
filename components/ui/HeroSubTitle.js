import React from "react";

const HeroSubTitle = ({ text, textStyle="text-2xl" }) => {
  return (
    <div className="w-100 md:w-[462px]">
      <h2 className={`font-[500] leading-[28.8px] ${textStyle}`}>{text}</h2>
    </div>
  );
};

export default HeroSubTitle;
