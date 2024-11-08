import React from 'react'
import {ASSETS } from '../../../../public/Assets'
import Image from 'next/image'
function WhyUs() {

const whyUs = [
    {
        image:ASSETS.whyus2,
        heading:"Customer Service 24h",
        description:"Our dedicated support team is available around the clock to assist you with any queries or concerns, ensuring a hassle-free travel experience."
    },
    {
        image:ASSETS.whyus1,
        heading:"Easy Booking",
        description:"Enjoy a seamless and intuitive booking process with just a few clicks, making your travel planning effortless and efficient."
    },
    {
        image:ASSETS.whyus3,
        heading:"Best price guarantee",
        description:"We offer the most competitive prices on the market, ensuring you get the best deals for your dream destinations."
    },

]

  return (
    <div className="w-full flex items-center justify-center mt-8">
    <div className="w-11/12">
    <h1 className='text-2xl md:text-5xl font-extrabold  w-full text-center '>Why choose Us ?</h1>

        <div className='w-full flex flex-col gap-y-5 sm:flex-row flex-wrap mt-20 mb-3 items-center justify-around'>

        {
            whyUs.map((item:any,index:any)=>(
                <div key={index} className='flex flex-col justify-center items-center w-full  sm:w-72'>
                    <Image 
                    src={item.image}
                    alt={item.heading}
                    height={150}
                    width={150}
                    ></Image>
                    <h3 className="font-semibold mt-3 text-xl ">
                        {item.heading}
                    </h3>
                    <p className='text-center my-2'>
                        {
                            item.description
                        }
                    </p>
                    </div>

            ))
        }

        </div>

    </div>
    </div>
  )
}

export default WhyUs
