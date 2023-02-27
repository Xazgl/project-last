import { Button } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import banner from '/public/images/numbers/vse_nomera.png'

type Numbers = {
    setShowModal: Dispatch<SetStateAction<boolean>>,
}

export function NumbersBanner({ setShowModal }: Numbers) {

    function showModal(event) {
        event.preventDefault()
        setShowModal(true)
    }

    return (
        <>
            <div className="background">
                <div className="txt">
                    <p className="title">Изготовление номерных знаков</p>
                </div>
                <div className="banner"></div>
                <div className="txt">
                    <ul>
                        <li>Дубликаты номеров от 1000 рублей</li>
                        <li>Регистрационный знак за 15 минут</li>
                        <li>Изготовление по требованиям ГОСТ</li>
                        <li>Телефон: +7 (8442) 20-24-49</li>
                        <li>Ежедневно с 8:00 до 20:00</li>
                        <li>г. Волгоград, ул. Вильнюсская, 42</li>
                        <li>
                            <div className='btn'>
                                <Button
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        width: '100%',
                                        height: '40px'
                                    }}
                                    variant="contained"
                                    onClick={showModal}
                                >Узнать больше</Button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                
                .background {
                    display:flex; 
                    height: auto;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;
                }

                .title  {
                    font-size: 45px;
                    font-weight: bold;
                }

                .banner {
                    display:flex; 
                    width: 900px;
                    height: 500px;
                    justify-content: center;
                    background-position: center center;
                    background-image: url('${banner.src}');
                    background-repeat: no-repeat;
                    background-size: cover;
                    padding-top: 42px;
                }

                .txt{
                    display:flex; 
                    align-items: start;
                    width: 900px;
                    height: auto;
                    flex-direction: column;

                }

                li {
                    list-style: none;
                    line-height: 1.6666666667rem;
                    margin-bottom: 0.8333333333rem;
                    font-size: 18px;
                }

                .btn{
                    display:flex; 
                    width: 100%;

                }

                @media(max-width: 1000px) {
                    .banner {
                        height: 300px;
                        width: 600px;
                    }
                    .txt {
                        width: 600px;
                    }
                }

                @media(max-width: 620px) {
                    .banner {
                        height: 200px;
                        width: 400px;
                    }
                    .title {
                        font-size: 35px;
                    }
                    .txt {
                        width: 400px;
                    }
                    li {
                        font-size: 16px;
                    }
                }

                @media(max-width: 500px) {
                    .banner {
                        height: 100px;
                        width: 200px;
                    }
                    .title {
                        font-size: 25px;
                    }
                    .txt {
                        width: 200px;
                    }
                    li {
                        font-size: 14px;
                    }
                }

                @media(max-width: 350px) {
                    .banner {
                        height: 150px;
                        background-size: contain;
                    }
                }
            `}</style>
        </>
    )
}