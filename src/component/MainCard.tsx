import Link from "next/link";
import { MutableRefObject, useEffect, useMemo, useState } from "react";
import service from '/public/images/service.webp'
import oldCar from '/public/images/oldCar.webp'
import tradeIn from '/public/images/tradein.webp'
import banner from '/public/images/banner.webp'



export function MainCard() {

    return (
        <>
            <div className="mainCards" >
                <Link href={'/catalog/special-offers'}>
                    <div className="card" id="service">
                        <div className="title">Специальные предложeния по сервису</div>
                    </div>
                </Link>
                <Link href={'/catalog/used-car'}>
                    <div className="card" id="oldCar">
                        <div className="title">Автомобили с пробегом</div>
                    </div>
                </Link>
                <Link href={'/catalog/tradein'}>
                    <div className="card" id="tradeIn">
                        <div className="title">Онлайн-оценка автомобиля</div>
                    </div>
                </Link>
            </div>

            <style jsx>{`

            .mainCards {
                    display:flex; 
                    width: 100%;
                    height: auto;;
                    justify-content: center; 
                    flex-wrap: wrap;
                    margin-top: 100px;
                    gap:50px;
                    font-family: 'Roboto','sans-serif'; 
                }

                .card {
                    display: flex;
                    width: 350px;
                    height: 200px;
                    background-position: center center;
                    background-repeat:no-repeat;
                    background-size:cover; 
                    border-radius: 5px;
                    justify-content: start;
                    align-items: baseline;
                    border:solid 1px transparent;
                    transition: 0.6s;
                    cursor: pointer;
                    
                }
                
                .card:hover{
                    border:solid 1px black;
                    background: rgba(255, 255, 255, 0.2); 
                }

              
                .title {
                    font-size:18px;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    padding: 30px;
                    width: 200px;
                    font-weight: bold;
                }

                #service{
                    background-image: url('${service.src}');
                }

                #oldCar{
                    background-image: url('${oldCar.src}');
                }

                #tradeIn{
                    background-image: url('${tradeIn.src}');
                }
               
               
               
                @media(max-width: 340px) {
                    .mainCards {
                        flex-direction: column;
                        align-items: center;
                    }

                    .card {
                      width: 250px;
                      height: 130px;
                    }

                    .title {
                        font-family: 16px;
                        padding:5px;
                        text-align: start;
                      
                    }
                }
               
        `}</style>
        </>
    )
}