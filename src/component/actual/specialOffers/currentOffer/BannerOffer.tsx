import Link from "next/link";
import Image from 'next/image';
import banner from '/public/images/1.webp'
import { Dispatch, FormEvent, SetStateAction, useMemo, useState } from "react"
import { Offer } from "@prisma/client";
import { CircularProgress } from "@mui/material";


type Props = {
    setShowModal: Dispatch<SetStateAction<boolean>>,
    offer: Offer,
}

export function BannerOffer({ setShowModal, offer }: Props) {

    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }

    return (
        <>
            <div className="Banner">
                {offer !== null ?
                    (
                        <>
                            <div className="imgDiv">
                                <img
                                    loading="lazy"
                                    decoding='async'
                                    style={{
                                        backgroundSize: 'cover', width: '100%',
                                        height: '250px', backgroundRepeat: 'no-repeat',
                                        objectFit: 'cover'

                                    }}
                                    src={'/uploads/' + offer.img}
                                />
                            </div>
                            <div className="title">{offer.title}</div>
                        </>
                    )
                    : <CircularProgress />

                }

            </div>

            <style jsx>{`
                .Banner {
                    display:flex; 
                    width: 100%;
                    height: auto;
                    align-items: center;
                    flex-direction: column;
                }
                .title {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    font-family: 'Roboto','sans-serif'; 
                    font-size:35px;
                    font-weight: bold;
                }

                .titleMini {
                    display:flex;
                    justify-content:space-between;
                    flex-direction:row;
                    color:white;
                    margin-top:100px;
                    font-family: 'Roboto', sans-serif; 
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
                    width: 230px;
                    height: 52px;
                    background: transparent;
                    border: 3px solid white;
                    font-weight: bold;
                    margin-top:35px;
                    color:white;
                    font-size:15px;
                }

                .btn:hover{
                    transform: scale(0.95);
                    background-color: #eab330;
                    color:black;
                    border: 1px solid black;
                  
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
                        font-size:30px;
                    }
                }
                @media(max-width: 720px) {
                    .title { 
                        font-size:25px;
                    }
                    .titleMini {
                        font-size:15px;
                    }
                    .MainBanner { 
                        height: 400px;
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