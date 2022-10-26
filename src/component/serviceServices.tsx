import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Dispatch, FormEvent, SetStateAction, useMemo, useState } from "react"

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  color: 'white',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  backgroundColor: 'rgb(18, 18, 18)',
  '& .MuiAccordionSummary-root': {
      borderBottom: '2px solid yellow'
  }
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
    // theme.palette.mode === 'light'
    //   ? 'rgba(255, 255, 255, .05)'
    //   : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
//   '& .MuiTypography-h4': {
//     fontSize: {
//         md: '25px',
//         xs: '20px'
//       }
//   },
  [theme.breakpoints.down('sm')]: {
    '& .MuiTypography-h4': {
        fontSize: '20px'
    }
  },
  [theme.breakpoints.up('sm')]: {
    '& .MuiTypography-h4': {
        fontSize: '25px'
    }
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function ServiceServices({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) {
        function showModal(event: FormEvent<HTMLFormElement>) {
            event.preventDefault()
            setShowModal(true)
        }

  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className='background'>
    <div className='container'>
        <div className='titlecontainer'>УСЛУГИ СЕРВИСА</div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant='h4' sx={{fontFamily:'OpelNextW01-Regular',fontSize:'25px'}}>Ремонт коробок передач</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
           <ul>
               <li>&#10003;   Замена масла от 1600 р.</li>
               <li>&#10003;   Адаптация от 2000 р.</li>
               <li>&#10003;   Обновление программного обеспечения от 1500 р.</li>
               <li>&#10003;  Ремонт АКПП по запросу </li>
               <form onSubmit={showModal}>
               <button className='btn'>Записаться</button>
               </form>
           </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{fontFamily: 'OpelNextW01-Regular',fontSize:'25px'}}>Ремонт выхлопной системы</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
               <li>&#10003;  Замена катализатора от 1 200 р.</li>
               <li>&#10003;  Замена глушителя от 1 500 р..</li>
               <li>&#10003;  Прошивка на Евро 2 от 4 000 р.</li>
               <li>&#10003;  Замена лямда-зонд от 600 р.</li>
               <form onSubmit={showModal}>
               <button className='btn'>Записаться</button>
               </form>
           </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography variant='h4' sx={{fontFamily:'OpelNextW01-Regular',fontSize:'25px'}}>Ремонт двигателей</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
               <li>&#10003;  Замена ГРМ от 5 000 р.</li>
               <li>&#10003;  Замена опоры двигателя от 500 р.</li>
               <li>&#10003;  Замена свечей зажигания от 800 р.</li>
               <li>&#10003;  Замер компрессии от 1 000 р.</li>
               <li>&#10003;  Замена маслосъемных колпачков от 6 100 р.</li>
               <li>&#10003;  Замена заднего сальника коленвала от 8 000 р.</li>
               <li>&#10003;  Замена заднего сальника коленвала от 8 000 р.</li>
               <li>&#10003;  Замена приводных ремней от 1 050 р.</li>
               <form onSubmit={showModal}>
               <button className='btn'>Записаться</button>
               </form>
           </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography sx={{fontFamily: 'OpelNextW01-Regular',fontSize:'25px'}}>Ремонт ходовой части</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
               <li>&#10003;  Замена стоек стабилизатора от 870 р.</li>
               <li>&#10003;  Замена шаровой опоры от 800 р.</li>
               <li>&#10003;  Замена амортизаторов (амортизационных стоек) от 1 590 р.</li>
               <li>&#10003;  Замена сайлентблоков от 1 000 р.</li>
               <li>&#10003;  Регулировка углов установки колес 1 200 р.</li>
               <li>&#10003;  Замена подшипника ступицы от 2 000 р.</li>
               <li>&#10003;  Замена/ремонт суппорта колес от 1 500 р.</li>
               <li>&#10003;  Замена рычагов подвески от 1 000 р.</li>
               <form onSubmit={showModal}>
               <button className='btn'>Записаться</button>
               </form>
           </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography sx={{fontFamily: 'OpelNextW01-Regular',fontSize:'25px'}}>Ремонт систем охлаждения</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
               <li>&#10003;  Замена охлаждающей жидкости от 1 000 р.</li>
               <li>&#10003;  Замена водяного насоса от 1 500 р.</li>
               <li>&#10003;  Замена термостата от 1 000 р.</li>
               <li>&#10003;  Мойка радиатора охлаждения от 4 000 р.</li>
               <li>&#10003;  Замена расширительного бачка от 520 р.</li>
               <li>&#10003;  Замена приводного ремня насоса охлаждающей жидкости от 1 000 р..</li>
               <li>&#10003;  Замена датчика температуры от 500 р.</li>
               <form onSubmit={showModal}>
               <button className='btn'>Записаться</button>
               </form>
           </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
             </div>
      <style jsx>{`
          .background{
            display:flex;
            justify-content:center;
            border-top:black;
            border-top: solid;
            margin-top:50px;
          }
          .title {
              display:flex;
              flex-direction:row;
              justify-content:center;
              align-items:center;
          }
          .container{
              margin-top:50px;
              margin-bottom:50px;
              display:flex;
              flex-direction:column;
          }
          .titlecontainer {
              display:flex;
              justify-content:center;
              margin-bottom:20px;
              font-size:30px;
              font-family: 'Montserrat';
              background-color:black;
              color:white;
          }
          li{
              font-size:18px;
              font-family: 'Montserrat';
              list-style: none;
          }
          .btn {
    font-family: 'Montserrat', sans-serif;
    border-radius: 3px;
    border:none;
    transition: transform.3s ;
    color: #ffffff;
    background-color: #48484d;
    width: 290px;
    height: 50px;
    font-size: 30px;
    margin-top:30px;
}



.btn:hover {
    background-color: #f7ff14;
    border: none;
    font-family: 'Montserrat', sans-serif;
    color:black;
    transform: scale(1.02);
    box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);
}
      `}</style>
    </div>
  );
}