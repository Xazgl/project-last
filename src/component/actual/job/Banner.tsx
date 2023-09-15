import Link from "next/link";
import Image from 'next/image';
import banner from '/public/images/11.webp'
import { Dispatch, FormEvent, SetStateAction, useMemo, useState } from "react"

export function Banner({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) {

    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }

    return (
        <>
            <div className="Banner">
                <div className="title">
                    <div>Желаете работать в АРКОНТ?</div>
                    <div className="titleMini">
                        <form onSubmit={showModal}>
                            <button className="btn">Отправить резюме</button>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .Banner {
                    display:flex; 
                    width: 100%;
                    height: 500px;
                    justify-content: start;
                    background-blend-mode: darken;
                    background: rgba(0, 0, 0, .30);
                    background-position: center center;
                    background-image: url('${banner.src}');
                    background-repeat: no-repeat;
                    background-size:cover;
                    border-radius: 10px;
                }

                .title {
                    display:flex;
                    justify-content:center;
                    align-items:start;
                    flex-direction:column;
                    color:white;
                    font-family: 'Gilroy','sans-serif'; 
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
                    font-family: 'Gilroy','sans-serif'; 
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
                    font-family: 'Gilroy','sans-serif'; 
                    transition: transform.3s;
                    width: 300px;
                    height: 45px;
                    background:  #131313;
                    border: 2px solid  white;
                    font-weight: bold;
                    margin-top:35px;
                    color:white;
                    font-size:16px;
                    cursor: pointer;
                    border-radius: 10px;
                }

                .btn:hover{
                    transform: scale(0.99);
                    background-color: #D1AC02;
                    border: 2px solid #D1AC02;
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
                    .Banner { 
                        height: 100%;
                    }
                }
                @media(max-width: 640px) {
                    .title { 
                        font-size:30px;
                    }
                 
              
                }

                @media(max-width: 500px) {
                    .title {
                        padding-left:0px;
                        align-items: center;
                        text-align: center;
                    }
                    .Banner { 
                        justify-content: center
                    };
                }

                @media(max-width: 400px) {


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