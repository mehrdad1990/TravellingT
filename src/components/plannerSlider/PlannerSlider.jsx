"use client";

import { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const PlannerSlider = (props) => {
  const { data } = props;
  // console.log(data);
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      loopedSlides: 16,
      speed: 700,
      autoplay: {
        delay: 1500,
        disableOnInteraction: true,
      },
      centeredSlides: true,
      breakpoints: {
        400: { slidesPerView: 1 },
        560: { slidesPerView: 1 },
        800: { slidesPerView: 2 },
        1060: { slidesPerView: 2 },
        1400: { slidesPerView: 4 },
        1560: { slidesPerView: 5 },
        1700: { slidesPerView: 6 },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section className="overflow-x-hidden">
      <div className="swiper-container" ref={swiperRef}>
        <ul className="swiper-wrapper ag-slide_list">
          {data.map((slide, index) => (
              slide.title &&
              <li className={`swiper-slide ag-slide_item`}
              key={index} data-swiper-autoplay="1500">
               <div className="flex flex-col">
                 <img
                   src={slide.imageUrl}
                   alt={slide.title}
                   style={{ margin: "0 34px", borderRadius: "19px", height: "300px" }}
                   className="object-cover"
                 />
                 <div
                   style={{
                     margin: "0 34px",
                     boxSizing: "border-box",
                     padding: "10px",
                     height: "80px",
                   }}
                 >
                 
                     <h6 className="font-semibold capitalize text-lg md:text-xl">{slide.title}</h6>
                 
                 </div>
               </div>
             </li>
          
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PlannerSlider;
