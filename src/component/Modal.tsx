
// import styles from "./Menu.module.css";
import { Snackbar, Stack } from '@mui/material';
import Alert from '@mui/material/Alert';
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Dispatch, SetStateAction, useRef } from "react";
import { IMaskInput } from "react-imask";

type ModelProps = {
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>
}

export function Modal({ showModal, setShowModal }: ModelProps) {
    const [closeStarting, setCloseStarting] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        let tid
        if (alert) {
            tid = setTimeout(() => {
                setAlert(false)
            }, 2000)
        }
        return () => {
            if (tid) clearTimeout(tid)
        }
    }, [alert])

    function closeModal() {
        setCloseStarting(true)
        setTimeout(() => {
            setShowModal(false)
            setCloseStarting(false)
        }, 500)
    }

    async function sendmail(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const res = await fetch('/api/sendmailClient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phone })
        })
        if (res.ok) {

            const result = await res.json()
            console.log(result);

        }
    }
    const backgroundEl = useRef(null)
    const className = [
        'modalBackground',
        showModal ? 'modalBackground_show' : '',
        closeStarting ? 'modalBackground_close-starting' : '',
    ]
    
    return <>
        <div className={className.join(' ')} style={{ color: 'red' }} id="modalBackground" ref={backgroundEl} onClick={(event) => {
            if (event.target === backgroundEl.current) closeModal()
        }}>
            <div className="modalWindow" id="modalWindow">
                <div className="mb-2"><span id="modalTitle">Заказать звонок</span></div>
                <div className="modalEl">
                    <form id="submit-form" onSubmit={sendmail}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label"></label>
                            <input type="text"
                                className="name"
                                id="name"
                                name="name"
                                placeholder="Имя"
                                required
                                value={name}
                                onChange={event => setName(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label"></label>
                            <IMaskInput
                                style={{ fontSize: '18px', height: '35px' }}
                                id="inputP"
                                className="phone"
                                mask={'+{7}(000)000-00-00'}
                                placeholder="+7(***)-***-**-**"
                                required
                                value={phone}
                                name="phone"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)}

                            />
                        </div>
                        <div className="mb-3">
                            <button className="btn-modal" type="submit" onClick={() => setAlert(true)}>Отправить &#10095;</button>
                        </div>


                    </form>
                </div>
                <div className="modalEl">
                    <button className="btn-modal" id="close-modal" onClick={() => { closeModal() }}>Закрыть</button>
                </div>
                {/* {alert &&
                    <Stack sx={{ position: 'absolute', bottom: 10, left: 10, right: 10, zIndex: 10000 }} spacing={2}>
                        <Alert severity="success">success</Alert>
                    </Stack>
                } */}
            </div>
            <Snackbar open={alert} autoHideDuration={6000} onClose={() => setAlert(false)}>
                <Alert onClose={() => setAlert(false)} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
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

            .disable-scroll {
                overflow: hidden;
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

            .modalWindow {
                display: flex;
                justify-content: center;
                height: 500px;
                width: 500px;
                align-items: center;
                background-color: rgba(34 36 37 / 59%);
                flex-direction: column;
                border-radius: 3px;
                box-shadow: 0px 3px 11px 3px #000000bd;
                color: #ffffff;
                border: solid;
                position: relative;
            }

            .modalEl {
                display: flex;
                justify-content: center;
                flex-direction: column;
            }

            .mb-3 {
                display: flex;
                justify-content: center;
                flex-direction: row;
                margin-top:30px;
            }

            input {
                font-size: 18px;
                height: 35px;
            }
          

            .btn-modal {
                font-family: 'TacticSans-Reg','sans-serif';
                border-radius: 3px;
                border:solid;
                border-width: 1px;
                border-color:black;
                transition: transform.3s ;
                color: black;
                font-size: 18px;
                background-color: white;
                width: 180px;
                height: 40px;
                font-weight: 400;
                margin-top:20px;
                font-weight: bold;
            }

            .btn-modal:hover {
                background-color: #df6047b0;
                border-width: 1px;
                font-family: 'TacticSans-Reg','sans-serif';
                border-radius: 3px;
                color:#e0dede;
                transform: scale(1.02) translateY(-7px);

            }

            #modalTitle {
                color: white;
                font-size:30px;
                font-family: 'TacticSans-Reg','sans-serif';;
                font-weight: bold;
                width: 100%;
                display: inline-block;
                text-align: center;
            }
            @media (max-width: 1000px) {
                .modalWindow{
                height: 360px;
                width: 400px;
                }
                #modalTitle {
                    font-size:25px;
                }
                .btn-modal {
                font-family: 'TacticSans-Reg','sans-serif';
                border-radius: 3px;
                border:solid;
                border-width: 1px;
                border-color:black;
                transition: transform.3s ;
                color: black;
                font-size: 15px;
                background-color: white;
                width: 150px;
                height: 35px;
                font-weight: 400;
                margin-top:20px;
                font-weight: bold;
            }

            .btn-modal:hover {
                border-width: 1px;
                font-family: 'TacticSans-Reg','sans-serif';
                border-radius: 3px;
                color:black;
                transform: scale(1.02) translateY(-7px);

            }
            input {
                font-size: 16px;
                height: 35px;
                width:200px;
            }
            :global(.phone) {
                width:200px;
                font-size: 16px;
                height: 35px;
            }
        }
        @media (max-width: 600px) {
                .modalWindow{
                height: 300px;
                width: 350px;
                }
                #modalTitle {
                    font-size:20px;
                }
                .btn-modal {
                font-family: 'TacticSans-Reg','sans-serif';
                border-radius: 3px;
                border:solid;
                border-width: 1px;
                border-color:black;
                transition: transform.3s ;
                color: black;
                font-size: 12px;
                background-color: white;
                width: 120px;
                height: 30px;
                font-weight: 400;
                margin-top:10px;
                font-weight: bold;
            }

            .btn-modal:hover {
                border-width: 1px;
                font-family: 'TacticSans-Reg','sans-serif';
                border-radius: 3px;
                color:black;
                transform: scale(1.02) translateY(-7px);

            }
            input {
                font-size: 14px;
                height:30px;
                width:150px;
            }
            :global(.phone) {
                font-size: 14px;
                height:20px;
                width:160px;
            }
        }
        @media (max-width: 400px) {
                .modalWindow{
                    height: 270px;
                    width: 220px;
                }               
                .mb-3 {
                   margin-top:20px;
                }
                .btn-modal {
                    font-size: 10px;
                    background-color: white;
                    width: 100px;
                    height: 25px;
                }
                #modalTitle {
                    font-size:15px;
                }
        }
      `}
        </style>
    </>
}
