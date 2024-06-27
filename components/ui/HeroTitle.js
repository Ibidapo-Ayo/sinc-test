import React from "react";

const HeroTitle = ({ text, subText }) => {
  return (
    <div className="w-100 md:w-[898px] space-y-3">
      <h2 className="text-2xl md:text-5xl font-[500] text-center leading-7 md:leading-[72.8px]">
        {text}
      </h2>
      <div className="w-auto mx-auto">
        {subText && (
          <p className="text-sm text-textColor-subTitle leading-[23.8px] font-[400] text-center">
            {subText}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeroTitle;
