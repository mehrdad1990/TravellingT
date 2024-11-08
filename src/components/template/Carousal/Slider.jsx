"use client"

import { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import {ASSETS} from '../../../../public/Assets'
import Image from 'next/image';
import logo from '../../../../public/icon/days.svg'
import Link from 'next/link';

const SwiperComponent = () => {
  const slides = [
    {
      "src": ASSETS.itely,
      "title": "itely",
      "cost":"$15k",
      "trip":"28 days"
    },
    {
      "src": ASSETS.thailand,
      "title": "thailand",
      "cost":"$5k",
      "trip":"8 days"
    },
    {
      "src": ASSETS.south_africa,
      "title": "south africa",
      "cost":"$20k",
      "trip":"20 days"
    },
    {
      "src": ASSETS.japan,
      "title": "japan",
      "cost":"$25k",
      "trip":"18 days"
    },
    {
      "src": ASSETS.spain,
      "title": "spain",
      "cost":"$10k",
      "trip":"10 days"
    },
    {
      "src": ASSETS.columbia,
      "title": "columbia",
      "cost":"$15k",
      "trip":"28 days"
    },
    {
      "src": ASSETS.france,
      "title": "france",
      "cost":"$35k",
      "trip":"28 days"
    },
    {
      "src": ASSETS.indonesia,
      "title": "indonesia",
      "cost":"$35k",
      "trip":"38 days"
    },
    {
      "src": ASSETS.canada,
      "title": "canada",
      "cost":"$1k",
      "trip":"2 days"
    },
    {
      "src": ASSETS.india,
      "title": "india",
      "cost":"$5k",
      "trip":"8 days"
    },
    {
      "src": ASSETS.australia,
      "title": "australia",
      "cost":"$1k",
      "trip":"2 days"
    },
    {
      "src": ASSETS.USA,
      "title": "USA",
      "cost":"$5k",
      "trip":"18 days"
    },
    {
      "src": ASSETS.brazil,
      "title": "brazil",
      "cost":"$115k",
      "trip":"28 days"
    },
    {
      "src": ASSETS.mexico,
      "title": "mexico",
      "cost":"$10k",
      "trip":"18 days"
    },
    {
      "src": ASSETS.china,
      "title": "china",
      "cost":"$35k",
      "trip":"26 days"
    }
  

  ];

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
        560: { slidesPerView: 2 },
        800: { slidesPerView: 2 },
        1060: { slidesPerView: 3 },
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
          {slides.map((slide, index) => (
      <li className="swiper-slide ag-slide_item" key={index} data-swiper-autoplay="1500"> 
              <div className="flex flex-col ">

            
<img
src={slide.src}
alt={slide.title}
height={220}
style={{margin:"0 34px", borderRadius:"19px" ,height:"220px" }}
className="object-cover"
/>
              <div
                style={{
                  margin:"0 34px",  
                  boxSizing:"border-box",
                  padding:"10px",
                  height:"180px",
                }}
              >
                <div style={
                  {
                    display:"flex",
                    justifyContent:"space-between",
                    width:"100%",
                    padding:"0 7px"
                  }
                  
                }> 

         <h6 className="font-semibold capitalize text-lg ">{slide.title}</h6>
         <h6 className="text-lg  font-semibold  ">{slide.cost}</h6>
                </div>
                <div 
                  style={{
                    margin:"20px 0 ",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between",
                    flexWrap:"wrap"
                  }}
                > 
                <Link href={`/country-detail/${slide.title}`}>
                  <button className="capitalize border-2  bg-[#43B97F] text-white transition-all hover:ring-4 hover:ring-[#43B97F] font-medium rounded-3xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none">
                    More about {slide.title}
                  </button>
</Link>
                <div 
                  style={{
                    margin:"20px 0 ",
                    display:"flex",
                    alignItems:"center"
                  }}
                > 

              <Image
                src={logo}
                alt="day trip"
                height={15}
                width={15}
              ></Image>
         <h6 className="text-lg font-semibold ml-1 ">{slide.trip}</h6>
         </div>
         </div>
  


              </div>
         
                 </div>
             
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SwiperComponent;
