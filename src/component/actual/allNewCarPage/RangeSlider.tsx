import { Slider, TextField } from '@mui/material';
import React, { useEffect } from 'react'

type Props = {
    minPrice: number;
    maxPrice: number;
    valueSliderPrice: number[];
    setValueSliderPrice: React.Dispatch<React.SetStateAction<number[]>>;
}


function valuetext(value: number) {
    return `${value}₽`;
}


export default function RangeSlider({ minPrice, maxPrice, valueSliderPrice, setValueSliderPrice }: Props) {

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValueSliderPrice(newValue as number[]);
    };


    useEffect(() => {
        console.log(valueSliderPrice)

    }, [valueSliderPrice])

    return (
        <>

            <TextField id="standard-basic"
                size='small'
                sx={{ width: '50%'}}
                label="Минимальная" variant="standard" value={`${numberWithSpaces(valueSliderPrice[0])} ₽`} />
            <TextField id="standard-basic"
                size='small'
                sx={{ width: '50%' }}
                label="Максимальная" variant="standard" value={`${numberWithSpaces(valueSliderPrice[1])} ₽`} />
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={valueSliderPrice}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                step={100000}
                min={minPrice}
                max={maxPrice}
            />
        </>
    );
}

