import styled from "@emotion/styled"
import { ChangeEvent, FormEvent, useState } from "react"
import { IMaskInput } from "react-imask"


export function SaleBlock({ description, title }) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [vin, setVin] = useState('')
    const [comment, setComment] = useState('')

    async function sendmail(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const res = await fetch('/api/sendmailSale', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phone, vin, comment, title })
        })
        if (res.ok) {
            const result = await res.json()
            console.log(result);

        }
    }


    const imaskStyle = styled.input`
    fontSize: 18px;
    height: 35px;
    width: 100%;
    backgroundColor: rgb(231,231,231);
    border: none;
    paddingLeft: 13px;
    fontFamily: TacticSans-Reg;

    &::placeholder {
     fontFamily: TacticSans-Reg;
     color:black;
    };
    `

    return (
        <>
            <div className="background">
                <div className="cardDiv">
                    <div className="title">АКЦИЯ</div>
                    <div className="saleCard">
                        <div className="titleCard">{title}</div>
                        <div className="miniTitleCard">{description}</div>
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
                                        style={{
                                            fontSize: '18px',
                                            height: '35px',
                                            width: '100%',
                                            backgroundColor: 'rgb(231,231,231)',
                                            border: 'none',
                                            paddingLeft: '13px',
                                            fontFamily: 'Roboto'

                                            //   `&:placeholder`{
                                            //     color:'black'
                                            //   }
                                        }}


                                        id="inputP"
                                        className="phone"
                                        mask={'+{7}(000)000-00-00'}
                                        placeholder="Номер телефона"
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
                                    <textarea
                                        name="comment"
                                        placeholder="Комментарий для специалиста"
                                        required
                                        style={{ resize: 'none' }}
                                        value={comment}
                                        onChange={event => setComment(event.target.value)}
                                        maxLength={300}
                                    ></textarea>
                                </div>

                                <div className="divForm" id="btnDiv">
                                    <button className="btn">ОТПРАВИТЬ   &#10095;</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                <style jsx>{`

                .background {
                    display: flex;
                    justify-content: center;
                    align-items: baseline;
                    width: 100%;
                    height: 900px;
                    background-color: #2e2e2e;
                    font-family: 'TacticSans-Reg', 'sans-serif';
                    flex-direction: row;
                }

                .cardDiv {
                    display: flex;
                    width: 500px;
                    height:500px;
                    flex-direction: column;
                    align-items: center; 
                    margin-top:100px;
                }

                .title {
                    display:flex;
                    justify-content: center;
                    align-items: baseline;
                    width:100%;
                    font-size:30px;
                    color:white;
                }

                .saleCard {
                    display:flex;
                    width: 100%;
                    background-color: white;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: baseline;
                    padding:30px;
                    color:black;
                    margin-top:20px;
                }

                .titleCard {
                    display:flex;
                    justify-content: flex-start;
                    align-items: baseline;
                    width:100%;
                    font-size:25px;
                    font-weight:bold;
                    flex-direction: row;
                }

                .miniTitleCar{
                    display:flex;
                    justify-content: flex-start;
                    align-items: baseline;
                    width:100%;
                    font-size:20px;
                    flex-direction:row; 
                }

                .divForm {
                    display:flex;
                    flex-direction: row;
                    width: 440px;
                    height: 55px;
                    justify-content: start;
                    align-items:center;
                    margin-top:10px;
                }
                  
                #btnDiv {
                    margin-top:20px;
                }

                
                .btn {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    align-items:center;
                    flex-direction:row;
                    transition: transform.3s;
                    width: 160px;
                    height: 35px;
                    background: transparent;
                    border: 1px black solid;
                    font-family: 'TacticSans-Reg', 'sans-serif';
                    color:black;
                    font-size:16px;
                    text-align: center;
                    margin-top:25px;
                  
                }

                .btn:hover {
                    background:rgba(0, 0, 0, 0.535);
                }

                input {
                    width: 100%;
                    height: 40px;
                    font-size: 16px; 
                    font-family: 'TacticSans-Reg','sans-serif'; 
                    background-color:rgb(231,231,231);
                    border:none;
                    padding-left: 13px;
                }

                input::-webkit-input-placeholder {
                     font-family: 'TacticSans-Reg','sans-serif';
                     color:black;
                }

                input::-webkit-input-placeholder {
                     font-family: 'TacticSans-Reg','sans-serif';
                     color:black;
                }

                input::-moz-placeholder {
                     font-family: 'TacticSans-Reg','sans-serif';
                     color:black;
                }

               

                textarea::placeholder {
                     font-family: 'TacticSans-Reg','sans-serif';
                     color:black;
                }


                textarea {
                    width: 500px;
                    height: 64px;
                    font-size: 16px; 
                    padding-left: 13px;
                    margin-top:25px;
                    font-family: 'TacticSans-Reg','sans-serif'; 
                    background-color:rgb(231,231,231);
                    border:none;
                    padding-top: 5px;
                }

                @media(max-width: 510px) {
                    .cardDiv{
                     width:100%;
                    }
                    .divForm{
                        width:400px;
                    }
                    .btn {
                        width:100%;
                        height:43px;
                    }
                }
                @media(max-width: 420px) {
                
                    .divForm{
                        width:350px;
                    }
                    
                }

                @media(max-width: 350px) {
                 .divForm{
                    width:300px;
                  }
                }

                @media(max-width: 320px) {    
                 .divForm{
                    width:250px;
                  }
                }
                
            
            `}
                </style>

            </div>
        </>
    )
}

export default SaleBlock