import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from "next/link";
import label from '/public/images/label.png'
import DehazeIcon from '@mui/icons-material/Dehaze';


export default function BarMenu() {
  return (
    <div className='bar'>
      <Accordion sx={{padding:'0px'}}>
        <AccordionSummary
          expandIcon={<DehazeIcon  />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ width: '100%' }}

        >
          <Typography sx={{ fontFamily: 'Roboto' }}>
            <Link href={'/'}>
              <div className="logo"></div>
            </Link>
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '0' }}>
          <Typography sx={{ fontFamily: 'Roboto', fontSize: '18px', color: 'white' }}>
            <ul className={"menu"}>
              <li className={"menuEl"}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ backgroundColor: '#005baa' }}
                  >
                    <Typography sx={{ fontFamily: 'Roboto', fontSize: '18px', color: 'white' }}>Каталог</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="menu">
                      <Link href={'/catalog/new-car'}>
                      <a rel="noopener noreferrer"> <li className="barTwoLevel">Автомобили в наличие</li></a>
                      </Link>
                      <Link href={'/catalog/used-car'}>
                      <a rel="noopener noreferrer">   <li className="barTwoLevel">Автомобили с пробегом</li></a>
                      </Link>
                      <Link href={'/catalog/tradein'}>
                      <a rel="noopener noreferrer">  <li className="barTwoLevel">Онлайн-оценка автомобиля</li></a>
                      </Link>
                      <Link href={'/catalog/special-offers'}>
                      <a rel="noopener noreferrer">  <li className="barTwoLevel">Специальные предложения</li></a>
                      </Link>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
              <li className={"menuEl"}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ backgroundColor: '#005baa' }}
                  >
                    <Typography sx={{ fontFamily: 'Roboto', fontSize: '18px', color: 'white' }}>Услуги</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="menu">
                      {/* <Link href={'/catalog/new-car'}>
                        <li className="barTwoLevel">Кредитный калькулятор</li>
                      </Link> */}
                      <Link href={'/services/insurance'}>
                      <a rel="noopener noreferrer">  <li className="barTwoLevel">Страхование</li></a>
                      </Link>
                      {/* <li className="barTwoLevel">Выкуп автомобилей</li> */}
                      <Link href={'/services/accident-assistant'}>
                      <a rel="noopener noreferrer">  <li className="barTwoLevel">Аварийный комиссар</li></a>
                      </Link>
                      <Link href={'/services/number-for-cars'}>
                      <a rel="noopener noreferrer">  <li className="barTwoLevel">Изготовление номерных знаков</li></a>
                      </Link>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
              <li className={"menuEl"}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ backgroundColor: '#005baa' }}
                  >
                    <Typography sx={{ fontFamily: 'Roboto', fontSize: '18px', color: 'white' }}>Владельцам</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="menu">
                      <Link href={'/catalog/special-offers'}>
                      <a rel="noopener noreferrer">  <li className="barTwoLevel">Специальные предложения сервиса</li></a>
                      </Link>
                      <Link href={'/car-repair/service-form'}>
                      <a rel="noopener noreferrer">  <li className="barTwoLevel">Сервис</li></a>
                      </Link>
                      <Link href={'https://ckr.arkont.ru/'}>
                      <a rel="noopener noreferrer">  <li className="barTwoLevel">Кузовной ремонт</li></a>
                      </Link>
                      <Link href={'https://gbo.arkont.ru/'}>
                      <a rel="noopener noreferrer">  <li className="barTwoLevel">Перевод авто на газ</li></a>
                      </Link>
                      <Link href={'/services/special'}>
                      <a rel="noopener noreferrer">  <li className="barTwoLevel">Арконт SPECIAL</li></a>
                      </Link>
                      <Link href={'/services/tires'}>
                      <a rel="noopener noreferrer">  <li className="barTwoLevel">Шиномонтаж</li></a>
                      </Link>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
              <li className={"menuEl"}>
                <Accordion >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ backgroundColor: '#005baa' }}
                  >
                    <Typography sx={{ fontFamily: 'Roboto', fontSize: '18px', color: 'white' }}>
                      Работа в Арконт
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="menu">
                      <Link href={'/job/joball'}>
                      <a rel="noopener noreferrer">   <li className="barTwoLevel"><span>Вакансии</span></li></a>
                      </Link>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
              <li className={"menuEl"}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ backgroundColor: '#005baa' }}
                  >
                    <Typography sx={{ fontFamily: 'Roboto', fontSize: '18px', color: 'white' }}>
                      О компании
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="menu">
                      <Link href={'/company/contact'}>
                      <a rel="noopener noreferrer">      <li className="barTwoLevel"><span>Контакты</span></li></a>
                      </Link>
                      <Link href={'/company/protection'}>
                      <a rel="noopener noreferrer">     <li className="barTwoLevel"><span>Охрана труда</span></li></a>
                      </Link>
                      <Link href={'/company/send'}>
                      <a rel="noopener noreferrer">    <li className="barTwoLevel"><span>Напишите нам</span></li></a>
                      </Link>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
              <li className="menuEL" id="phone">
                <a href="tel:+78442222222"><span className='span'>+7(8442)22-22-22</span></a>
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <style jsx>{`


@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Dongle&family=Montserrat&family=Roboto:wght@300;400;500;700&display=swap');


.bar {
  display: block;
  width: 100%;
}

.title {
  display: flex;
  flex-direction:row;
  font-family: 'Roboto','sans-serif'; 
}
.menu {
    display: flex;
    flex-direction:row;
    flex-direction:column;
    align-items: start;
}

.menuEl {
    list-style: none;
  
}

#phone{
  display: flex;
  flex-direction: start;
  margin-top:20px;
}

a{
  text-decoration: none;
        color:black;
  }
  
ul {
    font-family: 'Roboto','sans-serif'; 
    border-bottom: 1px solid #eaeaea;   
    font-size:20px;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    width: 100%;
    justify-content: center;
}


.span {
      width: 100%;
      display: inline-block;
      text-align: center;
      margin-top: 10px;
      color:#005baa;
      padding-left:10px;
}

li {
    list-style: none;
    margin-top: 3px;
    width: 100%;
}

.logo {
  width: 200px;
        height: 40px;
        background-image: url('${label.src}');
        background-repeat:no-repeat;
        background-size:contain;
}

.barTwoLevel {
  font-size: 16px;
}


@media(min-width: 1000px) {
    .bar {
      display:none;
    }
  
}

@media(max-width: 500px) {
  .span {
      margin-top: 5px;
}
.barTwoLevel{
      color:#776969;
    }
ul {
    font-size:20px;
}
}
@media(max-width: 260px) {
  .span {
      margin-top: 5px;
  }
  .barTwoLevel {
     font-size: 14px;
  } 

}
`}</style>
    </div >

  );
}



