import { NextPage } from "next"
import { AxiosError } from 'axios'
import AdminLayout from "../../src/component/admin/AdminLayout"
import { useRouter } from "next/router"
import { CircularProgress, Collapse, Link, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ModalImg } from "../../src/component/ModalImg"
import React from 'react';
import SellIcon from '@mui/icons-material/Sell';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const AdminTable: NextPage = () => {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [showModalImg, setShowModalImg] = useState(false)
  const [carImg, setCarImg] = useState('')
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const [data, setData] = useState(null)

  useEffect(() => {
    async function start() {
      const res = await fetch('/api/getSession', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
      })
      if (res.ok) {
        const answer = await res.json();
        setData(answer)
        console.log(data)
      } else {
        const host = process.env.NODE_ENV === 'production' ? process.env.HOST : 'http://localhost:3000'
        router.push(`${host}/admin/login`); // Здесь указываем URL страницы, на которую нужно выполнить редирект
      }
    }
    start()
  }, [])




  const AnimatedText = ({ text, interval }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, interval);

      return () => {
        clearTimeout(timeoutId);
      };
    }, [currentIndex, interval]);

    return (
      <>
        {text.substring(0, currentIndex)}
      </>

    );
  };




  return (
    <>
      {data && data.login ?
        <div style={{
          width: '100%', height: '40px', display: 'flex', justifyContent: 'start',
          backgroundColor: '#0c54a0', color: 'white', paddingLeft: '15px', alignItems: 'center',gap:'10px'
        }}>
          <Typography sx={{ fontSize: '16px',display:'flex' }} >
            <AccountCircleIcon sx={{ fontSize: '19px' }} />
          </Typography>
          <Typography sx={{ fontSize: '16px',display:'flex' }} >
            <AnimatedText text={`Добро пожаловать, ${data.login}`} interval={100} />
          </Typography>
        </div>
        :
        <div
          style={{
            display: 'flex', justifyContent: 'center',
            alignItems: 'center', width: '100%', height: '100vh',
          }}
        >
          <CircularProgress />
        </div>
      }
      {data && data.login ?
        <AdminLayout title="Аrkont Admin">
          <div className="background">
            <div className="block-admin-page">
              <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Выберите интересующий вас пункт
                  </ListSubheader>
                }
              >
                <Link href={'/admin/table/new-car'}>
                  <ListItemButton>
                    <ListItemIcon>
                      <DirectionsCarIcon />
                    </ListItemIcon>
                    <ListItemText primary="Новые Авто" />
                  </ListItemButton>
                </Link>

                <Link href={'/admin/table/used-cars'}>
                  <ListItemButton>
                    <ListItemIcon>
                      <DirectionsCarIcon />
                    </ListItemIcon>
                    <ListItemText primary="Авто с пробегом" />
                  </ListItemButton>
                </Link>

                <Link href={'/admin/table/offer'}>
                  <ListItemButton>
                    <ListItemIcon>
                      <SellIcon />
                    </ListItemIcon>
                    <ListItemText primary="Спецпредложения" />
                  </ListItemButton>
                </Link>

                <Link href={'/admin/table/client'}>
                  <ListItemButton>
                    <ListItemIcon>
                      <ContactPhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Заявки на обратный звонок" />
                  </ListItemButton>
                </Link>

                <Link href={'/admin/table/credit'}>
                  <ListItemButton>
                    <ListItemIcon>
                      <ContactPhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Заявки на кредит" />
                  </ListItemButton>
                </Link>


                <Link href={'/admin/table/jobs'}>
                  <ListItemButton>
                    <ListItemIcon>
                      <ContactPhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Вакансии" />
                  </ListItemButton>
                </Link>

              </List>
            </div>
          </div>
        </AdminLayout >
        :
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
          <CircularProgress />
        </div>
      }

      {
        showModal && <ModalImg carImg={carImg} showModalImg={showModalImg} setShowModalImg={setShowModalImg} />
      }

      <style jsx>{` 
        .background {
          display: flex;
          width:100%;
          flex-direction: column;
          align-items: start;
          height:auto;
        }


        .block-admin-page{
          display:100%;
          text-align: start;
          padding: 20px;
          flex-direction: column;
          align-items: start;
          height:400px;
        }


        @media(max-width: 900px) {
          .block-admin-page {  
            width: 500px;
          }
        }

        @media(max-width: 500px) {
          .block-admin-page {  
            width: 100%;
          }
        }

        

      `}</style>
    </>
  )
}

export default AdminTable