import { FilterFrames, Height } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Button, createTheme, ImageList, ImageListItem, Input, TextField, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { Offer } from '@prisma/client'
import React, { ChangeEvent, useReducer, Suspense, useCallback, useMemo, useRef } from 'react'
import { Dispatch, FormEvent, MouseEvent, SetStateAction, useEffect, useState } from 'react'
import salesOne from '/public/images/sales.webp'
import salesTwo from '/public/images/sales2.webp'
import salesThree from '/public/images/sales3.webp'
import ImageIcon from '@mui/material/Icon';
import { CarDto, AllOffersDto } from '../../../@types/dto'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import banner from '/public/images/admin/example.png'

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import { type } from 'os'

// import MyEditor from './Editor' ниже отключен рендер на сервере 
const MyEditor = dynamic(() => import("./Editor"), { ssr: false })


type Car = {
    id_1c_Car: String
    usedOrNew: String, //новая или БУ
    color: String, //цвет 
    bodyColorMetallic: String, //цвет металик 
    mileage: String, //пробег
    //mileageUnit: String, // единцы пробега  км или мили
    vin: String,
    year: String,//год выпуска
    //priceMonth: Number, //стоимость месяц
    price: String, //стоимость всего
    special_price: String, //спец цена
    specialOffer: String, // спец предложение 
    tradeinDiscount: String, // скидка трейд
    creditDiscount: String, // скидка
    insuranceDiscount: String, // скидка ?
    description: String, //описание
    carModelId: String,  // по данному полю идет свзяь с CarModel   
    carModificationId: String, // по данному полю идет свзяь с CarModification 
    carComplectationId: String, // по данному полю идет свзяь с CarComplectation
    dealerModelId: String,// по данному полю идет свзяь с DealerModel  
    //CarModel 
    // id_1c_CarModel: String,   //бренд id CarModel 
    modelId_1c: String,
    brandName: String, //бренд
    modelName: String, //модель
    categoryId_1c: String,//легковая или грузовая
    categoryIdName: String,
    generationId_1c: String,//поколение id
    generationIName: String, //название поколения 
    //Extras 
    groupId: String,
    groupName: String,
    nameExtras: String,
    //CarModification 
    // id_1c_CarModification: String, // modification
    nameCarModification: String,// пример 2.0 AMT (197 л.с.) 4WD
    engineType: String,// тип двигателя и топливо
    engineVolume: String, // объем двигателя
    enginePower: String, // л.с двигателя
    gearboxType: String, //коробка передач 
    driveType: String,// привод
    bodyType: String, // тип кузова 
    bodyDoorCount: String,// кол. дверей
    steeringWheel: String, // руль левый или правый 
    length: String, //длинна авто
    width: String,//ширина авто
    //CarComplectation 
    // id_1c_CarComplectation: String,// сomplectation
    nameCarComplectation: String, // пример Sport Edition
    seatsCar: String,//места колличество 
    //DealerModel 
    // id_1c_DealerModel: String,//id дилера их 1С
    nameDealerModel: String,
    address: String,  //адрес ДЦ poe_id
    phone: String, // телефон ДЦ
}

type ActionTypes = 'id_1c_Car' | 'usedOrNew' | 'color'
    | 'bodyColorMetallic' | 'mileage' | 'mileageUnit' |
    'vin' | 'year' | 'price' | 'special_price' |
    'specialOffer' | 'tradeinDiscount' | 'creditDiscount' |
    'insuranceDiscount' | 'description' | 'carModelId' |
    'carModificationId' | 'carComplectationId' | 'dealerModelId' |
    'modelId_1c' | 'brandName' | 'modelName' |
    'categoryId_1c' | 'categoryIdName' | 'generationId_1c' | 'generationIName' |
    'groupId' | 'groupName' | 'nameExtras' |
    'nameCarModification' | 'engineType' | 'engineVolume' | 'enginePower' |
    'gearboxType' | 'driveType' | 'bodyType' | 'bodyDoorCount' |
    'steeringWheel' | 'length' | 'width' |
    'nameCarComplectation' | 'seatsCar' |
    'nameDealerModel' | 'address' | 'phone'


type Action = {
    type: ActionTypes,
    payload: string
}

function reducer(state: Car, action: Action) {
    switch (action.type) {
        case 'id_1c_Car':
            return { ...state, id_1c_Car: action.payload };
        case 'usedOrNew':
            return { ...state, usedOrNew: action.payload };
        case 'color':
            return { ...state, color: action.payload };
        case 'bodyColorMetallic':
            return { ...state, bodyColorMetallic: action.payload };
        case 'mileage':
            return { ...state, mileage: action.payload };
        case 'vin':
            return { ...state, vin: action.payload };
        case 'year':
            return { ...state, year: action.payload };
        case 'price':
            return { ...state, price: action.payload };
        case 'special_price':
            return { ...state, special_price: action.payload };
        case 'specialOffer':
            return { ...state, specialOffer: action.payload };
        case 'tradeinDiscount':
            return { ...state, tradeinDiscount: action.payload };
        case 'creditDiscount':
            return { ...state, creditDiscount: action.payload };
        case 'insuranceDiscount':
            return { ...state, insuranceDiscount: action.payload };
        case 'description':
            return { ...state, description: action.payload };
        case 'carModelId':
            return { ...state, carModelId: action.payload };
        case 'carModificationId':
            return { ...state, carModificationId: action.payload };
        case 'carComplectationId':
            return { ...state, carComplectationId: action.payload };
        case 'dealerModelId':
            return { ...state, dealerModelId: action.payload };
        case 'modelId_1c':
            return { ...state, modelId_1c: action.payload };
        case 'brandName':
            return { ...state, brandName: action.payload };
        case 'modelName':
            return { ...state, modelName: action.payload };
        case 'categoryId_1c':
            return { ...state, categoryId_1c: action.payload };
        case 'categoryIdName':
            return { ...state, categoryIdName: action.payload };
        case 'generationId_1c':
            return { ...state, generationId_1c: action.payload };
        case 'generationIName':
            return { ...state, generationIName: action.payload };
        case 'groupId':
            return { ...state, groupId: action.payload };
        case 'groupName':
            return { ...state, groupName: action.payload };
        case 'nameExtras':
            return { ...state, nameExtras: action.payload };
        case 'nameCarModification':
            return { ...state, nameCarModification: action.payload };
        case 'engineType':
            return { ...state, engineType: action.payload };
        case 'engineVolume':
            return { ...state, engineVolume: action.payload };
        case 'enginePower':
            return { ...state, enginePower: action.payload };
        case 'gearboxType':
            return { ...state, gearboxType: action.payload };
        case 'driveType':
            return { ...state, driveType: action.payload };
        case 'bodyType':
            return { ...state, bodyType: action.payload };
        case 'bodyDoorCount':
            return { ...state, bodyDoorCount: action.payload };
        case 'steeringWheel':
            return { ...state, steeringWheel: action.payload };
        case 'length':
            return { ...state, length: action.payload };
        case 'width':
            return { ...state, width: action.payload };
        case 'nameCarComplectation':
            return { ...state, nameCarComplectation: action.payload };
        case 'seatsCar':
            return { ...state, seatsCar: action.payload };
        case 'nameDealerModel':
            return { ...state, nameDealerModel: action.payload };
        case 'address':
            return { ...state, address: action.payload };
        case 'phone':
            return { ...state, phone: action.payload };
        default:
            throw new Error();
    }
}

const initialState = {
    id_1c_Car: '',
    usedOrNew: '',
    color: '',
    bodyColorMetallic: '',
    mileage: '',
    vin: '',
    year: '',
    price: '',
    special_price: '',
    specialOffer: '',
    tradeinDiscount: '',
    creditDiscount: '',
    insuranceDiscount: '',
    description: '',
    carModelId: '',
    carModificationId: '',
    carComplectationId: '',
    dealerModelId: '',
    modelId_1c: '',
    brandName: '',
    modelName: '',
    categoryId_1c: '',
    categoryIdName: '',
    generationId_1c: '',
    generationIName: '',
    groupId: '',
    groupName: '',
    nameExtras: '',

    nameCarModification: '',
    engineType: '',
    engineVolume: '',
    enginePower: '',
    gearboxType: '',
    driveType: '',
    bodyType: '',
    bodyDoorCount: '',
    steeringWheel: '',
    length: '',
    width: '',
    nameCarComplectation: '',
    seatsCar: '',

    nameDealerModel: '',
    address: '',
    phone: ''
}


export function AddCarAdmin2() {
    const [showAdd, setShowAdd] = useState(false)
    const fileRef = useRef<HTMLInputElement>(null)
    const [image, setImage] = useState<File | null>(null)
    const [description, setDescription] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState);
    function createHandler(type: ActionTypes) {
        return (e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type, payload: e.target.value })
    }
    const imageURL = useMemo(() => image ? URL.createObjectURL(image) : '', [image])


    const styles = {
        editor: {
            border: '1px solid gray',
            minHeight: '6em',
            width: '100%',
            borderRradius: '7px'

        },
        sun: {
            minHeight: '6em',
            width: '100%',
            display: 'flex',
            justifyContent: 'start',
            borderRradius: '7px'
        },
    };
    /////////////////////////////////////////////

    //////////////////////////// sun text redactor 
    const SunEditor = dynamic(() => import("suneditor-react"), {
        ssr: false,
    });
    /////////////////////////////////////////////

    // async function addCar(e: FormEvent<HTMLFormElement>) {
    //     e.preventDefault()
    //     const formData = new FormData()
    //     //model Car 
    //     formData.append('id_1c', id_1c)
    //     formData.append('usedOrNew', usedOrNew)
    //     formData.append('color', color)
    //     formData.append('bodyColorMetallic', bodyColorMetallic)
    //     formData.append('mileage', mileage)
    //     formData.append('mileageUnit', mileageUnit)
    //     formData.append('vin', vin)
    //     formData.append('year', year)
    //     formData.append('priceMonth', priceMonth)
    //     formData.append('special_price', special_price)
    //     formData.append('specialOffer', specialOffer)
    //     formData.append('tradeinDiscount', tradeinDiscount)
    //     formData.append('insuranceDiscount', insuranceDiscount)
    //     formData.append('creditDiscount', creditDiscount)
    //     formData.append('description', description)
    //     formData.append('price', price)
    //     //model CarModel 
    //     formData.append('id_1cModel', id_1cModel)
    //     formData.append('modelId_1c', modelId_1c)
    //     formData.append('brandName', brandName)
    //     formData.append('modelName', modelName)
    //     formData.append('categoryId_1c', categoryId_1c)
    //     formData.append('categoryIdName', categoryIdName)
    //     formData.append('generationId_1c', generationId_1c)
    //     formData.append('generationIName', generationIName)
    //     //model CarModification
    //     formData.append('id_1cModification', id_1cModification)
    //     formData.append('modificationName', modificationName)
    //     formData.append('engineType', engineType)
    //     formData.append('engineVolume', engineVolume)
    //     formData.append('enginePower', enginePower)
    //     formData.append('gearboxType', gearboxType)
    //     formData.append('bodyType', bodyType)
    //     formData.append('bodyDoorCount', bodyDoorCount)
    //     formData.append('steeringWheel', steeringWheel)
    //     formData.append('length', length)
    //     formData.append('width', width)
    //     //model CarComplectation 
    //     formData.append('id_1cComplectation', id_1cComplectation)
    //     formData.append('сomplectationName', сomplectationName)
    //     formData.append('seatsCar', seatsCar)
    //     //model Extras
    //     formData.append('groupId', groupId)
    //     formData.append('groupName', groupName)
    //     formData.append('extrasName', extrasName)
    //     //model DealerModel 
    //     formData.append('id_1cDealer', id_1cDealer)
    //     formData.append('dealerName', dealerName)
    //     formData.append('address', address)
    //     formData.append('phone', phone)

    //     try {
    //         if (image) formData.append('image', image)
    //         const res = await fetch('/api/cars', {
    //             method: 'POST',
    //             body: formData
    //         })
    //         if (res.ok) {
    //             const newSale: Offer = await res.json()
    //             setSales(prevSales => {
    //                 return [...prevSales, newSale]
    //             })
    //             setShowAdd(false)
    //             setTitle('')
    //             setShortDesc('')
    //             setDescription('')
    //             setPrice('')
    //             setFilterMainPeopleResult(0)
    //             setDetailFilterBrandResult(0)
    //             setDetailFilterModelResult(0)
    //             setImage(null)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    async function addCar(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData()
        for (let key in state) {
            // console.log(key,':',state[key])
            // id_1c_Car : 1111
            formData.append(key, state[key])
        }

        formData.append('descriptionEditor', description)

        try {
            if (image) formData.append('image', image)
            const res = await fetch('/api/cars', {
                method: 'POST',
                body: formData
            })
            if (res.ok) {
                const newCar: CarDto = await res.json()
                setShowAdd(false)
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
                        <div className='row'>
                            <Accordion sx={{ width: '100%', height: 'auto' }}>
                                <AccordionSummary
                                    expandIcon={
                                        <ExpandMoreIcon sx={{
                                            color: 'white'
                                        }}
                                        />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{
                                        backgroundColor: 'rgb(0, 91, 170)',
                                        color: 'white'
                                    }}
                                >
                                    <Typography>ПРИМЕР ЗАПОЛЕНЕНИЯ ПОЛЕЙ</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className='exampleImg'></div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className='row'>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '35px' }}>Форма заполнения</Typography>
                        </div>
                        <form onSubmit={addCar}>
                            <div className='row'>
                                <TextField label="id_1c Машины" variant="outlined"
                                    sx={{ width: '100%' }}
                                    value={state.id_1c_Car}
                                    onChange={createHandler('id_1c_Car')} />
                            </div>
                            <div className='row'>
                                <TextField label="Тип new\used" variant="outlined"
                                    sx={{ width: '100%' }}
                                    value={state.usedOrNew}
                                    onChange={createHandler('usedOrNew')} />
                            </div>
                            <div className='row' style={styles.sun} >
                                <Suspense fallback={`Loading...`}>
                                    <MyEditor setDescription={setDescription} />
                                </Suspense>
                            </div>
                            <div className='row'>
                                <TextField label="Цвет" variant="outlined" placeholder='black'
                                    sx={{ width: '100%' }}
                                    value={state.color}
                                    onChange={createHandler('color')} />
                            </div>
                            <div className='row'>
                                <TextField label="Цвет металлик" variant="outlined" placeholder='black'
                                    sx={{ width: '100%' }}
                                    value={state.bodyColorMetallic}
                                    onChange={createHandler('bodyColorMetallic')} />
                            </div>
                            <div className='row'>
                                <TextField label="Пробег" variant="outlined" placeholder='1'
                                    sx={{ width: '100%' }}
                                    value={state.mileage}
                                    onChange={createHandler('mileage')} />
                            </div>
                            <div className='row'>
                                <TextField label="Vin" variant="outlined" placeholder='vin номер'
                                    sx={{ width: '100%' }}
                                    value={state.vin}
                                    onChange={createHandler('vin')} />
                            </div>
                            <div className='row'>
                                <TextField label="Год" variant="outlined" placeholder='2023'
                                    sx={{ width: '100%' }}
                                    value={state.year}
                                    onChange={createHandler('year')} />
                            </div>
                            <div className='row'>
                                <TextField label="Цена" variant="outlined" placeholder='1500000'
                                    type="number"
                                    sx={{ width: '100%' }}
                                    value={state.price}
                                    onChange={createHandler('price')} />
                            </div>
                            <div className='row'>
                                <TextField label="Спец.цена" variant="outlined" placeholder='1300000'
                                    type="number"
                                    sx={{ width: '100%' }}
                                    value={state.special_price}
                                    onChange={createHandler('special_price')} />
                            </div>
                            <div className='row'>
                                <TextField label="Спец.предлож" variant="outlined" placeholder='1200000'
                                    type="number"
                                    sx={{ width: '100%' }}
                                    value={state.specialOffer}
                                    onChange={createHandler('specialOffer')} />
                            </div>
                            <div className='row'>
                                <TextField label="Скидка трейд-ин" variant="outlined" placeholder='300000'
                                    sx={{ width: '100%' }}
                                    value={state.tradeinDiscount}
                                    onChange={createHandler('tradeinDiscount')} />
                            </div>
                            <div className='row'>
                                <TextField label="Скидка кредит" variant="outlined" placeholder='300000'
                                    type="number"
                                    sx={{ width: '100%' }}
                                    value={state.creditDiscount}
                                    onChange={createHandler('creditDiscount')} />
                            </div>
                            <div className='row'>
                                <TextField label="Скидка" variant="outlined" placeholder='300000'
                                    type="number"
                                    sx={{ width: '100%' }}
                                    value={state.insuranceDiscount}
                                    onChange={createHandler('insuranceDiscount')} />
                            </div>
                            <div className='row'>
                                <TextField label="carModelId" variant="outlined" placeholder='10258'
                                    type="number"
                                    sx={{ width: '100%' }}
                                    value={state.carModelId}
                                    onChange={createHandler('carModelId')} />
                            </div>
                            <div className='row'>
                                <TextField label="carModificationId" variant="outlined" placeholder='69386'
                                    type="number"
                                    sx={{ width: '100%' }}
                                    value={state.carModificationId}
                                    onChange={createHandler('carModificationId')} />
                            </div>
                            <div className='row'>
                                <TextField label="carComplectationId" variant="outlined" placeholder='12947'
                                    type="number"
                                    sx={{ width: '100%' }}
                                    value={state.carComplectationId}
                                    onChange={createHandler('carComplectationId')} />
                            </div>
                            <div className='row'>
                                <TextField label="dealerModelId" variant="outlined" placeholder='4587'
                                    type="number"
                                    sx={{ width: '100%' }}
                                    value={state.dealerModelId}
                                    onChange={createHandler('dealerModelId')} />
                            </div>
                            {/* <div className='row'>
                                <TextField label="id_1c_CarModel" variant="outlined" placeholder='35'
                                    type="number"
                                    sx={{ width: '100%' }}
                                    value={state.id_1c_CarModel}
                                    onChange={createHandler('id_1c_CarModel')} />
                            </div> */}
                            <div className='row'>
                                <TextField label="modelId_1c" variant="outlined" placeholder='10258'
                                    type="number"
                                    sx={{ width: '100%' }}
                                    value={state.modelId_1c}
                                    onChange={createHandler('modelId_1c')} />
                            </div>
                            <div className='row'>
                                <TextField label="Бренд" variant="outlined" placeholder='FAW'
                                    sx={{ width: '100%' }}
                                    value={state.brandName}
                                    onChange={createHandler('brandName')} />
                            </div>
                            <div className='row'>
                                <TextField label="Модель" variant="outlined" placeholder='Besturn X40'
                                    sx={{ width: '100%' }}
                                    value={state.modelName}
                                    onChange={createHandler('modelName')} />
                            </div>
                            <div className='row'>
                                <TextField label="categoryId_1c" variant="outlined" placeholder='1'
                                    type="number"
                                    sx={{ width: '100%' }}
                                    value={state.categoryId_1c}
                                    onChange={createHandler('categoryId_1c')} />
                            </div>
                            <div className='row'>
                                <TextField label="categoryIdName" variant="outlined" placeholder='Легковые'
                                    sx={{ width: '100%' }}
                                    value={state.categoryIdName}
                                    onChange={createHandler('categoryIdName')} />
                            </div>
                            <div className='row'>
                                <TextField label="generationId_1c" variant="outlined" placeholder='10259' onChange={createHandler('generationId_1c')}
                                    type="number"
                                    sx={{ width: '100%' }}
                                    value={state.generationId_1c}
                                />
                            </div>
                            <div className='row'>
                                <TextField label="generationIName" variant="outlined" placeholder='I'
                                    sx={{ width: '100%' }}
                                    value={state.generationIName}
                                    onChange={createHandler('generationIName')} />
                            </div>
                            <div className='row'>
                                <TextField label="groupId" variant="outlined" placeholder='1'
                                    type="number"
                                    sx={{ width: '100%' }}
                                    value={state.groupId}
                                    onChange={createHandler('groupId')} />
                            </div>
                            <div className='row'>
                                <TextField label="groupName" variant="outlined" placeholder='Активная безопасность'
                                    sx={{ width: '100%' }}
                                    value={state.groupName}
                                    onChange={createHandler('groupName')} />
                            </div>
                            <div className='row'>
                                <TextField label="nameExtras" variant="outlined" placeholder='Антиблокировочная система'
                                    sx={{ width: '100%' }}
                                    value={state.nameExtras}
                                    onChange={createHandler('nameExtras')} />
                            </div>
                            {/* <div className='row'>
                                <TextField label="id_1c_CarModification" variant="outlined" placeholder='69386'
                                    sx={{ width: '100%' }}
                                    value={state.id_1c_CarModification}
                                    onChange={createHandler('id_1c_CarModification')} />
                            </div> */}
                            <div className='row'>
                                <TextField label="nameCarModification" variant="outlined" placeholder='1.6 AT (108 л.с.)'
                                    sx={{ width: '100%' }}
                                    value={state.nameCarModification}
                                    onChange={createHandler('nameCarModification')} />
                            </div>
                            <div className='row'>
                                <TextField label="engineType" variant="outlined" placeholder='petrol или diesel'
                                    sx={{ width: '100%' }}
                                    value={state.engineType}
                                    onChange={createHandler('engineType')} />
                            </div>
                            <div className='row'>
                                <TextField label="engineVolume" variant="outlined" placeholder='1598'
                                    sx={{ width: '100%' }}
                                    value={state.engineVolume}
                                    onChange={createHandler('engineVolume')} />
                            </div>
                            <div className='row'>
                                <TextField label="enginePower" variant="outlined" placeholder='108'
                                    sx={{ width: '100%' }}
                                    value={state.enginePower}
                                    onChange={createHandler('enginePower')} />
                            </div>
                            <div className='row'>
                                <TextField label="Коробка" variant="outlined" placeholder='automatic или manual'
                                    sx={{ width: '100%' }}
                                    value={state.gearboxType}
                                    onChange={createHandler('gearboxType')} />
                            </div>
                            <div className='row'>
                                <TextField label="Привод" variant="outlined" placeholder='front или full_4wd'
                                    sx={{ width: '100%' }}
                                    value={state.driveType}
                                    onChange={createHandler('driveType')} />
                            </div>
                            <div className='row'>
                                <TextField label="Тип кузова" variant="outlined" placeholder='suv, sedan, hatchback, liftback, minivan'
                                    sx={{ width: '100%' }}
                                    value={state.bodyType}
                                    onChange={createHandler('bodyType')} />
                            </div>
                            <div className='row'>
                                <TextField label="Колл дверей" variant="outlined" placeholder='5'
                                    type="number"
                                    sx={{ width: '100%' }}
                                    value={state.bodyDoorCount}
                                    onChange={createHandler('bodyDoorCount')} />
                            </div>
                            <div className='row'>
                                <TextField label="Руль прав/лев" variant="outlined" placeholder='left или right'
                                    sx={{ width: '100%' }}
                                    value={state.steeringWheel}
                                    onChange={createHandler('steeringWheel')} />
                            </div>
                            <div className='row'>
                                <TextField label="Длина" variant="outlined" placeholder='3000'
                                    sx={{ width: '100%' }}
                                    value={state.length}
                                    onChange={createHandler('length')} />
                            </div>
                            <div className='row'>
                                <TextField label="Ширин" variant="outlined" placeholder='1500'
                                    sx={{ width: '100%' }}
                                    value={state.width}
                                    onChange={createHandler('width')} />
                            </div>
                            {/* <div className='row'>
                                <TextField label="id_1c_CarComplectation" variant="outlined" placeholder='12947'
                                    sx={{ width: '100%' }}
                                    value={state.id_1c_CarComplectation}
                                    onChange={createHandler('id_1c_CarComplectation')} />
                            </div> */}
                            <div className='row'>
                                <TextField label="nameCarComplectation" variant="outlined" placeholder='Basic'
                                    sx={{ width: '100%' }}
                                    value={state.nameCarComplectation}
                                    onChange={createHandler('nameCarComplectation')} />
                            </div>
                            <div className='row'>
                                <TextField label="Кол мест" variant="outlined" placeholder='5'
                                    sx={{ width: '100%' }}
                                    value={state.seatsCar}
                                    onChange={createHandler('seatsCar')} />
                            </div>
                            {/* <div className='row'>
                                <TextField label="id_1c_DealerModel" variant="outlined" placeholder='4587'
                                    sx={{ width: '100%' }}
                                    value={state.id_1c_DealerModel}
                                    onChange={createHandler('id_1c_DealerModel')} />
                            </div> */}
                            <div className='row'>
                                <TextField label="Имя дилера" variant="outlined" placeholder='Арконт FAW Волгоград'
                                    sx={{ width: '100%' }}
                                    value={state.nameDealerModel}
                                    onChange={createHandler('nameDealerModel')} />
                            </div>
                            <div className='row'>
                                <TextField label="Адрес" variant="outlined" placeholder='Волгоград, Вильнюсская улица, 42/2'
                                    sx={{ width: '100%' }}
                                    value={state.address}
                                    onChange={createHandler('address')} />
                            </div>
                            <div className='row'>
                                <TextField label="Тел" variant="outlined" placeholder='+7 (844) 220-47-05'
                                    sx={{ width: '100%' }}
                                    value={state.phone}
                                    onChange={createHandler('phone')} />
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
                                <Button type='submit'>Добавить авто</Button>
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
    
                .imgCustom {
                    background-size: contain;
                    height: 300px;
                }

                .exampleImg {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    height: 500px;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-image: url('${banner.src}');

                }
                
            `}</style>
            </>


        }
    </>

}