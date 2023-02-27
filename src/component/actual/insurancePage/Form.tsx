
import { IMaskInput } from "react-imask"
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Box, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { brendList, Driver, Drivers, Genders } from "./type";
import { wrap } from "module";
import { nanoid } from "nanoid";
import { DriversForm } from "./forms/DriversForm";


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

export function Form() {
    const [insuranceTypeKASKO, setInsuranceTypeKASKO] = useState(false) // КАСКО
    const [insuranceTypeOSAGO, setInsuranceTypeOSAGO] = useState(false) //ОСАГО
    const [carBrand, setCarBrand] = useState(0) //бренд авто
    const [carModel, setCarModel] = useState('') //марка авто
    const [price, setPrice] = useState('') //цена
    const [equipment, setEquipment] = useState('') //цена оборудования
    const [year, setYear] = useState('') //год авто
    const [power, setPower] = useState('') //мощность авто
    const [carNumber, setCarNumber] = useState('') //номер авто
    const [city, setCity] = useState('') //номер авто
    const [alarmSystem, setAlarmSystem] = useState(false) //противоугонная система
    const [carDeposit, setCarDeposit] = useState(false) //залог
    const [installmentPlan, setInstallmentPlan] = useState(false) //нужна ли рассрочка
    const [officeId, setOfficeId] = useState(0) //ДЦ
    const [name, setName] = useState('')   //Имя клиента
    const [phone, setPhone] = useState('') //Телефон
    const [checked, setChecked] = useState(false);
    const [disabledBtn, setDisabledBtn] = useState(true)



    useEffect(() => {
        if (checked === true && name > '' && phone > '') {
            // formBtn.current.disable = false
            setDisabledBtn(false)
        } else {
            setDisabledBtn(true)
        }
    }, [checked, name, phone, officeId])

    // const [yearMan, setYearMan] = useState('') //возраст
    // const [exp, setExp] = useState('') //стаж
    // const [gender, setGender] = useState('') //пол

    const [drivers, setDrivers] = useState<Driver[]>([{
        id: 0,
        yearsOld: '',
        gender: 'Мужской',
        exp: ''
    }]) //водители

    const formBtn = useRef(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };


    const className = [
        'btn',
        disabledBtn === false ? 'btn_show' : '',
    ]


    async function sendmail(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (checked === true) {
            const res = await fetch('/api/sendmailMain', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, phone })
            })
            if (res.ok) {
                const result = await res.json()
            }
        }
    }

    return (
        <>

            <div className="titleDiv">
                <span className="titlePage">Страхование</span>
            </div>
            <div className="background">
                <div className="column">
                    <div className="title">Заявка на расчет стоимости</div>
                    <div className="desc">Заполните поля ниже, чтобы мы могли предоставить вам расчеты</div>
                    <div className="form">
                        <form id="submit-form" onSubmit={sendmail}>
                            <div className="divForm">
                                <div className="inputTitle">Отметьте какие услуги вам нужны</div>
                                <FormGroup
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'start',
                                        width: '100%',
                                        flexDirection: 'row',
                                        gap: '20%',
                                        marginTop: '10px'
                                    }}
                                >
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        onChange={event => setInsuranceTypeOSAGO(!insuranceTypeOSAGO)}
                                        label="Нужна услуга ОСАГО"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        onChange={event => setInsuranceTypeKASKO(!insuranceTypeKASKO)}
                                        label="Нужна услуга КАСКО"
                                    />
                                </FormGroup>
                            </div>
                            <div className="divForm">
                                <div className="inputTitle">Укажите данные вашего авто</div>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        width: '100%',
                                        flexDirection: 'row',
                                        marginTop: '10px'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'start',
                                            width: '30%',
                                            marginTop: '10px',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <div className="inputTitleMini">Марка автомобиля*</div>
                                        <select className="selectModel" value={carBrand} name="office" onChange={event => setCarBrand(+event.target.value)}>
                                            <option value={0} selected disabled></option>
                                            {brendList.map(brand => <option key={brand.id} value={brand.id}>{brand.name}</option>)}
                                        </select>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'start',
                                            width: '30%',
                                            marginTop: '10px',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <div className="inputTitleMini">Модель*</div>
                                        <input type="text"
                                            className="name"
                                            id="name"
                                            name="name"
                                            placeholder="Solaris"
                                            required
                                            value={carModel}
                                            onChange={event => setCarModel(event.target.value)} />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'start',
                                            width: '30%',
                                            marginTop: '10px',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <div className="inputTitleMini">Стоимость автомобиля*</div>
                                        <input type="text"
                                            name="name"
                                            placeholder="500 000"
                                            required
                                            value={price}
                                            onChange={event => setPrice(event.target.value)} />
                                    </Box>
                                </Box>
                            </div>
                            <div className="divForm">
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        width: '100%',
                                        flexDirection: 'row',
                                        marginTop: '10px'
                                    }}
                                >

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'start',
                                            width: '30%',
                                            marginTop: '10px',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <div className="inputTitleMini">Стоимость доп.обруд.*</div>
                                        <input type="text"
                                            name="name"
                                            placeholder="100 000"
                                            required
                                            value={equipment}
                                            onChange={event => setEquipment(event.target.value)} />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'start',
                                            width: '30%',
                                            marginTop: '10px',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <div className="inputTitleMini">Год выпуска</div>
                                        <input type="number"
                                            name="name"
                                            placeholder="2023"
                                            required
                                            value={equipment}
                                            onChange={event => setEquipment(event.target.value)} />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'start',
                                            width: '30%',
                                            marginTop: '10px',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <div className="inputTitleMini">Гос номер</div>
                                        <input type="number"
                                            name="name"
                                            placeholder="A001AA 00"
                                            required
                                            value={carNumber}
                                            onChange={event => setCarNumber(event.target.value)} />
                                    </Box>
                                </Box>
                            </div>

                            <div className="divForm">
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        width: '100%',
                                        flexDirection: 'row',
                                        marginTop: '10px'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'start',
                                            width: '40%',
                                            marginTop: '10px',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <div className="inputTitleMini">Мощность</div>
                                        <input type="text"
                                            name="name"
                                            placeholder="110 л.с"
                                            required
                                            value={power}
                                            onChange={event => setPower(event.target.value)} />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'start',
                                            width: '40%',
                                            marginTop: '10px',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <div className="inputTitleMini">Ваш город проживания</div>
                                        <input type="text"
                                            name="name"
                                            placeholder="Москва"
                                            required
                                            value={power}
                                            onChange={event => setPower(event.target.value)} />
                                    </Box>
                                </Box>
                            </div>

                            <div className="divForm">
                                <FormGroup
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'start',
                                        width: '100%',
                                        flexDirection: 'row',
                                        gap: '20%',
                                        marginTop: '10px',
                                        flexWrap: 'wrap'
                                    }}
                                >
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        onChange={event => setAlarmSystem(!alarmSystem)}
                                        label="Противоугонное устройство"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        onChange={event => setInstallmentPlan(!installmentPlan)}
                                        label="Необходима рассрочка"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        onChange={event => setCarDeposit(!carDeposit)}
                                        label="Находится ли автомобиль в залоге"
                                    />
                                </FormGroup>
                            </div>
                            <div className="divForm">
                                <div className="inputTitle">Данные по водителям</div>
                                <DriversForm  setDrivers={setDrivers} drivers={drivers}/>
                            </div>

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
                                <button className={className.join(' ')} ref={formBtn}
                                    type="submit"
                                    disabled={disabledBtn}
                                >
                                    Оправить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <style jsx>{`


            .titleDiv {
                display: flex;
                justify-content: center;
                width: 100%;
            }

            .titlePage {
                display: flex;
                justify-content: start;
                width:900px;
                font-size:45px;
                font-weight: bold;
            }
            
           .background {
                display:flex; 
                width: 100%;
                height:auto;
                justify-content: center;
                align-items:center;
                flex-direction: column;
                background-position: center center;
                background-color:#fcfafad2;
                background-repeat:no-repeat;
                background-size:cover;
                padding-top: 40px;
                padding-bottom: 40px;
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
                width:900px;
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
                width: 900px;
                justify-content: start;
                align-items:center;
                margin-top:20px;
                flex-direction: column;
                border-top: 1px solid #d4d3d3;
                padding: 2px;
           }

           .inputTitle {
                display:flex;
                width: 900px;
                justify-content: start;
                align-items:center;
                padding-left:10px;
                flex-direction: row;
                font-size: 20px;
                font-family: 'TacticSans-Reg','sans-serif'; 
           }
           

           .inputTitleMini {
                display:flex;
                width: 100%;
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
                padding: 11px 12px;
                border:none;
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



           @media(max-width: 900px) {
              .column {
                   width: 600px;
              }

              .divForm {
                width: 600px;
              }

              .inputTitle {
                width: 600px;
              }

              .inputTitleMini {
                font-size:16px;
              }
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

                .inputTitleMini {
                    display:flex;
                    width: 100%;
                    font-size: 14px;
                    height: 40px;
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