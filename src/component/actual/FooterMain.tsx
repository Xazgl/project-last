import { Dispatch, MutableRefObject, SetStateAction, useState } from 'react'
import Link from 'next/link';
import label from '/public/images/label.png'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import WorkIcon from '@mui/icons-material/Work';
import CarRentalIcon from '@mui/icons-material/CarRental';
import router from "next/router";

type Footer = {
  setShowTradeInModal: Dispatch<SetStateAction<boolean>>,
  refs: {
    refFooter: MutableRefObject<HTMLDivElement>,
  }
}

export function FooterMain({ setShowTradeInModal, refs }: Footer) {

  function showModalTradeIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setShowTradeInModal(true)
  }

  //MUI
  const [open, setOpen] = useState(true);
  const [openTwo, setOpenTwo] = useState(true);

  const handleClickTwo = () => {
    setOpenTwo(!openTwo);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  async function Job() {

    router.push('/job/joball')
  }

  return (
    <>
      <div className="footer">
        <div className="columnLabel">
          <Link href="/">
            <div style={{ display: "flex", flexDirection: "row" }} >
              <div className="label"></div>
              <div className="labelDesc" >
                <span className="descEl">Автомобильная компания</span>
                <span className="descEl"><a href="tel:+78442200895"  >+7 (844) 220-08-95</a></span>
              </div>
            </div>
          </Link>
        </div>
        <div className="column">
          <Link href="/service">
            <div className="el">СЕРВИС АРКОНТ</div>
          </Link>
          <div className="el" onClick={(event) => showModalTradeIn()}>TRADE-IN</div>
        </div>
        <div className="column">
          <Link href="/servicePage">
            <div className="el">ВАКАНСИИ</div>
          </Link>
          <Link href="arkont.ru/owners/diskontnaia-programma-special">
            <div className="el">АРКОНТ SPECIAL</div>
          </Link>
        </div>
        <div className='miniFooter'>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">

              </ListSubheader>
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Написать нам" />
            </ListItemButton>

               
            <ListItemButton onClick={Job}>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Вакансии" />
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <DriveEtaIcon />
              </ListItemIcon>
              <ListItemText primary="Сервис" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <PhonelinkSetupIcon />
                  </ListItemIcon>
                  <ListItemText primary="Записаться" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <CurrencyRubleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Акции" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={handleClickTwo}>
              <ListItemIcon>
                <DriveEtaIcon />
              </ListItemIcon>
              <ListItemText primary="Владельцам" />
              {openTwo ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openTwo} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <CarRentalIcon />
                  </ListItemIcon>
                  <ListItemText primary="Trade-in" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <CurrencyRubleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Акции" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>

        </div>
      </div >

      <style jsx>{`
      .footer {
        display:flex;
        justify-content: start; 
        gap:100px;
        width: 100%;
        height: 170px;
        align-items: center;
      }

      .label {
        display:flex;
        background-position: center center;
        background-image: url('${label.src}');
        width: 300px;
        height: 70px;
        background-repeat: no-repeat;
        margin-right: 20px;
      }

      .labelDesc {
        display:flex;
        flex-direction:column;
        justify-content:center;
        transition: transform.3s ;
        color:#005baa;
      }

      .column {
        display:flex;
        flex-direction:column;
        font-family: 'TacticSans-Reg','sans-serif'; 
        font-size: 14px;
        width: 200px;
      }

      .descEl {
        color:#b6b6b6;;
      }

      .el {
        display:flex;
        justify-content:row;
        justify-content:center;
        margin-top:20px;
        transition: transform.3s ;
        color:#005baa;
        font-size: 15px;
      }
      
      .el:hover {
        transform: scale(1.02);
        color:#fdb913;
      }

      .miniFooter {
        display: none;
        width: 100%;
        height:auto;
        justify-content: center;
        align-items: center;
      }
      
      @media(max-width: 1000px) {
        .footer {
          gap:50px;
        }
        .column {
          display:flex;
          flex-direction:column;
          font-family: 'TacticSans-Reg','sans-serif'; 
          font-size: 14px;
          width: 90px;
          text-align: center;
        }
        .label {
          display:flex;
          background-position: center center;
          background-image: url('${label.src}');
          width: 200px;
          height: 70px;
          background-repeat: no-repeat;
          margin-right: 20px;
        }
      }
      @media(max-width: 700px) {
        .footer {
          flex-direction: column;
        }
        .column {
          display:none;
        }
        .miniFooter {
          display: flex;
        }
      }
    `}</style>
    </>
  )
}