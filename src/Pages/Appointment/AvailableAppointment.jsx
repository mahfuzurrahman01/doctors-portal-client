import React, { useEffect, useState } from 'react';
import { format } from 'date-fns'
import BookingModal from '../Modal/BookingModal';
import AppointmentOption from './Available/AppointmentOption';
import { useQuery } from '@tanstack/react-query';
import Loader from '../Shared/Loader/Loader';
const AvailableAppointment = ({ selected }) => {
    const date = format(selected, 'PP')
    const [treatment, setTreatment] = useState(null);
    // const { data: availableOptions = [], refetch, isLoading } = useQuery({
    //     queryKey: ['availableOptions', date],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/services?date=${date}`)
    //         const data = res.json()
    //         return data;
    //     }
    // })
    const { data: availableOptions = [], isLoading, refetch } = useQuery({
        queryKey: ['availableOptions', date], queryFn: async () => {
            const res = await fetch(`http://localhost:5000/services?date=${date}`)
            const data = res.json()
            return data;
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    return (

        <div>
            <p className='text-2xl text-center font-semibold text-primary'>Available Appointments on {format(selected, 'PP')}</p>
            <div>
                <div>
                    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
                        {
                            availableOptions.map(option => <AppointmentOption
                                key={option._id}
                                appointmentOption={option}
                                setTreatment={setTreatment}
                            ></AppointmentOption>)
                        }
                    </div>
                    {
                        treatment && <BookingModal refetch={refetch} treatment={treatment} setTreatment={setTreatment} selected={selected}></BookingModal>
                    }
                </div>
            </div>
        </div>

    );
};

export default AvailableAppointment;