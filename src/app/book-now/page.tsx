import React from 'react'
import {ASSETS} from '../../../public/Assets'
import Booking from '@/components/template/booking/Booking'
import NewsLetter from '@/components/template/home/subhome/NewsLetter'
import HeroSection from '@/components/template/heroSection/HeroSection'


function page() {
  return (
    <div className="min-h-screen">
      <HeroSection image={ASSETS.booking_banner} title="TravelTrills Booking"/>
      <Booking/>
      <NewsLetter/>
      </div>
        )
    }
    
    export default page