"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

function BlogDetail(props: any) {
    const allBlogs = useSelector((state: any) => state.blogData.allBlogs);
    const { id } = props;
    const singleBlog = allBlogs.filter((item: any) => item.id === id);
    // console.log(singleBlog);

    const processDescription = (description: string) => {
        return description.replace(/##\s*(.*?)(?=\n|$)/g, '<strong>$1</strong>');
    };

    const processedDescription = processDescription(singleBlog[0].description);

    return (
        <div className="min-h-screen">
            <div className="bg-white">
                <div className="text-center pt-32">
                    <h1 className="font-bold break-normal text-3xl md:text-5xl">{singleBlog[0].heading}</h1>
                </div>
                <div
                    className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
                    style={{ backgroundImage: `url(${singleBlog[0].main_image})`, height: '75vh' }}
                />
                <div className="container max-w-5xl mx-auto -mt-32">
                    <div className="mx-0 sm:mx-6">
                        <div
                            className="bg-white shadow-sm mb-2 w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
                            style={{ fontFamily: 'Georgia,serif' }}
                        >
                            <div
                                className="text-gray-800 font-sans text-lg mb-5 whitespace-pre-wrap"
                                dangerouslySetInnerHTML={{ __html: processedDescription }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
