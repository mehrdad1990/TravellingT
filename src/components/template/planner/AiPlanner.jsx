'use client'; 
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TourPlanning } from '@/redux/feature/AiApi.Slice';
import Spinner from '@/components/spinner/Spinner';
import { Days } from '@/redux/feature/Api.Slice';
import Link from 'next/link';
import { differenceInDays } from 'date-fns';
import TextToSpeech from '@/components/textToSpeech/TextToSpeech';

function AiPlanner() {
  const { destination, days, clicked, dateTo, dateFrom } = useSelector((state) => state.formData);
  const { isError, isLoading, tourPlan } = useSelector((state) => state.aiPlanning);
  const dispatch = useDispatch();
  const [animatedText, setAnimatedText] = useState({});

  useEffect(() => {
    if (destination && days && clicked) {
      dispatch(TourPlanning({ destination, days }));
    }
  }, [destination, days, clicked]);

  useEffect(() => {
    if (dateTo && dateFrom) {
      const daysDifference = differenceInDays(new Date(dateTo), new Date(dateFrom));
      dispatch(Days(daysDifference));
    }
  }, [dateTo, dateFrom, dispatch]);

  useEffect(() => {
    if (tourPlan && tourPlan.itineraryData) {
      const dayKeys = Object.keys(tourPlan.itineraryData);
      if (dayKeys.length > 0) {
        animateText(dayKeys, 0);
      }
    }
  }, [tourPlan]);

  const delayPara = (key, index, nextWord) => {
    setTimeout(() => {
      setAnimatedText((prev) => ({
        ...prev,
        [key]: (prev[key] || "") + nextWord
      }));
    }, 75 * index);
  };

  const animateText = (daysArray, dayIndex) => {
    const day = daysArray[dayIndex];
    const text = `${day}: ${tourPlan.itineraryData[day]}`;

    setAnimatedText((prev) => ({ ...prev, [day]: "" }));

    const words = text.split(" ");
    words.forEach((word, index) => {
      delayPara(day, index, word + " ");
    });

    const totalAnimationTime = words.length * 75; 

    if (dayIndex < daysArray.length - 1) {
      setTimeout(() => {
        animateText(daysArray, dayIndex + 1);
      }, totalAnimationTime + 300); 
    }
  };

  return (
    <div className='w-full mt-6 bg-black flex items-center justify-center'>

      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <div className='w-full min-h-[30vh] flex items-center justify-center'>
          <p className="text-red-400">
            Oops! It seems there was an issue loading the content.
          </p>
        </div>
      ) : (
        <div className="w-full">
          <div className='flex flex-wrap gap-4'> 
       <TextToSpeech/>
          <h1 className="text-3xl md:text-5xl font-bold text-center my-8 text-black">Tour Plan</h1>
          </div>
          {tourPlan && tourPlan.itineraryData && Object.entries(tourPlan.itineraryData).map(([day, description]) => (
            <div key={day} className="mb-6">
              <p className='text-lg text-black'>{animatedText[day]}</p>
            </div>
          ))}
          <Link href={`/country-detail/${destination}`}>
            <button className="capitalize border-2 bg-[#43B97F] text-white transition-all hover:ring-4 hover:ring-[#43B97F] font-medium rounded-3xl my-5 text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none">
              More about {destination}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default AiPlanner;
