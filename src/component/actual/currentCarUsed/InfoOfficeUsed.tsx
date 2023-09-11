import { Circle } from "@mui/icons-material";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CarDto } from "../../../../@types/dto";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Button, CardMedia, Checkbox, CircularProgress, FormControlLabel, FormGroup } from "@mui/material";

import RoomIcon from '@mui/icons-material/Room';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import { jsx } from "@emotion/react";

type Props = {
    car: CarDto,
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>,
    setCarImg: Dispatch<SetStateAction<string>>
}

type Office = {
    id: number,
    name: string,
    map: string
}

type OfficeArr = Office[]


const OfficeList: OfficeArr = [
    {
        id: 1,
        name: 'Chery',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 2,
        name: 'Chevrolet',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 3,
        name: 'Datsun',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 4,
        name: 'EXEED',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 5,
        name: 'FAW',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 6,
        name: 'Ford',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 7,
        name: 'Hisun',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 7,
        name: 'Hyundai',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 8,
        name: 'Jeep',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 9,
        name: 'Kia',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 10,
        name: 'Land Rover',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 11,
        name: 'Mitsubishi',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 12,
        name: 'Nissan',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 13,
        name: 'Renault',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 14,
        name: 'Subaru',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 15,
        name: 'Suzuki',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 16,
        name: 'AUC',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 17,
        name: 'Volkswagen',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 18,
        name: 'Opel',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 19,
        name: 'Jaguar',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    // {
    //     id: 20,
    //     name: 'LOVOL',
    //     img: `${lovol.src}`s
    // },
    {
        id: 21,
        name: 'Peugeot',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
    {
        id: 22,
        name: 'УАЗ',
        map: "https://yandex.ru/map-widget/v1/?um=constructor%3Aeb4240831e67244f171338e33f9abec27592451d805d48e6eea90f52161d3b14&amp;source=constructor"
    },
]


export function InfoOfficeUsed({ car, showModal, setShowModal, setCarImg }: Props) {

    const [map, setMap] = useState('')

    function showModalImg(x) {
        setShowModal(true)
        setCarImg(x)
    }


    useEffect(() => {
        if (car)
            setMap(OfficeList.find(brend => brend.name === car.CarModel.brandName)?.map)

    }, [car])

    return (
        <>
            <div className="background">
                {car !== null ?
                    <>
                        <div className="backgroundBlock">
                            <div className="title" style={{ justifyContent: 'start' }}>
                                <h1>АВТОМОБИЛЬ В НАЛИЧИ</h1>
                            </div>
                            <div className="row">
                                <div className="leftColumn">
                                    <h3>{car.DealerModel.name}</h3>
                                    <div className="rowColumn">
                                        <div className="icon"><LocationOnIcon sx={{ color: '#a19f9f' }} /></div>
                                        <div className="title">{car.DealerModel.address}</div>
                                    </div>
                                    <div className="rowColumn">
                                        <div className="icon"><AccessTimeIcon sx={{ color: '#a19f9f' }} /></div>
                                        <div className="title">Ежедневно 8:00 - 20:00</div>
                                    </div>
                                    <div className="rowColumn">
                                        <div className="icon"><PhoneIcon sx={{ color: '#a19f9f' }} /></div>
                                        <div className="title">{car.DealerModel.phone}</div>
                                    </div>
                                    <div className="rowColumn">
                                        <Button variant="outlined"
                                            sx={{
                                                width: '100%', height: '100%', border: 'solid 2px  #131313', fontWeight: 'bold',
                                                backgroundColor: ' #131313', color: 'white',
                                                '&:hover': {
                                                    backgroundColor: "white",
                                                    color: ' #131313'
                                                }
                                            }}
                                        >Заказать звонок</Button>
                                    </div>
                                </div>
                                <div className="rightColumn">
                                    <iframe src={`${map}`} width="100%" height="400" ></iframe>                                </div>
                            </div>
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
                    height:600px;
                    flex-direction: column;
                    align-items: center;
                    background-color:#d5d5d55c;
                    justify-content: center;
                    padding: 20px;
                }

                .backgroundBlock{
                    display:flex; 
                    width:1000px;
                    height:auto;
                    flex-direction: column;
                    align-items: center;
                }

                .title {
                    display: flex;
                    width: 100%;
                }

                .row{
                    display: flex;
                    width: 100%;
                    height: 400px;
                    background-color: white;
                    border-radius: 7px;
                }

                .leftColumn{
                    display: flex;
                    flex-direction: column;
                    width: 400px;
                    height: 100%;
                    padding: 20px;
                    align-items: start;
                }

                .rowColumn {
                    display: flex;
                    width:100%;
                    height: 40px;
                    margin-top: 30px;
                }

                .icon {
                    display: flex;
                    height: 100%;
                }

                .title {
                    padding-left: 20px;
                    display: flex;
                    width:100%;
                    height: 100%;
                    font-size: 15px;
                }

                .rightColumn{
                    display: flex;
                    flex-direction: column;
                    width: 600px;
                    height: 100%;
                }

                
                @media(max-width: 1050px) {
                    .backgroundBlock{
                        width:800px;
                    }
                }

                @media(max-width: 800px) {
                    .backgroundBlock{
                        width:100%;
                    }
                }

                @media(max-width: 600px) {
                    .row{
                        height: auto;
                        flex-direction: column-reverse;
                    }
                    .background {
                        height: auto;
                    }

                    .rightColumn {
                        width: 100%;
                    }

                    .leftColumn {
                        width: 100%;
                    }
                }
                
                @media(max-width: 360px) {
                    .priceHeader{
                       font-size:14px
                    }
                }

            `}</style>
        </>)
}


