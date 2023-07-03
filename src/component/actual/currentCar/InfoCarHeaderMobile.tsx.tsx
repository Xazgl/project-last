import { Circle } from "@mui/icons-material";
import { useRouter } from "next/router";
import { Dispatch, MutableRefObject, SetStateAction, useEffect, useMemo, useState } from "react";
import { CarDto } from "../../../../@types/dto";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Button, CardMedia, CircularProgress, Link } from "@mui/material";

import RoomIcon from '@mui/icons-material/Room';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { SwiperImg } from "./slider/SwiperImg";

type Props = {
    car: CarDto,
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>,
    setCarImg: Dispatch<SetStateAction<string>>,
    setCar: Dispatch<SetStateAction<CarDto>>,
    refCredit: MutableRefObject<HTMLDivElement>,
    showModalImg: boolean,
    setShowModalImg: Dispatch<SetStateAction<boolean>>,
}


export function InfoCarHeaderMobile({ car, setCar, showModal, setShowModal, showModalImg, setShowModalImg, setCarImg, refCredit }: Props) {

    function showModalImgFunction(x) {
        setShowModalImg(true)
        setCarImg(x)
    }

    function showModalFunction() {
        setShowModal(true)
    }
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }


    async function addToFavorite(id) {
        const res = await fetch('/api/favorite/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.ok) {
            const resCurrentCar = await fetch('/api/car/' + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (resCurrentCar.ok) {
                const carFetch = await resCurrentCar.json()
                setCar(carFetch)
            }

        }
    }


    async function deleteToFavorite(id) {
        const res = await fetch('/api/favorite/del/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.ok) {
            if (res.ok) {
                const resCurrentCar = await fetch('/api/car/' + id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                if (resCurrentCar.ok) {
                    const carFetch = await resCurrentCar.json()
                    setCar(carFetch)
                }
            }
        }
    }


    async function addToCompare(id) {
        const res = await fetch('/api/favorite/compare/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.ok) {
            if (res.ok) {
                const resCurrentCar = await fetch('/api/car/' + id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                if (resCurrentCar.ok) {
                    const carFetch = await resCurrentCar.json()
                    setCar(carFetch)
                }
            }
        }
    }

    async function deleteToCompare(id) {
        const res = await fetch('/api/favorite/compare/del/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.ok) {
            const resCurrentCar = await fetch('/api/car/' + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (resCurrentCar.ok) {
                const carFetch = await resCurrentCar.json()
                setCar(carFetch)
            }
        }
    }

    return (
        <>
            <div className="background" id="mobile">
                {car !== null ?
                    <>
                        <div className="row" id="rowHeader" style={{ width: '100%', height: 'auto' }}>
                            <div className="imgMobile">
                                <img
                                    src={`${car.img[0]}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${car.img[0]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={car.img[0]}
                                    loading="lazy"
                                    decoding='async'
                                    style={{ display: 'flex', width: '100%', height: '100%' }}
                                />
                            </div>
                            {/* <SwiperImg img={car.img} /> */}

                            <ImageList sx={{ width: '100%', height: '100%', gridTemplateColumns: { xl: 'repeat(8, 1fr)', lg: 'repeat(8, 1fr)', md: 'repeat(8, 1fr)', sm: 'repeat(6, 1fr)', xs: 'repeat(4, 1fr)' } }} cols={8} rowHeight={'auto'}>
                                {car.img.map((item) => (
                                    <ImageListItem key={item}
                                        sx={{ cursor: 'zoom-in' }}
                                    >
                                        <img
                                            src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item}
                                            loading="lazy"
                                            onClick={() => showModalImgFunction(item)}
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                            {/* </div> */}
                        </div>
                        <div className="backgroundDesc" style={{ display: 'flex', width: '100%', height: 'auto', justifyContent: 'center' }}>
                            <div className="desc" style={{
                                display: 'flex', width: '100%', height: 'auto',
                                flexDirection: 'column', alignItems: 'start', marginTop: '50px',
                                paddingBottom:'20px',paddingTop:'20px'
                        
                            }}>
                                <div className="columnDesc" style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column', alignItems: 'start', padding: '5px' }}>
                                    <div className="name">{car.CarModel.brandName} {car.CarModel.modelName} {car.CarComplectation.name}</div>
                                    <div className="rowColumn" style={{ display: 'flex', marginTop: '10px', justifyContent: 'space-between', alignItems: 'baseline', flexDirection: 'column' }} >
                                        <span><Circle sx={{ color: 'green', fontSize: '12px' }} />  В наличии</span>
                                        <span style={{ color: '#7b7979' }}>{car.DealerModel.name} <RoomIcon sx={{ fontSize: '15px' }} /></span>
                                        <a style={{ color: '#0c54a0', textDecoration: 'none' }} href={`tel:${car.DealerModel.phone}`}>{car.DealerModel.phone}</a>
                                    </div>

                                    <div className="rowIcon" style={{ gap: 15, marginTop: '50px', justifyContent: 'start' }}>
                                        <div className="Icon" style={{
                                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                                            borderRadius: '7px', width: '60px', height: '60px', border: '1px solid #a19f9f', cursor: 'pointer'
                                        }}>
                                            {car.FavoriteCarsToCar.length <= 0 &&
                                                <FavoriteIcon
                                                    onClick={() => addToFavorite(car.id)}
                                                    sx={{ '&:hover': { color: 'red' }, fontSize: '30px', color: '#a19f9f' }} />
                                            }
                                            {car.FavoriteCarsToCar.length > 0 &&
                                                <FavoriteIcon
                                                    onClick={() => deleteToFavorite(car.id)}
                                                    sx={{ color: 'red', fontSize: '30px' }} />
                                            }
                                        </div>
                                        <div className="Icon" style={{
                                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                                            borderRadius: '7px', width: '60px', height: '60px', border: '1px solid #a19f9f', cursor: 'pointer'
                                        }}>
                                            {car.CompareCarsToCar.length <= 0 &&
                                                <AddRoadIcon
                                                    onClick={() => addToCompare(car.id)}
                                                    sx={{ '&:hover': { color: 'green' }, fontSize: '30px', color: '#a19f9f' }} />
                                            }
                                            {car.CompareCarsToCar.length > 0 &&
                                                <AddRoadIcon
                                                    onClick={() => deleteToCompare(car.id)}
                                                    sx={{ color: 'green', fontSize: '30px' }} />
                                            }
                                        </div>
                                        <div id="tradeIn">
                                            <Link href={'/catalog/tradein'}>
                                                <button className="btnTradeIn"> Записаться на оценку
                                                    <AutorenewIcon sx={{ '&:hover  ': { color: 'green' }, fontSize: '30px', color: '#a19f9f' }} />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="columnDesc" style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column', padding: '5px' }}>
                                    <div className="rowColumn" style={{ marginTop: '20px', flexDirection: 'column', alignItems: 'start', gap: '10px' }}>
                                        <div className="name">{numberWithSpaces(Number(car.price))}  ₽</div>
                                        <div className="btnName">
                                            <Button variant="contained"
                                                sx={{ backgroundColor: '#005baa', fontWeight: 'bold', height: '50px', width: '100%' }}
                                                onClick={showModalFunction}
                                            >Купить онлайн</Button>
                                        </div>
                                    </div>
                                    <div className="rowColumn" style={{ marginTop: '20px', flexDirection: 'column', alignItems: 'start', gap: '10px' }}>
                                        <div className="name" style={{ fontSize: '15px', color: '#2e2d2d', fontWeight: 'bold' }}>от {numberWithSpaces(Math.round(Number(car.priceMonth)))}  ₽/месяц</div>
                                        <div className="btnName">
                                            <Button variant="outlined"
                                                sx={{ fontWeight: 'bold', height: '50px', width: '100%' }}
                                                onClick={
                                                    (e) => {
                                                        e.preventDefault()
                                                        refCredit.current.scrollIntoView({
                                                            behavior: 'smooth',
                                                            block: 'center',
                                                            inline: 'center'
                                                        })
                                                    }
                                                }
                                            >Рассчитать</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="backgroundDescMore" style={{ display: 'flex', width: '100%', height: 'auto', justifyContent: 'center', backgroundColor: '' }}>
                        </div>
                        <div>

                        </div>

                    </>
                    : <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', widht: '100%', height: "300px" }}>
                        <CircularProgress />
                    </Box>
                }
            </div>
            <style jsx>{`
                .background {
                    display:flex; 
                    width: 100%;
                    height:auto;
                    flex-direction: column;
                    align-items: start;
                    margin-top: 20px;

                }

                .headerPhoto {
                    background-color:black;
                    background-position: center center;
                    background-repeat: no-repeat;
                    object-fit: cover;
                    width: 100%;
                    height:auto;
                }

                .row{
                    display: flex;
                    width: 100%;
                    height: 500px;
                    overflow: hidden;
                }

                .column{
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                    height: 100% ;
                    justify-content: center;
                    align-items: center;
                    padding-left:50px;
                }

                #tradeIn { 
                    display: flex; 
                    justify-content: center; 
                    align-items: center; 
                    border-radius: 7px; 
                    width: 250px;  
                    height: 60px; 
                    border: 1px solid #a19f9f; 
                    cursor: pointer;
                }

                .btnTradeIn{
                    display: flex;
                    justify-content: center; 
                    align-items: center;
                    text-align:center;
                    width:100%;
                    height:100%;
                    background-color: transparent;
                    border:none;
                    border-radius: 5px;
                    font-size: 14px;
                    font-weight: bold;
                    font-family: 'Roboto','sans-serif'; 
                }

                #tradeIn:hover {
                    background-color: #005baa;
                    transition: 0.7s;
                }

                #tradeIn:hover .btnTradeIn {
                    color:white;
                    border:none;
                    transition:  0.7s;
                }

                .rowColumn{
                    display: flex;
                    width: 100%;
                    margin-top:10px;
                }

              
                .rowIcon {
                    display: flex;
                    width: 100%;
                    margin-top:10px;
                }

                .name {
                    font-size: 30px;
                    font-weight: bold;
                    display: flex;
                    flex-wrap: wrap;
                }

                .btnName {
                    display: flex;
                    width: auto;
                    height: auto;
                }

                #mobile{
                      display:none
                }

                .imgMobile {
                    display: none;
                    flex-direction: column;
                    width: 100%;
                    height: auto;
                }

                @media (max-width: 1000px) {
                   #mobile{
                      display:flex;
                    }
                }

                @media (max-width: 900px) {
                    .btnName{
                      width:300px;
                    }
                }

                @media (max-width: 780px) {
                    .rowIcon {
                        display:none;
                    }
                    .imgMobile  {
                        display: flex;
                    }
                    #rowHeader{
                        flex-direction: column;
                    }
                }
          
                @media (max-width: 360px) {
                    .btnName{
                      width:250px;
                    }
                    .name {
                        font-size:25px; 
                    }
                }

            `}</style>
        </>



    )

}


