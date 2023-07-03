import { CircularProgress } from "@mui/material";
import Link from "next/link";

import Image from 'next/image';


export function ImgCarCard({ img}: { img: string }) {

    return (
        <>
            {img !== null ?
                <>
                        <div className="card">
                            <div className="imgDiv">
                                <Image
                                    src={img}
                                    alt={img}
                                    layout="fill"
                                    sizes="(max-width: 750px) 50vw,
                                            (max-width: 828px) 40vw,
                                            (max-width: 1080px) 33vw,
                                            20vw"
                                    loading="lazy"
                                />
                                {/* <img src={car.img[0]} className="cardImg"></img> */}
                            </div>
                        </div>

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
                    align-items: center;
                    width: 100%;
                    height:auto;
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
                    height: 200px;
                    position: relative;
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
