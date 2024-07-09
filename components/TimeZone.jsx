"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import { format, utcToZonedTime } from 'date-fns-tz';

function TimeZone() {
    const [currentDateTime, setCurrentDateTime] = useState('');

    useEffect(() => {
        const timeZone = 'Asia/Myanmar'; // e.g., 'Asia/Kolkata', 'America/New_York'
        const zonedDate = utcToZonedTime(new Date(), timeZone);
        const formattedDate = format(zonedDate, 'yyyy-MM-dd HH:mm:ssXXX', { timeZone });
        setCurrentDateTime(formattedDate);
    }, []);

    return (
        <div>{currentDateTime}</div>
    )
}

export default TimeZone
