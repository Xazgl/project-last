import Link from 'next/link'
import banner from '/public/images/catalogPages/baic/bannerDesktop.png'
import bannerMobile from '/public/images/catalogPages/geely/bannerMobile.webp'
import { AnimatedText } from '../../all/textDec/AnimateTxt'
import { Circle } from '@mui/icons-material'

export function BaicImgDesktop() {


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

                    <Link href="/brands/baic">
                        <a className="menuRoad" rel="noopener noreferrer" >
                            Модельный ряд BAIC
                        </a>
                    </Link>
                </div>
                <div className='title'>
                    <span>
                        <AnimatedText text={` Каталог BAIC в   `} interval={100} />
                        <Link href="https://yandex.ru/maps/38/volgograd/?from=api-maps&ll=44.497791%2C48.736807&mode=routes&origin=jsapi_2_1_79&rtext=~48.772454%2C44.567981&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzgzMDAzMxJY0KDQvtGB0YHQuNGPLCDQktC-0LvQs9C-0LPRgNCw0LQsINC_0YDQvtGB0L_QtdC60YIg0LjQvNC10L3QuCDQki7QmC4g0JvQtdC90LjQvdCwLCAxMTPQlCIKDZxFMkIV_hZDQg%2C%2C&z=13">
                            <a className="city" rel="noopener noreferrer" >
                                Волгограде
                            </a>
                        </Link>
                        <a> и </a>
                        <Link href="https://yandex.ru/maps/38/volgograd/?from=api-maps&ll=44.601231%2C48.736807&mode=routes&origin=jsapi_2_1_79&rtext=~48.757240%2C44.790844&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNjI4MzMwMzI5EnjQoNC-0YHRgdC40Y8sINCS0L7Qu9Cz0L7Qs9GA0LDQtNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQktC-0LvQttGB0LrQuNC5LCDQv9GA0L7RgdC_0LXQutGCINC40LzQtdC90Lgg0JvQtdC90LjQvdCwLCAzNTkiCg3UKTNCFWoHQ0I%2C&z=11.86">
                            <a className="city" rel="noopener noreferrer" >
                                 Волжском
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