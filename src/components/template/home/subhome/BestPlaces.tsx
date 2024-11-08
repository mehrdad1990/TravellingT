import React from 'react'
import SwiperComponent from '../../Carousal/Slider'

function BestPlaces() {
  return (
    <div className='w-full flex flex-col my-9 overflow-x-hidden'>
        <h1  data-aos="fade-left" className="font-bold text-3xl md:text-6xl text-center my-8    background-image: url(/image/lake-como-italian-alke.jpg);  md:my-14 ">Top Destinations</h1>
      <SwiperComponent/>
    </div>
  )
}

export default BestPlaces