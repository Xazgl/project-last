
import { IMaskInput } from "react-imask"
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import {  Checkbox } from "@mui/material";
import MuiModal from "./modalAfterSubmit/MuiModal";

type Office = {
    id: number,
    name: string,
}


const officeList: Office[] = [
    {
        id: 0,
        name: 'Выберите ДЦ',
    },
    {
        id: 1,
        name: 'Renault Арконт Волгоград',
    },
    {
        id: 2,
        name: 'KIA Арконт',
    },
    {
        id: 3,
        name: 'Volkswagen Арконт на Монолите',
    },
    {
        id: 4,
        name: 'Nissan Арконт на Еременко 7Б',
    },
    {
        id: 5,
        name: 'Mitsubishi Арконт на Землячке',
    },
    {
        id: 6,
        name: 'Hyundai Арконт',
    },
    {
        id: 7,
        name: 'Арконт с пробегом на Землячке',
    },
    {
        id: 8,
        name: 'Арконт с пробегом в Волжском',
    },
    {
        id: 9,
        name: 'УАЗ Арконт',
    },
    {
        id: 10,
        name: 'Chery Арконт',
    },
    {
        id: 11,
        name: 'EXEED Арконт',
    },
    {
        id: 12,
        name: 'Официальный сервис Datsun «Арконт»',
    },
    {
        id: 13,
        name: 'Официальный сервис Datsun «Арконт» (Волжский)',
    },
    {
        id: 14,
        name: 'Официальный сервис Opel «Арконт»',
    },
    {
        id: 15,
        name: 'Официальный сервис Ford «Арконт»',
    },
    {
        id: 16,
        name: 'FAW Арконт',
    },
    {
        id: 17,
        name: 'Geely Арконт',
    },
    {
        id: 18,
        name: 'HISUN Арконт',
    },
]



export function QuestionForm() {
    const [officeId, setOfficeId] = useState(0) //ДЦ
    const [name, setName] = useState('')   //Имя клиента
    const [phone, setPhone] = useState('') //Телефон
    const [checked, setChecked] = useState(false);
    const [disabledBtn, setDisabledBtn] = useState(true)

    const formBtn = useRef(null)

    const [open, setOpen] = useState(false);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        if (checked === true && name > '' && phone > '' && officeId > 0) {
            // formBtn.current.disable = false
            setDisabledBtn(false)
        } else {
            setDisabledBtn(true)
        }

    }, [checked, name, phone, officeId])

    const className = [
        'btn',
        disabledBtn === false ? 'btn_show' : '',
    ]

    const officeName = officeList.find(office => office.id === officeId)?.name

    async function sendmail(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (checked === true) {
            const res = await fetch('/api/sendmailMain', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ officeName, name, phone })
            })
            if (res.ok) {
                const result = await res.json()
                setOpen(true)
                console.log(result)
                //calltouch service
                // let ct_site_id = '57914'
                // let ct_data = {
                //     fio: `${name}`,
                //     phoneNumber: `${phone}`,
                //     subject: 'Заявка с сайта arkont.ru',
                //     tags: 'Главная страница,Вопросы',
                //     comment: `${name} оставил заявку по вопросам тед ${phone} дилерский центр ${officeName}`,
                //     requestUrl: location.href,
                //     //@ts-ignore!
                //     sessionId: window.ct('calltracking_params', '1oroglta').sessionId,
                // }

                // await fetch('https://api.calltouch.ru/calls-service/RestAPI/requests/' + ct_site_id + '/register/', {
                //     method: 'POST',
                //     headers: {
                //         'Accept': 'application/json, text/plain, */*',
                //         'Content-Type': 'application/x-www-form-urlencoded',
                //     },
                //     //@ts-ignore!
                //     body: `fio=${name}&phoneNumber=${phone}&subject='Заявка с сайта arkont.ru&tags=Главная страница,Вопросы, Opel&comment=${name} оставил заявку по вопросам тед ${phone} дилерский центр ${officeName}&requestUrl=${location.href}&sessionId=${window.ct('calltracking_params', '1oroglta').sessionId}`
                // })
            }
        }
    }


    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors }
    // } = useForm({
    //     defaultValues: {
    //         example: "",
    //         exampleRequired: ""
    //     }
    // });

    return (
        <>
            <div className="background">
                <div className="column">
                    <div className="title">Остались вопросы?</div>
                    <div className="desc">Заполните форму и мы с вами обязательно свяжемся</div>
                    <div className="form">
                        <form id="submit-form" onSubmit={sendmail}>
                            <div className="divForm">
                                <label htmlFor="name" className="form-label"></label>
                                <div className="inputTitle">Имя*</div>
                                <input type="text"
                                    className="name"
                                    id="name"
                                    name="name"
                                    placeholder="Ваше имя"
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
                                        padding: '11px 12px',
                                        outline: 'none',
                                        fontFamily: 'Roboto',
                                        border: 'solid 1px #ccc7c7',

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
                                <div className="inputTitle">Выберите ДЦ</div>
                                <select className="selectModel" value={officeId} name="office" onChange={event => setOfficeId(+event.target.value)}>
                                    <option value={0} selected disabled></option>
                                    {officeList.map(brand => <option key={brand.id} value={brand.id}>{brand.name}</option>)}
                                </select>
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
                             <MuiModal open={open}  setOpen={setOpen}/>
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
                margin-top:10px;
                justify-content: center;
                align-items:center;
                flex-direction: column;
                background-position: center center;
                background-color:#fcfafad2;
                background-repeat:no-repeat;
                background-size:cover;
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
            font-family: 'Roboto','sans-serif'; 
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
                font-family: 'Roboto','sans-serif'; 
           }


           .title {
                display:flex; 
                width: 100%;
                justify-content: start;
                align-items:center;
                margin-top:10px;
                font-weight: bold;
                font-family: 'Roboto','sans-serif'; 
                font-size:30px;
                text-align: start;
            
           }
           
           .desc {
                display:flex; 
                width: 100%;
                justify-content: start;
                align-items:center;
                margin-top:20px;
                font-family: 'Roboto','sans-serif'; 
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
                font-family: 'Roboto','sans-serif'; 
           }
           

           input {
                width: 100%;
                height: 40px;
                font-size: 18px; 
                font-family: 'Roboto','sans-serif'; 
                background-color: #e7e7e7;
                border:none;
                font-weight: bold;
                padding: 11px 12px;
                outline:none;
                border: solid 1px #ccc7c7;
           }

           select {
                width: 100%;
                height: 40px;
                font-size: 18px; 
                font-family: 'Roboto','sans-serif'; 
                background-color: #e7e7e7;
                border:none;
                border: solid 1px #ccc7c7;
                cursor: pointer;
                transition:  1s;

           }
            
           .btn {
                display:flex;
                justify-content:center;
                flex-direction:row;
                align-items:center;
                flex-direction:row;
                font-family: 'Roboto','sans-serif'; 
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
                background: #131313;
                color:white;
           }

           @media(max-width: 600px) {
                .title {
                    justify-content: center;
                    font-size:25px;
                    text-align: center;
                }
            
                .desc {
                    justify-content: center;
                    font-size:18px;
                    text-align: center;
                 } 
    
                .inputTitle {
                    display:flex;
                    width: 100%;
                    font-size: 18px;
                } 
                .divForm{
                    width:400px;
                }
                .column {
                    width:100%
                }
            }

            @media(max-width: 400px) {
                .divForm{
                    width:300px;
                }        
            }

            @media(max-width: 320px) {
                .divForm{
                    width:270px;
                }
            }

        `}</style>
        </>
    )
}