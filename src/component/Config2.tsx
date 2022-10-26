import y from '/public/images/y.png';
import d from '/public/images/d.png';
import t from '/public/images/t.png';
import u from '/public/images/u.png';
import crosslandImg from '/public/images/miniCrossland.jpg';
import zafiraImg from '/public/images/miniZafira.png';
import comboCargo from '/public/images/models/4.jpg';
import comboLife from '/public/images/models/0.jpg';
import zafira from '/public/images/models/3.jpg';
import vivaro from '/public/images/models/2.jpg';
import crossland from '/public/images/models/1.jpg';
import granlandX from '/public/images/models/5.jpg';

import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useMemo, useState } from "react"
import { post } from '../services/fetcher';
import { type } from 'os';

type Complectation = {
    id: number,
    name: string,
    power: number,
    engine: string,
    transmission: string
}

type Model = {
    id: number,
    price: number,
    name: string,
    bodyType: string,
    img: string,
    priceTo: number,
    complectations: Complectation[]
}

const modelList: Model[] = [
    {
        id: 1,
        price: 2000000,
        name: 'Combo Cargo',
        bodyType: 'Коммерческий',
        img: `${comboCargo.src}`,
        priceTo: 1,
        complectations: [
            {
                id: 1,
                name: 'Combo Cargo INJECTION',
                power: 115,
                engine: '1.6',
                transmission: '5-MT',
            },
            {
                id: 2,
                name: 'Combo Cargo INJECTION XL',
                power: 115,
                engine: '1.6',
                transmission: '5-MT',

            },
            {
                id: 3,
                name: 'Combo Cargo Disel',
                power: 90,
                engine: '1.6 Diesel',
                transmission: '5-MT',
            }
        ],
    },
    {
        id: 2,
        price: 2030000,
        name: 'Zafira Life',
        bodyType: 'Минивэн',
        img: `${zafira.src}`,
        priceTo: 2,
        complectations: [
            {
                id: 1,
                name: 'Innovation',
                power: 150,
                engine: '2.0',
                transmission: '6 АКПП'
            },
            {
                id: 2,
                name: 'Innovation',
                power: 150,
                engine: '2.0',
                transmission: '6 АКПП'

            },
            {
                id: 3,
                name: 'Cosmo',
                power: 150,
                engine: '2.0',
                transmission: '6 АКПП'
            }
        ],
    },
    {
        id: 3,
        price: 2030000,
        name: 'Combo Life',
        bodyType: 'Компактвэн',
        img: `${comboLife.src}`,
        priceTo: 1.2,
        complectations: [
            {
                id: 1,
                name: 'Combo Life MT',
                power: 115,
                engine: '1.6',
                transmission: 'MT-5'
            },
            {
                id: 2,
                name: 'Combo Life ATT',
                power: 115,
                engine: '1.6',
                transmission: '6 АКПП'

            },
            {
                id: 3,
                name: 'Combo Life Disel',
                power: 90,
                engine: '1.6 Disel',
                transmission: 'MT-5'
            }
        ],
    },
    {
        id: 4,
        price: 2030000,
        name: 'GrandLand X',
        bodyType: 'Кроссовер',
        img: `${granlandX.src}`,
        priceTo: 1.5,
        complectations: [
            {
                id: 1,
                name: 'Enjoy',
                power: 150,
                engine: '1.6 Turbo',
                transmission: '6 АКПП'
            },
            {
                id: 2,
                name: 'Innovation',
                power: 150,
                engine: '1.6 Turbo',
                transmission: '6 АКПП'

            },
            {
                id: 3,
                name: 'Cosmo',
                power: 150,
                engine: '1.6 Turbo',
                transmission: '6 АКПП'
            }
        ],
    },
    {
        id: 5,
        price: 2030000,
        name: 'Crossland',
        bodyType: 'Кроссовер',
        img: `${crossland.src}`,
        priceTo: 1.5,
        complectations: [
            {
                id: 1,
                name: 'Edition',
                power: 110,
                engine: '1.6 Turbo',
                transmission: '6 АКПП'
            },
            {
                id: 2,
                name: 'Elegance',
                power: 110,
                engine: '1.2 Turbo',
                transmission: '6 АКПП'

            },
            {
                id: 3,
                name: 'Selection M AT',
                power: 110,
                engine: '1.2 Turbo',
                transmission: '6 АКПП'
            }
        ],
    },
    {
        id: 6,
        price: 2030000,
        name: 'Vivaro',
        bodyType: 'Минивэн коммерческий',
        img: `${vivaro.src}`,
        priceTo: 1.6,
        complectations: [
            {
                id: 1,
                name: 'Selection',
                power: 90,
                engine: '1.6 Turbo',
                transmission: '6 АКПП'
            },
            {
                id: 2,
                name: 'Selection M',
                power: 150,
                engine: '2.0 Disel',
                transmission: 'МТ-5'

            },
            {
                id: 3,
                name: 'Selection M AT',
                power: 150,
                engine: '2.0 Disel',
                transmission: '6 АКПП'
            }
        ],
    },
]


type typeOfService = {
    id: number,
    name: string,
    price: number,
}

type Service = {
    id: number,
    name: string,
    typeOfService: typeOfService[]
}

const serviceList: Service[] = [
    {
        id: 1,
        name: 'Ремонт коробки передач',
        typeOfService: [
            {
                id: 1,
                name: 'Замена масла',
                price: 500,
            },
            {
                id: 2,
                name: 'Обновление программного обеспечения',
                price: 1000,

            },
            {
                id: 3,
                name: 'Диагностика КПП',
                price: 1000,
            }
        ],

    },
    {
        id: 2,
        name: 'Ремонт выхлопной системы',
        typeOfService: [
            {
                id: 1,
                name: 'Замена катализатора',
                price: 600,
            },
            {
                id: 2,
                name: 'Прошивка на Евро 2',
                price: 1000,

            },
            {
                id: 3,
                name: 'Замена лямда-зонд',
                price: 115,
            }
        ],
    },
    {
        id: 3,
        name: 'Ремонт двигателя',
        typeOfService: [
            {
                id: 1,
                name: 'Замена ГРМ',
                price: 2000,
            },
            {
                id: 2,
                name: 'Замена опоры двигателя',
                price: 115,

            },
            {
                id: 3,
                name: 'Замена свечей зажигания ',
                price: 115,
            }
        ],
    },
]


export function Config2({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) {
    const [mainId, setMainId] = useState('') // id услуги
    const [buyId, setBuyId] = useState('') // id услуги
    function changeMainId(event: ChangeEvent<HTMLInputElement>) {
        setMainId(event.target.value)
        setBuyId('')
    }
    function changePrice(event: ChangeEvent<HTMLInputElement>) {
        setBuyId(event.target.value)
    }
    //id машины
    const [curModelId, setCurModelId] = useState(0) //id машины
    //для сервиса 
    const [curIdService, setСurIdService] = useState(0)//id  раздела услуги Сервиса
    const [typeOfServicelId, setTypeOfServicelId] = useState(0) //id  конкретной услуги

    const priceService = useMemo(() => serviceList.find(model => model.id === curIdService)?.
        typeOfService.find(type => type.id === typeOfServicelId)?.price, [curIdService, typeOfServicelId]); //цена услуги
    const carPrice = modelList.find(model => model.id === curModelId)?.price; // цена машины
    const priceTo = modelList.find(model => model.id === curModelId)?.priceTo; // коэффициент машины на услугу
    const 
    price = (priceTo && priceService) ? priceTo * priceService : 0 // итоговая цена 

   
    //для покупки
    const [complectationlId, setcomplectationId] = useState(0) //id комплектации
    const power = useMemo(() => modelList.find(model => model.id === curModelId)?.
        complectations.find(comp => comp.id === complectationlId)?.power, [curModelId, complectationlId]);
    const engine = useMemo(() => modelList.find(model => model.id === curModelId)?.
        complectations.find(comp => comp.id === complectationlId)?.engine, [curModelId, complectationlId]);
    const transmission = useMemo(() => modelList.find(model => model.id === curModelId)?.
        complectations.find(comp => comp.id === complectationlId)?.transmission, [curModelId, complectationlId]);
    const imgCar = useMemo(() => modelList.find(model => model.id === curModelId)?.img, [curModelId])
    
    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }

   

 async function sendDataToMail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // @ts-ignore
    const buyOrService: string = event.target.mainId.value
    const carModel= modelList.find(model =>model.id === curModelId)?.name
    if(buyOrService ==="Ремонт")
        {
            const serviceNameMain=serviceList.find(service => service.id === curIdService)?.name
            const serviceName = serviceList.find(service => service.id === curIdService)?.typeOfService.find(type => type.id === typeOfServicelId)?.name
            const priceMain = price
            try {
                const result = await post('/api/sendmailService', { buyOrService,carModel,serviceNameMain,serviceName, price })
                console.log(result);
            } catch (error) {
                console.error(error)
            }
            // const res = await fetch('/api/sendmailService', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({ buyOrService,carModel,serviceNameMain,serviceName, price })
            // })
            // if (res.ok) {
            //     const result = await res.json()
            //     console.log(result);            
            // }
        } else if (buyOrService ==="Покупка"){ 
            //@ts-ignore
            const selectBuy = event.target.buyId.value
            const complect = modelList.find(model => model.id === curModelId)?.complectations.find(comp =>comp.id===complectationlId)?.name
            const res = await fetch('/api/sendmailBuy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ buyOrService,carModel,selectBuy,complect})
            })
            if (res.ok) {
                const result = await res.json()
                console.log(result);            
            }
        }
        
    }
    return (
        <>
         <form id="submit-form" onSubmit={sendDataToMail}>
            <div className='containerForTitle'>
                <div className='el'><span className='title'>Поможем вам сделать выбор</span></div>
            </div>
          
            <div className='containerForMiniTitle'>Выберите вид услуги:</div>
            {/* <form onSubmit={async (event) => {
                event.preventDefault()
                // @ts-ignore
                const username: string = event.target.username
                // const body = {}
                // body.username = username
                const result = await post('/api/test', { username })
            }}>
                <input name='username' />
                <input type='submit' />
            </form> */}
            <div className='containerForSelectMain'>
                <div className='box1'>
                    <label htmlFor="checkbox1">Покупка авто</label>
                    <input type="radio" className='check' id="checkbox1" value="Покупка" name="mainId" checked={mainId === 'Покупка'}
                        onChange={changeMainId} />
                </div>
                <div className='box1'>
                    <label htmlFor="checkbox2">Ремонт авто</label>
                    <input type="radio"   className='check' id="checkbox2" value="Ремонт" name="mainId" checked={mainId === 'Ремонт'}
                        onChange={changeMainId} />
                </div>
            </div>

            {/* Если выбрали покупку, код ниже */}

            {mainId === 'Покупка' &&
                <>
                    <div className="miniTitleCard" id="buy">Выберите ваш способ покупки</div>
                    <div className='containerForSelectBuy'>
                        <div className='box1'>
                            <label htmlFor="checkbox3">Трейд-ин</label>
                            <input type="radio"  className='check' id="checkbox3" value="Трейд-ин" name="buyId" checked={buyId === 'Трейд-ин'}
                                onChange={changePrice} />
                        </div>
                        <div className='box1'>
                            <label htmlFor="checkbox4">Кредит</label>
                            <input type="radio"   className='check' id="checkbox4" value="Кредит" name="buyId" checked={buyId === 'Кредит'}
                                onChange={changePrice} />
                        </div>
                    </div>
                </>}
            <div className='containerForSelect'>
          
                {
                    mainId !== null && 
                    <select className="selectModel" value={curModelId}   name="modalCar" onChange={event => setCurModelId(+event.target.value)}>
                        <option value={0}  selected disabled>Выберите модель</option>
                        { modelList.map(model => <option key={model.id} value={model.id}>{model.name}</option>)}
                    </select>
                }
                {
                    mainId === 'Покупка' &&
                    <select className="selectModel" value={complectationlId} onChange={event => setcomplectationId(+event.target.value)} name="complectation">
                        <option value={0} selected disabled>Укажите комплектацию</option>
                        {modelList.find(model => model.id === curModelId)?.complectations.map(comp => <option key={comp.id} value={comp.id}>{comp.name}</option>)}
                        {/* {modelList.find(model => model.id === curModelId =>complectation===complectationlId)?.complectation} */}
                    </select>
                }


                {
                    mainId === 'Ремонт' && curModelId!==0 &&
                    <select className="selectModel" value={curIdService} name="curIdService" onChange={event => setСurIdService(+event.target.value)} >
                        <option value={0} selected disabled>Выберите вид услуг</option>
                        {serviceList.map(service => <option key={service.id} value={service.id}>{service.name}</option>)}
                    </select>
                }

                {
                    mainId === 'Ремонт' && curIdService!==0 &&
                    <select className="selectModel" value={typeOfServicelId} name="typeOfServicelId" onChange={event => setTypeOfServicelId(+event.target.value)}>
                        <option value={0} selected disabled>Выберите конкретную услугу</option>
                        {serviceList.find(service => service.id === curIdService)?.typeOfService.map(type => <option key={type.id} value={type.id}>{type.name}</option>)}
                    </select>
                }
            </div>

           <div className="twoModel">
                <div className="ColumCard">
                    <div className="titleCard">{modelList.find(model => model.id === curModelId)?.name}</div>
                    <div className="miniTitleCard">{modelList.find(model => model.id === curModelId)?.bodyType}</div>
                    <div className="carImg1"></div>
                    {   buyId !== '' &&
                        mainId === 'Покупка' && <div className="twoROW">
                            <div className="twoColumCard">
                                <div className="inColum">
                                    <div className="row3"> <img className="mini" src={y.src} /> </div>
                                    <div className="row">{power}</div>
                                    <div className="row1">Мощность</div>
                                </div>

                                <div className="inColum">
                                    <div className="row3"> <img className="mini" src={d.src} /> </div>
                                    <div className="row">{engine}</div>
                                    <div className="row1">Двигатель</div>
                                </div>
                            </div>

                            <div className="twoColumCard">
                                <div className="inColum1">
                                    <div className="row3"> <img className="mini" src={t.src} /> </div>
                                    <div className="row">{engine}</div>
                                    <div className="row1">Разгон до 100км/ч,с</div>
                                </div>

                                <div className="inColum1">
                                    <div className="row3"> <img className="mini" src={u.src} /> </div>
                                    <div className="row">{transmission}</div>
                                    <div className="row1">Трансмиссия</div>
                                </div>
                            </div>
                        </div>
                        
                    }
                    {   
                      buyId !== '' && curModelId !== 0 && 
                          <div className="btnDiv">
                                <button className="btn" type="submit">Отправить заявку</button>
                            </div>
                    }


                    {/* Если выбрали сервис, код ниже */}

                    
                    {mainId === 'Ремонт' && typeOfServicelId!==0 && curIdService!==0 &&
                        <div className="ColumCard">
                          <div className="titleCardService">{serviceList.find(model => model.id === curIdService)?.name}</div> 
                            <div className="carImg2"></div>
                            <div className="inColum">
                                <div className="row1" id="service">Цена услуги на ваш авто</div>
                                <div className="row" id="servicePrice">{price}{' '} &#8381; </div>
                            </div>
                            <div className="btnCard">
                                    <button className="btn" type="submit">Записаться</button>
                            </div>
                        </div>
                        }
                </div>
            </div>
            </form>

            <style jsx>{`
.containerForTitle{
    display:flex;
    flex-direction: column;  
    align-items: center;
    margin-top: 60px;
    font-family: 'OpelNextW01-Regular', sans-serif; 
    background:black;
    color:white;
}
.containerForMiniTitle{
    display:flex;
    flex-direction: column;  
    align-items: center;
    font-family: 'OpelNextW01-Regular', sans-serif; 
    font-size: 30px;
    margin-top:30px;
}

.title {
    font-size: 40px;
    margin-top:20px;
}
.containerForSelectMain{
    display:flex;
    flex-direction: row;
    justify-content:space-evenly; 
    align-items: center;
    margin-top:50px;
    font-size: 21px;
    font-family: 'OpelNextW01-Regular', sans-serif; 
    font-weight:bold;
}
.containerForSelectBuy{
    display:flex;
    flex-direction: row;
    justify-content:space-evenly; 
    align-items: center;
    font-size: 21px;
    font-family: 'OpelNextW01-Regular', sans-serif; 
    font-weight:bold;
    width:100%;
    animation: show-on 1s;

}
#buy{
    margin-top:25px;
    width: 100%;

}
.box1{
    display:flex;
    flex-direction: row;
    justify-content:center; 
    align-items:center;
}
.containerForSelect {
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    animation: show-on 1s;

}

.selectModel {
    width: 330px;
    height: 35px;
    font-size: 19px;
    background-color: #f7ff14;
    margin-top: 20px;
    font-family: 'Montserrat'; 
    border-radius: 5px;
}

.selectModel:hover {
    background-color: black;
    color:#f7ff14;
}

.twoModel {
    display:flex;
    flex-direction: row;
    margin-top:20px;
    justify-content: space-around;

}

.ColumCard {
    display: flex;
    align-items: center;
    flex-direction: row;
    max-height: inherit;

}

.titleCard {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family:'OpelNextW01-Regular', sans-serif;
    font-size: 40px;
    font-weight: 300;
}
.titleCardService{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: 'OpelNextW01-Regular', sans-serif;
    font-size: 30px;
    font-weight: 600;
}
#service {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: 'OpelNextW01-Regular', sans-serif;
    font-size: 25px;
    font-weight: 600; 
}
#servicePrice{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family:'OpelNextW01-Regular', sans-serif;
    font-size: 50px;
    font-weight: 600; 
}
.miniTitleCard {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: 'OpelNextW01-Regular', sans-serif;
    font-size: 25px;
    color: #65656c;
    font-weight: 100;
    animation: show-on 1s;
}

.carImg {
    display: flex;
    width: 600px;
    height: 250px;
    background-image: url('${imgCar}');
    background-size: contain;
    background-repeat: no-repeat
}
.carImg1 {
    display: flex;
    width: 400px;
    height: 200px;
    background-image: url('${imgCar}');
    background-size: contain;
    background-repeat: no-repeat;
    transition: 1s; /*Скорость перехода состояния элемента*/
    animation: show 3s 1; /* Указываем название анимации, её время и количество повторов*/
    animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
    animation-delay: 1s; /* Задержка перед началом */
}

.twoROW {
    display: flex;
    flex-direction: row;
}
.ColumCard {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

}

.inColum {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'OpelNextW01-Regular', 'sans-serif';
    font-size: 30px;
    margin-bottom: 20px;
    transition: 1s; /*Скорость перехода состояния элемента*/
animation: show 3s 1; /* Указываем название анимации, её время и количество повторов*/
animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
animation-delay: 1s; /* Задержка перед началом */
}

.inColum1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'OpelNextW01-Regular', 'sans-serif';
    font-size: 30px;
    margin-bottom: 80px;
    margin-left: 100px;
    animation: show-on 1s; /* Указываем название анимации, её время и количество повторов*/
    animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
    animation-delay: 1s; /* Задержка перед началом */
}

@keyframes show-on {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.row {
    display: inline-flex;
    justify-content: center;
    align-items: baseline;
    font-family: 'OpelNextW01-Regular', 'sans-serif';
    font-size: 25px;
    font-weight: 400;
 
}

.row1 {
    display: inline-flex;
    justify-content: center;
    align-items: baseline;
    font-family: 'OpelNextW01-Regular', 'sans-serif';
    font-size: 20px;


}

.row3 {
    display: flex;
    justify-content: center;
}

.twoColumCard {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}

.btnDiv {
    display: flex;
    justify-content: center;
    margin-top:0px;

}
.btnCard {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

.btn {
    font-family: 'OpelNextW01-Regular', 'sans-serif';
    border-radius: 3px;
    transition: transform.3s ;
    border-color: #000;
    color: #000;
    background: 0 0;
    width: 220px;
    height: 50px;
    font-size: 20px;
    padding: 12px;
}

.btn:hover {
    background-color: #f7ff14;
    font-size: 20px;
    border: none;
    font-family: 'OpelNextW01-Regular', 'sans-serif';
    transform: scale(1.02);
    font-size: 22px
    padding: 10px;
    box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);

}
@media(max-width: 900px) {
    .title {
     font-size: 30px;
     margin-top:20px;
    }   
    .containerForMiniTitle{;
     font-size: 25px;
    }
    .miniTitleCard {
        font-size: 20px;
    }
    .check {
        font-size: 19px;
    }
    .selectModel {
       width: 250px;
       height: 25px;
       font-size: 16px;
       margin-top: 20px;
    }
    .titleCard {
        font-size: 30px;
    }
    .carImg1 {
        width: 350px;
        height: 200px;
    }
    .row{
        font-size: 18px;
    }
    .row1{
        font-size: 15px;
    }
    .inColumn1{
        margin-left: 50px;
    }
    .btn {
      width: 190px;
      height: 45px;
      font-size: 16px;
    }
    .btn:hover {
        font-size: 17px;
    }
}
@media(max-width: 520px) {
    .title {
     font-size: 25px;
     margin-top:15px;
    }   
    .containerForSelectMain{
      flex-direction: column;
      margin-top: 20px;
      font-size: 16px;
    }
    .containerForSelectBuy {
        flex-direction: column;
        font-size: 16px;
        margin-top: 10px;
    }
    .containerForMiniTitle{;
     font-size: 20px;
    }
    .titleCardService {
        font-size: 18px;
    }
    #service {
        font-size: 13px;
        margin-top:10px;
    }
    #servicePrice {
        font-size: 27px;
        margin-top:5px;
    }
    .miniTitleCard {
        font-size: 14px;
    }
    .check {
        font-size: 16px;
    }
    .selectModel {
       width: 250px;
       height: 20px;
       font-size: 14px;
       margin-top: 10px;
    }
    .titleCard {
        font-size: 25px;
    }
    .carImg1 {
        width: 250px;
        height: 150px;
    }
    .row{
        font-size: 15px;
    }
    .row1{
        font-size: 12px;
    }
    .inColumn1{
        margin-left: 40px;
    }
    .btn {
      width: 150px;
      height: 30px;
      font-size: 12px;
      padding:2px;
    }
    .btn:hover {
        font-size: 13px;
    }
    .twoColumCard {
        display:none;
    }    
}
@media(max-width: 400px) {
    .title {
     font-size: 18px;
    }  
    .containerForSelectMain{
      margin-top: 20px;
     height: 20px;
    font-size: 12px;
    }
    .containerForSelectBuy {
        font-size: 13px;
        margin-top: 10px;
    }
    .containerForMiniTitle{;
     font-size: 14px;
    }
    .miniTitleCard {
        font-size: 14px;
    }
    .check {
        font-size: 10px;
    }
    .titleCard {
        font-size: 18px;
    }
    .carImg1 {
        width: 200px;
        height: 150px;
    }
    .titleCardService {
        font-size: 15px;
    }
    #service {
        font-size: 10px;
        margin-top:10px;
    }
    #servicePrice {
        font-size: 22px;
        margin-top:5px;
    }
  }
  @media(max-width: 300px) {
     .title {
      font-size: 12px;
     }  
      .selectModel {
        width: 160px;
        height: 20px;
        font-size: 9px;
        margin-top: 10px;
      }
      .carImg1 {
        width: 170px;
        height: 100px;
      }   
      .containerForMiniTitle{;
       font-size: 12px;
      }
      .miniTitleCard{;
       font-size: 12px;
      }
      .btn {
      width: 120px;
      font-size: 9px;
    }
    .btn:hover {
        font-size: 10px;
    }
    .titleCardService {
        font-size: 12px;
    }
    #service {
        font-size: 10px;
        margin-top:10px;
    }
    #servicePrice {
        font-size: 17px;
        margin-top:5px;
    }
    .inColum {
        margin-bottom: 20px
    }
  
  }
`}</style>

        </>
    )
}