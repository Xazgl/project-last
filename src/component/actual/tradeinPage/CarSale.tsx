import Link from "next/link";
import Image from 'next/image';
import banner from '/public/images/job.webp'
import { MutableRefObject, useState } from "react";

type MuneProps = {
    refs: {
        refForm: MutableRefObject<HTMLDivElement>,
    }
}


export function CarSale() {
    const [carPrice, setCarPrice] = useState('')
    return (
        <>
            <div className="background">
                <div className="card">
                    <div className="titleCard">Знаете, сколько стоит ваш автомобиль?</div>
                    <div className="row">
                        <div className="rowEl" >
                            <input type="text"
                                name="name"
                                placeholder="Оценка вашего авто,₽"
                                required
                                value={carPrice}
                                onChange={event => setCarPrice(event.target.value)} />
                            <h6>Мы подберем удобный вариант продажи вашего автомобиля</h6>
                        </div>
                        <div className="rowEl" >
                            <button>Продать автомобиль</button>
                        </div>
                    </div>
                    {/* <div className="miniCard">Мы подберем удобный вариант продажи вашего автомобиля</div> */}
                </div>
            </div>

            <style jsx>{`

                .background {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 500px;
                }

                .card{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 600px;     
                    flex-direction: column;          
                }

                h6 {
                    color:#a3a8aa;
                }

                .row {
                    display: flex;
                    flex-direction: row;
                    gap:10px;
                    width: 100%;
                    justify-content: center;
                    margin-top:20px;
                    height: 60px;
                }
                
                .titleCard{
                    display: flex;
                    justify-content: start;
                    align-items: flex-start;
                    font-size: 30px;
                    margin-top:20px;
                    width: 100%;
                }

                .miniCard{
                    display: flex;
                    justify-content: start;
                    font-size: 18px;
                    margin-top:20px;
                }

                input {
                    width: 400px;
                    height:100%;
                    padding: 12px 12px;
                    font-size: 21px;
                }

                button {
                    width: 300px;
                    height: 100%;
                    background-color:  #005baa;
                    color:white;
                    border:none;
                    font-size: 16px;
                }

                button:hover {
                    background-color: black;
                }

                @media(max-width: 1200px) {
                    .MainBanner { 
                        background-size: cover;
                    }
                }
                
            `}</style>
        </>
    )
}