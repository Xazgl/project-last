import Link from "next/link";
import Image from 'next/image';
import banner from '/public/images/1.webp'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import exeed from '/public/images/logo-brends/exeed.jpg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Dispatch, FormEvent, SetStateAction, useMemo, useState } from "react"
import { Box, Button, ButtonGroup, Checkbox, FormControlLabel, FormGroup, FormLabel, Slider, TextField } from "@mui/material";
import { brendFilterList } from "../../admin/SalesAdmin";

type OfficesList = {
    id: number,
    brend: string,
    modelCar: ModelList[]
}

type ModelList = {
    id: number,
    modelName: string,
}

type NewOrOldList = {
    id: number,
    name: string,
    modelCar: OfficesList[]
}


export function NewCarComponent({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) {

    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }

    const [type, setType] = useState('')

    const [filterMainPeopleResult, setFilterMainPeopleResult] = useState(0)
    const [detailFilterBrandResult, setDetailFilterBrandResult] = useState(0)
    const [detailFilterModelResult, setDetailFilterModelResult] = useState(0)
    const [numberBegin, setNumberBegin] = useState()
    const [numberEnd, setNumberEnd] = useState()

    const [color, setColor] = useState('')

    function calculateValue(value: number) {
        return 2 ** value;
    }

    return (
        <>
            <div className="background">
                <div className="sideBar">
                    <div className="rowSideBar" id="center" >
                        <ButtonGroup
                            disableElevation
                            variant="outlined"
                            aria-label="Disabled elevation buttons"
                        >
                            <Button sx={{ width: 'auto', height: '30px', fontSize: '11px' }} onClick={(event) => setType('Новые')}>Новые</Button>
                            <Button sx={{ width: 'auto', height: '30px', fontSize: '11px' }} onClick={(event) => setType('С пробегом')} >С пробегом</Button>
                        </ButtonGroup>
                    </div>
                    <div className="rowSideBar" id="center" >
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ fontSize: '14px' }}>Дилерские центры</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormGroup>
                                    {type !== 'С пробегом' &&
                                        <>
                                            <FormControlLabel control={<Checkbox />} label="Chery Арконт" />
                                            <FormControlLabel control={<Checkbox />} label="EXEED Арконт" />
                                            <FormControlLabel control={<Checkbox />} label="FAW Арконт" />
                                            <FormControlLabel control={<Checkbox />} label="Hyundai Арконт" />
                                            <FormControlLabel control={<Checkbox />} label="KIA Арконт" />
                                            <FormControlLabel control={<Checkbox />} label="Mitsubishi Арконт на Землячке" />
                                            <FormControlLabel control={<Checkbox />} label="Renault Арконт Волгоград" />
                                            <FormControlLabel control={<Checkbox />} label="Nissan Арконт на Еременко 7Б" />
                                            <FormControlLabel control={<Checkbox />} label="Volkswagen Арконт на Монолите" />
                                        </>
                                    }

                                    {type === 'С пробегом' &&
                                        <>
                                            <FormControlLabel control={<Checkbox />} label="Арконт с пробегом на Землячке" />
                                            <FormControlLabel control={<Checkbox />} label="Арконт с пробегом в Волжском" />
                                        </>
                                    }
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="rowSideBar" id="column" >
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ fontSize: '14px' }}>Стоимость</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <input type="number"
                                    className="name"
                                    id="name"
                                    name="name"
                                    placeholder="от 2 000 000"
                                    required
                                    value={numberBegin}
                                    onChange={event => setNumberBegin(+event.target.value)}
                                />
                                <Slider
                                    size="small"
                                    defaultValue={numberBegin}
                                    aria-label="Small"
                                    valueLabelDisplay="auto"
                                    min={0}
                                    step={100000}
                                    max={6999999}
                                    onChange={event => setNumberBegin(+event.target.value)}
                                />
                                <input type="number"
                                    className="name"
                                    id="name"
                                    name="name"
                                    placeholder="до 3 000 000"
                                    required
                                    value={numberEnd}
                                    onChange={event => setNumberEnd(+event.target.value)}
                                />
                                <Slider
                                    size="small"
                                    defaultValue={numberEnd}
                                    aria-label="Small"
                                    valueLabelDisplay="auto"
                                    min={0}
                                    step={100000}
                                    max={7000000}
                                    onChange={event => setNumberEnd(+event.target.value)}
                                />
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="rowSideBar" id="column" >
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ fontSize: '14px' }}>Бренд</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <select className="selectModel" value={detailFilterBrandResult} name="detailFilterBran" onChange={event => setDetailFilterBrandResult(+event.target.value)}>
                                    <option value={0} selected disabled>Выберите бренд</option>
                                    {brendFilterList.map(filterBrend => <option key={filterBrend.id} value={filterBrend.id}>{filterBrend.name}</option>)}
                                </select>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    {detailFilterBrandResult > 0 &&
                        <div className="rowSideBar" id="column" >
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ fontSize: '14px' }}>Модель</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <select className="selectModel" value={detailFilterModelResult} name="detailFilter" onChange={event => setDetailFilterModelResult(+event.target.value)}>
                                        <option value={0} selected disabled>Выберите модель</option>
                                        {brendFilterList.find(filterBrend => filterBrend.id === detailFilterBrandResult)?.modelCar.map(type => <option key={type.id} value={type.id}>{type.name}</option>)}
                                    </select>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    }
                    <div className="rowSideBar" id="column" >
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ fontSize: '14px' }}>Цвет</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div  id="color" >
                                    <div style={{ display: 'flex', background: 'red', width: '20px', height: '20px' }}></div>
                                    <div style={{ display: 'flex', background: 'black', width: '20px', height: '20px' }}></div>
                                    <div style={{ display: 'flex', background: 'white', width: '20px', height: '20px' }}></div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
                <div className="carBlock"></div>
            </div>
            <style jsx>{`
                .background {
                    display:flex; 
                    width: 100%;
                    height:auto;
                    margin-top: 100px;
                }

                #color {
                    gap:10px;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                }

                .sideBar {
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    width: 300px;
                    height: auto;
                    border:solid 2px black;
                    overflow: auto;
                }

                .rowSideBar {
                    width: 100%;
                    flex-direction: row;
                    height: auto;
                    padding:20px;
                    border-bottom: 1px solid #d4d3d3;
                }



                #center{
                    display:flex;
                    justify-content: center;
                }

                #column {
                    display:flex;
                    flex-direction: column;
                    width: 100%;
                }

                #row {
                    display:flex;
                    flex-direction: row;
                    width: 100%;
                }

                input {
                    width: 100%;
                    height: 30px;
                    border:solid 1px #005baa;
                    font-size:16px;
                    margin-top:5px;
                    padding: 5px 5px;
                }

                #price {
                    display: flex;
                }

                .carBlock {
                    display:flex;
                    width: 100%;
                    height: 100vh;
                    border:solid 2px black;
                }

                select {
                    width: 100%;
                    height: 30px;
                    border:solid 1px #005baa;
                    font-size:16px;
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