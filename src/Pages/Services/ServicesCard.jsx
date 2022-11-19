import React from 'react';
const ServicesCard = ({ service }) => {
    const { name, description, img } = service
    return (

        <div className='px-12 py-9 flex flex-col space- justify-center items-center shadow-lg shadow-gray-300 rounded-lg'>
            <img src={img} alt="" />
            <p className='text-2xl font-semibold'>{name}</p>
            <p>{description}</p>
        </div>


    );
};

export default ServicesCard;