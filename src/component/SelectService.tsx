
import comboCargo from '/public/images/models/4.jpg';
import comboLife from '/public/images/models/0.jpg';
import zafira from '/public/images/models/3.jpg';
import vivaro from '/public/images/models/2.jpg';
import crossland from '/public/images/models/1.jpg';
import granlandX from '/public/images/models/5.jpg';
import { Dispatch, FormEvent, SetStateAction, useMemo, useState } from "react"

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

const serviceList:  Service [] = [
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

type Model = {
    id: number,
    price: number,
    name: string,
    img: string
}

const modelList: Model[] = [
    {
        id: 1,
        price: 1,
        name: 'Combo Cargo',
        img: `${comboCargo.src}`,
    },
    {
        id: 2,
        price: 2,
        name: 'Zafira Life',
        img: `${zafira.src}`,
    },
    {
        id: 3,
        price: 1.2,
        name: 'Combo Life',
        img: `${comboLife.src}`,
    },
    {
        id: 4,
        price: 1.6,
        name: 'GrandLand X',
        img: `${granlandX.src}`,
    },
    {
        id: 5,
        price: 1.4,
        name: 'Crossland',
        img: `${crossland.src}`,
    },
    {
        id: 6,
        price: 1.6,
        name: 'Vivaro',
        img: `${vivaro.src}`,
    },
]

export function SelectService({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) {
    const [curIdService,setСurIdService] = useState(0)
    const [typeOfServicelId, setTypeOfServicelId] = useState(0)
    const [carModelId, setCarModelId] = useState(0)


    const priceService = useMemo(() => serviceList.find(model => model.id === curIdService)?.
    typeOfService.find(type => type.id ===  typeOfServicelId)?.price, [curIdService, typeOfServicelId]);
    const carPrice = modelList.find(model => model.id === carModelId)?.price;
    const price = (carPrice && priceService) ? carPrice * priceService : 0
    const imgCar = useMemo(() => modelList.find(model => model.id === carModelId)?.img, [carModelId])

    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }

    return (
        <>
            <div className='containerForTitle'>
                <div className='el'><span className='title'>Конфигуратор услуг</span></div>
            </div>
            <div className='containerForSelect'>

                <select className="selectModel" value={carModelId} onChange={event => setCarModelId(+event.target.value)}>
                    <option value={0} selected disabled>Выберите модель вашего авто</option>
                    {modelList.map(model =><option key={model.id} value={model.id}>{model.name}</option>)}
                </select>

                <select className="selectModel" value={curIdService} onChange={event =>setСurIdService(+event.target.value)}>
                    <option value={0} selected disabled>Выберите вид услуг</option>
                    {serviceList.map(service => <option key={service.id} value={service.id}>{service.name}</option>)}
                </select>
                {
                    curIdService !== 0 &&
                    <select className="selectModel" value={typeOfServicelId} onChange={event =>setTypeOfServicelId(+event.target.value)}>
                        <option value={0} selected disabled>Выберите конкретную услугу</option>
                        {serviceList.find(service => service.id === curIdService)?.typeOfService.map(type =><option key={type.id} value={type.id}>{type.name}</option>)}
                        {/* {modelList.find(model => model.id === curModelId =>complectation===complectationlId)?.complectation} */}
                    </select>
                }

            </div>
                <div className="ColumCard">
                    <div className="titleCard">{serviceList.find(model => model.id === curIdService)?.name}</div>
                    {/* <div className="miniTitleCard">{modelList.find(model => model.id === curIdService)}</div> */}
                    <div className="carImg1"></div>
                    <div className="inColum">
                            <div className="row1">Цена услуги на ваш авто</div>
                            <div className="row">{price}{' '} &#8381; </div>
                    </div>
                    <div className="btnCard">
                        <form onSubmit={showModal}>
                            <button className="btn" type="submit">Записаться</button>
                        </form>
                    </div>
                </div>

<style jsx>{`
.containerForTitle{
    display:flex;
    flex-direction: column;  
    align-items: center;
    margin-top: 60px;
    font-family: 'OpelNextW01-Regular', sans-serif; 
}
.title {
    font-size: 40px;
    margin-top:20px;
}
.containerForSelect {
    display:flex;
    flex-direction: column;
    justify-content:center;
    margin-top:50px;
    align-items: center;
}
.selectModel {
    width: 350px;
    height: 40px;
    font-size: 19px;
    background-color: #f7ff14;
    margin-top: 20px;
    font-family:'OpelNextW01-Regular', sans-serif; 
    border-radius: 5px;
    animation: show-on 1s;
}
.selectModel:hover {
    background-color: black;
    color:#f7ff14;
}

.twoModel {
    display:flex;
    flex-direction: row;
    margin-top:50px;
    justify-content: space-around;
    animation: show-on 1s;

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
    font-family: 'OpelNextW01-Regular', sans-serif;
    font-size: 60px;
    font-weight: 300;
}

.miniTitleCard {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family:'OpelNextW01-Regular', sans-serif;
    font-size: 30px;
    color: #65656c;
    font-weight: 100;
}

.carImg1 {
    display: flex;
    width: 600px;
    height: 250px;
    background-image: url('${imgCar}');
    background-size: contain;
    background-repeat: no-repeat;
    animation: show-on 1s;
    animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
    animation-delay: 1s; /* Задержка перед началом */
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
    font-family: 'OpelNextW01-Regular', sans-serif;
    font-size: 30px;
    margin-bottom: 80px;
}
.inColum1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'OpelNextW01-Regular', sans-serif;
    font-size: 30px;
    margin-bottom: 80px;
    margin-left: 100px;
}
.row {
    display: inline-flex;
    justify-content: center;
    align-items: baseline;
    font-family: 'OpelNextW01-Regular', sans-serif;
    font-size: 80px;
    font-weight: 100;
}
.row1 {
    display: inline-flex;
    justify-content: center;
    align-items: baseline;
    font-family: 'OpelNextW01-Regular', sans-serif;
    font-size: 20px;
    color: #65656c;
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

@keyframes show-on {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.btnCard {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.btn {
    font-family: 'OpelNextW01-Regular', sans-serif;
    height: 50px;
    font-size: 22px;
    padding: 12px;
    border-radius: 3px;
    transition: transform.3s ;
    color: #ffffff;
    border-color: #000;
    color: #000;
    background: 0 0;
    width: 250px;
    height: 50px;
}
.btn:hover {
    background-color: #f7ff14;
    font-family: 'OpelNextW01-Regular', sans-serif;
    color:black;
    transform: scale(1.02);
    padding: 10px;
    box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);

}
@media(max-width: 1100px) {
    .titleCard {
        font-size: 40px;
    }
    .row {
        font-size: 50px; 
    }
    .btn {
      width: 190px;
      height: 50px;
      font-size: 20px;
    }
    .btn:hover {
        font-size: 20px
    }
    .carImg1 {
        width: 500px;
       height: 200px;
    }
}
@media(max-width: 750px) {
    .titleCard {
        font-size: 20px;
        margin-top:10px;
    }
    .row {
        font-size: 25px; 
    }
    .btn {
      width: 140px;
      height: 40px;
      font-size: 16px;
      padding:5px;
    }
    .btn:hover {
        font-size: 16px
    }
    .carImg1 {
        width: 400px;
       height: 200px;
    }
    .selectModel {
        width: 270px;
    height: 40px;
    font-size: 14px;
    margin-top: 10px;
    }
    .containerForSelect {
        margin-top: 10px;
    }
    .title {
        font-size: 35px
    }
    .inColum {
        margin-bottom: 20px;
    }
}
@media(max-width: 450px) {
    .titleCard {
        font-size: 15px;
        margin-top:10px;
    }
    .row {
        font-size: 16px; 
    }
    .btn {
      width: 120px;
      height: 30px;
      font-size: 12px;
      padding:5px;
    }
    .btn:hover {
        font-size: 12px
    }
    .carImg1 {
        width: 250px;
       height: 150px;
    }
    .selectModel {
        width: 220px;
        height: 30px;
       font-size: 11px;
       margin-top: 10px;
    }
    .containerForSelect {
        margin-top: 10px;
    }
    .title {
        font-size: 22px
    }
    .inColum {
        margin-bottom: 10px;
    }
    .row1 {
        font-size: 16px  
    }
}
@media(max-width: 260px) {
    .titleCard {
        font-size: 12px;
        margin-top:10px;
    }
    .row {
        font-size: 12px; 
    }
    .btn {
      width: 100px;
      height: 30px;
      font-size: 12px;
      padding:5px;
    }
    .btn:hover {
        font-size: 12px
    }
    .carImg1 {
        width: 150px;
       height: 100px;
    }
    .selectModel {
        width: 160px;
        height: 30px;
        font-size: 9px;
       margin-top: 10px;
    }
    .containerForSelect {
        margin-top: 10px;
    }
    .title {
        font-size: 17px
    }
    .inColum {
        margin-bottom: 10px;
    }
    .row1 {
        font-size: 12px  
    }
}
@media(max-width: 210px) {
    .title {
        font-size: 14px
    }
    .titleCard {
        font-size: 10px;
        margin-top:10px;
    }
    .btn {
      width: 80px;
      height: 25px;
      font-size: 10px;
      padding:5px;
    }
    .btn:hover {
        font-size: 10px
    }
    .selectModel {
        width: 160px;
        height: 25px;
        font-size: 9px;
       margin-top: 5px;
    }
}
`}</style>

</>)}
