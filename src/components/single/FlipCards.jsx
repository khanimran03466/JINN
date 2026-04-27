"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { EffectFlip, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import FinancialInstitutions from "../svgs/home/who-its-for/FinancialInstitutions";
import DataItLeaders from "../svgs/home/who-its-for/DataItLeaders";
import LegalCompliance from "../svgs/home/who-its-for/LegalCompliance";
import InsurenceProvider from "../svgs/home/who-its-for/InsurenceProvider";
import Logistics from "../svgs/home/who-its-for/Logistics";
import HealthCare from "../svgs/home/who-its-for/HealthCare";
import PublicSector from "../svgs/home/who-its-for/PublicSector";

const FlipCards = () => {
  gsap.registerPlugin(ScrollTrigger);
  const swiperRef = React.useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".who-its-for",
      scroller: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5, // Increased scrub for even smoother delay
      fastScrollEnd: true,
      onUpdate: (self) => {
        if (swiperRef.current && swiperRef.current.swiper) {
          const swiper = swiperRef.current.swiper;
          const totalSlides = swiper.slides.length;
          const targetIndex = Math.min(
            Math.floor(self.progress * totalSlides),
            totalSlides - 1
          );
          if (swiper.activeIndex !== targetIndex) {
            swiper.slideTo(targetIndex);
          }
        }
      },
    });
  });

  return (
    <div className="flip-container-wrapper">
      <Swiper
        ref={swiperRef}
        effect={"flip"}
        grabCursor={false}
        pagination={false}
        navigation={false}
        allowTouchMove={false}
        lazy={{ loadPrevNext: true }}
        watchSlidesProgress={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card-content">
            <FinancialInstitutions />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-content">
            <DataItLeaders />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-content">
            <LegalCompliance />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-content">
            <InsurenceProvider />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-content">
            <Logistics />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-content">
            <HealthCare />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-content">
            <PublicSector />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FlipCards;
