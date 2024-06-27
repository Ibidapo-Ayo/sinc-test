"use client";
import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Check } from "lucide-react";

const Banner = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="flex md:flex-row flex-col-reverse md:space-y-0 space-y-3 justify-between items-center py-20 bg-white px-5 md:px-60 ">
            <div className="w-100 md:w-1/2">
              <div className="w-100 md:w-[491px] space-y-3">
                <h4 className="text-[28px] md:text-[32px] md:text-left text-center leading-9 font-[500] text-textColor tracking-wide">
                  SINC Partners is a service incubation company
                </h4>
                <p className=" text-sm md:text-md text-textColor-subTitle font-[400] md:text-left text-center">
                  Connecting experts in product development and growth marketing
                  willing to offer their services to amazing startups in
                  exchange fo minute equity (usually 0.5% to 2%).
                </p>

                <div className="flex md:justify-start justify-center">
                  <Button variant={"secondary"} size={"cta"}>
                    SINC With us
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-100 md:w-1/2">
              <Image src="/banner_img.png" width={703} height={590} alt="Slider 1 image" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:flex-row flex-col-reverse md:space-y-0 space-y-3 justify-between items-center py-20 bg-white px-5 md:px-60 ">
            <div className="w-100 md:w-1/2">
              <div className="w-100 md:w-[491px] space-y-3">
                <h4 className="text-[28px] md:text-[32px] md:text-left text-center leading-9 font-[500] text-textColor tracking-wide">
                  We are big on these 3 things;
                </h4>
                <div>
                  <ui className="">
                    <li className="text-md text-textColor-subTitle font-[400] flex">
                      <Check />
                      Service Incubation & Ecosystem Advocacy{" "}
                    </li>
                    <li className="text-md text-textColor-subTitle font-[400] flex">
                      <Check /> Building SAAS & Marketing Tech Platforms{" "}
                    </li>
                    <li className="text-md text-textColor-subTitle font-[400] flex">
                      <Check />
                      Institutional Innovations
                    </li>
                  </ui>
                </div>
                <div className="flex md:justify-start justify-center">
                  <Button variant={"secondary"} size={"cta"}>
                    SINC With us
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-100 md:w-1/2">
              <Image
                src="/images/slider/slider1.png"
                width={703}
                height={590}
                alt="Slider 2 image"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:flex-row flex-col-reverse md:space-y-0 space-y-3 justify-between items-center py-20 bg-white px-5 md:px-60 ">
            <div className="w-100 md:w-1/2">
              <div className="w-100 md:w-[491px] space-y-3">
                <h4 className="text-[28px] md:text-[32px] md:text-left text-center leading-9 font-[500] text-textColor tracking-wide">
                  Come with an idea, leave with a company.
                </h4>
                <div>
                  <p className=" text-sm md:text-md text-textColor-subTitle font-[400] md:text-left text-center">
                    You, alongside seasoned service partners and investors,
                    expedite the growth and market entry of your startup.
                  </p>
                </div>
                <div className="flex md:justify-start justify-center">
                  <Button variant={"secondary"} size={"cta"}>
                    SINC With us
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-100 md:w-1/2">
              <Image
                src="/images/slider/slider2.png"
                width={703}
                height={590}
                alt="Slider 3 image"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="mt-20 w-100 md:max-w-2xl px-10 mx-auto justify-center items-center">
        <div className="bg-white rounded-[32px] py-5 px-2 md:px-8 space-y-5 h-auto w-100">
          <p className="text-xs md:text-md font-[500] text-center text-textColor leading-4 md:leading-7 tracking-tight">"Nigeria and Africa has a massive network effect that have not be fully utilized. With Nigerians/Africans in every country and territory of the world, we can scale an African business to 100+ countries in few weeks"
          </p>
          <div className="w-full mx-auto space-y-2">
            <p className="text-sm md:text-[16px] font-[500] tracking-tight text-center">
              Daniel Izeghs Oratokhai
            </p>
            <p className="text-textColor-subTitle text-xs md:text-sm text-center">
              Managing Partner at SINC Partners Ltd
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
