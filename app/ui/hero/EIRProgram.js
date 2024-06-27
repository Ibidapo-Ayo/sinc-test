"use client";
import Button from "@/components/Button";
import HeroTitle from "@/components/ui/HeroTitle";
import Card from "@/components/ui/hero-cards/Card";
import icons from "@/constants/icons";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const EIRPrograms = () => {
  const cardInfo = [
    {
      title: "Application and Selection",
      info: "Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies. Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application. ",
      icon: icons.programs.selection,
    },
    {
      title: "Alignment Meeting and Proposal Submission",
      info: "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.",
      icon: icons.programs.proposal,
    },
    {
      title: "Negotiation and Agreement",
      info: "Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements. Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners. ",
      icon: icons.programs.agreement,
    },
    {
      title: "Onboarding",
      info: "Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members. Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration. ",
      icon: icons.programs.onboarding,
    },
  ];

  const TRANSLATE_AMOUNT = 400;
  const [translate, setTranslate] = useState(0);

  const currentRef = useRef(null);
  const handleLeftTranslate = () => {
    setTranslate((prev) => {
      const newTranslate = prev - TRANSLATE_AMOUNT;
      return Math.max(newTranslate, 0);
    });
  };

  const handleRightTranslate = () => {
    if (!currentRef.current) return;

    const edge = currentRef.current.scrollWidth;
    const width = currentRef.current.clientWidth;
    const maxTranslate = edge - width;

    setTranslate((prev) => {
      const newTranslate = prev + TRANSLATE_AMOUNT;
      return Math.min(newTranslate, maxTranslate);
    });
  };
  return (
    <>
      <div
        className="flex flex-col justify-center items-center w-full  space-y-8 py-8 px-5 md:px-60 overflow-x-hidden"
        ref={currentRef}
      >
        <HeroTitle
          text="Join Our Entrepreneur In Residence (EIR) Program"
          subText="Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each."
        />
        <div
          className="flex justify-center space-x-10 transition-transform"
          style={{ transform: `translateX(-${translate}px)` }}
        >
          {cardInfo.map((card, index) => (
            <Card
            key={index}
              style={`bg-white rounded-md py-5 px-4 h-100 m:h-96 w-[300px]  md:w-80 flex flex-col space-y-4 ${index === 0 && ""}`}
            >
              <div>
                <div className="w-9 h-9 bg-secondary rounded-full items-center justify-center flex p-2">
                  <Image
                    src={card.icon}
                    alt="alt"
                    width={28.29}
                    height={28.29}
                  />
                </div>
              </div>
              <h2
                className={`font-[500] leading-[28.8px] text-textColor  text-md`}
              >
                {card.title}
              </h2>
              <p className="text-textColor-subTitle font-[400] text-sm">
                {card.info}
              </p>
            </Card>
          ))}
        </div>

        <div className="w-full flex justify-center">
          <Link href="#" className="font-[600] text-textColor underline flex">
            Support the future <ArrowRight />
          </Link>
        </div>
        <div className="w-full flex justify-center space-x-5">
          <Button
            size="icon"
            variant="outline"
            className="h-full aspect-square w-auto p-1.5"
            onClick={handleLeftTranslate}
          >
            <ChevronLeft />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="h-full aspect-square w-auto p-1.5"
            onClick={handleRightTranslate}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </>
  );
};

export default EIRPrograms;
