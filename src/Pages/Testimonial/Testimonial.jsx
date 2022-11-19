import React from 'react';
import quote from '../../assets/icons/quote.svg'
import TestimonialCards from './TestimonialCards';
const Testimonial = () => {
    return (
        <div>
            <div className='flex flex-row justify-between items-center mb-20 w-11/12 mx-auto'>
                <div>
                    <p className='text-xl font-bold text-primary'>Testimonial</p>
                    <p className='text-3xl text-accent'>What our client says:</p>
                </div>
                <div>
                    <img src={quote} alt="" className='w-36 h-36' />
                </div>
            </div>
            <div>
                <TestimonialCards></TestimonialCards>
            </div>
        </div>
    );
};

export default Testimonial;