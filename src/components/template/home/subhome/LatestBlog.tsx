"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import Link from 'next/link';

function LatestBlog() {
  const allBlogs = useSelector((state: any) => state.blogData.allBlogs);

  return (
    <div className="w-full flex justify-center my-6 items-center">
      <div className="w-11/12">
        <h1 className="text-2xl md:text-4xl font-bold ">Our Latest Blogs</h1>
        <div className="w-full flex items-center gap-9 mt-12 justify-center flex-col md:flex-row flex-wrap ">
          {
            allBlogs && allBlogs.slice(0,3).reverse().map((item:any,index:any)=>(
              <div key={index} className={` gap-6 flex flex-col `}>
                <img 
                  src={item.main_image} 
                  alt={item.heading}
                  className='rounded-2xl object-cover h-56 w-full sm:w-96 '
                />
                <div className='w-full sm:w-96'>
                  <h1 className='font-semibold mt-2 text-lg sm:text-xl'>
                    {item.heading}
                  </h1>
                  <pre className='text-gray-800 my-3 font-sans dark:text-white text-lg mb-1 whitespace-pre-wrap'>
  {item.description && typeof item.description === 'string' ? item.description.slice(0,170) : ''}
</pre>
                  <Link href={`/blog-detail/${item.id}`}>
                    <button className="capitalize border-2 my-5 bg-[#43B97F] text-white transition-all hover:ring-4 hover:ring-[#43B97F] font-medium rounded-3xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default LatestBlog