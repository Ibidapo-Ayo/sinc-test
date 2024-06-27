
import HeroTitle from "@/components/ui/HeroTitle";
import Card from "@/components/ui/hero-cards/Card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Investors = () => {
  const cardInfo = [
    {
      title: "We Ideate",
      info: "We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.",
      style:"bg-secondary"
    },
    {
      title: "You Validate",
      info: "You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions ",
      style:"bg-secondary-100"
    },
    {
      title: "You Co-own",
      info: "After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.",
      style:"bg-secondary-200"
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full space-y-8 py-8 px-5 md:px-60">
      <HeroTitle
        text="SINC Investors Network"
        subText="Our deals are structured not just to take in investments but to onboard owners passionate about our solutions. Our portfolio companies are valued at $50k at start, with these low valuation, you are guaranteed at least 2x-5x, usually been the first to invest.  "
      />
      <p className="font-[400] text-sm text-textColor-subTitle leading-[23.8px] text-center"><span className="font-[600]">Disclaimer</span> These deal flows is a statement of our projections and may differ from stage to stage and from venture to venture and the guarantee is for deal 1, usually the first to invest</p>
      <div className="flex flex-col md:flex-row justify-between items-center space-x-0 md:space-y-0 space-y-5 md:space-x-10">
        {cardInfo.map((card, index) => (
          <Card
          key={index}
            style={`bg-white rounded-md py-5 px-4 h-72 w-100 md:w-80 flex flex-col justify-between space-y-3`}
          >
            <div className={`w-[60px] h-[60px] shrink-0 rounded-[100%] flex items-center justify-center ${card.style} text-white font-[600] p-2`}>
                {index +1}
            </div>
            <h2 className={`font-[500] leading-[28.8px] text-textColor  text-md`}>
              {card.title}
            </h2>
            <p className="text-textColor-subTitle font-[400] text-sm ">
              {card.info}
            </p>
          </Card>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link href="#" className="font-[600] text-textColor underline flex">Build your dream <ArrowRight />  </Link>
      </div>
    </div>
  );
};

export default Investors;
