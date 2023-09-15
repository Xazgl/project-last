import Link from "next/link";
import Image from 'next/image';
import banner from '/public/images/job2.webp'

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
                    <div >АРКОНТ ВАКАНСИИ</div>
                    <div className="titleMini">
                        <div className="сol">
                            <button className="btn">Найти вакансию</button>
                        </div>
                        <div className="сol">
                            <button className="btn" id="btn2">О компании</button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .MainBanner {
                    display:flex; 
                    width: 100%;
                    height:600px;
                    justify-content: start;
                    padding-left: 13%;
                    background-blend-mode: darken;
                    background: rgba(0, 0, 0, .00);
                    background-position: center center;
                    background-image: url('${banner.src}');
                    background-repeat: no-repeat;
                    background-size: cover;
                    border-radius: 10px;
                }

                .title {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    color:black;
                    font-family: 'Gilroy','sans-serif'; 
                    font-size:45px;
                    font-weight: bold;
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
                    width: 230px;
                    height: 45px;
                    background:  #131313;
                    border: 2px solid  #131313;
                    font-weight: bold;
                    margin-top:35px;
                    color:white;
                    cursor: pointer;
                    font-size: 16px;
                    border-radius: 10px;
                }

                #btn2{
                    background: white;
                    color: #131313;
                }

                .btn:hover{
                    transform: scale(0.99);                 
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
                    .MainBanner { 
                       height: 500px;
                    }
                }


                @media(max-width: 720px) {
                    .title { 
                        font-size:35px;
                        text-align: start;
                        color:white;

                    }
                    .titleMini {
                        font-size:15px;
                        margin-top: 15px;
                    }
                    
                    .MainBanner { 
                        height: 100%;
                        padding-left: 10%;
                        background-blend-mode: darken;
                        background: rgba(0, 0, 0, .30);
                        background-position: center center;
                        background-image: url('${banner.src}');
                        background-repeat: no-repeat;
                        justify-content: center;
                    }
                    .titleMini {
                        flex-direction: column;
                        margin-top: 5px;
                   }

                   .btn {
                      width:300px;
                   }
                }

                @media(max-width: 500px) {
                   .btn {
                      width:300px;
                   }
                

                   .MainBanner {
                      justify-content: center;
                      padding-left:0px;
                   }
                }

                @media(max-width: 400px) {
                   .btn {
                      width: 250px;
                   }
                   .title {
                         font-size: 30px;
                   }
                }

                @media(max-width: 320px) {
                   .btn {
                      width: 210px;
                   }
                   .title {
                         font-size: 25px;
                   }
                }
               
            `}</style>
        </>
    )
}