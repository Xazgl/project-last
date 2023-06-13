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

import suv from '/public/images/carBodyTyp/suv.svg'
import crossover from '/public/images/carBodyTyp/crossover.svg'
import hatchback from '/public/images/carBodyTyp/hatchback.svg'
import liftback from '/public/images/carBodyTyp/liftback.svg'
import minivan from '/public/images/carBodyTyp/minivan.svg'
import sedan from '/public/images/carBodyTyp/sedan.svg'
import { Car } from "@prisma/client";
import CarFilterSidebar from "./CarFilterSidebar";
import FilteredNewCars from "./FilteredNewCars";
import CarFilterSidebarMobile from "./CarFilterSidebarMobile";
import { AllCarDto } from "../../../../../@types/dto";
import CardModelsFilter from "./modelsCard/CardModelsFilter";
import { FilterUserOptions } from "./typeForFilter";




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

type Brand = {
    brandName: string;
    count: string
}

type Props = {
    setShowModal: Dispatch<SetStateAction<boolean>>,
    cars: AllCarDto,
    setShowModalFavorite: Dispatch<SetStateAction<boolean>>,
    // brands:string[]
    brands: Brand[]
}

export function NewGeelyComponent({ setShowModal, setShowModalFavorite, cars, brands }: Props) {
    //Отфильтрованные машины, по умолчанию все машины конкретного бренда
    const [filteredCars, setFilteredCars] = useState(cars)
    //Конкретные выбранные фильтры 
    const [currentFilter, setCurrentFilter] = useState<FilterUserOptions>({
        dealerOffice: [],
        brandName: null,
        modelName: [],
        colorName: [],
        gearBoxName: [],
        carBodyTypeName: [],
        driverTypeName: [],
        engineTypeName: [],
        minPrice: null,
        maxPrice: null
    })

    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }

    return (
        <>
            <div className="background">
                <CarFilterSidebarMobile cars={cars} filteredCars={filteredCars}
                    setFilteredCars={setFilteredCars}
                    setCurrentFilter={setCurrentFilter} currentFilter={currentFilter}
                    brands={brands}
                />
                <CarFilterSidebar cars={cars} filteredCars={filteredCars}
                    setFilteredCars={setFilteredCars} brands={brands}
                    setCurrentFilter={setCurrentFilter} currentFilter={currentFilter}
                />
                <div className="carBlock">
                    {currentFilter.modelName.length <= 0 ?
                        <CardModelsFilter cars={cars} filteredCars={filteredCars}
                            setFilteredCars={setFilteredCars}
                            setCurrentFilter={setCurrentFilter} currentFilter={currentFilter}
                        />
                        :
                        <FilteredNewCars filteredCars={filteredCars} setShowModal={setShowModal}
                            setShowModalFavorite={setShowModalFavorite} cars={cars}
                            setFilteredCars={setFilteredCars}
                        />
                    }
                </div>
            </div >

            <style jsx>{`
                .background {
                    display:flex; 
                    width: 100%;
                    height:auto;
                    margin-top: 20px;
                    position: relative;
                    
                }

                .carBlock {
                    display:flex;
                    width: 100%;
                    height: auto;
                }

                @media(max-width: 600px) {
                    .background {  
                        flex-direction: column;
                        margin-top: 10px;
                    }
                }
            `}</style>
        </>
    )
}