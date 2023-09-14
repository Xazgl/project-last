import Link from "next/link";
import { MutableRefObject, useEffect, useMemo, useRef, useState } from "react";
import car from '/public/images/newcar.jpg';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { AllUsedCarDto } from "../../../@types/dto";
import { CircularProgress } from "@mui/material";
import { numberWithSpaces } from "./allNewCarPage/servicesNewCar/service";


// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


export function OldCar({ carsUsed }: { carsUsed: AllUsedCarDto }) {

    const [activeFilter, setActiveFilter] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);
    const [filterClosed, setFilterClosed] = useState(false);
    // const [carArr, setCarArr] = useState<AllUsedCarDto>(
    //     Array.isArray(carsUsed) && carsUsed.length ? Array(4).fill(0).map(el => carsUsed[Math.floor(Math.random() * carsUsed.length)]) : [])


    // const newFiltRef = useRef(null)
    // const saleFiltRef = useRef(null)

    const [carArr, setCarArr] = useState<AllUsedCarDto>([]);
    useEffect(() => {
        if (!Array.isArray(carsUsed) || !carsUsed.length) {
            return;
        }
        const shuffledCars = Array(4).fill(0).map(el => carsUsed[Math.floor(Math.random() * carsUsed.length)]);
        setCarArr(shuffledCars);
    }, [carsUsed]);


    const id = [
        'newFilt',
        filterOpen ? 'newFilt_active' : '',
        // filterClosed ? 'newFilt_close-starting' : '',
    ]

    function active() {
        setFilterOpen(true)
        console.log(filterOpen)
    }


    function matchesEngine(engine) {
        let arr = engine.toString().split(/\s*,\s*/)
        return arr[2].replace(/\s/g, '');
    }

    function gearboxType(gearbox) {
        if (gearbox === 'Механическая') {
            return 'MT'
        } else {
            return 'АТ'

        }
    }


    function engineArrStr(engine) {
        let arr = engine.toString().split(/\s*,\s*/)
        return arr[1]
    }

    return (
        <>
            <div className="background" >
                <div className="title">Автомобили с пробегом</div>
                {/* <div className="filt">
                    <div className="el" id={id.join(' ')} ref={newFiltRef}
                        onClick={(event) => { if (event.target === newFiltRef.current) active() }}>Новые поступления</div>
                    <div className="el" id={id.join(' ')} ref={saleFiltRef} onClick={() => setActiveFilter('sale')}>Скидка</div>
                </div> */}
                <div className="cardsSlider">
                    {carArr.length > 0 ?
                        (<div className="cardsSlider">
                            {
                                carArr.map(car => {
                                    return <Link
                                        key={car.id}
                                        href={{
                                            pathname: '/catalog/car/[id]',
                                            query: { id: car.id }
                                        }}>
                                        <div className="card">
                                            <div className="imgDiv">
                                                <img
                                                    loading="lazy"
                                                    decoding='async'
                                                    src={car.picture[0]}
                                                    className="cardImg">

                                                </img>
                                            </div>
                                            <div className="cardTitle">{car.vendor} {car.modelShortName}</div>
                                            <div className="cardDesc">
                                                <div className="elDesc">АИ-95</div>
                                                <div className="elDesc">{engineArrStr(car.engine)} </div>
                                                <div className="elDesc">{matchesEngine(car.engine)}</div>
                                                {car.driverType === 'Передний' &&
                                                    <div className="elDesc">FWD</div>
                                                }
                                                {car.driverType === 'Полный' &&
                                                    <div className="elDesc">4WD</div>
                                                }
                                                <div className="elDesc">{gearboxType(car.gearboxType)}</div>
                                            </div>
                                            <div className="cardPrice">{numberWithSpaces(car.price)} ₽</div>
                                            <div className="cardPriceMonth">
                                                <button className="btn">от {numberWithSpaces(Math.round(Number(car.price) / 150))} Р/мес</button>
                                            </div>
                                            <div className="cblackit">
                                                <span className="pricCblackit">РАССЧИТАТЬ КРЕДИТ</span>
                                            </div>
                                        </div>
                                    </Link>
                                })
                            }
                        </div>)
                        : <CircularProgress />
                    }
                </div>
                <div className="btnDiv">
                    <Link href={'/catalog/used-car'}>
                        <button className="btnAllCar">Смотреть все автомобили с пробегом</button>
                    </Link>
                </div>

            </div>
            <style jsx>{`

                   
@keyframes cblackit-open {
    0% {
        opacity: 0;
        margin-top:-5em;
     
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

    .background {
        display:flex; 
        width: 100%;
        height: 750px;
        justify-content: center; 
        align-items: center;
        margin-top:10px;
        padding:30px;
        flex-direction: column;
    }

    .title {
        display:flex; 
        width: 100%;
        height: 40px;
        justify-content: center; 
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        gap:20px;
        font-family: 'Gilroy','sans-serif'; 
    }

    .cardsSlider{
        display:flex; 
        flex-direction: row;
        justify-content: start;
        width: 1000px;
        gap:30px;
        height: 550px;
    }


    .filt {
        display: flex;
        justify-content: center;
        text-align: center;
        margin-top:30px;
        color:  #131313;
        cursor: pointer;
        font-size: 20px;
        transition: 0.5s;
        gap: 30px;
        border-bottom: 1px solid #deded8;
        height: 50px;
        
    }

    #newFilt {
        border-bottom: 2px solid transparent;
    }

    #newFilt_active{
        border-bottom: 2px solid #D1AC02;
    }

    .card {
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        width: 270px;
        height: 400px;
        border: 1px solid #deded8;
        margin-top: 40px;
        border-radius: 7px;
        transition: 0.3s;
        cursor: pointer;
    }

    .card:hover {    
        transform: scale(1.03);
       -webkit-box-shadow: 0px -1px 11px 9px rgba(34, 60, 80, 0.9);
       -moz-box-shadow: 0px -1px 11px 9px rgba(34, 60, 80, 0.9);
       box-shadow: 0px -1px 11px 9px rgba(34, 60, 80, 0.09);
       height: 450px;
       border: none;
    }

    .imgDiv {
        display: flex;
        justify-content: center;
        width: 100%;
        height: auto;
    }

    .cardImg {
        display: flex;
        width: 221px;
        height: 166px;
        border-radius: 7px;
    }

    .cardTitle {
        display: flex;
        justify-content: center;
        text-align: center;
        font-size: 17px ;
        align-items:center;
        width: 100%;
        height: 32px; 
        color:  #131313;
        font-family: 'Gilroy','sans-serif'; 
    }

    .cardDesc {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        width: 100%;
        height: 32px;
        margin-top:20px;
        padding-left: 10px;
        padding-right: 10px;
        font-family: 'Gilroy','sans-serif'; 
    }

    .elDesc{
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        width:45px;
        height: 30px;
        font-size:.777777778em;
        border:1px solid #deded8;
    }


    .cardPrice {
        display: flex;
        width: 100%;
        justify-content: center;
        text-align: center;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
        line-height: 24px;
        min-height: 24px;
        margin-top:5px;
        font-family: 'Gilroy','sans-serif'; 
    }

    .cardPriceMonth{
        display: flex;
        width:100%;
        height: auto;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        font-family: 'Gilroy','sans-serif'; 
    }


    .btn {
        background: #D1AC02;
        color: #fff;
        cursor: pointer;
        opacity: 1;
        transition: opacity .5s ease-in-out;
        border-radius: 5px;
        border:none;
        width: 150px;
        height: 30px;
        transition: 0.5s;
        font-family: 'Gilroy','sans-serif'; 
    }

    .cblackit {
        display: none;
        justify-content: center;
        text-align: center;
        align-items: center;
        width: 100%;
        height: 60px;
        border-top:1px solid #deded8;
        transition: 1s;
        margin-top:-10em;
        cursor: pointer;
        font-family: 'Gilroy','sans-serif'; 
    }

    .cblackit:hover {
        background-color:#0088ff;;
    }
    
    .card:hover .cblackit {
        display: flex;
        transition: 1s;
        animation:cblackit-open.5s ;
        margin-top: 40px;
        background-color: #131313;
    }
    
    .btn:hover {
        background: #d19a0f;
        transform: scale(0.99);
    }

    .pricCblackit{
        text-align: center;
        color:  #131313;
        transition: 0.5s;
        font-family: 'Gilroy','sans-serif'; 
    }

    .card:hover .pricCblackit{
        color:white;

    }


     .btnDiv {
        display: flex;
        width: 100%;
        height: 50px;
        justify-content: center;
        align-items: center;
        font-family: 'Gilroy','sans-serif'; 
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
    
   
    @media(max-width: 1200px) {
        .background {
         height: 100%;
        }
    }

    @media(max-width: 1000px) {
        .cardsSlider{
            flex-wrap: wrap;
            width: auto;
            justify-content: center;
            height: auto;
        }
        .btnDiv {
            margin-top: 20px;
        }
    }

    @media(max-width: 720px) {

        .background {
             display:none;
        }

        .card:hover .cblackit {
           display: none;
        }
        .card:hover {    
        transform: scale(1);
        height: auto;
       }
       .card{
        height: auto;
       }

       .cardImg{
          width: 100%;
          height: auto;
          border-radius: 0;
        }

        .cardPriceMonth{
            margin-bottom:10px;
        }

        .btn {
            width: 80%;
            height: 35px;
        }
    }

    @media(max-width: 540px) {
        .title { 
            font-size:18px;
        }
        .titleMini {
            font-size:12px;
        }
        .MainBanner { 
            height: 250px;
        }
    }
    @media(max-width: 350px) {
        .title { 
            font-size:12px;
        }
        .titleMini {
            font-size:9px;
        }
        .MainBanner { 
            height: 150px;
        }
    }
    @media(max-width: 250px) {
        .title { 
            font-size:9px;
            margin-top:10px;
        }
        .titleMini {
            font-size:7px;
        }
        .MainBanner { 
            height: 130px;
        }
        .titleMini{
            margin-bottom:00px;
            margin-top:10px;
        }
    }
`}</style>
        </>
    )
}