import Link from "next/link";
import Image from 'next/image';
import banner from '/public/images/1.webp'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import exeed from '/public/images/logo-brends/exeed.jpg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Dispatch, FormEvent, SetStateAction, useEffect, useMemo, useState } from "react"
import { Box, Button, ButtonGroup, Checkbox, FormControlLabel, FormGroup, FormLabel, Slider, TextField } from "@mui/material";
import { brendFilterList } from "../../admin/SalesAdmin";
import suv from '/public/images/carBodyTyp/suv.svg'
import crossover from '/public/images/carBodyTyp/crossover.svg'
import hatchback from '/public/images/carBodyTyp/hatchback.svg'
import liftback from '/public/images/carBodyTyp/liftback.svg'
import minivan from '/public/images/carBodyTyp/minivan.svg'
import sedan from '/public/images/carBodyTyp/sedan.svg'
import { Car } from "@prisma/client";
import CarFilterSidebar from "./CarFilterSidebar";
import FilteredNewCars from "./FilteredNewCars";


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


type Props = {
    setShowModal: Dispatch<SetStateAction<boolean>>,
    cars: Car[],
}

export function NewCarComponent({ setShowModal, cars }: Props) {

    const [filteredCars, setFilteredCars] = useState(cars)

    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }

    return (
        <>
            <div className="background">
                <CarFilterSidebar cars={cars} filteredCars={filteredCars} setFilteredCars={setFilteredCars}/>
                <div className="carBlock">
                    <FilteredNewCars filteredCars={filteredCars} setShowModal={setShowModal} />
                </div>
            </div >
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
                    width: 400px;
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

                #carBodyType{
                    display:flex;
                    flex-direction: column;
                    width: 100%;
                    align-items: center;
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
                
                .carTypeDiv {
                   display: flex;
                   justify-content: center;
                   height: 50px;
                   width: 120px;
                   padding: 5px;
                   border-radius: 7px;
                }

                .imgCarType{
                     cursor: pointer;
                }

                .carTypeDiv:hover {
                    background-color: #d4d3d3
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