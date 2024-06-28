
import HeroTitle from "@/components/ui/HeroTitle";
import Card from "@/components/ui/hero-cards/Card";
import React from "react";

const Innovation = () => {
  const cardInfo = [
    {
      title: "Service Incubator",
      info: "A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP",
    },
    {
      title: "Virtualting",
      info: "A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource",
    },
    {
      title: "Diiming",
      info: "A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice ",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full space-y-8 py-8 px-5 md:px-36">
      <HeroTitle
        text="Our Concept Innovations"
        subText="We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;"
      />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        {cardInfo.map((card, index) => (
          <Card
          key={index}
            style={`bg-white rounded-md py-5 px-4 h-52 w-80 flex flex-col justify-between items-cenetr`}
          >
            <h2 className={`font-[500] leading-[28.8px] text-textColor  text-xl text-center`}>
              {card.title}
            </h2>
            <p className="text-textColor-subTitle font-[400] text-sm text-center">
              {card.info}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Innovation;
