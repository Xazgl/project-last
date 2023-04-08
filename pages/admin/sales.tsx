import { NextPage } from "next"
import { AxiosError } from 'axios'
import AdminLayout from "../../src/component/admin/AdminLayout"
import { SalesAdminComponent } from "../../src/component/admin/SalesAdmin"
import { useQuery } from 'react-query'
import { Admin, getSession, RedirectError, useSession } from "../../src/services/apiClient"
import { useRouter } from "next/router"
import { CircularProgress } from "@mui/material"
import { TableSales } from "../../src/component/admin/TableSales"
// import { TableCalcTo } from "../../src/component/admin/TableCalcTo"
// import { TableClientSales } from "../../src/component/admin/TableClientSales"
import { TableClientNeedCall } from "../../src/component/admin/TableClientNeedCall"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react"
import { TableClientCredit } from "../../src/component/admin/TableClientCredit"
import { TableClientParts } from "../../src/component/admin/TableClientParts"
import { TableCars } from "../../src/component/admin/TableCars"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ModalImg } from "../../src/component/ModalImg"
import { AddCarAdmin2 } from "../../src/component/admin/AddCarAdmin2"
import React from 'react';


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
    
  // const { isLoading, error, status , data, isSuccess} = useQuery<Admin, AxiosError<RedirectError>>('sid', getSession)
  const { isLoading, error, data, isSuccess } = useSession()
  if (isLoading) return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}><CircularProgress size="lg" /></div>


  return (
    <>
      {data && data.login && <div style={{
        width: '100%', height: '35px', display: 'flex', justifyContent: 'start',
        backgroundColor: '#005baa', color: 'white', paddingLeft: '15px', alignItems: 'center'
      }}>
        <Typography sx={{ fontSize: '16px' }}><AccountCircleIcon /> Добро пожаловать, {data.login}</Typography></div>}
      {isSuccess &&
        <AdminLayout title="Аrkont Admin">

          {/* <TableCalcTo />
            <TableClientSales />
            <TableClientNeedCall /> */}

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

            <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                sx={{ backgroundColor: "#2e2e2e", color: "white", borderBottom: 'solid 1px white ' }}
              >
                <Typography sx={{ width: '33%', flexShrink: 0, fontFamily: 'TacticSans-Reg' }}>
                  Таблица Спецпредложения и добавить новое
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <SalesAdminComponent />
                  <TableSales />
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{ backgroundColor: "#2e2e2e", color: "white", borderBottom: 'solid 1px white ' }}
              >
                <Typography sx={{ width: '33%', flexShrink: 0, fontFamily: 'TacticSans-Reg' }}>
                  Таблица Результаты ТО
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {/* <TableCalcTo /> */}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                sx={{ backgroundColor: "#2e2e2e", color: "white", borderBottom: 'solid 1px white ' }}
              >
                <Typography sx={{ width: '33%', flexShrink: 0, fontFamily: 'TacticSans-Reg' }}>
                  Таблица Клиенты заявки по кредиту
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <TableClientCredit />
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                sx={{ backgroundColor: "#2e2e2e", color: "white", borderBottom: 'solid 1px white ' }}
              >
                <Typography sx={{ width: '33%', flexShrink: 0, fontFamily: 'TacticSans-Reg' }}>
                  Таблица Клиенты прощедшие по Акции
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <TableClientSales />
                </Typography>
              </AccordionDetails>
            </Accordion> */}

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                sx={{ backgroundColor: "#2e2e2e", color: "white", borderBottom: 'solid 1px white ' }}
              >
                <Typography sx={{ width: '33%', flexShrink: 0, fontFamily: 'TacticSans-Reg' }}>
                  Таблица Клиенты по запчастям
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <TableClientParts />
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                sx={{ backgroundColor: "#2e2e2e", color: "white", borderBottom: 'solid 1px white ' }}
              >
                <Typography sx={{ width: '33%', flexShrink: 0, fontFamily: 'TacticSans-Reg' }}>
                  Таблица Заявки на обратный звонок
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <TableClientNeedCall />
                </Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                sx={{ backgroundColor: "#2e2e2e", color: "white", borderBottom: 'solid 1px white ' }}
              >
                <Typography sx={{ width: '33%', flexShrink: 0, fontFamily: 'TacticSans-Reg' }}>
                  Таблица Дилеров + интеграция дилеров
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {/* <DealerAdd /> */}
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion> */}
          </div>
        </AdminLayout>
      }
      {isLoading && <div>Loading..</div>}
      {error && <div>Error occurred!</div>}

      {
        showModal && <ModalImg carImg={carImg} showModalImg={showModalImg} setShowModalImg={setShowModalImg} />
      }
    </>
  )
}

export default AdminTable