import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import Box from '@mui/material/Box';
import CircularProgress from "@mui/material/CircularProgress";
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { UsedCarCard } from "./UsedCarCard";
import { AllUsedCarDto, CarDto } from "../../../../@types/dto";
import banner from '/public/images/BannerOld.webp'
import { UsedCars } from "@prisma/client";


export function SwiperElUsed({ carsUsed }: { carsUsed: AllUsedCarDto }) {

    const [carArr, setCarArr] = useState<AllUsedCarDto>([]);
    useEffect(() => {

        if (!Array.isArray(carsUsed) || !carsUsed.length) {
            return;
        }
        const shuffledCars = Array(16).fill(0).map(el => carsUsed[Math.floor(Math.random() * carsUsed.length)]);
        setCarArr(shuffledCars);
    }, [carsUsed]);


    const [itemsPerPage, setItemsPerPage] = useState(0);

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


    const resultArr = carArr.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / itemsPerPage);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);


    return (
        <Box sx={{
            maxWidth: "1000px",
            margin: '0 auto',
            marginTop: '70px'
        }}>
            <div className="banner"></div>
            {carArr.length > 0 ?
                <Carousel sx={{ height: 'auto' }} animation="slide" autoPlay={false} swipe indicators cycleNavigation fullHeightHover
                    navButtonsAlwaysVisible
                >
                    {resultArr.map((carArr) => <Item key={carArr.id} carArr={carArr} />)}
                </Carousel>
                : <CircularProgress />
            }
            <div className="btnDiv">
                <Link href={'/catalog/used-car'}>
                    <button className="btnAllCar">Смотреть все автомобили c пробегом</button>
                </Link>
            </div>
            <style jsx>{` 
                
                .banner{
                    display:flex; 
                    width: 100%;
                    height: 300px;
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
                    background:#005baa;
                    color: white;
                    width: 350px;
                    height: 100%;
                    font-size: 18px;
                    border-radius: 5px;
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


    function Item({ carArr }: { carArr: UsedCars[] }) {
        return (
            <Box sx={{ display: 'flex', height: 'auto', justifyContent: 'center', gap: '6px' }}>
                {
                    carArr.map((car) =>
                        <UsedCarCard car={car} key={car.id}/>
                    )
                }
            </Box>


        )
    }

}