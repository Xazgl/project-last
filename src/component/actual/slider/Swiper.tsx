import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import Box from '@mui/material/Box';
import CircularProgress from "@mui/material/CircularProgress";
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { NewCarCard } from "./NewCarCard";
import { AllCarDto, CarDto } from "../../../../@types/dto";
import banner from '/public/images/BannerNew.webp'


export function SwiperEl({ cars }: { cars: AllCarDto }) {

    const [carArr, setCarArr] = useState<AllCarDto>([]);

    useEffect(() => {
        if (!Array.isArray(cars) || !cars.length) {
            return;
        }
        const shuffledCars = Array(16).fill(0).map(el => cars[Math.floor(Math.random() * cars.length)]);
        setCarArr(shuffledCars);
    }, [cars]);


    const [itemsPerPage, setItemsPerPage] = useState(0);

    // Определение количества отображаемых элементов в зависимости от ширины экрана
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
              } else if (768 <= window.innerWidth && window.innerWidth < 950) {
                setItemsPerPage(2);
              } else if (950 <= window.innerWidth && window.innerWidth < 1300) {
                setItemsPerPage(3);
              } else if (window.innerWidth >= 1300) {
                setItemsPerPage(4);
              }
            
        }
        window.addEventListener("resize", handleResize);
        // Вызываем handleResize сразу при монтировании компонента
        handleResize();
        // Убираем обработчик события при размонтировании компонента
        return () => window.removeEventListener("resize", handleResize);
    }, [])


    const resultArr = carArr.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / itemsPerPage);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);


    const [firstImageLoaded, setFirstImageLoaded] = useState(false);

    const handleFirstImageLoad = () => {
        setFirstImageLoaded(true);
    }

    return (
        <Box sx={{
            width: "100%",
            margin: '0 auto',
            marginTop: '70px',
            gap: '10px'
        }}>

            {/* <div className="banner"></div> */}
            <div className="title">Новые автомобили</div>
            {carArr.length > 0 ?
                <Carousel sx={{ height: 'auto' }} animation="slide" autoPlay={false} swipe indicators cycleNavigation fullHeightHover
                    navButtonsAlwaysVisible
                >
                    {resultArr.map((carArr) => <Item key={carArr.id} carArr={carArr} />)}
                </Carousel>
                : <CircularProgress />
            }
            <div className="btnDiv">
                <Link href={'/catalog/new-car'}>
                    <button className="btnAllCar">Смотреть все новые автомобили</button>
                </Link>
            </div>
            <style jsx>{` 

                .title {
                    display: flex;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                    font-weight: bold;
                    font-size:25px;
                    font-family: "Roboto",sans-serif;
                }
                
                .banner{
                    display:flex; 
                    width: 100%;
                    height: 400px;
                    justify-content: center;
                    background-position: center center;
                    background-image: url('${banner.src}');
                    background-repeat: no-repeat;
                    background-size: cover;
                }

                .btnDiv {
                    display: flex;
                    width: 100%;
                    height: 50px;
                    justify-content: center;
                    align-items: center;
                    margin-top:50px;
                }

                .btnAllCar {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    background:#0c54a0;
                    color: white;
                    width: 350px;
                    height: 100%;
                    font-size: 18px;

                    transition: 0.6s;
                    font-family: 'Roboto',sans-serif;
                    border:none;
                    cursor:pointer;
                }

                .btnAllCar:hover {
                    background-color: #005baa9b;
                    color:white;
                    transform: scale(0.99);
                    -webkit-box-shadow: 0px -1px 10px 2px rgba(34, 60, 80, 0.2) inset;
                    -moz-box-shadow: 0px -1px 10px 2px rgba(34, 60, 80, 0.2) inset;
                    box-shadow: 0px -1px 10px 2px rgba(34, 60, 80, 0.2) inset;
                }

                @media(max-width: 900px) {
                    .banner{
                        display:flex; 
                        width: 100%;
                        height: 250px;
                        background-size: contain;
                    }
                }

                @media(max-width: 640px) {
                    .banner{
                        height: 200px;
                    }
                }
                `}</style>
        </Box>
    )


    function Item({ carArr }: { carArr: CarDto[] }) {
        return (
            <Box sx={{ display: 'flex', height: 'auto', justifyContent: 'center', gap: '6px' }}>
                {
                    carArr.map((car) =>
                        <NewCarCard car={car} key={car.id} />
                    )
                }
            </Box>


        )
    }



}