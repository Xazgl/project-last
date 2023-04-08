import { NextPage } from "next"
import AdminLayout from "../../../src/component/admin/AdminLayout"
import { useRouter } from "next/router"
import { CircularProgress, Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { TableSales } from "../../../src/component/admin/TableSales"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react"
import { TableCars } from "../../../src/component/admin/TableCars"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ModalImg } from "../../../src/component/ModalImg"
import { AddCarAdmin2 } from "../../../src/component/admin/AddCarAdmin2"
import React from 'react';


const NewCarTable: NextPage = () => {
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
          <div style={{ marginTop: '30px' }}>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                sx={{ backgroundColor: "#2e2e2e", color: "white", borderBottom: 'solid 1px white ' }}
              >
                <Typography sx={{ width: '33%', flexShrink: 0, fontFamily: 'TacticSans-Reg' }}>
                  Таблица Новые Авто + снять с продажи + добавить
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <AddCarAdmin2 />
                  <TableCars setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
                </Typography>
              </AccordionDetails>
            </Accordion>

          </div>
        </AdminLayout>
      }
      {data == null && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
        <CircularProgress />
      </div>}

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

      `}</style>
    </>
  )
}

export default NewCarTable