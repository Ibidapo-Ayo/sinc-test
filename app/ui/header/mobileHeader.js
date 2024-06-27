import Link from "next/link";
import React from "react";
import HeaderCallToAction from "./cta";
import Brand from "./brand";
import { X } from "lucide-react";

const MobileHeader = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`md:hidden fixed top-0 left-0 h-full bg-black text-white p-5 z-40 transition-transform transform flex flex-col space-y-8 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ width: "300px" }}
    >
      <div className="flex justify-end">
        <X onClick={()=> setIsOpen(false)} />
      </div>
      <Brand />
      <HeaderCallToAction />
    </div>
  );
};

export default MobileHeader;
