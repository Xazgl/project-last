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
import { brandNameFilter, carBodyTypeNameFilter, carTypeFilter, colorNameFilter, dealerOfficeFilter, driverTypeNameFilter, engineTypeNameFilter, gearBoxNameFilter, modelNameFilter, priceFilter } from './carFilters';
import { AllCarDto } from '../../../../@types/dto';
import { nanoid } from 'nanoid';
import { LogoArr } from './FilteredNewCars';


import TuneIcon from '@mui/icons-material/Tune';


import chery from '/public/images/logo-around/chery.webp';
import chevrolet from '/public/images/logo-around/chevrolet.webp';
import datsun from '/public/images/logo-around/datsun.webp';
import exeed from '/public/images/logo-around/exeed.webp';
import faw from '/public/images/logo-around/faw.webp';
import ford from '/public/images/logo-around/ford.webp';
import hisun from '/public/images/logo-around/hisun.webp';
import hyundai from '/public/images/logo-around/hyundai.webp';
import jeep from '/public/images/logo-around/jeep.webp';
import kia from '/public/images/logo-around/kia.webp';
import landrover from '/public/images/logo-around/landrover.webp';
import mithsubishi from '/public/images/logo-around/mithsubishi.webp';
import nissan from '/public/images/logo-around/nissan.webp';
import renault from '/public/images/logo-around/renault.webp';
import subaru from '/public/images/logo-around/subaru.webp';
import suzuki from '/public/images/logo-around/suzuki.webp';
import uaz from '/public/images/logo-around/uaz.webp';
import usedcars34 from '/public/images/logo-around/usedcars34.webp';
import volkswagen from '/public/images/logo-around/volkswagen.webp';
import opel from '/public/images/logo-around/opel.webp';
import jaguar from '/public/images/logo-around/jaguar.webp';
import lovol from '/public/images/logo-around/lovol.webp';
import peugeot from '/public/images/logo-around/peugeot.webp';

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


const LogoList: LogoArr[] = [
    {
        id: 1,
        name: 'Chery',
        img: `${chery.src}`
    },
    {
        id: 2,
        name: 'Chevrolet',
        img: `${chevrolet.src}`
    },
    {
        id: 3,
        name: 'Datsun',
        img: `${datsun.src}`
    },
    {
        id: 4,
        name: 'EXEED',
        img: `${exeed.src}`
    },
    {
        id: 5,
        name: 'FAW',
        img: `${faw.src}`
    },
    {
        id: 6,
        name: 'Ford',
        img: `${ford.src}`
    },
    {
        id: 7,
        name: 'Hisun',
        img: `${hisun.src}`
    },
    {
        id: 7,
        name: 'Hyundai',
        img: `${hyundai.src}`
    },
    {
        id: 8,
        name: 'Jeep',
        img: `${jeep.src}`
    },
    {
        id: 9,
        name: 'Kia',
        img: `${kia.src}`
    },
    {
        id: 10,
        name: 'Land Rover',
        img: `${landrover.src}`
    },
    {
        id: 11,
        name: 'Mitsubishi',
        img: `${mithsubishi.src}`
    },
    {
        id: 12,
        name: 'Nissan',
        img: `${nissan.src}`
    },
    {
        id: 13,
        name: 'Renault',
        img: `${renault.src}`
    },
    {
        id: 14,
        name: 'Subaru',
        img: `${subaru.src}`
    },
    {
        id: 15,
        name: 'Suzuki',
        img: `${suzuki.src}`
    },
    {
        id: 16,
        name: 'AUC',
        img: `${usedcars34.src}`
    },
    {
        id: 17,
        name: 'Volkswagen',
        img: `${volkswagen.src}`
    },
    {
        id: 18,
        name: 'Opel',
        img: `${opel.src}`
    },
    {
        id: 19,
        name: 'Jaguar',
        img: `${jaguar.src}`
    },
    {
        id: 20,
        name: 'LOVOL',
        img: `${lovol.src}`
    },
    {
        id: 21,
        name: 'Peugeot',
        img: `${peugeot.src}`
    },
]

function CarFilterSidebarMobile({ cars, setFilteredCars, filteredCars }: Props) {


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
    const [valueSliderPrice, setValueSliderPrice] = React.useState<number[]>([minPrice, maxPrice]);

    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChangeBar =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };


    useEffect(() => {
        setMaxPrice(Math.max(...cars.map(car => car.price)))
    }, [])



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
                    && driverTypeNameFilter(car, currentFilter)
                    && carBodyTypeNameFilter(car, currentFilter)
                    && engineTypeNameFilter(car, currentFilter)
            })
        })
    }, [currentFilter])

    const filteredProps = useMemo(() => {
        let filteredCarsProps = {
            dealers: [],
            brands: [],
            models: [],
            colors: [],
            price: [],
            gearBoxTypes: [],
            carsBodyTypes: [],
            driverTypes: [],
            engineTypes: [],
        } as {
            dealers: string[], brands: string[], models: string[], colors: string[], price: number[], gearBoxTypes: string[],
            carsBodyTypes: string[], driverTypes: string[], engineTypes: string[]
        }
        filteredCars.forEach(car => {
            filteredCarsProps.dealers.push(car.DealerModel.name)
            filteredCarsProps.brands.push(car.CarModel.brandName)
            filteredCarsProps.models.push(car.CarModel.modelName)
            filteredCarsProps.colors.push(car.color)
            filteredCarsProps.price.push(car.price)
            filteredCarsProps.gearBoxTypes.push(car.CarModification.gearboxType)
            filteredCarsProps.carsBodyTypes.push(car.CarModification.bodyType)
            filteredCarsProps.driverTypes.push(car.CarModification.driveType)
            filteredCarsProps.engineTypes.push(car.CarModification.engineType)
        })
        console.log(filteredCars, 'отфильтрованные машины')
        return {
            dealers: [...new Set(filteredCarsProps.dealers)],
            brands: [...new Set(filteredCarsProps.brands)], // TODO es6-set polyfill
            models: [...new Set(filteredCarsProps.models)],
            colors: [...new Set(filteredCarsProps.colors)],
            price: [...new Set(filteredCarsProps.price)],
            gearBoxTypes: [...new Set(filteredCarsProps.gearBoxTypes)],
            carsBodyTypes: [...new Set(filteredCarsProps.carsBodyTypes)],
            driverTypes: [...new Set(filteredCarsProps.driverTypes)],
            engineTypes: [...new Set(filteredCarsProps.engineTypes)],

            // brands: [...new Set(filteredCars.map(car => car.CarModel.brandName))],
        }

    }, [filteredCars])



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

    // подставлям в массив currentFilter
    useEffect(() => {
        setCurrentFilter(prevFilterState => {
            return { ...prevFilterState, minPrice: valueSliderPrice[0], maxPrice: valueSliderPrice[1] }
        })
        changeFilter({
            minPrice: valueSliderPrice[0],
            maxPrice: valueSliderPrice[1]
        })
    }, [valueSliderPrice])

    function gearBoxName(x) {
        if (x === 'automatic') {
            return 'Автомат'
        }
        if (x === 'robotized') {
            return 'Автомат'
        }
        if (x === 'variator') {
            return 'Вариатор'
        }
        if (x === 'manual') {
            return 'Механика'
        }
    }

    function carBodyImgChange(x) {
        if (x === 'suv') {
            return crossover
        }
        if (x === 'sedan') {
            return sedan
        }
        if (x === 'hatchback') {
            return hatchback
        }
        if (x === 'liftback') {
            return liftback
        }
        if (x === 'minivan' || 'compactvan') {
            return minivan
        }

    }

    function driverTypeName(x) {
        if (x === 'full_4wd') {
            return 'Полный'
        }
        if (x === 'front') {
            return 'Передний'
        }
    }

    function engineTypeName(x) {
        if (x === 'diesel') {
            return 'дизель'
        }
        if (x === 'petrol') {
            return 'бензин'
        }
    }

    function logoFind(LogoList, str) {
        if (LogoList.find(brend => brend.name === str)) {
            const imgLogo = LogoList.find(brend => brend.name === str)?.img
            return imgLogo
        }
    }

    useEffect(() => {
        console.log(currentFilter)
    }, [currentFilter])

    useEffect(() => {
        console.log(allCheckedTypeGearBox, automatiCheckedTypeGearBox, notAutomatiCheckedTypeGearBox)
    }, [allCheckedTypeGearBox, automatiCheckedTypeGearBox, notAutomatiCheckedTypeGearBox])

    return (
        <>
            <div className="sideBar">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChangeBar('panel1')}
                    sx={{ backgroundColor: '#0076dd', color: 'white',margin:'10px',width: '100%' }}
                >
                    <AccordionSummary
                        expandIcon={<TuneIcon  sx={{color:'white',width:'40px'}}/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '100%' }}>
                            Параметры поиска
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails     sx={{ backgroundColor: '#efe9e9',width: '100%' }}>
                        <div className="rowSideBar" id="center" >
                            <ButtonGroup
                                disableElevation
                                variant="outlined"
                                aria-label="Disabled elevation buttons"
                                sx={{width:'100%'}}
                            >
                                <Button sx={{ width: '100%', height: '40px', fontSize: '11px',backgroundColor:'white' }} onClick={(event) => {
                                    setCarType('new')
                                    changeFilter({ carType: 'new' })
                                }}>Новые</Button>
                                <Button sx={{ width: '100%', height: '40px', fontSize: '11px',backgroundColor:'white' }} onClick={(event) => {
                                    setCarType('old')
                                    changeFilter({ carType: 'used' })
                                }} >С пробегом</Button>
                            </ButtonGroup>
                        </div>
                        <div className="rowSideBar" id="center" >
                            <Accordion sx={{width:'100%'}}>
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
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className="rowSideBar" id="column" >
                            <Accordion sx={{width:'100%'}}>
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
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className="rowSideBar" id="column" >
                            <Accordion sx={{width:'100%'}}>
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
                            <Accordion sx={{width:'100%'}}>
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
                            <Accordion sx={{width:'100%'}}>
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
                                                label={gearBoxName(gearBox)}
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
                                        {filteredProps.carsBodyTypes.map(bodyType =>
                                            <div className="carTypeDiv">
                                                <img
                                                    className="imgCarType"
                                                    src={carBodyImgChange(bodyType).src}
                                                    onClick={() => {
                                                        setCurrentFilter(prevFilterState => {
                                                            if (prevFilterState.carBodyTypeName?.includes(bodyType)) {
                                                                return {
                                                                    ...prevFilterState,
                                                                    carBodyTypeName: prevFilterState.carBodyTypeName.filter(el => el !== bodyType)
                                                                }
                                                            }
                                                            return { ...prevFilterState, carBodyTypeName: [...prevFilterState.carBodyTypeName, bodyType] }
                                                        })
                                                    }}
                                                    alt={bodyType}
                                                />

                                            </div>
                                        )}
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className="rowSideBar" id="column" >
                            <Accordion sx={{width:'100%'}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ fontSize: '14px' }}>Привод</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="rowSideBar" id="column" >
                                        <FormGroup>
                                            {/* <FormControlLabel
                                        key={'Любой'}
                                        control={<Checkbox />}
                                        label={'Любой'}
                                        onClick={() => {
                                            setCurrentFilter(prevFilterState => {
                                                    return { ...prevFilterState, driverTypeName: [...prevFilterState.driverTypeName, []] }
                                                })
                                          
                                        }}
                                    /> */}
                                            {filteredProps.driverTypes.map(driver =>
                                                <FormControlLabel
                                                    key={driver}
                                                    control={<Checkbox />}
                                                    label={driverTypeName(driver)}
                                                    onClick={() => {
                                                        setCurrentFilter(prevFilterState => {
                                                            if (prevFilterState.driverTypeName?.includes(driver)) {
                                                                return {
                                                                    ...prevFilterState,
                                                                    driverTypeName: prevFilterState.driverTypeName.filter(el => el !== driver)
                                                                }
                                                            }
                                                            return { ...prevFilterState, driverTypeName: [...prevFilterState.driverTypeName, driver] }
                                                        })
                                                    }}
                                                />
                                            )
                                            }

                                        </FormGroup>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className="rowSideBar" id="column" >
                            <Accordion sx={{width:'100%'}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ fontSize: '14px' }}>Топливо</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="rowSideBar" id="column" >
                                        {filteredProps.engineTypes.map(engine =>
                                            <FormControlLabel
                                                key={engine}
                                                control={<Checkbox />}
                                                label={engineTypeName(engine)}
                                                onClick={() => {
                                                    setCurrentFilter(prevFilterState => {
                                                        if (prevFilterState.engineTypeName?.includes(engine)) {
                                                            return {
                                                                ...prevFilterState,
                                                                engineTypeName: prevFilterState.engineTypeName.filter(el => el !== engine)
                                                            }
                                                        }
                                                        return { ...prevFilterState, engineTypeName: [...prevFilterState.engineTypeName, engine] }
                                                    })
                                                }}
                                            />
                                        )
                                        }
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div >
            <style jsx>{`

                #color {
                    gap:10px;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                }

                .sideBar {
                    display:none;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    height: auto;
                }

                .rowSideBar {
                    width: 100%;
                    flex-direction: row;
                    height: auto;
                    padding:5px;
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

             
                @media(max-width: 600px) {
                    .sideBar {
                        display:flex;
                    }
                }
              
                
            `}</style>
        </>
    )
}

export default CarFilterSidebarMobile