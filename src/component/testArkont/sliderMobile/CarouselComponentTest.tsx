import Link from "next/link";
import { MutableRefObject, useEffect, useMemo, useRef, useState } from "react";
import car from '/public/images/newcar.jpg';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Car } from "@prisma/client";
import { Circle } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Carousel } from "react-responsive-carousel";
import SwipeableViews from "react-swipeable-views";
import { CarDto } from "../../../../@types/dto";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


export function CarouselComponentTest({ car }: { car: CarDto }) {

    const [filterOpen, setFilterOpen] = useState(false);
    const [carArr, setCarArr] = useState<CarDto>(car)


    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = carArr.img.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };


    return (
        <>
            <div className="background" >
                {/* <div className="title"></div> */}
                {carArr.img.length > 0 ?
                    <Box sx={{ maxWidth: 270, flexGrow: 1 }}>

                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >

                            {
                                carArr.img.map(img => {
                                    return <div className="card" key={img}>
                                        <div className="imgDiv">
                                            <img src={img} className="cardImg"></img>
                                        </div>
                                    </div>
                                })
                            }
                        </AutoPlaySwipeableViews>
                        <MobileStepper
                          variant="progress"
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1}
                                >
                                    
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                    
                                </Button>
                            }
                        />
                    </Box>
                    :
                    <CircularProgress />
                }
                {
                    carArr.img.length <= 0 &&
                    <h1>Авто в пути</h1>
                }

            </div>
            <style jsx>{`

                   
            @keyframes credit-open {
                0% {
                    opacity: 0;
                    margin-top:-5em;
                 
                }

                50% {
                    opacity: 0.5;

                }

                60% {
                    opacity: 0.8;
                }

                80% {
                    opacity: 0.9;
                }
        
                100% {
                    opacity: 1;
                }
            }

                .background {
                    display:none; 
                    width: 100%;
                    height: auto;
                    justify-content: center; 
                    align-items: center;
                    margin-top:10px;
                    padding:30px;
                    flex-direction: column;
                }

                .title {
                    display:flex; 
                    width: 100%;
                    height: 40px;
                    justify-content: center; 
                    text-align: center;
                    font-size: 40px;
                    font-weight: bold;
                    gap:20px;
                    font-family: 'Roboto',sans-serif;

                }

                .cardsSlider{
                    display:flex; 
                    flex-direction: row;
                    width: 1000px;
                    height: 600px;
                    overflow: hidden;
                    justify-content: center;
                }

                .cardsRow{
                    display:flex; 
                    flex-direction: row;
                    justify-content: center;
                    width: auto;
                    gap:30px;
                    height: 100%;
                    transition: 1s;
                }


                .filt {
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    margin-top:30px;
                    color: #005baa;
                    cursor: pointer;
                    font-size: 20px;
                    transition: 0.5s;
                    gap: 30px;
                    border-bottom: 1px solid #deded8;
                    height: 50px;
                    
                }

                #newFilt {
                    border-bottom: 2px solid transparent;
                }

                #newFilt_active{
                    border-bottom: 2px solid #fdb913;
                }

                .card {
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    flex-direction: column;
                    width: 270px;
                    height: 400px;
                    border: 1px solid #deded8;
                    margin-top: 40px;
                    border-radius: 7px;
                    transition: 0.3s;
                }

                .card:hover {    
                    transform: scale(1.03);
                   -webkit-box-shadow: 0px -1px 11px 9px rgba(34, 60, 80, 0.9);
                   -moz-box-shadow: 0px -1px 11px 9px rgba(34, 60, 80, 0.9);
                   box-shadow: 0px -1px 11px 9px rgba(34, 60, 80, 0.09);
                   height: 450px;
                   border: none;
                }

                .imgDiv {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    height: auto;
                }

                .cardImg {
                    display: flex;
                    width: 221px;
                    height: 166px;
                    border-radius: 7px;
                }

                .cardTitle {
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    font-size: 17px ;
                    align-items:center;
                    width: 100%;
                    height: 32px; 
                    color: #005baa;
                    font-family: 'Roboto',sans-serif;

                    
                }

                .cardDesc {
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    align-items: center;
                    width: 100%;
                    height: 32px;
                    margin-top:20px;
                    padding-left: 10px;
                    padding-right: 10px;
                    font-family: 'Roboto',sans-serif;

                }

                .elDesc{
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    align-items: center;
                    width:45px;
                    height: 30px;
                    font-size:.777777778em;
                    border:1px solid #deded8;
                }


                .cardPrice {
                    display: flex;
                    width: 100%;
                    justify-content: center;
                    text-align: center;
                    align-items: center;
                    font-size: 18px;
                    font-weight: bold;
                    line-height: 24px;
                    min-height: 24px;
                    margin-top:5px;
                    font-family: 'Roboto',sans-serif;

                }

                .cardPriceMonth{
                    display: flex;
                    width:100%;
                    height: auto;
                    justify-content: center;
                    align-items: center;
                    margin-top: 10px;
                    font-family: 'Roboto',sans-serif;

                }


                .btn {
                    background: #fdb913;
                    color: #fff;
                    cursor: pointer;
                    opacity: 1;
                    transition: opacity .5s ease-in-out;
                    border-radius: 5px;
                    border:none;
                    width: 150px;
                    height: 30px;
                    transition: 0.5s;
                    font-family: 'Roboto',sans-serif;

                }

                .credit {
                    display: none;
                    justify-content: center;
                    text-align: center;
                    align-items: center;
                    width: 100%;
                    height: 60px;
                    border-top:1px solid #deded8;
                    transition: 1s;
                    margin-top:-10em;
                    cursor: pointer;
                }

                .credit:hover {
                    background-color:#0088ff;;
                }
                
                .card:hover .credit {
                    display: flex;
                    transition: 1s;
                    animation:credit-open.5s ;
                    margin-top: 40px;
                    background-color:#005baa;
                }
                
                .btn:hover {
                    background: #d19a0f;
                    transform: scale(0.99);
                }

                .pricCredit{
                    text-align: center;
                    color: #005baa;
                    transition: 0.5s;
                }

                .card:hover .pricCredit{
                    color:white;
 
                }


                 .btnDiv {
                    display: flex;
                    width: 100%;
                    height: 50px;
                    justify-content: center;
                    align-items: center;
                 }

                 .btnAllCar {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    border: 1px solid #deded8;
                    background:#005baa;
                    color: white;
                    width: 350px;
                    height: 100%;
                    font-size: 18px;
                    border-radius: 5px;
                    transition: 0.6s;
                    font-family: 'Roboto',sans-serif;
                }

                .btnAllCar:hover {
                    background-color: #005baa9b;
                    color:white;
                    transform: scale(0.99);
                    -webkit-box-shadow: 0px -1px 10px 2px rgba(34, 60, 80, 0.2) inset;
                    -moz-box-shadow: 0px -1px 10px 2px rgba(34, 60, 80, 0.2) inset;
                    box-shadow: 0px -1px 10px 2px rgba(34, 60, 80, 0.2) inset;
                }
                
                @media(max-width: 720px) {
                    .background {
                        display: flex;
                    }
                    .card:hover .credit {
                       display: none;
                    }
                    .card:hover {    
                    transform: scale(1);
                    height: auto;
                   }
                   .card{
                    height: auto;
                   }

                   .cardImg{
                      width: 100%;
                      height: auto;
                      border-radius: 0;
                    }

                    .cardPriceMonth{
                        margin-bottom:10px;
                    }

                    .btn {
                        width: 80%;
                        height: 35px;
                    }

                    .title { 
                        font-size:25px;
                    }
                }
            
                @media(max-width: 540px) {
                    .titleMini {
                        font-size:12px;
                    }
                    .MainBanner { 
                        height: 250px;
                    }
                }
                @media(max-width: 350px) {
                    .title { 
                        font-size:18px;
                    }
                    .titleMini {
                        font-size:9px;
                    }
                    .MainBanner { 
                        height: 150px;
                    }
                }
                @media(max-width: 250px) {
                    .title { 
                        font-size:16px;
                        margin-top:10px;
                    }
                    .titleMini {
                        font-size:7px;
                    }
                    .MainBanner { 
                        height: 130px;
                    }
                    .titleMini{
                        margin-bottom:00px;
                        margin-top:10px;
                    }
                }
        `}</style>
        </>
    )
}