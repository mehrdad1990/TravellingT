"use client"

import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroSection(props:any) {
    const {image,title} = props
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])
    return (
        <div
        className="h-[35vh] w-full flex  items-end "
        style={
          {
            backgroundImage:`url(${image})`,
            backgroundSize:"cover",
            backgroundPosition:"center"
          }
        }
      >
      <h1
      data-aos="fade-down"
      className='text-2xl md:text-5xl capitalize text-white font-bold mb-8 ml-4'
      >{title ? title : ""}</h1>

      </div>
  )
}

export default HeroSection
