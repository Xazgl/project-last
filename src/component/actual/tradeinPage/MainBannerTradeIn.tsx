import Link from "next/link";
import Image from 'next/image';
import banner from '/public/images/tradein/main.png'
import { Dispatch, MouseEventHandler, MutableRefObject, SetStateAction } from "react";

type MuneProps = {
    setShowModal: Dispatch<SetStateAction<boolean>>,
    refs: {
        refForm: MutableRefObject<HTMLDivElement>,
    }
}


export function MainBannerTradeIn({ setShowModal, refs }: MuneProps) {

    function showModal(event) {
        setShowModal(true)
    }

    return (

        <>
            <div className="MainBanner">
                {/* <Image
                    src={banner}
                    alt="opel"
                    width={1000}
                    height={1000}
                />*/}

                {/* <img  className="ImgBanner" src={banner.src} alt="opel" /> */}
                {/* <div  className="ImgBanner2" /> */}
                <div className="title">
                    <div>АРКОНТ TRADE-IN</div>
                    <div className="titleMini">
                        <div className="сol">
                            <button className="btn" onClick={(e) => {
                                e.preventDefault()
                                refs.refForm.current.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start',
                                })
                            }}
                            >Оценить авто онлайн</button>
                        </div>
                        <div className="сol">
                                <button className="btn"  onClick={showModal} >Оценить в дилерском центре</button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .MainBanner {
                    display:flex; 
                    width: 100%;
                    height: 570px;
                    justify-content: start;
                    background-blend-mode: darken;
                    background: rgba(0, 0, 0, 0.304);
                    background-position: center center;
                    background-image: url('${banner.src}');
                    background-repeat: no-repeat;
                    background-color: white;
                    background-size: contain;
                }
                .title {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    color:black;
                    font-family: 'Roboto','sans-serif'; 
                    font-size:55px;
                    font-weight: bold;
                    padding-left:10%;
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
                    transition: transform.1s;
                    width: 300px;
                    height: 45px;
                    background: #131313;
                    border: 1px solid white;
                    font-weight: bold;
                    margin-top:35px;
                    color:white;
                    font-size: 16px;
                    cursor: pointer;
                }

                .btn:hover{
                    transform: scale(0.98);
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



                @media(max-width: 1650px) {
                    .MainBanner { 
                        display:flex; 
                        width: 100%;
                        height: 450px;
                        background-size: cover;
                    }
                }

                @media(max-width: 1200px) {
                    .MainBanner { 
                        background-size: cover;
                    }
                }

                @media(max-width: 1000px) {
                    .MainBanner { 
                     height: 400px;
                    }
                    .title { 
                        font-size:40px;
                    }
                }

                @media(max-width: 760px) {
                    .titleMini {
                        font-size:15px;
                    }
                    .MainBanner { 
                        height: 300px;
                    }
                }
                @media(max-width: 660px) {
                    .title { 
                        font-size:40px;
                        color:transparent;
                        padding-left: none;
                        justify-content: center;
                    }

                    .titleMini {
                        flex-direction: column;
                        margin-top: 0px;
                        width: 400px;
                    }

                    .MainBanner { 
                        justify-content: center;
                        background-position: center right;
                    }

                    .btn {
                        margin-top:10px;
                        width: 100%;
                        text-align: center;
                    }
                }

                @media(max-width:550px) {
                    .MainBanner { 
                        height: 250px;
                    }

                    .titleMini {
                        width: 300px;
                    }

                    .btn {
                        margin-top:10px;
                        width: 100%;
                        text-align: center;
                        font-size: 14px;
                    }

                    .title { 
                        font-size:30px;
                    }
                }

                @media(max-width: 400px) {
                    .MainBanner { 
                        height: 200px;
                    }
                    .btn {
                        width: 80%;
                    }

                }
            `}</style>
        </>
    )
}