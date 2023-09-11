
// import styles from "./Menu.module.css";

import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { Dispatch, SetStateAction, useRef } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import RoomIcon from '@mui/icons-material/Room';
import { driverTypeStr, logoFind, numberWithSpaces } from "./actual/allNewCarPage/servicesNewCar/service";
import { LogoList } from "./actual/allNewCarPage/type/typeNewCar";
import { AllCarDto } from "../../@types/dto";
import Link from 'next/link';

type ModelProps = {
    showModalFavorite: boolean,
    setShowModalFavorite: Dispatch<SetStateAction<boolean>>,
    cars: AllCarDto,

}

export function ModalFavorite({ showModalFavorite, setShowModalFavorite, cars }: ModelProps) {



    useEffect(() => {
        async function start() {
            const res = await fetch('/api/favorite/getAll', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (res.ok) {
                const allFavoriteCars = await res.json()
            }
        }
        start()
    }, [showModalFavorite])



    const [closeStarting, setCloseStarting] = useState(false)
    function closeModal() {
        setCloseStarting(true)
        setTimeout(() => {
            setShowModalFavorite(false)
            setCloseStarting(false)
        }, 500)
    }

    const backgroundEl = useRef(null)
    const className = [
        'modalBackground',
        showModalFavorite ? 'modalBackground_show' : '',
        closeStarting ? 'modalBackground_close-starting' : '',
    ]
    return <>
        <div className={className.join(' ')} id="modalBackground" ref={backgroundEl} onClick={(event) => {
            if (event.target === backgroundEl.current) closeModal()
        }}>
            <div className="modalWindow" id="modalWindow">
                <div className='icon'>
                    <CloseIcon sx={{
                        cursor: 'pointer',
                        '&:hover': { color: 'red' }
                    }}
                        onClick={() => { closeModal() }}
                    />
                </div>
                <div className='background'>
                    <div className='cards' id="desktop">
                        {cars.map(car =>
                            <Card
                                key={car.id}
                                sx={{
                                    width: 345, height: 500, display: 'flex', border: '1px  solid transparent',
                                    flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear',
                                    '&:hover': { transform: 'scale(1.04)', border: '1px solid black' },
                                    '&:hover .credit': {
                                        display: 'flex',
                                        transition: '1s',
                                        animation: 'credit-open.5s',
                                        marginTop: '400px',
                                        backgroundColor: '#0c7ee1',
                                        position: 'absolute'
                                    }
                                }} >
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{}} aria-label="recipe"
                                            src={logoFind(LogoList, car.CarModel.brandName)}>

                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={car.CarModel.brandName}
                                    subheader={car.CarModel.modelName}
                                />
                                {/* 
                                <Link href={{
                                    pathname: '/catalog/car/[id]',
                                    query: { id: car.id }
                                }}>
                                   */}
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={car.img[0]}
                                    sx={{
                                        cursor: 'pointer',
                                    }}

                                    alt="car"
                                />
                                {/* </Link> */}
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {car.CarModification.name} / {driverTypeStr(car.CarModification.driveType)}
                                        <div className='price'><h3>{numberWithSpaces(Number(car.price))} ₽</h3></div>
                                        <div className='priceMonth'>
                                            <button className="btn">от {numberWithSpaces(Math.round(Number(car.priceMonth)))} ₽/мес</button>
                                        </div>
                                        <div className='office'>
                                            <span>{car.DealerModel.name}</span>    <RoomIcon />
                                        </div>
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon sx={{ '&:hover': { color: 'red' } }}
                                        // onClick={() => addToFavorite(car.id)}
                                        />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <AddRoadIcon sx={{ '&:hover': { color: 'green' } }} />
                                    </IconButton>
                                    {/* <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore> */}
                                </CardActions>
                                {/* <button className="credit" onClick={() => showModal}>
                <span className="consultation" >Получить консультацию</span>
              </button> */}
                            </Card>
                        )}
                    </div>

                    <div className='cards' id="mob">
                        {cars.map(car =>
                            <Card
                                key={car.id} 
                                sx={{
                                    width: '90%', height: 490, display: 'flex', border: '1px  solid transparent',
                                    flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear',
                                    '&:hover': { transform: 'scale(1.04)', border: '1px solid black' },
                                }} >
                                <CardHeader
                                    sx={{ display: 'flex', height: '50px', dispaly: 'flex', alignItems: 'center' }}
                                    avatar={
                                        <Avatar sx={{}} aria-label="recipe"
                                            src={logoFind(LogoList, car.CarModel.brandName)}>
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings" sx={{
                                            marginTop: '-10px',
                                            marginRight: '-5px'
                                        }}>
                                            <IconButton aria-label="add to favorites">
                                                <FavoriteIcon sx={{ '&:hover': { color: ' #131313' } }} />
                                            </IconButton>
                                        </IconButton>
                                    }
                                    title={car.CarModel.brandName}
                                    subheader={car.CarModel.modelName}
                                />
                                 
                                <Link href={{
                                    pathname: '/catalog/car/[id]',
                                    query: { id: car.id }
                                }}>
                                    <CardMedia
                                        component="img"
                                        height="180px"
                                        image={car.img[0]}
                                        sx={{
                                            cursor: 'pointer',
                                            backgroundSize: 'contain'
                                        }}

                                        alt="car"
                                    />
                                </Link>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {car.CarModification.name} / {driverTypeStr(car.CarModification.driveType)}
                                        <div className='price'><h3>{numberWithSpaces(Number(car.price))} ₽</h3></div>
                                        <div className='priceMonth'>
                                            <button className="btn">от {numberWithSpaces(Math.round(Number(car.priceMonth)))} ₽/мес</button>
                                        </div>
                                        <div className='office'>
                                            <span>{car.DealerModel.name}</span>    <RoomIcon />
                                        </div>
                                    </Typography>
                                </CardContent>
                                <div style={{ display: "flex", width: '100%', height: '45px', justifyContent: 'center', padding: '6px' }}>
                                    <Button variant="contained"
                                        sx={{ textAlign: 'center', fontSize: '12px', width: '95%', }}
                                    //   onClick={e=>showModal}
                                    >Получить консультацию</Button>
                                </div>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{`
            @keyframes modalBackground-open {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }

            @keyframes modalBackground-close {
                from {
                    opacity: 1;
                }
                to {
                    opacity: 0;
                }
            }

            @keyframes credit-open {
                0% {
                    opacity: 0;
                    margin-top:-100%;
                }

                50% {
                    opacity: 0.5;
                }

                60% {
                    opacity: 0.8;
                }
                80% {
                    opacity: 0.9;
                }
                
                100% {
                    opacity: 1;
                }
            }

            .icon {
                display:flex;
                width: 100%;
                justify-content:start;
                background-color: #f5f2f261;
            }
        
            .background {
              display:flex;
              width: 100%;
              height: 110vh;
              padding: 20px;
              justify-content: center;
              overflow: auto;
              background-color: #f5f2f261;
            }
            
            .cards {
              display: flex;
              justify-content: center;
              gap:40px;
              width: 100%;
              flex-direction: row;
              flex-wrap: wrap;
            }
        
            .price {
              font-size: 18px;
              line-height: 18px;
              display: flex;
              align-items: center;
              font-weight: 400;
              letter-spacing: normal;
              font-family: 'Roboto',sans-serif;
              color:black;
            }
        
            .priceMonth {
              display: flex;
              justify-content: start;
              width: 80%;
              height: 35px;
        
            }
        
            .btn {
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
              padding:1px;
              width:80%;
              height: 100%;
              border:solid 1px  #131313;
              color: #131313;
              background-color: transparent;
              border-radius: 3px;
              font-size: 15px;
              font-weight: bold;
              transition: 0.6s;
            }
        
            .btn:hover {
              background-color: #131313; 
              color:white;
              transform: scale(0.99);
        
            }
        
            ul {
              list-style: none;
            }
        
            .office{
              display: flex;
              justify-content: start;
              margin-top: 10px;
              font-size: 12px;
              align-items: center;
            }
        
        
            .credit {
              display: none;
              justify-content: center;
              text-align: center;
              align-items: center;
              width: 100%;
              height: 50px;
              transition: 1.2s;
              margin-top:-10em;
              cursor: pointer;
              border:none;
              color:white;
              font-size:16px;
              text-align: center;
            }
        
            .credit:hover {
              background-color:#0088ff;
            }
        
 
            #mob{
              display: none;
              gap:10px;
              flex-direction: column;
              align-items: center;
              justify-content: start;
              flex-wrap: nowrap;
              flex-wrap: nowrap;
              overflow: hidden;
              position: fixed;
            }
        
            .row {
              display:flex;
              flex-direction: row;
            }
        
            .column {
              display:flex;
              flex-direction: column;
              height: auto;
            }
        
            #priceModbile{
              font-size: 17px;
              height: 30px;
              margin-top:15px;
              font-weight: bold;
              width: 100%;
            }
        
            #priceMonth {
              width: 100%;
              height: auto;
              font-weight: bold;
              margin-top:20px;
            }
        
            .disable-scroll {
                overflow: hidden;
            }

            .modalBackground{
                display: none;
                position: fixed;
                justify-content: center;
                top: 0;
                right: 0;
                left: 0;
                height: 100vh;
                background-color: rgb(0,0,0, 0.5);
                align-items: center;
            }

            .modalBackground_show {
                animation:modalBackground-open.5s ;
                display: flex;
            }

            .modalBackground_close-starting {
                animation:modalBackground-close.5s ;
            }

            .modalWindow {
                height: 700px;
                width: 700px;
                background-position: center center;
                background-repeat: no-repeat;
                overflow: hidden;
                background-size:contain;
            }

            @media(max-width: 1100px) {
                .modalWindow {
                    height: 600px;
                    width: 800px;
                }
            }
        
            @media(max-width: 640px) {

           
              #desktop{
                display: none;
              }

              #mob{
                display: none;
              } 

              .btn {
                height: 30px;
                font-size: 12px;
              }
        
              .office{
                font-size: 9px;
              }
              .background{
                height: auto;
              }
            }
        
            @media(max-width: 600px) {
                .modalWindow {
                    height: 600px;
                    width: 500px;
                }
            }
        
            @media(max-width: 400px) {
                .btn {
                  width: 90%
                }
                h3{
                  font-weight: 300;
                }
            }

            @media(max-width: 360px) {
                .modalWindow {
                    height: 200px;
                    width: 100%;
                }
            }
                    
            `}</style></>
}
