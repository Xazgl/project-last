import { Circle } from "@mui/icons-material";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CarDto } from "../../../../@types/dto";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button, CardMedia } from "@mui/material";

import RoomIcon from '@mui/icons-material/Room';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import AutorenewIcon from '@mui/icons-material/Autorenew';

type Props = {
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>,
    setCarImg: Dispatch<SetStateAction<string>>
}



export function InfoCar({ showModal, setShowModal, setCarImg }: Props) {

    const router = useRouter()
    const [car, setCar] = useState<CarDto>(null) // TODO: написать тип ДТО {}

    const { id } = router.query


    useEffect(() => {
        async function start() {
            const res = await fetch('/api/car/' + router.query.id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (res.ok) {
                const carFetch = await res.json()
                console.log(carFetch);
                setCar(carFetch)
            }
        }
        if (router.isReady) {
            start()
            console.log('start');

        }
    }, [router.isReady]);



    function showModalImg(x) {
        setShowModal(true)
        setCarImg(x)
    }

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <>
            <div className="background">
                {car !== null ?
                    <>
                        <div className="row">
                            <ImageList sx={{ width: '100%', height: '800px' }} cols={4} rowHeight={'auto'}>
                                {car.img.map((item) => (
                                    <ImageListItem key={item}
                                        sx={{ cursor: 'pointer' }}
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
                        </div>
                        {/* <div className="rowColumn">
                            <div className="column" id="text">
                                <div className="rowColumn">
                                    <div className="name">{car.CarModel.brandName} {car.CarModel.modelName} {car.CarComplectation.name}
                                    </div>
                                </div>
                                <div className="rowColumn">
                                    <div className="desc">
                                        <Circle sx={{ color: 'green' }} />
                                        <span>В наличии</span>
                                        <span>{car.DealerModel.name} <RoomIcon sx={{ fontSize: '15px' }} /></span>
                                        <a href={`tel:${car.DealerModel.phone}`}>{car.DealerModel.phone}</a>

                                    </div>
                                </div>
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
                                <div className="rowColumn" style={{ gap: 15, marginTop: '50px' }}>
                                    <FavoriteIcon sx={{ '&:hover': { color: 'red' }, fontSize: '35px' }} />
                                    <AddRoadIcon sx={{ '&:hover': { color: 'green' }, fontSize: '35px' }} />
                                </div>
                            </div>
                        </div> */}
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
                                        <div className="Icon" id="tradeIn" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '7px', width: '250px', height: '60px', border: '1px solid #a19f9f' }}>
                                            <span>Записаться на оценку</span>
                                            <AutorenewIcon  sx={{ '&:hover  ': { color: 'green' }, fontSize: '30px', color: '#a19f9f' }} />
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

                {/* .desc{
                    display:flex;
                    gap:30px;
                    color: #7b7979;
                    font-size: 18px;
                } */}
            </div>
            <style jsx>{`
                .background {
                    display:flex; 
                    width: 100%;
                    height:auto;
                    flex-direction: column;
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

                #text {
                   justify-content: center;
                   align-items: center;
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


            `}</style>
        </>



    )

}


