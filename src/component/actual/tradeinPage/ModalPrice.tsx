
// import styles from "./Menu.module.css";
import { Snackbar, Stack } from '@mui/material';
import Alert from '@mui/material/Alert';
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Dispatch, SetStateAction, useRef } from "react";
import { IMaskInput } from "react-imask";
import CloseIcon from '@mui/icons-material/Close';

type ModelPropsPrice = {
    showModalPrice: boolean,
    setShowModalPrice: Dispatch<SetStateAction<boolean>>,
    carPrice: string
}

export function ModalPrice({ showModalPrice, setShowModalPrice, carPrice }: ModelPropsPrice) {
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
            setShowModalPrice(false)
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
        showModalPrice ? 'modalBackground_show' : '',
        closeStarting ? 'modalBackground_close-starting' : '',
    ]


    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }


    return <>
        <div className={className.join(' ')} style={{ color: 'black' }} id="modalBackground" ref={backgroundEl} onClick={(event) => {
            if (event.target === backgroundEl.current) closeModal()
        }}>
            <div className="modalWindow" id="modalWindow">
                <div className='icon'>
                    <CloseIcon sx={{
                        cursor: 'pointer',
                        '&:hover': { color: 'black' }
                    }}
                        onClick={() => { closeModal() }}
                    />
                </div>
                <div className="mb-2"><span id="modalTitle">Получить консультацию</span></div>
                <div className="modalEl">
                    <div className="mb-3">
                        <h3>Желаемая сумма: {numberWithSpaces(Math.round(Number(carPrice)))} ₽</h3>
                    </div>
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
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label"></label>
                            <IMaskInput
                                style={{ fontSize: '20px', height: '100%', padding: '10px 10px', width: '60%', }}
                                id="inputP"
                                className="phone"
                                mask={'+{7}(000)000-00-00'}
                                placeholder="+7(___) __ __ __"
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
                font-family: 'TacticSans-Reg','sans-serif';
            }

            .modalBackground_show {
                animation:modalBackground-open.5s ;
                display: flex;
            }

            .modalBackground_close-starting {
                animation:modalBackground-close.5s ;
            }

            .icon {
                display: flex;
                justify-content: end;
                width: 100%;
                height:30px;
                padding: 2px;
            }

            .modalWindow {
                display: flex;
                justify-content: start;
                height: 400px;
                width: 600px;
                align-items: center;
                background-color: rgba(34 36 37 / 59%);
                flex-direction: column;
                border-radius: 3px;
                box-shadow: 0px 3px 11px 3px #000000bd;
                color: #ffffff;
                border: none;
                position: relative;
            }

            .modalEl {
                display: flex;
                justify-content: center;
                flex-direction: column;
                width: 100%;
            }

            .mb-3 {
                display: flex;
                justify-content: center;
                flex-direction: row;
                margin-top:30px;
                width: 100%;
                height: 50px;
            }

            input {
                font-size: 20px;
                height: 50px;
                padding: 10px 10px;
                width: 60%;
            }
          

            .btn-modal {
                border-radius: 3px;
                border:solid;
                border-width: 1px;
                border-color:black;
                transition: transform.3s ;
                color: black;
                font-size: 20px;
                background-color: #131313;
                color:white;
                width: 60%;
                height: 45px;
                font-weight: 400;
                margin-top:20px;
                font-weight: bold;
                text-align: center;
                align-items: center;
            }

            .btn-modal:hover {
                background-color:#0c8bfa;
            }

            #modalTitle {
                color: white;
                font-size:30px;
                font-weight: bold;
                width: 100%;
                display: inline-block;
                text-align: center;
            }
        
        @media (max-width: 640px) {
                .modalWindow{
                    height: 350px;
                    width: 440px;
                }
        }
        @media (max-width: 540px) {
                :global(.phone) {
                  height: 25px;
                }
                input {
                    height:100%;
                }
                .mb-3 {
                    height: 35px;
                }
                #modalTitle {
                    font-size:25px;
                }
        }

        @media (max-width: 340px) {
                :global(.phone) {
                    width: 80%;
                }

                input {
                    width: 80%;
                }

                .mb-3 {
                    height: 35px;
                }

                #modalTitle {
                    font-size:25px;
                }

                .btn-modal{
                    font-size:16px;
                    width: 80%;
                    height: 35px;
                }

                #modalTitle {
                    font-size:20px;
                }

                .modalWindow{
                    height: 300px;
                    width: 100%;
                }
                
            }

    `}</style>
    </>
}
