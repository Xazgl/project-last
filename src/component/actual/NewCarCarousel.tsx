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
import { AllCarDto } from "../../../@types/dto";
import { Car } from "@prisma/client";
import { Circle } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Carousel } from "react-responsive-carousel";


// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


export function NewCarCarousel({ cars }: { cars: AllCarDto }) {

    const [activeFilter, setActiveFilter] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);
    const [filterClosed, setFilterClosed] = useState(false);
    const [carArr, setCarArr] = useState<AllCarDto>(
        Array.isArray(cars) && cars.length ? Array(4).fill(0).map(el => cars[Math.floor(Math.random() * cars.length)]) : [])

    // const [carArr, setCarArr] = useState<AllCarDto>(cars)
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
    //                 const { id, id_1c, color, bodyColorMetallic, mileage, mileageUnit, vin, year, img, priceMonth, price, special_price, specialOffer, tradeinDiscount, cblackitDiscount, insuranceDiscount, desc, active, carModelId, carModificationId, carComplectationId, dealerModelId, availability, createdAt } = car
    //                 return { id, id_1c, color, bodyColorMetallic, mileage, mileageUnit, vin, year, img, priceMonth, price, special_price, specialOffer, tradeinDiscount, cblackitDiscount, insuranceDiscount, desc, active, carModelId, carModificationId, carComplectationId, dealerModelId, availability, createdAt }
    //             }))
    //         }
    //     }
    //     start()
    //     console.log(carArr)
    // }, [])

    const carRef = useRef<HTMLDivElement>(null)
    const carouselRef = useRef<HTMLDivElement>(null)
    const cardsRowRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState(0)
    const [carouselWidth, setCarouselWidth] = useState(0)// ширина карусели
    const [cardsRowWidth, setCardsRowWidth] = useState(0) // ширина строки с карточками в области видимости
    const [cardWidth, setCardWidth] = useState(0) // ширина карточки
    const [stepLength, setLength] = useState(0) // количество шагов = кол элементво массива



    function nextStep2() {
        const sliderNum = getComputedStyle(cardsRowRef.current).getPropertyValue('--slider-cols');
        // setLength(carArr.length)
        setLength(cardsRowRef.current.children.length)
        // let stepCounter = Math.ceil(sliderNum / 2)

        if (stepLength - 1 >= stepLength && stepLength >= 0) {
            setLength
        }
    }

    function nextStep() {
        // for (let i = 0; i >= carArr.length; i++) {
        //     setCarArr([...carArr, carArr[i]]);  // добавить элемент в конец массива
        // }
        // const carouselWidth = carouselRef.current.children.length  // ширина карусели
        // const cardsRowWidth = cardsRowRef.current.children.length  // ширина строки с карточками в области видимости
        // const cardWidth = carRef.current.offsetWidth // ширина карточки
        if (position == 270) {
            setCarArr([...carArr, carArr[0]]);
            cardsRowRef.current.style.marginLeft = `0px`
        } else {
            if (carouselWidth == 0) {
                setCarouselWidth(carouselRef.current.offsetWidth)
                setCardsRowWidth(cardsRowRef.current.offsetWidth)
                setCardWidth(carRef.current.offsetWidth)
                console.log(carouselWidth + 'ширина карусели', cardsRowWidth + 'ширина строки',
                    cardWidth + 'ширина карточки', cardsRowRef.current.children.length + cardWidth + 'дочерние элементы')
            } else {
                setPosition((prevActiveStep) => prevActiveStep + cardWidth)
                cardsRowRef.current.style.marginLeft = `-${position}px`
                console.log(carouselWidth + 'ширина карусели', cardsRowWidth + 'ширина строки',
                    cardWidth + 'ширина карточки', position + 'позиционирование')

            }
        }
    }

    function prevStep() {
        if (position !== 0) {
            setPosition(position - cardWidth)
            cardsRowRef.current.style.marginLeft = `+${position}px`
            console.log(carouselWidth + 'ширина карусели', cardsRowWidth + 'ширина строки',
                cardWidth + 'ширина карточки', position + 'позиционирование')

        }
        return
    }

    // useEffect(() => {
    //     const carouselWidth = carouselRef.current.children.length
    //     console.log(carouselRef.current.offsetWidth + 'ширина карусели', cardsRowRef.current.offsetWidth + 'ширина строки',
    //         carRef.current.offsetWidth + 'ширина карточки'
    //     )
    // }, [carArr])


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
                    (<div className="cardsSlider" ref={carouselRef}>
                        <Box
                            sx={{
                                display: 'flex', justifyContent: 'space-between', width: '900px',
                                position: 'absolute'
                            }}>
                            <KeyboardArrowLeftIcon onClick={prevStep} />
                            <KeyboardArrowRightIcon onClick={nextStep} />
                        </Box>
                        <div className="cardsRow" ref={cardsRowRef}>
                            {
                                carArr.map(car => {
                                    return <Link
                                        key={car.id}
                                        href={{
                                            pathname: '/catalog/car/[id]',
                                            query: { id: car.id }
                                        }}>
                                        <div className="card" ref={carRef} >
                                            <div className="imgDiv">
                                                <img src={car.img[0]} className="cardImg"></img>
                                            </div>
                                            <div className="cardTitle">{car.CarModel.brandName} {car.CarModel.modelName}</div>
                                            <div className="cardDesc">
                                                <div className="elDesc">АИ-95</div>
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
                                            <div className="cardPrice">{car.price} Р </div>
                                            <div className="cardPriceMonth">
                                                <button className="btn">от {Math.round(Number(car.priceMonth))} Р/мес</button>
                                            </div>
                                            <div className="cblackit">
                                                <span className="pricCblackit">РАССЧИТАТЬ КРЕДИТ</span>
                                            </div>
                                        </div>
                                    </Link>
                                })
                            }
                        </div>
                    </div>)
                    : <CircularProgress />
                }
                {
                    carArr.length <= 0 &&
                    <h1>Авто в пути</h1>
                }

                <div className="btnDiv">
                    <Link href={'/catalog/new-car'}>
                        <button className="btnAllCar">Смотреть все новые автомобили</button>
                    </Link>
                </div>
            </div>
            <style jsx>{`

                   
            @keyframes cblackit-open {
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
                    width: 1000px;
                    height: 600px;
                    overflow: hidden;
                }

                .cardsRow{
                    display:flex; 
                    flex-direction: row;
                    justify-content: start;
                    width: auto;
                    gap:30px;
                    height: 100%;
                    transition: 1s;
                    --slider-cols: 1;
                }


                .filt {
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    margin-top:30px;
                    color:  #131313;
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
                    border-bottom: 2px solid #D1AC02;
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
                    color:  #131313;
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
                    background: #D1AC02;
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

                .cblackit {
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

                .cblackit:hover {
                    background-color:#0088ff;;
                }
                
                .card:hover .cblackit {
                    display: flex;
                    transition: 1s;
                    animation:cblackit-open.5s ;
                    margin-top: 40px;
                    background-color: #131313;
                }
                
                .btn:hover {
                    background: #d19a0f;
                    transform: scale(0.99);
                }

                .pricCblackit{
                    text-align: center;
                    color:  #131313;
                    transition: 0.5s;
                }

                .card:hover .pricCblackit{
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
                    color:  #131313;
                    width: 350px;
                    height: 100%;
                    font-size: 18px;
                    border-radius: 5px;
                    transition: 0.6s;
                }

                .btnAllCar:hover {
                    background-color:  #1313139b;
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
                    .card:hover .cblackit {
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