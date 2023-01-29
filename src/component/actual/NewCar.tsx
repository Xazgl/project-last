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
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { AllCarDto } from "../../../@types/dto";
import { Car } from "@prisma/client";
import { Circle } from "@mui/icons-material";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


export function NewCar({ cars }: { cars: AllCarDto }) {

    const [activeFilter, setActiveFilter] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);
    const [filterClosed, setFilterClosed] = useState(false);
    const [carArr, setCarArr] = useState<AllCarDto>(
        Array.isArray(cars) && cars.length ? Array(4).fill(0).map(el => cars[Math.floor(Math.random() * cars.length)]) : [])


    const newFiltRef = useRef(null)
    const saleFiltRef = useRef(null)


    const id = [
        'newFilt',
        filterOpen ? 'newFilt_active' : '',
        // filterClosed ? 'newFilt_close-starting' : '',
    ]

    function active() {
        setFilterOpen(true)
        console.log(filterOpen)
    }


    // useEffect(() => {
    //     async function start() {
    //         const res = await fetch('/api/allCars')
    //         if (res.ok) {
    //             const cars: Car[] = await res.json()
    //             // console.log(cars)

    //             let customCars = Array(4).fill(0).map(el => cars[Math.floor(Math.random() * cars.length)])
    //             setCarArr(customCars.map(car => {
    //                 const { id, id_1c, color, bodyColorMetallic, mileage, mileageUnit, vin, year, img, priceMonth, price, special_price, specialOffer, tradeinDiscount, creditDiscount, insuranceDiscount, desc, active, carModelId, carModificationId, carComplectationId, dealerModelId, availability, createdAt } = car
    //                 return { id, id_1c, color, bodyColorMetallic, mileage, mileageUnit, vin, year, img, priceMonth, price, special_price, specialOffer, tradeinDiscount, creditDiscount, insuranceDiscount, desc, active, carModelId, carModificationId, carComplectationId, dealerModelId, availability, createdAt }
    //             }))
    //         }
    //     }
    //     start()
    //     console.log(carArr)
    // }, [])


    return (
        <>
            <div className="background" >
                <div className="title">Новые автомобили</div>
                <div className="filt">
                    <div className="el" id={id.join(' ')} ref={newFiltRef}
                        onClick={(event) => { if (event.target === newFiltRef.current) active() }}>Новые поступления</div>
                    <div className="el" id={id.join(' ')} ref={saleFiltRef} onClick={() => setActiveFilter('sale')}>Скидка</div>
                </div>
                {carArr.length > 0 ?
                    (<div className="cardsSlider">
                        {
                            carArr.map(car => {
                                return <Link href={{
                                    pathname: '/catalog/car/[id]',
                                    query: { id: car.id }
                                }}>
                                    <div className="card">
                                        <div className="imgDiv">
                                            <img src={car.img[0]} className="cardImg"></img>
                                        </div>
                                        <div className="cardTitle">{car.CarModel.brandName} {car.CarModel.modelName}</div>
                                        <div className="cardDesc">
                                            <div className="elDesc">АИ-95</div>
                                            <div className="elDesc">{(Math.round((Number(car.CarModification.engineVolume))* 100) / 100000).toFixed(1)} л.</div>
                                            <div className="elDesc">{car.CarModification.enginePower}л.с.</div>
                                            {car.CarModification.driveType === 'front' &&
                                                <div className="elDesc">FWD</div>
                                            }
                                            {car.CarModification.driveType === 'full_4wd' &&
                                                <div className="elDesc">4WD</div>
                                            }
                                            <div className="elDesc">{(car.CarModification.driveType)}FWD</div>
                                            <div className="elDesc">MT</div>
                                        </div>
                                        <div className="cardPrice">{car.price} Р </div>
                                        <div className="cardPriceMonth">
                                            <button className="btn">от {Math.round(Number(car.priceMonth))} Р/мес</button>
                                        </div>
                                        <div className="credit">
                                            <span className="pricCredit">РАССЧИТАТЬ КРЕДИТ</span>
                                        </div>
                                    </div>
                                </Link>
                            })
                        }
                    </div>)
                    : null
                }
                {
                    carArr.length <= 0 &&
                    <h1>Авто в пути</h1>
                }
                <div className="btnDiv">
                    <button className="btnAllCar">Смотреть все новые автомобили</button>
                </div>
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
                    height: 750px;
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
                }

                .cardsSlider{
                    display:flex; 
                    flex-direction: row;
                    justify-content: start;
                    width: 1000px;
                    gap:30px;
                    height: 600px;
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
                }

                .cardPriceMonth{
                    display: flex;
                    width:100%;
                    height: auto;
                    justify-content: center;
                    align-items: center;
                    margin-top: 10px;
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
                    background:transparent;
                    color: #005baa;
                    width: 350px;
                    height: 100%;
                    font-size: 18px;
                    border-radius: 5px;
                    transition: 0.6s;
                }

                .btnAllCar:hover {
                    background-color: #005baa9b;
                    color:white;
                    transform: scale(0.99);
                    -webkit-box-shadow: 0px -1px 10px 2px rgba(34, 60, 80, 0.2) inset;
                    -moz-box-shadow: 0px -1px 10px 2px rgba(34, 60, 80, 0.2) inset;
                    box-shadow: 0px -1px 10px 2px rgba(34, 60, 80, 0.2) inset;
                }
                
               
                @media(max-width: 1200px) {
                    .background {
                     height: 100%;
                    }
                }

                @media(max-width: 1000px) {
                    .cardsSlider{
                        flex-wrap: wrap;
                        width: auto;
                        justify-content: center;
                        height: auto;
                    }
                    .btnDiv {
                        margin-top: 20px;
                    }
                }

                @media(max-width: 720px) {
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
                }
            
                @media(max-width: 540px) {
                    .title { 
                        font-size:18px;
                    }
                    .titleMini {
                        font-size:12px;
                    }
                    .MainBanner { 
                        height: 250px;
                    }
                }
                @media(max-width: 350px) {
                    .title { 
                        font-size:12px;
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
                        font-size:9px;
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