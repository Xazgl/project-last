
import { IMaskInput } from "react-imask"
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Box, Checkbox, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
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



    return (
        <>
            <div className="background">
                <div className="column">
                    <div className="title">
                        ОСТАЛИСЬ <br /> ВОПРОСЫ?
                    </div>
                    <div className="desc">
                        Оставьте нам ваши данные <br />  и мы свяжемся с  вами в
                        ближайшее время
                    </div>
                </div>
                <div className="column">
                    <div className="form">
                        <form id="submit-form" onSubmit={sendmail}>
                            <div className="formHeader">
                                <div className="formTitle">Оставить заявку</div>
                                <div className="formDesc">Заполните форму и мы с вами обязательно свяжемся</div>
                            </div>
                            <div className="divForm">
                                {/* <label htmlFor="name" className="form-label"></label> */}
                                {/* <div className="inputTitle">Имя*</div> */}
                                <input type="text"
                                    className="name"
                                    id="name"
                                    name="name"
                                    placeholder="Ваше имя"
                                    required
                                    value={name}
                                    onChange={(event) => {
                                        const inputValue = event.target.value;
                                        const sanitizedValue = inputValue.replace(/[^A-Za-zА-Яа-яЁё\s]/g, ''); // Заменяет все символы, кроме букв и пробелов
                                        const capitalizedValue = sanitizedValue.charAt(0).toUpperCase() + sanitizedValue.slice(1);
                                        if (capitalizedValue.length <= 50) {
                                            setName(capitalizedValue);
                                        }
                                    }}
                                />

                                <label htmlFor="phone" className="form-label"></label>
                                <IMaskInput
                                    style={{
                                        fontSize: '16px',
                                        height: '40px',
                                        width: '100%',
                                        backgroundColor: 'white',
                                        padding: '12px 12px',
                                        outline: 'none',
                                        fontFamily: 'Roboto',
                                        border: 'solid 1px #ccc7c7',

                                    }}
                                    id="inputP"
                                    className="phone"
                                    mask={'+{7}(000)000-00-00'}
                                    placeholder="+7 (___) ___ __ __"
                                    required
                                    value={phone}
                                    name="phone"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)}
                                />

                            </div>

                            <div className="divForm">
                                {/* <div className="inputTitle">Выберите ДЦ</div> */}
                                <select className="selectModel" value={officeId} name="office" onChange={event => setOfficeId(+event.target.value)}>
                                    <option value={0} selected disabled>Дилерский центр</option>
                                    {officeList.map(brand => <option key={brand.id} value={brand.id}>{brand.name}</option>)}
                                </select>
                                <MuiModal open={open} setOpen={setOpen} />
                                <button className={className.join(' ')} ref={formBtn}
                                    type="submit"
                                    disabled={disabledBtn}
                                >
                                    Оправить
                                </button>
                            </div>
                            <div className="divForm" id="formFooter" style={{ alignItems: "center", justifyContent: 'start' }}>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{
                                        padding: '0',
                                        borderRadius: '0xp',
                                        color: 'white',
                                        '&.Mui-checked': {
                                            color: '#f9b518', // Ваш цвет при нажатом чекбоксе
                                        },
                                    }}
                                />
                                <div className="inputTitle" style={{ fontSize: '14px' }}> Я даю согласие на обработку своих персональных данных</div>
                            </div>

                        </form>
                    </div>
                </div>
            </div >
            <style jsx>{`
            
           .background {
                display:flex; 
                width: 100%;
                height: 500px;
                margin-top:10px;
                justify-content: space-between;
                align-items:center;
                flex-direction: row;
                background-position: center center;
                background-repeat:no-repeat;
                background-size:cover;
                
                margin-top: 50px;
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
                font-size:43px;
                text-align: start;
                color:#0c54a0;
            
           }
           
           .desc {
                display:flex; 
                width: 100%;
                justify-content: start;
                align-items:center;
                margin-top:20px;
                font-family: 'Roboto','sans-serif'; 
                font-size:18px;
           }

           .form {
                display:flex;
                width: 100%;
                justify-content: start;
                align-items:center;
                margin-top:20px;
                flex-direction: column;
                background-color: #0c54a0;
                padding: 30px;
                color:white;
           }

           .formHeader{
                display:flex;
                width: 100%;
                flex-direction: column;
                font-family: 'Roboto','sans-serif'; 
           }

           .formTitle{
               display:flex;
               font-size:25px;
               font-weight: bold;
           }

           .formDesc{
               display: flex;
               font-size:14px;
           }

           .divForm {
                display:flex;
                width: 100%;
                flex-direction: row;
                margin-top:20px;
                height: 40px;
                gap:5px;
           }

           .inputTitle {
                display:flex;
                justify-content: start;
                align-items:center;
                padding-left:10px;
                flex-direction: row;
                font-size: 20px;
                font-family: 'Roboto','sans-serif'; 
           }
           

           input {
                width: 100%;
                height: 100%;
                font-size: 16px; 
                font-family: 'Roboto','sans-serif'; 
                background-color: white;
                border:none;
        
                padding: 12px 12px;
                outline:none;
                border: solid 1px white;
           }

           select {
                width: 100%;
                height: 100%;
                font-size: 16px; 
                font-family: 'Roboto','sans-serif'; 
                background-color:white;
                border:none;
                border: solid 1px white;
                cursor: pointer;
                transition:  1s;
                outline: none;
                padding-left:12px;
           }
            
           .btn {
                display:flex;
                justify-content:center;
                flex-direction:row;
                align-items:center;
                flex-direction:row;
                font-family: 'Roboto','sans-serif'; 
                transition: transform.3s;
                width:100%;
                height: 100%;
                background: transparent;
                border: none;
                font-size:20px;
                text-align: center;
                background-color: #b98d27;
                color:#005baa;
           }

           .btn_show{
            background-color: #f9b518;
            cursor: pointer;
           }
           
           .btn_show:hover {
             transform: scale(0.98);
           }


        

            @media(max-width: 1150px) {
                .column {
                    width: 400px;
                } 
            }

            
            @media(max-width: 950px) {
                .background{
                   flex-direction: column;
                   height: auto;
                   align-items: center;
                } 
                .column {
                    width:70%;
                } 
                br {
                    display: none;
                }
            }

           @media(max-width: 640px) {
                .divForm{
                   flex-direction: column;  
                   gap:10px;
                   height: auto;
                }   
                .column {
                    width:90%;
                } 
                .form {
                    width: 100%;
                    border-radius: 20px;
                }
                
                input {
                    height: 40px;
                }
                select {
                     height: 40px;
                }
                .btn {
                  height:40px ;
                }
                #formFooter {
                    flex-direction: row;
                }
            }

            @media(max-width: 400px) {
                .divForm{
                  
                }        
            }

            @media(max-width: 340px) {
                .form{
                    padding: 20px;
                }
            }

        `}</style>
        </>
    )
}