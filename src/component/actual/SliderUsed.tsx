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
import { AllCarDto, AllUsedCarDto } from "../../../@types/dto";
import { Car } from "@prisma/client";
import { Circle } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Carousel } from "react-responsive-carousel";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { numberWithSpaces } from "./allNewCarPage/servicesNewCar/service";
// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


export function SliderUsed({ carsUsed }: { carsUsed: AllUsedCarDto }) {

    const [currentSlide, setCurrentSlide] = useState(0);
    // Переменная для определения количества отображаемых элементов
    const [itemsPerPage, setItemsPerPage] = useState(0);
    const [sliderContainerStyle, setSliderContainerStyle] = useState({})
    const [carsSlides, setCarsSlides] = useState<AllUsedCarDto>(
        Array.isArray(carsUsed) && carsUsed.length ? Array(16).fill(0).map(el => carsUsed[Math.floor(Math.random() * carsUsed.length)]) : [])

    // Определение количества отображаемых элементов в зависимости от ширины экрана
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1200) {
                setItemsPerPage(3);
            } else if (window.innerWidth > 1200) {
                setItemsPerPage(4);
            }
        }
        window.addEventListener("resize", handleResize);
        // Вызываем handleResize сразу при монтировании компонента
        handleResize();
        // Убираем обработчик события при размонтировании компонента
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    // Разделение слайдов на группы
    const groupedSlides = carsSlides.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / itemsPerPage);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);


    const handlePrevClick = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        } else {
            setCurrentSlide(groupedSlides.length - 1);
        }
    };

    const handleNextClick = () => {
        if (currentSlide < groupedSlides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setCurrentSlide(0);
        }
    };

    const getSlidesToShow = () => {
        const slidesToShow: AllUsedCarDto = [];
        for (let i = 0; i < itemsPerPage; i++) {
            const index = currentSlide * itemsPerPage + i;
            if (index >= carsSlides.length) {
                slidesToShow.push(carsSlides[index - carsSlides.length]);
            } else {
                slidesToShow.push(carsSlides[index]);
            }
        }
        return slidesToShow;
    };

    const slides = getSlidesToShow();

    // const [touchStart, setTouchStart] = useState(0)
    // const handleTouchMove = (e: TouchEvent) => {
    //     const touchEnd = e.changedTouches[0].clientX;
    //     if (touchStart - touchEnd > 30) {
    //         handleNextClick();
    //     }
    //     if (touchStart - touchEnd < -30) {
    //         handlePrevClick();
    //     }
    // };

    const [touchStart, setTouchStart] = useState(0);
    const [touchStartTime, setTouchStartTime] = useState(0);
    const handleTouchMove = (e: TouchEvent) => {
        const touchEnd = e.changedTouches[0].clientX;
        const touchEndTime = new Date().getTime();
        const touchDuration = touchEndTime - touchStartTime;
        if (touchStart - touchEnd > 120 && touchDuration > 150) {
            handleNextClick();
            setTouchStartTime(touchEndTime);
        }
        if (touchStart - touchEnd < -120 && touchDuration > 150) {
            handlePrevClick();
            setTouchStartTime(touchEndTime);
        }
    };


    

    function matchesEngine(engine) {
        let arr = engine.toString().split(/\s*,\s*/)
        return arr[2].replace(/\s/g, '');
    }

    function gearboxType(gearbox) {
        if (gearbox === 'Механическая') {
            return 'MT'
        } else {
            return 'АТ'

        }
    }


    function engineArrStr(engine) {
        let arr = engine.toString().split(/\s*,\s*/)
        return arr[1]
    }

    return (
        <>
            <div className="slider"
                onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
                // onTouchMove={handleTouchMove}
                >
                <div className="title">Автомобили с пробегом</div>
                <div className="slider__container">
                    <div
                        className="slider__slides"

                    >
                        {slides.length > 0 ?
                            <>
                                {slides.map(car => {
                                     return <Link href={{
                                        pathname: '/catalog/car/[id]',
                                        query: { id: car.id }
                                    }}>
                                        <div className="card">
                                            <div className="imgDiv">
                                                <img src={car.picture[0]}
                                                    loading="lazy"
                                                    decoding='async'
                                                    className="cardImg"
                                                >
                                                </img>
                                            </div>
                                            <div className="cardTitle">{car.vendor} {car.modelShortName}</div>
                                            <div className="cardDesc">
                                                <div className="elDesc">АИ-95</div>
                                                <div className="elDesc">{engineArrStr(car.engine)} </div>
                                                <div className="elDesc">{matchesEngine(car.engine)}</div>
                                                {car.driverType === 'Передний' &&
                                                    <div className="elDesc">FWD</div>
                                                }
                                                {car.driverType === 'Полный' &&
                                                    <div className="elDesc">4WD</div>
                                                }
                                                <div className="elDesc">{gearboxType(car.gearboxType)}</div>
                                            </div>
                                            <div className="cardPrice">{numberWithSpaces(Number(car.price))} ₽</div>
                                            <div className="cardPriceMonth">
                                                <button className="btn">от {numberWithSpaces(Math.round(Number(car.price/120)))} Р/мес</button>
                                            </div>
                                            <div className="credit">
                                                <span className="pricCredit">РАССЧИТАТЬ КРЕДИТ</span>
                                            </div>
                                        </div>
                                    </Link>
                                })
                                }

                            </>
                            : <CircularProgress />
                        }
                    </div>
                    <div className="slider__controls">
                        <button className="sliderbutton sliderbutton--prev" >< ArrowBackIosNewIcon
                            sx={{
                                cursor: 'pointer',
                                backgroundColor: 'white',
                                borderRadius: '100%',
                                padding: '3px',
                                fontSize: '30px',
                                '&:hover': {
                                    backgroundColor: 'black',
                                    color: 'white'
                                }
                            }}
                            onClick={handlePrevClick} /></button>
                        <button className="sliderbutton sliderbutton--next">< ArrowForwardIosIcon
                            sx={{
                                cursor: 'pointer',
                                backgroundColor: 'white',
                                borderRadius: '100%',
                                padding: '3px',
                                fontSize: '30px',
                                '&:hover': {
                                    backgroundColor: 'black',
                                    color: 'white'
                                }
                            }}
                            onClick={handleNextClick} /></button>
                    </div>
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

            @keyframes slideAnimation {
              0% {
              transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-100% / ${slides.length} * ${currentSlide}));
              }
            }

        .slider {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          margin-top: 100px;
          align-items: center;
          position: relative;
        }

        .slider__container {
          overflow-x: hidden;
          position: relative;
          transition: transform 0.5s ease-in-out;
        }

        .slider__slides {
          display: flex;
          overflow: hidden;
          animation: slideAnimation 1s ease-in-out;
          flex-grow:1;
        }

        .slider__controls {
          display: flex;
          justify-content: space-between;
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 1980px;
          padding: 0 20px;
          box-sizing: border-box;
          height: 100%;
          position: absolute;
        }
        .slider__control--prev {
            left:20px
        }
        .slider__control--next {
            right:20px
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
            font-family: 'Roboto','sans-serif'; 
        }
            
        .sliderbutton {
          border: none;
          background-color: transparent;
          color: #000;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          box-sizing: border-box;
          outline: none;
          transition: all 0.2s ease-in-out;
          cursor: default;
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
            cursor: pointer;            
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
                    font-family: 'Roboto','sans-serif'; 
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
                    font-family: 'Roboto','sans-serif'; 
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
                    font-family: 'Roboto','sans-serif'; 
                }

                .cardPriceMonth{
                    display: flex;
                    width:100%;
                    height: auto;
                    justify-content: center;
                    align-items: center;
                    margin-top: 10px;
                    font-family: 'Roboto','sans-serif'; 
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
                    font-family: 'Roboto','sans-serif'; 
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
                    font-family: 'Roboto','sans-serif'; 
                }

                .credit:hover {
                    background-color:#0088ff;;
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

                    .slider {
                        display:none;
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

                    .slider__container {
                      overflow-x: hidden;
                      position: relative;
                    }

                     .slider__slides {
                        display: flex;
                        overflow: hidden;
                        animation: slideAnimation 1s ease-in-out;
                        flex-grow:1;
                    }

                    .slider__controls{
                        padding: 0;
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
        </>)
}