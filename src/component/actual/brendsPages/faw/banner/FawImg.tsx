import Link from 'next/link'
import banner from '/public/images/catalogPages/faw/bannerDesktop.png'
import bannerMobile from '/public/images/catalogPages/geely/bannerMobile.webp'
import { AnimatedText } from '../../all/textDec/AnimateTxt'
import { Circle } from '@mui/icons-material'

export function FawImgDestop() {


    return (
        <>
            <div className="background">
                <div className='road'>
                    <Link href="/">
                        <a className="menuRoad" rel="noopener noreferrer" >
                            Главная
                        </a>
                    </Link>

                    <Circle sx={{fontSize:'8px',color:'#0c54a0'}}/>

                    <Link href="/brands/all">
                        <a className="menuRoad" rel="noopener noreferrer" >
                            Каталог
                        </a>
                    </Link>

                    <Circle sx={{fontSize:'8px',color:'#0c54a0'}}/>

                    <Link href="/brands/geely">
                        <a className="menuRoad" rel="noopener noreferrer" >
                            Модельный ряд FAW
                        </a>
                    </Link>
                </div>
                <div className='title'>
                    <span>
                        <AnimatedText text={` Каталог FAW в   `} interval={100} />
                        <Link href="https://yandex.ru/maps/38/volgograd/?from=api-maps&ll=44.438373%2C48.705594&mode=routes&origin=jsapi_2_1_79&rtext=~48.705594%2C44.438373&rtt=auto&ruri=~&z=16">
                            <a className="city" rel="noopener noreferrer" >
                                Волгограде
                            </a>
                        </Link>
                    </span>
                </div>
                <div className="banner">
                    <div className="title">
                    </div>
                </div>
                <div className="bannerMobile">
                </div>
            </div>

            <style jsx>{`

                .background{
                    display:flex; 
                    width: 100%;
                    flex-direction: column;
                    align-items: start;
                    margin-top:30px;
                }

                .road{
                    display: flex;
                    justify-content: start;
                    gap:10px;
                    align-items: center;
                }

                .menuRoad{
                    display: flex;
                    text-decoration: none;
                    color:black;
                }

                .title{
                    display: flex;
                    flex-direction: row;
                    justify-content: start;
                    font-size:25px;
                    font-weight: 600;
                    font-family: 'Roboto','sans-serif'; 
                    margin-top:20px;
                    
                }

                .city {
                    color: #0c54a0;
                    position: relative;
                    text-decoration: none;
                }
              
                .city::after {
                    content: '';
                    position: absolute;
                    bottom: -1px;
                    left: 0;
                    width: 100%;
                    border-bottom: 1px solid #0c54a0;
                }   

                .banner {
                    display:flex; 
                    width: 100%;
                    height: 400px;
                    justify-content: center;
                    background-color:black;
                    background-position: center center;
                    background-image: url('${banner.src}');
                    background-repeat: no-repeat;
                    background-size: cover;
                    padding-top: 42px;
                    margin-top: 30px;
                }

             .bannerMobile {
                    display:none; 
                    width: 100%;
                    height: 00px;
                    justify-content: center;
                    background-color:black;
                    background-position: center center;
                    background-image: url('${bannerMobile.src}');
                    background-repeat: no-repeat;
                    background-size: cover;
                    padding-top: 42px;
                    }

                
                .title {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    color:black;
                    font-family: 'Montserrat'; 
                }

                @media(max-width: 1300px) {
                    .banner {
                        height: 300px;
                    }
                }
                @media(max-width: 900px) {
                    .banner {
                        height: 200px;
                    }
                }
            
                
                @media(max-width: 600px) {
                    .banner {
                        height: 150px;
                    }
                    .title {
                         font-size: 20px;
                    }
                    .menuRoad{
                        font-size: 14px;
                    }
                }

                 
                @media(max-width: 450px) {
                    .banner {
                        height: 100px;
                    }
                    .title {
                         font-size: 18px;
                    }
                    .menuRoad{
                        font-size: 12px;
                    }
                }

                @media(max-width: 350px) {
                    .title {
                         font-size: 16px;
                    }
                    .menuRoad{
                        font-size: 10px;
                    }
                }

            `}</style>
        </>
    )
}