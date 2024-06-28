import Button from "@/components/Button";
import HeroSubTitle from "@/components/ui/HeroSubTitle";
import HeroTitle from "@/components/ui/HeroTitle";
import Card from "@/components/ui/hero-cards/Card";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const Investors = () => {
  const microInvestors = [
    {
      title: "Deal 1",
      stage: " $5k for 5% Equity",
      revenue: "$0/mth",
      duration: "1mth",
      investor: "People with Domain",
      text: "Expertise and Advisors ",
    },
    {
      title: "Deal 2",
      stage: " $25k worth of service for 10% Equity",
      revenue: "$100+/mth",
      duration: "1-3mths ",
      investor: "Developers, Engineers, Growth Marketers",
      text: "Growth Marketers",
    },
    {
      title: "Deal 3",
      stage: " $25k worth of service for 10% Equity",
      revenue: "$1k+/mth",
      duration: "3-6mths ",
      investor: "Everyone",
      text: "",
    },
    {
      title: "Deal 4",
      stage: " $125k worth of service for 5% Equity",
      revenue: "$5k+/mth",
      duration: "6-123mths ",
      investor: "Media, Influencers, Celebrity, Platform Owners",
      text: "",
    },
  ];
  const investors = [
    {
      title: "Deal 5",
      stage: " $1.5M for 10% Equity",
      revenue: "$50k+/mth",
      duration: "6-18mths",
      investor: "Angel Investors, VCs, PE, Institutions ",
      text: "",
    },
    {
        title: "Deal 6",
        stage: " $7.5M for 20% Equity",
        revenue: "$250k+/mth",
        duration: "12-24mths ",
        investor: "VCs, PE, Institutions ",
        text: "",
      },
    {
      title: "Deal 7",
      stage: "$1.5B for 20% Equity",
      revenue: "$1M+/mth",
      duration: "18-36mths",
      investor: "The Public",
      text: "",
    },
  ];
  return (
    <div className="flex flex-col w-full space-y-8 py-8 px-5 md:px-36">
      <div className="flex flex-col justify-center items-center space-y-5">
        <HeroTitle
          text="SINC Investors Network"
          subText="Our deals are structured not just to take in investments but to onboard owners passionate about our solutions. Our portfolio companies are valued at $50k at start, with these low valuation, you are guaranteed at least 2x-5x, usually been the first to invest.  "
        />
        <p className="font-[400] text-xs md:text-sm text-textColor-subTitle leading-5 md:leading-[23.8px] text-center">
          <span className="font-[600]">Disclaimer</span> These deal flows is a
          statement of our projections and may differ from stage to stage and
          from venture to venture and the guarantee is for deal 1, usually
          the first to invest
        </p>
      </div>
      <div className="">
        <p className="font-[400] text-xs md:text-sm text-textColor-subTitle leading-4 md:leading-[23.8px] text-center md:text-left">
          <span className="font-[600]">
            Micro Angel Investors & Service incubators{" "}
          </span>{" "}
          (Invest from $500 & above)
        </p>
      </div>
      <div className="grid lg:grid-col-4 md:grid-cols-2 grid-cols-1">
        {microInvestors.map((card, index) => (
          <Card
            key={index}
            style={`bg-transparent rounded-md py-5 px-4 h-60 w-80 flex flex-col space-y-3`}
          >
            <h2
              className={`font-[500] leading-[28.8px] text-textColor  text-md`}
            >
              {card.title}
            </h2>
            <div>
              <ui className="space-y-2">
                <li className="text-xs text-textColor-subTitle font-[400] flex">
                  <p>
                    {index === 0 && "  ✓ Idea Stage:"}
                    {index === 1 && "  ✓ Build Stage:"}
                    {index === 2 && "  ✓ Validation Stage:"}
                    {index === 3 && "  ✓ Traction Stage:"}
                    <span className="font-[600]">{card.stage}</span>
                  </p>
                </li>
                <li className="text-xs text-textColor-subTitle font-[400] flex">
                  <p>
                    ✓ Expected Revenue at This Stage:
                    <span className="font-[600]">{card.revenue}</span>
                  </p>
                </li>
                <li className="text-xs text-textColor-subTitle font-[400] flex">
                  <p>
                    ✓ Duration of Raise:{" "}
                    <span className="font-[600]">{card.duration}</span>
                  </p>
                </li>
                <li className="text-xs text-textColor-subTitle font-[400] flex">
                  <p>
                    ✓ Who Can Invest:
                    <span className="font-[600]">{card.investor}</span>
                  </p>
                </li>
                <li className="text-xs text-textColor-subTitle font-[600] list-none">
                  {card.text}
                </li>
              </ui>
            </div>
          </Card>
        ))}
      </div>

      <div className="">
        <p className="font-[400] text-xs md:text-sm text-textColor-subTitle leading-4 md:leading-[23.8px] text-center md:text-left">
          <span className="font-[600]">Angel Investors & Venture Capital</span>
          (Invest from $50k and above)
        </p>
      </div>
      <div className="grid lg:grid-col-4 md:grid-cols-2 grid-cols-1">
        {investors.map((card, index) => (
          <Card
            key={index}
            style={`bg-transparent rounded-md py-5 px-4 h-60 w-80 flex flex-col space-y-3`}
          >
            <h2
              className={`font-[500] leading-[28.8px] text-textColor  text-md`}
            >
              {card.title}
            </h2>
            <div>
              <ui className="space-y-2">
                <li className="text-xs text-textColor-subTitle font-[400] flex">
                  <p>
                    {index === 0 && "  ✓ Pre-seed Stage:"}
                    {index === 1 && "  ✓ Seed Stage:"}
                    {index === 2 && "  ✓ IPO Stage:"}
                    <span className="font-[600]">{card.stage}</span>
                  </p>
                </li>
                <li className="text-xs text-textColor-subTitle font-[400] flex">
                  <p>
                    ✓ Expected Revenue at This Stage:
                    <span className="font-[600]">{card.revenue}</span>
                  </p>
                </li>
                <li className="text-xs text-textColor-subTitle font-[400] flex">
                  <p>
                    ✓ Duration of Raise:{" "}
                    <span className="font-[600]">{card.duration}</span>
                  </p>
                </li>
                <li className="text-xs text-textColor-subTitle font-[400] flex">
                  <p>
                    ✓ Who Can Invest:
                    <span className="font-[600]">{card.investor}</span>
                  </p>
                </li>
                <li className="text-xs text-textColor-subTitle font-[600] list-none">
                  {card.text}
                </li>
              </ui>
            </div>
          </Card>
        ))}
        <Card style="bg-bg-black rounded-md py-5 px-4 h-60 md:w-96 w-100 space-y-3 flex flex-col items-center justify-center">
          <p className="font-[500] leading-7 md:text-left text-center text-xl text-white">Work with Service Incubators (SINC) to expedite your time to market</p>
          <Button className={""} variant={"secondary"} size={"cta"}>Join SINC Network</Button>
        </Card>
      </div>
      <div className="w-full flex justify-center">
        <Link href="#" className="font-[600] text-textColor underline flex">
          Build your dream <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Investors;
