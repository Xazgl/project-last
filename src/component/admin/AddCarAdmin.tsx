import { FilterFrames, Height } from '@mui/icons-material'
import { Button, ImageList, ImageListItem, Input, TextField } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { Offer } from '@prisma/client'
import React, { ChangeEvent, Suspense, useCallback, useMemo, useRef } from 'react'
import { Dispatch, FormEvent, MouseEvent, SetStateAction, useEffect, useState } from 'react'
import salesOne from '/public/images/sales.webp'
import salesTwo from '/public/images/sales2.webp'
import salesThree from '/public/images/sales3.webp'
import ImageIcon from '@mui/material/Icon';
import { AllOffersDto } from '../../../@types/dto'

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

// import MyEditor from './Editor' ниже отключен рендер на сервере 
const MyEditor = dynamic(() => import("./Editor"), { ssr: false })













export function AddCarAdmin() {
    const [sales, setSales] = useState<Offer[]>([])
    const [showAdd, setShowAdd] = useState(false)
    const fileRef = useRef<HTMLInputElement>(null)

    //model Car 
    const [id_1c, setId_1c] = useState('')
    const [usedOrNew, setUsedOrNew] = useState('')     // тип авто бу или new     
    const [color, setColor] = useState('')     // цвет авто если не металик  
    const [bodyColorMetallic, setBodyColorMetallic] = useState('0')     //  если  металик  
    const [mileage, setMileage] = useState('')     // Пробег в цифрах   
    const [mileageUnit, setMileageUnit] = useState('km')     // Пробег в единицах измерения       
    const [vin, setVin] = useState('')     // vin номер авто
    const [year, setYear] = useState('')  // год формата 2023  
    const [price, setPrice] = useState<number>(0)  //цена авто                                      
    const [priceMonth, setPriceMonth] = useState(price / 150)  // месячный платеж по кредите, рассчитывается цена авто / 150               
    const [special_price, setSpecial_price] = useState<number>(0) //специальная цена
    const [specialOffer, setSpecialOffer] = useState<number>(0) //специальное предложение 
    const [tradeinDiscount, setTradeinDiscount] = useState<number>(0) //скидка по Трейд-ину
    const [insuranceDiscount, setInsuranceDiscount] = useState<number>(0) //скидка 
    const [creditDiscount, setCreditDiscount] = useState<number>(0) //скидка по кредиту
    const [description, setDescription] = useState('') // описание поле в базе desc
    const [image, setImage] = useState<File | null>(null) // изображение авто 
    const imageURL = useMemo(() => image ? URL.createObjectURL(image) : '', [image])

    //model CarModel 
    const [id_1cModel, setId_1cModel] = useState<number>(0) // номер 1С в таблице CarModel бренда
    const [modelId_1c, setModelId_1c] = useState<number>(0) // номер 1С в таблице CarModel модели по нему поиск
    const [brandName, setBrandName] = useState('')  // название бренда
    const [modelName, setModelName] = useState('')  // название модели
    const [categoryId_1c, setСategoryId_1c] = useState<number>(0) //легковая или грузовая
    const [categoryIdName, setСategoryIdName] = useState('')  // название категории
    const [generationId_1c, setGenerationId_1c] = useState<number>(0)  //  id 1C поколения авто 
    const [generationIName, setGenerationIName] = useState('')  // название категории


    //model CarModification
    const [id_1cModification, setId_1cModification] = useState<number>(0) // номер 1С в таблице CarModification
    const [modificationName, setModificationName] = useState('') // пример 2.0 AMT (197 л.с.) 4WD
    const [engineType, setEngineType] = useState('') // petrol или diesel
    const [engineVolume, setEngineVolume] = useState('') // объем двигателя пример 1598 
    const [enginePower, setEnginePower] = useState('') // примемр 108 
    const [gearboxType, setGearboxType] = useState('') // примемр automatic или manual
    const [driveType, setDriveType] = useState('') // привод пример front или full_4wd
    const [bodyType, setBodyType] = useState('') // тип кузова  пример suv  или sedan, hatchback, liftback, minivan
    const [bodyDoorCount, setBodyDoorCount] = useState<number>(0)  // количесво дверей авто 
    const [steeringWheel, setSteeringWheel] = useState('') // руль правый или левый , пример left или right
    const [length, setLength] = useState('') //длинна авто 1500 
    const [width, setWidth] = useState('') //ширина авто

    //model CarComplectation 
    const [id_1cComplectation, setId_1cComplectation] = useState<number>(0) // номер 1С в таблице CarComplectation 
    const [сomplectationName, setСomplectationName] = useState('') // название комплектации 
    const [seatsCar, setSeatsCar] = useState('') //места колличество  5 или 8 и тп

    //model Extras
    const [groupId, setGroupId] = useState('') // 1
    const [groupName, setGroupName] = useState('') // Активная безопасность	
    const [extrasName, setExtrasName] = useState('') //Антиблокировочная система

    //model DealerModel 
    const [id_1cDealer, setId_1cDealer] = useState<number>(0) // номер 1С в таблице DealerModel   4587
    const [dealerName, setDealerName] = useState('') // название ДЦ   Арконт FAW Волгоград	
    const [address, setAddress] = useState('') //адрес  Волгоград, Вильнюсская улица, 42/2	
    const [phone, setPhone] = useState('') // телефон +7 (844) 220-47-05


    const styles = {
        editor: {
            border: '1px solid gray',
            minHeight: '6em',
            width: '100%'
        },
        sun: {
            margin: '30px',
            border: '1px solid gray',
            minHeight: '6em',
            width: '100%'
        },
    };
    /////////////////////////////////////////////

    //////////////////////////// sun text redactor 
    const SunEditor = dynamic(() => import("suneditor-react"), {
        ssr: false,
    });
    /////////////////////////////////////////////

    const updateSale = useCallback(async ({ id, active }: Pick<AllOffersDto, 'id' | 'active'>) => {
        const res = await fetch('/api/sales/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ active: !active })
        })
        if (res.ok) {
            setSales(prevSales => {
                return prevSales.map(sale => {
                    return sale.id === id ? { ...sale, active: !active } : sale
                })
            })
        }
    }, [sales])

    async function addSale(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData()
        //model Car 
        formData.append('id_1c', id_1c)
        formData.append('usedOrNew', usedOrNew)
        formData.append('color', color)
        formData.append('bodyColorMetallic', bodyColorMetallic)
        formData.append('mileage', mileage)
        formData.append('mileageUnit', mileageUnit)
        formData.append('vin', vin)
        formData.append('year', year)
        formData.append('priceMonth', priceMonth)
        formData.append('special_price', special_price)
        formData.append('specialOffer', specialOffer)
        formData.append('tradeinDiscount', tradeinDiscount)
        formData.append('insuranceDiscount', insuranceDiscount)
        formData.append('creditDiscount', creditDiscount)
        formData.append('description', description)
        formData.append('price', price)
        //model CarModel 
        formData.append('id_1cModel', id_1cModel)
        formData.append('modelId_1c', modelId_1c)
        formData.append('brandName', brandName)
        formData.append('modelName', modelName)
        formData.append('categoryId_1c', categoryId_1c)
        formData.append('categoryIdName', categoryIdName)
        formData.append('generationId_1c', generationId_1c)
        formData.append('generationIName', generationIName)
        //model CarModification
        formData.append('id_1cModification', id_1cModification)
        formData.append('modificationName', modificationName)
        formData.append('engineType', engineType)
        formData.append('engineVolume', engineVolume)
        formData.append('enginePower', enginePower)
        formData.append('gearboxType', gearboxType)
        formData.append('bodyType', bodyType)
        formData.append('bodyDoorCount', bodyDoorCount)
        formData.append('steeringWheel', steeringWheel)
        formData.append('length', length)
        formData.append('width', width)
        //model CarComplectation 
        formData.append('id_1cComplectation', id_1cComplectation)
        formData.append('сomplectationName', сomplectationName)
        formData.append('seatsCar', seatsCar)
        //model Extras
        formData.append('groupId', groupId)
        formData.append('groupName', groupName)
        formData.append('extrasName', extrasName)
        //model DealerModel 
        formData.append('id_1cDealer', id_1cDealer)
        formData.append('dealerName', dealerName)
        formData.append('address', address)
        formData.append('phone', phone)

        try {
            if (image) formData.append('image', image)
            const res = await fetch('/api/sales', {
                method: 'POST',
                body: formData
            })
            if (res.ok) {
                const newSale: Offer = await res.json()
                setSales(prevSales => {
                    return [...prevSales, newSale]
                })
                setShowAdd(false)
                setTitle('')
                setShortDesc('')
                setDescription('')
                setPrice('')
                setFilterMainPeopleResult(0)
                setDetailFilterBrandResult(0)
                setDetailFilterModelResult(0)
                setImage(null)
            }
        } catch (error) {
            console.log(error)
        }
    }

    function onImageChange(event: ChangeEvent<HTMLInputElement>) {
        const files = event.target.files ? Array.from(event.target.files) : []
        if (files.length > 0) {
            setImage(files[0])
        }
    }

    return <>
        <Button sx={{
            marginLeft: '30px', marginTop: '20px', marginBottom: '10px', textAlign: 'center', backgroundColor: '#2e2e2e', color: 'white', border: 'solid 2px white', fontFamily: 'TacticSans-Reg',
            '&:hover': {
                backgroundColor: '#0069d9',
            },
        }} onClick={() => setShowAdd(true)} disabled={showAdd}>Добавить авто</Button>
        {showAdd &&
            <>
                <div className='background'>
                    <div className='column'>
                        <form onSubmit={addSale}>
                            <div className='row'>
                                <TextField label="title" variant="outlined" value={title}
                                    onChange={e => setTitle(e.target.value)} />
                            </div>
                            <div className='row'>
                                <TextField label="shortDesc" variant="outlined" value={shortDesc}
                                    onChange={e => setShortDesc(e.target.value)} />
                            </div>
                            <div className='row' style={styles.sun} >
                                <Suspense fallback={`Loading...`}>
                                    <MyEditor setDescription={setDescription} />
                                </Suspense>
                            </div>
                            <div className='row'>
                                <TextField label="price" variant="outlined" placeholder='От 20 %' value={price}
                                    onChange={e => setPrice(e.target.value)} />
                            </div>
                            <div className='row'>
                                <select className="selectModel" value={filterMainPeopleResult} name="filterMainPeopleResult" onChange={event => setFilterMainPeopleResult(+event.target.value)}>
                                    <option value={0} selected disabled>Выберите тип</option>
                                    {mainFilterList.map(filterType => <option key={filterType.id} value={filterType.id}>{filterType.name}</option>)}
                                </select>
                            </div>
                            <div className='row'>
                                <select className="selectModel" value={detailFilterBrandResult} name="detailFilterBran" onChange={event => setDetailFilterBrandResult(+event.target.value)}>
                                    <option value={0} selected disabled>Выберите бренд</option>
                                    {brendFilterList.map(filterBrend => <option key={filterBrend.id} value={filterBrend.id}>{filterBrend.name}</option>)}
                                </select>
                            </div>
                            <div className='row'>
                                <select className="selectModel" value={detailFilterModelResult} name="detailFilter" onChange={event => setDetailFilterModelResult(+event.target.value)}>
                                    <option value={0} selected disabled>Выберите модель</option>
                                    {brendFilterList.find(filterBrend => filterBrend.id === detailFilterBrandResult)?.modelCar.map(type => <option key={type.id} value={type.id}>{type.name}</option>)}
                                </select>
                            </div>
                            <div className='row'>Рекомендуемый размер изображения 277 на 230 px</div>
                            <div className='row'>
                                <Button onClick={() => fileRef.current?.click()}>
                                    <ImageIcon />
                                    Выбрать изображения
                                </Button>
                                <input type='file' onChange={onImageChange} ref={fileRef} style={{ display: 'none' }}
                                    accept=".jpg,.jpeg,.png,.webp" />
                            </div>
                            <div className='row'>
                                <Button type='submit'>Создать предложение</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='row'>
                    <ImageList sx={{ width: '300px', height: '300px' }} cols={1} rowHeight={164}>
                        <ImageListItem>
                            <img
                                src={`${imageURL}`}
                                srcSet={`${imageURL}`}
                                loading="lazy"
                            />
                        </ImageListItem>
                    </ImageList>
                </div>

                <style jsx>{` 
                .background {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                     width:100%;
                }

                .column {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width:900px;
                    flex-direction: column;
                }

                .row{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top:10px;
                    width: 100%;
                }
                select {
                    width:223px;
                    height: 56px;
                }
                .imgCustom {
                    background-size: contain;
                    height: 300px;
                }
                
            `}</style>
            </>


        }
    </>

}