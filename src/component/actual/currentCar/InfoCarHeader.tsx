import { Circle } from "@mui/icons-material";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { CarDto } from "../../../../@types/dto";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button, CardMedia } from "@mui/material";

import RoomIcon from '@mui/icons-material/Room';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import AutorenewIcon from '@mui/icons-material/Autorenew';

type Props = {
    car: CarDto,
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>,
    setCarImg: Dispatch<SetStateAction<string>>
}


export function InfoCarHeader({ car, showModal, setShowModal, setCarImg }: Props) {

    // const router = useRouter()
    // const [car, setCar] = useState<CarDto>(null) // TODO: написать тип ДТО {}
    // const { id } = router.query
    // useEffect(() => {
    //     async function start() {
    //         const res = await fetch('/api/car/' + router.query.id, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //         })
    //         if (res.ok) {
    //             const carFetch = await res.json()
    //             console.log(carFetch);
    //             setCar(carFetch)
    //         }
    //     }
    //     if (router.isReady) {
    //         start()
    //         console.log('start');

    //     }
    // }, [router.isReady]);


    // const carPhoto = useMemo(() => {
    //     if(car !== null)
    //    return car.img[0]
    // }, [car])



    function showModalImg(x) {
        setShowModal(true)
        setCarImg(x)
    }

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <>
            <div className="background" id ="desktop">
                {car !== null ?
                    <>
                        <div className="row" style={{ width: '100%', height: 'auto' }}>
                            {/* <div style={{
                                flexDirection: 'column', width: '50%',
                                overflow: 'hidden'
                            }}>

                                <ImageList sx={{ width: '80%', height: 'auto' }} cols={1} rowHeight={'auto'}>
                                <ImageListItem key={1} >
                                    <img
                                        src={`${car.img[0]}`}
                                        alt={car.img[0]}
                                        loading="lazy"
                                        className="headerPhoto"
                                        style={{ objectFit: 'fill' }}
                                    />
                                      </ImageListItem>
                                              </ImageList>
                                    {/* <div className="headerPhoto" style={{backgroundImage: `${url(car.img[0])}` }}></div> 
                            </div>

                             <div style={{ flexDirection: 'column', width: '50%' }}> */}


                            <ImageList sx={{ width: '100%', height: '100%' }} cols={8} rowHeight={'auto'}>
                                {car.img.map((item) => (
                                    <ImageListItem key={item}
                                        sx={{ cursor: 'zoom-in' }}
                                    >
                                        <img
                                            src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item}
                                            loading="lazy"
                                            onClick={() => showModalImg(item)}
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                            {/* </div> */}
                        </div>
                        <div className="backgroundDesc" style={{ display: 'flex', width: '100%', height: 'auto', justifyContent: 'center' }}>
                            <div className="desc" style={{
                                display: 'flex', width: '1000px', height: '300px', gap: '80px',
                                flexDirection: 'row', alignItems: 'start', marginTop: '50px',
                            }}>
                                <div className="columnDesc" style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column', padding: '5px' }}>
                                    <div className="name">{car.CarModel.brandName} {car.CarModel.modelName} {car.CarComplectation.name}</div>
                                    <div className="rowColumn" style={{ display: 'flex', marginTop: '10px', justifyContent: 'space-between', alignItems: 'baseline' }} >
                                        <Circle sx={{ color: 'green', fontSize: '12px' }} />
                                        <span>В наличии</span>
                                        <Circle sx={{ color: '#0076dd', fontSize: '4px' }} />
                                        <span style={{ color: '#7b7979' }}>{car.DealerModel.name} <RoomIcon sx={{ fontSize: '15px' }} /></span>
                                        <Circle sx={{ color: '#0076dd', fontSize: '4px' }} />
                                        <a href={`tel:${car.DealerModel.phone}`}>{car.DealerModel.phone}</a>
                                    </div>
                                    <div className="rowColumn" style={{ gap: 15, marginTop: '50px' }}>
                                        <div className="Icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '7px', width: '60px', height: '60px', border: '1px solid #a19f9f' }}>
                                            <FavoriteIcon sx={{ '&:hover': { color: 'red' }, fontSize: '30px', color: '#a19f9f' }} />
                                        </div>
                                        <div className="Icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '7px', width: '60px', height: '60px', border: '1px solid #a19f9f' }}>
                                            <AddRoadIcon sx={{ '&:hover': { color: 'green' }, fontSize: '30px', color: '#a19f9f' }} />
                                        </div>
                                        <div id="tradeIn">
                                            <button className="btnTradeIn"> Записаться на оценку
                                                <AutorenewIcon sx={{ '&:hover  ': { color: 'green' }, fontSize: '30px', color: '#a19f9f' }} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="columnDesc" style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column', padding: '5px' }}>
                                    <div className="rowColumn" style={{ gap: 30, marginTop: '20px' }}>
                                        <div className="name">{numberWithSpaces(Number(car.price))}  ₽</div>
                                        <div className="btnName">
                                            <Button variant="contained" sx={{ backgroundColor: '#005baa', fontWeight: 'bold', height: '50px' }}>Купить онлайн</Button>
                                        </div>
                                    </div>
                                    <div className="rowColumn" style={{ gap: 30, marginTop: '50px' }}>
                                        <div className="name" style={{ fontSize: '18px', color: '#2e2d2d', fontWeight: 'bold' }}>от {numberWithSpaces(Math.round(Number(car.priceMonth)))}  ₽/месяц</div>
                                        <div className="btnName">
                                            <Button variant="outlined" sx={{ fontWeight: 'bold', height: '50px' }}>Рассчитать кредит</Button>
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
                    : <Circle />
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
                }

                .btnTradeIn:hover  {
                    background-color: #005baa;
                    color:white;
                    border:none;
                }

               
                .rowColumn{
                    display: flex;
                    width: 100%;
                    margin-top:10px;
                }

                .name {
                    font-size: 30px;
                    font-weight: bold;
                }

                .btnName {
                    display: flex;
                    width: auto;
                    height: auto;
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


