import { Button, Checkbox } from '@mui/material';
import { useState } from 'react';

function ServiceList({ services }) {
  const [total, setTotal] = useState(0);

  const handleChange = (event, price) => {
    if (event.target.checked) {
      setTotal(total + price);
    } else {
      setTotal(total - price);
    }
  };

  return (
    <div className="service-list">
      <table className="table"  >
        <thead>
          <tr>
            {/* <th className="table-header">#</th> */}
            <th className="table-header">Наименование услуги</th>
            <th className="table-header">Стоимость</th>
            <th className="table-header">Подтверждение</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              {/* <td  className="table-cell">{index + 1}</td> */}
              <td className="table-cell">{service.name}</td>
              <td className="table-cell">{service.price} ₽</td>
              <td className="table-cell">
                <Checkbox
                  color="primary"
                  onChange={(event) => handleChange(event, service.price)}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <div className="total" >Итого:{total} ₽</div>
        <Button sx={{ display: 'flex', justifyContent: 'center', height: '50px', width: '300px', fontSize: '16px',marginTop:'20px' }} variant="contained">Согласовать</Button>
      </table>

      <style jsx>{`
         .service-list {
            width: 100%;
            margin-top:50px;
            height: auto;
            padding-bottom: 50px;
         }

         .table {
          margin:0 auto;
          table-layout: fixed;
          border-collapse: collapse;
         }

        

         .table-header {
          text-align: left;
      padding: 10px 20px;
      font-weight: bold;
      
    }
    
    .table-cell {
      text-align: left;
      padding: 10px 20px;
    }

    .total {
      font-size:18px;
      font-weight:bold;
      margin-top:20px;
    }

    @media (max-width: 600px) {
      .service-list {
        max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
      }

      .table {
      
        display: flex;
        flex-direction: column;
        align-items: start;
      }
     
          .table-header,
          .table-cell {
            display: table-cell;
            vertical-align: middle;
            border-top: none;
            padding: 5px 5px;
            text-align: center;
            word-wrap: wrap;
            font-size: 14px;
          }

      
          .table-cell:last-child {
            border-bottom: none;
          }
        }

        @media (max-width: 400px) {

          .table-header,
          .table-cell {
            font-size: 12px;
          }
        }
      `}</style>


    </div>
  );
}

export default ServiceList;