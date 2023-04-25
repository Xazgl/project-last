
import { Dispatch, SetStateAction } from "react";

type MuneProps = {
    setCarPrice: Dispatch<SetStateAction<string>>,
    carPrice: string,
    setShowModalPrice: Dispatch<SetStateAction<boolean>>
}



export function CarSale({ setCarPrice, carPrice, setShowModalPrice }: MuneProps) {

    function showModalPrice(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModalPrice(true)
    }

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }


      
    return (
        <>
            <div className="background">
                <div className="card">
                    <div className="titleCard">Знаете, сколько стоит ваш автомобиль?</div>
                    <div className="row">
                        <div className="rowEl" >
                            <input type="number"
                                name="name"
                                placeholder="Оценка вашего авто,₽"
                                required
                                max={20000000} //TODO ценам ограничения и валдация, ен работает  numberWithSpaces
                                value={carPrice} 
                                onChange={event => setCarPrice(event.target.value)} />
                            <h6>Мы подберем удобный вариант продажи вашего автомобиля</h6>
                        </div>
                        {carPrice > '' &&
                            <div className="rowEl" >
                                <form onSubmit={showModalPrice}  style={{width:'100%',height:'100%'}}>
                                    <button className="btn" type="submit">Продать автомобиль</button>
                                </form>
                            </div>
                        }

                        {carPrice <= '' &&
                            <div className="rowEl"  id="btnDiv">
                                <button className="btn" disabled>Продать автомобиль</button>
                            </div>
                        }


                    </div>
                    {/* <div className="miniCard">Мы подберем удобный вариант продажи вашего автомобиля</div> */}
                </div>
            </div>

            <style jsx>{`

                .background {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 500px;
                }

                .card{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 600px;     
                    flex-direction: column;          
                }

                h6 {
                    color:#a3a8aa;
                    font-family: 'Roboto','sans-serif'; 

                }

                .row {
                    display: flex;
                    flex-direction: row;
                    gap:10px;
                    width: 100%;
                    justify-content: center;
                    margin-top:20px;
                    height: 60px;
                    font-family: 'Roboto','sans-serif'; 

                }
                
                .titleCard{
                    display: flex;
                    justify-content: start;
                    align-items: flex-start;
                    font-size: 30px;
                    margin-top:20px;
                    width: 100%;
                    font-family: 'Roboto','sans-serif'; 

                }

                .miniCard{
                    display: flex;
                    justify-content: start;
                    font-size: 18px;
                    margin-top:20px;
                }

                input {
                    width: 400px;
                    height:100%;
                    padding: 12px 12px;
                    font-size: 21px;
                    font-family: 'Roboto','sans-serif'; 

                }

                .btn {
                    width: 300px;
                    height: 100%;
                    background-color:  #005baa;
                    color:white;
                    border:none;
                    font-size: 16px;
                    cursor: pointer;
                    font-family: 'Roboto','sans-serif'; 

                }


                .btn:disabled {
                    width: 300px;
                    height: 100%;
                    color: #d4d3d3;
                    border: 1px solid #d4d3d3;
                    background-color: transparent;
                    font-size: 16px;
                }

                .btn:hover {
                    background-color: black;
                }

                .btn:disabled:hover {
                    background-color: transparent
                }


                @media(max-width: 800px) {
                    .row { 
                        flex-direction: column;
                        height: auto;
                    }

                    button {
                        height: 50px;
                        width: 400px;
                    }

                    .card {
                        padding: 35px;
                        width: 100%;
                    }

                    .btnDiv{
                        height: 45px;
                    }

                  
                }

                @media(max-width: 500px) {

                    .titleCard{
                        text-align: center;
                        font-size: 25px;
                    }

                    .row { 
                        flex-direction: column;
                        height: auto;
                    }

                    button {
                        height: 45px;
                        width: 300px;
                    }

                    input {
                      height: 45px;
                      width: 300px;
                    }

                    .card {
                        padding: 35px;
                        width: 100%;
                    }
                }

                @media(max-width: 360px) {
                    .background{
                        height: auto;
                    }

                    .card {
                        padding:15px;
                    }

                    button {
                        height: 45px;
                        width: 250px;
                        font-size: 16px;
                    }

                    input {
                      height: 45px;
                      width: 250px;
                      font-size: 16px;
                    }

                    .titleCard{
                        font-size: 22px;
                        font-weight: bold;
                    }
                }

                @media(max-width: 280px) {
                    .card {
                        padding:15px;
                    }

                    button {
                        height: 40px;
                        width: 200px;
                        font-size: 14px;
                    }

                    input {
                      height: 40px;
                      width: 200px;
                      font-size: 14px;
                    }

                    .titleCard{
                        font-size: 18px;
                    }

                }


                
            `}</style>
        </>
    )
}