import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, ButtonGroup, Checkbox, FormControlLabel, FormGroup, FormLabel, Slider, TextField } from "@mui/material";
import { brendFilterList } from "../../admin/SalesAdmin";
import suv from '/public/images/carBodyTyp/suv.svg'
import crossover from '/public/images/carBodyTyp/crossover.svg'
import hatchback from '/public/images/carBodyTyp/hatchback.svg'
import liftback from '/public/images/carBodyTyp/liftback.svg'
import minivan from '/public/images/carBodyTyp/minivan.svg'
import sedan from '/public/images/carBodyTyp/sedan.svg'
import { Car } from "@prisma/client";
import RangeSlider from './RangeSlider';
import { FilterUserOptions } from './typeForFilter';
import { brandNameFilter, carTypeFilter, colorNameFilter, dealerOfficeFilter, gearBoxNameFilter, modelNameFilter, priceFilter } from './carFilters';
import { AllCarDto } from '../../../../@types/dto';
import { nanoid } from 'nanoid';

type Props = {
    cars: AllCarDto,
    setFilteredCars: Dispatch<SetStateAction<AllCarDto>>,
    filteredCars: AllCarDto
}

// type FilterUserOptions = {
//     carType?: 'new' | 'old'
//     dillerOffice?: string[]
//     minPrice?: number
//     maxPrice?: number
//     brandName?: string[]
//     modelName?: string[]
// }

function CarFilterSidebar({ cars, setFilteredCars, filteredCars }: Props) {

    const [currentFilter, setCurrentFilter] = useState<FilterUserOptions>({
        dealerOffice: [],
        brandName: null,
        modelName: [],
        colorName: [],
        gearBoxName: [],
    })

    const changeFilter = (filter: FilterUserOptions) => {
        setCurrentFilter(prevFilterState => {
            return { ...prevFilterState, ...filter }
        })
    }

    useEffect(() => {
        setFilteredCars(prevFilteredCars => {
            return prevFilteredCars.filter(car => {
                return carTypeFilter(car, currentFilter)
                    && dealerOfficeFilter(car, currentFilter)
                    && brandNameFilter(car, currentFilter)
                    && modelNameFilter(car, currentFilter)
                    && colorNameFilter(car, currentFilter)
                    && priceFilter(car, currentFilter)
                    && gearBoxNameFilter(car, currentFilter)
            })
        })
    }, [currentFilter])

    const filteredProps = useMemo(() => {
        let filteredCarsProps = {
            dealers: [],
            brands: [],
            models: [],
            colors: [],
            gearBoxTypes: [],
        } as { dealers: string[], brands: string[], models: string[], colors: string[], gearBoxTypes: string[] }
        filteredCars.forEach(car => {
            filteredCarsProps.dealers.push(car.DealerModel.name)
            filteredCarsProps.brands.push(car.CarModel.brandName)
            filteredCarsProps.models.push(car.CarModel.modelName)
            filteredCarsProps.colors.push(car.color)
            filteredCarsProps.gearBoxTypes.push(car.CarModification.gearboxType)
        })
        console.log(filteredCars, 'отфильтрованные машины')
        return {
            dealers: [...new Set(filteredCarsProps.dealers)],
            brands: [...new Set(filteredCarsProps.brands)], // TODO es6-set polyfill
            models: [...new Set(filteredCarsProps.models)],
            colors: [...new Set(filteredCarsProps.colors)],
            gearBoxTypes: [...new Set(filteredCarsProps.gearBoxTypes)],

            // brands: [...new Set(filteredCars.map(car => car.CarModel.brandName))],
        }

    }, [filteredCars])

    const [carType, setCarType] = useState('')

    const [filterMainPeopleResult, setFilterMainPeopleResult] = useState(0)
    const [detailFilterBrandResult, setDetailFilterBrandResult] = useState('')
    const [detailFilterModelResult, setDetailFilterModelResult] = useState(0)
    const [minPrice, setMinPrice] = useState<number>(0)
    const [maxPrice, setMaxPrice] = useState<number>(20000000)
    const [color, setColor] = useState('')
    const [carBodyType, setCarBodyType] = useState('')
    const [checkedTypeGearBox, setCheckedTypeGearBox] = useState([true, false]);
    const [checkedDriveType, setCheckedDriveType] = useState([true, false]);
    const [checkedFuelType, setCheckedFuelType] = useState([true, false]);

    useEffect(() => {
        setMaxPrice(Math.max(...cars.map(car => car.price)))
    }, [])

    const [valueSliderPrice, setValueSliderPrice] = React.useState<number[]>([minPrice, maxPrice]);

    //TypeGearBox
    const allCheckedTypeGearBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedTypeGearBox([event.target.checked, event.target.checked]);
    };
    const automatiCheckedTypeGearBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedTypeGearBox([event.target.checked, checkedTypeGearBox[1]]);
    };
    const notAutomatiCheckedTypeGearBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedTypeGearBox([checkedTypeGearBox[0], event.target.checked]);
    };
    //

    //Fuel
    const allCheckedFuelType = (event) => {
        setCheckedFuelType([event.target.checked, event.target.checked]);
    };

    const checkedFuelTypePetrol = (event) => {
        setCheckedFuelType([event.target.checked, checkedDriveType[1]]);
    };

    const checkedFuelTypeDisel = (event) => {
        setCheckedFuelType([checkedDriveType[0], event.target.checked]);
    };
    //

    //DriveType
    const allCheckedDriveType = (event) => {
        setCheckedDriveType([event.target.checked, event.target.checked]);
    };

    const checkedDriveTypeFull = (event) => {
        setCheckedDriveType([event.target.checked, checkedDriveType[1]]);
    };

    const checkedDriveTypeNotFull = (event) => {
        setCheckedDriveType([checkedDriveType[0], event.target.checked]);
    };


    //подставлям бренд в массив currentFilter (он пока не массив строк, а строка)
    useEffect(() => {
        setCurrentFilter(prevFilterState => {
            return { ...prevFilterState, brandName: detailFilterBrandResult }
        })
        changeFilter({ brandName: detailFilterBrandResult })
    }, [detailFilterBrandResult])



    useEffect(() => {
        console.log(currentFilter)
    }, [currentFilter])

    // const allCheckedTypeGearBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setCheckedTypeGearBox([event.target.checked, event.target.checked]);
    // };
    // const automatiCheckedTypeGearBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setCheckedTypeGearBox([event.target.checked, checkedTypeGearBox[1]]);
    // };
    // const notAutomatiCheckedTypeGearBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setCheckedTypeGearBox([checkedTypeGearBox[0], event.target.checked]);
    // };

    useEffect(() => {
        console.log(allCheckedTypeGearBox, automatiCheckedTypeGearBox, notAutomatiCheckedTypeGearBox)
    }, [allCheckedTypeGearBox, automatiCheckedTypeGearBox, notAutomatiCheckedTypeGearBox])

    return (
        <>
            <div className="sideBar">
                <div className="rowSideBar" id="center" >
                    <ButtonGroup
                        disableElevation
                        variant="outlined"
                        aria-label="Disabled elevation buttons"
                    >
                        <Button sx={{ width: 'auto', height: '30px', fontSize: '11px' }} onClick={(event) => {
                            setCarType('new')
                            changeFilter({ carType: 'new' })
                        }}>Новые</Button>
                        <Button sx={{ width: 'auto', height: '30px', fontSize: '11px' }} onClick={(event) => {
                            setCarType('old')
                            changeFilter({ carType: 'used' })
                        }} >С пробегом</Button>
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
                                {filteredProps.dealers.map(dealer =>
                                    <FormControlLabel
                                        key={dealer}
                                        control={<Checkbox />}
                                        label={dealer}
                                        onClick={() => {
                                            setCurrentFilter(prevFilterState => {
                                                if (prevFilterState.dealerOffice?.includes(dealer)) {
                                                    return {
                                                        ...prevFilterState,
                                                        dealerOffice: prevFilterState.dealerOffice.filter(el => el !== dealer)
                                                    }
                                                }
                                                return { ...prevFilterState, dealerOffice: [...prevFilterState.dealerOffice, dealer] }
                                            })
                                        }}
                                    />
                                )
                                }
                                {/* {carType !== 'old' &&
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
                                } */}



                                {carType === 'old' &&
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
                            <RangeSlider
                                minPrice={minPrice}
                                maxPrice={maxPrice}
                                valueSliderPrice={valueSliderPrice} 
                                setValueSliderPrice={setValueSliderPrice}
                            />
                            {/* <input type="number"
                    className="name"
                    id="name"
                    name="name"
                    placeholder="от 2 000 000"
                    required
                    value={minPrice}
                    onChange={event => setMinPrice(+event.target.value)}
                />
                <Slider
                    size="small"
                    defaultValue={minPrice}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    min={0}
                    step={100000}
                    max={6999999}
                    onChange={event => setMinPrice(+event.target.value)}
                />
                <input type="number"
                    className="name"
                    id="name"
                    name="name"
                    placeholder="до 3 000 000"
                    required
                    value={maxPrice}
                    onChange={event => setMaxPrice(+event.target.value)}
                />
                <Slider
                    size="small"
                    defaultValue={maxPrice}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    min={0}
                    step={100000}
                    max={7000000}
                    onChange={event => setMaxPrice(+event.target.value)}
                /> */}
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
                            <select className="selectModel" value={detailFilterBrandResult} name="detailFilterBran"
                                onChange={event => setDetailFilterBrandResult(event.target.value)}>
                                <option value={0} selected disabled>Выберите бренд</option>
                                {filteredProps.brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
                            </select>

                            {/* <select className="selectModel" value={detailFilterBrandResult} name="detailFilterBran"
                                    onChange={(event) => setCurrentFilter(prevFilterState => {
                                        if (prevFilterState.brandName?.includes(brand)) {
                                            return {
                                                ...prevFilterState,
                                                brandName: prevFilterState.brandName.filter(el => el !== brand)
                                            }
                                        }
                                        return { ...prevFilterState, brandName: [...prevFilterState.brandName, (event.target.value)] }
                                    })}
                                >
                                    <option value={0} selected disabled>Выберите бренд</option>
                                    {filteredProps.brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
                                </select>  */}
                        </AccordionDetails>
                    </Accordion>
                </div>

                {detailFilterBrandResult !== null && detailFilterBrandResult !== undefined &&
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
                                <div id="column" >
                                    {filteredProps.models.map(model =>
                                        <FormControlLabel
                                            key={model}
                                            control={<Checkbox />}
                                            label={model}
                                            onClick={() => {
                                                setCurrentFilter(prevFilterState => {
                                                    if (prevFilterState.modelName?.includes(model)) {
                                                        return {
                                                            ...prevFilterState,
                                                            modelName: prevFilterState.modelName.filter(el => el !== model)
                                                        }
                                                    }
                                                    return { ...prevFilterState, modelName: [...prevFilterState.modelName, model] }
                                                })
                                            }}
                                        />
                                    )
                                    }
                                </div>
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
                            <div id="color" >
                                {filteredProps.colors.map(color =>
                                    <div
                                        //  onClick={() => setColor(color)}
                                        onClick={() => {
                                            setCurrentFilter(prevFilterState => {
                                                if (prevFilterState.colorName?.includes(color)) {
                                                    return {
                                                        ...prevFilterState,
                                                        colorName: prevFilterState.colorName.filter(el => el !== color)
                                                    }
                                                }
                                                return { ...prevFilterState, colorName: [...prevFilterState.colorName, color] }
                                            })
                                        }}
                                        style={{
                                            background: color, width: '30px',
                                            height: '30px', cursor: 'pointer'
                                        }}></div>
                                )}
                            </div>
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
                            <Typography sx={{ fontSize: '14px' }}>Коробка</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormGroup>
                                {filteredProps.gearBoxTypes.map(gearBox =>
                                    <FormControlLabel
                                        key={gearBox}
                                        control={<Checkbox />}
                                        label={gearBox}
                                        onClick={() => {
                                            setCurrentFilter(prevFilterState => {
                                                if (prevFilterState.gearBoxName?.includes(gearBox)) {
                                                    return {
                                                        ...prevFilterState,
                                                        gearBoxName: prevFilterState.gearBoxName.filter(el => el !== gearBox)
                                                    }
                                                }
                                                return { ...prevFilterState, gearBoxName: [...prevFilterState.gearBoxName, gearBox] }
                                            })
                                        }}
                                    />
                                )}
                            </FormGroup>

                            {/* // <FormControlLabel
                            //     label="Любая"
                            //     control={
                            //         <Checkbox
                            //             checked={checkedTypeGearBox[0] && checkedTypeGearBox[1]}
                            //             indeterminate={checkedTypeGearBox[0] !== checkedTypeGearBox[1]}
                            //             onChange={
                            //                 allCheckedTypeGearBox
                            //             }
                            //         />
                            //     }
                            // />
                            // <FormControlLabel
                            //     label="Автоматическая"
                            //     control={<Checkbox checked={checkedTypeGearBox[0]} onChange={automatiCheckedTypeGearBox} />}
                            // />
                            // {checkedTypeGearBox[0] === true &&
                            //     <FormGroup sx={{ paddingLeft: '30px' }}>
                            //         <FormControlLabel control={<Checkbox defaultChecked />} label="Автомат" />
                            //         <FormControlLabel control={<Checkbox defaultChecked />} label="Вариатор" />
                            //     </FormGroup>
                            // }
                            // <FormControlLabel
                            //     label="Механическая"
                            //     control={<Checkbox checked={checkedTypeGearBox[1]} onChange={notAutomatiCheckedTypeGearBox} />}
                            // /> */}

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
                            <Typography sx={{ fontSize: '14px' }}>Тип кузова</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div id="carBodyType" >
                                <div className="carTypeDiv">
                                    <img
                                        className="imgCarType"
                                        src={minivan.src}
                                        onClick={event => setCarBodyType('minivan')}
                                        alt="Минивэн"
                                    />
                                </div>
                                <div className="carTypeDiv">
                                    <img
                                        className="imgCarType"
                                        src={crossover.src}
                                        onClick={event => setCarBodyType('crossover')}
                                        alt="Кроссовер"
                                    />
                                </div>
                                <div className="carTypeDiv">
                                    <img
                                        className="imgCarType"
                                        src={suv.src}
                                        onClick={event => setCarBodyType('suv')}
                                        alt="Внедорожник"
                                    />
                                </div>
                                <div className="carTypeDiv">
                                    <img
                                        className="imgCarType"
                                        src={liftback.src}
                                        onClick={event => setCarBodyType('liftback')}
                                        alt="Лифтбэк"
                                    />
                                </div>
                                <div className="carTypeDiv">
                                    <img
                                        className="imgCarType"
                                        src={sedan.src}
                                        onClick={event => setCarBodyType('sedan')}
                                        alt="Седан"
                                    />
                                </div>
                                <div className="carTypeDiv">
                                    <img
                                        className="imgCarType"
                                        src={hatchback.src}
                                        onClick={event => setCarBodyType('hatchback')} alt="Хэтчбек"
                                    />
                                </div>
                            </div>
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
                            <Typography sx={{ fontSize: '14px' }}>Привод</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="rowSideBar" id="column" >
                                <FormControlLabel
                                    label="Любой"
                                    control={
                                        <Checkbox
                                            checked={checkedDriveType[0] && checkedDriveType[1]}
                                            indeterminate={checkedDriveType[0] !== checkedDriveType[1]}
                                            onChange={allCheckedDriveType}
                                        />
                                    }
                                />
                                <FormControlLabel
                                    label="Полный"
                                    control={<Checkbox checked={checkedDriveType[0]} onChange={checkedDriveTypeFull} />}
                                />
                                <FormControlLabel
                                    label="Передний"
                                    control={<Checkbox checked={checkedDriveType[1]} onChange={checkedDriveTypeNotFull} />}
                                />
                            </div>
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
                            <Typography sx={{ fontSize: '14px' }}>Топливо</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="rowSideBar" id="column" >
                                <FormControlLabel
                                    label="Любой"
                                    control={
                                        <Checkbox
                                            checked={checkedFuelType[0] && checkedFuelType[1]}
                                            indeterminate={checkedFuelType[0] !== checkedFuelType[1]}
                                            onChange={allCheckedFuelType}
                                        />
                                    }
                                />
                                <FormControlLabel
                                    label="Бензин"
                                    control={<Checkbox checked={checkedFuelType[0]} onChange={checkedFuelTypePetrol} />}
                                />
                                <FormControlLabel
                                    label="Дизель"
                                    control={<Checkbox checked={checkedFuelType[1]} onChange={checkedFuelTypeDisel} />}
                                />
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div >
            <style jsx>{`

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

export default CarFilterSidebar