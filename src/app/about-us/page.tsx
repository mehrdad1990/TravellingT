import React from 'react'
import {ASSETS} from '../../../public/Assets'
import WhyUs from '@/components/template/about/WhyUs'
import BestPlaces from '@/components/template/home/subhome/BestPlaces'
import LatestBlog from '@/components/template/home/subhome/LatestBlog'
import AboutTravelTrills from '@/components/template/about/AboutTravelTrills'
import Slider from '@/components/template/about/carosalAbout/AboutCarousal'
import NewsLetter from '@/components/template/home/subhome/NewsLetter'
import HeroSection from '@/components/template/heroSection/HeroSection'
function page() {
  return (
    <div>
      <HeroSection image={ASSETS.about_banner} title="About Us"  />
    
      <Slider/>
<AboutTravelTrills/>
<WhyUs/>
<BestPlaces/>
<NewsLetter/>
<LatestBlog/>

    </div>
  )
}

export default page
