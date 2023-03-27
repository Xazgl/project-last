
import { ChangeEvent, FormEvent, MutableRefObject, useEffect, useState } from "react";
import { Dispatch, SetStateAction, useRef } from "react";
import IMask from 'imask';
import { IMaskInput } from "react-imask";
import { Box, TextField } from "@mui/material";
import { withTheme } from "@emotion/react";
import LastPageIcon from '@mui/icons-material/LastPage';
import FirstPageIcon from '@mui/icons-material/FirstPage';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

//let phoneMask = document.getElementsByClassName('phone');
// let maskOptions = {
//     mask:'+{7}(000)000-00-00',
//}
//let mask = new IMask(phoneMask, maskOptions)


type MuneProps = {
    refs: {
        refForm: MutableRefObject<HTMLDivElement>,
    }
}



export function TradeinStepper({ refs }: MuneProps) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [carModal, setCarModal] = useState('')
    const [carYear, setCarYear] = useState('')
    const [nextPage, setNextPage] = useState(0)
    const [prevPage, setPrevPage] = useState(nextPage)


    const [activeStep, setActiveStep] = useState(0);



    //@ts-ignore
    function nextQuestion() {
        if (nextPage < 4) {
            setNextPage(nextPage + 1)
            //this.setNextPage({nextPage:this.state.nextPage+1})
            console.log(nextPage)
        } if (nextPage === 4) {
            setNextPage(nextPage + 0)
            console.log(nextPage)
        }
    }


    function prevQuestion() {
        if (nextPage < 0) {
            setNextPage(nextPage - 1)
            //  setPrevPage(prevPage-1)
            //   this.setNextPage({nextPage:this.state.nextPage-1})
            console.log(nextPage)
        } if (nextPage === 0) {
            setNextPage(nextPage - 0)
            //   setPrevPage(prevPage+0)
            // this.setNextPage({nextPage:this.state.nextPage+0})
            console.log(nextPage)
        }
    }


    async function sendmailTradein(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const res = await fetch('/api/sendmailTradein', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phone, carModal, carYear })
        })
        if (res.ok) {
            const result = await res.json()
            console.log(result);
        }
    }


    const [data, setData] = useState(new Date())




    const steps = [
        {
            label: 'Введите ваше имя',
            description:
                <TextField id="outlined-basic" label="Алексей"
                    variant="outlined"
                    required
                    value={name}
                    onChange={event => setName(event.target.value)}
                />

        },
        {
            label: 'Введите ваше телефон',
            description:
                <IMaskInput
                    style={{
                        fontSize: '18px',
                        height: '1.4375',
                        marginTop: '40px',
                        border: 'solid 1px rgba(0, 0, 0, 0.23)',
                        padding: '16.5px 14px',
                        borderRadius: '5px',
                        fontFamily: 'Roboto'

                    }}
                    className="phone"
                    mask={'+{7}(000)000-00-00'}
                    placeholder="+7___ ___ __ __"
                    required
                    value={phone}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)}
                />
        },
        {
            label: 'Год выпуска вашего авто',
            description:
                <TextField id="outlined-basic" label="2007"
                    variant="outlined"
                    required
                    value={carYear}
                    onChange={event => setCarYear(event.target.value)}
                />
        },
        {
            label: 'Модель вашего авто',
            description:
                <TextField id="outlined-basic" label="KIA RIO"
                    variant="outlined"
                    required
                    value={carModal}
                    onChange={event => setCarModal(event.target.value)}
                />
        },
    ];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return <>
        <div className="modalBackground" ref={refs.refForm}>
            <div className="modalWindow" id="modalWindow">
                <div className="mb-2"><span id="modalTitle"></span></div>
                <div className="modalEl">
                    <form id="submit-form" onSubmit={sendmailTradein}>
                        {nextPage === 0 &&
                            <div className="question">
                                <span id="modalTitle">Оцените авто</span>
                                <span id="modalMiniTitle">Введите ваше имя</span>
                                <label htmlFor="name" className="form-label"></label>
                                <input type="text"
                                    className="name"
                                    id="name"
                                    name="name"
                                    placeholder="Алексей"
                                    required
                                    value={name}
                                    onChange={event => setName(event.target.value)} />
                            </div>
                        }
                        {/* {name !== '' && nextPage=== 1 && */}
                        {nextPage === 1 &&
                            <div className="question">
                                <span id="modalTitle">Оцените авто</span>
                                <span id="modalMiniTitle">Введите ваше телефон</span>
                                <IMaskInput
                                    style={{
                                        fontSize: '18px',
                                        height: '45px',
                                        marginTop: '40px',
                                        width: '100%',
                                        border: 'solid 1px #d4d3d3',
                                        padding: '10px 10px',
                                        fontFamily: 'Roboto'

                                    }}
                                    className="phone"
                                    mask={'+{7}(000)000-00-00'}
                                    placeholder="+7___ ___ __ __"
                                    required
                                    value={phone}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)}
                                />
                            </div>
                        }
                        {/* {phone.length >= 12 && nextPage=== 2 && */}
                        {nextPage === 2 &&
                            <div className="question">
                                <span id="modalTitle">Оцените авто</span>
                                <span id="modalMiniTitle">Год выпуска вашего авто</span>
                                <label htmlFor="carYear" className="form-label"></label>
                                <input type="number"
                                    placeholder="2007"
                                    min="2000" max={data.getUTCFullYear()}
                                    value={carYear}
                                    onChange={event => setCarYear(event.target.value)} />
                            </div>
                        }
                        {/* {carYear!== '' && nextPage=== 3 && */}
                        {nextPage === 3 &&
                            <div className="question">
                                <span id="modalTitle">Оцените авто</span>
                                <span id="modalMiniTitle">Модель вашего авто</span>
                                <label htmlFor="carModal" className="form-label"></label>
                                <input type="text" className="carModal" id="carModal" name="carModal"
                                    placeholder="KIA RIO"
                                    required
                                    value={carModal}
                                    onChange={event => setCarModal(event.target.value)} />
                            </div>
                        }

                        {/* {carModal!== '' && nextPage=== 4 && */}
                        {nextPage === 4 &&
                            <div className="question">
                                <span id="modalTitle">Оцените авто</span>
                                <span id="modalMiniTitle">Заявка заполнена</span>
                                <button className="btn-modal" type="submit">Отправить</button>
                            </div>
                        }
                    </form>
                </div>
                <div className="twoBtn">
                    <button className="btn" onClick={() => { nextPage > 0 ? setNextPage(nextPage - 1) : setNextPage(nextPage) }}> <FirstPageIcon />Назад</button>
                    <button className="btn" onClick={nextQuestion}> Далее  <LastPageIcon /> </button>
                </div>
                {nextPage === 0 &&
                    <div className="line">
                        <div className="block"></div>
                    </div>
                }
                {nextPage === 1 &&
                    <div className="line">
                        <div className="block"></div>
                        <div className="block"></div>
                    </div>
                }
                {nextPage === 2 &&
                    <div className="line">
                        <div className="block"></div>
                        <div className="block"></div>
                        <div className="block"></div>
                    </div>
                }
                {nextPage === 3 &&
                    <div className="line">
                        <div className="block"></div>
                        <div className="block"></div>
                        <div className="block"></div>
                        <div className="block"></div>
                    </div>
                }
                {nextPage === 4 &&
                    <div className="line">
                        <div className="block"></div>
                        <div className="block"></div>
                        <div className="block"></div>
                        <div className="block"></div>
                        <div className="block"></div>
                    </div>
                }
            </div>


            <div className="mobileStepper"  ref={refs.refForm}>
                <h1>Оцените авто</h1>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                                optional={
                                    index === 4 ? (
                                        <Typography variant="caption">Последний шаг</Typography>
                                    ) : null
                                }
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <Typography>{step.description}</Typography>
                                <Box sx={{ mb: 2,padding:'0' }}>
                                    <div>
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Перейти к отправке' : 'Далее'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Назад
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography sx={{color:'#bbb8b89c'}}>Вы прошли все шаги</Typography>
                        <form onSubmit={sendmailTradein}>
                            <Button type="submit" sx={{ mt: 1, mr: 1, width:"200px"  }}  variant="contained" endIcon={<SendIcon />}>
                                Отправить
                            </Button>
                        </form>
                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1, width:"200px" }}  variant="contained" startIcon={<DeleteIcon />}  >
                            Сбросить
                        </Button>
                    </Paper>
                )}
            </div>
        </div>

        <style jsx>{`

            @keyframes modalBackground-open {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }

            @keyframes modalBackground-close {
                from {
                    opacity: 1;
                }
                to {
                    opacity: 0;
                }
            }

            
            .line{
                display:flex;
                align-items:center;
                width:700;
                margin-top:30px;
                background:#005baa3a;
                width: 700px;
                height: 7px;
                transition: 0.3s;
            }

            .block {
                display:flex;
                align-items:center;
                width:140px;
                height: 7px;
                background:#005baa;
                
            }

            .disable-scroll {
                overflow: hidden;
            }

             .question {
                display:flex;
                flex-direction:column;
                justify-content:center;
                width:350px;
            }

            .modalBackground
            {
                display: flex;
                justify-content: center;
                top: 0;
                right: 0;
                left: 0;
                height: 100%;
                align-items: center;
                width: 100%;
                margin-top:50px;
            }

            
            .twoBtn {
                display: flex;
                justify-content: space-between;
                align-items:center;
                margin-top: 100px;
                width: 700px;
            }

            .modalWindow {
                display: flex;
                justify-content: center;
                height: 500px;
                width: 900px;
                align-items: center;
                background-color: #000000cf;
                flex-direction: column;
            }
           
            .modalEl {
                display: flex;
                justify-content: center;
                flex-direction: column;
            }

            .mb-3 {
                display: flex;
                justify-content: center;
                flex-direction: column;
                margin-top: 30px;
                align-items: center;
            }

            input {
                font-size: 18px;
                height: 45px;
                width: 100%;
                padding: 10px 10px;
                border: 1px solid #d4d3d3;
                font-family: 'Roboto','sans-serif'; 

            }

            .btn-modal {
                font-family: 'Roboto','sans-serif'; 
                border-radius: 3px;
                border:none;
                transition: transform.3s ;
                color: white;
                background-color: #005baa;
                font-size: 18px;
                width:100%;
                height: 45px;
                font-weight: 400;
                font-weight: bold;
                margin-top: 40px;
                cursor: pointer;
            }

            .btn-modal:hover {
                background-color:black;
                color:white;
            }

            #close-modal {
                width: 80px;
                height: 30px; 
            }

            input {
                margin-top: 40px; 
            }

            .btn {
                font-family: 'Roboto','sans-serif'; 
                border-radius: 3px;
                transition: transform.3s ;
                color: white;
                font-size: 18px;
                background-color: #005baa;
                width: 140px;
                height: 40px;
                font-weight: 400;
                margin-top:20px;
                font-weight: bold;
                border:none;
                display: flex;
                align-items: center;
                text-align: center;
                justify-content: center;
                gap:5px;
                cursor: pointer;
            }

            .btn:hover {
                background-color: black;
                border-width: 1px;
                border: none;
                font-family:'TacticSans-Reg','sans-serif';
                border-radius: 3px;
            }

            .closeBtn {
                display:flex;
                justify-content:end;
                align-items:center;
                width: 700px;
            }
            
            #modalTitle {
                color: white;
                font-size:30px;
                font-family: 'Roboto','sans-serif'; 
                font-weight: bold;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 10px;
                text-align: center;
            }

            #modalMiniTitle {
                color: white;
                font-size:20px;
                font-family: 'Roboto','sans-serif'; 
                font-weight: bold;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 15px;
            }


            .mobileStepper {
                height: auto;
                width: 100%;
                display: none;
                justify-content: center;
                flex-direction: column;
                padding: 20px;
            }

        @media(max-width: 900px) {
          .modalWindow {
            width: 600px;
            height: 450px;
          }

          .line{
            width: 90%;
          }

          .twoBtn {
            width: 90%;
          }

          .btn {
            font-size: 16px;
            width: 110px;
          }

          #modalTitle {
            margin-top:0px;
          }
        }

        @media(max-width: 620px) {
          .modalWindow {
            width: 500px;
            height: 400px;
          }

          .question {
            height: 100px;
            gap: 5px;
          }
          input {
            margin-top:10px;
          }
        }

        @media(max-width: 540px) {
            .modalWindow {
                display: none;
            }

            .mobileStepper {
                display: flex;
            }
        }
      `}
        </style>
    </>
}

