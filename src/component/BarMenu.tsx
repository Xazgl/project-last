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
      <Accordion>
        <AccordionSummary
          expandIcon={<DehazeIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ width: '100%' }}

        >
          <Typography sx={{ fontFamily: 'TacticSans-Reg' }}>
            <Link href={'/'}>
              <div className="logo"></div>
            </Link>
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingLeft: '0' }}>
          <Typography sx={{ fontFamily: 'TacticSans-Reg', fontSize: '18px', color: "#005baa" }}>
            <ul className={"menu"}>
              <li className={"menuEl"}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography sx={{ fontFamily: 'TacticSans-Reg', fontSize: '18px', color: "#005baa" }}>Каталог</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="menu">
                      <Link href={'/catalog/new-car'}>
                        <li className="barTwoLevel">Автомобили в наличии</li>
                      </Link>
                      <Link href={'/catalog/used-car'}>
                        <li className="barTwoLevel">Автомобили с пробегом</li>
                      </Link>
                      <Link href={'/catalog/tradein'}>
                        <li className="barTwoLevel">Онлайн-оценка автомобиля</li>
                      </Link>
                      <Link href={'/catalog/special-offers'}>
                        <li className="barTwoLevel">Специальные предложения</li>
                      </Link>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
              <li className={"menuEl"}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography sx={{ fontFamily: 'TacticSans-Reg', fontSize: '18px', color: "#005baa" }}>Услуги</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="menu">
                      {/* <Link href={'/catalog/new-car'}>
                        <li className="barTwoLevel">Кредитный калькулятор</li>
                      </Link> */}
                      <Link href={'/services/insurance'}>
                        <li className="barTwoLevel">Страхование</li>
                      </Link>
                      {/* <li className="barTwoLevel">Выкуп автомобилей</li> */}
                      <Link href={'/services/accident-assistant'}>
                        <li className="barTwoLevel">Аварийный комиссар</li>
                      </Link>
                      <Link href={'/services/number-for-cars'}>
                        <li className="barTwoLevel">Изготовление номерных знаков</li>
                      </Link>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
              <li className={"menuEl"}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography sx={{ fontFamily: 'TacticSans-Reg', fontSize: '18px', color: "#005baa" }}>Владельцам</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="menu">
                      <Link href={'/catalog/special-offers'}>
                        <li className="barTwoLevel">Специальные предложения сервиса</li>
                      </Link>
                      <Link href={'/car-repair/service-form'}>
                        <li className="barTwoLevel">Сервис</li>
                      </Link>
                      <Link href={'https://ckr.arkont.ru/'}>
                        <li className="barTwoLevel">Кузовной ремонт</li>
                      </Link>
                      <Link href={'https://gbo.arkont.ru/'}>
                        <li className="barTwoLevel">Перевод авто на газ</li>
                      </Link>
                      <Link href={'/services/special'}>
                        <li className="barTwoLevel">Арконт SPECIAL</li>
                      </Link>
                      <Link href={'/services/tires'}>
                        <li className="barTwoLevel">Шиномонтаж</li>
                      </Link>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
              <li className={"menuEl"}>
                <Accordion >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography sx={{ fontFamily: 'TacticSans-Reg', fontSize: '18px', color: "#005baa" }}>
                      Работа в Арконт
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="menu">
                      <Link href={'/job/joball'}>
                        <li className="barTwoLevel"><span>Вакансии</span></li>
                      </Link>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
              <li className={"menuEl"}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography sx={{ fontFamily: 'TacticSans-Reg', fontSize: '18px', color: "#005baa" }}>
                      О компании
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="menu">
                      <Link href={'/company/contact'}>
                        <li className="barTwoLevel"><span>Контакты</span></li>
                      </Link>
                      <Link href={'/company/protection'}>
                        <li className="barTwoLevel"><span>Охрана труда</span></li>
                      </Link>
                      <Link href={'/company/send'}>
                        <li className="barTwoLevel"><span>Напишите нам</span></li>
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
  font-family: 'TacticSans-Reg','sans-serif'; 
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


ul {
    font-family: 'OpelNextW01-Regular'; 
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


@media(min-width: 800px) {
    .bar {
      display:none;
    }
}

@media(max-width: 500px) {
  .span {
      margin-top: 5px;
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



