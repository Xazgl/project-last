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
import Image from 'next/image';
import { SwiperImg } from "./slider/SwiperImg";

type Props = {
    car: CarDto,
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>,
    setCarImg: Dispatch<SetStateAction<string[]>>,
    setCar: Dispatch<SetStateAction<CarDto>>,
    refCredit: MutableRefObject<HTMLDivElement>,
    showModalImg: boolean,
    setShowModalImg: Dispatch<SetStateAction<boolean>>,
    setCarStepImg: (Dispatch<SetStateAction<string>>)
}


export function InfoCarHeader({ car, setCar, showModal, setShowModal, showModalImg, setShowModalImg, setCarStepImg, setCarImg, refCredit }: Props) {


    function showModalImgFunction(item) {
        setShowModalImg(true)
        // setCarImg(car.img)
        setCarStepImg(item)
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


    const [imgLength, setImgLength] = useState(0)
    const [colImg, setColImg] = useState(4)
    const [imgHeight, setImgHeight] = useState(450)

    useEffect(() => {
        async function howCols() {
            setImgLength(car.img.length)
            if (imgLength >= 10) {
                setColImg(8)
                setImgHeight(350)
            } else if (5 < imgLength && imgLength <= 8) {
                setColImg(4)
                setImgHeight(450)
            } else if (1 < imgLength && imgLength <= 5) {
                setColImg(5)
                setImgHeight(450)
            } else if (imgLength === 1) {
                setColImg(1)
                setImgHeight(600)
            } else {
                setColImg(8)
            }
        }
        if (car !== null) {
            howCols()
            // console.log(colImg)
        }
    }, [])


    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };


    return (
        <>
            <div className="background" id="desktop">
                {car !== null ?
                    <>
                        <SwiperImg
                            img={car.img}
                            setShowModalImg={setShowModalImg}
                            setCarStepImg={setCarStepImg}
                            showModalImg={showModalImg}
                        />

                        {/* <div className="row" style={{ width: '100%', height: '100%' }}>
                            
                            <ImageList sx={{width: '100%', height: `${imgHeight}px`,}}
                                cols={colImg} rowHeight={'auto'}>
                                {car.img.map((item) => (
                                    <ImageListItem key={item} sx={{ cursor: 'zoom-in', zIndex: '1' }} >
                                         */}
                        {/* <img
                                            src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item}
                                            loading="lazy"
                                            decoding='async'
                                            onClick={() => showModalImgFunction(item)}
                                        /> */}

                        {/* <>
                                            {isLoading && (
                                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                                                    <CircularProgress />
                                                </div>
                                            )}
                                            <Image
                                                src={item}
                                                alt={item}
                                                layout="fill"
                                                sizes="(max-width: 300px) 50vw,
                                                  (max-width: 828px) 40vw,
                                                  (max-width: 1080px) 33vw,
                                                  20vw"
                                                loading="lazy"
                                                onClick={() => showModalImgFunction(item)}
                                                onLoad={handleImageLoad}
                                            />
                                        </> 
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </div>  */}

                        <div className="backgroundDesc" style={{ display: 'flex', width: '100%', height: 'auto', justifyContent: 'start' }}>
                            <div className="desc" style={{
                                display: 'flex', width: '1000px', height: '300px', gap: '80px',
                                flexDirection: 'row', alignItems: 'start', marginTop: '50px',
                            }}>
                                <div className="columnDesc" style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column', padding: '5px' }}>
                                    <div className="name">{car.CarModel.brandName} {car.CarModel.modelName} {car.CarComplectation.name}</div>
                                    <div className="rowColumn"
                                        style={{
                                            display: 'flex', marginTop: '10px', gap: '10px',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Circle sx={{ color: 'green', fontSize: '12px' }} />
                                        <span>В наличии</span>
                                        <Circle sx={{ color: ' #131313 ', fontSize: '4px' }} />
                                        <span style={{ color: '#7b7979' }}>{car.DealerModel.name} <RoomIcon sx={{ fontSize: '15px' }} /></span>
                                        {/* <Circle sx={{ color: '0c54a0 ', fontSize: '4px' }} /> */}

                                        {/* <a style={{ color: ' #131313', textDecoration: 'none' }} href={`tel:${car.DealerModel.phone}`}>{car.DealerModel.phone}</a> */}
                                    </div>
                                    <div className="rowColumn" style={{ display: 'flex', marginTop: '10px', justifyContent: 'start', alignItems: 'center' }} >
                                        <a style={{ color: ' #131313', textDecoration: 'none' }} href={`tel:${car.DealerModel.phone}`}>{car.DealerModel.phone}</a>

                                    </div>
                                    <div className="rowColumn" style={{ gap: 15, marginTop: '50px' }}>
                                        <div className="Icon" style={{
                                            display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '7px',
                                            width: '60px', height: '60px', border: '1px solid #a19f9f', cursor: 'pointer'
                                        }}>
                                            {car.FavoriteCarsToCar.length <= 0 &&
                                                <FavoriteIcon
                                                    onClick={() => addToFavorite(car.id)}
                                                    sx={{ '&:hover': { color: 'black', transition: '0.5s' }, fontSize: '30px', color: '#a19f9f' }} />
                                            }
                                            {car.FavoriteCarsToCar.length > 0 &&
                                                <FavoriteIcon
                                                    onClick={() => deleteToFavorite(car.id)}
                                                    sx={{ color: 'black', fontSize: '30px' }} />
                                            }
                                        </div>
                                        <div className="Icon" style={{
                                            display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '7px',
                                            width: '60px', height: '60px', border: '1px solid #a19f9f', cursor: 'pointer',
                                        }}>
                                            {car.CompareCarsToCar.length <= 0 &&
                                                <AddRoadIcon
                                                    onClick={() => addToCompare(car.id)}
                                                    sx={{ '&:hover': { color: 'green', transition: '0.5s' }, fontSize: '30px', color: '#a19f9f' }} />
                                            }
                                            {car.CompareCarsToCar.length > 0 &&
                                                <AddRoadIcon
                                                    onClick={() => deleteToCompare(car.id)}
                                                    sx={{ color: 'green', fontSize: '30px' }} />
                                            }
                                        </div>
                                        <div id="tradeIn">
                                            <Link sx={{ textDecoration: "none" }} href={'/catalog/tradein'}>
                                                <button className="btnTradeIn"> Записаться на оценку
                                                    <AutorenewIcon sx={{ '&:hover  ': { color: 'green' }, fontSize: '30px', color: '#a19f9f', cursor: 'pointer' }} />
                                                </button>
                                            </Link >
                                        </div>
                                    </div>
                                </div>
                                <div className="columnDesc" style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column', padding: '5px' }}>
                                    <div className="rowColumn" style={{ gap: 30, marginTop: '20px', alignItems: 'center' }}>
                                        <div className="name">{numberWithSpaces(Number(car.price))}  ₽</div>
                                        <div className="btnName">
                                            <Button variant="contained"
                                                sx={{
                                                    backgroundColor: ' #131313', fontWeight: 'bold', height: '50px',
                                                    cursor: 'pointer', borderRadius: '0px',
                                                    '&:hover': {
                                                        backgroundColor: "#D1AC02",
                                                        color: ' #131313',
                                                        border: '#D1AC02'

                                                    }
                                                }}
                                                onClick={showModalFunction}
                                            >Купить онлайн</Button>
                                        </div>
                                    </div>

                                    <div className="rowColumn" style={{ gap: 30, marginTop: '50px', alignItems: 'center' }}>
                                        <div className="name" style={{ fontSize: '18px', color: '#2e2d2d', fontWeight: 'bold' }}>от {numberWithSpaces(Math.round(Number(car.priceMonth)))}  ₽/месяц</div>
                                        <div className="btnName">
                                            <Button variant="outlined"
                                                sx={{
                                                    fontWeight: 'bold', height: '50px', cursor: 'pointer', borderRadius: '0px', border: 'solid 1px  #131313', color: ' #131313',
                                                    '&:hover': {
                                                        backgroundColor: "#D1AC02",
                                                        color: ' #131313',
                                                        border: 'solid 1px  #D1AC02'

                                                    }
                                                }}
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
                                            >Рассчитать кредит</Button>
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

                .Icon:hover {
                    background-color: #131313;
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
                    text-decoration: none;
                    font-family: 'Gilroy','sans-serif'; 
                    cursor: pointer;
                }

                #tradeIn:hover {
                    background-color:  #131313;
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

                .name {
                    font-size: 30px;
                    font-weight: bold;
                    font-family: 'Gilroy','sans-serif'; 
                }

                .btnName {
                    display: flex;
                    width: auto;
                    height: auto;
                    cursor: pointer;
                }

                @media (max-width: 1000px) {
                   #desktop{
                      display:none
                    }
                }



            `}</style>
        </>



    )

}


