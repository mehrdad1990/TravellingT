"use client";

import React, { useEffect, useState } from 'react';
import ContactUsForm from './ContactUsForm';
import Message from './Message';

function ContactInformation() {
  const [messageFromStorage, setMessageFromStorage] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMessageFromStorage(localStorage.getItem("message"));
    }
  }, []);

  return (
    <div className='w-full flex justify-center'>
      <div className="w-11/12 flex flex-col lg:flex-row flex-wrap">
        <div className='w-full lg:w-6/12 flex flex-col my-4'>
          <ContactUsForm />
        </div>
        <div className='w-full lg:w-6/12 flex items-center justify-start flex-col my-4'>
          <div className='w-11/12 flex justify-center items-center'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27237.71547953342!2d73.05411111083981!3d31.421993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392268202828e7a3%3A0x958cba26935e6f45!2sRegency%20Travels!5e0!3m2!1sen!2s!4v1716810534465!5m2!1sen!2s" width="450" height="350" style={{border:"0", borderRadius:"10px"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          {messageFromStorage && <Message />}
        </div>
      </div>
    </div>
  );
}

export default ContactInformation;
