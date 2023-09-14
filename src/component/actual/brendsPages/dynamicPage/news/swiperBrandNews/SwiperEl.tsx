import Link from "next/link";
import { Dispatch, useEffect, useMemo, useRef, useState } from "react";
import Box from '@mui/material/Box';
import CircularProgress from "@mui/material/CircularProgress";
import React from 'react';
import Carousel from 'react-material-ui-carousel'

import banner from '/public/images/BannerNew.webp'
import { NewsCard } from "./NewsCard";
import { News } from "@prisma/client";
import { NewsOne } from "../../../../../../../@types/dto";


type Props = {
    newsBrand: NewsOne[],
    setShowModalImg: Dispatch<React.SetStateAction<boolean>>,
    setCarImg: Dispatch<React.SetStateAction<string>>

}


export function SwiperEl({ newsBrand, setShowModalImg, setCarImg }: Props) {
    const [itemsPerPage, setItemsPerPage] = useState(0);

    // Определение количества отображаемых элементов в зависимости от ширины экрана
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 900) {
                setItemsPerPage(1);
            } else if (window.innerWidth > 1200) {
                setItemsPerPage(1);
            }
        }
        window.addEventListener("resize", handleResize);
        // Вызываем handleResize сразу при монтировании компонента
        handleResize();
        // Убираем обработчик события при размонтировании компонента
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    const [firstImageLoaded, setFirstImageLoaded] = useState(false);

    const handleFirstImageLoad = () => {
        setFirstImageLoaded(true);
    }

    return (

        <div className="background">
            {newsBrand !== undefined ?
                <Carousel sx={{ height: 'auto' }} animation="slide" autoPlay={false} swipe indicators cycleNavigation fullHeightHover
                    navButtonsAlwaysVisible
                    navButtonsProps={{   // Переместите кнопки вниз. Отмените здесь настройку top, чтобы переопределить стиль по умолчанию.
                        style: {
                            color: 'white',
                            backgroundColor: ' #131313'
                        }
                    }}
                >
                    {newsBrand.map((item) =>
                        <NewsCard
                            key={item.id}
                            item={item}
                            setShowModalImg={setShowModalImg}
                            setCarImg={setCarImg}
                        />
                    )}
                </Carousel>
                : <CircularProgress />
            }
            {/* <div className="btnDiv">
                    <Link href={'/catalog/new-car'}>
                        <button className="btnAllCar">Смотреть все</button>
                    </Link>
                </div> */}
            <style jsx>{` 
                
                .background {
                    width: 100%;
                    margin: 0 auto;
                    background-color: #f5f2f261;
                    gap: 0px;
                    height: auto;
                    padding: 20px;
                    justify-content: center;
                }

                .titleBrand {
                  display: flex;
                  justify-content: flex-start;
                  font-size: 20px;
                  font-weight: bold;
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

        </div>

    )

}