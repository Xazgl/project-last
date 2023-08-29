
import React, { Dispatch, SetStateAction } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CompareIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RoomIcon from '@mui/icons-material/Room';
import Link from 'next/link';
import RemoveRoadIcon from '@mui/icons-material/RemoveRoad';
import { AllCarDto } from '../../../../@types/dto';
import { Button, CircularProgress } from '@mui/material';
import { driverTypeStr, logoFind, numberWithSpaces } from '../allNewCarPage/servicesNewCar/service';
// import { LogoList } from '../allNewCarPage/type/typeNewCar';
// import { LogoList } from '../allUsedCarPage/services/servicesUsedCars';

import { gearBoxName } from './function';
import { LogoList, carBodyImgChange } from '../../../services/functions';
import { LogoListUsed } from '../allUsedCarPage/services/servicesUsedCars';




type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>,
  compareArr: any,
  setCompareArr: Dispatch<SetStateAction<any[]>>,
  compareArrUsed: any,
  setCompareArrUsed: Dispatch<SetStateAction<any[]>>,
}



function CompareCars({ setShowModal, setCompareArr, compareArr, setCompareArrUsed, compareArrUsed }: Props) {

  const [expanded, setExpanded] = React.useState(false);



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  function showModal(event) {
    event.preventDefault()
    setShowModal(true)
  }

  // удаление новых
  async function deleteToCompare(id) {
    const res = await fetch('/api/favorite/compare/del/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.ok) {
      console.log(res)
      async function start() {
        const res = await fetch('/api/favorite/compare/getAll', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (res.ok) {
          // console.log(res)
          const result = await res.json()
          result !== undefined ?
            setCompareArr(result.compareCarUser.compareCars)
            :
            setCompareArr(null)
        }
      }
      start()
    }
  }



  //удаление с пробегом 
  async function deleteToCompareUsed(id) {
    const res = await fetch('/api/usedcompare/del/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.ok) {
      console.log(res)
      async function start() {
        const res = await fetch('/api/usedcompare/getAll', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (res.ok) {
          // console.log(res)
          const result = await res.json()
          result !== undefined ?
            setCompareArrUsed(result.compareCarUser.compareUsedCars)
            :
            setCompareArrUsed(null)
        }
      }
      start()
    }
  }

  return (
    <>
      <div className='divTitle'>Сравните разные авто</div>
      <div className='background'>
        {compareArr !== null ?
          (<>
            <div className='cards' id="desktop">
            {/* <div className='cardsColName'>Новые авто</div> */}
              {compareArr.map(car => {
                return <Card key={car.car.id} sx={{
                  width: 345, height: 580, display: 'flex', border: '1px  solid transparent',
                  flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear',
                  '&:hover': { 
                    transform: 'scale(1.04)', 
                    webkitBoxShadow: '4px 4px 16px -2px rgba(0, 0, 0, 0.2)',
                    mozBoxShadow: '4px 4px 16px -2px rgba(0, 0, 0, 0.2)',
                    boxShadow: '4px 4px 16px -2px rgba(0, 0, 0, 0.2)',
                    shadow: '4px 4px 16px -2px rgba(0, 0, 0, 0.2)'
                   },
                  '&:hover .credit': {
                    display: 'flex',
                    transition: '1s',
                    animation: 'credit-open.5s',
                    marginTop: '400px',
                    backgroundColor: '#0c7ee1',
                    position: 'absolute'
                  }
                }} >
                  <CardHeader
                    avatar={
                      <Avatar sx={{}} aria-label="recipe"
                        src={logoFind(LogoList, car.car.CarModel.brandName)}>

                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={car.car.CarModel.brandName}
                    subheader={car.car.CarModel.modelName}
                  />

                  <Link href={{
                    pathname: '/catalog/car/[id]',
                    query: { id: car.car.id }
                  }}>
                    <CardMedia
                      component="img"
                      height="194"
                      image={car.car.img[0]}
                      sx={{
                        cursor: 'pointer',
                      }}

                      alt="car"
                    />
                  </Link>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <ul>
                        <li>Двигатель: {car.car.CarModification.name}</li>
                        <li>{driverTypeStr(car.car.CarModification.driveType)}</li>
                        <li>Трансмиссия: {gearBoxName(car.car.CarModification.gearboxType)}</li>
                        {/* <li>Комплектация: {car.car.CarComplectation.name}</li> */}
                        <li>Кол-во дверей: {car.car.CarModification.bodyDoorCount}</li>
                      </ul>

                      <div className='price'><h4>Цена от <span style={{ color: '#0c54a0' }}>{numberWithSpaces(Number(car.car.price))}*</span> ₽</h4></div>
{/* 
                      <div className='price'><h3>{numberWithSpaces(Number(car.car.price))} ₽</h3></div> */}
                      <div className='priceMonth'>
                        <button className="btn">от {numberWithSpaces(Math.round(Number(car.car.priceMonth)))} ₽/мес</button>
                      </div>
                      {/* <div className='office'>
                        <span>{car.car.DealerModel.name}</span>    <RoomIcon />
                      </div> */}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <RemoveRoadIcon sx={{ color: 'green' }}
                        onClick={() => deleteToCompare(car.car.id)}
                      />
                    </IconButton>
                    <IconButton aria-label="share">
                    </IconButton>
                  </CardActions>
                  {/* <button className="credit" onClick={showModal}>
                    <span className="consultation" >Получить консультацию</span>
                  </button> */}
                </Card>
              }
              )}
            </div>

            <div className='cards' id="mob">
              {compareArr.map(car =>
                <Card key={car.car.id} sx={{
                  width: '90%', height: 600, display: 'flex', border: '1px  solid transparent',
                  flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear',
                  '&:hover': { transform: 'scale(1.04)', border: '1px solid black' },
                }} >
                  <CardHeader
                    sx={{ display: 'flex', height: '50px', dispaly: 'flex', alignItems: 'center' }}
                    avatar={
                      <Avatar sx={{}} aria-label="recipe"
                        src={logoFind(LogoList, car.car.CarModel.brandName)}>
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings" sx={{
                        marginTop: '-10px',
                        marginRight: '-5px'
                      }}>
                        <IconButton aria-label="add to favorites">
                          <RemoveRoadIcon sx={{ color: 'green' }}
                            onClick={() => deleteToCompare(car.car.id)}
                          />
                        </IconButton>
                      </IconButton>
                    }
                    title={car.car.CarModel.brandName}
                    subheader={car.car.CarModel.modelName}
                  />

                  <Link href={{
                    pathname: '/catalog/car/[id]',
                    query: { id: car.car.id }
                  }}>
                    <CardMedia
                      component="img"
                      height="300px"
                      loading="lazy"
                      decoding='async'
                      image={car.car.img[0]}
                      sx={{
                        cursor: 'pointer',
                        backgroundSize: 'contain'
                      }}

                      alt="car"
                    />
                  </Link>
                  <CardContent>
                    <Typography sx={{ fontSize: '12px' }} color="text.secondary">
                      <ul style={{ padding: '0px' }}>
                        <li>Двигатель: {car.car.CarModification.name.replace(/\(([^\(\)]*)\)/, '$1').replace(/^\D+/, '')}</li>
                        <li>{driverTypeStr(car.car.CarModification.driveType)}</li>
                        <li>Трансмиссия: {gearBoxName(car.car.CarModification.gearboxType)}</li>
                        <li>Комплектация: {car.car.CarComplectation.name.replace(/\s*\([^()]*\)\s*/g, '')}</li>
                        <li>Кол-во дверей: {car.car.CarModification.bodyDoorCount}</li>
                      </ul>
                      <div className='price'><h3>{numberWithSpaces(Number(car.car.price))} ₽</h3></div>
                      <div className='priceMonth'>
                        <button className="btn">от {numberWithSpaces(Math.round(Number(car.car.priceMonth)))} ₽/мес</button>
                      </div>
                      {/* <div className='office'>
                        <span>{car.car.DealerModel.name}</span>    <RoomIcon />
                      </div> */}
                    </Typography>
                  </CardContent>
                  {/* <div style={{ display: "flex", width: '100%', height: '45px', justifyContent: 'center', padding: '6px' }}>
                    <Button variant="contained"
                      sx={{ textAlign: 'center', fontSize: '10px', width: '95%', }}
                      onClick={e => showModal}>Получить консультацию</Button>
                  </div> */}
                </Card>
              )}
            </div>
          </>)

          
          :
          <CircularProgress />
        }


        {compareArrUsed !== null ?
          (<>
            <div className='cards' id="desktop">
            {/* <div className='cardsColName'>Авто с пробегом</div> */}
              {compareArrUsed.map(carUsed => {
                return <Card key={carUsed.car.id} sx={{
                  width: 345, height: 580, display: 'flex', border: '1px  solid transparent',
                  flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear',
                  '&:hover': {
                    transform: 'scale(1.04)', 
                    webkitBoxShadow: '4px 4px 16px -2px rgba(0, 0, 0, 0.2)',
                    mozBoxShadow: '4px 4px 16px -2px rgba(0, 0, 0, 0.2)',
                    boxShadow: '4px 4px 16px -2px rgba(0, 0, 0, 0.2)',
                    shadow: '4px 4px 16px -2px rgba(0, 0, 0, 0.2)'
                  },
                  '&:hover .credit': {
                    display: 'flex',
                    transition: '1s',
                    animation: 'credit-open.5s',
                    marginTop: '400px',
                    backgroundColor: '#0c7ee1',
                    position: 'absolute'
                  }
                }} >
                  <CardHeader
                    avatar={
                      <Avatar sx={{}} aria-label="recipe"
                        src={logoFind(LogoListUsed, carUsed.car.vendor)}>

                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={carUsed.car.vendor}
                    subheader={carUsed.car.modelShortName}
                  />

                  <Link href={{
                    pathname: '/catalog/used-car/[id]',
                    query: { id: carUsed.car.id }
                  }}>
                    <CardMedia
                      component="img"
                      loading="lazy"
                      decoding='async'
                      height="194"
                      image={carUsed.car.picture[0]}
                      sx={{
                        cursor: 'pointer',
                      }}

                      alt="car"
                    />
                  </Link>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <ul style={{ padding: '0px' }}>
                        <li>Двигатель: {carUsed.car.engine}</li>
                        <li>{carUsed.car.driverType}</li>
                        <li>Трансмиссия: {carUsed.car.gearboxType}</li>
                        {/* <li>Пробег: {carUsed.car.mileage}км</li> */}
                        <li>Кол-во дверей: {carUsed.car.bodyType}</li>
                      </ul>
                      <div className='price'><h4>Цена от <span style={{ color: '#0c54a0' }}>{numberWithSpaces(Number(carUsed.car.price))}*</span> ₽</h4></div>
                      <div className='priceMonth'>
                        <button className="btn">от {numberWithSpaces(Math.round(Number(carUsed.car.price / 120)))} ₽/мес</button>
                      </div>
                      {/* <div className='office'>
                        <span>{car.car.DealerModel.name}</span>    <RoomIcon />
                      </div> */}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <RemoveRoadIcon sx={{ color: 'green' }}
                        onClick={() => deleteToCompareUsed(carUsed.car.id)}
                      />
                    </IconButton>
                    <IconButton aria-label="share">
                    </IconButton>
                  </CardActions>
                  {/* <button className="credit" onClick={showModal}>
                    <span className="consultation" >Получить консультацию</span>
                  </button> */}
                </Card>
              }
              )}
            </div>

            <div className='cards' id="mob">
              {compareArrUsed.map(carUsed =>
                <Card key={carUsed.car.id} sx={{
                  width: '90%', height: 600, display: 'flex', border: '1px  solid transparent',
                  flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear',
                  '&:hover': { transform: 'scale(1.04)', border: '1px solid black' },
                }} >
                  <CardHeader
                    sx={{ display: 'flex', height: '50px', dispaly: 'flex', alignItems: 'center' }}
                    avatar={
                      <Avatar sx={{}} aria-label="recipe"
                        src={logoFind(LogoListUsed, carUsed.car.vendor)}>
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings" sx={{
                        marginTop: '-10px',
                        marginRight: '-5px'
                      }}>
                        <IconButton aria-label="add to favorites">
                          <RemoveRoadIcon sx={{ color: 'green' }}
                            onClick={() => deleteToCompare(carUsed.car.id)}
                          />
                        </IconButton>
                      </IconButton>
                    }
                    title={carUsed.car.vendor}
                    subheader={carUsed.car.modelShortName}
                  />

                  <Link href={{
                    pathname: '/catalog/used-car/[id]',
                    query: { id: carUsed.car.id }
                  }}>
                    <CardMedia
                      loading="lazy"
                      decoding='async'
                      component="img"
                      height="300px"
                      image={carUsed.car.picture[0]}
                      sx={{
                        cursor: 'pointer',
                        backgroundSize: 'contain'
                      }}

                      alt="car"
                    />
                  </Link>
                  <CardContent>
                    <Typography sx={{ fontSize: '12px' }} color="text.secondary">
                      <ul style={{ padding: '0px' }}>
                        <li>Двигатель: {carUsed.car.engine.replace(/^\D+/, '')}</li>
                        <li>{driverTypeStr(carUsed.car.driverType)}</li>
                        <li>Трансмиссия: {carUsed.car.gearboxType}</li>
                        <li>Пробег: {carUsed.car.mileage}км</li>
                        <li>Кол-во дверей: {carUsed.car.bodyType}</li>
                      </ul>
                      <div className='price'><h3>{numberWithSpaces(Number(carUsed.car.price))} ₽</h3></div>
                      <div className='priceMonth'>
                        <button className="btn">от {numberWithSpaces(Math.round(Number(carUsed.car.price / 120)))} ₽/мес</button>
                      </div>
                      {/* <div className='office'>
                        <span>{car.car.DealerModel.name}</span>    <RoomIcon />
                      </div> */}
                    </Typography>
                  </CardContent>
                  <div style={{ display: "flex", width: '100%', height: '45px', justifyContent: 'center', padding: '6px' }}>
                    {/* <Button variant="contained"
                      sx={{ textAlign: 'center', fontSize: '10px', width: '95%', }}
                      onClick={e => showModal}>Получить консультацию</Button> */}
                  </div>
                </Card>
              )}
            </div>
          </>)
          : <CircularProgress />
        }
      </div>

  <style jsx>{`              
     
  
      
    .divTitle{
      display:flex;
      width: 100%;
      font-size:60px;
      color:white;
      background-color: #0c54a0;
      justify-content: center;
      font-family: 'Roboto','sans-serif'; 
      border-top: solid 1px white;
      padding: 10px;
    }

    .background {
      display:flex;
      width: 100%;
      height: auto;
      padding: 20px;
      justify-content: space-between;
      flex-direction: row;
      overflow: auto;
      border-top: 1px solid #d4d3d3;
      padding-bottom: 50px;
    }
    
    .cards {
      display: flex;
      justify-content: center;
      gap:40px;
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top:20px;
    }

    .cardsColName{
      display: flex;
      width: 100%;
      text-align: center;
      justify-content: center;
      font-size: 35px;
    }
 
    .price {
      font-size: 18px;
      line-height: 18px;
      display: flex;
      align-items: center;
      font-weight: 400;
      letter-spacing: normal;
      font-family: 'Roboto',sans-serif;
      color:black;
    }

    .priceMonth {
      display: flex;
      justify-content: start;
      width: 80%;
      height: 35px;
    }

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding:1px;
      width:80%;
      height: 100%;
      border:solid 1px #d1d7dd;
      color:#005baa;
      background-color:  #f2f2f2;
      cursor: pointer;
      font-size: 15px;
      font-weight: bold;
      transition: 0.6s;
      cursor: pointer;
    }

    .btn:hover {
      background-color:#005baa; 
      color:white;
      transform: scale(0.99);
    }

    ul {
      list-style: none;
      padding: 0px;
    }

    li {
      margin-top:5px;
    }

    .office{
      display: flex;
      justify-content: start;
      margin-top: 10px;
      font-size: 12px;
      align-items: center;
    }

    .credit {
      display: none;
      justify-content: center;
      text-align: center;
      align-items: center;
      width: 100%;
      height: 50px;
      transition: 1.2s;
      margin-top:-10em;
      cursor: pointer;
      color:white;
      font-size:16px;
      text-align: center;
      border:none;
      font-family: 'Roboto','sans-serif'; 
    }

    .credit:hover {
      background-color:#0088ff;
    }

    #mob{
      display: none;
      gap:10px;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      flex-wrap: nowrap;
    }

    .row {
      display:flex;
      flex-direction: row;
    }

    .column {
      display:flex;
      flex-direction: column;
      height: auto;
    }

    #priceModbile{
      font-size: 17px;
      height: 30px;
      margin-top:15px;
      font-weight: bold;
      width: 100%;
    }

    #priceMonth {
      width: 100%;
      height: auto;
      font-weight: bold;
      margin-top:20px;
    }
    
    @media(max-width: 660px) {
      .background{
        flex-direction: column;
      }

      #desktop{
        display: none;
      }
      #mob{
        display: flex;
      }

      .divTitle {
        font-size:40px;
      }

      .btn {
        height: 30px;
        font-size: 12px;
      }

      .office{
        font-size: 9px;
      }
      .background{
        height: auto;
      }
    }

    @media(max-width: 400px) {
      .btn {
        width: 90%
      }
      h3{
        font-weight: 300;
      }
      .divTitle {
        font-size:30px;
      }
    }

  

  
            
  `}</style>
    </>
  )
}

export default CompareCars