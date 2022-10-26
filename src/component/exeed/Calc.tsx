
import { IMaskInput } from "react-imask"
import { ChangeEvent, FormEvent, useState } from "react";
import banner from '/public/images/backTo.jpg'

type Complectation = {
    id: number,
    name: string,
    power: number,
    engine: string,
    transmission: string
}

type Model = {
    id: number,
    name: string,
    complectations: Complectation[]
}

type Brand = {
    id: number,
    name: string,
    model: Model[]
}

const modelList: Brand[] = [
    {
        id: 1,
        name: 'Chery',
        model: [

            {
                id: 1,
                name: 'Tiggo 4',
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
                name: 'Tiggo 7 PRO',
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
                id: 3,
                name: 'Tiggo 8',
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
                id: 4,
                name: 'Tiggo 8 PRO',
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
                id: 5,
                name: 'Tiggo 8 PRO MAX',
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
        ]
    },
    {
        id: 2,
        name: 'Другой',
        model: []
    }
]

export function Calc() {
    const [curBrandId, setCurBrandlId] = useState(0) //id бренда
    const [curComplectId, setCurComplectId] = useState(0) //id комплектации
    const [curModelId, setCurModelId] = useState(0) //id машины
    const [complectationlId, setcomplectationId] = useState(0)


    const [mileage, setMileage] = useState('')
    const [carAge, setCarAge] = useState('')

    const brendName = modelList.find(brand =>brand.id ===curBrandId)?.name
    const model = modelList.find(brand =>brand.id ===curBrandId)?.model.find(model=>model.id === curModelId)?.name
    const complectation = modelList.find(brand =>brand.id ===curBrandId)?.model.find(model=>model.id === curModelId)?.complectations.find(compl=>compl.id===curComplectId)?.name


    async function sendmail(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const res = await fetch('/api/sendmailCalc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ brendName, model, complectation, mileage, carAge })
        })
        if (res.ok) {
            const result = await res.json()
            console.log(result);

        }
    }

    return (
        <>
            <div className="background">
                <div className="column">
                    <div className="title">Калькулятор ТО</div>
                    <div className="desc">Укажите параметры автомобиля</div>
                    <div className="form">
                        <form id="submit-form" onSubmit={sendmail}>
                            <div className="divForm">
                                <div className="inputTitle">Марка</div>
                                <select className="selectModel" value={curBrandId} name="modalCar" onChange={event => setCurBrandlId(+event.target.value)}>
                                    <option value={0} selected disabled></option>
                                    {modelList.map(brand => <option key={brand.id} value={brand.id}>{brand.name}</option>)}
                                </select>
                            </div>

                            <div className="divForm">
                                <div className="inputTitle">Модель</div>
                                <select className="selectModel" value={curModelId} name="modalCar" onChange={event => setCurModelId(+event.target.value)}>
                                    <option value={0} selected disabled></option>
                                    {modelList.find(brand => brand.id === curBrandId)?.model.map(model => <option key={model.id} value={model.id}>{model.name}</option>)}
                                </select>
                            </div>

                            <div className="divForm">
                                <div className="inputTitle">Спецификация</div>
                                <select className="selectModel" value={curComplectId} name="modalCar" onChange={event => setCurComplectId(+event.target.value)}>
                                    <option value={0} selected disabled></option>
                                    {modelList.find(brand => brand.id === curBrandId)?.model.find(model => model.id === curModelId)?.complectations.map(complect => <option key={complect.id} value={complect.id}>{complect.name}</option>)}
                                </select>
                            </div>

                            <div className="divForm">
                                <div className="inputTitle">Пробег</div>
                                <div className="inputRow">
                                    <div className="first">
                                        <label htmlFor="name" className="form-label"></label>
                                        <input type="text"
                                            className="name"
                                            id="name"
                                            name="mileage"
                                            placeholder=""
                                            required
                                            value={mileage}
                                            onChange={event => setMileage(event.target.value)} />
                                    </div>
                                    <div className="two">
                                        <div className="border">
                                            <span className="rightInput">КМ.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="divForm">
                                <div className="inputTitle">Срок эксплуатации</div>
                                <div className="inputRow">
                                    <div className="first">
                                        <label htmlFor="name" className="form-label"></label>
                                        <input type="text"
                                            className="name"
                                            id="name"
                                            name="mileage"
                                            placeholder=""
                                            required
                                            value={carAge}
                                            onChange={event => setCarAge(event.target.value)} />
                                    </div>
                                    <div className="two">
                                        <div className="border">
                                            <span className="rightInput">МЕС.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="btnDiv">
                                <button className="btn">РАССЧИТАТЬ   &#10095;</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div >
            <style jsx>{`
           .background {
                    display:flex; 
                    width: 100%;
                    height: 100vh;
                    justify-content: center;
                    align-items:center;
                    flex-direction: column;
                    background-position: center center;
                    background-image: url('${banner.src}');
                    background-repeat:no-repeat;
                    background-size:cover;
            }

            .inputRow {
                display: flex;
                flex-direction: row;
                width: 500px;
                height: 40px;
            }

            .first {
                width: 450px;
                height: 40px;
            }

            .two {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width:50px;
                height: 40px;
                background-color: #e7e7e7;
                text-align: center;
            }

            .rightInput {
                font-family: 'TacticSans-Reg','sans-serif'; 
                font-size: 11px; 
                font-weight: bold;
                
            }
            .border {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 30px;
                border-left: solid 1px #ccc7c7;
                text-align: center;
                width:50px;
            }

           .column {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: baseline;
            width:500px;
            font-family: 'TacticSans-Reg','sans-serif'; 
           }


           .title {
             display:flex; 
             width: 100%;
             justify-content: start;
             align-items:center;
             margin-top:10px;
             font-weight: bold;
             font-family: 'TacticSans-Reg','sans-serif'; 
             font-size:30px;
             text-align: start;
            
           }
           
           .desc {
             display:flex; 
             width: 100%;
             justify-content: start;
             align-items:center;
             margin-top:20px;
             font-family: 'TacticSans-Reg','sans-serif'; 
             font-size:21px;
           }

           .form {
            display:flex;
            width: 100%;
            justify-content: start;
            align-items:center;
            margin-top:20px;
            flex-direction: column;
           }

           .divForm {
            display:flex;
            width: 500px;
            justify-content: start;
            align-items:center;
            margin-top:10px;
            flex-direction: column;
           }

           .inputTitle {
            display:flex;
            width: 500px;
            justify-content: start;
            align-items:center;
            padding-left:10px;
            flex-direction: row;
            font-size: 20px;
            font-family: 'TacticSans-Reg','sans-serif'; 
           }
           
           .btnDiv {
            display:flex;
            justify-content: start;
            align-items:center;
            flex-direction: row;
            font-size: 20px;
            font-family: 'TacticSans-Reg','sans-serif'; 
           }

           input {
            width: 100%;
            height: 40px;
            font-size: 16px; 
            font-family: 'TacticSans-Reg','sans-serif'; 
            background-color: #e7e7e7;
            border:none;
            font-weight: bold;
           }

           select {
            width: 100%;
            height: 40px;
            font-size: 16px; 
            font-family: 'TacticSans-Reg','sans-serif'; 
            background-color: #e7e7e7;
            border:none;
           }


           .btn {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    align-items:center;
                    flex-direction:row;
                    font-family: 'TacticSans-Reg','sans-serif';
                    transition: transform.3s;
                    width: 178px;
                    height: 45px;
                    background: transparent;
                    border: 2px solid;
                    margin-top:40px;
                    font-size:16px;
                    text-align: center;
           }
           .btn:hover {
             background:rgba(0, 0, 0, 0.535);
           }
           @media(max-width: 540px) {
            
            .divForm{
                width:400px;
            }
            .inputTitle{
                width:100%;
            }
            .words {
                width:100%;
            }
            .two {
                display:none;
            }
            .inputRow{
                width:400px;
            }
            .btn {
                width:100%;
                font-size:20px;
            }
            .title {
                width: auto;
            }
            .column {
                width:auto;
            }
         }
         @media(max-width: 400px) {
            
            .divForm{
                width:300px;
            }
           

            .inputRow{
                width:300px;
            }
           
            
        }

         @media(max-width: 320px) {
            
            .divForm{
                width:230px;
            }
            

            .inputRow{
                width:230px;
            }
           
        
         }

          `}</style>
        </>
    )
}