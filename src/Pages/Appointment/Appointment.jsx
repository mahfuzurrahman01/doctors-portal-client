import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppointment from './AvailableAppointment';
const Appointment = () => {
    const [selected, setSelected] = useState(new Date())
    return (
        <div>
            <AppoinmentBanner selected={selected} setSelected={setSelected}></AppoinmentBanner>
            <AvailableAppointment selected={selected} setSelected={setSelected}></AvailableAppointment>
        </div>
    );
};

export default Appointment;