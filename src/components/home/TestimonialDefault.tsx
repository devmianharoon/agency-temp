"use client";
import React from "react";
import { Scrollbar, A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
const TestimonialDefault = () => {
  const testimonialData = [
    {
      id: 1,
      details:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantie totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi artectbeatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sipernatur aut odit aut fugit sed quia consequunture",
      name: "Kane Willumsons",
      title: "SR Developer",
    },
    {
      id: 2,
      details:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantie totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi artectbeatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sipernatur aut odit aut fugit sed quia consequunture",
      name: "Kane Willumsons",
      title: "SR Developer",
    },
    {
      id: 3,
      details:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantie totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi artectbeatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sipernatur aut odit aut fugit sed quia consequunture",
      name: "Kane Willumsons",
      title: "SR Developer",
    },
    {
      id: 4,
      details:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantie totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi artectbeatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sipernatur aut odit aut fugit sed quia consequunture",
      name: "Mariya Luica",
      title: "Jr Designer",
    },
  ];
  return (
    <>
      <div className="testimonial-area">
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
            nextEl: ".navigation-next",
            prevEl: ".navigation-preview",
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
          }}
        >
          {testimonialData?.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-wrapper col">
                <div className="testimonial-text">
                  <p>{item.details}</p>
                  <h4> {item.name} </h4>
                  <span> {item.title} </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="bd-trending__navigations">
          <button className="case-button-prev navigation-preview arrow-button">
            <i className="fa-regular fa-angle-left"></i>
          </button>
          <button className="case-button-next navigation-next arrow-button">
            <i className="fa-regular fa-angle-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default TestimonialDefault;
