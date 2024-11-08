"use client"

import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import {ASSETS } from '../../../../public/Assets'
import Link from 'next/link';
function AboutTravelTrills() {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
 
        <div className="w-full flex items-center justify-center mt-60 sm:mt-40 md:mt-28 relative">
        <div className="w-11/12 flex my-6  flex-col lg:flex-row flex-wrap justify-center">
        <div className="w-full flex itmes-center justify-center lg:w-6/12 ">
            <Image
            src={ASSETS.about_us}
             height={500}
             className="object-cover rounded-xl"
              width={500}
            alt="About-Us"
            
            ></Image>
        </div>
        <div className="w-full lg:w-6/12">
        <h1
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className='font-bold text-2xl  my-3 md:text-5xl'>
        About TravelTrills
        </h1>
        <p className='my-3 mt-7 text-lg'>
        Welcome to Travel Thrills, your ultimate gateway to the world’s most captivating destinations and unforgettable adventures. At Travel Thrills, we believe travel is more than just visiting new places; it&lsquo;s about experiencing the world in its most authentic and exhilarating forms. Whether you&lsquo;re a seasoned globetrotter or planning your first big adventure, we’re here to help you discover the wonders of our beautiful planet.
        </p>
        <h1
        className='font-bold text-xl my-2 md:text-3xl'>
        Our Mission
        </h1>
        <p className='my-3 mt-7 text-lg'>
        Our mission is simple: to ignite your passion for travel by offering comprehensive, reliable, and inspiring travel resources. We aim to make your travel planning process seamless and enjoyable, providing you with all the tools you need to create memories that will last a lifetime. We are committed to helping you find your dream places, from hidden gems off the beaten path to iconic landmarks that you’ve always dreamed of visiting.
        </p>
        <p className='my-3 mt-7 text-lg'>
        Thank you for choosing Travel Thrills – where your travel dreams become reality.
        </p>

        <Link  href="/book-now">
    <button
        className='bg-emerald-500 py-3 border-2 px-9 font-semibold text-white mt-5 rounded-3xl  hover:ring-4 hover:ring-[#43B97F]  transition-all text-lg'
        >
        Book Now
    </button>
      </Link>
    
        </div>
        </div>
        </div>
    
  )
}

export default AboutTravelTrills
