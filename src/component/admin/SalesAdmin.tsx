import { FilterFrames, Height } from '@mui/icons-material'
import { Button, ImageList, ImageListItem, Input, TextField } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { Sales } from '@prisma/client'
import React, { ChangeEvent, Suspense, useCallback, useMemo, useRef } from 'react'
import { Dispatch, FormEvent, MouseEvent, SetStateAction, useEffect, useState } from 'react'
import salesOne from '/public/images/sales.webp'
import salesTwo from '/public/images/sales2.webp'
import salesThree from '/public/images/sales3.webp'
import ImageIcon from '@mui/material/Icon';
import { AllSaleDto } from '../../../@types'

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

// import MyEditor from './Editor' ниже отключен рендер на сервере 
const MyEditor = dynamic(() => import("./Editor"), { ssr: false })


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



type SalesAdminProps = {}

export function SalesAdminComponent({ }: SalesAdminProps) {
    const [sales, setSales] = useState<Sales[]>([])
    const [showAdd, setShowAdd] = useState(false)
    const fileRef = useRef<HTMLInputElement>(null)

    const [title, setTitle] = useState('')
    const [shortDesc, setShortDesc] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [mainFilt, setMainFilt] = useState(0)// id фильтра 
    const [miniFilter, setMiniFilter] = useState(0)// id под фильтра 
    const [image, setImage] = useState<File | null>(null)

    const imageURL = useMemo(() => image ? URL.createObjectURL(image) : '', [image])


    /////////////////////////////////////////////my custom text editor
    const [selectText, setSelectText] = useState('')
    const [selectTextAnswer, setSelectTextAnswer] = useState('')
    const [cursorStart, setCursorStart] = useState('')
    const [cursorEnd, setCursorEnd] = useState('')
    const textRef = useRef(null);

    function consolText() {
        setCursorStart(textRef.current.selectionStart);
        setCursorEnd(textRef.current.selectionEnd);
        setSelectTextAnswer(textRef.current.value.substring(textRef.current.selectionStart, textRef.current.selectionEnd))
    }

    useEffect(() => {
        console.log(selectTextAnswer)
    }, [cursorStart, cursorEnd])




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

    const updateSale = useCallback(async ({ id, active }: Pick<AllSaleDto, 'id' | 'active'>) => {
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


    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'title', width: 130 },
        { field: 'description', headerName: 'description', width: 100 },
        { field: 'shortDesc', headerName: 'description', width: 130 },
        {
            field: 'img', headerName: 'Изображение', width: 300, renderCell: (params: GridRenderCellParams<any, AllSaleDto>) => {
                return <img className="imgCustom" src={'/uploads/' + params.row.img} />
            }
        },
        {
            field: 'status', headerName: 'Статус акции', width: 130, renderCell: (params: GridRenderCellParams<any, AllSaleDto>) => {
                const { id, active } = params.row
                return <button onClick={() => updateSale({ id, active })}>{active.toString()}</button>
                // return params.row.statusElem as React.ReactNode
            }
        },
    ];

    useEffect(() => {
        (async function () {
            const res = await fetch('/api/sales')
            if (res.ok) {
                setSales(await res.json())
            }
        })()
    }, [])


    async function addSale(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const filterMain = mainFilterList.find(service => service.id === mainFilt)?.name
        const detailFilter = mainFilterList.find(service => service.id === mainFilt)?.miniFilterList.find(type => type.id === miniFilter)?.name
        const formData = new FormData()
        formData.append('title', title)
        formData.append('shortDesc', shortDesc)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('filterMain', filterMain)
        formData.append('detailFilter', detailFilter)
        try {
            if (image) formData.append('image', image)
            const res = await fetch('/api/sales', {
                method: 'POST',
                body: formData
            })
            if (res.ok) {
                const newSale: Sales = await res.json()
                setSales(prevSales => {
                    return [...prevSales, newSale]
                })
                setShowAdd(false)
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
        }
    }

    return <>
        <Button sx={{
            marginLeft: '30px', marginTop: '20px', marginBottom: '10px', textAlign: 'center', backgroundColor: '#2e2e2e', color: 'white', border: 'solid 2px white', fontFamily: 'TacticSans-Reg',
            '&:hover': {
                backgroundColor: '#0069d9',
            },
        }} onClick={() => setShowAdd(true)} disabled={showAdd}>Создать акцию</Button>
        {showAdd &&
            <>
                <div className='background'>
                    <div className='column'>
                        <form onSubmit={addSale}>
                            {/* <div className='row'>
                                <div style={styles.editor} onClick={focusEditor}>
                                    <Editor
                                        ref={editor}
                                        editorState={editorState}
                                        onChange={editorState => setEditorState(editorState)}
                                    />
                                </div>
                            </div> */}
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

                            {/* <div className='row'>
                                <TextField label="description" variant="outlined" value={description}
                                    onChange={e => setDescription(e.target.value)} ref={textRef} />
                            </div> */}
                            {/* <div className='row'>
                                <textarea ref={textRef} value={selectText} onChange={e => setSelectText(e.target.value)}></textarea>
                                <button onClick={consolText}>узнать выделенный текст</button>
                            </div> */}
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
                                <select className="selectModel" value={miniFilter} name="detailFilter" onChange={event => setMiniFilter(+event.target.value)}>
                                    <option value={0} selected disabled>Выберите подраздел</option>
                                    {mainFilterList.find(saleMain => saleMain.id === mainFilt)?.miniFilterList.map(type => <option key={type.id} value={type.id}>{type.name}</option>)}
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
                                <Button type='submit'>Создать акцию</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='row'>
                    <ImageList sx={{ width: 300, height: 300 }} cols={1} rowHeight={164}>
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