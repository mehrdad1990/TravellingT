import React from 'react'
import {ASSETS } from '../../../../../public/Assets'
import Image from 'next/image'
function Destinations() {
  return (
//  <section className="bg-white mt-60 sm:mt-40 md:mt-28">
 <section className="bg-white my-8 mt-20">
  <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
      <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
        <a  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
          <Image
           src={ASSETS.europe}
           layout="fill"
           alt="africa"
           className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
          <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Europe</h3>
        </a>
      </div>
      <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
        <a  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
          <Image
           src={ASSETS.america}
           layout="fill"
           alt="america"
             className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
          <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">North America</h3>
        </a>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
          <a  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
            <Image
           src={ASSETS.africs}
           layout="fill"
           alt="north america"
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
            <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"> Africa</h3>
          </a>
          <a  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
          <Image
           src={ASSETS.asia}
           layout="fill"
           alt="Asia"
 className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
            <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Asia</h3>
          </a>
        </div>
      </div>
      <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
        <a  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
        <Image
           src={ASSETS.antarctia}
           layout="fill"
           alt="europe"
   className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
          <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Anctarctica</h3>
        </a>
      </div>  
    </div>
  </div>
</section>

  )
}

export default Destinations
