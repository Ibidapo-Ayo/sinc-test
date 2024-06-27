import icons from "@/constants/icons";
import { Copyright } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterMini = () => {
  return (
    <div className=" px-5 md:px-36 py-5 space-y-8">
      <div className="w-full flex md:flex-row flex-col justify-between md:space-y-0 space-y-5">
        <div className="w-100 md:w-3/5">
          <p className="text-textColor-footer text-xs">
            Guaranteed 2x on your service or cash investment, usually been the
            first to invest.
            <span className="font-[400] text-white">
              Get in early and SINC your guaranty!
            </span>
          </p>
        </div>
        <div className="flex w-100 items-center space-x-2 md:w-2/5">
          <Image src="/GASUS.png" width={120} height={38} alt="" />
          <p className="text-textColor-footer  leading-[23.8px] text-xs">
            We are a business built on the foundation of Christian values and
            belief
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between w-full md:space-y-0 space-y-5">
        <p className="flex text-white text-sm font-[400]">
          <Copyright /> 2023 SINC Partners Ltd. All rights reserved
        </p>
        <div className="flex flex-col justify-center items-center space-y-3">
          <div className="flex space-x-5">
            <Link href="#" className="text-white font-[500] text-sm underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white font-[500] text-sm underline">
              Terms of service
            </Link>
            <Link href="#" className="text-white font-[500] text-sm underline">
              Security
            </Link>
          </div>
          <p className="flex text-white text-sm font-[400] text-center">
            Web in Nigeria
          </p>
        </div>
        <div className="flex justify-between space-x-3">
          <div>
            <Image
              src={icons.facebook}
              alt="alt"
              className=""
              width={20.38}
              height={20.38}
            />
          </div>
          <div>
            <Image src={icons.twitter} alt="alt" width={20} height={20} />
          </div>
          <div>
            <Image src={icons.instagram} alt="alt" width={20} height={20} />
          </div>
          <div>
            <Image src={icons.linkedin} alt="alt" width={20} height={20} />
          </div>
          <div>
          <Image src={icons.medium} alt="alt" width={20} height={20} />
          </div>
          <div>
            <Image src={icons.youtube} alt="alt" width={20} height={20} />
          </div>
          <div>
            <Image src={icons.webchat} alt="alt" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMini;
