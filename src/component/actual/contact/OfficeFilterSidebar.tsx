import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, ButtonGroup, Checkbox, FormControlLabel, FormGroup, FormLabel, Link, Slider, TextField } from "@mui/material";
import { Offices } from "@prisma/client";
import { brandNameFilter, cityOfficeFilter } from './carFilters';




type Props = {
    offices: Offices[],
    setFilteblackOffices: Dispatch<SetStateAction<Offices[]>>,
    filteblackOffices: Offices[]
}



function CarFilterSidebar({ offices, setFilteblackOffices, filteblackOffices }: Props) {

    const [detailFilterBrandResult, setDetailFilterBrandResult] = useState('')
    const [detailFilterCity, setDetailFilterCity] = useState('')



    //Конкретные выбранные фильтры 
    const [currentFilter, setCurrentFilter] = useState({
        city: [],
        brandName: null,
    })

    const changeFilter = (filter) => {
        setCurrentFilter(prevFilterState => {
            return { ...prevFilterState, ...filter }
        })
    }

    useEffect(() => {
        setFilteblackOffices(offices.filter(office => {
            return cityOfficeFilter(office, currentFilter)
                && brandNameFilter(office, currentFilter)
        }))
    }, [currentFilter])


    //filteblackProps выводит все возможные фильтры для выбора по данным из БД
    const filteblackProps = useMemo(() => {
        let filteblackOfficesProps = {
            city: [],
            brands: [],
        } as {
            city: string[], brands: string[]
        }
        filteblackOffices.forEach(office => {
            filteblackOfficesProps.city.push(office.city)
            filteblackOfficesProps.brands.push(office.brend)
        })
        console.log(filteblackOffices, 'отфильтрованные дилеры')
        return {
            city: [...new Set(filteblackOfficesProps.city)],
            brands: [...new Set(filteblackOfficesProps.brands)], // TODO es6-set polyfill
        }

    }, [filteblackOffices])

    console.log(filteblackProps, 'filteblackProps')


    function resetfilteblackOffices() {
        setFilteblackOffices(offices)
    }

    function selectBrandHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        setDetailFilterBrandResult(event.target.value)
        if (event.target.value === 'Null') resetfilteblackOffices()
        setCurrentFilter(prevFilterState => {
            const brandName = event.target.value === 'Null'
                ? null
                : [...(prevFilterState.brandName ?? []), event.target.value]
            console.log(brandName)
            return {
                ...prevFilterState,
                brandName
            }
            // return { ...prevFilterState, brandName: event.target.value }
        })
        // changeFilter({ brandName: [event.target.value] })
    }


    function selectCityHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        setDetailFilterCity(event.target.value)
        if (event.target.value === 'Null') resetfilteblackOffices()
        setCurrentFilter(prevFilterState => {
            const city = event.target.value === 'Null'
                ? null
                : [...(prevFilterState.city ?? []), event.target.value]
            console.log(city)
            return {
                ...prevFilterState,
                city
            }
            // return { ...prevFilterState, brandName: event.target.value }
        })
        // changeFilter({ brandName: [event.target.value] })
    }

    useEffect(() => {
        console.log(currentFilter)
    }, [currentFilter])


    return (
        <>
            <div className="sideBar">
                <div className="rowSideBar" >
                    <select className="selectModel" value={detailFilterCity} name="detailFilterBran"
                        onChange={selectCityHandler}>
                        <option value={'Null'} selected >Выберите  город</option>
                        {filteblackProps.city.map(dealerCity => <option key={dealerCity} value={dealerCity}>{dealerCity}</option>)}
                    </select>
                    {/* <FormGroup>
                                {filteblackProps.city.map(dealerCity =>
                                    <FormControlLabel
                                        key={dealerCity}
                                        control={<Checkbox />}
                                        label={dealerCity}
                                        onClick={() => {
                                            setCurrentFilter(prevFilterState => {
                                                if (prevFilterState.city?.includes(dealerCity)) {
                                                    return {
                                                        ...prevFilterState,
                                                        city: prevFilterState.city.filter(el => el !== dealerCity)
                                                    }
                                                }
                                                return { ...prevFilterState, city: [...prevFilterState.city, dealerCity] }
                                            })
                                        }}
                                    />
                                )
                                }
                            </FormGroup> */}
                </div>
                <div className="rowSideBar" >
                    <select className="selectModel" value={detailFilterBrandResult} name="detailFilterBran"
                        onChange={selectBrandHandler}>
                        <option value={'Null'} selected >Выберите бренд</option>
                        {filteblackProps.brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
                    </select>
                </div>
            </div >

            <style jsx>{`

                .sideBar {
                    display:flex;
                    justify-content: center;
                    width: 100%;
                    height: auto;
                    margin-top:30
                }

                .rowSideBar {
                    width: 300px;
                    justify-content: center;
                    height: auto;
                    padding:20px;
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

                .carBlock {
                    display:flex;
                    width: 100%;
                    height: 100vh;
                    border:solid 2px black;
                }

                select {
                    background-color: transparent;
                    color:#3d3d3d;
                    font-family: "Gilroy","sans-serif";
                    width: 100%;
                    height: 50px;
                    border:solid 2px #3d3d3d;
                    font-size:21px; 
                    cursor: pointer;
                
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

                @media(max-width: 1000px) {

                    .sideBar {
                     flex-direction: column;
                     width: 100%;
                    }
                    
                }

                @media(max-width: 600px) {


              

                    select {
                        height: 35px;
                        font-size: 18px;
                    }
                }
                
            `}</style>
        </>
    )
}

export default CarFilterSidebar