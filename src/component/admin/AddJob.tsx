
import { Button, FormControl, ImageList, ImageListItem, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { Offer } from '@prisma/client'
import React, { ChangeEvent, Suspense, useCallback, useMemo, useRef } from 'react'
import { FormEvent, useEffect, useState } from 'react'
import ImageIcon from '@mui/material/Icon';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import PanoramaIcon from '@mui/icons-material/Panorama';
import { dealerList } from '../actual/contact/array'




// import MyEditor from './Editor' ниже отключен рендер на сервере 
const MyEditor = dynamic(() => import("./Editor"), { ssr: false })


export function AddJob() {
    const [sales, setSales] = useState<Offer[]>([])
    const [showAdd, setShowAdd] = useState(false)
    const fileRef = useRef<HTMLInputElement>(null)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [salary, setSalary] = useState('')
    const [city, setCity] = useState('')
    const [exp, setExp] = useState('')
    const [office, setOffice] = useState('')
    const [carBrend, setCarBrend] = useState('')

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

    //////////////////////////// sun text blackactor 
    const SunEditor = dynamic(() => import("suneditor-react"), {
        ssr: false,
    });



    async function addNewJob(event: FormEvent<HTMLFormElement>) {
        try {
            event.preventDefault()
            const res = await fetch('/api/job/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, description, salary, city, exp, office, carBrend })
            })
            if (res.ok) {
                const result = await res.json()
                console.log(result);
            }
        } catch (error) {
            console.log(error)
        }
    }


    return <>
        <Button sx={{
            marginLeft: '30px', marginTop: '20px', marginBottom: '10px', textAlign: 'center', backgroundColor: '#2e2e2e', color: 'white', border: 'solid 2px white', fontFamily: 'TacticSans-Reg',
            '&:hover': {
                backgroundColor: '#0069d9',
            },
        }} onClick={() => setShowAdd(true)} disabled={showAdd}>Создать вакансию</Button>
        {showAdd &&
            <>
                <div className='background'>
                    <div className='column'>
                        <div className='row'>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '35px' }}>Добавить спец. предложение</Typography>
                        </div>
                        <form onSubmit={addNewJob}>
                            <div className='row'>
                                <TextField label="title" variant="outlined" value={title}
                                    sx={{ width: '100%' }}
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </div>
                            <div className='row' style={styles.sun} >
                                <Suspense fallback={`Loading...`}>
                                    <MyEditor setDescription={setDescription} />
                                </Suspense>
                            </div>
                            <div className='row'>
                                <TextField label="salary" variant="outlined"
                                    placeholder='от 30 000 руб'
                                    value={salary}
                                    sx={{ width: '100%' }}
                                    onChange={e => setSalary(e.target.value)}
                                />
                            </div>
                            <div className='row'>
                                <FormControl sx={{ m: 1, minWidth: '100%' }} size="small">
                                    <InputLabel id="demo-select-small-label">Опыт</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={exp}
                                        label="Exp"
                                        onChange={e => setExp(e.target.value)}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'Без опыта'}>Без опыта</MenuItem>
                                        <MenuItem value={'от 1 года'}>от 1 года</MenuItem>
                                        <MenuItem value={'от 3 лет'}>от 3 лет</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='row'>
                                <FormControl sx={{ m: 1, minWidth: '100%' }} size="small">
                                    <InputLabel id="demo-select-small-label">ДЦ</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={office}
                                        label="Exp"
                                        onChange={e => setOffice(e.target.value)}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {Object.values(dealerList).map((dealer) => (
                                            <MenuItem value={dealer.name} key={dealer.id}>{dealer.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='row'>
                                <FormControl sx={{ m: 1, minWidth: '100%' }} size="small">
                                    <InputLabel id="demo-select-small-label">Город</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={city}
                                        label="City"
                                        onChange={
                                            e => setCity(e.target.value)
                                        }
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'VLG'}>Волгоград</MenuItem>
                                        <MenuItem value={'VLZ'}>Волжский</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='row'>
                                <TextField label="carBrend" variant="outlined" value={carBrend}
                                    sx={{ width: '100%' }}
                                    onChange={e => setCarBrend(e.target.value)}
                                />
                            </div>
                            <div className='row'>
                                <Button
                                    type='submit'
                                    variant="contained"
                                    sx={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center' }}
                                >
                                    Добавить вакансию
                                </Button>
                            </div>
                        </form>
                    </div>
                </div >

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
