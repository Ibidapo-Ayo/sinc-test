import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Brand = () => {
  const navLink = [
    "About",
    "SIP",
    "Studio",
    "SEEQ",
    "Platform",
    "Initiatives",
    "More",
  ];
  return (
    <div className="w-100 md:w-1/2 flex space-x-0 space-y-3 md:space-y-0 md:space-x-6 items-center">
      <div className="md:block hidden">
        <Logo />
      </div>
      <ul className=" space-x-0 space-y-3 md:space-y-0 md:space-x-6 flex md:flex-row flex-col">
        {navLink.map((link, index) => (
          <Link key={index} className="font-[500]" href={link.toLowerCase()}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Brand;
