import Link from "next/link"
import { FormEvent, MutableRefObject, useEffect } from "react"
import banner from '/public/images/label.svg';
import arrow from '/public/images/arrow_white.svg';
import styles from "./Menu.module.css";

type MapNewProps = {
  refs: {
    refTop: MutableRefObject<HTMLDivElement>,
    refContact: MutableRefObject<HTMLDivElement>,
  }
}

export function Map({ refs }: MapNewProps) {
  // useEffect(() => {
  //     let script = document.createElement('script');
  //     script.async = true;
  //     script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5d0eb9f3144dba9594c054da1284695fa0ceeaf5f15349948c0309e8fff904c3&amp;width=100%25&amp;height=720&amp;lang=ru_RU&amp;scroll=true'
  //     document.body.append(script);
  //     return () => {
  //         const ymaps = document.querySelector('body ymaps')
  //         ymaps?.remove()
  //         console.log('Unmount');
  //     }
  // }, [])





  return (
    <>
      <div className="container" ref={refs.refContact} >
        <div className="content" >
          <div className="title">Свяжитесь с нами</div>
          <div className="column">
            <div className="desc">+7 (8442) 22-70-77</div>
            <div className="desc">chery.osb@arkont.ru</div>
          </div>
          <div className="column">
            <div className="desc">г.Волгоград</div>
            <div className="desc">ул.Землячки, 19Г</div>
          </div>
          <div className="column">
            <div className="desc" id="bold">Часы работы:</div>
            <div className="desc">Каждый день</div>
            <div className="desc">с 8:00 по 20:00</div>
            <div className="btn"><Link href={'https://yandex.ru/maps/?rtext=~48.757038,44.490151'}><span>ПОСТРОИТЬ МАРШРУТ</span></Link></div>
          </div>
        </div>
        <div className="containerEl" id="title" >КОНТАКТЫ</div>
        <div className="miniDesc" >+7 (8442) 22-70-77</div>
        <div className="miniDesc" >г.Волгоград ул.Землячки, 19Г</div>
        <div className="miniDesc" >с 8:00 по 20:00</div>
        <div className="miniDesc" >  <div className="miniBtn"><Link href={'https://yandex.ru/maps/?rtext=~48.757038,44.490151'}><span>ПОСТРОИТЬ МАРШРУТ</span></Link></div></div>
      </div>
      <div className="first">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1b120e8a0ed8766b20b5db35503de47310af776ad6ec26c0cb81aebccc37ec6f&amp;source=constructor" width="100%" height="655" frameBorder="0"></iframe>
      </div>
      <div className="second">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1b120e8a0ed8766b20b5db35503de47310af776ad6ec26c0cb81aebccc37ec6f&amp;source=constructor" width="100%" height="655" frameBorder="0"></iframe>
      </div>
      <div className="three">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1b120e8a0ed8766b20b5db35503de47310af776ad6ec26c0cb81aebccc37ec6f&amp;source=constructor" width="100%" height="655" frameBorder="0"></iframe>
      </div>

      <div className="container">
        <div className="footer">

          <div className="titleFlex">
            <div id="flex"></div>
            <div id="flex">
              <div className="label" ></div>
            </div>
            <div id="flex">
              <a onClick={(e) => {
                e.preventDefault()
                refs.refTop.current.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                })
              }}><div className="arrow"></div></a>
            </div>
          </div>
          <ul className={styles.menu}>
            <li className="menuEL">
              <Link href={'/servicePage'}><span>УСЛУГИ</span></Link>
            </li>
            <li className="menuEL">
              <Link href={'/modelPage'}><span>ПРАЙС ЛИСТ</span></Link>
            </li>
            <li className="menuEL" >
              <Link href={'/'}><span>АКЦИИ</span></Link>
            </li>
            <li className="menuEL">
              <Link href={'/contactPage'}><span>ЗАПЧАСТИ</span></Link>
            </li>
            <li className="menuEL">
              <Link href={'/contactPage'}><span>ЗАПИСЬ НА ТО</span></Link>
            </li>

          </ul>
        </div>
        <div className="adress">
          <div className="border"></div>
          <div className="adressName">
            <div className="adressContener">Юридическая информация</div>
            <div className="adressContener">Арконт 2022</div>
          </div>
        </div>

      </div>
      <style jsx>{`
      
        .adress{
          display:flex;
          flex-direction: row;
          width: 900px;
          margin-top:5px;
          color:white;
          font-family:  'TacticSans-Reg','sans-serif';
          font-size: 18px;
          flex-direction: column;
        }

        .border{
          display:flex;
          flex-direction: row;
          width: 100%;
          border-bottom:solid 2px rgb(106, 106, 106);
        }

        .adressName {
          display:flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-between;
          color: rgb(181, 181, 181);
          margin-top:10px;
        }

        .titleFlex{
          display:flex;
          flex-direction: row;
          justify-content: space-between;
          width: 1200px;
        }

        #flex {
          display:flex;
          flex-direction: row;
          justify-content: center;
          width:300px;
        }

        .container {
            display:flex;
            flex-direction:column;
            justify-content:center;
            background-color:#3d3d3d;
            height: 300px;
            align-items: center;
        }
        .containerEl {
            display:flex;
            color:white;
            font-family:  'TacticSans-Reg','sans-serif';
            justify-content:center;
            margin-top:40px;
            border-top:solid 2px rgb(106, 106, 106);
            width: 500px;
            align-items: center;
            font-size: 50px;
        }
        
        .content {
          display:flex;
          flex-direction: column;
          justify-content:baseline;
          align-items: start;
          text-align: start;
          width: 320px;
          height: 380px;
          position: absolute;
          background-color: white;
          margin-top: 831px;
          margin-left: 670px;
          -webkit-box-shadow: 29px 26px 8px 0px rgba(34, 60, 80, 0.2);
          -moz-box-shadow: 29px 26px 8px 0px rgba(34, 60, 80, 0.2);
          box-shadow: 29px 26px 8px 0px rgba(34, 60, 80, 0.2);
          padding-left:30px;
          font-family:  'TacticSans-Lgt','sans-serif';
        }

        .footer{
          display: flex;
          justify-content: center;
          align-items: center;
          color:rgb(106, 106, 106);
          font-family:  'TacticSans-Lgt','sans-serif';
          width:900px;
          flex-direction: column;
        }

        .label {
          display: flex;
          width: 300px;
          height: 66px;
          background-position: center center;
          background-image: url('${banner.src}');
          background-repeat:no-repeat;
          background-size: contain;
        }

        .arrow {
          display: flex;
          color: rgb(106, 106, 106);
          border-radius: 100%;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          text-align: center;
          font-size: 40px;
          height: 50px;
          width: 56px;
          margin-left: 200px;
          background-position: center center;
          background-image: url('${arrow.src}');
          background-repeat:no-repeat;
          background-size: contain;
          transform: rotate(270deg);
        }


        ul {
        justify-content: space-evenly; 
        font-family: 'TacticSans-Reg','sans-serif'; 
        border-bottom: 1px solid #eaeaea;   
        font-size:21px;
        width: 100%;
        border:none;
        z-index:9999;
        margin-top:0;
        display:flex;
        align-items:center;
        height: 72px;
        color:white;
      }
      .menuEL {
        display:flex;
        justify-content:center;
        list-style: none;
        transition: 0.4s linear;
        position:relative;
      }

      span::after{
        position:absolute;
        content:"";
        width:0%;
        height:1.7px;
        background-color:white;
        left:50%;
        bottom:-1px;  
        transition:all 0.3s ease-in-out;
      }

      span:hover {

        cursor:pointer;
        transform:scale(1.04);
        transition:0.4s;
      }

      span:hover:after {
        cursor:pointer;
        width:100%;
        left:0;
      }

      .menuLebel {
        display:flex;
        justify-content:start;
        list-style: none;
      }

        .column {
          flex-direction: column;
          align-items: start;
          justify-content: center;
          margin-top:10px;
        }
        .desc {
          flex-direction: row;
          justify-content: start;
          align-items: center;
          font-size: 20px;
          font-family: 'TacticSans-Lgt','sans-serif';
        }

        .miniDesc {
          display: none;
          flex-direction: row;
          justify-content: start;
          align-items: center;
          font-size: 20px;
          font-family: 'TacticSans-Lgt','sans-serif';
          color:white;
        }

        

        .title {
          font-size: 25px;
          font-weight: bold;
          margin-top:20px;
        }

        #bold {
          font-weight: bold;
          font-size: 25px;
        }
       
        .second {
          display:none
        }
        .three {
          display:none
        }

        .btn {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    align-items:center;
                    flex-direction:row;
                    font-family: 'TacticSans-Lgt','sans-serif';
                    transition: transform.3s;
                    width: 262px;
                    height: 40px;
                    background: transparent;
                    border: 2px solid rgb(106, 106, 106);;
                    font-size:19px;
                    text-align: center;
                    position: absolute;
                    text-align: center;
                    margin-top: 15px;
           }
           .btn:hover {
             background:rgba(0, 0, 0, 0.535);
           }

           .miniBtn{
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    align-items:center;
                    flex-direction:row;
                    font-family: 'TacticSans-Lgt','sans-serif';
                    transition: transform.3s;
                    width: 300px;
                    height: 40px;
                    background: transparent;
                    border: 2px solid rgb(106, 106, 106);;
                    font-size:21px;
                    text-align: center;
                    margin-top:10px;
           }

           .miniBtn:hover {
             background:rgba(0, 0, 0, 0.535);
           }
           

        @media(max-width: 1200px) {
          .arrow {
            margin-left: 0px;
          }
          .titleFlex{
            width: 900px;
          }
        }          
        @media(max-width: 1000px) { 
          .content {
              margin-left: 560px;
              margin-top:643px; 
              height: 338px;
              width: 295px;
            }

            .btn {
              width: 242px;
              height: 35px;
              font-size:17px;
            }

            .desc {
              font-size:17px;
            }
            #bold {
              font-size:23px;
            }
            .title {
              font-size:23px;
            }
        }
        @media(max-width: 900px) {
           
            #title {
              font-size:23px;
            }
            #words {
              font-size:15px;
            }
            .first {
              display:none
            }
            .second {
              display:flex;
            }
            .titleFlex{
            width: 700px;
            }
            .adress {
              width: 700px;
            }
            .footer {
              width: 700px;
            }
        }
        @media(max-width: 850px) {
          .content {
            display:none;
          }
          .miniDesc {
            display:flex;
            font-size:18px;
          }
          #title {
            font-size: 30px;
            margin-top: 1px;
            margin-bottom: 15px;
          }

        }
        @media (max-width: 700px){
          .titleFlex {
            width:500px;
          }
          .footer {
            width:100%;
          }
          .adress {
            width:450px;
          }
          ul {
            flex-direction: column;
            height: auto;
            font-size:18px;
          }
          .arrow {
            width:29px;
            font-size:24px;
          }
          .adressName {
            font-size:15px;
          }
        }
        @media(max-width: 500px) {
           .titleFlex {
            width:300px;
           }
           #title {
            width:100%;
            margin-top:10px;
            border:none;
            
           }
           .adress {
            width:100%;
           }
           .container {
            height: 100%;
           }
           .label {
            width:200px;
           }
           .arrow {
            width:19px;
           }
           .miniBtn {
            margin-bottom: 20px;
           }

            
        }
        @media(max-width: 350px) {          
            #title {
              font-size:20px;
            }
            #words {
              font-size:8px;
            }
            .miniBtn {
              width:250px;
              font-size: 18px;
              height:44px;
            }
            .second {
              display:none;
            }
            .three {
              display:flex;
            }
            ul {
              align-items: start;
            }
        }
    `}</style>
    </>
  )
}