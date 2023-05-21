import * as React from 'react';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export default function MyCalender({setDate}) {
    const [value, setValue] = React.useState(dayjs(new Date()));

    useEffect(() => {
        setDate(value.toDate().toDateString());
    })

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
            orientation="landscape"
            openTo="day"
            value={value}
            onChange={(newValue)=> {
                setValue(newValue);
            }}
            renderInput= {(params)=> <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}
