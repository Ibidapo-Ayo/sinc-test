
import HeroTitle from "@/components/ui/HeroTitle";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section5 = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full space-y-8 py-8 px-5 md:px-60">
      <HeroTitle
        text="Our Studio Portfolio"
        subText="Our 2024 Service Incubator Portfolio Companies"
      />
    <Image src="/Portfolio.png" width={1100} height={100} />
    <div className="w-full flex justify-center">
        <Link href="#" className="font-[600] text-textColor underline flex">View All Companies <ArrowRight />  </Link>
      </div>
    </div>
  );
};

export default Section5;
