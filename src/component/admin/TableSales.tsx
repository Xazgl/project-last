import * as React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import { Client, ClientTradein, Sales } from '@prisma/client';
import { useCallback, useEffect, useState } from 'react';
import { AllSaleDto } from '../../../@types';
import Link from 'next/link';



export function TableSales() {
  const [sales, setSales] = useState<AllSaleDto[]>([])
  const [statusSale, setStatusSale] = useState(true)

  const updateSale = useCallback(async ({ id, active }: Pick<AllSaleDto, 'id' | 'active'>) => {
    const res = await fetch('/api/sales/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ active: !active })
    })
    if (res.ok) {
      setSales(prevSales => {
        return prevSales.map(sale => {
          return sale.id === id ? { ...sale, active: !active } : sale
        })
      })
    }
  }, [sales])



  const deleteSale = useCallback(async ({ id }: Pick<AllSaleDto, 'id'>) => {
    const res = await fetch('/api/salesdel/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    if (res.ok) {
      console.log('Succes')
    }
  }, [sales])



  useEffect(() => {
    async function start() {
      const res = await fetch('/api/allSales')
      if (res.ok) {
        const sales: Sales[] = await res.json()
        setSales(sales.map(sale => {
          const { id, title, shortDesc, description, price, filterMain, detailFilter, img, active, createdAt } = sale
          return { id, title, shortDesc, description, price, filterMain, detailFilter, img, active, createdAt }
        }))
      }
    }
    start()
  }, [])

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 10 },
    { field: 'title', headerName: 'Название', width: 200 },
    { field: 'shortDesc', headerName: 'Краткое описание', width: 200 },
    { field: 'description', headerName: 'Описание', width: 200 },
    { field: 'price', headerName: 'Скидка или цена', width: 150 },
    { field: 'filterMain', headerName: 'Вид услуги', width: 150 },
    { field: 'detailFilter', headerName: 'Услуга', width: 150 },
    {
      field: 'picture', headerName: 'Изображение', width: 300, renderCell: (params: GridRenderCellParams<any, AllSaleDto>) => {
        return <img style={{ backgroundSize: 'cover', width: '100%' }} src={'/uploads/' + params.row.img} />
      }
    },
    {
      field: 'status', headerName: 'Статус акции', width: 130, renderCell: (params: GridRenderCellParams<any, AllSaleDto>) => {
        const { id, active } = params.row
        return <button style={{ background: 'blue', borderRadius: '5px', color: 'white', border: 'none', width: '100%', height: '60%', fontSize: '18px', fontFamily: 'TacticSans-Reg' }} onClick={() => updateSale({ id, active })}>{active.toString()}</button>
      }
    },
    {
      field: 'createdAt', headerName: 'Удаление', width: 130, renderCell: (params: GridRenderCellParams<any, AllSaleDto>) => {
        const { id } = params.row
        return <button style={{ background: 'red', borderRadius: '5px', color: 'white', border: 'none', width: '100%', height: '60%', fontSize: '18px', fontFamily: 'TacticSans-Reg' }} onClick={() => deleteSale({ id })}>Удалить</button>
      }
    },
    {
      field: 'createdAt2', headerName: 'Редактирование', width: 150, renderCell: (params: GridRenderCellParams<any, AllSaleDto>) => {
        const { id } = params.row
        return <Link href={{
          pathname: '/admin/card/[id]',
          query: { id: id }
          }}>
              <button style={{ background: 'green', borderRadius: '5px', color: 'white', border: 'none', width: '100%', height: '60%', fontSize: '18px', fontFamily: 'TacticSans-Reg' }}>Редактировать</button>
          </Link>
      }
    },

  ];

  return (
    <>
      <div className="title" >Акции</div>
      <div className="table" style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={sales}
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