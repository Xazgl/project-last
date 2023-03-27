import Link from "next/link";
import Image from 'next/image';
import banner from '/public/images/komiss.jpg'
import { Dispatch, MouseEventHandler, MutableRefObject, SetStateAction } from "react";

type MuneProps = {
    setShowModal: Dispatch<SetStateAction<boolean>>,
    refs: {
        refForm: MutableRefObject<HTMLDivElement>,
    }
}


export function MainBannerAssistent({ setShowModal, refs }: MuneProps) {

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
          
            </div>

            <style jsx>{`
                .MainBanner {
                    display:flex; 
                    width: 100%;
                    height: 700px;
                    justify-content: center;
                    background-blend-mode: darken;
                    background: rgba(0, 0, 0, 0.304);
                    background-position: center center;
                    background-image: url('${banner.src}');
                    background-repeat: no-repeat;
                    background-color: white;
                    margin-bottom:50px;
                }

                .title {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    color:white;
                    font-family: 'Roboto','sans-serif'; 
                    font-size:55px;
                    font-weight: bold;
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
                    height: 55px;
                    background:#005baa;
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

                @media(max-width: 1200px) {
                    .MainBanner { 
                        background-size: contain;
                        height: 600px;
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
                @media(max-width: 640px) {
                    .title { 
                        font-size:40px;
                    }

                    .titleMini {
                        flex-direction: column;
                        margin-top: 0px;
                        width: 400px;
                    }
                    .MainBanner { 
                        height: 600px;
                    }


                    .btn {
                        margin-top:10px;
                        width: 100%;
                        text-align: center;
                    }
                }
                @media(max-width:400px) {
                    .MainBanner { 
                        height: 350px;
                    }

                    .titleMini {
                        width: 300px;
                    }

                    .btn {
                        margin-top:10px;
                        width: 100%;
                        text-align: center;
                        height: 42px;
                        font-size: 13px;
                    }

                    .title { 
                        font-size:30px;
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