import React from 'react';
import image from '../../assets/images/treatment.png'
import PrimaryButton from '../../Button/PrimaryButton';
const ServiceFeature = () => {
    return (
        <div className='mt-20 lg:w-4/5 w-11/12 mx-auto text-accent'>
            <div className="flex flex-col gap-x-8 justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="lg:w-1/2 w-full">
                    <img src={image} alt="" className="rounded-lg lg:w-[450px] w-full lg:h-[550px]" />
                </div>
                <div className="flex flex-col justify-center p-6 lg:w-1/2 w-full">
                    <h1 className="lg:text-5xl text-3xl font-bold leading-none sm:text-6xl">Exceptional
                        <span className="text-primary">Dental Care,</span>on Your Terms
                    </h1>
                    <p className="mt-6 mb-8 lg:text-lg text-sm sm:mb-12 text-accent">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                    </p>
                    <PrimaryButton>Get started</PrimaryButton>
                </div>
            </div>

        </div>
    );
};

export default ServiceFeature;