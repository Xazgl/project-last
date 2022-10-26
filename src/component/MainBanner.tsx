import Link from "next/link";
import Image from 'next/image';
import { MutableRefObject, useEffect, useMemo, useState } from "react";
import service from '/public/images/l.jpg';
import banner from '/public/images/banner.webp'



type BannerTopProps = {
    refs: { 
        refTop: MutableRefObject<HTMLDivElement>,
    } 
}


export function MainBanner({refs}:BannerTopProps) {

    const [utm, setUtm] = useState('')
    const [pic, setPic] = useState(`${banner.src}`)

    console.log(pic)

    type keyWordsUtm = {
        id: number,
        name: string,
        img: string,
    }

    const keyWordsList: keyWordsUtm[] = [
        {
            id: 1,
            name: 'масл',
            img: `${service.src}`,
        },
        {
            id: 2,
            name: 'диагностик',
            img: `${service.src}`,
        },
        {
            id: 3,
            name: 'ремонт',
            img: `${service.src}`,
        },
        {
            id: 4,
            name: 'кузов',
            img: `${service.src}`,
        },
        {
            id: 5,
            name: 'шиномонтаж',
            img: `${service.src}`,
        },
    ]




    useEffect(() => {
        let utmKeywordsStr = new URLSearchParams(location.search).get('utm_term')
        if (utmKeywordsStr !== null) {
            keyWordsList.map(keyWord => {
                let myReg = new RegExp(keyWord.name)
                let found = utmKeywordsStr.match(myReg)
                if (found !== null) {
                    const answer = found[0]
                    console.log(answer)
                    setUtm(answer)
                    return console.log(utm)
                }
            })
        } else {
            return console.log('пустой запрос')
        }
    }, [])

    const img = useMemo(() => keyWordsList.find(model => model.name === utm)?.img, [utm])

    useEffect(() => {
        // let firstRender = true
        if (utm !== '') {
            console.log(pic)
            setPic(img)
            // fetch('').then(res => res.json()).then(res => {
            //     if (!firstRender) setPic(img)
            // })
            //console.log(pic)
        } else {
            setPic(`${banner.src}`)
        }
        // return () => {
        //     firstRender = false
        // }
    }, [utm])

    return (
        <>
            <div className="MainBanner"  ref={refs.refTop}>
                <div className="title">
                    <div>АРКОНТ ОФИЦИАЛЬНЫЙ СЕРВИС CHERY</div>
                    <div className="titleMini">
                        <div>Ждем Вас</div>
                        <div>Ежедневно с 8:00 до 20:00</div>
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
                    background-image: url('${pic}');
                    background-repeat:no-repeat;
                    background-size:cover;   
                }
                .title {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    color:white;
                    font-family: 'TacticSansExd-RegIt','sans-serif'; 
                    font-size:55px;
                    text-align: center;

                }
                .titleMini {
                    display:flex;
                    justify-content:center;
                    flex-direction:column;
                    color:white;
                    margin-top:100px;
                    font-family: 'TacticSans-RegIt','sans-serif'; 
                    font-size:20px;
                    text-align: center;
                }
                .ImgBanner2{
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