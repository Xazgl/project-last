import { Sales } from '@prisma/client'
import { Dispatch, SetStateAction, useState } from 'react'
import banner from '/public/images/10.jpg'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from 'next/link';
import { AllSaleDto } from '../../../@types';
import { GetServerSideProps } from 'next';
import db from '../../../prisma';

type SalesProps = {
    sales?: Sales[];
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Все',
    'Кузовные работы',
    'Диагностика',
    'Покраска',
    'Агрегатный ремонт'
];



function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


export function Cards({ sales }: SalesProps) {
    const theme = useTheme();
    const [filterName, setFilterName] = React.useState([]);
    const [mainFilt, setMainFilt] = useState(0)// id фильтра 

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setFilterName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    }

    if (Array.isArray(sales) && sales.length > 0) {
        return (
            <>
                <div className="mainNam">АКЦИИ</div>
                <div className='selector'>
                    <div className='posSelect'>
                     
                        <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-name-label">Акции</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            value={filterName}
                            onChange={handleChange}
                            input={<OutlinedInput label="Name" />}
                            MenuProps={MenuProps}
                            sx={{
                                color: 'white',
                                border: 'solid 2px white',
                                background: 'white',
                                fontFamily: [
                                    'TacticSans-Reg',
                                    'sans-serif',
                                ].join(','),
                            }}
                        >
                            {names.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, filterName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl> 
                    </div>
                </div>

                <div className="background">
                    <div className="cards">
                        {
                            sales.map(sale => {
                                return <div className="card" id="c1" >
                                    <div className="column" id="imgColumn">
                                        <img style={{ backgroundSize: 'cover', width: '100%', height: '100%'}} src={'/uploads/' + sale.img} />
                                    </div>
                                    <div className="column" id="contentColumn">
                                        <div className='titleCard'>{sale.title}</div>
                                        <div className='textCard'>{sale.shortDesc}</div>
                                        <div className='row'>
                                            <div className='salesDiv'>ДО 20%</div>
                                            <div className='btnDiv'>
                                                <Link href={{
                                                    pathname: '/card/[id]',
                                                    query: { id: sale.id }
                                                }}>
                                                    <button className='btnModal'>ПОЛУЧИТЬ 	 &#10095;</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                        <div className="card" id="c4">
                            <div className="column" id="contentColumn">
                                <div className='titleCard'>АРКОНТ CHERY АКЦИИ</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="card" id="c1" >
                        <div className="column" id="imgColumn"></div>
                        <div className="column" id="contentColumn">
                            <div className='titleCard'>Давайте знакомится</div>
                            <div className='textCard'>Скидка 20% на все работы и запчасти при первом обслуживании в нашем сервисе</div>
                            <div className='row'>
                                <div className='salesDiv'>ДО 20%</div>
                                <div className='btnDiv'>
                                    <button className='btnModal'>ПОЛУЧИТЬ 	 &#10095;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" id="c2">
                        <div className="column" id="imgColumn"></div>
                        <div className="column" id="contentColumn">
                            <div className='titleCard'>Давайте знакомится</div>
                            <div className='textCard'>Скидка 20% на все работы и запчасти при первом обслуживании в нашем сервисе</div>
                            <div className='row'>
                                <div className='salesDiv'>ДО 20%</div>
                                <div className='btnDiv'>
                                    <button className='btnModal'>ПОЛУЧИТЬ 	 &#10095;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" id="c3" >
                        <div className="column" id="imgColumn"></div>
                        <div className="column" id="contentColumn">
                            <div className='titleCard'>Давайте знакомится</div>
                            <div className='textCard'>Скидка 20% на все работы и запчасти при первом обслуживании в нашем сервисе</div>
                            <div className='row'>
                                <div className='salesDiv'>ДО 20%</div>
                                <div className='btnDiv'>
                                    <button className='btnModal'>ПОЛУЧИТЬ 	 &#10095;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" id="c4">
                        <div className="column" id="imgColumn"></div>
                        <div className="column" id="contentColumn">
                            <div className='titleCard'>Давайте знакомится</div>
                            <div className='textCard'>Скидка 20% на все работы и запчасти при первом обслуживании в нашем сервисе</div>
                            <div className='row'>
                                <div className='salesDiv'>ДО 20%</div>
                                <div className='btnDiv'>
                                    <button className='btnModal'>ПОЛУЧИТЬ 	 &#10095;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}



                <style jsx>{`

                .background {
                    display:flex; 
                    width: 100%;
                    height: 900px;
                    justify-content: center;
                    align-items:center;
                    background-color:#3d3d3d;
                }

                .selector {
                    display:flex; 
                    width: 100%;
                    background-color:#3d3d3d;
                    justify-content:center;
                    align-items:center;
                    padding-top: 30px;
                }

                .posSelect {
                    width: 550px;
                    justify-content:start;
                    align-items:center;
                }

                .mainNam {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color:white;
                    font-family: 'TacticSans-Reg','sans-serif'; 
                    font-size:50px;
                    text-align: center;
                    background-color:#3d3d3d;
                    padding-top: 74px;
                }

                .cards {
                    display:flex; 
                    width: 900px;
                    height:1100px;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                }

                .card {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    align-items:center;
                    width:550px;
                    height:230px;
                    background:white;
                    transition:margin-bottom 500ms;
                    margin-top:-10em;
                    position:relative;
                    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
                    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
                     box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
                    border-radius:13px;
                    background: #f6f3ef;
                }

                #contentColumn{
                    width:60%;
                    padding: 18px;
                    padding-right: 25px;
                }

                #imgColumn{
                    width:40%;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                 
                    height: 100%;

                }
                .column {
                    display:flex;
                    justify-content:center;
                    flex-direction:column;
                    align-items:center;
                }

                .titleCard {
                    display:flex;
                    justify-content:center;
                    flex-direction:;
                    align-items:center;
                    flex-direction:row;
                    font-size:22px; 
                    font-weight:bold;
                    color:#1b1b1b;
                }

                .textCard {
                    display:flex;
                    justify-content:center;
                    flex-direction:;
                    align-items:center;
                    flex-direction:row;
                    font-size:16px; 
                    color:#1b1b1b;
                    margin-top:10px;
                }

                .row {
                    display:flex;
                    flex-direction:row;
                    align-items:center;
                    justify-content:space-between;
                    width: 100%;
                    margin-top:20px;
                }
                .salesDiv {
                    display:flex;
                    justify-content:center;
                    flex-direction:;
                    align-items:center;
                    flex-direction:row;
                    font-size:30px; 
                }

                .btnDiv {
                    display:flex;
                    justify-content:center;
                    flex-direction:;
                    align-items:center;
                    flex-direction:row;
                }

                .btnModal {
                    display: flex;
                    display:flex;
                    justify-content:center;
                    flex-direction:;
                    align-items:center;
                    flex-direction:row;
                    font-family: 'OpelNextW01-Regular', sans-serif;
                    transition: transform.3s;
                    width: 140px;
                    height: 40px;
                    background: transparent;
                    border: 1px solid;
                    color: color:#1b1b1b;
                    font-weight: bold;
                }

                #c1:hover{
                 margin-bottom: 9em;
                 -webkit-box-shadow: 4px -25px 8px 0px rgba(34, 60, 80, 0.2);
                  -moz-box-shadow: 4px -25px 8px 0px rgba(34, 60, 80, 0.2);
                  box-shadow: 4px -25px 8px 0px rgba(34, 60, 80, 0.2);
               
                }

                #c2:hover{
                    margin-bottom: 9em;
                    -webkit-box-shadow: 4px -25px 8px 0px rgba(34, 60, 80, 0.2);
                    -moz-box-shadow: 4px -25px 8px 0px rgba(34, 60, 80, 0.2);
                    box-shadow: 4px -25px 8px 0px rgba(34, 60, 80, 0.2);
                }

                #c3:hover{
                    margin-bottom: 9em;
                    -webkit-box-shadow: 4px -25px 8px 0px rgba(34, 60, 80, 0.2);
                   -moz-box-shadow: 4px -25px 8px 0px rgba(34, 60, 80, 0.2);
                  box-shadow: 4px -25px 8px 0px rgba(34, 60, 80, 0.2);
                
                }

                #c4:hover{}

                .title {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    color:white;
                    font-family: 'TacticSans-Reg','sans-serif'; 
                    font-size:55px;
                    font-weight: bold;
                }
                .titleMini {
                    display:flex;
                    justify-content:center;
                    flex-direction:column;
                    color:white;
                    margin-top:100px;
                    font-family: 'TacticSans-Reg','sans-serif'; 
                    font-size:20px;
                    font-weight: bold;
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

    return <div>Акции не обнаружены</div>
}