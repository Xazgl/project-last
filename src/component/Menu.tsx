import { Button } from "@mui/material";
import Link from "next/link";
import { MutableRefObject, useEffect, useRef, useState } from "react";
// import styles from "./Menu.module.css";
import label from '/public/images/label.png'
import DehazeIcon from '@mui/icons-material/Dehaze';


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
    <ul className="bar">
      <li className="menuEL">
        <Link href={'/'}>
          <div className="label"></div>
        </Link>
      </li>
      <li className="menuEL" id="catalog">
        <span>Каталог </span>
        <ul className="bottomUl">
          <Link href={'/catalog/new-car'}>
            <li className="f">Автомобили в наличии</li>
          </Link>
          <Link href={'/catalog/used-car'}>
            <li className="f">Автомобили с пробегом</li>
          </Link>
          <Link href={'/catalog/tradein'}>
            <li className="f">Онлайн-оценка автомобиля</li>
          </Link>
          <Link href={'/catalog/special-offers'}>
            <li className="f">Специальные предложения</li>
          </Link>
        </ul>
      </li>
      <li className="menuEL" id="catalog">
        <span>Услуги</span>
        <ul className="bottomUl">
          <Link href={'/catalog/new-car'}>
            <li className="f">Кредитный калькулятор</li>
          </Link>
          <Link href={'/services/insurance'}>
            <li className="f">Страхование</li>
          </Link>
          <Link href={'/services/insurance'}>
            <li className="f">Выкуп автомобилей</li>
          </Link>
          <Link href={'/services/accident-assistant'}>
            <li className="f">Аварийный комиссар</li>
          </Link>
          <Link href={'/services/number-for-cars'}>
            <li className="f">Изготовление номерных знаков</li>
          </Link>
        </ul>
      </li>

      <li className="menuEL" id="catalog">
        <span>Владельцам</span>
        <ul className="bottomUl">
          <Link href={'/catalog/special-offers'}>
            <li className="f">Спец предложения сервиса</li>
          </Link>
          <Link href={'/car-repair/service-form'}>
            <li className="f">Сервис</li>
          </Link>
          <Link href={'https://ckr.arkont.ru/'}>
            <li className="f">Кузовной ремонт</li>
          </Link>
          <Link href={'https://gbo.arkont.ru/'}>
            <li className="f">Перевод авто на газ</li>
          </Link>
          <Link href={'/services/tires'}>
            <li className="f">Шиномонтаж</li>
          </Link>
          <Link href={'/services/special'}>
            <li className="f">Дисконтная программа SPECIAL</li>
          </Link>
        </ul>
      </li>
      <li className="menuEL" >
        <Link href={'/job/joball'}><span>Вакансии</span></Link>
      </li>
      <li className="menuEL" id="catalog">
        <span>О компании</span>
        <ul className="bottomUl">
          <Link href={'/company/contact'}>
            <li className="f">Контакты</li>
          </Link>
          <Link href={'/company/protection'}>
            <li className="f">Охрана труда</li>
          </Link>
          <Link href={'/company/send'}>
            <li className="f">Напишите нам</li>
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
        font-family: 'TacticSans-Reg','sans-serif'; 
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
      }

      ul {
        justify-content: center;
        font-family: 'TacticSans-Reg','sans-serif'; 
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