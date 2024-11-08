"use client"

import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {ASSETS} from '../../../../../public/Assets'
import LandingPageForm from './landingPageForm';



function Intro() {

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <div className='w-full'> 
        <div  className='flex  relative flex-col'>
            <video className='h-[75vh]  w-screen object-cover' src={ASSETS.video} autoPlay loop muted></video> 
      <LandingPageForm  postion="absolute" />
            </div>
           
           
    </div>
  )
}

export default Intro
