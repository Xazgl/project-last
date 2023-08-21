import { Job } from '@prisma/client'
import { Dispatch, SetStateAction, useState, MouseEvent } from 'react'
import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { GetServerSideProps } from 'next/types';
import Link from 'next/link';

type JobProps = {
    setShowModal: Dispatch<SetStateAction<boolean>>;
    job?: Job[];
    // isAdmin?: boolean;
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

const names = {
    ARKONT_GK: 'ГК Арконт',
    ARKONT_VOLZSKY: 'Renault Арконт Волжский',
    ARKONT_KIA: 'KIA Арконт',
    ARKONT_NISSAN: 'Nissan Арконт',
};
// const names = [
//     'ГК Арконт',
//     'Renault Арконт Волжский',
//     'KIA Арконт',
//     'Nissan Арконт',
//     'Hyundai Арконт',
//     'Mitsubishi Арконт',
//     'Chery & EXEED Арконт',
//     'Land Rover & Jaguar Арконт',
//     'OPEL Арконт',
// ];

const exp = {
    ZERO: 'Без опыта',
    BEGINNER: 'от 1 года',
    MIDDLE: 'от 3 лет',
};

const city = {
    VOLGOGRAD: 'Волгоград',
    VOLZSKY: 'Волжский',
};

function getStyles(name: string, selectName: string, theme: Theme) {
    return {
        fontWeight:
            selectName === name
                ? theme.typography.fontWeightMedium
                : theme.typography.fontWeightRegular
    };
}

export function CardsOffers({ setShowModal, job }: JobProps) {
    const theme = useTheme();
    const [officeSelect, setOfficeSelect] = React.useState('');
    const [expSelect, setExpSelect] = React.useState('');
    const [citySelect, setCitySelect] = React.useState('');
    // const [salaries, setSalaries] = React.useState(job);

   
    const findObjKey =  (obj: { [key: string]: string }, value: string) => {
        return Object.keys(obj).find(key => obj[key] === value);
      }

      
    const handleSelect = async (event: SelectChangeEvent<string>, setState: Dispatch<SetStateAction<string>>) => {
        setState((event.target.value))
        console.log(officeSelect)
        console.log(expSelect)
        console.log(citySelect)
        const res = await fetch(`/api/filter?${officeSelect ? `office=${findObjKey(names, officeSelect)}&` : ''
            + citySelect ? `city=${findObjKey(city, citySelect)}&` : ''
                + expSelect ? `office=${findObjKey(exp, expSelect)}&` : ''
            }`)
        if (res.ok) {
            const salariesFromDB = await res.json() as Job[]
            // setSalaries(salariesFromDB)
            console.log(salariesFromDB);

        }
    }



    if (Array.isArray(job) && job.length > 0) {

        return (
            <>
                <div className="cardBlock" id="black">ВАКАНСИИ</div>
                <div className="cardBlock">
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-name-label">ДЦ</InputLabel>
                        <Select
                            name=''
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            // multiple
                            value={officeSelect}
                            onChange={e => handleSelect(e, setOfficeSelect)}
                            input={<OutlinedInput label="Name" />}
                            MenuProps={MenuProps}
                        >
                            {Object.values(names).map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, officeSelect, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-name-label">Стаж</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            // multiple
                            value={expSelect}
                            onChange={e => handleSelect(e, setExpSelect)}
                            // onChange={e => setExpSelect(e.target.value)}
                            input={<OutlinedInput label="Name" />}
                            MenuProps={MenuProps}
                        >
                            {Object.values(exp).map((exp) => (
                                <MenuItem
                                    key={exp}
                                    value={exp}
                                    style={getStyles(exp, expSelect, theme)}
                                >
                                    {exp}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-name-label">Город</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            // multiple
                            value={citySelect}
                            onChange={e => handleSelect(e, setCitySelect)}
                            // onChange={e => setCitySelect(e.target.value)}
                            input={<OutlinedInput label="Name" />}
                            MenuProps={MenuProps}
                        >
                            {Object.values(city).map((city) => (
                                <MenuItem
                                    key={city}
                                    // onChange={event=>setCitySelect(event.target.value)}
                                    value={city}
                                    style={getStyles(city, citySelect, theme)}
                                >
                                    {city}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                {/*Карточки с базы*/}
                <div className="background">
                    <div className="cards">
                        {
                            job.map(job => {
                                return <div  className="card" id="c4" key={job.id}>
                                    {/* <div className="column" id="contentColumn"  src={'/uploads/' + params.row.img} > */}
                                    <div className="column" id="contentColumn" >
                                        <div className='titleCard'>{job.title}</div>
                                        <div className='textCard'>{job.description}</div>
                                        <div className='textCard' id="city">{job.office} г.{job.city}</div>
                                        <div className='salaryCard'>{job.salary}&#8381;</div>
                                        <div className='btnDiv'>
                                            {/* <Link href={`/job/${encodeURIComponent(sale.id)}`}> */}
                                            <Link href={{
                                                pathname: 'job/[id]',
                                                query: { id: job.id }
                                            }}>
                                                <button className='btnModal' >Подробнее &#10095;</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>

     <style jsx>{`

                .cardBlock{
                    display:flex;
                    width:100%;
                    height:77px;
                    justify-content: center;
                    align-items: center;
                    color:white;
                    font-family: 'Roboto','sans-serif'; 
                    font-size:40px;
                }  

                #black {
                    background-color: black;
                }

                .background {
                    display:flex; 
                    width: 100%;
                    height:100%;
                    justify-content: center;
                    align-items:center;
                    margin-top:50px;
                    margin-bottom:50px;
                }

                .cards {
                    display:flex; 
                    width: 1000px;
                    justify-content:space-evenly;
                    align-items:center;
                    flex-direction:row;
                    flex-wrap:wrap;
                }

                
                .card {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    align-items:center;
                    width:350px;
                    height:300px;
                    background:white;
                    border-radius:13px;
                    background: #f6f3ef;
                    margin-top:10px;
                    transition: all .3s ease;
                    padding-top:10px;
                    padding-bottom:10px;
                }

                .card:hover { 
                    transform: scale(1.02);
                    -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
                    -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
                    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
                    border-left:solid 2px #005baa;;
                }

                #contentColumn{
                    width:100%;
                    padding: 40px;
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
                    align-items:start;
                    flex-direction:row;
                    font-size:18px; 
                    font-weight:bold;
                    padding: 9px;
                    flex-wrap: wrap;
                    font-family: 'Roboto','sans-serif'; 
                    overflow: hidden;
                }

                .textCard {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    align-items:center;
                    flex-direction:row;
                    font-size:18px; 
                    margin-top:10px;
                    flex-wrap: wrap;
                    font-family: 'Roboto','sans-serif'; 
                    text-align: center;
                    margin-top:10px;
                }
                .salaryCard {
                    display:flex;
                    justify-content:center;
                    flex-direction:;
                    align-items:center; 
                    font-weight: bold;
                    font-size:20px; 
                    margin-top:10px;
                }

               
                .btnDiv{
                    display:flex;
                    justify-content:center;
                    flex-direction:;
                    align-items:center;
                    flex-direction:row;
                }

                #city {
                    font-size:16px;
                }


                .btnModal{
                    display: flex;
                    justify-content:center;
                    flex-direction:;
                    text-align: center;
                    align-items:center;
                    flex-direction:row;
                    font-family: 'Roboto','sans-serif'; 
                    transition: transform.3s;
                    width: 140px;
                    height: 40px;
                    border: none;
                    font-weight: bold;
                    margin-top:35px;
                    background: #005baa;
                    color: white;
                    font-size: 16px;
                }

                .btnModal:hover{
                    transform: scale(0.98);
                    background-color: black;
                }

                .title {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    color:white;
                    font-family: 'Roboto','sans-serif'; 
                    font-size:55px;
                    font-weight: bold;
                }

                .titleMini {
                    display:flex;
                    justify-content:center;
                    flex-direction:column;
                    color:white;
                    margin-top:100px;
                    font-family: 'Roboto', sans-serif; 
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

    return <div style={{display:'flex',width:'100%',justifyContent:'center',height:'50px',alignItems:'center',fontFamily:'Roboto',fontSize:'18px'}}>Вакансии в данный момент  не обнаружены</div>
}