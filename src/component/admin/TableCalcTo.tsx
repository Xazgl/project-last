import * as React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import { CalcTo, Client, ClientTradein } from '@prisma/client';
import { useCallback, useEffect, useState } from 'react';
import { AllCalcDto } from '../../../@types/dto';



export function TableCalcTo() {
  const [applicationsCalc, setApplicationsCalc,] = useState<AllCalcDto[]>([])

  
  useEffect(() => {
    async function start() {
      const res = await fetch('/api/allCalcTo')
      if (res.ok) {
        const applicationsCalcTo: CalcTo[] = await res.json()
        setApplicationsCalc(applicationsCalcTo.map(applicationTo => {
          const { id, brendName, model, complectation, mileage, carAge, createdAt } = applicationTo
          return { id, brendName, model, complectation, mileage, carAge, createdAt }
        }))
      }
    }
    start()
  }, [])

  const deleteCalcTo = useCallback(async ({ id }: Pick<AllCalcDto, 'id'>) => {
    const res = await fetch('/api/calcdel/' + id, {
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
  { field: 'brendName', headerName: 'Марка', width: 200 },
  { field: 'model', headerName: 'Модель', width: 200 },
  { field: 'complectation', headerName: 'Спецификация', width: 300 },
  { field: 'mileage', headerName: 'Пробег', width: 200 },
  { field: 'carAge', headerName: 'Год авто', width: 200 },
  {
    field: 'delete', headerName: 'Удалить', width: 130, renderCell: (params: GridRenderCellParams<any, AllCalcDto>) => {
      const { id } = params.row
      return <button style={{ background: 'red', borderRadius: '5px', color: 'white', border: 'none', width: '100%', height: '60%', fontSize: '18px', fontFamily: 'TacticSans-Reg' }} onClick={() => deleteCalcTo({ id })}>Удалить</button>
    }
  },
  { field: 'createdAt', headerName: 'Дата создания заявки', width: 200 },
  

];

return (
  <>
    <div className="title" >Результаты калькулятора ТО</div>
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