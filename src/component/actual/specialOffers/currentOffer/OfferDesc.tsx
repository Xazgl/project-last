
import pic1 from '/public/images/logo-assistent/1.png';
import pic2 from '/public/images/logo-assistent/2.png';
import pic3 from '/public/images/logo-assistent/3.png';
import pic4 from '/public/images/logo-assistent/4.png';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { Button, CircularProgress } from '@mui/material';
import { Offer } from '@prisma/client';
import { draftjsToMd, mdToDraftjs } from 'draftjs-md-converter';
import { ContentState, convertToRaw, EditorState } from 'draft-js';
import { MutableRefObject, useEffect, useState } from 'react';

;
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import { read } from 'fs';
import { unified } from 'unified';

type Props = {
    offer: Offer,
    refForm:MutableRefObject<HTMLDivElement>,
}


export function OfferDesc({ offer, refForm }: Props) {

    const [desc, setDesc] = useState()

//     useEffect(() => {
//         async function main() {
//             const file = await unified()
//                 .use(remarkParse)
//                 .use(remarkHtml)
//                 // .process(await read(offer.description))        
//     console.log(file)
// }
//         // if (offer.description) {
//         //     main()
//         // }
//     }, [])


return (
    <>
        <div className="background">
            {offer !== null ?
                <div className="blockDesc">
                    <p>{offer.description}</p>
                    {/* <p className='title'>
                       {offer.shortDesc}
                    </p>
                    <ul><p className="titleMini">АВАРИЙНЫЙ КОМИССАР «АРКОНТ» ПОМОЖЕТ ВАМ:</p>
                        <li> <DoneOutlineIcon sx={{ color: '#0000CD', fontSize: '14px' }} /> вызвать сотрудников ГИБДД на место ДТП</li>
                        <li><DoneOutlineIcon sx={{ color: '#0000CD', fontSize: '14px' }} />правильно оформить все документы для возмещения ущерба</li>
                        <li><DoneOutlineIcon sx={{ color: '#0000CD', fontSize: '14px' }} />дать объяснения сотрудникам ГИБДД</li>
                        <li><DoneOutlineIcon sx={{ color: '#0000CD', fontSize: '14px' }} /> отстоять вашу точку зрения в случае психологического давления</li>
                        <li><DoneOutlineIcon sx={{ color: '#0000CD', fontSize: '14px' }} />провести необходимые замеры и фото-, видеосъёмку</li>
                        <li><DoneOutlineIcon sx={{ color: '#0000CD', fontSize: '14px' }} />при необходимости эвакуировать автомобиль с места ДТП</li>
                        <li><DoneOutlineIcon sx={{ color: '#0000CD', fontSize: '14px' }} />рассчитать предварительную стоимость ремонта</li>
                    </ul>
                    <h4 style={{ color: '#0000CD' }}>
                        ТЕЛЕФОН: +7(8442)52−45−44
                    </h4> */}

                    <div className='divBtn'>
                        <Button
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                width: '100%',
                                height: '100%',
                                fontSize: '16px',
                                fontFamily: 'Roboto'
                            }}
                            onClick={
                                (e) => {
                                    e.preventDefault()
                                    refForm.current.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'center',
                                        inline: 'center'
                                    })
                                }
                            }
                            variant="contained"
                            href="tel:+78442524544">Связаться</Button>
                    </div>
                </div>
                : <CircularProgress />
            }
        </div>

        <style jsx>{`
                .background {
                    display:flex;
                    justify-content:center;
                    width:100%;
                    height:auto;
                    margin-top:50px;
                    padding-top: 20px;
                    padding-bottom: 20px;
                }

                .title {
                    display:flex;
                    text-align: start;
                    font-size:18px;
                    justify-content: start;
                    color: #2e2d2d;
                }

                .titleMini {
                    display:flex;
                    text-align: start;
                    font-size:18px;
                    justify-content: start;
                    color: #0000CD;
                }

                .blockDesc{
                    display:flex;
                    align-items: start;
                    flex-direction: column;
                    gap:20px;
                    width:1000px;
                    height:auto;
                }

                .column {
                    display:flex;
                    flex-direction: column;
                    align-items:center;
                    text-align: center;
                }

                ul{
                    list-style: none;
                }

                li {
                    display: flex;
                    align-items: center;
                    justify-content: start;
                    margin-top:15px;
                }

                .divBtn{
                    display: flex;
                    width: 300px;
                    height: 40px;
                    margin-top: 15px;
                }

              


           @media(max-width: 900px) {
                .imgContainer{
                    width: 600px;
                }

               .img{
                    height: 150px;
                    width: 150px;
                }

                .blockDesc{
                    width: 600px;
                }
            }

           @media(max-width: 650px) {
                .imgContainer{
                        width:100%;
                        flex-direction: column;
                        margin-top: 20px;
                }
                .desc {
                    justify-content: center;
                    width: 100%;
                    padding: 10px;
                }

                .blockDesc{
                    width: 400px;
                }


                .titleMini {
                    font-size:16px;
                }
            }

           @media(max-width: 440px) {
                .desc {
                  font-size: 13px;
                }
                .blockDesc{
                    width: 300px;
                }
           }

           
           @media(max-width: 300px) {
                .blockDesc{
                    width: 250px;
                }
                .title {
                    font-size: 14px; 
                }
                .divBtn {
                    width:250px;
                }
                h4 {
                    font-size: 14px;  
                }
           }

        `}</style>
    </>
)
}