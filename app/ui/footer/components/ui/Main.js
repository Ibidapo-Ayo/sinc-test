import Logo from "@/app/ui/header/brand/Logo";
import HeroSubTitle from "@/components/ui/HeroSubTitle";
import icons from "@/constants/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Main = () => {
  const platform = [
    "Kofoundme",
    "InResidency",
    "Service Market",
    "Founder School",
    "Metty",
    "Grantty",
    "Boldtell",
    "Chekwa",
  ];
  const initiatives = [
    "Jabi Plains",
    "Local Pricing Initiative",
    "Scholarship Program",
    "SSMN Pricing",
    "University STEM  ",
    "University InResidency ",
    "1M Nigeria  Products",
    "Founders Festival ",
  ];
  const aboutUs = [
    "Who We Are",
    "Our People",
    "Concept Innovations",
    "Our Process",
    "Investors Network",
    "CSR & Events ",
    "Career",
    "Contact ",
  ];

  const more = [
    "Services",
    "Equity Jobs",
    "EIR Program",
    "Offers",
    "Innovation News",
    "FAQ ",
    "Blog & Resources",
    "Press ",
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto,1fr,auto] justify-between gap-4 px-5 md:px-36">
      <div className="mt-5 w-100 flex md:justify-start justify-center md:items-start items-center flex-col md:w-[200px] space-y-5">
        <Image src="/footer_log.png" width={114.94} height={64} alt="Sinc logo image" />
        <p className="font-[300] w-100 leading-[27px] text-sm text-textColor-footer md:text-left text-center">
          SINC Partners is a service incubation company connecting experts in
          product development and growth marketing willing to offer their
          services to amazing startups in exchange for minute equity (usually
          0.5% to 2%)
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-3 justify-center">
        <div className="mt-5 space-y-4">
          <h2 className={`font-[500] text-white leading-[28.8px]`}>Platform</h2>
          <ul className="flex flex-col space-y-3">
            {platform.map((link, index) => (
              <Link href="#" key={index} className="text-textColor-footer text-xs">
                {link}
              </Link>
            ))}
          </ul>
        </div>
        <div className="mt-5 space-y-4">
          <h2 className={`font-[500] text-white leading-[28.8px]`}>
            Initiatives
          </h2>
          <ul className="flex flex-col space-y-3">
            {initiatives.map((link, index) => (
              <Link href="#" key={index} className="text-textColor-footer text-xs">
                {link}
              </Link>
            ))}
          </ul>
        </div>
        <div className="mt-5 space-y-4">
          <h2 className={`font-[500] text-white leading-[28.8px]`}>About Us</h2>
          <ul className="flex flex-col space-y-3">
            {aboutUs.map((link, index) => (
              <Link href="#" key={index} className="text-textColor-footer text-xs">
                {link}
              </Link>
            ))}
          </ul>
        </div>
        <div className="mt-5 space-y-4">
          <h2 className={`font-[500] text-white leading-[28.8px]`}>More</h2>
          <ul className="flex flex-col space-y-3">
            {more.map((link, index) => (
              <Link href="#" key={index} className="text-textColor-footer text-xs">
                {link}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-[250px] border-l border-bg pl-5">
        <div className="mt-4 space-y-4">
          <h2 className={`font-[500] text-white leading-[28.8px]`}>
            Locations
          </h2>
          <div className="space-y-2 flex flex-col">
            <Link href="#" className="text-white font-[500] text-xs">
              Abuja, Nigeria
            </Link>
            <Link href="#" className="text-white font-[500] text-xs">
              Lagos, Nigeria
            </Link>
            <Link href="#" className="text-white font-[500] text-xs">
              Philadelphia, USA
            </Link>
          </div>
          <div className="w-full flex justify-between space-x-4 items-center">
            <div className="w-full space-y-3">
              <Image
                src="/accreditation.png"
                alt="alt"
                width={177.28}
                height={66}
              />
              <h2 className={`font-[500] text-white text-xs`}>
                Trusted Business
              </h2>
            </div>
            <div className="w-1/2 space-y-3">
                <Image src={icons.whatsapp} alt="alt" width={20} height={20} />
                <h2 className={`font-[500] text-xs text-white`}>
                Chat with us
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
