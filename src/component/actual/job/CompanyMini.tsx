import Link from 'next/link';
import banner1 from '/public/images/icon_1/1(blue).png';
import banner2 from '/public/images/icon_1/2(blue).png';
import banner3 from '/public/images/icon_1/3(blue).png';
import banner4 from '/public/images/icon_1/4(blue).png';

import banner5 from '/public/images/icon_2/1.png';
import banner6 from '/public/images/icon_2/2.png';
import banner7 from '/public/images/icon_2/3.png';

import banner8 from '/public/images/label2.png';
import { Dispatch, SetStateAction, useState, MouseEvent, FormEvent } from 'react'



export function CompanyMini() {



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
            <div className="background" id="two">
                <Link href={'/companyPage'}>
                    <div className='btnDiv'>
                        О компании
                    </div>
                </Link>
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
                    font-family: 'Gilroy','sans-serif'; 
                    font-size:16px;
                    text-align: center;
                    color: #131313;
                }

                #elText2 {
                    padding:30px;
                }

                .btnDiv {
                    display:flex;
                    justify-content:center;
                    align-items: center;
                    font-family: 'Gilroy','sans-serif'; 
                    font-size:16px;
                    width: 300px;
                    height: 45px;
                    font-weight: bold;
                    border: solid  #131313;
                    background-color:  #131313;
                    color:white;
                    cursor: pointer;
                    border-radius: 10px;
                }

                .btnDiv:hover {
                    background: #D1AC02;
                    border: solid #D1AC02;
                    transform: scale(0.99);
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

     


      span:hover:after {
        cursor:pointer;
        width:100%;
        left:0;
        border:0;
       
      }

    @media(max-width: 770px) {
      .content{
        width: 100%;
       }
       .el {
        width: 100px;
        height: 100px;
       }
       #two {
        height: 100px;
       }
    }

    @media(max-width: 550px) {
       .el {
        width: 70px;
        height: 70px;
       }
       .elText {
        font-size: 11px;
       }
       .background {
           height: 300px;
        }
        .content{
          flex-direction: column;
          padding-top:10px;
          padding-bottom:10px;
       }

       #two {
        height: 290px;
       }
    }

    @media(max-width: 400px) {
        .btnDiv {
                 width: 250px;
        }
     }

    @media(max-width: 320px) {

        .btnDiv {
                width: 210px;
        }
     }
        `}</style>
        </>
    )
}