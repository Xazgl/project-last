import { Dispatch, MutableRefObject, SetStateAction, useState } from 'react'
import Link from 'next/link';
import label from '/public/images/label2.png'
import router from "next/router";
import { Box } from '@mui/material';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import ChatIcon from '@mui/icons-material/Chat';
import PhoneIcon from '@mui/icons-material/Phone';

type Footer = {
  setShowModal: Dispatch<SetStateAction<boolean>>,
  refs: {
    refFooter: MutableRefObject<HTMLDivElement>,
  }
}

export function FooterMainNew({ setShowModal, refs }: Footer) {



  function showModal(event) {
    event.preventDefault()
    setShowModal(true)
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
        <div className='background' >
          <div className='content' id="desk">
            <div className='row'>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'start', gap: '10px' }}>
                <Box sx={{ direction: 'flex', justifyContent: 'start' }}>
                  <div className="label">
                  </div>
                </Box>
                <Box sx={{ direction: 'flex', justifyContent: 'start'}}>
                  <Link href={'https://yandex.ru/maps/38/volgograd/search/арконт/filter/chain_id/3983845841/?ll=44.569402%2C48.726965&sll=44.516979%2C48.707068&sspn=0.344696%2C0.142698&z=11'}>
                    <button className='btnMenu' >
                      <AddLocationAltIcon sx={{ color: 'white ', fontSize: '14px' }} /> Волгоград
                    </button>
                  </Link>
                </Box>
                <Box sx={{ direction: 'flex', justifyContent: 'start' }}>
                  <button className='btnMenu' >
                    <LocalPhoneIcon sx={{ color: 'white', fontSize: '14px' }} /> +7 (8442) 29 25 05
                  </button>
                </Box>
              </Box>
              <Link href={'/brands/all'}>
                <a rel="noopener noreferrer">
                  <div className="el">
                    <span>
                      Автомобили в продаже
                    </span>
                  </div>
                </a>
              </Link>
              <Link href={'/car-repair/service-form'}>
                <a rel="noopener noreferrer">
                  <div className="el">
                    <span>
                      Запись на сервис
                    </span>
                  </div>
                </a>
              </Link>
              <Link href={'/job/joball'}>
                <a rel="noopener noreferrer">
                  <div className="el">
                    <span>
                      Вакансии
                    </span>
                  </div>
                </a>
              </Link>
              <Link href={'/company/contact'}>
                <a rel="noopener noreferrer">
                  <div className="el">
                    <span>
                      Контакты
                    </span>
                  </div>
                </a>
              </Link>
            </div>
            <div className='rowleft' >
              <div className='column' id="left">
                <Box sx={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
                  <Link href={'tg://resolve?domain=arkont_service/'}>
                    <a rel="noopener noreferrer">
                      <div className="circle">
                        <TelegramIcon />
                      </div>
                    </a>
                  </Link>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <div className="circle">
                    <ChatIcon />
                  </div>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'start', width: '100%' }}>
                  <div className="circle" onClick={showModal}>
                    <PhoneIcon />
                  </div>
                </Box>
              </div>
            </div>
          </div>
        </div >

        <div className='content' id="mob">
          <ul>
            <li>
              <div className="label"></div>
            </li>

            <li>
              <button className='btnMenu'>
                <LocalPhoneIcon sx={{ color: 'white', fontSize: '14px' }} /> +7 (8442) 29 25 05
              </button>
            </li>

            {/* <li>
              <Link href={'https://yandex.ru/maps/38/volgograd/search/арконт/filter/chain_id/3983845841/?ll=44.569402%2C48.726965&sll=44.516979%2C48.707068&sspn=0.344696%2C0.142698&z=11'}>
                <button className='btnMenu' >
                  <AddLocationAltIcon sx={{ color: '#D1AC02 ', fontSize: '14px' }} /> Волгоград
                </button>
              </Link>
            </li> */}

            <li>
              <Link href={'/brands/all'}>
                <a rel="noopener noreferrer">
                  <div className="el">
                    Автомобили в продаже
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/car-repair/service-form'}>
                <a rel="noopener noreferrer">
                  <div className="el">
                    Запись на сервис
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/job/joball'}>
                <a rel="noopener noreferrer">
                  <div className="el">
                    Вакансии
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/company/contact'}>
                <a rel="noopener noreferrer">
                  <div className="el">
                    Контакты
                  </div>
                </a>
              </Link>
            </li>
          </ul >
        </div >
      </div >

      <style jsx>{`
      .footer {
        display: flex;
        justify-content: center;
        width: 100%;
        height: auto;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
        bottom: 0;
        left: 0;
        right: 0;
        padding:20px;
        margin-top: 50px;
        
      }

      .background {
        display: flex; 
        justify-content: center;
        width: '100%' ;
        background-color: black;
        border-radius: 10px;
        padding: 20px;
      }

      #mob {
        display: none;
      }
  
      .content {
        display: flex;
        align-items: baseline;
        justify-content: start;
        width: 1179px; 
      }

      a{
        text-decoration: none;
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
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        color:  #131313;
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
        font-family: 'Gilroy','sans-serif'; 
        cursor: pointer;
      }

      .el::after{
        position:absolute;
        content:"";
        width:0%;
        height:1.7px;
        background-color:#D1AC02;
        left:50%;
        bottom:-1px;  
        transition:all 0.3s ease-in-out;
    }

    .el:hover {
        cursor:pointer;
        transform:scale(1.04);
        transition:0.2s;
    }

      .btnMenu{
        background-color: transparent;
        border:none;
        color:white;
        display: flex;
        justify-content: center;
        font-family: 'Gilroy','sans-serif';
        font-size: 14px;
        margin-top: 10px;
        gap:10px ;
      }
      ul {
        list-style: none;
        cursor: pointer;
      }

      button {
        cursor: pointer;
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
        transform:scale(1.01);
        transition:0.2s;
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
          width: 40px;
          height: 40px;
          font-size: 13px;
        }
      }    
      
      @media(max-width: 500px) {
        .content{  
          width:350px; 
        }
      }
      
      @media(max-width: 360px) {
        .background {
          padding-left: 10px;
          padding-right: 10px;
        }
        .content{  
          width:250px; 
          flex-direction: column;
        }

        .rowleft {
          width: auto;
        }

        #left {
          flex-direction: row;
          gap:15px;
        }

        .circle {
          margin-top: 20px;
        }
      }
      @media(max-width: 300px) {
        .label {
           width:150px;
        }

      }
    `}</style>
    </>
  )
}