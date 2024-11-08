"use client"

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { destination } from '@/redux/feature/Destination.slice';
import Spinner from '@/components/spinner/Spinner';
import PlannerSlider from '@/components/plannerSlider/PlannerSlider';

function PopularDestinations(props) {
    const dispatch = useDispatch();
    const country = props.destination; 

    // console.log(country);

    const { destinationData, isLoading, isError } = useSelector((state) => state.popularDestination);
    // console.log(destinationData);

    useEffect(() => {
        dispatch(destination(country));
        // console.log("hello i am working ");
    }, [dispatch, country]);

    const formatCountryName = (name) => {
        // Decode URL-encoded string
        const decodedName = decodeURIComponent(name);
        // Capitalize each word
        return decodedName
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const formattedCountryName = formatCountryName(country);

    return (
        <div className="w-full min-h-screen flex justify-center mt-36 items-start my-8">
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    {isError ? (
                        <p className="text-red-400">
                            Oops! It seems there was an issue loading the content.
                        </p>
                    ) : (
                        <div className="w-11/12 flex flex-col ">
                            <div className="w-full md:6/12 relative ">
                                <img src={destinationData.image_url} alt={formattedCountryName} className='h-full w-full rounded-xl' />
                            </div>
                            <p className='sm:text-xl mt-12'>
                                {destinationData.info}
                            </p>
                            {destinationData.country_images.length > 2 && (
                                <div className='w-full flex flex-col my-9 overflow-x-hidden'>
                                    <h1 data-aos="fade-left" className="font-bold capitalize text-3xl md:text-6xl text-center my-8 md:my-14">
                                        {formattedCountryName} Top Destinations
                                    </h1>
                                    <PlannerSlider data={destinationData.country_images} />
                                </div>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default PopularDestinations;
