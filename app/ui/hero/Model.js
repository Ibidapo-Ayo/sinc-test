import Button from "@/components/Button";
import HeroSubTitle from "@/components/ui/HeroSubTitle";
import HeroTitle from "@/components/ui/HeroTitle";
import Card from "@/components/ui/hero-cards/Card";
import icons from "@/constants/icons";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Model = () => {
  const cardInfo = [
    {
      title: icons.triangle,
      info: "Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support",
    },
    {
      title: icons.polygon,
      info: "If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment",
    },
    {
      title: icons.pentagon,
      info: "Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return ",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full  space-y-8 py-8 px-5 md:px-60">
      <HeroTitle
        text="Our Service Incubation Model"
        subText="The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as been first to invest."
      />
      <div className="w-full">
        <HeroSubTitle text="Hypothesis" textStyle="text-left text-xl" />
        <p className="text-sm text-textColor-subTitle">
          Just a few reasons we know its time for this model
          within the ecosystem
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center space-x-0 md:space-y-0 space-y-5 md:space-x-10">
        {cardInfo.map((card, index) => (
          <Card
          key={index}
            style={`bg-white rounded-md py-5 px-4 h-52 w-100 md:w-80 flex flex-col justify-between items-cenetr`}
          >
            <Image src={card.title} width={40} height={40} alt="" />
            <p className="text-textColor-subTitle font-[400] text-sm">
              {card.info}
            </p>
          </Card>
        ))}
      </div>
      <div className="w-full space-y-5">
        <div>
          <HeroSubTitle text="Case Study" textStyle="text-left text-xl" />
          <p className="text-sm text-textColor-subTitle">
            See what Service Incubators get, the maths behind Service Equity
            (SEEQ) and what the value of your share equity can be over time
          </p>
        </div>
        <div className="flex md:flex-row flex-col space-x-0 space-y-5 md:space-y-0 md:space-x-2">
          <Button variant={"outline"} size={"cta"} className={"text-textColor"}>
            Service Incubator Equity
          </Button>
          <Button variant={"outline"} size={"cta"} className={"text-textColor"}>
            SEEQ Maths Equation
          </Button>
          <Button variant={"outline"} size={"cta"} className={"text-textColor"}>
            Value of my Equity Over Time
          </Button>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Link href="#" className="font-[600] text-textColor underline flex">Become A Service Incubator <ArrowRight /> </Link>
      </div>
    </div>
  );
};

export default Model;
