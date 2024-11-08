import React from 'react'
import Image from 'next/image'
import {ASSETS} from '../../../../../public/Assets' 
function NextTrip() {
    const bookingSteps=[
        {
            image:ASSETS.booking1,
            title:"Choose destination",
            content:"Explore our curated list of destinations and select the perfect place for your next adventure. Whether it's a tropical beach or a bustling city, we have options for every traveler."
        },
        {
            image:ASSETS.booking2,
            title:"Make Payment",
            content:"Secure your booking quickly and easily with our seamless payment process. Choose from various payment options to confirm your trip with confidence."
        },
        {
            image:ASSETS.booking3,
            title:"Reach Air Port on selected date",
            content:"On your travel date, head to the airport with your booking confirmation in hand. We'll handle the rest, ensuring a smooth start to your unforgettable journey."
        },
    ]
  return (
    <div className="w-full flex justify-center items-center">
      <div className='w-11/12 flex flex-col-reverse lg:flex-row flex-wrap'>
    <div className='w-full lg:w-6/12 flex flex-col my-4'>

    <h1
     data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
    className='text-2xl md:text-4xl font-bold my-4 md:mt-20'>
    Book Your Next Trip in <br /> 3 Easy steps 
    </h1>
    {
        bookingSteps.map((item,index)=>(
            <div key={index} className='flex flex-col sm:flex-row   gap-x-6 mt-6'>
                <Image
                src={item.image}
                alt={item.title}
                className='h-14 w-14 object-cover mb-5 sm:mb-0'
                height={40}
                width={50}
                ></Image>
                <div className="flex flex-col gap-y-2">
                    <h3 className='text-lg font-semibold capitalize'>{item.title}</h3>
                    <p className='text-sm'>{item.content}</p>

                </div>
            </div>
        ))
    }
 

    </div>
    <div className='w-full lg:w-6/12 flex items-center justify-center'>
    <Image
        src={ASSETS.trip}
        alt='Book your next trip'
        height={500}
        className='object-cover'
        width={500}
    ></Image>
    </div>
      </div>
    </div>
  )
}

export default NextTrip
