import React from 'react'
import {ASSETS} from '../../../public/Assets'
import AllBlogs from '@/components/template/blog/AllBlogs'
import HeroSection from '@/components/template/heroSection/HeroSection'
function page() {
  return (
    <div className="min-h-screen">
      <HeroSection image={ASSETS.blog_banner} title="TravelTrills Blog" />

        <AllBlogs/>

    </div>
  )
}

export default page
