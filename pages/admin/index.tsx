import { NextPage } from "next"
import { AxiosError } from 'axios'
import AdminLayout from "../../src/component/admin/AdminLayout"
import { SalesAdminComponent } from "../../src/component/admin/SalesAdmin"
import { useQuery } from 'react-query'
import { Admin, getSession, RedirectError, useSession } from "../../src/services/apiClient"
import { useRouter } from "next/router"
import { CircularProgress, Collapse, Link, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { TableSales } from "../../src/component/admin/TableSales"
// import { TableCalcTo } from "../../src/component/admin/TableCalcTo"
// import { TableClientSales } from "../../src/component/admin/TableClientSales"
import { TableClientNeedCall } from "../../src/component/admin/TableClientNeedCall"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react"
import { TableClientCredit } from "../../src/component/admin/TableClientCredit"
import { TableClientParts } from "../../src/component/admin/TableClientParts"
import { TableCars } from "../../src/component/admin/TableCars"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ModalImg } from "../../src/component/ModalImg"
import { AddCarAdmin2 } from "../../src/component/admin/AddCarAdmin2"
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
          'Content-Type': 'application/json'
        },
      })
      if (res.ok) {
        setData(res)
        console.log(data)
      } else {
        const host = process.env.NODE_ENV === 'production' ? process.env.HOST : 'http://localhost:3000'
        router.push(`${host}/admin/login`); // Здесь указываем URL страницы, на которую нужно выполнить редирект
      }
    }
    start()
  }, [])

  return (
    <>
      {data && <div style={{
        width: '100%', height: '35px', display: 'flex', justifyContent: 'start',
        backgroundColor: '#005baa', color: 'white', paddingLeft: '15px', alignItems: 'center'
      }}>
        <Typography sx={{ fontSize: '16px' }}><AccountCircleIcon /> Добро пожаловать, {data.login}</Typography></div>}
      {data &&
        <AdminLayout title="Аrkont Admin">



          <div className="background">
            <div className="block-admin-page">
              {/* <ul>Выберите ваш раздел
                <li>Таблица Новые Авто + снять с продажи + добавить</li>
                <li> Таблица Спецпредложения и добавить новое</li>
                <li>Таблица Результаты ТО</li>
                <li>Таблица Клиенты заявки по кредиту</li>
                <li>Таблица Заявки на обратный звонок</li>
              </ul> */}

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

              </List>
            </div>
          </div>
          
        </AdminLayout >
      }
      {
        data == null && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
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
          align-items: center;
          height:auto;
        }


        .block-admin-page{
          display:flex;
          width: 900px;
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