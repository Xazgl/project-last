import * as React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import { ClientNeedCall } from '@prisma/client';
import { useCallback, useEffect, useState } from 'react';
import { AllClientCredit } from '../../../@types/dto';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { CircularProgress } from '@mui/material';



export function TableClientCredit() {

  // const [applicationsCalc, setApplicationsCalc,] = useState<AllClientCredit[]>([])
  const { data: applicationsCalc, isLoading } = useQuery<AllClientCredit[]>({
    queryKey: ['applicationsCalc'], queryFn: () => {
      return axios
        .get('/api/allClientCredit')
        .then((res) => res.data)
    }
  })

  // useEffect(() => {
  //   async function start<T>() {
  //     const res = await fetch('/api/allClientCredit')
  //     if (res.ok) {
  //       const applicationsCalcTo:  AllClientCredit[] = await res.json()
  //       setApplicationsCalc(applicationsCalcTo.map(applicationTo => {
  //         const { id, name, phone, firstPrice, month, carName , createdAt } = applicationTo
  //         return { id, name, phone,firstPrice,month, carName , createdAt }
  //       }))
  //     }
  //   }
  //   start()
  // }, [])

  // const deleteCalcTo = useCallback(async ({ id }: Pick<AllClientCredit, 'id'>) => {
  //   const res = await fetch('/api/clientneddcalldel/' + id, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //   if (res.ok) {
  //     console.log('Succes')
  //   }
  // }, [applicationsCalc])
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: (id: string) => {
      return axios.post('/api/clientneddcalldel/' + id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applicationsCalc'] })
    }
  })



  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 20 },
    { field: 'name', headerName: 'Имя', width: 200 },
    { field: 'firstPrice', headerName: 'Первый платеж', width: 200 },
    { field: 'mont', headerName: 'Колличество в месяцах', width: 100 },
    { field: 'carName', headerName: 'Марка машины', width: 300 },
    {
      field: 'delete', headerName: 'Удалить', width: 130, renderCell: (params: GridRenderCellParams<any, AllClientCredit>) => {
        const { id } = params.row
        return <button style={{
          background: 'red', borderRadius: '5px', color: 'white',
          border: 'none', width: '100%', height: '60%',
          fontSize: '18px',
          fontFamily: 'TacticSans-Reg'
        }}
          onClick={() => mutate(id)}
        >
          Удалить
        </button>
      }
    },
    { field: 'createdAt', headerName: 'Дата создания заявки', width: 200 },


  ];

  return (
    <>
      <div className="title">Заявка на кредит</div>
      <div className="table" style={{ height: 500, width: '100%' }}>
        {isLoading ?
          <CircularProgress />
          :
          <DataGrid
            rows={applicationsCalc}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        }
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