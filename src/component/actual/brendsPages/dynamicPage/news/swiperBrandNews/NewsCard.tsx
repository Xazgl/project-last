import { CircularProgress } from "@mui/material";
import Link from "next/link";
import Image from 'next/image';
import { News } from "@prisma/client";
import { Dispatch } from "react";
import { NewsOne } from "../../../../../../../@types/dto";


type Props = {
    item: NewsOne ,
    setShowModalImg: Dispatch<React.SetStateAction<boolean>>,
    setCarImg: Dispatch<React.SetStateAction<string>>

}


export function NewsCard({ item, setShowModalImg, setCarImg }: Props) {

    function showModalImgFunction(x) {
        setShowModalImg(true)
        setCarImg(x)
    }

    return (
        <>
            {item !== null ?
                <div className="card">
                    <div className='txtBrand'>
                        {item.description}
                    </div>
                    <div className='rowColumn'>
                        {item.img.map((item) =>
                            <div className='columnBrand' key={item}>
                                <img
                                    loading="lazy"
                                    decoding='async'
                                    src={item}
                                    className="cardImg"
                                    onClick={() => showModalImgFunction(item)}
                                >
                                </img>
                            </div>
                        )}
                    </div>
                </div>
                : <CircularProgress />
            }

            <style jsx>{`
            @keyframes cblackit-open {
                    0% {
                        opacity: 0;
                        margin-top:-5em;
                    }
                 
                50% {
                    opacity: 0.5;

                }

                60% {
                    opacity: 0.8;
                }

                   80% {
                       opacity: 0.9;
                   }
   
                   100% {
                       opacity: 1;
                   }
               }

                .card {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    flex-direction: column;
                    width: 100%;
                    height: 100%;
                    margin-top: 40px;s
                    border-radius: 7px;
                    transition: 0.3s;
                    cursor: pointer;
                    animation: slideAnimation 1s ease-in-out;   
                    border-radius: 0px;  
                    background-color:white;
                }

                .card:hover {
                    -webkit-box-shadow: 4px 4px 16px -2px rgba(0, 0, 0, 0.2);
                    -moz-box-shadow:4px 4px 16px -2px rgba(0, 0, 0, 0.2);
                    box-shadow:4px 4px 16px -2px rgba(0, 0, 0, 0.2);

                }

                .card.active {
                    opacity: 1;
                    transform: translateX(0px);
                }

                .descBrand{
      display: flex; 
      flex-direction: column;
      width: 100%;
      height: auto;
      border: 2px solid #d1d7dd;
      padding: 20px;
    }

    .titleBrand {
      display: flex;
      justify-content: flex-start;
      font-size: 20px;
      font-weight: bold;
    }

    .txtBrand {
      display:flex;
      justify-content: flex-start;
      margin-top:20px;
    }

    .rowColumn {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top:20px;
    }

    .columnBrand{
      display: flex;
      justify-content: flex-start;
      width: 50%;
      flex-direction:column;
      padding: 10px;
    }

    .cardImg {
      display: flex;
      width: 100%;
      border: 2px solid #d1d7dd;
      cursor: pointer;
    
    }


    .descBrand {
      display: flex;
      margin-top: 20px;
    }

    .href_a{
      text-decoration: none;
      color: #131313;
    }

    .cards {
      display: flex;
      justify-content: start;
      gap:30px;
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
    }
 
    #mob{
      display: none;
      gap:10px;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      flex-wrap: nowrap;
    }

    .row {
      display:flex;
      flex-direction: row;
    }

    .column {
      display:flex;
      flex-direction: column;
      height: auto;
    }

    .stepper {
      display:none;
      max-width: 400;
      flex-grow: 1 
    }

    .imgStepper {
      height: 255;
      display: block;
      max-width: 400;
      overflow: hidden;
      width: 100%;
    }



    @media(max-width: 1100px) {
      .cards {
       justify-content: center;
      }
      .leftC{
       width: 100px;
      }
    }

    @media(max-width: 860px) {
      .leftC{
       display: none;
      }
    }

    @media(max-width: 660px) {
      .rowColumn {
        flex-direction: column;
      }
      .columnBrand{
        width: 100%;
      }

      .btn{
        height: 30px;
        font-size: 12px;
      }

      .office{
        font-size: 9px;
      }

      .background{
        height: auto;
      }

      .cardImg {
        display: none;
      }

      .stepper {
        display:flex;
        flex-direction: column;
      }
    }


    @media(max-width: 1100px) {
      .cards {
       justify-content: center;
      }
    }

    @media(max-width: 400px) {
      .btn {
        width: 90%
      }
      h3{
        font-weight: 300;
      }
      
    }

    @media(max-width: 340px) {
      .titleBrand{
        font-size:20px;
      }

      .txtBrand {
        font-size: 14px;
      }
    }
        `}</style>

        </>
    )

}
