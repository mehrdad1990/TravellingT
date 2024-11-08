import React from 'react'
import {ASSETS} from '../../../public/Assets'
import  TripPlanner from '@/components/template/planner/TripPlanner'
import HeroSection from '@/components/template/heroSection/HeroSection'
function page() {
  return (
    <div className="min-h-screen">
      <HeroSection image={ASSETS.planner_banner} title="AI trip Planner"/>
        <TripPlanner />

    </div>
  )
}

export default page
