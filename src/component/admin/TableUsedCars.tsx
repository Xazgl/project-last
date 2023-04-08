import * as React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import { useCallback, useEffect, useState, Dispatch, SetStateAction, } from 'react';
import { AllCarDto, CarDto } from '../../../@types/dto';
import Link from 'next/link';
import { Circle } from '@mui/icons-material';
import { UsedCars } from '@prisma/client';



type Props = {
  showModal: boolean,
  setShowModal: Dispatch<SetStateAction<boolean>>,
  setCarImg: Dispatch<SetStateAction<string>>
}

export function TableUsedCars({ showModal, setShowModal, setCarImg }: Props) {
  const [cars, setCars] = useState<AllCarDto>([])
  const [statusSale, setStatusSale] = useState(true)

  function showModalImg(x) {
    setShowModal(true)
    setCarImg(x)
  }

  const updateSale = useCallback(async ({ id, active }: Pick<CarDto, 'id' | 'active'>) => {
    const res = await fetch('/api/usedcar/carupdate/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ active: !active })
    })
    if (res.ok) {
      setCars(prevcars => {
        return prevcars.map(sale => {
          return sale.id === id ? { ...sale, active: !active } : sale
        })
      })
    }
  }, [cars])

  const deleteSale = useCallback(async ({ id }: Pick<CarDto, 'id'>) => {
    const res = await fetch('/api/usedcar/cardelet/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    if (res.ok) {
      console.log('Succes')
    }
  }, [cars])


  useEffect(() => {
    async function start() {
      const res = await fetch('/api/allCarsUsed')
      if (res.ok) {
        //@ts-ignore
        const cars = await res.json()
        setCars(cars.map(car => {       //TODO тип и как вызвать поля через include
          const { id, offersId, color,vendor,modelFullName, mileage, year, picture , price, active, createdAt, updatedAt } = car
          const new_price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ₽';
          const mileage_new = mileage + ' км'
          return { id, offersId, vendor,  modelFullName, color, mileage_new,  year, picture , new_price, active, createdAt, updatedAt }
        }))
      }
    }
    start()
  }, [])

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 10 },
    { field: 'offersId', headerName: 'ID  offer', width: 200 },
    { field: 'vendor', headerName: 'Марка', width: 200 },
    { field: 'modelFullName', headerName: 'Модель', width: 300 },
    { field: 'mileage_new', headerName: 'Пробег', width: 150 },
    { field: 'year', headerName: 'Год выпуска', width: 130 },
    { field: 'new_price', headerName: 'Цена', width: 150 },
    {
      field: 'picture', headerName: 'Изображение', width: 150, renderCell: (params: GridRenderCellParams<any, UsedCars>) => {
        return <img style={{
          backgroundSize: 'cover',
          cursor: 'pointer',
          height: '100%',
          width: 'auto',
        }}
          src={params.row.picture [0]}
          onClick={() => showModalImg(params.row.picture[0])}
        />
      }
    },
    {
      field: 'status', headerName: 'Статус авто', width: 130, renderCell: (params: GridRenderCellParams<any, CarDto>) => {
        const { id, active } = params.row
        return <button style={{ background: 'blue', borderRadius: '5px', color: 'white', border: 'none', width: '100%', height: '60%', fontSize: '18px', fontFamily: 'TacticSans-Reg' }} onClick={() => updateSale({ id, active })}>{active.toString()}</button>
      }
    },
    {
      field: 'createdAt', headerName: 'Удалить', width: 130, renderCell: (params: GridRenderCellParams<any, CarDto>) => {
        const { id } = params.row
        return <button style={{ background: 'red', borderRadius: '5px', color: 'white', border: 'none', width: '100%', height: '60%', fontSize: '18px', fontFamily: 'TacticSans-Reg' }} onClick={() => deleteSale({ id })}>Удалить</button>
      }
    }
  ];

  return (
    <>
      <div className="title" >Таблица с пробегом авто</div>
      <div className="table" style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={cars}
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