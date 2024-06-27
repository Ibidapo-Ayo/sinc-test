import Button from "@/components/Button";
import HeroSubTitle from "@/components/ui/HeroSubTitle";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="px-5 md:px-36">
      <div className="w-100 md:w-[553px] space-y-8">
        <HeroSubTitle text="Newsletter" textStyle="text-left text-xl md:text-2xl text-white" />
        <p className="text-xs text-white">
        Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.
        </p>

        <div className="w-full border border-bg rounded-full flex items-center justify-between pl-3">
            <input className="bg-transparent py-1 w-full outline-none border-none text-white" placeholder="Enter you email address" />
            <Button size={"cta"} className={"bg-white text-textColor hover:bg-white"}>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
