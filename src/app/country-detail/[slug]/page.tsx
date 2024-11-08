import React from 'react'
import {ASSETS} from '../../../../public/Assets'

import PopularDestinations from '@/components/template/planner//PopularDestinations';
import HeroSection from '@/components/template/heroSection/HeroSection';


function page({params}:any) {
    const {slug} = params
    // console.log(slug)
    const formatCountryName = (slug:any) => {
      const decodedName = decodeURIComponent(slug);
      return decodedName
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
  };

  const formattedCountryName = formatCountryName(slug);
  return (
    <>
    <HeroSection image={ASSETS.planner_banner} title={formattedCountryName}/>
    <PopularDestinations destination={slug} />
    </>

  )
}

export default page
