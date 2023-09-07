
import { IMaskInput } from "react-imask"
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Box, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { brendList, Driver, Drivers, Genders } from "./type";
import { DriversForm } from "./forms/DriversForm";
import labelBtn from '/public/images/labelbtn.png'
import EditNoteIcon from '@mui/icons-material/EditNote';

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
    const [drivers, setDrivers] = useState<Driver[]>([{
        id: 0,
        yearsOld: '',
        gender: 'Мужской',
        exp: ''
    }]) //водители
    const [carBrendName, setCarBrendName] = useState('')
    const [officeName, setOfficeName] = useState('')


    useEffect(() => {
        setCarBrendName(brendList.find(brend => brend.id === carBrand)?.name)
        setOfficeName(officeList.find(dealer => dealer.id === officeId)?.name)
        if (checked === true && name > '' && phone > '' && equipment > '' &&
            year > '' && power > '' && carNumber > '' && city > '' && drivers.length > 0 &&
            carBrendName > '' && carModel > '' && price > '' && officeName > '') {
            // formBtn.current.disable = false
            setDisabledBtn(false)
        } else {
            setDisabledBtn(true)
        }
    }, [checked, name, phone, equipment, year, power, carNumber, city, carModel, price, officeName, carBrendName, drivers])


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
            const res = await fetch('/api/sendmailInsurance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name, phone, equipment, year, power, carNumber, city,
                    carModel, price, officeName, carBrendName, insuranceTypeKASKO,
                    insuranceTypeOSAGO, alarmSystem, carDeposit, installmentPlan, drivers
                })
            })
            if (res.ok) {
                const result = await res.json()
                console.log("Ваша заявка успешно отправлена")
            }
        }
    }

    // async function allIsurance(event: FormEvent<HTMLFormElement>) {
    //     event.preventDefault()
    //     if (checked === true) {
    //         const res = await fetch('/api/allIsurance', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //         })
    //         if (res.ok) {
    //             const result = await res.json()
    //             console.log(result)
    //         }
    //     }
    // }


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
                                        control={<Checkbox sx={{ color: '#005baa' }} />}
                                        onChange={event => setInsuranceTypeOSAGO(!insuranceTypeOSAGO)}
                                        label="Нужна услуга ОСАГО"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox sx={{ color: '#005baa' }} />}
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
                                            value={year}
                                            onChange={
                                                event => {
                                                    if (!/^\d{0,4}$/.test(event.target.value)) return;
                                                    setYear(event.target.value)
                                                }
                                            }
                                        />
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
                                        <input type="text"
                                            name="name"
                                            placeholder="A001AA 01"
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
                                            placeholder="110 (л.с)"
                                            required
                                            value={power}
                                            onChange={
                                                event => {
                                                    if (!/^\d{0,3}$/.test(event.target.value)) return;
                                                    setPower(event.target.value)
                                                }
                                            }
                                        />
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
                                            value={city}
                                            onChange={event => setCity(event.target.value)} />
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
                                <DriversForm setDrivers={setDrivers} drivers={drivers} />
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
                                <div className="inputTitle">Телефон* </div>
                                <label htmlFor="phone" className="form-label"></label>
                                <IMaskInput
                                    style={{
                                        fontSize: '18px',
                                        height: '40px',
                                        width: '100%',
                                        border: '2px solid #005baa',
                                        marginTop: '10px',
                                        padding: '12px 12px',
                                        outline: 'none',
                                        fontFamily: 'Roboto',
                                        backgroundColor: 'white'
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
                                    sx={{ color: '#005baa' }}
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </div>
                            <div className="divForm">
                                <button className={className.join(' ')} ref={formBtn}
                                    type="submit"
                                    disabled={disabledBtn}
                                    title="Заполните форму, перед отправкой"
                                >
                                    <EditNoteIcon
                                        sx={{fontSize:'30px'}}
                                    />
                                    Отправить
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
                margin-top: 30px;
            }

            .titlePage {
                display: flex;
                justify-content: start;
                width:900px;
                font-size:45px;
                font-weight: bold;
                font-family: 'Roboto','sans-serif'; 
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
                width:900px;
                font-family: 'Roboto','sans-serif'; 
           }


           .title {
                display:flex; 
                width: 100%;
                justify-content: start;
                align-items:center;
                margin-top:10px;
                font-weight: bold;
                font-size:30px;
                text-align: start;
                font-family: 'Roboto','sans-serif'; 
           }
           
           .desc {
                display:flex; 
                width: 100%;
                justify-content: start;
                align-items:center;
                margin-top:20px;
                font-family: 'Roboto','sans-serif'; 
                font-size:21px;
                font-family: 'Roboto','sans-serif'; 
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
                margin-top: 40px;
                flex-direction: column;
                border-top: 1px solid #0c54a0;
                padding: 2px;
                padding-top: 10px;
           }

           .inputTitle {
                display:flex;
                width: 900px;
                justify-content: start;
                align-items:center;
                padding-left:10px;
                flex-direction: row;
                font-size: 20px;
                font-family: 'Roboto','sans-serif'; 
           }
           

           .inputTitleMini {
                display:flex;
                width: 100%;
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
                border: 2px solid #005baa; 
                padding: 12px 12px;
                outline:none;
                margin-top: 10px;
                background-color: white;
           }

            select {
                width: 100%;
                height: 40px;
                font-size: 18px; 
                font-family: 'Roboto','sans-serif'; 
                border:2px solid #005baa; 
                margin-top: 10px;
                background-color: white;
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
                align-items: center;
                gap:8px;
                cursor: pointer;
           }

           .btn_show{
                background-color: #fdb913;
                color:black;
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