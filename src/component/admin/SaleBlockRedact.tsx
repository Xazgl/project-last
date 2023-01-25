import styled from "@emotion/styled"
import { Button, CircularProgress, ImageList, ImageListItem, TextField } from "@mui/material"
import { ChangeEvent, FormEvent, Suspense, useEffect, useMemo, useRef, useState } from "react"
import ImageIcon from '@mui/material/Icon';
import { Sales } from '@prisma/client';
import { AllSaleDto } from '../../../@types/dto';
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

// import MyEditorTwo from "./MyEditorTwo";
// ниже отключен рендер на сервере 
const MyEditorTwo = dynamic(() => import("./MyEditorTwo"), { ssr: false })

type MiniList = {
    id: number,
    name: string,
}

type MainList = {
    id: number,
    name: string,
    miniFilterList: MiniList[]
}

const mainFilterList: MainList[] = [
    {
        id: 1,
        name: 'Диагностика',
        miniFilterList: [
            {
                id: 1,
                name: 'Диагностика подвески',

            },
            {
                id: 2,
                name: 'Электродиагностика',


            },
            {
                id: 3,
                name: 'Инспекционный осмотр',
            },
            {
                id: 4,
                name: 'Диагностика кондиционера',
            },
            {
                id: 5,
                name: 'Проверка двигателя',
            },
            {
                id: 6,
                name: 'Агрегатная диагностика',
            }
        ],
    },
    {
        id: 2,
        name: 'Кузовной ремонт',
        miniFilterList: [
            {
                id: 1,
                name: 'Лакокрасочные работы',

            },
            {
                id: 2,
                name: 'Вытягивание вмятин',


            },
            {
                id: 3,
                name: 'Безокрасочный ремонт',
            },
            {
                id: 4,
                name: 'Полировка',
            },
            {
                id: 5,
                name: 'Нанесение керамики',
            },
            {
                id: 6,
                name: 'Оклейка бронепленкой',
            }
        ],

    },
    {
        id: 3,
        name: 'Покраска',
        miniFilterList: [
            {
                id: 1,
                name: 'Восстановление лакокрасочного покрытия',

            },
            {
                id: 2,
                name: 'Бронирование (оклейка бронепленкой)',
            },
        ],
    },
    {
        id: 4,
        name: 'Агрегатный ремонт',
        miniFilterList: [
            {
                id: 1,
                name: 'Без подраздела',

            },
        ],
    },
    {
        id: 5,
        name: 'Шиномонтаж',
        miniFilterList: [
            {
                id: 1,
                name: 'Без подраздела',

            },
        ],
    },
]


export function SaleBlockRedact() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [mainFilt, setMainFilt] = useState(0)// id фильтра 
    const [miniFilter, setMiniFilter] = useState(0)// id под фильтра 
    const [image, setImage] = useState<File | null>(null)
    const [shortDesc, setShortDesc] = useState('')
    console.warn('render CardSale')
    const router = useRouter()
    const { id } = router.query

    const [newImage, setNewImage] = useState<File | null>(null)



    useEffect(() => {
        if (router.isReady) {
            const showSale = async () => {
                const res = await fetch('/api/card/' + router.query.id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                if (res.ok) {
                    let sale = await res.json()
                    console.log(sale)
                    setTitle(sale.title)
                    setDescription(sale.description)
                    setPrice(sale.price)
                    setMainFilt(sale.filterMain)
                    setMiniFilter(sale.detailFilter)
                    setImage(sale.img)
                    setShortDesc(sale.shortDesc)
                }
            }
            showSale()
        }
    }, [router.isReady]);

    const [sales, setSales] = useState<Sales[]>([])
    const fileRef = useRef<HTMLInputElement>(null)

    // useEffect(() => {
    //     //  const imageURL = useMemo(() => image ? URL.createObjectURL(image) : '', [image])

    //      const imgPath = '/uploads/' + `${image}`

    // }, [image]);


    const imageURL = useMemo(() => newImage ? URL.createObjectURL(newImage) : '', [newImage])

    const imgPath = useMemo(() => '/uploads/' + `${newImage}`, [newImage]);

    async function addSale(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        // http://localhost/route?id=1&id=2
        const id = router.query.id
        const filterMain = mainFilterList.find(service => service.id === mainFilt)?.name
        const detailFilter = mainFilterList.find(service => service.id === mainFilt)?.miniFilterList.find(type => type.id === miniFilter)?.name
        const formData = new FormData()
        if (typeof id === 'string') formData.append('id', id)
        formData.append('title', title)
        formData.append('shortDesc', shortDesc)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('filterMain', filterMain)
        formData.append('detailFilter', detailFilter)

        try {
            if (image) formData.append('image', image)
            const res = await fetch('/api/sales', {
                method: 'PUT',
                body: formData
            })
            if (res.ok) {
                const newSale: Sales = await res.json()
                setSales(prevSales => {
                    return [...prevSales, newSale]
                })
                setTitle('')
                setShortDesc('')
                setPrice('')
                setMainFilt(0)
                setMiniFilter(0)
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
            setNewImage(files[0])
        }
    }

    return (
        <>
            <div className="background">
                <div className="cardDiv">
                    <div className="title">Редактирование акции</div>
                    <div className="saleCard">
                        <form onSubmit={addSale}>
                            <div className='row'>
                                <TextField label="title" variant="outlined" value={title}
                                    onChange={e => setTitle(e.target.value)} />
                            </div>

                            <div className='row'>
                                <TextField label="shortDesc" variant="outlined" value={shortDesc}
                                    onChange={e => setShortDesc(e.target.value)} />
                            </div>
                            <div className='row'>
                                <MyEditorTwo description={description} setDescription={setDescription} />
                                {/* <TextField label="description" variant="outlined" value={description}
                                    onChange={e => setDescription(e.target.value)} /> */}
                            </div>
                            <div className='row'>
                                <TextField label="price" variant="outlined" placeholder='От 20 %' value={price}
                                    onChange={e => setPrice(e.target.value)} />
                            </div>
                            <div className='row'>
                                <select className="selectModel" value={mainFilt} name="filterMain" onChange={event => setMainFilt(+event.target.value)}>
                                    <option value={0} selected disabled>Выберите раздел услуги</option>
                                    {mainFilterList.map(saleMain => <option key={saleMain.id} value={saleMain.id}>{saleMain.name}</option>)}
                                </select>
                            </div>

                            <div className='row'>
                                <select className="selectModel" value={miniFilter} name="detailFilter" onChange={event => setMainFilt(+event.target.value)}>
                                    <option value={0} selected disabled>Выберите подраздел</option>
                                    {mainFilterList.find(saleMain => saleMain.id === mainFilt)?.miniFilterList.map(type => <option key={type.id} value={type.id}>{type.name}</option>)}
                                </select>
                            </div>
                            <div className='row'>
                                <h3>Актуальное изображение</h3>
                            </div>

                            {newImage == null &&
                                <div className='row'>
                                    <img style={{ backgroundSize: 'cover', width: '100%', border: 'solid 2px black', padding: '2px' }} src={'/uploads/' + `${image}`} />
                                </div>
                            }
                            {newImage !== null &&
                                <div className='row'>
                                    <ImageList sx={{ width: '200', height: '200', border: 'solid 2px black', padding: '2px' }} cols={1} rowHeight={164}>
                                        <ImageListItem>
                                            <img
                                                src={`${imageURL}`}
                                                srcSet={`${imageURL}`}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    </ImageList>
                                </div>
                            }


                            <div className='row'>Рекомендуемый размер изображения 277 на 230 px</div>
                            <div className='row'>
                                <Button onClick={() => fileRef.current?.click()}>
                                    <ImageIcon />
                                    Выбрать новое  изображения
                                </Button>
                                <input type='file' onChange={onImageChange} ref={fileRef} style={{ display: 'none' }}
                                    accept=".jpg,.jpeg,.png,.webp" />
                            </div>

                            <div className='row'>
                                <Button type='submit'>Создать</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <style jsx>{`

                .background {
                    display: flex;
                    justify-content: center;
                    align-items: baseline;
                    width: 100%;
                    height:100vh;
                    background-color: #2e2e2e;
                    font-family: 'TacticSans-Reg', 'sans-serif';
                    flex-direction: row;
                }

                .cardDiv {
                    display: flex;
                    width: 100%;
                    height:100vh;
                    flex-direction: column;
                    align-items: center; 
                    margin-top:100px;
                }

                select {
                    width:223px;
                    height:56px;

                }

                .title {
                    display:flex;
                    justify-content: center;
                    align-items: baseline;
                    width:100%;
                    font-size:30px;
                    color:white;
                }

                .saleCard {
                    display:flex;
                    width: 100%;
                    background-color: white;
                    flex-direction: column;
                    align-items:center;
                    justify-content: baseline;
                    padding:30px;
                    color:black;
                    margin-top:20px;
                }

                .titleCard {
                    display:flex;
                    justify-content: flex-start;
                    align-items: baseline;
                    width:100%;
                    font-size:25px;
                    font-weight:bold;
                    flex-direction: row;
                }

                .row {
                    display:flex;
                    justify-content: center;
                    margin-bottom: 20px;
                }

                .miniTitleCar{
                    display:flex;
                    justify-content: flex-start;
                    align-items: baseline;
                    width:100%;
                    font-size:20px;
                    flex-direction:row; 
                }

                .divForm {
                    display:flex;
                    flex-direction: row;
                    width: 440px;
                    height: 55px;
                    justify-content: start;
                    align-items:center;
                    margin-top:10px;
                }
                  
                #btnDiv {
                    margin-top:20px;
                }

                
                .btn {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    align-items:center;
                    flex-direction:row;
                    transition: transform.3s;
                    width: 160px;
                    height: 35px;
                    background: transparent;
                    border: 1px black solid;
                    font-family: 'TacticSans-Reg', 'sans-serif';
                    color:black;
                    font-size:16px;
                    text-align: center;
                    margin-top:25px;
                  
                }

                .btn:hover {
                    background:rgba(0, 0, 0, 0.535);
                }

                input {
                    width: 100%;
                    height: 40px;
                    font-size: 16px; 
                    font-family: 'TacticSans-Reg','sans-serif'; 
                    background-color:rgb(231,231,231);
                    border:none;
                    padding-left: 13px;
                }

                input::-webkit-input-placeholder {
                     font-family: 'TacticSans-Reg','sans-serif';
                     color:black;
                }

                input::-webkit-input-placeholder {
                     font-family: 'TacticSans-Reg','sans-serif';
                     color:black;
                }

                input::-moz-placeholder {
                     font-family: 'TacticSans-Reg','sans-serif';
                     color:black;
                }

                textarea::placeholder {
                     font-family: 'TacticSans-Reg','sans-serif';
                     color:black;
                }

                textarea {
                    width: 500px;
                    height: 64px;
                    font-size: 16px; 
                    padding-left: 13px;
                    margin-top:25px;
                    font-family: 'TacticSans-Reg','sans-serif'; 
                    background-color:rgb(231,231,231);
                    border:none;
                    padding-top: 5px;
                }

                @media(max-width: 510px) {
                    .cardDiv{
                     width:100%;
                    }
                    .divForm{
                        width:400px;
                    }
                    .btn {
                        width:100%;
                        height:43px;
                    }
                }
                @media(max-width: 420px) {
                
                    .divForm{
                        width:350px;
                    }
                    
                }

                @media(max-width: 350px) {
                 .divForm{
                    width:300px;
                  }
                }

                @media(max-width: 320px) {    
                 .divForm{
                    width:250px;
                  }
                }
                
            
            `}
            </style>

        </>
    )

}

export default SaleBlockRedact