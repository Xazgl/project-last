import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Client } from '@prisma/client';
import { useEffect, useState } from 'react';
import { ClientDto } from '../../@types/dto';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width:20},
  { field: 'name', headerName: 'ФИО', width: 300 },
  { field: 'phone', headerName: 'Телефон', width: 300 },
  { field: 'createdAt', headerName: 'Date', width: 300 }
];

export default function TableService() {
  const [clients, setClients] = useState<ClientDto[]>([])
  useEffect(() => {
    async function start() {
      const res = await fetch('/api/client', {
        headers: {
          //'Authorization': 'bearer ' + localStorage.getItem('Token')
          'Content-Type': 'application/json'
        }
      })
      if (res.ok) {
        const clients: Client[] = await res.json()
        setClients(clients.map(client => {
          const { id, name, phone, createdAt } = client
          return { id, name, phone, createdAt }
        }))
      }
    }
    start()
  }, [])
  return (
    <>
      <div className="table" style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={clients}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
      {/* <div className='container'>
        <button className='btn'>Выйти</button>
        <button className='btn'>Показать самые новые</button>
      </div> */}


      <style jsx>{`
    .container{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }

    .btn {
    font-family: 'Montserrat', sans-serif;
    border-radius: 3px;
    border:none;
    transition: transform.3s ;
    color: #ffffff;
    background-color: #48484d;
    width: 350px;
    height: 50px;
    font-size: 30px;
    margin-top:30px;
}

.btn:hover {
    background-color: #f7ff14;
    border: none;
    font-family: 'Montserrat', sans-serif;
    color:black;
    transform: scale(1.02);
    box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);
}
`}</style>
    </>

  );
}