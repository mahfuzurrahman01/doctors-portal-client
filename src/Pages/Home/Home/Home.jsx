import React from 'react';
import Services from '../../Services/Services';
import Banner from './Banner/Banner';
import '../Home/Home.css'
import AppoinmentCard from './Appoinment/AppoinmentCard';
import Testimonial from '../../Testimonial/Testimonial';
const Home = () => {
    return (
        <div className='md:mx-5 mx-2'>
            <Banner></Banner>
            <Services></Services>
            <AppoinmentCard></AppoinmentCard>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;