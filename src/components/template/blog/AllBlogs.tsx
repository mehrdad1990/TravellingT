"use client"
import BlogCard from '@/components/cards/BlogCard';
import { useSelector } from 'react-redux';
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function AllBlogs() {
    const allBlogs = useSelector((state: any) => state.blogData.allBlogs);
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-10/12 md-9/12  py-5 '>

                <div className="w-full ">
                    {allBlogs.map((item: any, index: any) => (
                            <BlogCard 
                                key={index} 
                                value={index}
                                blog={item} 
                            />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllBlogs;