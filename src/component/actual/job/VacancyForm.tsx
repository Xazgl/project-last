
import { IMaskInput } from "react-imask"
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import banner from '/public/images/backTo.jpg'
import { Checkbox, TextareaAutosize, TextField } from "@mui/material";

import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

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

export function VacancyForm(job) {
    const [officeId, setOfficeId] = useState(0) //ДЦ
    const [name, setName] = useState('')   //Имя 
    const [surname, setSurname] = useState('')   //Фамилия
    const [patronymic, setPatronymic] = useState('')   //Отчество 
    const [salary, setSalary] = useState('')   //Зарплата
    const [companyName, setCompanyName] = useState('')   //Последние место работы название
    const [companyPosition, setCompanyPosition] = useState('')   //Последние место работы должность
    const [startData, setStartDate] = useState(dayjs('2016-00-00T00:00:00'))
    const [endData, setEndData] = useState(dayjs('2023-00-00T00:00:00'))
    const [phone, setPhone] = useState('') //Телефон
    const [text, setText] = useState('') // Почему уволился
    const [textTwo, setTextTwo] = useState('') //Пожелания
    const [checked, setChecked] = useState(false);
    const [disabledBtn, setDisabledBtn] = useState(true)

    const formBtn = useRef(null)


    const handleChangeDateStart = (newValue) => {
        setStartDate(newValue);
    };

    const handleChangeDateEnd = (newValue) => {
        setEndData(newValue);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        if (checked === true && name > '' && surname > '' && patronymic > ''
            && companyName > '' && companyPosition > '' && startData !== null && endData !== null) {
            // formBtn.current.disable = false
            setDisabledBtn(false)
        } else {
            setDisabledBtn(true)
        }

    }, [checked, name, surname, patronymic, phone, salary, companyName, companyPosition, startData, endData])

    const className = [
        'btn',
        disabledBtn === false ? 'btn_show' : '',
    ]

    const officeName = officeList.find(office => office.id === officeId)?.name

    async function sendmail(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (checked === true) {
            const res = await fetch('/api/job/sendmaijob', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name, surname, patronymic, phone, companyName,
                    companyPosition, startData, endData, text, textTwo, salary
                })
            })
            if (res.ok) {
                const result = await res.json()
            }
        }
    }

    return (
        <>
            <div className="background">
                <div className="column">
                    <div className="title">Ваше резюме</div>
                    <div className="desc">Заполните данную форму и мы с вами свяжемся</div>
                    <div className="form">
                        <form id="submit-form" onSubmit={sendmail}>
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
                                    onChange={(event) => {
                                        const inputValue = event.target.value;
                                        const sanitizedValue = inputValue.replace(/[^A-Za-zА-Яа-яЁё\s]/g, ''); // Заменяет все символы, кроме букв и пробелов
                                        const capitalizedValue = sanitizedValue.charAt(0).toUpperCase() + sanitizedValue.slice(1);
                                        if (capitalizedValue.length <= 50) {
                                            setName(capitalizedValue);
                                        }
                                    }}
                                />
                            </div>

                            <div className="divForm">
                                <label htmlFor="name" className="form-label"></label>
                                <div className="inputTitle">Фамилия*</div>
                                <input type="text"
                                    className="name"
                                    id="name"
                                    name="name"
                                    placeholder="Иванов"
                                    required
                                    value={surname}
                                    onChange={event => setSurname(event.target.value)} />
                            </div>

                            <div className="divForm">
                                <label htmlFor="name" className="form-label"></label>
                                <div className="inputTitle">Отчество*</div>
                                <input type="text"
                                    className="name"
                                    id="name"
                                    name="name"
                                    placeholder="Иванович"
                                    required
                                    value={patronymic}
                                    onChange={event => setPatronymic(event.target.value)} />
                            </div>
                            <div className="divForm">
                                <label htmlFor="name" className="form-label"></label>
                                <div className="inputTitle">Ожидаемый уровень заработной платы</div>
                                <input type="text"
                                    className="name"
                                    id="name"
                                    name="name"
                                    placeholder="от 45000 руб."
                                    required
                                    value={salary}
                                    onChange={event => setSalary(event.target.value)} />
                            </div>

                            <div className="divForm">
                                <div className="inputTitle">Телефон* </div>
                                <label htmlFor="phone" className="form-label"></label>
                                <IMaskInput
                                    style={{
                                        fontSize: '18px',
                                        height: '40px',
                                        width: '100%',
                                        padding: '12px 12px',
                                        border: 'none',
                                        outline: 'none'
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
                                <div className="inputTitle">Данные о последнем месте работы </div>
                                <input type="text"
                                    className="name"
                                    id="name"
                                    name="name"
                                    placeholder="Название учереждение или организации"
                                    required
                                    value={companyName}
                                    onChange={event => setCompanyName(event.target.value)}
                                />
                            </div>

                            <div className="divForm">
                                <input type="text"
                                    className="name"
                                    id="name"
                                    name="name"
                                    placeholder="Должность"
                                    required
                                    value={companyPosition}
                                    onChange={event => setCompanyPosition(event.target.value)}
                                />
                            </div>

                            <div className="divForm" id="dateForm">
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}>
                                    <DesktopDatePicker
                                        label="От"
                                        inputFormat="MM/DD/YYYY"
                                        value={startData}
                                        onChange={handleChangeDateStart}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DesktopDatePicker
                                        label="До"
                                        inputFormat="MM/DD/YYYY"
                                        value={endData}
                                        onChange={handleChangeDateEnd}
                                        renderInput={(params) => <TextField
                                            {...params} />}
                                    />
                                </LocalizationProvider>
                            </div>

                            <div className="divForm" >
                                <div className="inputTitle">Причиный поиска работы</div>
                                <TextareaAutosize
                                    aria-label="empty textarea"
                                    placeholder=""
                                    style={{
                                        width: '100%',
                                        height: '100px',
                                        resize: 'none',
                                        padding: '12px 12px',
                                        border: '#e7e7e7 solid 2px',
                                        outline: 'none'
                                    }}
                                    value={text}
                                    onChange={event => setText(event.target.value)}
                                />
                            </div>
                            <div className="divForm" >
                                <div className="inputTitle">Ваши пожелания</div>
                                <TextareaAutosize
                                    aria-label="empty textarea"
                                    placeholder="Например: график и условия работы, предпочтительный автоцентр или район города"
                                    style={{
                                        width: '100%',
                                        height: '100px',
                                        resize: 'none',
                                        padding: '12px 12px',
                                        border: '#e7e7e7 solid 2px',
                                        outline: 'none'
                                    }}
                                    value={textTwo}
                                    onChange={event => setTextTwo(event.target.value)}
                                />
                            </div>

                            <div className="divForm" style={{ alignItems: "start",flexDirection:'row' }}>
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
                height:auto;
                justify-content: center;
                align-items:center;
                flex-direction: column;
                background-position: center center;
                background-repeat:no-repeat;
                background-size:cover;
                margin-top:50px;
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
                font-family: 'Gilroy','sans-serif'; 
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
                width:900px;
                font-family: 'Gilroy','sans-serif'; 
           }


           .title {
                display:flex; 
                width: 100%;
                justify-content: start;
                align-items:center;
                margin-top:10px;
                font-weight: bold;
                font-family: 'Gilroy','sans-serif'; 
                font-size:30px;
                text-align: start;
           }
           
           .desc {
                display:flex; 
                width: 100%;
                justify-content: start;
                align-items:center;
                margin-top:20px;
                font-family: 'Gilroy','sans-serif'; 
                font-size:21px;
           }

           .form {
                display:flex;
                width: 100%;
                justify-content: start;
                align-items: start;
                margin-top:20px;
                flex-direction: column;
           }

           .divForm {
                display:flex;
                width: 500px;
                justify-content: start;
                align-items:center;
                margin-top:40px;
                flex-direction: column;
           }

           #dateForm {
                flex-direction: row;
           }

           .inputTitle {
                display:flex;
                width: 500px;
                justify-content: start;
                align-items:center;
                padding-left:10px;
                flex-direction: row;
                font-size: 20px;
                font-family: 'Gilroy','sans-serif'; 
           }
           

           input {
                width: 100%;
                height: 40px;
                font-size: 18px; 
                font-family: 'Gilroy','sans-serif'; 
                border:none;
                padding: 12px 12px;
                border-bottom:  #e7e7e7 solid 2px;
                outline: none;
                margin-top:15px; 
           }

           select {
                width: 100%;
                height: 40px;
                font-size: 18px; 
                font-family: 'Gilroy','sans-serif'; 
                background-color: #e7e7e7;
                border:none;
           }
            
           .btn {
                display:flex;
                justify-content:center;
                flex-direction:row;
                align-items:center;
                flex-direction:row;
                font-family: 'Gilroy','sans-serif';
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

           @media(max-width: 900px) {
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

            @media(max-width: 420px) {
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