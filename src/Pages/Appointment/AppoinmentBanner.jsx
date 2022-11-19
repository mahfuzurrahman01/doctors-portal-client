import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png'
const AppoinmentBanner = ({ selected, setSelected }) => {
    return (
        <div>
            <section>
                <div className='flex lg:flex-row gap-y-4 flex-col-reverse w-11/12 mx-auto justify-center items-center lg:my-20 md:my-16 my-10 lg:p-20 md:p-16 p-7 gap-x-20 banner'>
                    <div className='lg:w-1/2 w-full flex lg:justify-end justify-center'>
                        <DayPicker className='w-4/5 gap-5' mode='single' selected={selected} onSelect={setSelected} />
                    </div>
                    <div className='lg:w-1/2 w-full flex lg:justify-center'>
                        <img src={chair} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AppoinmentBanner;