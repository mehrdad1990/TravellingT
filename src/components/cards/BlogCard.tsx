import React from 'react';
import Link from 'next/link';

function BlogCard(props: any) {
    const { blog, value } = props;
    
    const splitIndex = blog.description.indexOf('##');
    const previewText = splitIndex !== -1 ? blog.description.slice(0, splitIndex) : blog.description;

    const isEven = value % 2 === 0;

    return (
        <div key={value}
        className={`w-full my-16 gap-6 flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}>

            <img 
                src={blog.main_image} 
                alt={blog.heading}
                className='rounded-2xl object-cover h-80 w-full md:w-6/12'
                />
            <div className='w-full md:w-6/12'>
                <h1 className='font-semibold mt-3 text-xl sm:text-2xl'>
                    {blog.heading}
                </h1>
                <pre className='text-gray-800 mt-6 font-sans dark:text-white text-lg mb-1 whitespace-pre-wrap'>
                    {previewText}
                </pre>
                <Link href={`/blog-detail/${blog.id}`}>
                    <button className="capitalize border-2 bg-[#43B97F] border-[#43B97F] text-white transition-all hover:ring-4 hover:ring-[#43B97F] font-medium rounded-3xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none">
                        Read More
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default BlogCard;
