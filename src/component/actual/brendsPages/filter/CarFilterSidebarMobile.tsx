import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Box, Button, ButtonGroup, Checkbox, FormControlLabel, FormGroup, FormLabel, Link, Paper, Slider, TextField } from "@mui/material";
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
import { nanoid } from 'nanoid';



import TuneIcon from '@mui/icons-material/Tune';
import { LogoList, ModelPhotoList, carBodyImgChange, driverTypeName, engineTypeName, gearBoxName, logoFind, modelPhotoFind } from '../../../../services/functions';
import { AllCarDto } from '../../../../../@types/dto';
import router from 'next/router';


type Brand = {
    brandName: string;
    count: string
}


type Props = {
    cars: AllCarDto,
    setFilteredCars: Dispatch<SetStateAction<AllCarDto>>,
    filteredCars: AllCarDto,
    currentFilter: FilterUserOptions,
    brands: Brand[],
    setCurrentFilter: Dispatch<SetStateAction<FilterUserOptions>>,
}

// type FilterUserOptions = {
//     carType?: 'new' | 'old'
//     dillerOffice?: string[]
//     minPrice?: number
//     maxPrice?: number
//     brandName?: string[]
//     modelName?: string[]
// }



function CarFilterSidebarMobile({ cars, setFilteredCars, filteredCars, currentFilter, brands, setCurrentFilter }: Props) {


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
    const [valueSliderPrice, setValueSliderPrice] = React.useState<[number, number]>([minPrice, maxPrice]);

    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [selectedBrand, setSelectedBrand] = useState('');

    const handleChangeBar =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };



    useEffect(() => {
        setMaxPrice(Math.max(...cars.map(car => car.price)))
    }, [])


    //Конкретные выбранные фильтры 
    // const [currentFilter, setCurrentFilter] = useState<FilterUserOptions>({
    //     dealerOffice: [],
    //     brandName: null,
    //     modelName: [],
    //     colorName: [],
    //     gearBoxName: [],
    //     carBodyTypeName: [],
    //     driverTypeName: [],
    //     engineTypeName: [],
    //     minPrice: null,
    //     maxPrice: null
    // })

    const changeFilter = (filter: FilterUserOptions) => {
        setCurrentFilter(prevFilterState => {
            return { ...prevFilterState, ...filter }
        })
    }

    useEffect(() => {
        setFilteredCars(cars.filter(car => {
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
        }))
    }, [currentFilter])

    //filteredProps выводит все возможные фильтры для выбора по данным из БД
    const filteredProps = useMemo(() => {
        let filteredCarsProps = {
            dealers: [],
            brands: [],
            models: [],
            colors: [],
            // price: [],
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
            // filteredCarsProps.price.push(car.price)
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
            // price: [...new Set(filteredCarsProps.price)],
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



    // function resetFilteredCars() {
    //     setFilteredCars(cars)
    // }


    function resetFilteredCars() {
        setFilteredCars(cars);
        setCurrentFilter(prevFilterState => ({
            ...prevFilterState,
            modelName: [],
            dealerOffice: [],
            brandName: null,
            colorName: [],
            gearBoxName: [],
            carBodyTypeName: [],
            driverTypeName: [],
            engineTypeName: [],
            minPrice: null,
            maxPrice: null
        }));
    }

    function selectBrandHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        setDetailFilterBrandResult(event.target.value)
        if (event.target.value === 'Null') resetFilteredCars()
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
    }

    // подставлям в массив currentFilter
    useEffect(() => {
        // setCurrentFilter(prevFilterState => {
        //     return { ...prevFilterState, minPrice: valueSliderPrice[0], maxPrice: valueSliderPrice[1] }
        // })
        changeFilter({
            minPrice: valueSliderPrice[0],
            maxPrice: valueSliderPrice[1]
        })
    }, [valueSliderPrice])


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
                    sx={{ backgroundColor: '#0c54a0f0', color: 'white', margin: '1px', width: '100%' }}
                >
                    <AccordionSummary
                        expandIcon={<TuneIcon sx={{ color: 'white', width: '40px' }} />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '100%' }}>
                            Параметры поиска
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ backgroundColor: '#f2f2f2', width: '100%' }}>
                        <div className="rowSideBar" id="center" >

                            <ButtonGroup
                                disableElevation
                                variant="outlined"
                                aria-label="Disabled elevation buttons"
                                sx={{ width: '100%', justifyContent: 'space-between' }}
                            >
                                <Link href={'/brands/all'} sx={{ textDecoration: 'none' }}>
                                    <Button sx={{ width: '120px', height: '40px', fontSize: '11px', backgroundColor: 'white' }} onClick={(event) => {
                                        setCarType('new')
                                    }}>Новые  <CheckIcon sx={{ fontSize: '14px' }} /></Button>
                                </Link>

                                <Link href={'/brands/arkont-select'} sx={{ textDecoration: 'none' }}>
                                    <Button sx={{ width: '120px', height: '40px', fontSize: '11px', backgroundColor: 'white' }} onClick={(event) => {
                                        setCarType('old')
                                    }} >С пробегом</Button>
                                </Link>
                            </ButtonGroup>
                        </div>

                        <div className="rowSideBar" id="center" >
                            <Accordion sx={{ width: '100%' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ fontSize: '14px' }}>Авто в поставке</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormControlLabel control={<Checkbox />} label="В поставке" />
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className="rowSideBar" id="center" >
                            <Accordion sx={{ width: '100%' }}>
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
                                                control={<Checkbox checked={currentFilter.dealerOffice?.includes(dealer) || (filteredProps.dealers.length === 1 && filteredProps.dealers[0] === dealer)} />}
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
                            <Accordion sx={{ width: '100%' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ fontSize: '14px' }}>Цена</Typography>
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
                            <Accordion sx={{ width: '100%' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ fontSize: '14px' }}>Бренд</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Paper elevation={0} sx={{ maxHeight: '200px', overflow: 'auto' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                            <a
                                                href="/brands/any"
                                                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    if (selectedBrand === 'Любой') {
                                                        setSelectedBrand('');
                                                    } else {
                                                        setSelectedBrand('Любой');
                                                        router.push('/brands/any');
                                                    }
                                                }}
                                            >
                                                <Avatar sx={{ maxWidth: '50px', maxHeight: '50px', marginLeft: '10px' }} aria-label="any" src={logoFind(LogoList, 'Любой')} />
                                                <FormControlLabel
                                                    control={<Checkbox checked={selectedBrand === 'Любой'} onChange={() => { }} />}
                                                    label="Любой"
                                                />
                                            </a>

                                            {brands.map((brand) => (
                                                <a
                                                    key={brand.brandName}
                                                    href={`/brands/${brand.brandName === 'УАЗ' ? 'uaz' : brand.brandName.toLowerCase()}`}
                                                    style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        if (selectedBrand === brand.brandName) {
                                                            setSelectedBrand('');
                                                        } else {
                                                            setSelectedBrand(brand.brandName);
                                                            router.push(`/brands/${brand.brandName === 'УАЗ' ? 'uaz' : brand.brandName.toLowerCase()}`);
                                                        }
                                                    }}
                                                >
                                                    <Avatar
                                                        sx={{ maxWidth: '50px', maxHeight: '50px', marginLeft: '10px' }}
                                                        aria-label="brand"
                                                        src={logoFind(LogoList, brand.brandName)}
                                                    />
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                checked={selectedBrand === brand.brandName}
                                                                onChange={() => { }}
                                                            />
                                                        }
                                                        label={`${brand.brandName}`}
                                                    />
                                                </a>
                                            ))}
                                        </Box>
                                    </Paper>
                                    {/* <select className="selectModel" value={detailFilterBrandResult} name="detailFilterBran"
                                        onChange={selectBrandHandler}>
                                        <option value={'Null'} selected >Выберите бренд</option>
                                        {filteredProps.brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
                                    </select> */}
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
                                                    control={
                                                        <Box sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
                                                            <Checkbox checked={currentFilter.modelName?.includes(model)} />
                                                            <Avatar
                                                                sx={{ width: '70px', marginLeft: '10px' }}
                                                                aria-label="brand"
                                                                src={modelPhotoFind(ModelPhotoList, model)}
                                                            />
                                                        </Box>
                                                    }
                                                    label={model}
                                                    onClick={() => {
                                                        setCurrentFilter(prevFilterState => {
                                                            if (prevFilterState.modelName?.includes(model)) {
                                                                return {
                                                                    ...prevFilterState,
                                                                    modelName: prevFilterState.modelName.filter(el => el !== model)
                                                                };
                                                            }
                                                            return { ...prevFilterState, modelName: [...prevFilterState.modelName, model] };
                                                        });
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
                            <Accordion sx={{ width: '100%' }}>
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
                                                key={color}
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
                                                    height: '30px', cursor: 'pointer',
                                                    border: color === 'white' ? '1px solid black' : 'none' // Условие для применения рамки
                                                }}></div>
                                        )}
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className="rowSideBar" id="column" >
                            <Accordion sx={{ width: '100%' }}>
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
                                                control={<Checkbox checked={currentFilter.gearBoxName?.includes(gearBox)} />}
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
                                            <div className="carTypeDiv" key={bodyType}>
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
                            <Accordion sx={{ width: '100%' }}>
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
                                                    control={<Checkbox checked={currentFilter.driverTypeName?.includes(driver)} />}
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
                            <Accordion sx={{ width: '100%' }}>
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
                                                control={<Checkbox checked={currentFilter.engineTypeName?.includes(engine)} />}
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
                        <div className="rowSideBar" id="column" >
                            <Button
                                variant="outlined"
                                sx={{
                                    width: '100%', fontSize: '12px', height: '40px', fontFamily: 'Roboto', backgroundColor: 'white', color: '#005baa',
                                }}
                                onClick={resetFilteredCars}>
                                Очистить фильтры
                            </Button>
                        </div >
                    </AccordionDetails>
                </Accordion >
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
                    position: sticky; 
                    top: 0;
                    left:0;
                    z-index:2;
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
                    font-family: 'Roboto','sans-serif'; 

                }

                #price {
                    display: flex;
                    font-family: 'Roboto','sans-serif'; 

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
                    font-family: 'Roboto','sans-serif'; 

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