import { Dispatch, MutableRefObject, SetStateAction, useState } from 'react'
import Link from 'next/link';
import label from '/public/images/label2.png'
import router from "next/router";
import { Box } from '@mui/material';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import res from '/public/images/catalogPages/footer/res.svg'

type Footer = {
  setShowTradeInModal: Dispatch<SetStateAction<boolean>>,
  refs: {
    refFooter: MutableRefObject<HTMLDivElement>,
  }
}

export function FooterMainNew({ setShowTradeInModal, refs }: Footer) {



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
        <div className='background'>
          <div className='content'>
            <div className='row'>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'start', gap: '10px' }}>
                <Box sx={{ direction: 'flex', justifyContent: 'start' }}>
                  <div className="label">
                  </div>
                </Box>
                <Box sx={{ direction: 'flex', justifyContent: 'start' }}>
                  <Link href={'https://yandex.ru/maps/38/volgograd/search/арконт/filter/chain_id/3983845841/?ll=44.569402%2C48.726965&sll=44.516979%2C48.707068&sspn=0.344696%2C0.142698&z=11'}>
                    <button className='btnMenu' >
                      <AddLocationAltIcon sx={{ color: '#f9b518 ', fontSize: '14px' }} /> Волгоград
                    </button>
                  </Link>
                </Box>
                <Box sx={{ direction: 'flex', justifyContent: 'start' }}>
                  <button className='btnMenu' >
                    <LocalPhoneIcon sx={{ color: '#f9b518', fontSize: '14px' }} /> +7 (8442) 29 25 05
                  </button>
                </Box>
              </Box>
              <div className="el">
                Автомобили в продаже
              </div>
              <div className="el">
                Запись на сервис
              </div>
              <div className="el">
                Услуги
              </div>
              <div className="el">
                Контакты
              </div>
            </div>
            <div className='rowleft' >
              <div className='column' id="left">
                <Box sx={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
                  <div className="circle">Telegram</div>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <div className="circle">Online-чат</div>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'start', width: '100%' }}>
                  <div className="circle">Звонок</div>
                </Box>
              </div>
            </div>
          </div>
        </div >
      </div >

      <style jsx>{`
      .footer {
        display:flex;
        justify-content: center; 
        width: 100%;
        height: auto;
        align-items: center;
        background-color: #0c54a0;
        padding-top: 10px;
        padding-bottom: 10px;
      }

      .background {
        display: flex; 
        justify-content: center;
        width: '100%' ;
        background-color:#0c54a0;
      }
  
      .content {
        display: flex;
        align-items: baseline;
        justify-content: start;
        width: 1179px; 
      }

      .label {
        display:flex;
        background-position: center center;
        background-image: url('${label.src}');
        width: 200px;
        height: 70px;
        background-repeat: no-repeat;
        margin-right: 20px;
        cursor: pointer;
      }

      .circle {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #f9b518;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #0c54a0;
        font-size: 13px;
        font-weight: bold;
        cursor: pointer;
      }

      .circle:hover {
        transform: scale(1.2) rotate(360deg);
        transition: 1s;
      }

      .row {
        display: flex;
        justify-content: start;
        align-items: center;
        width: 893px;
        justify-content: space-between;
      }

      .rowleft{
        display: flex;
        justify-content: start;
        align-items: center;
        width:277px;
        justify-content: space-between;
      }

      .column {
        display: flex;
        flex-direction: column;
        align-items:center ;
        gap:10px;
      }

      #left{
        padding-left: 40%;
        width: 100%;
        gap:0px;
      }

      .el{
        display: flex;
        justify-content: start;
        color:white;
        font-family: 'Roboto','sans-serif'; 
        cursor: pointer;
      }

      .btnMenu{
        background-color: transparent;
        border:none;
        color:white;
        display: flex;
        justify-content: center;
        font-family: 'Roboto','sans-serif';
        font-size: 14px;
        margin-top: 10px;
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
            .row{
              flex-direction: column;
              align-items: start;
              gap:10px;
            }
            .column {
              width: 40%;
            }
            .rowLeft {
              width: 60%;
              align-items: start;
            }
            #left {
              padding: 0px;
            }
          }

          @media(max-width: 640px) {
            .content{  
              width: 450px; 
            }
            .circle {
              width: 67px;
              height: 67px;
              font-size: 13px;
            }
          }    
          
          @media(max-width: 450px) {
            .content{  
              width: 360px; 
            }
            .rowLeft{
              display: none;
            }
            #left {
              display: none;
            }
            .row {
              width: 100%;
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
    `}</style>
    </>
  )
}