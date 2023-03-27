import { Circle } from "@mui/icons-material";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Button, CircularProgress, Link } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { UsedCars } from "@prisma/client";
import { CarUsedInclude } from "../../../../@types/dto";

type Props = {
    car: CarUsedInclude,
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>,
    setCarImg: Dispatch<SetStateAction<string>>,
    setCar: Dispatch<SetStateAction<CarUsedInclude>>,
    refCredit: MutableRefObject<HTMLDivElement>,
    showModalImg: boolean,
    setShowModalImg: Dispatch<SetStateAction<boolean>>,
}


export function InfoCarHeaderUsed({ car, showModal, setShowModal, setCar, setShowModalImg, setCarImg, refCredit }: Props) {

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
        const res = await fetch('/api/usedfavorite/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.ok) {
            const resCurrentCar = await fetch('/api/usedcar/' + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (resCurrentCar.ok) {
                const carFetch = await resCurrentCar.json()
                console.log(carFetch);
                setCar(carFetch)
            }
        }
    }


    async function deleteToFavorite(id) {
        const res = await fetch('/api/usedfavorite/del/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.ok) {
            const resCurrentCar = await fetch('/api/usedcar/' + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (resCurrentCar.ok) {
                const carFetch = await resCurrentCar.json()
                console.log(carFetch);
                setCar(carFetch)
            }

        }
    }




    async function addToCompare(id) {
        const res = await fetch('/api/usedcompare/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.ok) {
            const resCurrentCar = await fetch('/api/usedcar/' + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (resCurrentCar.ok) {
                const carFetch = await resCurrentCar.json()
                console.log(carFetch);
                setCar(carFetch)
            }


        }
    }

    async function deleteToCompare(id) {
        const res = await fetch('/api/usedcompare/del/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.ok) {
            const resCurrentCar = await fetch('/api/usedcar/' + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (resCurrentCar.ok) {
                const carFetch = await resCurrentCar.json()
                console.log(carFetch);
                setCar(carFetch)
            }

        }
    }



    return (
        <>
            <div className="background" id="desktop">
                {car !== null ?
                    <>
                        <div className="row" style={{ width: '100%', height: 'auto' }}>
                            <Box sx={{ display: 'flex', width: '100%', height: '650px', justifyContent: 'center' }}>
                                {car.picture.map((item) => (
                                    <img
                                        width={1000}
                                        src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item}
                                        loading="lazy"
                                        decoding='async'
                                        onClick={() => showModalImgFunction(item)}
                                        style={{ borderRadius: '7px' }}
                                    />
                                ))}
                            </Box>
                        </div>
                        <div className="backgroundDesc" style={{ display: 'flex', width: '100%', height: 'auto', justifyContent: 'center' }}>
                            <div className="desc" style={{
                                display: 'flex', width: '1000px', height: '300px', gap: '80px',
                                flexDirection: 'row', alignItems: 'start', marginTop: '50px',
                            }}>
                                <div className="columnDesc" style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column', padding: '5px' }}>
                                    <div className="name">{car.vendor} {car.modelShortName}</div>
                                    <div className="rowColumn" style={{ display: 'flex', marginTop: '10px', justifyContent: 'space-between', alignItems: 'baseline' }} >
                                        <Circle sx={{ color: 'green', fontSize: '12px' }} />
                                        <span>В наличии</span>
                                        {/* <Circle sx={{ color: '#0076dd', fontSize: '4px' }} />
                                        <span style={{ color: '#7b7979' }}>{car.DealerModel.name} <RoomIcon sx={{ fontSize: '15px' }} /></span>
                                        <Circle sx={{ color: '#0076dd', fontSize: '4px' }} />
                                        <a href={`tel:${car.DealerModel.phone}`}>{car.DealerModel.phone}</a> */}
                                    </div>
                                    <div className="rowColumn" style={{ gap: 15, marginTop: '50px' }}>
                                        <div className="Icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '7px', width: '60px', height: '60px', border: '1px solid #a19f9f' }}>
                                            {car.FavoriteUsedCarsToCar.length <= 0 &&
                                                <FavoriteIcon
                                                    onClick={() => addToFavorite(car.id)}
                                                    sx={{ '&:hover': { color: 'red' }, fontSize: '30px', color: '#a19f9f' }} />
                                            }
                                            {car.FavoriteUsedCarsToCar.length > 0 &&
                                                <FavoriteIcon
                                                    onClick={() => deleteToFavorite(car.id)}
                                                    sx={{ color: 'red', fontSize: '30px' }} />
                                            }
                                        </div>
                                        <div className="Icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '7px', width: '60px', height: '60px', border: '1px solid #a19f9f' }}>
                                            {car.CompareUsedCarsToCar.length <= 0 &&
                                                <AddRoadIcon
                                                    onClick={() => addToCompare(car.id)}
                                                    sx={{ '&:hover': { color: 'green' }, fontSize: '30px', color: '#a19f9f' }} />
                                            }
                                            {car.CompareUsedCarsToCar.length > 0 &&
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
                                    <div className="rowColumn" style={{ gap: 30, marginTop: '20px' }}>
                                        <div className="name">{numberWithSpaces(Number(car.price))}  ₽</div>
                                        <div className="btnName">
                                            <Button variant="contained"
                                                sx={{ backgroundColor: '#005baa', fontWeight: 'bold', height: '50px' }}
                                                onClick={showModalFunction}
                                            >Купить онлайн</Button>
                                        </div>
                                    </div>
                                    <div className="rowColumn" style={{ gap: 30, marginTop: '50px' }}>
                                        <div className="name" style={{ fontSize: '18px', color: '#2e2d2d', fontWeight: 'bold' }}>от {numberWithSpaces(Math.round(Number(car.price) / 150))}  ₽/месяц</div>
                                        <div className="btnName">
                                            <Button variant="outlined"
                                                sx={{ fontWeight: 'bold', height: '50px' }}
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


