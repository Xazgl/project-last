import { Dispatch, FormEvent, MutableRefObject, SetStateAction, useMemo, useState } from "react"
import banner1 from '/public/images/icons/1.png'
import banner2 from '/public/images/icons/tires.png'
import banner3 from '/public/images/icons/inspection.png'
import banner4 from '/public/images/icons/car-wash.png'
import banner5 from '/public/images/icons/inspection.png'
import banner6 from '/public/images/icons/6.png'


type AdvantagesProps = {
    setShowModal: Dispatch<SetStateAction<boolean>>,
    refs: { 
        refAdvatages: MutableRefObject<HTMLDivElement>,
    } 
}



export function OurAdvantages({ setShowModal, refs }: AdvantagesProps) {
    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }

    return (

        <>
            <div className="ourAdvantages" ref={refs.refAdvatages}>
                <div className="titleMain">УСЛУГИ</div>
                <div className="container">
                    <div className="containerEl" id="n1">
                        <div className="title">АВТОСЕРВИС</div>
                        <div className="words">
                            <div className="img" id="pic1"></div>
                            <div className="arrow">&#10095;</div>
                        </div>
                    </div>
                    <div className="containerEl" id="n2">
                        <div className="title">ШИНОМОНТАЖ</div>
                        <div className="words">
                            <div className="img" id="pic2"></div>
                            <div className="arrow">&#10095;</div>
                        </div>

                    </div>
                    <div className="containerEl" id="n3">
                        <div className="title">КУЗОВНОЙ РЕМОНТ</div>
                        <div className="words">
                            <div className="img" id="pic3"></div>
                            <div className="arrow">&#10095;</div>
                        </div>

                    </div>
                </div>
                <div className="container" >
                    <div className="containerEl" id="n4">
                        <div className="title">МОЙКА</div>
                        <div className="words">
                            <div className="img" id="pic4"></div>
                            <div className="arrow">&#10095;</div>
                        </div>

                    </div>
                    <div className="containerEl" id="n5">
                        <div className="title">ДИАГНОСТИКА</div>
                        <div className="words">
                            <div className="img" id="pic5"></div>
                            <div className="arrow">&#10095;</div>
                        </div>

                    </div>
                    <div className="containerEl" id="n6">
                        <div className="title">РЕМОНТ АГРЕГАТОВ</div>
                        <div className="words">
                            <div className="img" id="pic6"></div>
                            <div className="arrow">&#10095;</div>
                        </div>
                    </div>
                </div>
                {/* <div className="btnDiv">
                    <form onSubmit={showModal}>
                        <button className="btn">Записаться</button>
                    </form>
                </div> */}
            </div>

            <style jsx>{`
.ourAdvantages{
    display:flex;
    flex-direction:column;
    align-items: center;
    background-color:#3d3d3d;
}

.titleMain{
    display:flex;
    flex-direction:row;
    justify-content:center;
    font-family: 'TacticSans-Reg','sans-serif'; 
    font-size:50px;
    margin-bottom:20px;
    color:white;
    margin-top:30px;
}

.container{
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;  
    width:1000px;
    align-items:center;
}

#n1 {
    background-position: center center;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
}

.span {
    width: 100%;
    display: inline-block;
    text-align: center;
}

#n2 {
    background-position: center center;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
}

#n3 {
    background-position: center center;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
}

#n4 {
    background-position: center center;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
}

#n5 {
    background-position: center center;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
}

#n6 {
    background-position: center center;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
}

.containerEl{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:10px;
    margin-top:30px;
    width:304px;
    height:140px;
    background: white;
    color: white;
    transition: 1s;
}

.containerEl:hover{
        transform: scale(1.08);
}


.title{
    display:flex;
    flex-direction:row;
    justify-content:center;
    font-size:19px;
    font-family: 'TacticSans-Reg','sans-serif'; 
    align-items:center;
    font-weight: bold;
    color:black;
}

.words {
    margin-top:14px;
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    font-size:17px;
    font-family: 'TacticSans-Reg','sans-serif'; 
    align-items:baseline;
    width: 200px;
    height: 120px;
}
.img {
    width: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 60px;
}

.arrow {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: flex-end;
    font-size: 40px;
    color: black;
    font-weight: bold;
}

.btnDiv {
    display:flex;
    flex-direction:row;
    justify-content:center;
}

.btn {
    margin-top:50px;
    margin-bottom:20px;
    font-family: 'TacticSans-Reg','sans-serif'; 
    border-radius: 3px;
    transition: transform.3s ;
    color: #ffffff;
    border-color: #000;
    color: #000;
    background: 0 0;
    width: 250px;
    height: 50px;
    font-size: 23px;
}

.btn:hover {
    background-color: #f7ff14;
    font-family: 'TacticSans-Reg','sans-serif'; 
    color:black;
    transform: scale(1.02);
    box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);
}     

#pic1{
    background-image:  url('${banner1.src}'); 
}

#pic2{
    background-image:  url('${banner2.src}');
}

#pic3{
    background-image:  url('${banner3.src}'); 
}

#pic4{
    background-image:  url('${banner4.src}');
}

#pic5{
    background-image:  url('${banner5.src}');
}

#pic6{
    background-image:  url('${banner6.src}');
}

@media(max-width: 1100px) {
    .container{
     width:800px;
   }
   .containerEl{
     width:250px;
     height:210px;
     padding:5px;
   }
   .title{
    font-size:17px;
   }
   .words {
    font-size:16px;
    padding-left:10px;
   }
   .btn {
    height: 45px;
    font-size: 25px;
    width: 170px;
    margin-top:30px;
   }
   .btn:hover {
    font-size: 26px;
   }
}
@media(max-width: 800px) {
    .container{
        flex-direction: column;
        width:100%;
   }
   .containerEl{
     width:450px;
     height:150px;
     padding:5px;
   }
   .titleMain{
    margin-bottom: 0px;
    font-size: 40px;
   }
   .title{
    font-size:20px;
   }
   .words {
    font-size:18px;
    padding-left:10px;
   }
   .btn {
    height: 40px;
    font-size: 20px;
    width: 200px;
    margin-top:20px;
   }
   .btn:hover {
    font-size: 21px;
   }
}
@media(max-width: 540px) {
   .containerEl{
     width:300px;
     height:150px;
     padding:5px;
   }
  
   .title{
    font-size:17px;
   }
   .words {
    font-size:14px;
    padding-left:10px;
   }
   .btn {
    height: 40px;
    font-size: 20px;
    width: 160px;
    margin-top:20px;
   }
   .btn:hover {
    font-size: 21px;
   }
}
@media(max-width: 350px) {

.containerEl{
  width:280px;
  height:110px;
  padding:5px;
}

.img{
  height:50px
}

.title{
 font-size:18px;
}
.words {
 font-size:10px;
 padding-left:10px;
}
.btn {
 height: 35px;
 font-size: 16px;
 width: 120px;
 margin-top:20px;
}
.btn:hover {
 font-size: 17px;
}
}
@media(max-width: 240px) {

.containerEl{
  width:150px;
  height:100px;
  padding:5px;
}

.title{
 font-size:10px;
}
.words {
 font-size:9px;
 padding-left:10px;
}
.btn {
 height: 30px;
 font-size: 12px;
 width: 100px;
 margin-top:20px;
}
.btn:hover {
 font-size: 12px;
}
}

 `}</style>
        </>
    )
}

function setShowModal(arg0: boolean) {
    throw new Error("Function not implemented.")
}
