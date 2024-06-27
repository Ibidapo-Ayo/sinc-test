import Button from "@/components/Button";
import HeroTitle from "@/components/ui/HeroTitle";
import Card from "@/components/ui/hero-cards/Card";
import images from "@/constants/images";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EquityJobs = () => {
  const companies = [
    {
      title: "Chief Excutive Officer",
      info: "This company is a SAAS Startup that builds AI copy generator...",
      location: "Abuja, Nigeria",
      industy: "On-demand print",
      equity: "1.2%",
      stipend: "NGN 200,000/mth ",
      deadline: "24th, January 2024",
      role_type: "Full-time",
      image: images.company.skimake,
    },
    {
      title: "UX Strategist",
      info: "This company is a SAAS Startup that builds AI copy generator... ",
      location: "Abuja, Nigeria",
      industy: "E-commerce",
      equity: "1.2%",
      stipend: "NGN 200,000/mth ",
      deadline: "24th, January 2024",
      role_type: "Full time",
      image: images.company.kreeca,
    },
    {
      title: "CTO & Head of innovations",
      info: "This company is a SAAS Startup that builds AI copy generator...",
      location: "Abuja, Nigeria",
      industy: "Fintech",
      equity: "1.2%",
      stipend: "NGN 200,000/mth ",
      deadline: "24th, January 2024",
      role_type: "Full time",
      image: images.company.krowdback,
    },
    {
      title: "Backend Developer",
      info: "This company is a SAAS Startup that builds AI copy generator...",
      location: "Abuja, Nigeria",
      industy: "Transportation",
      equity: "1.2%",
      stipend: "NGN 200,000/mth ",
      deadline: "24th, January 2024",
      role_type: "Full time",
      image: images.company.wetta,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full space-y-8 py-8 px-5 md:px-60">
      <HeroTitle
        text="Equity jobs"
        subText="See companies and startups offering equity or a mix of cash and equity for very important position in their company"
      />
      <div className="flex flex-col md:flex-row justify-between items-center space-x-0 md:space-y-0 space-y-5 md:space-x-10">
        {companies.map((card, index) => (
          <Card
            key={index}
            style={`bg-white rounded-md py-5 px-4 h-auto w-100 md:w-80 flex flex-col justify-between space-y-3`}
          >
            <Image src={card.image} alt="alt" width={188.5} height={64} />
            <p className="text-textColor-subTitle font-[400] text-sm ">
              {card.info}
            </p>
            <h2
              className={`font-[500] leading-[28.8px] text-textColor  text-md`}
            >
              {card.title}
            </h2>
            <div className="flex justify-between">
              <div>
                <p className="text-textColor-footer text-xs text-end">LOCATION</p>
                <p className="text-textColor text-sm">{card.location}</p>
              </div>
              <div>
                <p className="text-textColor-footer text-xs text-end">INDUSTRY</p>
                <p className="text-textColor text-sm">{card.industy}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-textColor-footer text-xs text-end">EQUITY</p>
                <p className="text-textColor text-sm">{card.equity}</p>
              </div>
              <div>
                <p className="text-textColor-footer text-xs text-end">STIPEND</p>
                <p className="text-textColor text-sm">{card.stipend}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-textColor-footer text-xs text-end">DEADLINE</p>
                <p className="text-textColor text-sm">{card.deadline}</p>
              </div>
              <div>
                <p className="text-textColor-footer text-xs text-end">ROLE TYPE</p>
                <p className="text-textColor text-sm">{card.role_type}</p>
              </div>
            </div>
            <div>
              <Button variant={"secondary"} size={"cta"}>
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link href="#" className="font-[600] text-textColor underline flex">
        See More Equity Jobs <ArrowRight />{" "}
        </Link>
      </div>
    </div>
  );
};

export default EquityJobs;
