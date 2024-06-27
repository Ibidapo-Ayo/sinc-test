import HeroTitle from "@/components/ui/HeroTitle";
import Card from "@/components/ui/hero-cards/Card";
import React from "react";

const AreaOfFocus = () => {
  const cardInfo = [
    {
      title: "01",
      info: "Business Support & Incubation",
      style: "bg-secondary",
    },
    {
      title: "02",
      info: "On-Demand & As-A-Service",
      style: "bg-secondary-100",
    },
    {
      title: "03",
      info: "Marketplace & Crowdsourcing",
      style: "bg-secondary-200",
    },
    {
      title: "04",
      info: "Aggregation & Shared Economy",
      style: "bg-secondary-300",
    },
    {
      title: "05",
      info: "Decentralized Economy & Digital Assets",
      style: "bg-secondary-200",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full  space-y-8 py-8 px-5 md:px-60">
      <HeroTitle
        text="Our Area of Focus"
        subText="In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab"
      />
      <div className="flex md:flex-row flex-col md:space-y-0 space-y-2 w-full">
        {cardInfo.map((card, index) => (
          <Card key={index} style={`${card.style} p-5 h-40 w-100 md:w-60 flex flex-col justify-between`}>
            <p className="font-[400] text-xl md:text-md text-white">{card.title}</p>
            <p className="font-[400] text-xl md:text-md text-white">
             {card.info}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AreaOfFocus;
