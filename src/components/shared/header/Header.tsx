'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {ASSETS} from '../../../../public/Assets'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Links = [
    {
        name:"Home",
        link:"/"
    },
    {
        name:"About",
        link:"/about-us"
    },
    {
        name:"Latest Blog",
        link:"/blog"
    },
    {
        name:"AI Trip Planner ",
        link:"/trip-planner"
    },
    {
        name:"Contact Us",
        link:"/contact-us"
    }
  ]

  return (
    <div>
      <nav className="bg-bg-gray-100  w-full ">
        <div className="flex flex-wrap items-center py-2 sm:py-0 flex-col sm:flex-row justify-between max-w-screen-xl px-4 mx-auto">
          <Link href="/" >
          <Image
          src={ASSETS.logo}
          alt="travel the world"
          height={120}
          width={120}
          />
          </Link>
          <div className="flex items-center gap-x-12  ml-2 mt-2 sm:mt-0 sm:gap-x-0  sm:ml-0 lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
              <span></span>
            </div>


            <Link
           
              href="/book-now"
              className="   bg-[#43B97F] border-2 border-gray-100 text-white transition-all hover:ring-4 hover:ring-[#43B97F] font-medium rounded-3xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none"
              >
              Booking Now
            </Link>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? 'hidden' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? '' : 'hidden'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          {
            Links.map((item,index)=>(
                <li key={index}>
                <Link
                  href={item.link}
                  className="block py-2 font-semibold pl-3 pr-4 text-black  rounded lg:bg-transparent lg:hover:text-emerald-600 lg:p-0 "
                  aria-current="page"
                >

                  {item.name}
                </Link>
              </li>
            ))
          }

              
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;