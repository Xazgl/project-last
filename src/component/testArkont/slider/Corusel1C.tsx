import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import Box from '@mui/material/Box';
import CircularProgress from "@mui/material/CircularProgress";
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { ImgCard } from "./ImgCard";
import banner from '/public/images/BannerNew.jpg'
import { CarDto } from "../../../../@types/dto";


export function Corusel1C({ car }: { car: CarDto }) {
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

   useEffect(() => {
     console.log(car)
   }, [])
   

    const resultArr = car.img.reduce((resultArray, item, index) => {
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
            marginTop: '70px',
            height:'auto'
        }}>

            {car.img.length > 0 ?
                <Carousel sx={{ height: 'auto' }} animation="slide" autoPlay={true} swipe  indicators={false}
                    navButtonsAlwaysVisible 
                >
                    {resultArr.map((imgArr) => <Item key={imgArr} imgArr={imgArr} />)}
                </Carousel>
                : <CircularProgress />
            }
            <style jsx>{` 

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
                    background: #131313;
                    color: white;
                    width: 350px;
                    height: 100%;
                    font-size: 18px;
                    border-radius: 5px;
                    transition: 0.6s;
                    font-family: 'Gilroy',sans-serif;
                    border:none;
                    cursor:pointer;
                }

                .btnAllCar:hover {
                    background-color:  #1313139b;
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


    function Item({ imgArr }: { imgArr: string[] }) {
        return (
            <Box sx={{ display: 'flex', height: 'auto', justifyContent: 'center' }}>
                {
                    imgArr.map((img) =>
                        <ImgCard img={img} key={img} />
                    )
                }
            </Box>
        )
    }



}