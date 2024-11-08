"use client"

import React from 'react'
import { toast } from "sonner"

function NewsLetter() {
    const submitNewsletter = (e:any)=>{
        e.preventDefault()
        toast("Newsletter Subscribed")
    }
  return (
  <div className="relative bg-emerald-400">
  <div className="absolute inset-x-0 bottom-0">
    <svg viewBox="0 0 224 12" fill="currentColor" className="w-full -mb-1 text-white" preserveAspectRatio="none">
      <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z">
      </path>
    </svg>
  </div>
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
      <h2 className="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
        Subscribe to our newsletter
      </h2>
      <p className="mb-6 text-base text-white md:text-lg">
      Stay connected and inspired by subscribing to the Travel Thrills newsletter! Join our community of passionate travelers and be the first to know about exclusive travel deals, destination guides, and expert tips to make your next adventure unforgettable.
      </p>
      <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
        <input placeholder="Email" required type="text" className="flex-grow w-full h-12 px-4 mb-3 text-black transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline" />
        <button onClick={submitNewsletter} className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none">
          Subscribe
        </button>
      </form>
      <p className="max-w-md mb-10 text-xs tracking-wide text-white sm:text-sm sm:mx-auto md:mb-16">
      Don’t miss out on the latest travel trends, exclusive promotions, and expert insights.
      </p>
  
    </div>
  </div>
</div>

  )
}

export default NewsLetter
