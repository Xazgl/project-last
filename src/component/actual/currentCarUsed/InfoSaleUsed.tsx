import { Circle } from "@mui/icons-material";
import { Dispatch, SetStateAction } from "react";
import { Box, Button, Checkbox, CircularProgress, FormControlLabel, FormGroup, Typography } from "@mui/material";
import { CarUsedInclude } from "../../../../@types/dto";
// import { UsedCars } from "@prisma/client";

type Props = {
    car: CarUsedInclude,
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>,
    setCarImg: Dispatch<SetStateAction<string>>
}


export function InfoSaleUsed({ car, showModal, setShowModal, setCarImg }: Props) {

    function showModalImg(x) {
        setShowModal(true)
        setCarImg(x)
    }

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <>
            <div className="background">
                {car !== null ?
                    <>
                        <div className="backgroundBlock">
                            <div className="priceBlock">
                                <div className="priceHeader">
                                    ИЗ ЧЕГО СКЛАДЫВАЕТСЯ ЦЕНА?
                                </div>
                                <div className="salesBlock">
                                    <FormGroup ><h3>ДОСТУПНЫЕ ВЫГОДЫ</h3>
                                        <FormControlLabel control={<Checkbox defaultChecked />}
                                            label={<Typography sx={{ fontSize: { xl: '1rem', lg: '1rem', md: '1rem', sm: '1rem', xs: '15px' } }}>
                                                ПО TRADE-IN</Typography>} />
                                        <FormControlLabel control={<Checkbox defaultChecked />}
                                            label={<Typography sx={{ fontSize: { xl: '1rem', lg: '1rem', md: '1rem', sm: '1rem', xs: '15px' } }}>
                                                ПРИ ПОКУПКЕ В КРЕДИТ</Typography>} />
                                        <FormControlLabel control={<Checkbox defaultChecked />}
                                            label={<Typography sx={{ fontSize: { xl: '1rem', lg: '1rem', md: '1rem', sm: '1rem', xs: '15px' } }}>
                                                ПРИ СТРАХОВАНИИ</Typography>} />
                                        <FormControlLabel control={<Checkbox defaultChecked />}
                                            label={<Typography sx={{ fontSize: { xl: '1rem', lg: '1rem', md: '1rem', sm: '1rem', xs: '15px' } }}>
                                                ПРИ ПОКУПКЕ ДОП. ОБОРУДОВАНИЯ</Typography>} />
                                        <FormControlLabel control={<Checkbox defaultChecked />}
                                            label={<Typography sx={{ fontSize: { xl: '1rem', lg: '1rem', md: '1rem', sm: '1rem', xs: '15px' } }}>
                                                ДОПОЛНИТЕЛЬНО</Typography>} />
                                    </FormGroup>
                                </div>
                                <div className="answerBlock">
                                    <h3>СТОИМОСТЬ</h3>
                                    <div className="row">
                                        <div className="titleRow">Цена с учетом выгод</div>
                                        <div className="price">{numberWithSpaces(Number(car.price))} ₽</div>
                                    </div>
                                    <div className="row">
                                        <div className="titleRow">Цена без учета выгод</div>
                                        <div className="price" style={{ color: '#a19f9f', fontSize: '25px' }}>{numberWithSpaces((Number(car.price)) + (car.price / 100 * 20))} ₽</div>
                                    </div>
                                    <div className="btn">
                                        <Button variant="outlined"
                                            sx={{ width: '100%', height: '100%', border: 'solid 2px  #131313' }}
                                        >Получить предложение</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                    : <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', widht: '100%', height: "300px" }}>
                        <CircularProgress />
                    </Box>
                }
            </div>
            <style jsx>{`
                .background {
                    display:flex; 
                    width: 100%;
                    height:auto;
                    flex-direction: column;
                    align-items: center;
                    background-color:#d5d5d55c;
                    justify-content: center;
                    padding: 20px;
                }

                .backgroundBlock{
                    display:flex; 
                    width:1000px;
                    height:auto;
                    flex-direction: start;
                    align-items: center;
                }

                .priceBlock{
                    display: flex;
                    flex-direction: column;
                    width: 400px;
                    height: 650px;
                    border:1px solid #e0e0e0;
                    background-color: white;
                    margin-top:100px;
                    border-radius: 7px;
                }

                .priceHeader{
                    display: flex;
                    width: 100%;
                    position: relative;
                    background: #555353;
                    color: #fff;
                    text-transform: uppercase;
                    letter-spacing: normal;
                    padding: 20px 30px;
                    border-radius: 7px 7px 0 0 ;
                    font-weight: bold;
                    font-family: 'Gilroy','sans-serif'; 

                }

                .salesBlock{
                    display: flex;
                    margin-Top:10px;
                    flex-direction: column;
                    width: 100%;
                    height: auto;
                    align-items: start;
                    border-bottom:1px solid #e0e0e0;
                    padding: 20px 20px;
                    font-family: 'Gilroy','sans-serif'; 

                }

                .answerBlock{
                    display: flex;
                    margin-Top:10px;
                    flex-direction: column;
                    width: 100%;
                    height: auto;
                    align-items: start;
                    padding: 20px 20px;
                    font-family: 'Gilroy','sans-serif'; 

                }


                .row{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    align-items: center;
                }

                .titleRow{
                    display: flex;
                    text-align: center;
                    justify-content: start;
                    font-family: 'Gilroy','sans-serif'; 

                }

                .price {
                    display: flex;
                    justify-content: start;
                    color:  #131313;
                    font-size: 30px;
                    font-weight: bold;
                    font-family: 'Gilroy','sans-serif'; 

                }

                .btn {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 60px;
                    margin-top: 10px;
                    font-family: 'Gilroy','sans-serif'; 

                }

                @media(max-width: 1050px) {
                    .backgroundBlock{
                        width: auto;
                    }
                }

                @media(max-width: 400px) {
                    .background {
                          padding: 1px;
                    }

                    .answerBlock {
                        margin-top:0px;
                    }

                    .saleBlock{
                       font-size:15px
                    }
                    .priceBlock {
                        width: auto;
                        height: auto;
                    }
                    .row {
                        align-items: start;
                        flex-direction: column;
                    }
                }

                @media(max-width: 360px) {
                    .priceHeader{
                       font-size:14px
                    }
                }

            `}</style>
        </>)
}


