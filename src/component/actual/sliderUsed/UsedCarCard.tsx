import { CircularProgress } from "@mui/material";
import { UsedCars } from "@prisma/client";
import Link from "next/link";
import { numberWithSpaces } from "../allNewCarPage/servicesNewCar/service";
import Image from 'next/image';


export function UsedCarCard({ car }: { car: UsedCars }) {

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
            {car !== null ?
                <>
                    <Link href={{
                        pathname: '/catalog/used-car/[id]',
                        query: { id: car.id }
                    }}>
                        <div className="card">
                            <div className="imgDiv">
                                {/* <img
                                    loading="lazy"
                                    decoding='async'
                                    src={car.picture[0]}
                                    className="cardImg">

                                </img> */}
                                <Image
                                    // style={{borderRadius:'7px'}}
                                    src={car.picture[0]}
                                    // className="nextPic"
                                    alt={car.picture[0]}
                                    
                                    // width={221}
                                    // height={166}
                                    // quality={100}
                                    layout="fill"
                                    // 750, 828, 1080
                                    sizes="(max-width: 750px) 50vw,
                                            (max-width: 828px) 40vw,
                                            (max-width: 1080px) 33vw,
                                            20vw"
                                    loading="lazy"
                                    
                                />
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
                            <div className="credit">
                                <span className="pricCredit">РАССЧИТАТЬ КРЕДИТ</span>
                            </div>
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
                    text-align: center;
                    flex-direction: column;
                    width: 270px;
                    height: 400px;
                    margin-top: 40px;
                    border-radius: 7px;
                    transition: 0.3s;
                    cursor: pointer;
                    animation: slideAnimation 1s ease-in-out;        
                }

                .card.active {
                    opacity: 1;
                    transform: translateX(0px);
                }

                .imgDiv {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    height: 166px;
                    position: relative;
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
                    height: 50px;
                    color: #005baa;
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
                    background: #fdb913;
                color: #fff;
                cursor: pointer;
                opacity: 1;
                transition: opacity .5s ease-in-out;
                border-radius: 5px;
                border:none;
                width: 150px;
                height: 30px;
                transition: 0.5s;
                font-family: 'Roboto','sans-serif'; 
                }

                .credit {
                    display: none;
                justify-content: center;
                text-align: center;
                align-items: center;
                width: 100%;
                height: 60px;
                transition: 1s;
                margin-top:-10em;
                cursor: pointer;
                font-family: 'Roboto','sans-serif'; 
                top: -100px;
                }

                .credit:hover {
                    background - color:#0088ff;
                }



                .btn:hover {
                    background: #d19a0f;
                transform: scale(0.99);
                }

                .pricCredit{
                    text - align: center;
                color: #005baa;
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
                    background: #d19a0f;
                    transform: scale(0.99);
                }

                .pricCredit{
                    text-align: center;
                    color: #005baa;
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
