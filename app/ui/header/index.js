"use client";
import React, { useState } from "react";
import Brand from "./brand";
import HeaderCallToAction from "./cta";
import MobileHeader from "./mobileHeader";
import Logo from "./brand/Logo";
import { Menu } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between px-5 md:px-60 py-5 bg-white">
        <div className="block">
          <Logo />
        </div>
        <div className="md:block hidden">
          <Brand />
        </div>
        <div className="md:block hidden">
          <HeaderCallToAction />
        </div>
        <div className="md:hidden block">
          <Menu onClick={()=> setOpen(true)} />
        </div>
      </div>
      <MobileHeader setIsOpen={setOpen} isOpen={open} />
    </>
  );
};

export default Header;
