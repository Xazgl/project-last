import * as React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import {  ClientNeedCall } from '@prisma/client';
import { useCallback, useEffect, useState } from 'react';
import {AllClientNeedCall} from '../../../@types/dto';



export function TableClientNeedCall() {
  const [applicationsCalc, setApplicationsCalc,] = useState<AllClientNeedCall[]>([])

  
  useEffect(() => {
    async function start() {
      const res = await fetch('/api/allClientNeedCall')
      if (res.ok) {
        const applicationsCalcTo:  ClientNeedCall[] = await res.json()
        setApplicationsCalc(applicationsCalcTo.map(applicationTo => {
          const { id, name, phone, office, createdAt } = applicationTo
          return { id, name, phone,office, createdAt }
        }))
      }
    }
    start()
  }, [])

  const deleteCalcTo = useCallback(async ({ id }: Pick<AllClientNeedCall, 'id'>) => {
    const res = await fetch('/api/clientneddcalldel/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    if (res.ok) {
      console.log('Succes')
    }
  }, [applicationsCalc])



const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 20 },
  { field: 'name', headerName: 'Имя', width: 200 },
  { field: 'phone', headerName: 'Телефон', width: 200 },
  { field: 'office', headerName: 'ДЦ для посещения', width: 300 },
  {
    field: 'delete', headerName: 'Удалить', width: 130, renderCell: (params: GridRenderCellParams<any, AllClientNeedCall>) => {
      const { id } = params.row
      return <button style={{ background: 'black', borderRadius: '5px', color: 'white', border: 'none', width: '100%', height: '60%', fontSize: '18px', fontFamily: 'TacticSans-Reg' }} onClick={() => deleteCalcTo({ id })}>Удалить</button>
    }
  },
  { field: 'createdAt', headerName: 'Дата создания заявки', width: 200 },
  

];

return (
  <>
    <div className="title">Заявка на обратную связь</div>
    <div className="table" style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={applicationsCalc}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>


    <style jsx>{`

       .title {
        display: flex;
        width:100%;
        height: 100%;
        justify-content: center;
        align-items: baseline;
        text-align: center;
        font-family: 'TacticSans-Reg','sans-serif';
        font-size:30px;
        color:white;
        background-color: #2e2e2e;
       }

       .imgCustom{
        display:flex; 
        height: 100%;
        width: 100px;
        background-position: center center;
        background-repeat: no-repeat;
        overflow: hidden;
        border-radius: 5px;
        object-fit: cover;
       }

       .imgDiv{
        display:flex; 
        height: 100%;
        width: 100px;
        background-position: center center;
        background-repeat: no-repeat;
        overflow: hidden;
        border-radius: 5px;
       }
  
      `}</style>

  </>)
}