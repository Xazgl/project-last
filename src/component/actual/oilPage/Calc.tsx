import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, Link, MenuItem, Select, Stack } from '@mui/material'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import banner from '/public/images/numbers/vse_nomera.png'
import dynamic from 'next/dynamic';
import CalculateIcon from '@mui/icons-material/Calculate';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
const CountUp = dynamic(() => import('react-countup'), { ssr: false });


type Props = {
    setShowModal: Dispatch<SetStateAction<boolean>>,
}

export function Calc({ setShowModal }: Props) {

    function showModal(event) {
        event.preventDefault()
        setShowModal(true)
    }

    const [oilVolume, setOilVolume] = useState<number>(0);
    const [airFilter, setAirFilter] = useState<boolean>(false);
    const [cabinFilter, setCabinFilter] = useState<boolean>(false);
    const [totalCost, setTotalCost] = useState<number>(0);


    const oilOptions = [
        { value: 1, label: "1л" },
        { value: 2, label: "2л" },
        { value: 3, label: "3л" },
        { value: 4, label: "4л" },
    ];

    const oilPrice: number = 1000;
    const filterPrice: number = 500;
    const oilChangeLabor: number = 500;
    const airFilterLabor: number = 250;
    const cabinFilterLabor: number = 450;

    const calculateMaintenance = () => {
        let totalCost: number = 0;

        if (oilVolume) {
            totalCost = oilVolume * oilPrice;
            totalCost += oilChangeLabor;
        }
        if (airFilter) {
            totalCost += filterPrice + airFilterLabor;
        }
        if (cabinFilter) {
            totalCost += filterPrice + cabinFilterLabor;
        }
        setTotalCost(totalCost);
    };

    useEffect(() => {
        calculateMaintenance();
    }, [oilVolume, airFilter, cabinFilter]);


    return (
        <>
            <div className="background">
                <div className="txt">
                    <CalculateIcon sx={{ fontSize: '35px' }} />
                    <span className="title">Калькулятор замены масла </span>
                </div>

                {/* <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    gap: '8px'
                }}> */}

                <div className='form'>
                    {/* <div className='row'>
                        <p className='titleRow'>Выберите объем:</p>
                    </div> */}
                    <div className='row'>
                        <FormControl sx={{ width: '100%', color: ' #131313' }}>
                            <InputLabel
                                sx={{ width: '100%', color: ' #131313' }}
                            >
                                Объем масла
                            </InputLabel>
                            <Select
                                value={oilVolume.toString()}
                                label="Объем масла"
                                onChange={(e) => setOilVolume(parseInt(e.target.value))}
                                sx={{
                                    border: ' #131313',
                                    borderRadius: '10px',
                                    color: " #131313",
                                    outline: 'none',
                                }}
                            >
                                {oilOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                    <div className='row'>
                        <FormControlLabel
                            control={<Checkbox
                                color="default"
                                sx={{ color: ' #131313' }}
                                checked={airFilter} onChange={(e) => setAirFilter(e.target.checked)} />}
                            label="Воздушный фильтр"
                        />
                    </div>

                    <div className='row'>
                        <FormControlLabel
                            control={<Checkbox
                                color="default"
                                sx={{ color: ' #131313' }}
                                checked={cabinFilter} onChange={(e) => setCabinFilter(e.target.checked)} />}
                            label="Салонный фильтр"
                        />
                    </div>

                    <div className='row' id="finished">
                        <span>Итого:</span>
                        <CountUp start={0} end={totalCost} duration={1.5} separator=" " suffix=" ₽" />
                    </div>

                    <div className='btnDiv'>
                        <Button variant="contained"
                            // onClick={calculateMaintenance}
                            sx={{
                                display: 'flex',
                                alignIntems: 'center',
                                gap: '5px',
                                width: '100%',
                                height: '45px',
                                backgroundColor: '#D1AC02',
                                borderRadius: '10px',
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: ' #131313',
                                    color: 'white',
                                }
                            }}
                            onClick={showModal}
                        >
                            <AssignmentTurnedInIcon sx={{ fontSize: '20px' }} />
                            Записаться
                        </Button>
                    </div>

                    {/* <div className='row' id="finished">
                        <CountUp start={0} end={totalCost} duration={1.5} separator=" " suffix=" ₽" />
                    </div> */}

                    {/* </Box> */}
                </div >

            </div >
            <style jsx>{`
                .background {
                    display:flex; 
                    height: auto;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;
                    height: 100%;
                }

                .title  {
                    font-size: 40px;
                    font-family: 'Gilroy','sans-serif'; 
                    height: auto;
                }

                .titleRow{
                    font-size: 25px;
                    font-family: 'Gilroy','sans-serif'; 
                }

                .form {
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    gap: 8px;
                    width: 600px;
                }

                .txt{
                    display:flex; 
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: auto;
                    background-color:  #131313;
                    color:white;
                    margin-bottom: 40px;
                    gap:10px;
                    padding: 20px;
                }

                .row {
                    display: flex;
                    margin-top: 20px;
                    font-size: 25px;
                    width: 100%;
                    justify-content: start;
                }

                .btnDiv{
                    display: flex;
                    margin-top: 20px;
                    font-size: 25px;
                    width: 100%;
                    justify-content: center;
                }

                
                .btn{
                    display:flex; 
                    width: 100%;
                    font-family: 'Gilroy','sans-serif'; 
                }

                #finished{
                    justify-content: end;
                    color: #131313;
                    gap:10px;
                }

                @media(max-width: 1000px) {
                    .banner {
                        height: 300px;
                        width: 600px;
                    }
                }

                @media(max-width: 800px) {
                    .title {
                        font-size: 40px;
                    }
                }

                @media(max-width: 620px) {
                    .title {
                        font-size: 30px;
                        text-align: center;
                    }

                    li {
                        font-size: 16px;
                    }

                    .form {
                      width: 400px;
                    }
                }

                @media(max-width: 500px) {
                    li {
                        font-size: 14px;
                    }
                }

                @media(max-width: 400px) {
                    .banner {
                        height: 150px;
                        background-size: contain;
                    }

                    .form {
                      width: 250px;
                    }

                    .title {
                        font-size: 25px;
                    }
                }
            `}</style>
        </>
    )
}