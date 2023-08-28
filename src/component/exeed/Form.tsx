
import { IMaskInput } from "react-imask"
import { ChangeEvent, FormEvent, useState } from "react";
import banner from '/public/images/f.jpg'

export function Form() {


    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [vin, setVin] = useState('')
    const [numberSpareParts, setNumberSpareParts] = useState('')
    const [comment, setComment] = useState('')

    async function sendmail(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const res = await fetch('/api/sendmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phone, vin, numberSpareParts, comment })
        })
        if (res.ok) {
            const result = await res.json()
            console.log(result);

        }
    }

    return (
        <>
            <div className="background">
                <div className="column">
                    <div className="title">ЗАПЧАСТИ</div>
                    <div className="desc">Подберем оригинальные запчасти Chery по вашему запросу и бюджету</div>
                    <div className="desc">Оставьте заявку и наш специалист свяжется с вами в ближайщее время</div>
                    <div className="form">
                        <form id="submit-form" onSubmit={sendmail}>
                            <div className="divForm">
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
                            <div className="divForm">
                                <IMaskInput
                                    style={{ fontSize: '18px', height: '35px', width: '100%' }}
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
                            <div className="divForm">
                                <label htmlFor="name" className="form-label"></label>
                                <input type="text"
                                    className="name"
                                    id="name"
                                    name="vin"
                                    maxLength={17}
                                    placeholder="VIN"
                                    required
                                    value={vin}
                                    onChange={event => setVin(event.target.value)} />
                            </div>
                            <div className="divForm">
                                <label htmlFor="name" className="form-label"></label>
                                <input type="text"
                                    className="name"
                                    id="name"
                                    name="numberSpareParts"
                                    placeholder="Артикул запчасти"
                                    required
                                    value={numberSpareParts}
                                    onChange={event => setNumberSpareParts(event.target.value)} />
                            </div>
                            <div className="divForm">
                                <label htmlFor="name" className="form-label"></label>
                                <textarea
                                    name="comment"
                                    placeholder="Комментарий к заказу"
                                    required
                                    value={comment}
                                    onChange={event => setComment(event.target.value)}
                                    maxLength={300}
                                ></textarea>
                            </div>
                            <div className="divForm">
                                <button className="btn">ОТПРАВИТЬ   &#10095;</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <style jsx>{`
           .background {
                    display:flex; 
                    width: 100%;
                    height: 780px;
                    justify-content: center;
                    align-items:center;
                    flex-direction: column;
                    background: rgba(0, 0, 0, .50);
                    background-position: center center;
                    background-blend-mode: darken;
                    background: rgba(0, 0, 0, .50);
                    background-image: url('${banner.src}');
                    background-repeat:no-repeat;
                    background-size:cover;

           }

           .column {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: baseline;
            width:500px;
            font-family: 'TacticSans-Reg','sans-serif'; 
           }


           .title {
             display:flex; 
             width: 100%;
             justify-content: center;
             align-items:center;
             margin-top:10px;
             font-family: 'TacticSans-Reg','sans-serif'; 
             font-size:50px;
             color:white;
             text-align: center;
            
           }
           
           .desc {
             display:flex; 
             width: 100%;
             justify-content: start;
             align-items:center;
             margin-top:20px;
             font-family: 'TacticSans-Reg','sans-serif'; 
             font-size:21px;
             color:white;
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
            width: 500px;
            height: 55px;
            justify-content: start;
            align-items:center;
            margin-top:10px;
            flex-direction: row;
           }
           
           input {
            width: 100%;
            height: 40px;
            font-size: 18px; 
            font-family: 'TacticSans-Reg','sans-serif'; 
           }

           textarea {
            width: 500px;
            height: 100px;
            font-size: 16px; 
            margin-top:50px;
            font-family: 'TacticSans-Reg','sans-serif'; 
           }

           .btn {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    align-items:center;
                    flex-direction:row;
                    font-family: 'TacticSans-Reg','sans-serif';
                    transition: transform.3s;
                    width: 178px;
                    height: 40px;
                    background: transparent;
                    border: 2px solid;
                    color:white;
                    margin-top:114px;
                    font-size:16px;
                    text-align: center;
                    font-weight: bold;
           }
           .btn:hover {
             background:rgba(0, 0, 0, 0.535);
           }
           @media(max-width: 500px) {    
            .column {
                 width:100%;
                 font-size:16px;
                 text-align: center;
                 padding: 5px;
            } 
            .title {
                font-size:40px;
            }
            .divForm {
                justify-content: center;
                width:300px;
            }
            textarea {
                width:100%;
            }
            input {
                height: 45px;
            }
            .btn {
                width:100%;
                height:45px;
                font-size:21px;
            }

           }
          `}</style>
        </>
    )
}