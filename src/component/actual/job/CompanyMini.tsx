import Link from 'next/link';
import banner1 from '/public/images/icon_1/1.png';
import banner2 from '/public/images/icon_1/2.png';
import banner3 from '/public/images/icon_1/3.png';
import banner4 from '/public/images/icon_1/4.png';

import banner5 from '/public/images/icon_2/1.png';
import banner6 from '/public/images/icon_2/2.png';
import banner7 from '/public/images/icon_2/3.png';

import banner8 from '/public/images/label2.png';
import { Dispatch, SetStateAction, useState, MouseEvent, FormEvent } from 'react'



export function CompanyMini(){
    
  

    return (
        <>
            <div className="background">
                <div className="content">
                    <div className="col">
                        <div className="el" id="icn1"></div>
                        <div className="elText">ВОЗМОЖНОСТИ РОСТА</div>
                    </div>
                    <div className="col">
                        <div className="el" id="icn2" ></div>
                        <div className="elText">ПЕРЕДОВАЯ КОМПАНИЯ</div>
                    </div>
                    <div className="col">
                        <div className="el" id="icn3" ></div>
                        <div className="elText">ДРУЖНАЯ КОМАНДА И РАЗВИТИЕ</div>
                    </div>
                    <div className="col">
                        <div className="el" id="icn4"></div>
                        <div className="elText">ДОСТОЙНАЯ ЗАРПЛАТА</div>
                    </div>
                </div>
            </div>
            <div className="background">
                <div className='btnDiv'>
                    <Link href={'/companyPage'}><span>О КОМПАНИИ</span></Link>
                </div>
            </div>







            <style jsx>{`
                .background {
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    width:100%;
                    height: 270px;
                  
                }
                #background2{
                    margin-top:50px
                }
            

                .content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width:1000px;
                    height: 270px;
                    flex-direction: row;
                   
                }
                #content2 {
                    width:900px;
                }
                #content3 {
                    width:900px;
                }

                .col {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                .el {
                    display:flex;
                    flex-direction:row;
                    background-size:contain;
                    background-repeat: no-repeat;
                    width:160px;
                    height:120px;
                }

                .elText {
                    display:flex;
                    flex-direction:row;
                    padding:5px;
                    width:100%;
                    font-weight: bold;
                    font-family:  'OpelNextW01-Regular', 'sans-serif'; 
                    font-size:15px;
                    text-align: center;
                }
                #elText2 {
                    padding:30px;
                }

                .btnDiv {
                    display:flex;
                    justify-content:center;
                    align-items: center;
                    font-family:  'OpelNextW01-Regular', 'sans-serif'; 
                    font-size:16px;
                    font-size: 20px;
                    width: 250px;
                    height: 60px;
                    font-weight: bold;
                    border: solid black;

                }
                .btnDiv:hover {
                    background: #eab330;
                }
                #icn1 {
                    background-image: url('${banner1.src}'); 
                }
                #icn2 {
                    background-image: url('${banner2.src}');
                }
                #icn3 {
                    background-image: url('${banner3.src}'); 
                }
                #icn4 {
                    background-image:  url('${banner4.src}'); 
                }

                span::after{
        position:absolute;
        content:"";
        width:0%;
        height:1.7px;
        background-color:black;
        left:50%;
        bottom:-1px;  
        transition:all 0.3s ease-in-out;
        height: 1px;
        color:white;
      }

      span:hover {
        font-weight: bold;
        cursor:pointer;
        transform:scale(1.04);
        transition:0.4s;
       
      }

      span:hover:after {
        cursor:pointer;
        width:100%;
        left:0;
        border:0;
       
      }
                

        `}</style>
        </>
    )
}