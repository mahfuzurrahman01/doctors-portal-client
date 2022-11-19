import React from 'react';
import image from '../../../../assets/images/doctor-small.png'
import PrimaryButton from '../../../../Button/PrimaryButton';
import bg from '../../../../assets/images/appointment.png'
const AppoinmentCard = () => {
    return (
        <div>
            <section className="lg:mt-32 md:mt-20 my-5 w-full text-gray-100" style={{backgroundImage:`url(${bg})`}}>
                <div className="flex flex-row justify-evenly">
                
                    <img src={image} alt="" className="lg:block hidden w-full rounded-md xl:col-span-3 mt-[-180px]" />
                 
                    <div className="w-full flex flex-col gap-4 px-6 py-16 rounded-md text-accent">
                        <p className='text-primary font-bold text-xl'>Appointment</p>
                        <p className='text-3xl font-semibold text-white'>Make an appointment Today</p>
                        <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get started</PrimaryButton>
                    </div>
                   
                </div>
            </section>
        </div>
    );
};

export default AppoinmentCard;