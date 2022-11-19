import React from 'react';
import clock from '../../../../../assets/icons/clock.svg'
import marker from '../../../../../assets/icons/marker.svg'
import { FiPhoneCall } from 'react-icons/fi'
const BannerCards = () => {

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-x-4 gap-y-4 lg:mt-32 md:mt-20 mt-12 mb-28'>
            <div className="flex lg:flex-row flex-col md:text-left text-center items-center gap-x-4 gap-y-3 py-12 px-8 bg-gradient-to-r from-primary to-secondary text-white rounded-xl">
                <img src={clock} alt="" className='w-24 h-24' />
                <div className='flex flex-col justify-center gap-2'>
                    <p className='font-semibold text-xl'>Opening Hour</p>
                    <p className='text-md font-light'>Monday-Thursday 4.00 pm - 8pm & Friday 8am - 11am</p>

                </div>
            </div>
            <div className="flex lg:flex-row flex-col md:text-left text-center items-center gap-x-4 gap-y-3 py-12 px-8 bg-gradient-to-r from-primary to-secondary text-white rounded-xl">
                <img src={marker} alt="" className='w-24 h-24' />
                <div className='flex flex-col justify-center gap-2'>
                    <p className='font-semibold text-xl'>Visit Our Location</p>
                    <p className='text-md font-light'>Brooklyn, NY 10036, United States</p>

                </div>
            </div>
            <div className="flex lg:flex-row flex-col md:text-left text-center items-center gap-x-4 gap-y-3 py-12 px-8 bg-gradient-to-r from-primary to-secondary text-white rounded-xl">
                <FiPhoneCall className='w-16 h-20'></FiPhoneCall>
                <div className='flex flex-col justify-center gap-2'>
                    <p className='font-semibold text-xl'>Contact Us</p>
                    <p className='text-md font-light'>+000 123 456789</p>

                </div>
            </div>
            {/* <div className="flex flex-col py-8 px-6 sm:flex-row sm:justify-between bg-accent text-white rounded-xl">
                <div className="flex w-full space-x-2 sm:space-x-4 items-center">
                    <img src={marker} alt=""  className='w-24 h-24'/>
                    <div className='flex flex-col gap-2'>
                        <p className='font-semibold text-xl'>Visit Our Location</p>
                        <p className='text-md font-light'>Brooklyn, NY 10036, United States</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col py-8 px-6 sm:flex-row sm:justify-between bg-gradient-to-r from-primary to-secondary text-white rounded-xl">
                <div className="flex w-full space-x-2 sm:space-x-4 items-center">
                    
                    <div className='flex flex-col gap-2'>
                        <p className='font-semibold text-xl'>Contact Us</p>
                        <p className='text-md font-light'>+000 123 456789</p>
                    </div>
                </div>
            </div> */}


        </div>

    );
};

export default BannerCards;