
import { IMaskInput } from "react-imask"
import { ChangeEvent, FormEvent, MutableRefObject, useEffect, useRef, useState } from "react";
import { Checkbox } from "@mui/material";
import MuiModal from "../modalAfterSubmit/MuiModal";
import banner from '/public/images/tradein/main2.png'


type MuneProps = {
    refs: {
        refForm: MutableRefObject<HTMLDivElement>,
    }
}



export function TradeForm({ refs }: MuneProps) {
    const [name, setName] = useState('')   //Имя клиента
    const [phone, setPhone] = useState('') //Телефон
    const [carModel, setCarModel] = useState('')//модель авто
    const [carYear, setCarYear] = useState<number>()//год авто
    const [checked, setChecked] = useState(false);
    const [disabledBtn, setDisabledBtn] = useState(true)
    const [data, setData] = useState(new Date())


    const formBtn = useRef(null)

    const [open, setOpen] = useState(false);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        if (checked === true && name > '' && phone > '' && carYear > 0 && carModel > '') {
            // formBtn.current.disable = false
            setDisabledBtn(false)
        } else {
            setDisabledBtn(true)
        }

    }, [checked, name, phone, carYear, carModel])

    const className = [
        'btn',
        disabledBtn === false ? 'btn_show' : '',
    ]


    async function sendmail(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (checked === true) {
            const res = await fetch('/api/sendmailTradein', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, phone, carModel, carYear })
            })
            if (res.ok) {
                const result = await res.json()
                setOpen(true)
                console.log(result)

            }
        }
    }



    return (
        <>
            <div className="background" ref={refs.refForm}>
                <div className="column">
                    <div className="title">
                        ОЦЕНИТЕ <br /> АВТОМОБИЛЬ
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
                                    onChange={event => setName(event.target.value)} />

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
                                <input type="number"
                                    placeholder="Год выпуска"
                                    min="2000" max={data.getUTCFullYear()}
                                    value={carYear}
                                    onChange={event => setCarYear(+event.target.value)}
                                />
                                <input type="text"
                                    className="name"
                                    id="name"
                                    name="carModel"
                                    placeholder="Модель вашего авто"
                                    required
                                    value={carModel}
                                    onChange={event => setCarModel(event.target.value)} />
                            </div>

                            <div className="divForm">
                                <MuiModal open={open} setOpen={setOpen} />
                                <button className={className.join(' ')} ref={formBtn}
                                    type="submit"
                                    disabled={disabledBtn}
                                >
                                    Оправить
                                </button>
                            </div>
                            <div className="divForm" id="formFooter" style={{ alignItems: "center", justifyContent: 'start' }}>

                                {/* <MuiModal open={open} setOpen={setOpen} />
                                <button className={className.join(' ')} ref={formBtn}
                                    type="submit"
                                    disabled={disabledBtn}
                                >
                                    Оправить
                                </button> */}
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
                height: 400px;
                margin-top:10px;
                justify-content: center;
                align-items:center;
                flex-direction: row;
                background-repeat:no-repeat;
                background-size:cover;
                background-blend-mode: darken;
                background: rgba(0, 0, 0, 0.304);
                background-position: center center;
                background-image: url('${banner.src}');
                background-repeat: no-repeat;
                background-size: cover;
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
                color:white;
            
           }
           
           .desc {
                display:flex; 
                width: 100%;
                justify-content: start;
                align-items:center;
                margin-top:20px;
                font-family: 'Roboto','sans-serif'; 
                font-size:18px;
                color:white;
           }

           .form {
                display:flex;
                width: 110%;
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
                   padding: 10px;
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