import { Dispatch, SetStateAction } from 'react';
import bannerTradeIn from '/public/images/astra.jpg';

type TradeInProps = {
  setShowTradeInModal: Dispatch<SetStateAction<boolean>>
}
export function TradeIn({setShowTradeInModal}: TradeInProps) {
  // const setShowTradeInModal = props.setShowTradeInModal
   let text = `Обменяйте ваш автомобиль 
   на новый OPEL  с АРКОНТ`
    return (
        <>
          <div className="background">
            <div className="contentEl">
                 <div className="content">      
                   <div className="title"><span className='span'>Trade-In</span></div>
                   <div className="words"><span className='span'>{text}</span></div>
                 </div>
                 <div className="content"> 
                   <div className="btnDiv">
                      <button className="btn" onClick={()=>{setShowTradeInModal(true)}}>Записаться на оценку</button>
                  </div>
               </div>
            </div>
          </div>

<style jsx>{`
   .background { 
     display:flex; 
      width: 100%;
      height:600px;
      justify-content: center;
      background-blend-mode: darken;
      background: rgba(0, 0, 0, .60);
      background-repeat: no-repeat;
      overflow: hidden;
      background-size: cover;
      background-position: center center;
      background-image: url('${bannerTradeIn.src}');
   }
  .contentEl{
    display:flex; 
    width: 900px;
    justify-content: center;
    flex-direction:row;
    margin-top:50px;
  }
  .content {
    display:flex; 
    flex-direction:column;
    justify-content:center;
    color:black;
  }

  .span {
    width: 100%;
    display: inline-block;
    text-align: center;
    }
  .title {
    display:flex;
    justify-content:start;
    font-size:55px;
    font-weight: bold;
    font-family: 'OpelNextW01-Regular', sans-serif; 
    color:white;
    margin-top:120px;
  }
  .words {
    display:flex;
    justify-content:start;
    color:white;
    font-size:35px;
    font-family: 'OpelNextW01-Regular', sans-serif; 
    margin-bottom:250px;
    font-weight: 300;
  }
  .btnDiv{
    display:flex;
    justify-content:start;
    margin-bottom:200px;
  }
  .btn {
    background:transparent;
    font-family: 'OpelNextW01-Regular', sans-serif; 
    font-size:25px;
    color:white;
    border-radius:5px;
    width: 350px;
    height: 50px;
    background-color: transparent;
    border-color: yellow;
    font-weight: bold;

  }

  .btn:hover {
    background-color:#f7ff14;
    color:black;
    border:inset;
    border-color:black;
    box-shadow:none;
    transform: scale(0.98);
  }

  @media(max-width: 1350px) {
    .background {
      height:600px;
    }
    .title {
      margin-bottom:10px;
    }
    .content {
      margin-left:40px;
    }
  }
  @media(max-width: 900px ){
    .background {
      height:400px;
    }
    .content {
      margin-left:80px;
    }
    .title {
      font-size:30px;
    }
    .words {
      font-size:17px;
      margin-bottom:100px;
    }
    .btn {
      font-size: 16px;
      width: 220px;
      border-radius:3px;
    }
    .btn:hover {
      font-size: 17px;
    }
    .contentEl{
      width: 600px;
    }
    .btnDiv {
          margin-bottom: 0px;
    }
    
  }
  @media(max-width: 650px ){
    .contentEl{
    width: 500px;
    }
    .content {
      margin-left:50px;
    }
    .title {
      font-size:25px;
    }
    .words {
      font-size:14px;
      margin-bottom:70px;
      width:250px;
    }
    .btn {
      font-size: 12px;
      width: 160px;
      height: 40px;
    }
    .btn:hover {
      font-size: 12px;
    }
  }
  @media(max-width: 430px ){
    .contentEl{
    display:flex; 
    width: 300px;
    justify-content: center;
    flex-direction:column;
    margin-top:10px;
    align-items:center;
  }
    .contentEl{
      height:200px;
    width: 300px;
    }
    .title {
      font-size:18px;
  
    }
    .words {
      margin-top:20px;
      font-size:14px;
      margin-bottom:70px;
      width:300px;
    }
    .content {
      width: 100px;
      align-items:center;
      justify-content:center;
    }
    .btnDiv {
      width: 150px;
    }
    .btn {
      font-size: 10px;
      width: 150px;
      height: 30px;
    }
    .btn:hover {
      font-size: 10px;
    }
  }
  @media(max-width: 360px ){
    .background {
      height:200px;
    }
    .content {
      margin-left:30px;
      width: 70px;
    }
    .contentEl {
      height: 150px;
    }
    .title {
      margin-top: 20px;
      font-size:15px;
    }
    .words {
      font-size:10px;
      margin-bottom:70px;
      width:200px;
    }
    .btnDiv {
      width: 130px;
    }
    .btn {
      font-size: 9px;
      width: 130px;
      height: 25px;
    }
    .btn:hover {
      font-size: 9px;
    }
    
  }
  @media(max-width: 260px ){
    .background {
      height:150px;
    }
    .content {
      margin-left:20px;
      width: 70px;
      height: 30px;
    }
    .title {
      margin-top: 12px;
      font-size:12px;
    }
    .words {
      font-size:7px;
      margin-bottom:70px;
      width:150px;
    }
    .btnDiv{
      width: 100px;
    }
    .btn {
      font-size: 7px;
      width: 100px;
      height: 20px;
      border: 1px solid yellow;
      border-radius:2px;
    }
    .btn:hover {
      font-size: 7px;
    }
  }


  }
`}</style>

 </>
    )
}