import { Button } from "@mui/material";
import Link from "next/link";
import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from "react";
// import styles from "./Menu.module.css";
import label from '/public/images/label2.png'
import DehazeIcon from '@mui/icons-material/Dehaze';
import Script from "next/script";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BarChartIcon from '@mui/icons-material/BarChart';

const hundler = (event: React.SyntheticEvent) => {
  console.log('Click');
  event.preventDefault()
}

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>
}

export function MenuBarNew({ setShowModal }: Props) {

  const [show, setShow] = useState(false)
  const [closeStarting, setCloseStarting] = useState(false)

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const showDropdown = () => {
    setIsDropdownVisible(true);
  };

  const hideDropdown = () => {
    setIsDropdownVisible(false);
  };

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

  function showModal() {
    event.preventDefault()
    setShowModal(true)
  }


  

  const [hoveblackItemId, setHoveblackItemId] = useState(null);
  let timeoutId;
  
  const handleMouseEnter = (itemId) => {
    clearTimeout(timeoutId);
    setHoveblackItemId(itemId);
  };
  
  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setHoveblackItemId(null);
    }, 400);
  };

  return <nav>
    <div className='background'>
      <div className='content'>
        <div className="container">
          <Script strategy="afterInteractive" id="calltouch-script">
            {`
          (function(w,d,n,c){w.CalltouchDataObject=n;w[n]=function(){w[n]["callbacks"].push(arguments)};if(!w[n]["callbacks"]){w[n]["callbacks"]=[]}w[n]["loaded"]=false;if(typeof c!=="object"){c=[c]}w[n]["counters"]=c;for(var i=0;i<c.length;i+=1){p(c[i])}function p(cId){var a=d.getElementsByTagName("script")[0],s=d.createElement("script"),i=function(){a.parentNode.insertBefore(s,a)},m=typeof Array.prototype.find === 'function',n=m?"init-min.js":"init.js";s.async=true;s.src="https://mod.calltouch.ru/"+n+"?id="+cId;if(w.opera=="[object Opera]"){d.addEventListener("DOMContentLoaded",i,false)}else{i()}}})(window,document,"ct","1oroglta");
        `}
          </Script>
        </div>
        <ul className="barMini">
          <div className="columBar">
            <li className="menuEL">
              <Link href={'https://yandex.ru/maps/38/volgograd/search/арконт/filter/chain_id/3983845841/?ll=44.569402%2C48.726965&sll=44.516979%2C48.707068&sspn=0.344696%2C0.142698&z=11'}>
                <a rel="noopener noreferrer">
                  <button className='btnMenu' >
                    <AddLocationAltIcon sx={{ color: '#D1AC02 ' }} /> Волгоград
                  </button>
                </a>
              </Link>
            </li>
          </div>
          <div className="columBar" style={{ justifyContent: 'end', gap: '40px' }}>
            <li className="menuEL">
              <Link href={'tel:+78442292505'}>
                <a rel="noopener noreferrer">
                  <button className='btnMenu' >
                    <LocalPhoneIcon sx={{ color: '#D1AC02', fontSize: '14px' }} /> +7 (8442) 29 25 05
                  </button>
                </a>
              </Link>
            </li>
            <li className="menuEL">
              <button className='btnMenu' onClick={showModal}>Заказать звонок<SearchIcon sx={{ color: '#D1AC02', fontSize: '14px' }} /></button>
            </li>
          </div>
        </ul>

        <ul className="bar"
        >
          <li className="menuEL">
            <Link href={'/'}>
              <a rel="noopener noreferrer"><div className="label"></div></a>
            </Link>
          </li>
          <li className="menuEL" id="catalog" onMouseEnter={() => handleMouseEnter('catalog')}
          onMouseLeave={handleMouseLeave}>
            <span>Каталог </span>
            <ul className={`bottomUl ${hoveblackItemId === 'catalog' ? 'show' : ''}`}>
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
          <li className="menuEL" id="catalog"  onMouseEnter={() => handleMouseEnter('catalog')}
          onMouseLeave={handleMouseLeave} >
            <span>Услуги</span>
            <ul className={`bottomUl ${hoveblackItemId === 'catalog' ? 'show' : ''}`}>
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
          <li className="menuEL" >
            {/* <Link href={'/catalog/compare-cars'}><a rel="noopener noreferrer"><BarChartIcon /><span>Сравнение</span></a></Link> */}
            <Link href={'/catalog/compare-cars'}>
              <button className='btnMenu' >
                <BarChartIcon sx={{ color: '#D1AC02', fontSize: '14px' }} /> Сравнение
              </button>
            </Link >
          </li>

          <li className="menuEL" >
            <Link href={'/catalog/favorite-cars'}>
              <button className='btnMenu' >
                <BookmarkIcon sx={{ color: '#D1AC02', fontSize: '14px' }} /> Избранное
              </button>
            </Link >
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
      </div>
    </div>


    <style jsx>{`

    .barMini{
      width: 100%;
      top:0;
      z-index:9999;
      margin-top:0;
      height: 60px;
      margin-bottom: 0px;
      border-bottom: solid 2px #bebebe ;
      justify-content: start;

    }

    .columBar{
      display: flex;
      width: 50%;
      align-items: center;
    }

    .bar {
        justify-content: space-between;
        font-family: 'Gilroy','sans-serif'; 
        border-bottom: 1px solid #0e0d0d;   
        font-size:16px;
        width: 100%;
        border:none;
        z-index:9999;
        margin-top:0;
        display:flex;
        align-items:center;
        height: 60px;
        color:black;
        top:0;
      }

      .city {
       font-size:16px;
       font-family: 'Gilroy','sans-serif'; 
      }

      ul {
        justify-content: center;
        font-family: 'Gilroy','sans-serif'; 
        border-bottom: 1px solid #0e0d0d;   
        font-size:18px;
        width: 100%;
        background-color:  #131313;
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
        color:#D1AC02;;
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
        color:white;
      }


      a{
        text-decoration: none;
        color:white;
      }

      span::after{
        position:absolute;
        content:"";
        width:0%;
        height:1.7px;
        background-color:#D1AC02;
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
        z-index: 9999;
      }

      .bottomUl.show {
        display: flex;
      }

      .btnMenu {
        border: none;
        background-color: transparent;
        color: white;
        text-align: center;
        font-family: 'Gilroy','sans-serif'; 
        display: flex;
        justify-content: center;
        gap:5px;
        align-items: center;
        cursor: pointer;
      }
       
      .background {
            display: flex; 
            justify-content: center;
            width: '100%' ;
            background-color: #131313;
          }
  
          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 1179px; 
          }

          @media(max-width: 1300px) {
            .content {  
              width: 970px; 
            }
          }

          @media(max-width: 900px) {
            .content{  
              width: 640px; 
            }
          }

          @media(max-width: 640px) {
            .content{  
              width: 450px; 
            }
          }    
          
          @media(max-width: 450px) {
            .content{  
              width: 360px; 
            }
          }

          @media(max-width: 360px) {
            .background {
              padding-left: 10px;
              padding-right: 10px;
            }
            .content{  
              width:90%; 
            }
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
    @media(max-width: 1000px) {
      .bar {
          display: none;
      }
      .background {
        display: none;
      }
     
}
    `}</style>
  </nav >
}