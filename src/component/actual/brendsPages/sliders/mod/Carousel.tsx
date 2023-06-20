import Link from "next/link";
import { useRef, useState } from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { autoPlay } from 'react-swipeable-views-utils';

import CircularProgress from "@mui/material/CircularProgress";
import SwipeableViews from "react-swipeable-views";
import Image from 'next/image';
import { numberWithSpaces } from "../../../../../services/functions";
import { AllCarDto } from "../../../../../../@types/dto";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


export function CarouselComponent({ cars }: { cars: AllCarDto }) {

    const [activeFilter, setActiveFilter] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);
    const [filterClosed, setFilterClosed] = useState(false);
    const [carArr, setCarArr] = useState<AllCarDto>(
        Array.isArray(cars) && cars.length ? Array(4).fill(0).map(el => cars[Math.floor(Math.random() * cars.length)]) : [])

    // const [carArr, setCarArr] = useState<AllCarDto>(cars)
    const newFiltRef = useRef(null)
    const saleFiltRef = useRef(null)

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = carArr.length;

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
                <Box sx={{
                    width: '100%',
                    border: '2px solid #d1d7dd',
                    padding: '20px',
                    display:'flex',
                    justifyContent:'center',
                    flexDirection:'column',
                    alignItems:'center'
                }}>
                    <div className="title">Новые автомобили</div>
                    {carArr.length > 0 ?
                        <Box sx={{ width: 270, flexGrow: 1,display:'flex',
                        flexDirection:'column' }}>
                            <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                            >
                                {
                                    carArr.map(car => {
                                        return <Link  key={car.id}
                                        href={{
                                            pathname: '/catalog/car/[id]',
                                            query: { id: car.id }
                                        }}>
                                            <div className="card" key={car.id}>
                                                <div className="imgDiv" id="desk">
                                                    {/* <img src={car.img[0]} 
                                                className="cardImg"
                                                loading="lazy"
                                                decoding="async"
                                                alt={car.CarModel.modelName}
                                                ></img> */}
                                                    <Image src={car.img[0]}
                                                        alt="Car Image"
                                                        width={270}
                                                        height={200}
                                                        // width: 221px;
                                                        //height: 166px;
                                                        // layout="fill"
                                                        loading="lazy"
                                                    // sizes="(max-width: 640px) 100vw"
                                                    />
                                                </div>
                                                <div className="imgDiv" id="mob">
                                                    <Image src={car.img[0]}
                                                        alt="Car Image"
                                                        width={170}
                                                        height={120}
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="cardTitle">{car.CarModel.brandName} {car.CarModel.modelName}</div>
                                                <div className="cardPrice">от {numberWithSpaces(Number(car.price))} ₽</div>

                                                <div className="cardDesc">
                                                    {/* <div className="elDesc">АИ-95</div> */}
                                                    <div className="elDesc">{(Math.round((Number(car.CarModification.engineVolume)) * 100) / 100000).toFixed(1)} л.</div>
                                                    <div className="elDesc">{car.CarModification.enginePower}л.с.</div>
                                                    {car.CarModification.driveType === 'front' &&
                                                        <div className="elDesc">FWD</div>
                                                    }
                                                    {car.CarModification.driveType === 'full_4wd' &&
                                                        <div className="elDesc">4WD</div>
                                                    }
                                                    {/* <div className="elDesc">{(car.CarModification.driveType)}FWD</div> */}
                                                    <div className="elDesc">MT</div>
                                                </div>
                                                {/* <div className="cardPrice">от {numberWithSpaces(Number(car.price))} ₽</div> */}
                                                <div className="cardPriceMonth">
                                                    <button className="btn">от {numberWithSpaces(Math.round(Number(car.priceMonth)))} Р/мес</button>
                                                </div>
                                                <div className="credit">
                                                    <span className="pricCredit">РАССЧИТАТЬ КРЕДИТ</span>
                                                </div>
                                            </div>
                                        </Link>
                                    })
                                }
                            </AutoPlaySwipeableViews>
                            <MobileStepper 
                                steps={maxSteps}
                                sx={{ backgroundColor: 'transparent' }}
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
                        carArr.length <= 0 &&
                        <h1>Авто в пути</h1>
                    }

                    {/* <div className="btnDiv">
                    <Link href={'/catalog/new-car'}>
                        <button className="btnAllCar">Смотреть все новые автомобили</button>
                    </Link>
                </div> */}
                </Box>
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
                    display:flex; 
                    width: 100%;
                    height: auto;
                    justify-content: center; 
                    align-items: center;
                    margin-top:10px;
                    padding:20px;
                    flex-direction: column;
                    background-color: #f5f2f261;
                    
                }

                .title {
                    display:flex; 
                    width: 100%;
                    height: 40px;
                    justify-content: start; 
                    text-align: center2
                    font-size: 40px;
                    font-weight: bold;
                    gap:20px;
                    font-family: 'Roboto',sans-serif;

                }

                .card {
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    flex-direction: column;
                    width: 270px;
                    height: 400px;
                    margin-top: 40px;
                    border-radius: 7px;
                    transition: 0.3s;
                }


                .imgDiv {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                }

                #mob {
                    display: none;
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
                    color: #0c54a0;
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
                    width:54px;
                    height: 30px;
                    font-size:.777777778em;
                    border:1px solid #d1d7dd;
                    padding: 0.5px;
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
                    background: #f2f2f2;
                    color: #0c54a0 ;
                    cursor: pointer;
                    opacity: 1;
                    transition: opacity .5s ease-in-out;
                    border:none;
                    width: 150px;
                    height: 30px;
                    transition: 0.5s;
                    font-family: 'Roboto',sans-serif;
                    border: solid 2px #d1d7dd;
                    font-weight: bold;

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
                    background: #005baa;
                    color:white;
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
                        font-size:20px;
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
                @media(max-width: 380px) {
                    .title { 
                        font-size:18px;
                    }
                    .titleMini {
                        font-size:9px;
                    }
                    .MainBanner { 
                        height: 150px;
                    }
                    #mob {
                        display: flex;
                    }

                    #desk{
                        display: none;
                    }

                    .cardDesc {}

                    .elDesc {
                        width: 42px;
                    }
                    .btn {
                        width: 60%;
                    }

                    .background{
                        border:none;
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