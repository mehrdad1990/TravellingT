"use client"

import React from 'react'
import Link from 'next/link';
import countries from '@/Data/AllCountry.json'
import { toast } from "sonner"
const Booking = () => {
   

     const bookNow = (e:any)=>{
        e.preventDefault();
        toast("We recieve your offer we will contact  you soon")
     }

  return (
    <div className="container-fluid booking py-5">
      <div className="container py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          <div>
            <h5 className="font-bold text-2xl md:text-4xl pe-3 text-[#43B97F]">Booking</h5>
            <h1 className="text-black mb-4">Online Booking</h1>
            <p className="text-black mb-4">
             
Ready to embark on your next adventure? Booking with Travel Thrills is simple and hassle-free. With just a few clicks, you can secure your dream vacation and start counting down the days until departure. Our intuitive platform makes it easy to explore a wide range of destinations, from tropical beaches to bustling cityscapes, ensuring there&rsquo;s something for every type of traveler.
            </p>
            <p className="text-black mb-4">
            Start by browsing our curated list of destinations and travel packages tailored to suit your interests and budget. Once you&rsquo;ve found your perfect getaway, our seamless booking process allows you to reserve your spot quickly and securely. Choose your preferred travel dates, select from a variety of accommodation options, and add any extra activities or tours to personalize your trip.        
            </p>
            <p className="text-black mb-4">
            Don’t wait any longer—your dream vacation is just a few steps away. Book now with Travel Thrills and start planning the adventure of a lifetime!
</p>
            <Link href="/about-us">
            <button className="capitalize border-2 my-5 bg-[#43B97F] text-white transition-all hover:ring-4 hover:ring-[#43B97F] font-medium rounded-3xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none">
                      Read More
                    </button>

            </Link>
          </div>
          <div>
            <h1 className="text-black mb-3 text-2xl font-semibold">Book A Tour Deals</h1>
            <p className="text-black mb-4">Get <span className="text-[#43B97F] font-semibold">50% Off</span> On Your First Adventure Trip With TravelThrills. Get More Deal Offers Here.</p>
            <form>
              <div className="sm:grid flex flex-col sm:grid-cols-2 gap-3">
                <div className="flex flex-col-reverse">
                  <input type="text" className="p-2 rounded-xl bg-white border border-gray-400" id="name" placeholder="Your Name" />
                  <label htmlFor="name" className='text-lg mb-2' >Your Name</label>
                </div>
                <div className="flex flex-col-reverse">
                  <input type="email" className="p-2 rounded-xl bg-white border border-gray-400" id="email" placeholder="Your Email" />
                  <label htmlFor="email" className='text-lg mb-2'>Your Email</label>
                </div>
                <div className="flex flex-col-reverse">

                  <input type="text" className="p-2 rounded-xl bg-white border border-gray-400" id="datetime" placeholder="Date & Time" />
                  <label htmlFor="datetime" className='text-lg mb-2'>Date & Time</label>
                </div>
                <div className="flex flex-col-reverse">

                  <select  className="p-2 rounded-xl bg-white border border-gray-400" id="select1">
                    {
                        countries.map((item,index)=>(
                    <option value={index} key={index}>{item.countryName}</option>

                        ))
                    }
                  </select>
                  <label htmlFor="select1" className='text-lg mb-2'>Destination</label>
                </div>
                <div className="flex flex-col-reverse">

                  <select  className="p-2 rounded-xl bg-white border border-gray-400" id="SelectPerson">
                    <option value="1">Persons 1</option>
                    <option value="2">Persons 2</option>
                    <option value="3">Persons 3</option>
                  </select>
                  <label htmlFor="SelectPerson" className='text-lg mb-2'>Persons</label>
                </div>
                <div className="flex flex-col-reverse">

                  <select  className="p-2 rounded-xl bg-white border border-gray-400" id="CategoriesSelect">
                    <option value="1">Kids</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                    <option value="3">3</option>
                  </select>
                  <label htmlFor="CategoriesSelect" className='text-lg mb-2'>Categories</label>
                </div>
                <div className="flex flex-col-reverse">

                  <textarea className="p-2 rounded-xl bg-white border border-gray-400" placeholder="Special Request" id="message" style={{ height: '100px' }}></textarea>
                  <label htmlFor="message" className='text-lg mb-2'>Special Request</label>
                </div>
                <div className="col-span-2">
                <button onClick={bookNow}  className="capitalize border-2 my-5 bg-[#43B97F] text-white transition-all hover:ring-4 hover:ring-[#43B97F] font-medium rounded-3xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none">
                      Book Now
                    </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
