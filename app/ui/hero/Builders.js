import HeroSubTitle from "@/components/ui/HeroSubTitle";
import HeroTitle from "@/components/ui/HeroTitle";
import React from "react";

const Builders = () => {
  return (
    <div className="flex flex-col justify-center items-center w-100 space-y-8 px-5 md:px-36 py-8">
      <HeroTitle text="Network of builders helping startup scale" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="w-100 bg-white p-6 space-y-5">
          <HeroSubTitle text="Work with Service Incubators to expedite your time-to-market" textStyle="md:text-left text-center text-xl" />
          <p className="text-sm text-textColor-subTitle leading-7 font-[400] md:text-left text-center">
            Collaborate with our meticulously chosen service partners, each with
            a vested interest, ensuring a shared commitment to success in the
            game of venture building.
            <span className="font-[600] block mt-8">
              For 7.5% equity, you get a product manager, product designer,
              frontend engineer, software engineer and growth marketer to build
              the MVP of your app or web application and validate it
            </span>
          </p>
        </div>
        <div className="bg-white p-6  space-y-5">
          <HeroSubTitle text="Work with Service Incubators to expedite your time-to-market" textStyle="md:text-left text-center text-xl" />
          <p className="text-sm text-textColor-subTitle leading-7 font-[400] md:text-left text-center">
            Startups that have built and validated their product can take
            advantage of the financial resources of the SINC Investors Network,
            elevating their potential for success in the venture capital
            landscape.
            <span className="font-[600] block mt-8">
              Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12
              months
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Builders;
