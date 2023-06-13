import { MutableRefObject } from 'react';
import banner from '/public/images/bannerService.webp'

import Image from 'next/image';


type FormType = {
    refs: {
        refForm: MutableRefObject<HTMLDivElement>,
    }
}


export function ServiceBanner({ refs }: FormType) {



    return (
        <>
            <div className="background">
                {/* <Image className="banner" src={banner} alt="Service Banner" /> */}
                <div className="banner">
                    <div className="banner-overlay"></div>
                    <img src={banner.src} alt="Service Banner" />
                </div>
                <div className='cont'>
                    <h1 className='title'>Сервисный центр АРКОНТ </h1>
                    <button className="btn" onClick={(e) => {
                        e.preventDefault()
                        refs.refForm.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        })
                    }}>Записаться</button>

                </div>
            </div>


            <style jsx>{`
            .background {
                display:flex; 
                width: 100%;
                height: 600px;
                justify-content: center;
                align-items:center;
                flex-direction: column;
                background-position: center center;
                background-repeat:no-repeat;
                background-size:cover;
                position: relative;
               
            }
     
            .banner {
              display: flex;
              width: 100%;
              position: relative;
              overflow: hidden;
              z-index: 1;
            }
    
            .banner-overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.5);
              z-index: 2;    
            }
    
            .banner img {
              position: relative;
              z-index: 3;
              width: 100%;
              height: 100%;
              object-fit: cover;
              filter: blur(2px) brightness(70%);
;

            }

            .cont {
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                margin: 0;
                z-index: 3;
                width: 900px;
            }

            .title {
                display: flex;
                justify-content: center;
                color: white;
                font-size: 50px;
                width: 100%
            }

            .btn {
                display: flex;
                justify-content: center;
                margin-top: 20px;
                padding: 10px 20px;
                background-color: transparent;
                border: 3px solid white;
                color: white;
                font-size: 18px;
                text-decoration: none;
                cursor: pointer;
                width: 40%;
                font-size:30px;
            }
            
            .btn:hover {
                background-color: black;

            }

            @media(max-width: 1000px) {
                .background {
                    height: auto;
                }

                .title{
                    font-size: 35px;
                }

               
            }

            @media(max-width: 700px) {
           
                .title{
                    font-size: 27px;
                }

                .cont {
                  width: 400px;
                }

                .btn {
                   display: none;
                }
            }

            @media(max-width: 450px) {
           
                .cont {
                  width: 250px;
                }

                .title{
                    font-size: 23px;
                }

            }
            `}</style>
        </>
    )
}