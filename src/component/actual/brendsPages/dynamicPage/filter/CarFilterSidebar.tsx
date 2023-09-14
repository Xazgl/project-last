import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Box, Button, ButtonGroup, Checkbox, FormControlLabel, FormGroup, FormLabel, Link, Paper, Slider, TextField } from "@mui/material";

import {
    brandNameFilter, carBodyTypeNameFilter, carTypeFilter, colorNameFilter,
    dealerOfficeFilter, driverTypeNameFilter,
    engineTypeNameFilter, gearBoxNameFilter, modelNameFilter, priceFilter
} from '../../filter/carFilters';
import { nanoid } from 'nanoid';



import TuneIcon from '@mui/icons-material/Tune';

import router, { useRouter } from 'next/router';
import { FilterUserOptions } from '../../filter/typeForFilter';
import RangeSlider from '../../filter/RangeSlider';
import { AllCarDto } from '../../../../../../@types/dto';
import { LogoList, ModelPhotoList, carBodyImgChange, driverTypeName, engineTypeName, gearBoxName, logoFind, modelPhotoFind } from '../../../../../services/functions';



type Brand = {
    brandName: string;
    count: string
}

type Props = {
    cars: AllCarDto,
    setFilteredCars: Dispatch<SetStateAction<AllCarDto>>,
    filteredCars: AllCarDto,
    // brands: string[]
    brands: Brand[],
    currentFilter: FilterUserOptions,
    setCurrentFilter: Dispatch<SetStateAction<FilterUserOptions>>,
}

function CarFilterSidebar({ cars, setFilteredCars, filteredCars, brands, currentFilter, setCurrentFilter }: Props) {
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

    const router = useRouter();
    const [selectedBrand, setSelectedBrand] = useState('');



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


    //filteblackProps выводит все возможные фильтры для выбора по данным из БД
    const filteblackProps = useMemo(() => {
        let filteredCarsProps = {
            dealers: [],
            brands: [],
            models: [],
            colors: [],
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
            // price: [...new Set( filteredCarsProps.price)],
            gearBoxTypes: [...new Set(filteredCarsProps.gearBoxTypes)],
            carsBodyTypes: [...new Set(filteredCarsProps.carsBodyTypes)],
            driverTypes: [...new Set(filteredCarsProps.driverTypes)],
            engineTypes: [...new Set(filteredCarsProps.engineTypes)],
        }

    }, [filteredCars])

    console.log(filteblackProps, 'filteblackProps')


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

    function resetFilteblackCars() {
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
        if (event.target.value === 'Null') resetFilteblackCars()
        setCurrentFilter(prevFilterState => {
            const brandName = event.target.value === 'Null'
                ? null
                : [...(prevFilterState.brandName ?? []), event.target.value]
            console.log(brandName)
            return {
                ...prevFilterState,
                brandName
            }
        })
    }

    useEffect(() => {
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
                <div className="rowSideBar" id="center" >
                    <ButtonGroup
                        disableElevation
                        variant="outlined"
                        aria-label="Disabled elevation buttons"
                        sx={{ width: '100%', justifyContent: 'center' }}
                    >
                        <Link href={'/brands/all'} sx={{ textDecoration: 'none' }}>
                            <Button
                                sx={{
                                    width: 'auto', height: '35px', fontSize: '11px',
                                    border: 'solid 2px #d1d7dd', borderRadius: '0px', color: 'black', backgroundColor: '#f2f2f2'
                                }}
                                onClick={(event) => {
                                    setCarType('new')
                                    changeFilter({ carType: 'new' })
                                }}>Новые</Button>
                        </Link>


                        <Link href={'/brands/arkont-select'} sx={{ textDecoration: 'none' }}>
                            <Button
                                sx={{
                                    width: 'auto', height: '35px', fontSize: '11px',
                                    border: 'solid 2px #d1d7dd', borderRadius: '0px', color: 'black',
                                    '&hover':{
                                        border:'black 2px black'
                                    }
                                }}
                                onClick={(event) => {
                                    setCarType('old')
                                    changeFilter({ carType: 'used' })
                                }} >С пробегом</Button>
                        </Link>
                    </ButtonGroup>
                </div>
                <div className="rowSideBar" id="column" >
                    <FormControlLabel control={<Checkbox color="default" />} label="В поставке" />
                </div>
                <div className="rowSideBar" id="column" >
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{ fontSize: '14px', fontFamily: 'Gilroy' }}>Бренд</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* <Paper elevation={0} sx={{ maxHeight: '200px', overflow: 'auto' }}> */}
                            <div className='scrollBrand'>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    {/* <a
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
                                    </a> */}

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
                                                        color="default"
                                                        checked={selectedBrand === brand.brandName}
                                                        onChange={() => { }}
                                                    />
                                                }
                                                label={`${brand.brandName} `}
                                            />
                                        </a>
                                    ))}

                                </Box>
                            </div>
                            {/* </Paper> */}

                            {/* <select className="selectModel" value={detailFilterBrandResult} name="detailFilterBran"
                                onChange={selectBrandHandler}>
                                <option value={'Null'} selected >Выберите бренд</option>
                                {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
                            </select> */}
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
                        <AccordionDetails    >
                            <FormGroup >
                                {filteblackProps.dealers.map(dealer =>
                                    <FormControlLabel
                                        key={dealer}
                                        control={<Checkbox 
                                            color="default"
                                            checked={currentFilter.dealerOffice?.includes(dealer) || (filteblackProps.dealers.length === 1 && filteblackProps.dealers[0] === dealer)} />}
                                        label={dealer.replace(/Волгоград|Волжский|Землячке|на|Землячке\s*\(.*?\)|Волгоград|Волжский|на|Землячке\s*\(.*?\)/g, "")}
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

                {detailFilterBrandResult !== null && detailFilterBrandResult !== undefined &&
                    <div className="rowSideBar" id="column" >
                        <Accordion defaultExpanded={true}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ fontSize: '14px', fontFamily: 'Gilroy' }}>Модель</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div id="column">
                                    {filteblackProps.models.map(model => (
                                        <FormControlLabel
                                            key={model}
                                            control={
                                                <Box sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
                                                    <Checkbox color="default"

                                                        checked={currentFilter.modelName?.includes(model)} />
                                                    <Avatar
                                                        sx={{ width: '60px', marginLeft: '10px' }}
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
                                    ))}
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
                            <Typography sx={{ fontSize: '14px', fontFamily: 'Gilroy' }}>Цена,    ₽</Typography>
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
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{ fontSize: '14px', fontFamily: 'Gilroy' }}>Цвет</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div id="color" >
                                {filteblackProps.colors.map(color =>
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
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{ fontSize: '14px', fontFamily: 'Gilroy' }}>Коробка</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormGroup>
                                {filteblackProps.gearBoxTypes.map(gearBox =>
                                    <FormControlLabel
                                        key={gearBox}
                                        control={<Checkbox checked={currentFilter.gearBoxName?.includes(gearBox)} color="default" />}
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
                            <Typography sx={{ fontSize: '14px', fontFamily: 'Gilroy' }}>Тип кузова</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div id="carBodyType" >
                                {filteblackProps.carsBodyTypes.map(bodyType =>
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
                                <FormGroup>
                                    {filteblackProps.driverTypes.map(driver =>
                                        <FormControlLabel
                                            key={driver}
                                            control={<Checkbox checked={currentFilter.driverTypeName?.includes(driver)} color="default"/>}
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
                                {filteblackProps.engineTypes.map(engine =>
                                    <FormControlLabel
                                        key={engine}
                                        control={<Checkbox checked={currentFilter.engineTypeName?.includes(engine)}  color="default"/>}
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

                    {
                        filteredCars.length == 1 ? (
                            <h6 style={{ color: '#d1d7dd' }}>{filteredCars.length} автомобиль</h6>
                        ) : filteredCars.length > 1 && filteredCars.length <= 4 ? (
                            <h6 style={{ color: '#d1d7dd' }}>{filteredCars.length} автомобиля</h6>
                        ) : (
                            <h6 style={{ color: '#d1d7dd' }}> {filteredCars.length} автомобилей</h6>
                        )
                    }

                    <Button
                        variant="outlined"
                        sx={{
                            width: '100%', fontSize: '12px', height: '40px', fontFamily: 'Gilroy',
                            border: 'solid 1px #d1d7dd', borderRadius: '0px', backgroundColor: '#f2f2f2', color: 'black'
                        }}
                        onClick={resetFilteblackCars}>
                        Очистить фильтры
                    </Button>
                </div >
            </div >
            <style jsx>{`

                #color {
                    gap:10px;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                }

                .sideBar {
                    position: sticky; 
                    top: 0;
                    left:0;
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    width: 420px;
                    height: 80vh;
                    border:1px solid #d4d3d36f;
                    overflow: auto;
                }
                
                .sideBar::-webkit-scrollbar {
                  width: 7px; /* Ширина скроллбара */
                }
                
                .sideBar::-webkit-scrollbar-track {
                  background-color: #D1AC02 ; /* Цвет фона трека скроллбара */
    
                }
                
                .sideBar::-webkit-scrollbar-thumb {
                    border-radius: 4px; 
                  background-color:  #131313 ; /* Цвет ползунка скроллбара */
                }
                
                .sideBar::-webkit-scrollbar-thumb:hover {
                  background-color: #555; /* Цвет ползунка скроллбара при наведении */
                }

                .rowSideBar {
                    width: 100%;
                    flex-direction: row;
                    height: auto;
                    padding:20px;
                    border-bottom: 1px solid #d4d3d34e;
                }

                .scrollBrand{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    overflow: auto;
                    max-height: 200px;
                }


                .scrollBrand::-webkit-scrollbar {
                  width: 7px; /* Ширина скроллбара */
                }
                
                .scrollBrand::-webkit-scrollbar-track {
                  background-color: #D1AC02 ; /* Цвет фона трека скроллбара */
    
                }
                
                .scrollBrand::-webkit-scrollbar-thumb {
                  border-radius: 4px; 
                  background-color:  #131313 ; /* Цвет ползунка скроллбара */
                }
                
                .scrollBrand::-webkit-scrollbar-thumb:hover {
                  background-color: #555; /* Цвет ползунка скроллбара при наведении */
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
                    border:solid 1px  #131313;
                    font-size:16px;
                    margin-top:5px;
                    padding: 5px 5px;
                    font-family: 'Gilroy','sans-serif'; 

                }

                #price {
                    display: flex;
                    font-family: 'Gilroy','sans-serif'; 

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
                    border:solid 1px  #131313;
                    font-size:16px;
                    font-family: 'Gilroy','sans-serif'; 

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
                    .sideBar{
                        display: none;
                    }
                }
                
            `}</style>
        </>
    )
}

export default CarFilterSidebar