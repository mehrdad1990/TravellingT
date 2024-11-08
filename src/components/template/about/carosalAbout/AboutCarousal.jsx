import React from 'react'
import './slider.scss'
import {ASSETS } from '../../../../../public/Assets'

export default function Slider() {
  return (
    <div  className=" overflow-hidden flex-col flex py-12 items-center justify-center ">
  <div className='flex'>
  <span className="parallax-text2" text="ABOUT">Travel
  </span>
  <span className="parallax-text" text="ABOUT">Thrills
  </span>

  </div>
  
  <img id='homepageimg' src={ASSETS.airplan} alt="Nike Sneaker" />
</div>

  )
}