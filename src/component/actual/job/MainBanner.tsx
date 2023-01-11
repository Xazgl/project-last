import Link from "next/link";
import Image from 'next/image';
import banner from '/public/images/job.webp'

export function MainBanner() {
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
                       <div>АРКОНТ ВАКАНСИИ</div>
                        <div className="titleMini">
                          <div  className="сol">
                            <button className="btn">Найти вакансию</button>
                          </div>
                          <div  className="сol">
                            <button  className="btn">О компании</button>
                          </div>
                        </div>
                   </div>
            </div>

            <style jsx>{`
                .MainBanner {
                    display:flex; 
                    width: 100%;
                    height: 600px;
                    justify-content: center;
                    background-blend-mode: darken;
                    background: rgba(0, 0, 0, .50);
                    background-position: center center;
                    background-image: url('${banner.src}');
                    
                }
                .title {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    color:white;
                    font-family: 'OpelNextW01-Regular', 'sans-serif';
                    font-size:55px;
                    font-weight: bold;
                }
                .titleMini {
                    display:flex;
                    justify-content:space-between;
                    flex-direction:row;
                    color:white;
                    margin-top:100px;
                    font-family: 'OpelNextW01-Regular', 'sans-serif';
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
                    font-family: 'OpelNextW01-Regular', 'sans-serif';
                    transition: transform.3s;
                    width: 230px;
                    height: 52px;
                    background: transparent;
                    border: 1px solid white;
                    font-weight: bold;
                    margin-top:35px;
                    color:white;
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