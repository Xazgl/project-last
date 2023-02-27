
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useRef, useState } from "react";
import { Box, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Driver, Drivers, Genders } from "../type";
import { nanoid } from "nanoid";
import DriverCurrentForm from "./driverCurrent/DriverCurrentForm";


type DriversProps = {
    setDrivers: Dispatch<SetStateAction<Driver[]>>,
    drivers: Driver[]
}


export function DriversForm({ setDrivers, drivers }: DriversProps) {
    
    return (
        <>
            {
                drivers.map(driver => {
                    return <DriverCurrentForm key={driver.id} driver={driver} setDrivers={setDrivers} />
                })
            }
            <Button onClick={() => {setDrivers(drivers => [...drivers, {
                id: drivers.length, 
                yearsOld: '',
                exp: '',
                gender: 'Мужской'
            }])}}>Добавить нового</Button>


            <style jsx>{`
            .titleDiv {
                display: flex;
                justify-content: center;
                width: 100%;
            }

            .titlePage {
                display: flex;
                justify-content: start;
                width:900px;
                font-size:45px;
                font-weight: bold;
            }
            
           .background {
                display:flex; 
                width: 100%;
                height:auto;
                justify-content: center;
                align-items:center;
                flex-direction: column;
                background-position: center center;
                background-color:#fcfafad2;
                background-repeat:no-repeat;
                background-size:cover;
                padding-top: 40px;
                padding-bottom: 40px;
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
                font-family: 'TacticSans-Reg','sans-serif'; 
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
                width:900px;
                font-family: 'TacticSans-Reg','sans-serif'; 
           }


           .title {
                display:flex; 
                width: 100%;
                justify-content: start;
                align-items:center;
                margin-top:10px;
                font-weight: bold;
                font-family: 'TacticSans-Reg','sans-serif'; 
                font-size:30px;
                text-align: start;
           }
           
           .desc {
                display:flex; 
                width: 100%;
                justify-content: start;
                align-items:center;
                margin-top:20px;
                font-family: 'TacticSans-Reg','sans-serif'; 
                font-size:21px;
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
                width: 900px;
                justify-content: start;
                align-items:center;
                margin-top:20px;
                flex-direction: column;
                border-top: 1px solid #d4d3d3;
                padding: 2px;
           }

           .inputTitle {
                display:flex;
                width: 900px;
                justify-content: start;
                align-items:center;
                padding-left:10px;
                flex-direction: row;
                font-size: 20px;
                font-family: 'TacticSans-Reg','sans-serif'; 
           }
           

           input {
                width: 100%;
                height: 40px;
                font-size: 18px; 
                font-family: 'TacticSans-Reg','sans-serif'; 
                background-color: #e7e7e7;
                border:none;
                font-weight: bold;
                padding: 11px 12px;
           }

           select {
                width: 100%;
                height: 40px;
                font-size: 18px; 
                font-family: 'TacticSans-Reg','sans-serif'; 
                background-color: #e7e7e7;
                border:none;
           }
            
           .btn {
                display:flex;
                justify-content:center;
                flex-direction:row;
                align-items:center;
                flex-direction:row;
                font-family: 'TacticSans-Reg','sans-serif';
                transition: transform.3s;
                width: 100%;
                height: 45px;
                background: transparent;
                border: 2px solid;
                margin-top:40px;
                font-size:20px;
                text-align: center;
           }
           
           .btn_show:hover {
                background:#005baa;
                color:white;
           }

           @media(max-width: 600px) {
                .title {
                    justify-content: center;
                    font-size:25px;
                    text-align: center;
                }
            
                .desc {
                    justify-content: center;
                    font-size:18px;
                    text-align: center;
                 } 
    
                .inputTitle {
                    display:flex;
                    width: 100%;
                    font-size: 18px;
                } 
                .divForm{
                    width:400px;
                }
                .column {
                    width:100%
                }
            }

            @media(max-width: 400px) {
                .divForm{
                    width:300px;
                }        
            }

            @media(max-width: 320px) {
                .divForm{
                    width:270px;
                }
            }

        `}</style>
        </>
    )
}