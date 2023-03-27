import { Circle } from "@mui/icons-material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Button, CardMedia, CircularProgress, styled, Typography } from "@mui/material";
import suv from '/public/images/carBodyTyp/suv.svg'
import crossover from '/public/images/carBodyTyp/crossover.svg'
import hatchback from '/public/images/carBodyTyp/hatchback.svg'
import liftback from '/public/images/carBodyTyp/liftback.svg'
import minivan from '/public/images/carBodyTyp/minivan.svg'
import sedan from '/public/images/carBodyTyp/sedan.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { CarUsedInclude } from "../../../../@types/dto";
// import { UsedCars } from "@prisma/client";

type Props = {
    car: CarUsedInclude,
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>,
    setCarImg: Dispatch<SetStateAction<string>>
}


export function InfoCarTableUsed({ car, showModal, setShowModal, setCarImg }: Props) {

    function showModalImg(x) {
        setShowModal(true)
        setCarImg(x)
    }

    function carBodyImgChange(x) {
        if (x === 'Кроссовер 5 дв.') {
            return crossover
        }
        if (x === 'Внедорожник 5 дв.') {
            return suv
        }
        if (x === 'Внедорожник 3 дв.') {
            return suv
        }
        if (x === 'Седан') {
            return sedan
        }
        if (x === 'Хэтчбек 5 дв.') {
            return hatchback
        }
        if (x === 'Хэтчбек 3 дв.') {
            return hatchback
        }
        if (x === 'Лифтбек') {
            return liftback
        }
        if (x === 'Минивен') {
            return minivan
        }

    }


    function matchesEngine(engine) {
        let arr = engine.toString().split(/\s*,\s*/)
        return arr[2].replace(/\s/g, '');
    }


    function diselOrPetrol(engine) {
        let arr = engine.toString().split(/\s*,\s*/)
        return arr[0].replace(/\s/g, '');
    }


    function engineArrStr(engine) {
        let arr = engine.toString().split(/\s*,\s*/)
        return arr[1]
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }));

    return (
        <>
            <div className="background">
                {car !== null ?
                    <>
                        <div className="tablebackground">
                            <div className="headerRowTable">
                                <div className="headerRowEl">
                                    <div className="el" id="complectation">Пробег</div>
                                    <div className="el" style={{ fontSize: '20px', fontWeight: "bold" }}>{car.mileage}</div>
                                </div>
                            </div>
                            <div className="descRowTable">
                                <div className="row">
                                    <div className="column" style={{ width: '300px' }}>
                                        <div className="columnTitle">Цвет кузова</div>
                                        <div className="columnDesc">{car.color}</div>
                                    </div>
                                    <div className="column">
                                        <div className="columnTitle">Год производства</div>
                                        <div className="columnDesc">{car.year}</div>
                                    </div>
                                    <div className="column">
                                        <div className="columnTitle">Кузов</div>
                                        <div className="columnDesc">{car.bodyType}</div>
                                    </div>
                                    <div className="column">
                                        <div className="columnTitle">Привод</div>
                                        <div className="columnDesc">{car.driverType}</div>
                                    </div>
                                    <div className="column">
                                        <div className="columnTitle">Двигатель</div>
                                        <div className="columnDesc">{matchesEngine(car.engine)}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="column" style={{ width: '300px' }}>
                                        <div className="columnTitle"></div>
                                        <div className="columnDesc">

                                        </div>
                                    </div>

                                    <div className="column">
                                        <div className="columnTitle">ПТС</div>
                                        <div className="columnDesc">{car.pts}</div>
                                    </div>
                                    <div className="column">
                                        <div className="columnTitle">Коробка</div>
                                        <div className="columnDesc">{car.gearboxType}</div>
                                    </div>
                                    <div className="column">
                                        <div className="columnTitle">Топливо</div>
                                        <div className="columnDesc">{diselOrPetrol(car.engine)}</div>
                                    </div>
                                    <div className="column">
                                        <div className="columnTitle">Объем двигателя</div>
                                        <div className="columnDesc">{engineArrStr(car.engine)}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="descMobile">
                                <Accordion sx={{ width: '100%' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{ color: '#1565c0' }} />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Технические характеристики</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={4}>
                                                    <Item sx={{ backgroundColor: '#1565c0', color: 'white', fontWeight: 'bold' }}>Цвет кузова</Item>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Item sx={{ backgroundColor: '#1565c0', color: 'white', fontWeight: 'bold' }}>Год </Item>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Item sx={{ backgroundColor: '#1565c0', color: 'white', fontWeight: 'bold' }}>Кузов</Item>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Item>{car.color}
                                                        {/* <Circle sx={{ backgroundColor: `${car.color}`, borderRadius: '50px' }} /> */}
                                                    </Item>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Item sx={{ fontSize: '17px' }}>{car.year}</Item>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Item sx={{ color: 'black' }}>
                                                        {/* {car.CarModification.bodyType} */}

                                                        <img
                                                            width={'100%'}
                                                            height={'100%'}
                                                            className="imgCarType"
                                                            src={carBodyImgChange(car.bodyType).src}
                                                            alt={car.bodyType}
                                                        />
                                                    </Item>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                                                <Grid item xs={4}>
                                                    <Item sx={{ backgroundColor: '#1565c0', color: 'white', fontWeight: 'bold' }}>Двигатель</Item>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Item sx={{ backgroundColor: '#1565c0', color: 'white', fontWeight: 'bold' }}>Привод</Item>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Item sx={{ backgroundColor: '#1565c0', color: 'white', fontWeight: 'bold' }}>Коробка</Item>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Item sx={{ boxShadow: 'none', fontSize: '16x' }}>{matchesEngine(car.engine)}</Item>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Item sx={{ fontFamily: '15px', boxShadow: 'none' }}>{car.driverType}</Item>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Item sx={{ fontFamily: '15px', boxShadow: 'none' }}>{car.gearboxType}</Item>
                                                </Grid>
                                            </Grid>

                                        </Box>

                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </>
                    : <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', widht: '100%', height: "300px" }}>
                        <CircularProgress />
                    </Box>
                }s
            </div>
            <style jsx>{`
                .background {
                    display:flex; 
                    width: 100%;
                    height:auto;
                    flex-direction: column;
                    align-items: center;
                    background-color:#d5d5d55c;
                    justify-content: center;
                }

                .tablebackground {
                    display:flex; 
                    width: 1000px;
                    height:250px;
                    flex-direction: column;
                    border:1px solid #e0e0e0;
                    background-color: white;
                    margin-top:50px;
                }

                .headerRowTable {
                    display: flex;
                    justify-content: start;
                    border-bottom:1px solid #e0e0e0;
                    align-items: center;
                    padding: 17.5px 20px;
                }

                .headerRowEl{
                    display: flex;
                    gap: 15px;
                    align-items: center;
                }

                .descRowTable{
                    display: flex;
                    justify-content: start;
                    align-items: center;
                    padding: 20px;
                    width: 900px;
                    flex-direction: column;
                    gap:20px;
                }

                .column {
                    display: flex;
                    justify-content:center;
                    align-items: start;
                    flex-direction: column;
                    width: 300px;
                    gap: 10px;
                }

                #complectation { 
                    color: '#7b7979'
                }

                .row {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    justify-content: space-between;
                }

                .columnTitle{
                    display: flex;
                    justify-content:center;
                    align-items: center;
                    text-align: center;
                    color:#7b7979;
                    font-weight: 400;
                    font-size: 12px;
                    font-family: 'Roboto','sans-serif'; 
                }

                .columnDesc{
                    display: flex;
                    justify-content:center;
                    align-items: center;
                    text-align: center;
                    font-weight: 700;
                    font-size: 13px;
                    font-family: 'Roboto','sans-serif'; 

                }

                .descMobile {
                    display:none;
                    width: 100%;
                    height: 100%;
                }

                @media (max-width: 1000px) {
                   .tablebackground {
                      width: 800px;
                   }
                   .descRowTable {
                      width: 100%;
                   }
                }

                @media (max-width: 800px) {
                   .tablebackground {
                      width: 100%;
                   }
                   .descRowTable {
                      width: 100%;
                   }
                }

                @media (max-width: 700px) {
                   .descRowTable {
                      display: none;
                   }

                   .descMobile {
                      display:flex;
                   }

                   .tablebackground {
                      height:auto;
                   }

                   .headerRowTable{
                      color:white;
                      background-color: #1565c0;
                   }
                }

               

            `}</style>
        </>)
}


