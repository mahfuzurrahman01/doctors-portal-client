import React from 'react';
import ServiceFeature from './ServiceFeature';
import ServicesCard from './ServicesCard';
import image1 from '../../assets/images/fluoride.png'
import image2 from '../../assets/images/cavity.png'
import image3 from '../../assets/images/whitening.png'
const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride is a natural mineral that builds strong teeth and prevents cavities. It’s been an essential oral health treatment for decades.',
            img: image1
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the lorer typesetting indust Ipsum has been the lorer',
            img: image2
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the typesetting indust Ipsum has been the lorer',
            img: image3
        },
    ]
    return (
        <div>
            <p className='text-primary font-bold text-xl text-center'>Our services</p>
            <p className='text-accent text-3xl text-center'>Services We Provide</p>
            <div className='mt-16'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-10 gap-y-3 text-center'>
                    {
                        servicesData.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)
                    }
                </div>
                <ServiceFeature></ServiceFeature>
            </div>
        </div>

    );
};

export default Services;