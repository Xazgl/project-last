import { CircularProgress } from "@mui/material";
import Link from "next/link";
import Image from 'next/image';
import { engineArrStr, gearboxType, matchesEngine, numberWithSpaces } from "../../../../../../services/functions";
import { CarDto } from "../../../../../../../@types/dto";
import { UsedCars } from "@prisma/client";


export function NewCarCard({ car }: { car: UsedCars }) {
    return (
        <>
            {car !== null ?
                <>
                    <Link href={{
                        pathname: '/catalog/car/[id]',
                        query: { id: car.id }
                    }}>
                        <div className="card">
                            <div className="imgDiv">
                                <Image
                                    src={car.picture[0]}
                                    alt={car.picture[0]}
                                    layout="fill"
                                    sizes="(max-width: 750px) 50vw,
                                            (max-width: 828px) 40vw,
                                            (max-width: 1080px) 33vw,
                                            20vw"
                                    loading="lazy"
                                />
                            </div>
                            <div className="cardTitle">{car.vendor} {car.modelShortName}</div>
                            <div className="cardPrice">от {numberWithSpaces(Number(car.price))} ₽</div>

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
                            {/* <div className="cardPrice">от {numberWithSpaces(Number(car.price))} ₽</div> */}
                            <div className="cardPriceMonth">
                            <button className="btn">от {numberWithSpaces(Math.round(Number(car.price) / 150))} Р/мес</button>
                            </div>
                            {/* <div className="credit">
                                <span className="pricCredit">О Модели</span>
                            </div> */}
                        </div>
                    </Link>

                </>
                : <CircularProgress />
            }

            <style jsx>{`
            @keyframes credit-open {
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

                .card {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    flex-direction: column;
                    width: 270px;
                    height: 400px;
                    margin-top: 40px;s
                    border-radius: 7px;
                    transition: 0.3s;
                    cursor: pointer;
                    animation: slideAnimation 1s ease-in-out;   
                    border-radius: 0px;  
                    background-color:white;

                }

                .card.active {
                    opacity: 1;
                    transform: translateX(0px);
                }

                .imgDiv {
                    display: flex;
                    justify-content: center;
                    width: 90%;
                    height: 190px;
                    position: relative;
                    margin-top:0px;
                    padding-top: 0px;
                }

                .cardImg {
                    display: flex;
                    width: 221px;
                    height: 166px;
                    border-radius: 7px;
                }

                .cardTitle {
                    display: flex;
                    justify-content: start;
                    text-align: center;
                    font-size: 17px ;
                    align-items:center;
                    width: 243px;
                    height: 50px;
                    color: #0c54a0;
                    font-family: 'Roboto','sans-serif'; 
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
                    font-family: 'Roboto','sans-serif'; 
                }

                .elDesc{
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    align-items: center;
                    width:60px;
                    height: 30px;
                    font-size:.777777778em;
                    border:1px solid #d1d7dd;
                    padding: 5зч;
                }


                .cardPrice {
                    display: flex;
                    width: 243px;
                    justify-content: start;
                    text-align: center;
                    align-items: center;
                    font-size: 18px;
                    font-weight: bold;
                    line-height: 24px;
                    min-height: 24px;
                    margin-top:15px;
                    font-family: 'Roboto','sans-serif'; 
                }

                .cardPriceMonth{
                    display: flex;
                    width:100%;
                    height: auto;
                    justify-content: center;
                    align-items: center;
                    margin-top: 10px;
                    font-family: 'Roboto','sans-serif'; 
                }


                .btn {
                    background: #f2f2f2;
                    color: #0c54a0;
                    cursor: pointer;
                    opacity: 1;
                    transition: opacity .5s ease-in-out;
                    border:none;
                    width: 243px;
                    height: 35px;
                    transition: 0.5s;
                    font-family: 'Roboto','sans-serif'; 
                    border:solid 2px #d1d7dd;
                    font-weight: bold;
                }

                .credit {
                    display: none;
                    justify-content: center;
                    text-align: center;
                    align-items: center;
                    width: 96%;
                    height: 45px;
                    transition: 1s;
                    margin-top:-10em;
                    cursor: pointer;
                    font-family: 'Roboto','sans-serif'; 
                    top: -100px;
                    border-radius: 3px;
                }

                .credit:hover {
                    background - color:#0088ff;
                }

                .btn:hover {
                    background: #0c54a0;
                    transform: scale(0.99);
                    color:white;
                }

                .pricCredit{
                    text - align: center;
                    color: #0c54a0;
                    transition: 0.5s;
                }

                .card:hover .pricCredit{
                    color:white;
                }

                .btnDiv {
                    display: flex;
                    width: 100%;
                    height: 50px;
                    justify-content: center;
                    align-items: center;
                }

                .btnAllCar {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    border: 1px solid #deded8;
                    background:transparent;
                    color: #005baa;
                    width: 350px;
                    height: 100%;
                    font-size: 18px;
                    border-radius: 5px;
                    transition: 0.6s;
                    font-family: 'Roboto',sans-serif;
                }

                .btnAllCar:hover {
                    background - color: #005baa9b;
                    color:white;
                    transform: scale(0.99);
                    -webkit-box-shadow: 0px -1px 10px 2px rgba(34, 60, 80, 0.2) inset;
                    -moz-box-shadow: 0px -1px 10px 2px rgba(34, 60, 80, 0.2) inset;
                    box-shadow: 0px -1px 10px 2px rgba(34, 60, 80, 0.2) inset;
                }

                .credit:hover {
                    background-color:#0088ff;;
                }
                
                .card:hover {
                    position: relative;

                }

                .card:hover .credit {
                    display: flex;
                    transition: 1s;
                    animation:credit-open.5s ;
                    margin-top: 240px;
                    background-color:#005baa;
                    position: absolute;
                    top: 0;
                }
                
                .btn:hover {
                    background: #0c54a0;
                    transform: scale(0.99);
                    color:white;
                }

                .pricCredit{
                    text-align: center;
                    color: #0c54a0;
                    transition: 0.5s;
                }

                .card:hover .pricCredit{
                    color:white;
 
                }

                @media(max-width: 1200px) {
                    .background {
                      height: 100%;
                    }
                }

                @media(max-width: 1000px) {
                    .cardsSlider{
                      flex - wrap: wrap;
                      width: auto;
                      justify-content: center;
                      height: auto;
                    }

                    .btnDiv {
                        margin - top: 20px;
                    }
                }

                @media(max-width: 720px) {
                    .slider {
                    display:none;
                    }

                    .card:hover .credit {
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
                        margin - bottom:10px;
                    }
    
                    .btn {
                        width: 80%;
                        height: 35px;
                    }
    
                    .slider__container {
                        overflow - x: hidden;
                        position: relative;
                    }
    
                    .slider__slides {
                        display: flex;
                        overflow: hidden;
                        animation: slideAnimation 1s ease-in-out;
                        flex-grow:1;
                    }
    
                    .slider__controls{
                        padding: 0;
                    }
                }

                @media(max-width: 540px) {
                    .title {
                        font - size:18px;
                    }

                    .titleMini {
                        font - size:12px;
                    }

                    .MainBanner {
                        height: 250px;
                    }
                }
                @media(max-width: 350px) {
                    .title {
                    font - size:12px;
                    }
                    .titleMini {
                        font - size:9px;
                    }
                    .MainBanner {
                        height: 150px;
                    }
                }

                @media(max-width: 250px) {
                    .title {
                       font - size:9px;
                       margin-top:10px;
                    }
                    .titleMini {
                        font - size:7px;
                    }

                    .MainBanner {
                        height: 130px;
                    }

                    .titleMini{
                        margin - bottom:00px;
                        margin-top:10px;
                    }
                }
        `}</style>

        </>
    )

}
