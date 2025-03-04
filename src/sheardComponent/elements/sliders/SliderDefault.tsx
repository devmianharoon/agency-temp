"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import { Scrollbar, A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import bgOne from "../../../../public/assets/img/slider/slider-1.jpg";
import bgTwo from "../../../../public/assets/img/slider/slider-2.jpg";
import bgFour from "../../../../public/assets/img/slider/slider-4.jpg";
import bgFive from "../../../../public/assets/img/slider/slider-5.jpg";
import { usePathname } from "next/navigation";
import Button from "@/components/button/button";

const SliderDefault = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  const sliderData = [
    {
      id: 1,
      bgImg: bgOne,
      title: "Unleash Your Potential with IT Excellence",
      details:
        "Sed ut perspiciatis unde omnis iste natus error sit  voluptatem accusantium doloremque",
    },
    {
      id: 2,
      bgImg: bgTwo,
      title: "Tailored IT Solutions for Your Success",
      details:
        "Sed ut perspiciatis unde omnis iste natus error sit  voluptatem accusantium doloremque",
    },
    {
      id: 4,
      bgImg: bgFour,
      title: "Your Journey to IT Perfection Starts Here",
      details:
        "Sed ut perspiciatis unde omnis iste natus error sit  voluptatem accusantium doloremque",
    },
    {
      id: 5,
      bgImg: bgFive,
      title: "Tailored IT Solutions for Your Success",
      details:
        "Sed ut perspiciatis unde omnis iste natus error sit  voluptatem accusantium doloremque",
    },
  ];

  return (
    <>
      <div className="slider-area">
        <Swiper
          modules={[Scrollbar, A11y, Autoplay, Navigation]}
          spaceBetween={0}
          loop={true}
          observeParents={true}
          observer={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          navigation={{
            nextEl: ".banner-button-next",
            prevEl: ".banner-button-prev",
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 1,
            },
          }}>
          {sliderData?.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="single-slider">
                <div
                  className="slider-height slider-overlay z-1 d-flex align-items-center"
                  style={{ backgroundImage: `url(${item.bgImg.src})` }}>
                  <div className="container">
                    <div className="row ">
                      <div className="col-xl-8 col-lg-8">
                        <div className="slider-content">
                          <h1 data-animation="fadeInLeft" data-delay=".3s">
                            {item.title}
                          </h1>
                          <p data-animation="fadeInLeft" data-delay=".5s">
                            {item.details}
                          </p>
                          <div
                            className="slider-button"
                            data-animation="fadeInUp"
                            data-delay=".7s">
                            <Button text="learn more" url="/" />
                            <Link
                              className={`${
                                pathName === "/home-2"
                                  ? "slider-btn"
                                  : "text-link"
                              }`}
                              href="/about">
                              <span>
                                How It Works{" "}
                                <i className="fas fa-long-arrow-alt-right"></i>{" "}
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-3 d-none d-lg-block">
                        <div className="slider-video text-md-right">
                          <Link
                            href=""
                            onClick={() => {
                              openVideoModal();
                            }}
                            className="popup-video">
                            <i className="fas fa-play"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="bd-trending__navigation">
          <button className="banner-button-prev slick-arrow">
            <i className="fa-regular fa-angle-left"></i>
          </button>
          <button className="banner-button-next slick-arrow">
            <i className="fa-regular fa-angle-right"></i>
          </button>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="vWLcyFtni6U"
        onClose={() => {
          openVideoModal();
        }}
      />
    </>
  );
};

export default SliderDefault;
