import HeroTitle from "@/components/ui/HeroTitle";
import Card from "@/components/ui/hero-cards/Card";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  const blog = [
    {
      title: "Top Ten Most Powerful startups",
      info: "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.",
      readTime: "2 min",
      image: images.blog.blog1,
      startup: images.blog.startup.startup1,
    },
    {
      title: "Top Ten Most Powerful startups",
      info: "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.",
      readTime: "2 min",
      image: images.blog.blog2,
      startup: images.blog.startup.startup2,
    },
    {
      title: "Top Ten Most Powerful startups",
      info: "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.",
      readTime: "2 min",
      image: images.blog.blog2,
      startup: images.blog.startup.startup2,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full space-y-8 py-8 px-5 md:px-36">
      <HeroTitle text="Blogs & Resources" />
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center space-x-0 md:space-y-0 space-y-5 md:space-x-10">
        {blog.map((card, index) => (
          <Card
            key={index}
            style={`y-5 px-4 h-72 w-100 md:w-80 flex flex-col justify-between space-y-3`}
          >
            <div className="relative">
              <Image src={card.image} alt="alt" width={378} height={235} />
              <div className="bg-gradient-to-b from-bg-black-100 to-bg-black-200 opacity-40 absolute inset-0" />
              <div className="flex absolute bottom-0 ml-3 items-center space-x-3">
                <h2
                  className={`font-[500] leading-[28.8px] text-white text-xs`}
                >
                  {card.title}
                </h2>
                <div className="flex space-x-2 items-center">
                  <Clock className="w-3 text-white" />
                  <p className="text-xs text-white">{card.readTime}</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white">
                  <Image
                    src={icons.play}
                    alt="alt"
                    width={56}
                    height={56}
                    className=""
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="">
                <h2
                  className={`font-[500] leading-[28.8px] text-textColor text-xs`}
                >
                  {card.title}
                </h2>
                <p className="text-textColor-subTitle font-[400] text-xs ">
                  {card.info}
                </p>
              </div>
              <div className="flex items-center  h-full">
                <Image src={card.startup} alt="alt" width={85} height={100} />
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link href="#" className="font-[600] text-textColor underline flex">
        See More Blogs & Resources<ArrowRight />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
