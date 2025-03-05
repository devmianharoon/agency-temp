"use client"
import React from "react";
import Link from "next/link";
import "swiper/css/bundle";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import thumbOne from "../../../public/assets/img/project/01.jpg";
import thumbTwo from "../../../public/assets/img/project/02.jpg";
import thumbThree from "../../../public/assets/img/project/03.jpg";
import Image from "next/image";

const CourseDefault = () => {
  const casesData = [
    {
      id: 1,
      img: thumbOne,
    },
    {
      id: 2,
      img: thumbTwo,
    },
    {
      id: 3,
      img: thumbThree,
    },
    {
      id: 4,
      img: thumbOne,
    },
    {
      id: 5,
      img: thumbTwo,
    },
    {
      id: 6,
      img: thumbThree,
    },
  ];

  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        loop={true}
        observeParents={true}
        observer={true}
        centeredSlides={false}
        breakpoints={{
          768: {
            slidesPerView: 1.5,
          },
          992: {
            slidesPerView: 2,
          },
          1400: {
            slidesPerView: 2.5,
          },
          1700: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          nextEl: ".case-button-next",
          prevEl: ".case-button-prev",
        }}
      >
        {casesData.map((item) => (
          <SwiperSlide key={item.id}>
             <div  className="col-12">
            <div className="project-wrapper">
              <div className="project-img">
                <Link href="#">
                  <Image style={{ width: "100%", height: "auto" }} src={item.img} alt="" />
                </Link>
                <div className="project-text">
                  <span>business strategy</span>
                  <h3>
                    <Link href="/case-1">Financial Solutions</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="bd-trending__navigations ">
        <button className="case-button-prev banner-button-prev slick-arrow">
          <i className="fa-regular fa-angle-left"></i>
        </button>
        <button className="case-button-next banner-button-next slick-arrow">
          <i className="fa-regular fa-angle-right"></i>
        </button>
      </div>
      
    </>
  );
};

export default CourseDefault;
