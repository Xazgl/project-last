import Link from "next/link";
import Image from 'next/image';
import banner from '/public/images/1.webp'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import exeed from '/public/images/logo-brends/exeed.jpg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Dispatch, FormEvent, SetStateAction, useEffect, useMemo, useRef, useState } from "react"
import { Box, Button, ButtonGroup, Checkbox, FormControlLabel, FormGroup, FormLabel, Slider, TextField } from "@mui/material";
import suv from '/public/images/carBodyTyp/suv.svg'
import crossover from '/public/images/carBodyTyp/crossover.svg'
import hatchback from '/public/images/carBodyTyp/hatchback.svg'
import liftback from '/public/images/carBodyTyp/liftback.svg'
import minivan from '/public/images/carBodyTyp/minivan.svg'
import sedan from '/public/images/carBodyTyp/sedan.svg'
import { Car, YandexGeo } from "@prisma/client";



import { SwiperEl } from "../sliders/desk/swiperTest/Swiper";
import { CarouselComponent } from "../sliders/mod/Carousel";
import SwiperTest from "../sliders/desk/swiperTest/News";
import { AllCarDto, BrandPageDto } from "../../../../../@types/dto";
import { FilterUserOptions } from "../filter/typeForFilter";
import CarFilterSidebarMobile from "../filter/CarFilterSidebarMobile";
import CarFilterSidebar from "../filter/CarFilterSidebar";
import CardModelsFilter from "../filter/modelsCard/CardModelsFilter";
import FilteredNewCars from "../filter/FilteredNewCars";
import News from "./news/News";
import MapBrandDynamic from "./MapBrandDynamic";




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
    brands: Brand[],
    brand?: BrandPageDto,
    mapsGeo?:YandexGeo[]
    
}

export function FilterWithPageComponentDynamic({ setShowModal,brand,mapsGeo, setShowModalFavorite, cars, brands }: Props) {
    //Отфильтрованные машины, по умолчанию все машины конкретного бренда
    const [filteredCars, setFilteredCars] = useState(cars)
    // Определение количества отображаемых элементов в зависимости от ширины экрана
    const [mobileAdaptive, setMobileAdaptive] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setMobileAdaptive(true);
            } else {
                setMobileAdaptive(false);
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [])


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

    //скрол элемента после фильтра 
    const refCars = useRef<HTMLDivElement>(null)

    const scrollToTargetElement = () => {
        if (refCars .current) {
            // Используйте метод прокрутки, который подходит для вашего случая
            // Например, если у вас есть контейнер с прокруткой, вы можете использовать его метод прокрутки
            refCars .current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    };
    

    // useEffect(() => {
    //     // Прокрутка к элементу при каждом изменении filteredCars
    //     scrollToTargetElement();
    // }, [filteredCars]);



    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }


    useEffect(() => {
       console.log(`${currentFilter.modelName.length }`)
    }, [currentFilter.modelName]);




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
                    <MapBrandDynamic brand={brand} mapsGeo={mapsGeo}/>
                    {currentFilter.modelName.length <= 0 ?
                        <div className="block" ref={refCars}>
                            <CardModelsFilter cars={cars} filteredCars={filteredCars}
                                setFilteredCars={setFilteredCars}
                                setCurrentFilter={setCurrentFilter} currentFilter={currentFilter}
                            />
                        </div>
                        :
                        <>
                            <div className="block" id="carScroll" ref={refCars}>
                                <FilteredNewCars filteredCars={filteredCars} setShowModal={setShowModal}
                                    setShowModalFavorite={setShowModalFavorite} cars={cars}
                                    setFilteredCars={setFilteredCars}
                                />
                            </div>
                        </>
                    }
                    <div className="block" >
                        <News />
                    </div>
                    <div className="block" >
                        {mobileAdaptive == false ?
                            <>
                                <SwiperTest cars={cars} />
                            </>
                            :
                            <>
                                <CarouselComponent cars={cars} />
                            </>
                        }
                    </div>
                </div>
            </div >

            <style jsx>{`
                .background {
                    display:flex; 
                    width: 100%;
                    height:100%;
                    margin-top: 20px;
                    position: relative;
                    
                }

                .carBlock {
                    display:flex;
                    width: 100%;
                    height:100%;
                    flex-direction: column;
                }

                .block {
                    margin-top: 30px;
                }

                #carScroll{
                  height: 100%;
                    
                }

                #carScroll::-webkit-scrollbar {
                  width: 10px; /* Ширина скроллбара */
                }
                
                #carScroll::-webkit-scrollbar-track {
                  background-color: #fdb913 ; /* Цвет фона трека скроллбара */
    
                }
                
                #carScroll::-webkit-scrollbar-thumb {
                    border-radius: 4px; 
                   background-color:  #131313 ; /* Цвет ползунка скроллбара */
                }
                
                #carScroll::-webkit-scrollbar-thumb:hover {
                  background-color: #555; /* Цвет ползунка скроллбара при наведении */
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