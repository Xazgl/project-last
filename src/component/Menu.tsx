import { Button } from "@mui/material";
import Link from "next/link";
import { MutableRefObject, useEffect, useRef, useState } from "react";
// import styles from "./Menu.module.css";
import label from '/public/images/label.png'
import DehazeIcon from '@mui/icons-material/Dehaze';
import Script from "next/script";


const hundler = (event: React.SyntheticEvent) => {
  console.log('Click');
  event.preventDefault()
}



export function MenuBar() {

  const [show, setShow] = useState(false)
  const [closeStarting, setCloseStarting] = useState(false)

  const backgroundEl = useRef(null)

  const className = [
    'modalBackground',
    show ? 'modalBackground_show' : '',
    closeStarting ? 'modalBackground_close-starting' : '',
  ]

  useEffect(() => {
    const res = fetch(`/api/sessionClient`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => {
      if (!res.ok) {
        console.error(res)
      }
    })
  }, [])


  return <nav>

    <div className="container">
      <Script strategy="afterInteractive">
        {`
          (function(w,d,n,c){w.CalltouchDataObject=n;w[n]=function(){w[n]["callbacks"].push(arguments)};if(!w[n]["callbacks"]){w[n]["callbacks"]=[]}w[n]["loaded"]=false;if(typeof c!=="object"){c=[c]}w[n]["counters"]=c;for(var i=0;i<c.length;i+=1){p(c[i])}function p(cId){var a=d.getElementsByTagName("script")[0],s=d.createElement("script"),i=function(){a.parentNode.insertBefore(s,a)},m=typeof Array.prototype.find === 'function',n=m?"init-min.js":"init.js";s.async=true;s.src="https://mod.calltouch.ru/"+n+"?id="+cId;if(w.opera=="[object Opera]"){d.addEventListener("DOMContentLoaded",i,false)}else{i()}}})(window,document,"ct","1oroglta");
        `}
      </Script>
    </div>

    <ul className="bar">
      <li className="menuEL">
        <Link href={'/'}>
          <a rel="noopener noreferrer"><div className="label"></div></a>
        </Link>
      </li>
      <li className="menuEL" id="catalog">
        <span>Каталог </span>
        <ul className="bottomUl">
          <Link href={'/catalog/new-car'}>
            <a rel="noopener noreferrer"> <li className="f">Автомобили в наличии</li></a>
          </Link>
          <Link href={'/catalog/used-car'}>
            <a rel="noopener noreferrer"> <li className="f">Автомобили с пробегом</li></a>
          </Link>
          <Link href={'/catalog/tradein'}>
            <a rel="noopener noreferrer"> <li className="f">Онлайн-оценка автомобиля</li></a>
          </Link>
          <Link href={'/catalog/special-offers'}>
            <a rel="noopener noreferrer"> <li className="f">Специальные предложения</li></a>
          </Link>
        </ul>
      </li>
      <li className="menuEL" id="catalog">
        <span>Услуги</span>
        <ul className="bottomUl">
          {/* <Link href={'/catalog/new-car'}>
            <li className="f">Кредитный калькулятор</li>
          </Link> */}
          <Link href={'/services/insurance'}>
            <a rel="noopener noreferrer">  <li className="f">Страхование</li></a>
          </Link>
          {/* <Link href={'/services/insurance'}>
            <li className="f">Выкуп автомобилей</li>
          </Link> */}
          <Link href={'/services/accident-assistant'}>
            <a rel="noopener noreferrer">  <li className="f">Аварийный комиссар</li></a>
          </Link>
          <Link href={'/services/number-for-cars'}>
            <a rel="noopener noreferrer"> <li className="f">Изготовление номерных знаков</li></a>
          </Link>
        </ul>
      </li>

      <li className="menuEL" id="catalog">
        <span>Владельцам</span>
        <ul className="bottomUl">
          <Link href={'/catalog/special-offers'}>
            <a rel="noopener noreferrer"> <li className="f">Спец предложения сервиса</li></a>
          </Link>
          <Link href={'/car-repair/service-form'}>
            <a rel="noopener noreferrer"> <li className="f">Сервис</li></a>
          </Link>
          <Link href={'https://ckr.arkont.ru/'}>
            <a rel="noopener noreferrer">  <li className="f">Кузовной ремонт</li></a>
          </Link>
          <Link href={'https://gbo.arkont.ru/'}>
            <a rel="noopener noreferrer">  <li className="f">Перевод авто на газ</li></a>
          </Link>
          <Link href={'/services/tires'}>
            <a rel="noopener noreferrer">  <li className="f">Шиномонтаж</li></a>
          </Link>
          <Link href={'/services/special'}>
            <a rel="noopener noreferrer"> <li className="f">Дисконтная программа SPECIAL</li></a>
          </Link>
        </ul>
      </li>
      <li className="menuEL" >
        <Link href={'/job/joball'}><a rel="noopener noreferrer"><span>Вакансии</span></a></Link>
      </li>
      <li className="menuEL" id="catalog">
        <span>О компании</span>
        <ul className="bottomUl">
          <Link href={'/company/contact'}>
            <a rel="noopener noreferrer">   <li className="f">Контакты</li> </a>
          </Link>
          <Link href={'/company/protection'}>
            <a rel="noopener noreferrer">  <li className="f">Охрана труда</li> </a>
          </Link>
          <Link href={'/company/send'}>
            <a rel="noopener noreferrer">  <li className="f">Напишите нам</li> </a>
          </Link>
        </ul>
      </li>
      {/* <li className="menuEL">
            <a onClick={(e) => {
              e.preventDefault()
              refs.refContact.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }}><span>КОНТАКТЫ</span></a>
          </li> */}
      {/* <li className="menuEL">
            <a href="tel:+78442222222"><span>+7(8442)22-70-72</span></a>
          </li> */}
    </ul >



    <style jsx>{`

    .bar {
        justify-content: center;
        gap:60px; 
        font-family: 'Roboto','sans-serif'; 
        border-bottom: 1px solid #0e0d0d;   
        font-size:21px;
        width: 100%;
        background-color:white;
        border:none;
        z-index:9999;
        margin-top:0;
        display:flex;
        align-items:center;
        height: 92px;
        color:black;
        top:0;
        border-bottom: 1px solid #eaeae6;
        -webkit-box-shadow: 1px 18px 8px -14px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 1px 18px 8px -14px rgba(34, 60, 80, 0.2);
        box-shadow: 1px 18px 8px -14px rgba(34, 60, 80, 0.2);
      }

      ul {
        justify-content: center;
        font-family: 'Roboto','sans-serif'; 
        border-bottom: 1px solid #0e0d0d;   
        font-size:18px;
        width: 100%;
        background-color:white;
        border:none;
        z-index:9999;
        margin-top:0;
        display:flex;
        align-items:center;
        height: 92px;
        color:black;
        top:0;
      }

      .f{
        margin-top:5px;
        cursor: pointer;
      }
      
      .f:hover {
        color:#fdb913;;
      }
       
      .label {
        width: 200px;
        height: 40px;
        background-image: url('${label.src}');
        background-repeat:no-repeat;
        background-size:contain;
      }

      .menu {
        display: flex;
      }
  
      .menuEL {
        display:flex;
        justify-content:center;
        list-style: none;
        transition: 0.4s linear;
        position:relative;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
      }


      a{
        text-decoration: none;
        color:black;
      }

      span::after{
        position:absolute;
        content:"";
        width:0%;
        height:1.7px;
        background-color:#fdb913;
        left:50%;
        bottom:-1px;  
        transition:all 0.3s ease-in-out;
      }

      span:hover {
        cursor:pointer;
        transform:scale(1.04);
        transition:0.2s;
      }

      a:hover {
        cursor:pointer;
        transform:scale(1.04);
        transition:0.2s;
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
      
      #catalog:hover .bottomUl {
        display: flex;
      }

      .f:hover .bottomUl{
         display: flex;
      }

      .bottomUl {
        display: none;
        flex-direction: column;        
        align-items: start;
        justify-content: start;
        margin-top:35px;
        width: 220px;
        height: auto;
        list-style: none;
        font-size: 16px;
        position: absolute;
        transition: 0.2s;
      }
       
    

      @media(max-width: 1000px) {
        ul {
          display:none;
        z-index:none;
        }
        .bar {
          display: flex;
        }

      }
    @media(max-width: 900px) {
      .bar {
          display: none;
        }
     
}
    `}</style>
  </nav >
}