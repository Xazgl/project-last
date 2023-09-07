
import { IMaskInput } from "react-imask"
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import banner from '/public/images/backTo.jpg'
import { Checkbox } from "@mui/material";


export function TradeInForm() {
    const [name, setName] = useState('')   //Имя клиента
    const [phone, setPhone] = useState('') //Телефон
    const [carModel, setCarModel] = useState('')
    const [carYear, setCarYear] = useState('')
    const [checked, setChecked] = useState(false);
    const [disabledBtn, setDisabledBtn] = useState(true)

    const formBtn = useRef(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        if (checked === true && name > '' && phone > '' && carModel> '' && carYear> '') {
            // formBtn.current.disable = false
            setDisabledBtn(false)
        }else {
            setDisabledBtn(true)
        }
        
    }, [checked, name, phone, carModel, carYear])

    const className = [
        'btn',
        disabledBtn===false ? 'btn_show' : '',
    ]


    async function sendmailTradein(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const res = await fetch('/api/sendmailTradein', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phone, carModel, carYear })
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
                    <div className="title">Онлайн - оценка автомобиля</div>
                    <div className="desc">Заполните форму и мы с вами обязательно свяжемся</div>
                    <div className="form">
                        <form id="submit-form" onSubmit={sendmailTradein}>
                            <div className="divForm">
                                <label htmlFor="name" className="form-label"></label>
                                <div className="inputTitle">Имя*</div>
                                <input type="text"
                                    className="name"
                                    id="name"
                                    name="name"
                                    placeholder="Александр"
                                    required
                                    value={name}
                                    onChange={event => setName(event.target.value)} />
                            </div>
                            <div className="divForm">
                                <div className="inputTitle">Телефон* </div>
                                <label htmlFor="phone" className="form-label"></label>
                                <IMaskInput
                                    style={{
                                        fontSize: '18px',
                                        height: '40px',
                                        width: '100%',
                                        backgroundColor: '#e7e7e7',
                                        border: 'none',
                                        padding: '11px 12px'

                                    }}
                                    id="inputP"
                                    className="phone"
                                    mask={'+{7}(000)000-00-00'}
                                    placeholder="+7 ___ ___ __ __"
                                    required
                                    value={phone}
                                    name="phone"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)}
                                />
                            </div>
                            <div className="divForm">
                                <div className="inputTitle">Модель и бренд вашего авто </div>
                                <input type="text"
                                    className="name"
                                    id="name"
                                    name="name"
                                    placeholder="KIA Rio"
                                    required
                                    value={carModel}
                                    onChange={event => setCarModel(event.target.value)} />
                            </div>
                            <div className="divForm">
                                <div className="inputTitle">Год выпуска вашего авто</div>
                                <input type="number"
                                    placeholder="2000"
                                    min="2000" max="2030"
                                    value={carYear}
                                    onChange={event => setCarYear(event.target.value)} />
                            </div>
                            
                            <div className="divForm" style={{ alignItems: "start" }}>
                                <div className="inputTitle" style={{ fontSize: '14px' }}>Даю согласие на обработку своих персональных данных и соглашаюсь с политикой обработки персональных данных</div>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </div>
                            <div className="divForm">
                                <button className={className.join(' ')} ref={formBtn}
                                    type="submit"
                                    disabled={disabledBtn}
                                >
                                    Отправить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
           .background {
                    display:flex; 
                    width: 100%;
                    height: 800px;
                    justify-content: center;
                    align-items:center;
                    flex-direction: column;
                    background-position: center center;
                    background-color:#fcfafad2;
                    background-repeat:no-repeat;
                    background-size:cover;
                    margin-top: 50px;
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
            margin-top:20px;
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
           

           input {
            width: 100%;
            height: 40px;
            font-size: 18px; 
            font-family: 'TacticSans-Reg','sans-serif'; 
            background-color: #e7e7e7;
            border:none;
            font-weight: bold;
            padding-left: '11px 12px',
           }

           select {
            width: 100%;
            height: 40px;
            font-size: 18px; 
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
                    width: 100%;
                    height: 45px;
                    background: transparent;
                    border: 2px solid;
                    margin-top:40px;
                    font-size:20px;
                    text-align: center;
           }
           

           .btn_show:hover {
             background:#005baa;
             color:white;
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