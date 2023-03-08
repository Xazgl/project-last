import { Button, Link } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import banner from '/public/images/numbers/vse_nomera.png'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

import dynamic from 'next/dynamic';



type Props = {
    setShowModal: Dispatch<SetStateAction<boolean>>,
}

export function ProtectionTxt({ setShowModal }: Props) {

    function showModal(event) {
        event.preventDefault()
        setShowModal(true)
    }

    return (
        <>
            <div className="background">
                <div className="txt">
                    <p className="title">Охрана труда</p>
                </div>
                {/* <div className="banner"></div> */}
                <div className="txt">
                    <ul>Политика по охране труда и результаты спец. оценки рабочих мест:

                        <li>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ backgroundColor: '#3d3d3d', color: 'white' }}
                                >
                                    <Typography sx={{ fontWeight: 'bold' }}>ООО «Арконт ВВ»</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        <Link href={'https://docs.yandex.ru/docs/view?url=ya-browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruDkVxRrTn3ln7ZrK5D6l2BNW4JeAtPKo06mMM1xnxFWUGnwqgoaWTushEU33P0xV58OpsL4EhXVx6mpc4GyT_i_FF-69YFKatbdyrnxuc-9_F60Djp77BuaEPKf7grpAZA%3D%3D%3Fsign%3DQwYK3_f0Hy0httIWGpZxP3qM7Rj7aLjV-jDN1fJfuHg%3D&name=Политика%20ОТ%20для%20Арконт%20ВВ(1).docx&nosw=1'}>
                                            <li>Политика ОТ Арконт ВВ</li>
                                        </Link>
                                        <Link href={"/uploads/files/arkont_BB/2019.pdf"}>
                                            <li><PictureAsPdfIcon sx={{color:'#ff0000ad'}}/>Сводная ведомость 2019 года результатов оценки труда Акронт ВВ</li>
                                        </Link>
                                        <Link href={"/uploads/files/arkont_BB/2017.pdf"}>
                                            <li><PictureAsPdfIcon sx={{color:'#ff0000ad'}}/>Сводная ведомость 2017 года результатов оценки труда Акронт ВВ </li>
                                        </Link>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        </li>
                        <li>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ backgroundColor: '#3d3d3d', color: 'white' }}
                                >
                                    <Typography sx={{ fontWeight: 'bold' }}>ООО «Арконт Д»</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        <Link href={"/uploads/files/arkont_D/politics.docx"}>
                                            <li>Политика ОТ Арконт Д</li>
                                        </Link>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        </li>

                        <li>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ backgroundColor: '#3d3d3d', color: 'white' }}
                                >
                                    <Typography sx={{ fontWeight: 'bold' }}>ООО «Арконт М»</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        <Link href={"/uploads/files/arkont_M/politics.docx"}>
                                            <li>Политика ОТ Арконт М</li>
                                        </Link>
                                        <Link href={"/uploads/files/arkont_M/M_2018.pdf"}>
                                            <li><PictureAsPdfIcon sx={{color:'#ff0000ad'}}/>Сводная ведомость 2018 года результатов оценки труда Акронт М</li>
                                        </Link>
                                        <Link href={"/uploads/files/arkont_M/2018_M2.pdf"}>
                                            <li><PictureAsPdfIcon sx={{color:'#ff0000ad'}}/>Сводная ведомость 2018 года результатов оценки труда Акронт М Филиал 2</li>
                                        </Link>
                                        <Link href={"/uploads/files/arkont_M/2018_M1.pdf"}>
                                            <li><PictureAsPdfIcon sx={{color:'#ff0000ad'}}/>Сводная ведомость 2018 года результатов оценки труда Акронт М Филиал 1</li>
                                        </Link>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        </li>

                        <li>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ backgroundColor: '#3d3d3d', color: 'white' }}
                                >
                                    <Typography sx={{ fontWeight: 'bold' }}>ООО «Арконт Р»</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        <Link href={"/uploads/files/arkont_P/politics.docx"}>
                                            <li>Политика ОТ Арконт Р</li>
                                        </Link>
                                        <Link href={"/uploads/files/arkont_P/2018_P.pdf"}>
                                            <li><PictureAsPdfIcon sx={{color:'#ff0000ad'}}/>Сводная ведомость 2018 года результатов оценки труда Акронт Р</li>
                                        </Link>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        </li>

                        <li>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ backgroundColor: '#3d3d3d', color: 'white' }}
                                >
                                    <Typography sx={{ fontWeight: 'bold' }}>ООО «Арконт Шина»</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        <Link href={"/uploads/files/arkont_tires/politics.docx"}>
                                            <li>Политика ОТ Арконт Шина</li>
                                        </Link>
                                        <Link href={"/uploads/files/arkont_tires/2017.pdf"}>
                                            <li><PictureAsPdfIcon sx={{color:'#ff0000ad'}}/>Сводная ведомость 2017 года результатов оценки труда Акронт Шина</li>
                                        </Link>
                                        <Link href={"/uploads/files/arkont_tires/2020.pdf"}>
                                            <li><PictureAsPdfIcon sx={{color:'#ff0000ad'}}/>Сводная ведомость 2020 года результатов оценки труда Акронт Шина</li>
                                        </Link>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        </li>

                        <li>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ backgroundColor: '#3d3d3d', color: 'white' }}
                                >
                                    <Typography sx={{ fontWeight: 'bold' }}>ООО «Арконт ЯРЛ»</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        <Link href={"/uploads/files/arkont_jrl/politics.docx"}>
                                            <li>Политика ОТ Арконт ЯРЛ</li>
                                        </Link>
                                        <Link href={"/uploads/files/arkont_jrl/ved.pdf"}>
                                            <li><PictureAsPdfIcon sx={{color:'#ff0000ad'}}/>Сводная ведомость результатов оценки труда Акронт ЯРЛ</li>
                                        </Link>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        </li>

                        <li>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ backgroundColor: '#3d3d3d', color: 'white' }}
                                >
                                    <Typography sx={{ fontWeight: 'bold' }}>ООО «Концепт СТ»</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        <Link href={"/uploads/files/konsept_CT/politics.docx"}>
                                            <li>Политика ОТ Концепт СТ</li>
                                        </Link>
                                        <Link href={"/uploads/files/konsept_CT/17.pdf"}>
                                            <li><PictureAsPdfIcon sx={{color:'#ff0000ad'}}/>Сводная ведомость 2017 года результатов оценки труда Концепт СТ</li>
                                        </Link>
                                        <Link href={"/uploads/files/konsept_CT/2019.pdf"}>
                                            <li><PictureAsPdfIcon sx={{color:'#ff0000ad'}}/>Сводная ведомость 2019 года результатов оценки труда Концепт СТ</li>
                                        </Link>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        </li>

                        <li>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ backgroundColor: '#3d3d3d', color: 'white' }}
                                >
                                    <Typography sx={{ fontWeight: 'bold' }}>ООО «Арконт В»</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        <Link href={"/uploads/files/arkont_B/politics.docx"}>
                                            <li>Политика ОТ Арконт В</li>
                                        </Link>
                                        <Link href={"/uploads/files/arkont_B/2018.pdf"}>
                                            <li><PictureAsPdfIcon sx={{color:'#ff0000ad'}}/>Сводная ведомость результатов оценки труда Арконт В</li>
                                        </Link>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        </li>
                        {/* <li>
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
                        </li> */}
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

                ul{
                    line-height: 1.6666666667rem;
                    margin-bottom: 0.8333333333rem;
                    font-size: 22px;
                } 

                li {
                    list-style: none;
                    line-height: 1.6666666667rem;
                    margin-bottom: 0.8333333333rem;
                    font-size: 18px;
                    margin-top:30px;
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