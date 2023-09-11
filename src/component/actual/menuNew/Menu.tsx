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

  // Массив с данными элементов навигации
  const navItems = [
    {
      label: 'Каталог',
      subItems: [
        { label: 'Автомобили в наличии', link: '/brands/all' },
        { label: 'Автомобили с пробегом', link: '/brands/arkont-select' },
        { label: 'Онлайн-оценка автомобиля', link: '/catalog/tradein' },
        { label: 'Специальные предложения', link: '/catalog/special-offers' },
      ],
    },
    {
      label: 'Услуги',
      subItems: [
        { label: 'Страхование', link: '/services/insurance' },
        { label: 'Аварийный комиссар', link: '/services/accident-assistant' },
        { label: 'Изготовление номерных знаков', link: '/services/number-for-cars' },
      ],
    },
    {
      label: 'Владельцам',
      subItems: [
        { label: 'Спецпредложения сервиса', link: '/catalog/special-offers' },
        { label: 'Сервис', link: '/car-repair/service-form' },
        { label: 'Кузовной ремонт', link: 'https://ckr.arkont.ru/' },
        { label: 'Перевод авто на газ', link: 'https://gbo.arkont.ru/' },
        { label: 'Шиномонтаж', link: '/services/tires' },
        { label: 'Дисконтная программа SPECIAL', link: '/services/special' },
      ],
    },
    {
      label: 'Вакансии',
      link: '/job/joball',
    },
    {
      label: 'О компании',
      subItems: [
        { label: 'Контакты', link: '/company/contact' },
        { label: 'Охрана труда', link: '/company/protection' },
        { label: 'Напишите нам', link: '/company/send' },
      ],
    },
    {
      label: 'Сравнение',
      link: '/catalog/compare-cars',
      icon: <BarChartIcon sx={{ color: '#f9b518', fontSize: '14px' }} />,
    },
    {
      label: 'Избранное',
      link: '/catalog/favorite-cars',
      icon: <BookmarkIcon sx={{ color: '#f9b518', fontSize: '14px' }} />,
    },
  ];


  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);
  let timeoutId;

  const handleMouseEnter = (item) => {
    clearTimeout(timeoutId);
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setHoveredItem(null);
      setHoveredSubMenu(null); // Добавьте эту строку
    }, 300);
  };

  const handleSubMenuMouseEnter = (subItem) => {
    clearTimeout(timeoutId);
    setHoveredSubMenu(subItem);
  };

  const handleSubMenuMouseLeave = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setHoveredSubMenu(null);
    }, 20000);
  };

  // useEffect(() => {
  //  console.log(hoveredItem)
  // }, [hoveredItem])


  const logHoveredItem = () => {
    console.log(hoveredItem);
  };

  // useEffect(() => {
  //   logHoveredItem();
  // }, [hoveredItem]);

  // navItems.map((item, index) => (
  //   console.log(item.label) 
  // ))



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
                    <AddLocationAltIcon sx={{ color: '#f9b518 ' }} /> Волгоград
                  </button>
                </a>
              </Link>
            </li>
            <li className="menuEL">
              <Link href={'https://yandex.ru/maps/38/volgograd/search/арконт%20волжский/filter/chain_id/3983845841/?ll=44.630788%2C48.765211&sll=44.569402%2C48.726965&sspn=0.689392%2C0.285283&z=12'}>
                <a rel="noopener noreferrer">
                  <button className='btnMenu' >
                    <AddLocationAltIcon sx={{ color: '#f9b518 ' }} /> Волжский
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
                    <LocalPhoneIcon sx={{ color: '#f9b518', fontSize: '14px' }} /> +7 (8442) 29 25 05
                  </button>
                </a>
              </Link>
            </li>
            <li className="menuEL">
              <button className='btnMenu' onClick={showModal}>Заказать звонок<SearchIcon sx={{ color: '#f9b518', fontSize: '14px' }} /></button>
            </li>
          </div>
        </ul>

        <ul className="bar">
          <li className="menuEL">
            <Link href="/">
              <a rel="noopener noreferrer">
                <div className="label"></div>
              </a>
            </Link>
          </li>
          {navItems.map((item, index) => (
            <li
              key={index}
              className="menuEL"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {item.link ? (
                <Link href={item.link}>
                  <a rel="noopener noreferrer">
                    <span>{item.label}</span>
                  </a>
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
              {item.subItems && (

                <ul className={`bottomUl ${hoveredItem === item.label ? 'show' : ''}`}>
                  {item.subItems.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      // className={`f ${hoveredItem === item ? 'show' : ''}`}
                      className={`f ${hoveredItem === `bottomUl-${index}` ? 'show' : ''}`}
                      onMouseEnter={() => handleSubMenuMouseEnter(subItem.label)}
                      onMouseLeave={handleSubMenuMouseLeave}
                    >
                      <Link href={subItem.link}>
                        <a  className="f" rel="noopener noreferrer">{subItem.label}</a>
                      </Link>
                    </li>
                  ))}
                </ul>

              )}
            </li>
          ))}
        </ul>
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
        justify-content: space-between;;
        font-family: 'Roboto','sans-serif'; 
        border-bottom: 1px solid #0e0d0d;   
        font-size:16px;
        width: 100%;
        border:none;
        z-index:9999;
        margin-top:0;
        display:flex;
        align-items:center;
        height: 92px;
        color:black;
        top:0;
    }

    .city {
       font-size:16px;
       font-family: 'Roboto','sans-serif'; 
    }

    ul {
        justify-content: center;
        font-family: 'Roboto','sans-serif'; 
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
        color:white;
        z-index:9999;
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
        padding: 15px;
        border-radius: 3px;
        -webkit-box-shadow: 1px 2px 6px 5px rgba(34, 60, 80, 0.14);
        -moz-box-shadow: 1px 2px 6px 5px rgba(34, 60, 80, 0.14);
        box-shadow: 1px 2px 6px 5px rgba(34, 60, 80, 0.14); 
    }

    .bottomUl.show {
        display: flex;
    }

    .btnMenu {
        border: none;
        background-color: transparent;
        color: white;
        text-align: center;
        font-family: 'Roboto','sans-serif'; 
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