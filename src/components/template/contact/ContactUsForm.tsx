"use client";

import React from 'react';
import { toast } from "sonner";
import { MessageSend } from '@/Validation/Validation.yup';
import { useFormik } from 'formik';

function ContactUsForm() {
  const submitHandler = (value: any, { resetForm }: any) => {
    const stringValue = JSON.stringify(value);
    if (typeof window !== "undefined") {
      if (localStorage.getItem("message")) {
        toast("You already have a message");
      } else {
        localStorage.setItem("message", stringValue);
        window.location.reload();
      }
    }
    resetForm();
  };

  const Formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: MessageSend,
    onSubmit: submitHandler
  });

  return (
    <div className="w-full flex flex-col flex-wrap">
      <h1 className="font-bold text-2xl my-3 md:text-4xl">Get in touch</h1>
      <p>
        Welcome to Travel Thrills, your ultimate gateway to the world’s most captivating destinations and unforgettable adventures. At Travel Thrills, we believe travel is more than just visiting new places; it&rsquo;s about experiencing the world in its most authentic and exhilarating forms. Whether you&rsquo;re a seasoned globetrotter or planning your first big adventure, we’re here to help you discover the wonders of our beautiful planet.
      </p>
      <form onSubmit={Formik.handleSubmit}>
        <div className='flex flex-col'>
          <label htmlFor="name" className="text-xl my-2 text-gray-700">Name:</label>
          <input onBlur={Formik.handleBlur} value={Formik.values.name} onChange={Formik.handleChange} type="text" name='name' id="name" placeholder="Input Your Name" className={`rounded-md border border-gray-300 w-11/12 md:w-6/12 ${Formik.errors.name && Formik.touched.name ? "border-red-400" : ""}  p-2`} />
          {Formik.errors.name && Formik.touched.name ? <p className='text-red-500'>{Formik.errors.name}</p> : ""} 
        </div>
        <div className='flex flex-col'>
          <label htmlFor="email" className="text-xl my-2 text-gray-700">Email:</label>
          <input onBlur={Formik.handleBlur} value={Formik.values.email} onChange={Formik.handleChange} type="email" name='email' id="email" placeholder="Input Your Email" className={`rounded-md border border-gray-300 w-11/12 md:w-6/12 ${Formik.errors.email && Formik.touched.email ? "border-red-400" : ""}  p-2`} />
          {Formik.errors.email && Formik.touched.email ? <p className='text-red-500'>{Formik.errors.email}</p> : ""} 
        </div>
        <div className='flex flex-col'>
          <label htmlFor="message" className="text-xl my-2 text-gray-700">Message:</label>
          <textarea onBlur={Formik.handleBlur} value={Formik.values.message} onChange={Formik.handleChange} name="message" id="message" className={`rounded-md border border-gray-300 p-2 ${Formik.errors.message && Formik.touched.message ? "border-red-400" : ""}`} rows={5}></textarea>
          {Formik.errors.message && Formik.touched.message ? <p className='text-red-500'>{Formik.errors.message}</p> : ""} 
        </div>
        <button type='submit' className="mt-7 capitalize border-2 bg-[#43B97F] text-white transition-all hover:ring-4 hover:ring-[#43B97F] font-medium rounded-3xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none">Send Now</button>
      </form>
    </div>
  );
}

export default ContactUsForm;
