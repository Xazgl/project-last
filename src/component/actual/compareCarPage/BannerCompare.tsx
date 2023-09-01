import Link from "next/link";
import Image from 'next/image';
import banner from '/public/images/compare/banner.png'

import {  MutableRefObject } from "react"


type FormType = {
    refs: {
        refCards: MutableRefObject<HTMLDivElement>,
    }
}

export function BannerCompare({ refs }:FormType) {

    return (
        <>
            <div className="Banner">
                <div className="title">
                    <div>СРАВНИТЕ РАЗНЫЕ АВТО</div>
                    <div className="titleMini">
                        <button className="btn"
                            onClick={(e) => {
                                e.preventDefault()
                                refs.refCards.current.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start',
                                })
                            }}> К сравнению</button>
                </div>
            </div>
        </div >

            <style jsx>{`
                .Banner {
                    display:flex; 
                    width: 100%;
                    height: 600px;
                    justify-content: start;
                    background-position: center center;
                    background-image: url('${banner.src}');
                    background-repeat: no-repeat;
                    background-size:cover;
                }

                .title {
                    display:flex;
                    justify-content:center;
                    align-items:start;
                    flex-direction:column;
                    color:white;
                    font-family: 'Roboto','sans-serif'; 
                    font-size:45px;
                    font-weight: bold;
                    padding-left: 13%;
                }

                .titleMini {
                    display:flex;
                    justify-content:space-between;
                    flex-direction:row;
                    color:white;
                    margin-top:100px;
                    font-family: 'Roboto','sans-serif'; 
                    font-size:20px;
                    font-weight: bold;
                }

                .col {
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;
                }

                .btn{
                    display: flex;
                    justify-content:center;
                    flex-direction:;
                    align-items:center;
                    flex-direction:row;
                    font-family: 'Roboto','sans-serif'; 
                    transition: transform.3s;
                    width: 300px;
                    height: 45px;
                    background: #0c54a0;
                    border: 3px solid #0c54a0;
                    font-weight: bold;
                    margin-top:35px;
                    color:white;
                    font-size:16px;
                    cursor: pointer;
                }

                .btn:hover{
                    transform: scale(0.99);
                    background-color: #eab330;
                    border: 3px solid #eab330;
                }
                
                .ImgBanner2{
                   /* overflow: hidden;
                       border-radius: 5px;
                   */
                    
                    background-position: center center;
                    display:flex;
                }

                @media(max-width: 1200px) {
                    .MainBanner { 
                        background-size: cover;
                    }
                }
                @media(max-width: 900px) {
                    .title { 
                        font-size:43px;
                    }
                }
                @media(max-width: 720px) {
                    .title { 
                        font-size:35px;
                    }
                    .titleMini {
                        font-size:15px;
                    }
                    .MainBanner { 
                        height: 400px;
                    }
                }
                @media(max-width: 640px) {
                    .title { 
                        font-size:30px;
                    }
                 
                    .MainBanner { 
                        height: 250px;
                    }
                }

                @media(max-width: 500px) {
                    .title {
                        padding-left:0px;
                        align-items: center;
                    }
                    .Banner { 
                        justify-content: center
                    };
                }

                @media(max-width: 400px) {
                    .title { 
                        font-size:20px;
                    }

                    .btn {
                      width: 250px;
                   }
                }

                @media(max-width: 320px) {
                    .MainBanner { 
                        height: 150px;
                    }

                    .btn {
                      width: 210px;
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