"use client"

import React from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

function AiDestination() {
    const { destination, days, dateTo, dateFrom } = useSelector((state) => state.formData);
    const formattedDateTo = format(new Date(dateTo), 'MMMM dd, yyyy');
    const formattedDateFrom = format(new Date(dateFrom), 'MMMM dd, yyyy');
  return (
    <div className="flex flex-col px-3 md:px-9 py-6">
      
    <h1 className='text-2xl sm:text-3xl font-bold capitalize text-gray-800 mb-4'>
      Tour to {destination} for {days} Days
    </h1>
    <div className='mt-4 space-y-2'>
      <p className='text-lg text-gray-600'>
        <strong className='text-gray-800'>Departure Date:</strong> {formattedDateFrom}
      </p>
      <p className='text-lg text-gray-600'>
        <strong className='text-gray-800'>Return Date:</strong> {formattedDateTo}
      </p>
     
  </div>
  </div>
  )
}

export default AiDestination
