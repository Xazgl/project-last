import { Sales } from '@prisma/client'
import { Dispatch, FormEvent, MouseEvent, SetStateAction, useState } from 'react'
// import salesOne from '/public/images/sales.webp'
// import salesTwo from '/public/images/sales2.webp'
// import salesThree from '/public/images/sales3.webp'

type SalesProps = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  sales?: Sales[];
  // isAdmin?: boolean;
}

export function SalesComponent({ setShowModal, sales }: SalesProps) {
  const [curModelId, setCurModelId] = useState(0)
  function showModal(event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    setShowModal(true)
  }

  if (Array.isArray(sales) && sales.length > 0) {
    return (
      <>
      <div className="titleMain">АКЦИИ OPEL</div>
        <div className="containerSales">
          {
            sales.map(sale => {
              return <div className="salesEl" onClick={showModal} >
                       <div className="imgDiv"><img className="imgCustom" src={'/uploads/' + sale.img}/></div>
                       <div className="title"><span className='span'>{sale.title}</span></div>
                       <div className="salesWords"><span className='span'>{sale.description}</span></div>
                     </div>
            })
          }
        </div>

        <style jsx>{`
    
    .blockSales {
        display:flex;
        justify-content:center;
        flex-direction:column;
        margin-top:30px;
        background-color:black;
        height:500px;
    
    }
    
    .titleMain{
        display:flex;
        font-family: 'TacticSans-Reg',sans-serif; 
        font-size: 35px;
        font-weight: bold;
        justify-content:center;
        color:white;
        background-color:black;
        margin-top:35px;
    }
    .containerSales {
        display:flex;
        justify-content:space-evenly;
        width: 100%;
        color:white;
        background:black;
        flex-wrap:wrap;
    } 
    
    .salesEl {
        display:flex;
        justify-content: center;
        flex-direction: column;
        height: 300px;
        width:350px;
        color:white;
        margin-bottom:30px;
        margin-top:20px;
        align-items: center;
    }
    
    .imgCustom{
      display:flex; 
        height: 100%;
        width: 300px;
        background-position: center center;
        background-repeat: no-repeat;
        overflow: hidden;
        border-radius: 5px;
        object-fit: cover;
    }
    .imgDiv{
        display:flex; 
        height: 100%;
        width: 300px;
        background-position: center center;
        background-repeat: no-repeat;
        overflow: hidden;
        border-radius: 5px;
    }
    
    .imgDiv:hover{ 
        border:solid;
        border-color:black;
        -webkit-box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42);
        -moz-box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42);
        box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42);
        transform: scale(1.005);
    
    }
    
    .img2{
        display:flex; 
        height: 100%;
        weight: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        overflow: hidden;
        border-radius: 5px;
    }
    
    .span {
    width: 100%;
    display: inline-block;
    text-align: center;
    }
    .img2:hover{ 
        border:solid;
        border-color:black;
        -webkit-box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42);
        -moz-box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42);
        box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42);
        transform: scale(1.005);
    }
    
    .img3{
        display:flex; 
        height: 100%;
        weight: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        overflow: hidden;
        border-radius: 5px;
    }

    .img-custom {
        height: 100%;
        weight: 100%;
    }
    
    .img3:hover{ 
        border:solid;
        border-color:black;
        -webkit-box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42);
         -moz-box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42);
         box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42); 
         transform: scale(1.005);
    }
    
    .title {
        display:flex;
        font-family: 'TacticSans-Reg',sans-serif; 
        font-size: 25px;
        font-weight: bold;
        justify-content:center;
        margin-top:10px;
        color:white;
    }
    
    
    .salesWords {
        display:flex;
        font-family: 'TacticSans-Reg',sans-serif; 
        font-size: 18px;
        justify-content:center;
        margin-top:10px;
        color:white;
    }
    @media(max-width: 1100px) {
      .titleMain{
        font-size: 30px;
      }
      .salesWords {
        font-size:16px;
      }
      .title {
        font-size:20px;
      }
    }
    @media(max-width: 540px) {
      .imgDiv{
        width: 200px;
      }
      .salesWords {
        font-size:14px;
      }
      .salesEl {
        width: 200px;
      }
      .title {
        font-size:17px;
      }
      .titleMain{
        font-size: 20px;
      }
    }
    @media(max-width: 320px) {
      .imgDiv{
        width: 150px;
      }
      .salesWords {
        font-size:12px;
      }
      .salesEl {
        width: 150px;
        height: 220px;
      }
      .title {
        font-size:14px;
      }
      .titleMain{
        font-size: 16px;
        margin-top:10px;
      }
    }
    @media(max-width: 320px) {
      .imgDiv{
        width: 100px;
      }
      .salesWords {
        font-size:10px;
      }
      .salesEl {
        width: 100px;
        height: 150px;
      }
      .title {
        font-size:12px;
      }
      .titleMain{
        font-size: 14px;
        margin-top:10px;
      }
    }
    `}</style>
      </>
    )
  }

  return <div>Акции не обнаружены</div>
}