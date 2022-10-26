import { Sales } from '@prisma/client'
import { Dispatch, MutableRefObject, SetStateAction, useState } from 'react'
import banner from '/public/images/10.jpg'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from 'next/link';
import { AllSaleDto } from '../../../@types';
import { GetServerSideProps } from 'next';
import db from '../../../prisma';




type MiniList = {
    id: number,
    name: string,
}

type MainList = {
    id: number,
    name: string,
    miniFilterList: MiniList[]
}

const filterNameerList: MainList[] = [
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



type CardsNewProps = {
    setShowModal: Dispatch<SetStateAction<boolean>>,
    refs: { 
        refSales: MutableRefObject<HTMLDivElement>,
    } 
}

export function CardsNew({ setShowModal, refs }: CardsNewProps) {

    const theme = useTheme();
    const [filterName, setFilterName] = React.useState(0);
    const [sales, setSales] = useState<AllSaleDto[]>([])

    const filterMain = filterNameerList.find(service => service.id === filterName)?.name


    function showModal(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }


    React.useEffect(() => {
        async function start() {
            const res = await fetch('/api/allSales')
            if (res.ok) {
                const sales: Sales[] = await res.json()
                setSales(sales.map(sale => {
                    const { id, title, shortDesc, description, filterMain, detailFilter, img, active, createdAt } = sale
                    return { id, title, shortDesc, description, filterMain, detailFilter, img, active, createdAt }
                }))
            }
        }
        start()
    }, [])


//    const refSales = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        async function startFilter() {
            console.log(filterMain)
            const res = await fetch('/api/filter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(filterMain)
            })
            if (res.ok) {
                // const answer=await res.json()
                // console.log(answer)
                const sales: Sales[] = await res.json()
                console.log(sales)
                setSales(sales.map(sale => {
                    const { id, title, shortDesc, price, description, filterMain, detailFilter, img, active, createdAt } = sale
                    // const { ...set, description } = sale
                    // return set
                    return { id, title, shortDesc, price, description, filterMain, detailFilter, img, active, createdAt }
                }))
            }
        }
        startFilter()
    }, [filterName])




    return (
        <>
            <div className="mainNam">
                <div className="border"></div>
            </div>
            <div className="mainNam" id="title"  ref={refs.refSales}>
                <span id="mainWords">АКЦИИ</span>
            </div>
            <div className='selector'>
                <div className='center'>
                    <div className='row'>
                        <select className="selectModel" value={filterName} name="filterMain" onChange={event => setFilterName(+event.target.value)}>
                            <option value={0} selected disabled>ФИЛЬТР:ВСЕ</option>
                            {filterNameerList.map(saleMain => <option key={saleMain.id} value={saleMain.id}>{saleMain.name}</option>)}
                        </select>
                    </div>
                </div>
            </div>


            <div className="background">
                {sales.length > 0 &&
                    <div className="cards">
                        {
                            sales.map(sale => {
                                return <div className="card" id="c1" >
                                    <div className="column" id="imgColumn">
                                        <img style={{ backgroundSize: 'cover', width: '100%', height: '100%' }} src={'/uploads/' + sale.img} />
                                    </div>
                                    <div className="column" id="contentColumn">
                                        <div className='titleCard'>{sale.title}</div>
                                        <div className='textCard'>{sale.shortDesc}</div>
                                        <div className='row'>
                                            <div className='salesDiv'>{sale.price}</div>
                                            <div className='btnDiv'>
                                                <Link href={{
                                                    pathname: '/card/[id]',
                                                    query: { id: sale.id }
                                                }}>
                                                    <button className='btnModal'>ПОЛУЧИТЬ 	 &#10095;</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                        <div className="card" id="c4">
                            <div className="column" id="contentColumn">
                                <div className='titleCardMain'>ВЫБЕРИТЕ АКЦИЮ</div>
                            </div>
                        </div>
                    </div>
                }

            </div>
            <div className='backgroundQuestion'>
                <div className='salesQuestion'>
                    <div className='titleQuestion'>
                        <div className='rowQuestion'>Возникли вопросы по акциям?</div>
                        <div className='rowQuestion'>Свяжитесь с нами!</div>
                    </div>
                    <div className='btnQuestion'>
                        <form onSubmit={showModal}>
                            <button className="btnCall">ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК &#10095;</button>
                        </form>
                    </div>
                </div>
            </div>




            <style jsx>{`

                .background {
                    display:flex; 
                    width: 100%;
                    height: 900px;
                    justify-content: center;
                    align-items:center;
                    background-color:#3d3d3d;
                }

                .backgroundQuestion{
                    display:flex; 
                    align-items:center;
                    width:100%;
                    justify-content: baseline;
                    background-color:#3d3d3d;
                    flex-direction: column;
                    height: 200px;
                }
                
                .titleQuestion{
                    display:flex; 
                    align-items:center;
                    text-align: center;
                    font-size: 20px;
                    flex-direction: column;
                }

                .salesQuestion{
                    display:flex; 
                    align-items:center;
                    text-align: center;
                    justify-content: center;
                    flex-direction: column;
                    
                }

                .btnQuestion {
                    display:flex; 
                    align-items:center;
                    text-align: center;
                    justify-content: center;
                    flex-direction: row;
                    margin-top:30px;
                }

                .btnCall{

                }

                .btnCall {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    align-items:center;
                    flex-direction:row;
                    font-family: 'TacticSans-Reg','sans-serif';
                    transition: transform.3s;
                    width: 350px;
                    height: 45px;
                    background: transparent;
                    border: 2px solid;
                    color:white;
                    font-size:18px;
                    text-align: center;
                }
           
                .btnCall:hover {
                    background:rgba(0, 0, 0, 0.535);
                }

                .rowQuestion{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    flex-direction: row;
                    color:white;
                    font-family: 'TacticSans-Reg','sans-serif'; 
                    font-size: 25px;
                }

                .border {
                    width:960px;
                    border-top:solid 2px rgb(106, 106, 106)
                }

                #title {
                    padding-top: 30px;
                }

                #mainWords {
                    margin-top:50px;
                }

                .selector {
                    display:flex; 
                    width: 100%;
                    background-color:#3d3d3d;
                    justify-content:center;
                    align-items:center;
                    padding-top: 30px;
                }

                .selectModel {
                    background-color: transparent;
                    color:white;
                    font-family: 'TacticSans-Reg','sans-serif'; 
                    width: 300px;
                    height: 50px;
                    border:solid 2px white;
                    font-size:21px; 
                }

              

                option {
                    background-color: #3d3d3d;
                    color:white;
                    font-family: 'TacticSans-Reg','sans-serif'; 
                    font-size:21px; 
                }

                

                .center {
                    display:flex; 
                    width: 100%;
                    justify-content:center;
                    width: 960px;
                    height: 20px;
                }

                .row {
                    display:flex;
                    justify-content:start;
                    align-items:center;
               
                }

                .mainNam {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color:white;
                    font-family: 'TacticSans-Reg','sans-serif'; 
                    font-size:50px;
                    text-align: center;
                    background-color:#3d3d3d;
                    padding-top: 74px;
                   
                }


                .cards {
                    display:flex; 
                    width: 900px;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                }

                
                .card {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    align-items:center;
                    width:650px;
                    height:230px;
                    background:white;
                    transition:margin-bottom 500ms;
                    margin-top:-10em;
                    position:relative;
                    background: #f6f3ef;
                    -webkit-box-shadow: 7px -17px 10px 0px rgba(0, 0, 0, 0.23);
                    -moz-box-shadow: 7px -17px 10px 0px rgba(0, 0, 0, 0.23);
                    box-shadow: 7px -17px 10px 0px rgba(0, 0, 0, 0.23);
                }

                #contentColumn{
                    width:400px;
                    padding: 18px;
                    padding-right:25px;
                }

                #imgColumn{
                    width:300px;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    height: 100%;

                }
                
                .column {
                    display:flex;
                    justify-content:center;
                    flex-direction:column;
                    align-items:start;

                }

                .titleCardMain {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:row;
                    font-size:30px; 
                    font-weight:bold;
                    color:#1b1b1b;
                    width: 100%;
                }

                .titleCard {
                    display:flex;
                    justify-content:center;
                    align-items:start;
                    flex-direction:row;
                    font-size:22px; 
                    font-weight:bold;
                    color:#1b1b1b;
                
                }
                .textCard {
                    display:flex;
                    justify-content:center;
                    flex-direction:;
                    align-items:center;
                    flex-direction:row;
                    font-size:16px; 
                    color:#1b1b1b;
                    margin-top:10px;
                    text-align: center;
                }
                .row {
                    display:flex;
                    flex-direction:row;
                    align-items:center;
                    justify-content:space-between;
                    width: 100%;
                    margin-top:20px;
                }
                .salesDiv {
                    display:flex;
                    justify-content:center;
                    flex-direction:;
                    align-items:center;
                    flex-direction:row;
                    font-size:30px; 
                    font-weight: bold;
                }
                .btnDiv {
                    display:flex;
                    justify-content:center;
                    flex-direction:;
                    align-items:center;
                    flex-direction:row;
                }

                .btnModal {
                    display: flex;
                    display:flex;
                    justify-content:center;
                    flex-direction:;
                    align-items:center;
                    flex-direction:row;
                    font-family: 'OpelNextW01-Regular', 'sans-serif';
                    transition: transform.3s;
                    width: 140px;
                    height: 40px;
                    background: transparent;
                    border: 1px solid;
                    color: color:#1b1b1b;
                    font-weight: bold;
                }

                .btnModal:hover {
                    background-color: #1b1b1b;
                    color:white;
                }

                #c1:hover{
                 margin-bottom: 9em;
               
               
                }


                #c4:hover{
        
                 
              
                }


                .title {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    color:white;
                    font-family: 'TacticSans-Reg','sans-serif'; 
                    font-size:55px;
                    font-weight: bold;
                }
                .titleMini {
                    display:flex;
                    justify-content:center;
                    flex-direction:column;
                    color:white;
                    margin-top:100px;
                    font-family: 'TacticSans-Reg','sans-serif'; 
                    font-size:20px;
                    font-weight: bold;
                }
            

                @media(max-width: 1200px) {
                    .MainBanner { 
                        background-size: cover;
                    }
                    
                }
                @media(max-width: 1000px) {
                    .row{
                        width:90%;
                    }

                }
                @media(max-width: 900px) {
                    .title { 
                        font-size:30px;
                    }
                }
                @media(max-width: 720px) {
                    .title { 
                        font-size:25px;
                    }
                    .titleMini {
                        font-size:15px;
                    }
                    .MainBanner { 
                        height: 400px;
                    }
                }
                @media(max-width: 620px) {
                    .background {
                        height: 100%;
                    }
                    .cards {
                        width:100%;
                        margin-top: 30px;
                    }
                    .card {
                        width:100%;
                        margin-top: 40px;
                        height: 174px;
                    }
                    #c4 {
                        display:none;
                    }
                    .btnModal {
                        width:300px;
                        font-size:15px;
                    }
                    .selectModel {
                        width:90%;
                    }
                    .titleQuestion {
                        margin-top:20px;
                    }
                    
                    .btnCall {
                        width:300px;
                    }
                    .row {
                        justify-content: center;
                    }
                }
                @media(max-width: 540px) {
                    .title { 
                        font-size:18px;
                    }
                    .mainWords{
                        font-size:40px;
                    }

                    .titleMini {
                        font-size:12px;
                    }

                    .MainBanner { 
                        height: 250px;
                    }
             
                    #imgColumn {
                        width:100%;
                    }
                    #contentColumn{
                        width:100%;
                    }
                    .btnModal {
                        width:200px;
                        height: 35px;
                    }
                    .card {
                        height:220px;
                    }
                }
                @media(max-width: 430px) { 
                        .card{
                            flex-direction: column;
                            height: 100%;
                            width: 320px;
                        }
                        #contentColumn{
                            align-items: center;
                        }
                        .btnModal{
                            width: 250px;
                            height: 40px;
                            font-size:17px;
                        }
                }
                @media(max-width: 350px) {
                    .title { 
                        font-size:12px;
                    }
                    .titleMini {
                        font-size:9px;
                    }
                    .MainBanner { 
                        height: 150px;
                    }
                    .card {
                        width: 287px;
                    }
                    
                }
                @media(max-width: 250px) {
                    .title { 
                        font-size:9px;
                        margin-top:10px;
                    }
                    .titleMini {
                        font-size:7px;
                    }
                    .MainBanner { 
                        height: 130px;
                    }
                    .titleMini{
                        margin-bottom:00px;
                        margin-top:10px;
                    }
                }
            `}</style>
        </>
    )
}

//     return <div>Акции не обнаружены</div>
// }