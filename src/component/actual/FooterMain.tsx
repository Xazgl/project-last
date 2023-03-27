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



  function showModal(event) {
    event.preventDefault()
    setShowTradeInModal(true)
  }

  //MUI
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);

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
                <span className="descEl"><a href="tel:+78442200895" style={{ textDecoration: 'none', color: '#fdb913' }} >+7 (844) 220-08-95</a></span>
              </div>
            </div>
          </Link>
        </div>
        <div className="column">
          <Link href={'/car-repair/service-form'}>
            <div className="el">СЕРВИС АРКОНТ</div>
          </Link>
          <div className="el" onClick={showModal}>TRADE-IN</div>
        </div>
        <div className="column">
          <Link href={'/job/joball'}>
            <div className="el">ВАКАНСИИ</div>
          </Link>
          <Link href={'/services/special'}>
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
              <Link href={'/company/send'}>
                <ListItemText primary="Написать нам" />
              </Link>
            </ListItemButton>


            <ListItemButton onClick={Job}>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <Link href={'/job/joball'}>
                <ListItemText primary="Вакансии" />
              </Link>
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
                  <Link href={'/car-repair/service-form'}>
                    <ListItemText primary="Записаться" />
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <CurrencyRubleIcon />
                  </ListItemIcon>
                  <Link href={'/catalog/special-offers'}>
                    <ListItemText primary="Акции" />
                  </Link>
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
                  <Link href={'/catalog/tradein'}>
                    <ListItemText primary="Trade-in" />
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <CurrencyRubleIcon />
                  </ListItemIcon>
                  <Link href={'/catalog/special-offers'}>
                    <ListItemText primary="Акции" />
                  </Link>
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
        background-color: #181b1d;

       
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
      }

      .column {
        display:flex;
        flex-direction:column;
        font-size: 16px;
        width: 200px;
        font-family: 'Roboto','sans-serif'; ;
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
        color:white;
        font-size: 15px;
        cursor: pointer;
        font-family: 'Roboto','sans-serif'; 
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
          height: auto;
          background-color:white;
          border-top: 1px solid #eaeae6;
          -webkit-box-shadow: 0px -22px 8px -9px rgba(34, 60, 80, 0.18);
          -moz-box-shadow: 0px -22px 8px -9px rgba(34, 60, 80, 0.18);
          box-shadow: 0px -22px 8px -9px rgba(34, 60, 80, 0.18);
          margin-top:30px;
          padding-top: 10px;
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