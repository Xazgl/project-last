
import { ChangeEvent, FormEvent, useState } from "react";
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

type ModelPropsTrade = {
    showTradeInModal: boolean,
    setShowTradeInModal: Dispatch<SetStateAction<boolean>>
}

export function TradeinModal({ showTradeInModal, setShowTradeInModal }: ModelPropsTrade) {
    const [closeStarting, setCloseStarting] = useState(false)
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


    //@ts-ignore

    function closeModal() {
        setCloseStarting(true)
        setTimeout(() => {
            setShowTradeInModal(false)
            setCloseStarting(false)
        }, 500)
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

    const backgroundEl = useRef(null)
    const className = [
        'modalBackground',
        showTradeInModal ? 'modalBackground_show' : '',
        closeStarting ? 'modalBackground_close-starting' : '',
    ]
    return <>
        <div className={className.join(' ')} style={{ color: 'red' }} id="modalBackground" ref={backgroundEl} onClick={(event) => {
            if (event.target === backgroundEl.current) closeModal()
        }}>
            <div className="modalWindow" id="modalWindow">

                <div className="mb-2"><span id="modalTitle"></span></div>
                <div className="modalEl">
                    <form id="submit-form" onSubmit={sendmailTradein}>
                        {nextPage === 0 &&

                            <div className="question">
                                <span id="modalTitle">ШАГ 1</span>
                                <span id="modalMiniTitle">Введите ваше имя</span>
                                <label htmlFor="name" className="form-label"></label>
                                <input type="text"
                                    className="name"
                                    id="name"
                                    name="name"
                                    placeholder="Алексей"
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

                        }
                        {/* {name !== '' && nextPage=== 1 && */}
                        {nextPage === 1 &&
                            <div className="question">
                                <span id="modalTitle">ШАГ 2</span>
                                <span id="modalMiniTitle">Введите ваше телефон</span>
                                <IMaskInput
                                    style={{ fontSize: '18px',
                                     height: '45px',
                                      marginTop: '40px',
                                      width: '100%',
                                      padding: '10px 10px',
                                      outline:'none',
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
                                <span id="modalTitle">ШАГ 3</span>
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
                                <span id="modalTitle">ШАГ 4</span>
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
                                <span id="modalTitle">ШАГ 5</span>
                                <span id="modalMiniTitle">Отправить заявку</span>
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


                <div className="closeBtn">
                    <button className="btn" id="close-modal" onClick={() => { closeModal() }}>Закрыть</button>
                </div>
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
                height: 3px;
            }

            .block {
                display:flex;
                align-items:center;
                width:140px;
                height: 3px;
                background: #131313;
                
            }

            .disable-scroll {
                overflow: hidden;
            }

             .question {
                display:flex;
                flex-direction:column;
                justify-content:center;
                width:300px;
            }

            .modalBackground
            {
                display: none;
                position: fixed;
                justify-content: center;
                top: 0;
                right: 0;
                left: 0;
                height: 100vh;
                background-color: rgb(0,0,0, 0.5);
                align-items: center;
            }

            .modalBackground_show {
                animation:modalBackground-open.5s ;
                display: flex;
            }

            .modalBackground_close-starting {
                animation:modalBackground-close.5s ;
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
                width: 800px;
                align-items: center;
                background-color: #f8f8f8e3;
                flex-direction: column;
                border-radius: 3px;
                box-shadow: 0px 3px 11px 3px #000000bd;
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
                outline:none;
            }

            .btn-modal {
                font-family:'TacticSans-Reg','sans-serif';
                border-radius: 3px;
                border:solid 2px  black;
                transition: transform.3s ;
                color: black;
                font-size: 18px;
                width:100%;
                height: 45px;
                font-weight: 400;
                font-weight: bold;
                margin-top: 40px;
            }

            .btn-modal:hover {
                background-color: #131313;
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
                color: #e1d9d9;
                font-size: 14px;
                background-color:  #131313;
                width: 120px;
                height: 30px;
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
                transform: scale(1.02)
            }

            
            .closeBtn {
                display:flex;
                justify-content:end;
                align-items:center;
                width: 700px;
            }
            
            #modalTitle {
                color: black;
                font-size:30px;
                font-family: 'TacticSans-Reg','sans-serif';
                font-weight: bold;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 10px;
            }

            #modalMiniTitle {
                color: black;
                font-size:20px;
                font-family: 'TacticSans-Reg','sans-serif';
                font-weight: bold;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 10px;
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

