import React from 'react';
import chair from '../../../../assets/images/chair.png'
import BannerCards from './BannerCards/BannerCards';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="rounded-lg shadow-2xl lg:w-1/2" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn border-none bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
            <BannerCards></BannerCards>
        </div>
    );
};

export default Banner;