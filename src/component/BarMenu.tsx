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
            <div className="logo"></div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingLeft: '0' }}>
          <Typography sx={{ fontFamily: 'TacticSans-Reg', fontSize: '18px',color:"#005baa" }}>
            <ul className={"menu"}>
              <li className={"menuEl"}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography sx={{ fontFamily: 'TacticSans-Reg', fontSize: '18px',color:"#005baa" }}>Каталог</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="menu">
                      <li className="barTwoLevel">Автомобили в наличии</li>
                      <li className="barTwoLevel">Автомобили с пробегом</li>
                      <li className="barTwoLevel">Онлайн-оценка автомобиля</li>
                      <li className="barTwoLevel">Специальные предложения</li>
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
                    <Typography sx={{ fontFamily: 'TacticSans-Reg', fontSize: '18px',color:"#005baa" }}>Услуги</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="menu">
                      <li className="barTwoLevel">Кредитный калькулятор</li>
                      <li className="barTwoLevel">Страхование</li>
                      <li className="barTwoLevel">Выкуп автомобилей</li>
                      <li className="barTwoLevel">Аварийный комиссар</li>
                      <li className="barTwoLevel">Изготовление номерных знаков</li>
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
                    <Typography sx={{ fontFamily: 'TacticSans-Reg', fontSize: '18px',color:"#005baa" }}>Владельцам</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="menu">
                      <li className="barTwoLevel">Специальные предложения сервиса</li>
                      <li className="barTwoLevel">Сервис</li>
                      <li className="barTwoLevel">Кузовной ремонт</li>
                      <li className="barTwoLevel">Перевод авто на газ</li>
                      <li className="barTwoLevel">Продать авто</li>
                      <li className="barTwoLevel">Арконт SPECIAL</li>
                      <li className="barTwoLevel">Шиномонтаж</li>
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
                    <Typography sx={{ fontFamily: 'TacticSans-Reg', fontSize: '18px',color:"#005baa" }}>
                      Работа в Арконт
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="menu">
                      <li className="barTwoLevel"><Link href={'/job/joball'}><span>Вакансии</span></Link></li>
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
                    <Typography sx={{ fontFamily: 'TacticSans-Reg', fontSize: '18px',color:"#005baa" }}>
                      О компании
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="menu">
                      <li className="barTwoLevel"><Link href={'/job/joball'}><span>Контакты</span></Link></li>
                      <li className="barTwoLevel"><Link href={'/job/joball'}><span>Охрана труда</span></Link></li>
                      <li className="barTwoLevel"><Link href={'/job/joball'}><span>Напишите нам</span></Link></li>
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
@media(min-width: 700px) {
    .bar {
      display:none;
    }
}

@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Dongle&family=Montserrat&family=Roboto:wght@300;400;500;700&display=swap');



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


@media(max-width: 500px) {
  .span {
      margin-top: 5px;
}
ul {
    font-size:20px;
}
}
@media(max-width: 200px) {
  .span {
      margin-top: 5px;
}

}
`}</style>
    </div>

  );
}



