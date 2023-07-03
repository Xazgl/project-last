import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import Box from '@mui/material/Box';
import CircularProgress from "@mui/material/CircularProgress";
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { ImgCarCard} from "./ImgCarCard";
import banner from '/public/images/BannerNew.webp'
import { CarDto } from "../../../../../@types/dto";


export function SwiperImg({ img }: { img: string[] }) {

    const [carArrImg, setCarArrImg] = useState<string[]>([]);

    useEffect(() => {
        if (!Array.isArray(img) || !img.length) {
            return;
        }
        const ImgCars = Array(12).fill(0).map(el => img[Math.floor(Math.random() * img.length)]);
        setCarArrImg(ImgCars);
    }, [img]);


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


    const resultArr = carArrImg.reduce((resultArray, item, index) => {
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
        <div className="background">

            {carArrImg.length > 0 ?
                <Carousel sx={{ height: 'auto' }} animation="slide" autoPlay={false} swipe indicators cycleNavigation fullHeightHover
                    navButtonsAlwaysVisible 
                >
                    {resultArr.map((carArrImg) => <Item key={carArrImg.id} carArrImg={carArrImg} />)}
                </Carousel>
                : <CircularProgress />
            }

            <style jsx>{` 

            .background {
                    width: 100%;
                    margin: 0 auto;
                    background-color: #f5f2f261;
                    gap: 0px;
                    padding: 20px;
                    justify-content: center;
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
        </div>
    )


    function Item({ carArrImg }: { carArrImg : string[] }) {
        return (
            <Box sx={{ display: 'flex', height: 'auto', justifyContent: 'center',gap:'6px' }}>
                {
                    carArrImg.map((img) =>
                        <ImgCarCard img={img} key={img}/>
                    )
                }
            </Box>


        )
    }



}