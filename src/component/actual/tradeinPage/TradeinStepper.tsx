
import { ChangeEvent, FormEvent, MutableRefObject, useState } from "react";
import { Dispatch, SetStateAction, useRef } from "react";
import IMask from 'imask';
import { IMaskInput } from "react-imask";
import { TextField } from "@mui/material";
import { withTheme } from "@emotion/react";

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


    return <>
        <div className="modalBackground"  ref={refs.refForm}>
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
                                        border:'solid 2px #005baa',
                                        padding: '10px 10px'
                                    }}
                                    className="phone"
                                    mask={'+{7}(000)000-00-00'}
                                    placeholder="+7 ___ ___ __ __"
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
                                    min="1990" max="2030"
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
                    <button className="btn" onClick={() => { nextPage > 0 ? setNextPage(nextPage - 1) : setNextPage(nextPage) }}>Назад</button>
                    <button className="btn" onClick={nextQuestion}>Далее</button>
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
                background:#fdb913;
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
                background-color: #f8f8f8e3;
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
                border:solid 2px #005baa;
            }

            .btn-modal {
                font-family:'TacticSans-Reg','sans-serif';
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
                font-family:'TacticSans-Reg','sans-serif';
                border-radius: 3px;
                transition: transform.3s ;
                color: white;
                font-size: 18px;
                background-color: #005baa;
                width: 200px;
                height: 40px;
                font-weight: 400;
                margin-top:20px;
                font-weight: bold;
                border:none;
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
                color: #005baa;;
                font-size:30px;
                font-family: 'TacticSans-Reg','sans-serif';
                font-weight: bold;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 10px;
                text-align: center;
            }

            #modalMiniTitle {
                color: black;
                font-size:20px;
                font-family: 'TacticSans-Reg','sans-serif';
                font-weight: bold;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 15px;
            }

        @media(max-width: 700px) {
          #modalTitle {
           font-size:23px;
          }
          .mb-2 {
            font-size:23px; 
          }
          .btn-modal {
            width: 100px;
            height: 30px;
            font-size: 15px;
          }
          .btn-modal:hover {
            font-size: 16px;
          }
          input {
                font-size: 15px;
                height: 35px;
          }
          .modalWindow {
            height: 460px;
            width: 300px;
          }
        }
        @media(max-width: 350px) {
          #modalTitle {
           font-size:18px;
          }
          .mb-2 {
            font-size:18px; 
          }
          .btn-modal {
            width: 100px;
            height: 23px;
            font-size: 15px;
          }
          .btn-modal:hover {
            font-size: 16px;
          }
          input {
                font-size: 13px;
                height: 20px;
          }
          .modalWindow {
            height: 370px;
            width: 230px;
          }
        }
      `}
        </style>
    </>
}

