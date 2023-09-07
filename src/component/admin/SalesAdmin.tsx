
import { Button, ImageList, ImageListItem, Input, TextField, Typography } from '@mui/material'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { Offer } from '@prisma/client'
import React, { ChangeEvent, Suspense, useCallback, useMemo, useRef } from 'react'
import { FormEvent, useEffect, useState } from 'react'
import ImageIcon from '@mui/material/Icon';
import { AllOffersDto } from '../../../@types/dto'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import PanoramaIcon from '@mui/icons-material/Panorama';

// import MyEditor from './Editor' ниже отключен рендер на сервере 
const MyEditor = dynamic(() => import("./Editor"), { ssr: false })

type MainList = {
    id: number,
    name: string,
}

type CarList = {
    id: number,
    name: string,
    modelCar: MainList[]
}

const mainFilterList: MainList[] = [
    {
        id: 1,
        name: 'Новые'
    },
    {
        id: 2,
        name: 'С пробегом'
    },
    {
        id: 3,
        name: 'Владельцам'
    },
]

export const brendFilterList: CarList[] = [
    {
        id: 1,
        name: 'CHERY',
        modelCar: [
            {
                id: 1,
                name: 'TIGGO 4',
            },
            {
                id: 2,
                name: 'TIGGO 4 PRO',
            },
            {
                id: 3,
                name: 'TIGGO 7 PRO',
            },
            {
                id: 4,
                name: 'TIGGO 8',
            },
            {
                id: 5,
                name: 'TIGGO 8 PRO',
            },
        ]
    },
    {
        id: 2,
        name: 'EXEED',
        modelCar: [
            {
                id: 1,
                name: 'LX',
            },
            {
                id: 2,
                name: 'VX',
            },
            {
                id: 3,
                name: 'TXL',
            },
            {
                id: 4,
                name: 'LX-AWD',
            },
        ]
    },
    {
        id: 3,
        name: 'HYUNDAI',
        modelCar: [
            {
                id: 1,
                name: 'SOLARIS',
            },
            {
                id: 2,
                name: 'ELANTRA',
            },
            {
                id: 3,
                name: 'SONATA',
            },
            {
                id: 4,
                name: 'CRETA',
            },
            {
                id: 5,
                name: 'TUCSON',
            },
            {
                id: 6,
                name: 'STARIA',
            },
            {
                id: 7,
                name: 'SANTA FE',
            },
            {
                id: 8,
                name: 'PALISADE',
            },
        ]
    },
    {
        id: 4,
        name: 'KIA',
        modelCar: [
            {
                id: 1,
                name: 'PICANTO',
            },
            {
                id: 2,
                name: 'RIO',
            },
            {
                id: 3,
                name: 'CEED',
            },
            {
                id: 4,
                name: 'CERATO',
            },
            {
                id: 5,
                name: 'K5',
            },
            {
                id: 6,
                name: 'SOUL',
            },
            {
                id: 7,
                name: 'SELTOS',
            },
            {
                id: 8,
                name: 'SPORTAGE',
            },
            {
                id: 9,
                name: 'SORENTO',
            },
            {
                id: 10,
                name: 'MOHAVE',
            }
        ]
    },
    {
        id: 5,
        name: 'MITSUBISHI',
        modelCar: [
            {
                id: 1,
                name: 'ASX',
            },
            {
                id: 2,
                name: 'L200',
            },
            {
                id: 3,
                name: 'CEED',
            },
            {
                id: 4,
                name: 'CERATO',
            },
            {
                id: 5,
                name: 'OUTLANDER',
            },
            {
                id: 6,
                name: 'PAJERO',
            },
            {
                id: 7,
                name: 'ECLIPSE',
            },
        ]
    },
    {
        id: 6,
        name: 'NISSAN',
        modelCar: [
            {
                id: 1,
                name: 'QASHQAI',
            },
            {
                id: 2,
                name: 'X-TRAIL',
            },
            {
                id: 3,
                name: 'TERRANO',
            },
            {
                id: 4,
                name: 'PATHFINDER',
            },
            {
                id: 5,
                name: 'MURANO',
            },
            {
                id: 6,
                name: 'Все модели',
            },
        ]

    },
    {
        id: 7,
        name: 'RENAULT',
        modelCar: [
            {
                id: 1,
                name: 'LOGAN',
            },
            {
                id: 2,
                name: 'SANDERO',
            },
            {
                id: 3,
                name: 'DUSTER',
            },
            {
                id: 4,
                name: 'KAPTUR',
            },
            {
                id: 5,
                name: 'ARKANE',
            },
            {
                id: 6,
                name: 'MASTER',
            },
            {
                id: 7,
                name: 'Все модели',
            },
            {
                id: 8,
                name: 'Кроссоверы',
            },
            {
                id: 9,
                name: 'Легковые',
            },
        ]
    },
    {
        id: 8,
        name: 'VOLKSWAGEN',
        modelCar: [
            {
                id: 1,
                name: 'POLO',
            },
            {
                id: 2,
                name: 'JETTA',
            },
            {
                id: 3,
                name: 'PASSAT',
            },
            {
                id: 4,
                name: 'GOLF',
            },
            {
                id: 5,
                name: 'TAOS',
            },
            {
                id: 6,
                name: 'TIGUAN',
            },
            {
                id: 7,
                name: 'TOURAEG',
            },
            {
                id: 8,
                name: 'TERAMONT',
            },
            {
                id: 9,
                name: 'Все модели',
            },
            {
                id: 10,
                name: 'Кроссоверы',
            },
            {
                id: 11,
                name: 'Легковые',
            }
        ]
    },
    {
        id: 9,
        name: 'UAZ',
        modelCar: [
            {
                id: 1,
                name: 'PATRIOT',
            },
            {
                id: 2,
                name: 'PROFI',
            },
            {
                id: 3,
                name: 'Все модели',
            },
        ]
    },
    {
        id: 10,
        name: 'SUBARU',
        modelCar: [
            {
                id: 1,
                name: 'XV',
            },
            {
                id: 2,
                name: 'FORESTER',
            },
            {
                id: 3,
                name: 'OUTBACK',
            },
            {
                id: 4,
                name: 'Все модели',
            },
            {
                id: 5,
                name: 'Кроссоверы',
            },
            {
                id: 6,
                name: 'Легковые',
            }
        ]

    },
    {
        id: 11,
        name: 'JAGUAR',
        modelCar: [
            {
                id: 1,
                name: 'F-PACE',
            },
            {
                id: 2,
                name: 'E-PACE',
            },
            {
                id: 3,
                name: 'I-PACE',
            },
            {
                id: 4,
                name: 'F-TYPE',
            },
            {
                id: 5,
                name: 'XF',
            },
            {
                id: 6,
                name: 'Все модели',
            },
            {
                id: 7,
                name: 'Кроссоверы',
            },
            {
                id: 8,
                name: 'Легковые',
            }
        ]
    },
    {
        id: 12,
        name: 'LANDROVER',
        modelCar: [
            {
                id: 1,
                name: 'SPORT',
            },
            {
                id: 2,
                name: 'VELAR',
            },
            {
                id: 3,
                name: 'EVOQUE',
            },
            {
                id: 4,
                name: 'DISCOVERY',
            },
            {
                id: 5,
                name: 'Все модели',
            },
        ]
    },
    {
        id: 13,
        name: 'SUZUKI',
        modelCar: [
            {
                id: 1,
                name: 'VITARA',
            },
            {
                id: 2,
                name: 'SX4',
            },
            {
                id: 3,
                name: 'Все модели',
            },
        ]
    },
    {
        id: 14,
        name: 'JEEP',
        modelCar: [
            {
                id: 1,
                name: 'COMPASS',
            },
            {
                id: 2,
                name: 'GRAND CHEROKEE',
            },
            {
                id: 3,
                name: 'WRANGLER',
            },
            {
                id: 4,
                name: 'Все модели',
            },
        ]
    },
    {
        id: 15,
        name: 'OPEL',
        modelCar: [
            {
                id: 1,
                name: 'CROSSLAND',
            },
            {
                id: 2,
                name: 'GRANDLAND X',
            },
            {
                id: 3,
                name: 'COMBO LIFE',
            },
            {
                id: 4,
                name: 'COMBO',
            },
            {
                id: 5,
                name: 'VIVARO',
            },
            {
                id: 6,
                name: 'ZAFIRA',
            },
            {
                id: 7,
                name: 'Все модели',
            },
        ]
    },
    {
        id: 16,
        name: 'PEUGEOT',
        modelCar: [
            {
                id: 1,
                name: 'PARTNER',
            },
            {
                id: 2,
                name: 'TRAVELLER',
            },
            {
                id: 3,
                name: 'BOXER',
            },
            {
                id: 4,
                name: 'Все модели',
            },
        ]
    },
    {
        id: 17,
        name: 'FAW',
        modelCar: [
            {
                id: 1,
                name: 'BESTUNE T77',
            },
            {
                id: 2,
                name: 'BESTURN X40',
            },
            {
                id: 3,
                name: 'Все модели',
            },
        ]
    },
    {
        id: 18,
        name: 'HISUN',
        modelCar: [
            {
                id: 1,
                name: 'Все модели',
            },
        ]
    },
    {
        id: 19,
        name: 'GEELY',
        modelCar: [
            {
                id: 1,
                name: 'COOLRAY',
            },
            {
                id: 2,
                name: 'ATLAS',
            },
            {
                id: 3,
                name: 'TUGELLA',
            },
            {
                id: 4,
                name: 'Все модели',
            },
        ]
    },
    {
        id: 20,
        name: 'Любой',
        modelCar: [
            {
                id: 1,
                name: 'Все модели',
            },
        ]
    }
]


type SalesAdminProps = {}

export function SalesAdminComponent({ }: SalesAdminProps) {
    const [sales, setSales] = useState<Offer[]>([])
    const [showAdd, setShowAdd] = useState(false)
    const fileRef = useRef<HTMLInputElement>(null)

    const [title, setTitle] = useState('')
    const [shortDesc, setShortDesc] = useState('')
    const [description, setDescription] = useState('')
    const [filterMainPeopleResult, setFilterMainPeopleResult] = useState(0)
    const [detailFilterBrandResult, setDetailFilterBrandResult] = useState(0)
    const [detailFilterModelResult, setDetailFilterModelResult] = useState(0)
    const [price, setPrice] = useState('')
    const [mainFilt, setMainFilt] = useState(0)// id фильтра 
    const [miniFilter, setMiniFilter] = useState(0)// id под фильтра 
    const [image, setImage] = useState<File | null>(null)

    const imageURL = useMemo(() => image ? URL.createObjectURL(image) : '', [image])



    const styles = {
        editor: {
            border: '1px solid gray',
            minHeight: '6em',
            width: '100%'
        },
        sun: {
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

        const filterMainPeople = mainFilterList.find(type => type.id === filterMainPeopleResult)?.name
        const detailFilterBrand = brendFilterList.find(brend => brend.id === detailFilterBrandResult)?.name
        const detailFilterMode = brendFilterList.find(brend => brend.id === detailFilterBrandResult)?.modelCar.find(type => type.id === detailFilterModelResult)?.name

        const formData = new FormData()
        formData.append('title', title)
        formData.append('shortDesc', shortDesc)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('filterMainPeople', filterMainPeople)
        formData.append('detailFilterBrand', detailFilterBrand)
        formData.append('detailFilterMode', detailFilterMode)
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
            marginLeft: '30px', marginTop: '20px', marginBottom: '10px', 
            textAlign: 'center', backgroundColor: '#2e2e2e',
             color: 'white', border: 'solid 2px white', fontFamily: 'Roboto',
            '&:hover': {
                backgroundColor: '#0069d9',
            },
        }} onClick={() => setShowAdd(!showAdd)} >
            {!showAdd &&
                <>
                    Создать акцию
                </>
            }
            {showAdd &&
                <>
                    Назад
                </>
            }

        </Button>
        {showAdd &&
            <>
                <div className='background'>
                    <div className='column'>
                        <div className='row'>
                            <Typography sx={{ fontSize: '35px' }}>Новое предложение</Typography>
                        </div>
                        <form onSubmit={addSale}>
                            <div className='row'>
                                <TextField label="title" variant="outlined" value={title}
                                    sx={{ width: '100%' }}
                                    onChange={e => setTitle(e.target.value)} />
                            </div>
                            <div className='row'>
                                <TextField label="shortDesc" variant="outlined" value={shortDesc}
                                    sx={{ width: '100%' }}
                                    onChange={
                                        e => {
                                            if (shortDesc.length > 68) return;
                                            setShortDesc(e.target.value)
                                        }
                                    }
                                />
                            </div>
                            <div className='row' style={styles.sun} >
                                <Suspense fallback={`Loading...`}>
                                    <MyEditor setDescription={setDescription} />
                                </Suspense>
                            </div>
                            <div className='row'>
                                <TextField label="price" variant="outlined" placeholder='От 20 %' value={price}
                                    sx={{ width: '100%' }}
                                    onChange={
                                        e => {
                                            if (price.length > 30) return;
                                            setPrice(e.target.value)
                                        }
                                    }
                                />
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
                            <div className='row' style={{ marginTop: '20px' }}>Рекомендуемый размер изображения 277х230px</div>
                            <div className='row' style={{ marginTop: '20px' }}>
                                <Button onClick={() => fileRef.current?.click()}
                                    sx={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center' }}
                                    variant="outlined"
                                >
                                    <PanoramaIcon />
                                    Выбрать изображения
                                </Button>
                                <input type='file' onChange={onImageChange} ref={fileRef} style={{ display: 'none' }}
                                    accept=".jpg,.jpeg,.png,.webp" />
                            </div>
                            <div className='row' style={{ marginTop: '20px' }}>
                                <Button type='submit'
                                    variant="contained"
                                    sx={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center' }}
                                >
                                    Создать предложение
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='row'>
                    <ImageList sx={{ width: '300px', height: '300px',backgroundSize:'cover' }} cols={1} rowHeight={164}>
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
                    width:100%;
                    height: 56px;
                    padding-left: 10px;
                    padding-right: 10px;
                    cursor: pointer;
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