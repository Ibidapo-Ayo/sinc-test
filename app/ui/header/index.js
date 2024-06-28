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
      <div className="flex justify-between px-5 md:px-36 py-5 bg-white items-center">
        <div className="lg:hidden block">
          <Logo />
        </div>
        <div className="lg:block hidden shrink-0">
          <Brand />
        </div>
        <div className="lg:block hidden">
          <HeaderCallToAction />
        </div>
        <div className="md:block lg:hidden">
          <Menu onClick={()=> setOpen(true)} />
        </div>
      </div>
      <MobileHeader setIsOpen={setOpen} isOpen={open} />
    </>
  );
};

export default Header;
