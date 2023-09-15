import Link from "next/link";
import { MutableRefObject, useEffect, useMemo, useState } from "react";
// import service from '/public/images/service.webp'
// import oldCar from '/public/images/oldCar.webp'
// import tradeIn from '/public/images/tradein.webp'
import banner from '/public/images/banner.webp'

import service from '/public/images/mainlogo/1.png'
import oldCar from '/public/images/mainlogo/2.png'
import tradeIn from '/public/images/mainlogo/3.png'

export function MainCard() {

    return (
        <>
            <div className="mainCards" >
                <Link href={'/catalog/special-offers'}>
                    <div className="card" id="service">

                        <div className="title">Специальные предложeния по сервису</div>

                    </div>
                </Link>
                <Link href={'/brands/arkont-select'}>
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


            @keyframes changeSize {
    from {
        font-size: 18px;
        width: 200px;
        opacity: 0; /* Начнем с нулевой прозрачности */
        transform: translateX(-10px); /* Сдвиг влево */
    }
    to {
        font-size: 25px;
        width: 300px;
        opacity: 1; /* Закончим с полной прозрачностью */
        transform: translateX(0); /* Вернем в исходное положение */
    }
}

            .mainCards {
                    display:flex; 
                    width: 100%;
                    height: auto;
                    justify-content: space-between; 
                    flex-wrap: wrap;
                    margin-top: 100px;
                    font-family: 'Gilroy','sans-serif'; 
                    flex: 1;
                    flex-direction: row;
                }

                .card {
                    display: flex;
                    width: 350px;
                    height: 200px;
                    background-position: center center;
                    background-repeat:no-repeat;
                    background-size:cover; 
                    border-radius: 10px;
                    justify-content: start;
                    align-items: baseline;
                    border:solid 1px transparent;
                    transition: 1s;
                    cursor: pointer;
                    overflow: hidden;
                }
                
                .card:hover{
                    border:solid 1px black;
                    transition: margin-right 2s ease-in-out;
                    background: rgba(255, 255, 255, 0.7); 
                    transition: all 2s;
         
                }

                .card:hover  .title {
                    text-align: start;
                    font-size: 25px;
                    transition: all 0.6s;
                    width: 300px;
                    animation: changeSize 1s forwards;
                 }


              
              
                .title {
                    font-size:18px;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    padding: 25px;
                    width: 200px;
                    font-weight: bold;
                    color: white;
                    text-align: start;
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
               
               

                @media(max-width: 1300px) {
                    .card{
                        width: 300px;
                    }
                }

            


                {/* @media(max-width: 1300px) {
                    .mainCards {
                        justify-content: left;
                        gap:30px;
                    }
                } */}
              
                @media(max-width: 940px) {
                    .mainCards {
                        width: 100%;
                        flex-direction: column;
                        align-items: start;
                        gap:40px;
                    }

                    .card {
                      width:  100%;
                      height: 200px;
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