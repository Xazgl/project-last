//@ts-check

import React, { Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Box, Button, ButtonGroup, Card, CardContent, CardHeader, CardMedia, Checkbox, FormControlLabel, FormGroup, FormLabel, Grow, IconButton, Link, Paper, Slide, Slider, TextField } from "@mui/material";
import RangeSlider from '../RangeSlider';
import { FilterUserOptions } from '../typeForFilter';
import { brandNameFilter, carBodyTypeNameFilter, carTypeFilter, colorNameFilter, dealerOfficeFilter, driverTypeNameFilter, engineTypeNameFilter, gearBoxNameFilter, modelNameFilter, priceFilter } from '../carFilters';
import { LogoList, ModelPhotoList, carBodyImgChange, driverTypeName, engineTypeName, engineWithReplace, gearBoxName, gearboxName, logoFind, modelPhotoFind, numberWithSpaces } from '../../../../../services/functions';
import { useRouter } from 'next/router';
import RoomIcon from '@mui/icons-material/Room';
import { AllCarDto } from '../../../../../../@types/dto';
import { Circle } from '@mui/icons-material';


type Brand = {
    brandName: string;
    count: string
}

type Props = {
    cars: AllCarDto,
    setFilteredCars: Dispatch<SetStateAction<AllCarDto>>,
    filteredCars: AllCarDto,
    currentFilter: FilterUserOptions,
    setCurrentFilter: Dispatch<SetStateAction<FilterUserOptions>>,
}

function CardModelsFilter({ cars, setFilteredCars, filteredCars, currentFilter, setCurrentFilter }: Props) {
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




    // useEffect(() => {
    //     setMaxPrice(Math.max(...cars.map(car => car.price)))
    // }, [])


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
            // price: [...new Set(filteredCarsProps.price)],
            gearBoxTypes: [...new Set(filteredCarsProps.gearBoxTypes)],
            carsBodyTypes: [...new Set(filteredCarsProps.carsBodyTypes)],
            driverTypes: [...new Set(filteredCarsProps.driverTypes)],
            engineTypes: [...new Set(filteredCarsProps.engineTypes)],
        }

    }, [filteredCars])

    console.log(filteredProps, 'filteredProps')


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

    function resetFilteredCars() {
        setFilteredCars(cars)
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



    const [isVisible, setIsVisible] = useState(false);
    const visibleElementRef = useRef(null);



    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;

            const isElementVisible = (element) => {
                const { top, bottom } = element.getBoundingClientRect();
                return top < windowHeight && bottom >= 0;
            };

            const element = visibleElementRef.current;

            if (isElementVisible(element)) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function getCarDeclension(number) {
        if (number === 1) {
            return 'автомобиль';
        } else if (number >= 2 && number <= 4) {
            return 'автомобиля';
        } else {
            return 'автомобилей';
        }
    }

    return (
        <>
            <div className='background' ref={visibleElementRef}>
            <div className='titleBackground'>Модельный ряд</div>
                <div className='cards' id="desktop">
                    {filteredProps.models.map(model => {
                        const filteredCars = cars.filter(car => model.includes(car.CarModel.modelName));
                        // Шаг 2: Посчитать количество автомобилей
                        const totalCars = filteredCars.length;
                        // Шаг 3: Получить цены всех автомобилей
                        const prices = filteredCars.map(car => car.price);
                        // Шаг 4: Найти минимальную цену
                        const minPrice = Math.min(...prices);
                        // Шаг 5: Найти бренд для каждой модели
                        const brand = filteredCars.length > 0 ? filteredCars[0].CarModel.brandName : '';
                        // Шаг 6: Получить список всех доступных цветов для каждой модели
                        const colors = filteredCars.reduce((acc, car) => {
                            if (!acc.includes(car.color)) {
                                acc.push(car.color);
                            }
                            return acc;
                        }, []);
                        // Шаг 7: Подсчитать количество доступных цветов
                        const totalColors = colors.length;
                        // // Шаг 8: Доступные кпп
                        // const transmissions = filteredCars.reduce((acc, car) => {
                        //     if (!acc.includes(car.CarModification.gearboxType)) {
                        //         acc.push(car.CarModification.gearboxType);
                        //     }
                        //     return acc;
                        // }, []);
                        // // Шаг 9: Доступные двигатели
                        // const engines = filteredCars.reduce((acc, car) => {
                        //     const engine = engineWithReplace(car.CarModification.name);
                        //     if (!acc.includes(engine)) {
                        //         acc.push(engine);
                        //     }
                        //     return acc;
                        // }, []);


                        return (
                            // <Grow in={isVisible} key={model}>
                            <Slide in={isVisible} key={model} direction="right" timeout={500}>
                                <Card key={model} sx={{
                                    width: 240, height: 390, display: 'flex', border: '2px  solid #d1d7dd',
                                    flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear', fontFamily: 'Roboto',
                                    borderRadius: '0px', boxShadow:'none',
                                    '&:hover': {
                                        transform: 'scale(1.04)',
                                        webkitBoxShadow: '4px 4px 16px -2px rgba(0, 0, 0, 0.2);',
                                        mozBoxShadow: '4px 4px 16px -2px rgba(0, 0, 0, 0.2);',
                                        boxShadow: '4px 4px 16px -2px rgba(0, 0, 0, 0.2);'
                                    },
                                    '&:hover .credit': {
                                        display: 'flex',
                                        transition: '1s',
                                        animation: 'credit-open.5s',
                                        marginTop: '400px',
                                        backgroundColor: '#0c7ee1',
                                        position: 'absolute'
                                    }
                                }} >

                                    <CardHeader
                                        sx={{ display: 'flex', height: '50px', dispaly: 'flex', alignItems: 'center' }}
                                        avatar={
                                            <Avatar sx={{}} aria-label="recipe"
                                                src={logoFind(LogoList, brand)}>
                                            </Avatar>
                                        }

                                        title={brand}
                                        subheader={model}


                                    />
                                    <CardMedia
                                        component="img"

                                        image={modelPhotoFind(ModelPhotoList, model)}
                                        sx={{
                                            cursor: 'pointer',
                                        }}
                                        loading="lazy"
                                        decoding='async'
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
                                        alt="car"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            <>
                                                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                                    {totalCars > 0 ?
                                                        <h5>{totalCars} {getCarDeclension(totalCars)}</h5>
                                                        :
                                                        <h5>{totalCars} автомобилей</h5>
                                                    }



                                                    <Circle sx={{ fontSize: '4px' }} />


                                                    {totalColors === 1 ? (
                                                        <h5>{totalColors} цвет</h5>
                                                    ) :
                                                        totalColors > 1 && totalColors <= 4 ? (
                                                            <h5>{totalColors} цвета</h5>
                                                        ) : (
                                                            <h5>Более {totalColors} цветов</h5>
                                                        )
                                                    }

                                                </Box>
                                                <div className='price'> <h3 >Цена от  <span style={{ color: '#0c54a0' }}>{numberWithSpaces(Number(minPrice))}  ₽*</span></h3></div>
                                                {/* <div className='descDiv'>
                                                <ul >
                                                    <li><div className='price'>Двигатель: {engines.join(' / ')}</div></li>
                                                    <li><div className='price'>Трансмиссия: {gearboxName(transmissions.join(' / '))}</div></li>

                                                </ul>
                                            </div> */}
                                                <div className='priceMonth'>
                                                    {/* <button className="btn">от {numberWithSpaces(Math.round(Number(minPrice / 150)))} ₽/мес
                                                </button> */}
                                                    <button
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
                                                        className="btn">Подробнее
                                                    </button>
                                                </div>
                                                {/* < div className='priceMonth' >
                                                <button className="btn"
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
                                                >Выбрать модель
                                                </button>
                                            </div> */}
                                            </>
                                        </Typography>
                                    </CardContent>
                                </Card >
                            </Slide>
                            // </Grow>
                        )
                    }
                    )
                    }
                </div >

                <div className='cards' id="mob">
                    {filteredProps.models.map(model => {
                        const filteredCars = cars.filter(car => model.includes(car.CarModel.modelName));
                        // Шаг 2: Посчитать количество автомобилей
                        const totalCars = filteredCars.length;
                        // Шаг 3: Получить цены всех автомобилей
                        const prices = filteredCars.map(car => car.price);
                        // Шаг 4: Найти минимальную цену
                        const minPrice = Math.min(...prices);
                        // Шаг 5: Найти бренд для каждой модели
                        const brand = filteredCars.length > 0 ? filteredCars[0].CarModel.brandName : '';
                        // Шаг 6: Получить список всех доступных цветов для каждой модели
                        const colors = filteredCars.reduce((acc, car) => {
                            if (!acc.includes(car.color)) {
                                acc.push(car.color);
                            }
                            return acc;
                        }, []);
                        // Шаг 7: Подсчитать количество доступных цветов
                        const totalColors = colors.length;
                        // // Шаг 8: Доступные кпп
                        // const transmissions = filteredCars.reduce((acc, car) => {
                        //     if (!acc.includes(car.CarModification.gearboxType)) {
                        //         acc.push(car.CarModification.gearboxType);
                        //     }
                        //     return acc;
                        // }, []);
                        // // Шаг 9: Доступные двигатели
                        // const engines = filteredCars.reduce((acc, car) => {
                        //     const engine = engineWithReplace(car.CarModification.name);
                        //     if (!acc.includes(engine)) {
                        //         acc.push(engine);
                        //     }
                        //     return acc;
                        // }, []);


                        return (
                            <Slide in={isVisible} key={model} direction="right" timeout={600}>

                                <Card key={model} sx={{
                                    width: 270, height: 360, display: 'flex', border: '2px  solid #d1d7dd',
                                    flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear', fontFamily: 'Roboto',
                                    borderRadius: '0px', boxShadow:'none',
                                    '&:hover': {
                                        transform: 'scale(1.04)',
                                    },
                                    '&:hover .credit': {
                                        display: 'flex',
                                        transition: '1s',
                                        animation: 'credit-open.5s',
                                        marginTop: '400px',
                                        backgroundColor: '#0c7ee1',
                                        position: 'absolute'
                                    }
                                }} >

                                    <CardHeader
                                        sx={{ display: 'flex', height: '50px', dispaly: 'flex', alignItems: 'center' }}
                                        avatar={
                                            <Avatar sx={{}} aria-label="recipe"
                                                src={logoFind(LogoList, brand)}>
                                            </Avatar>
                                        }

                                        title={brand}
                                        subheader={model}


                                    />
                                    <CardMedia
                                        component="img"
                                        image={modelPhotoFind(ModelPhotoList,model)}
                                        sx={{
                                            cursor: 'pointer',
                                            height: '120px'
                                            
                                        }}
                                        loading="lazy"
                                        decoding='async'
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
                                        alt="car"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            <>
                                                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                                    {totalCars > 1 ?
                                                        <h5>{totalCars} автомобиля</h5>
                                                        :
                                                        <h5>{totalCars} автомобиль</h5>
                                                    }

                                                    <Circle sx={{ fontSize: '4px' }} />

                                                    {totalColors === 1 ? (
                                                        <h5>{totalColors} цвет</h5>
                                                    ) :
                                                        totalColors > 1 && totalColors <= 4 ? (
                                                            <h5>{totalColors} цвета</h5>
                                                        ) : (
                                                            <h5>Более {totalColors} цветов</h5>
                                                        )}

                                                </Box>
                                                <div className='price'> <h3 >Цена от <span style={{ color: '#0c54a0' }}>{numberWithSpaces(Number(minPrice))}  ₽*</span></h3></div>
                                                {/* <div className='descDiv'>
                                                <ul >
                                                    <li><div className='price'>Двигатель: {engines.join(' / ')}</div></li>
                                                    <li><div className='price'>Трансмиссия: {gearboxName(transmissions.join(' / '))}</div></li>

                                                </ul>
                                            </div> */}
                                                <div className='priceMonth'>
                                                    {/* <button className="btn">от {numberWithSpaces(Math.round(Number(minPrice / 150)))} ₽/мес
                                                </button> */}
                                                    <button
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
                                                        className="btn">Подробнее
                                                    </button>
                                                </div>
                                                {/* < div className='priceMonth' >
                                                <button className="btn"
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
                                                >Выбрать модель
                                                </button>
                                            </div> */}
                                            </>
                                        </Typography>
                                    </CardContent>
                                </Card >
                            </Slide>
                        )
                    }
                    )
                    }
                </div>
            </div >
            <style jsx>{`

               .background {
                   display:flex;
                   width: 100%;
                   height: 100%;
                   padding: ${cars.length > 0 ? '20px' : '0'};
                   flex-direction: column;
                   align-items: center;
                   overflow: auto;
                   background-color: #f5f2f261;
               }   

               .titleBackground{
                   justify-content: start;
                   width: 100%;
                   font-size: 25px;
                   font-weight: bold;
               }

               
                 #mob{
                   display: none;
                   gap:10px;
                   flex-direction: column;
                   align-items: center;
                   justify-content: start;
                   flex-wrap: nowrap;
                 }
            
                .cards {
                    display: flex;
                    justify-content: start;
                    gap:30px;
                    width: 100%;
                    flex-direction: row;
                    flex-wrap: wrap;
                    margin-top: 20px;
                } 
                      
                .price {
                  font-size: 12px;
                  line-height: 12px;
                  display: flex;
                  align-items: center;
                  letter-spacing: normal;
                  font-family: 'Roboto',sans-serif;
                  color:black;
                }

                .descDiv{
                  display: flex;
                  justify-content: start;
                  font-family: 'Roboto',sans-serif;
                  font-size: 12px;
                  font-weight: bold;
                }

                ul {
                  padding-inline-start: 20px;
                  color:#0c54a0;
                  margin-top:0px;
                }

                li {
                  margin-top:10px;
                }

                .priceMonth {
                  display: flex;
                  justify-content: center;
                  width: 100%;
                  height: 35px;
                  margin-top: 20px;
                }
            
                .btn {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  text-align: center;
                  padding:1px;
                  width:80%;
                  height: 100%;
                  border:solid 1px #005baa;
                  color:white;
                  background-color: #005baa;
                  font-size: 15px;
                  transition: 0.6s;
                  font-family: 'Roboto','sans-serif'; 
                  cursor: pointer;
            
                }

                .btn:hover {
                  background-color:#005baabd; 
                  color:white;
                  transform: scale(0.99);
                }   

                 @media(max-width: 660px) {
                  #desktop{
                    display: none;
                  }
                  
                  #mob{
                    display: flex;
                  } 

                  .titleBackground {
                    font-size: 20px;
                  }

                  .btn {
                    width:100%;
                  }
                }     
            `}</style>
        </>
    )
}

export default CardModelsFilter