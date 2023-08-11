import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, Link, MenuItem, Select, Stack } from '@mui/material'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import banner from '/public/images/numbers/vse_nomera.png'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import { numberWithSpaces } from '../allNewCarPage/servicesNewCar/service';
import dynamic from 'next/dynamic';
// const CountUp = dynamic(() => import('react-countup'), { ssr: false });


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
            {/* <div className="background">
                <div className="txt">
                    <p className="title">Калькулятор замены масла </p>
                </div>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    gap: '8px'
                }}>
                    <div className='row'>
                        <p className='titleRow'>Выберите объем:</p>
                    </div>
                    <div className='row'>
                        <FormControl sx={{ minWidth: '100%' }}>
                            <InputLabel>Объем масла</InputLabel>
                            <Select value={oilVolume} label="Объем масла"
                            onChange={(e) => setOilVolume(parseInt(e.target.value))}

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
                            control={<Checkbox checked={airFilter} onChange={(e) => setAirFilter(e.target.checked)} />}
                            label="Воздушный фильтр"
                        />
                    </div>
                    <div className='row'>
                        <FormControlLabel
                            control={<Checkbox checked={cabinFilter} onChange={(e) => setCabinFilter(e.target.checked)} />}
                            label="Салонный фильтр"
                        />
                    </div>
                    <div className='btnDiv'>
                        <Button variant="contained"
                            // onClick={calculateMaintenance}
                            sx={{ width: '100%' }}
                            onClick={showModal}
                        >
                            Записаться
                        </Button>
                    </div>
                    <div className='row'>
                        <CountUp start={0} end={totalCost} duration={1.5} separator=" " suffix=" ₽" />

                    </div>

                </Box>

            </div > */}
            <style jsx>{`
                
                .background {
                    display:flex; 
                    height: auto;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;
                    height: 100%;
                    padding-bottom:80px;
                }

                .title  {
                    font-size: 45px;
                    font-weight: bold;
                    font-family: 'Roboto','sans-serif'; 
                }

                .titleRow{
                    font-size: 25px;
                    font-family: 'Roboto','sans-serif'; 
                }

                .banner {
                    display:flex; 
                    width: 900px;
                    height: 500px;
                    justify-content: center;
                    background-position: center center;
                    background-image: url('${banner.src}');
                    background-repeat: no-repeat;
                    background-size: cover;
                    padding-top: 42px;
                }

                .txt{
                    display:flex; 
                    align-items: start;
                    width: 900px;
                    height: auto;
                    flex-direction: column;

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
                    font-family: 'Roboto','sans-serif'; 
                }

                @media(max-width: 1000px) {
                    .banner {
                        height: 300px;
                        width: 600px;
                    }
                    .txt {
                        width: 600px;
                    }
                }

                @media(max-width: 620px) {
                    .banner {
                        height: 200px;
                        width: 400px;
                    }
                    .title {
                        font-size: 35px;
                    }
                    .txt {
                        width: 400px;
                    }
                    li {
                        font-size: 16px;
                    }
                }

                @media(max-width: 500px) {
                    .banner {
                        height: 100px;
                        width: 200px;
                    }
                    .title {
                        font-size: 25px;
                    }
                    .txt {
                        width: 200px;
                    }
                    li {
                        font-size: 14px;
                    }
                }

                @media(max-width: 350px) {
                    .banner {
                        height: 150px;
                        background-size: contain;
                    }
                }
            `}</style>
        </>
    )
}