import { Car } from '@prisma/client'
import React, { Dispatch, MouseEventHandler, SetStateAction, useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RoomIcon from '@mui/icons-material/Room';
import Link from 'next/link';

import chery from '/public/images/logo-around/chery.webp';
import chevrolet from '/public/images/logo-around/chevrolet.webp';
import datsun from '/public/images/logo-around/datsun.webp';
import exeed from '/public/images/logo-around/exeed.webp';
import faw from '/public/images/logo-around/faw.webp';
import ford from '/public/images/logo-around/ford.webp';
import hisun from '/public/images/logo-around/hisun.webp';
import hyundai from '/public/images/logo-around/hyundai.webp';
import jeep from '/public/images/logo-around/jeep.webp';
import kia from '/public/images/logo-around/kia.webp';
import landrover from '/public/images/logo-around/landrover.webp';
import mithsubishi from '/public/images/logo-around/mithsubishi.webp';
import nissan from '/public/images/logo-around/nissan.webp';
import renault from '/public/images/logo-around/renault.webp';
import subaru from '/public/images/logo-around/subaru.webp';
import suzuki from '/public/images/logo-around/suzuki.webp';
import uaz from '/public/images/logo-around/uaz.webp';
import usedcars34 from '/public/images/logo-around/usedcars34.webp';
import volkswagen from '/public/images/logo-around/volkswagen.webp';
import opel from '/public/images/logo-around/opel.webp';
import jaguar from '/public/images/logo-around/jaguar.webp';
import lovol from '/public/images/logo-around/lovol.webp';
import peugeot from '/public/images/logo-around/peugeot.webp';
import { AllUsedCarDto } from '../../../../@types/dto';
import { Button } from '@mui/material';

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>,
  filteredCars: AllUsedCarDto,
}

export type LogoArr = {
  id: number,
  name: string
  img: string,
}


const LogoList: LogoArr[] = [
  {
    id: 1,
    name: 'Chery',
    img: `${chery.src}`
  },
  {
    id: 2,
    name: 'Chevrolet',
    img: `${chevrolet.src}`
  },
  {
    id: 3,
    name: 'Datsun',
    img: `${datsun.src}`
  },
  {
    id: 4,
    name: 'EXEED',
    img: `${exeed.src}`
  },
  {
    id: 5,
    name: 'FAW',
    img: `${faw.src}`
  },
  {
    id: 6,
    name: 'Ford',
    img: `${ford.src}`
  },
  {
    id: 7,
    name: 'Hisun',
    img: `${hisun.src}`
  },
  {
    id: 7,
    name: 'Hyundai',
    img: `${hyundai.src}`
  },
  {
    id: 8,
    name: 'Jeep',
    img: `${jeep.src}`
  },
  {
    id: 9,
    name: 'Kia',
    img: `${kia.src}`
  },
  {
    id: 10,
    name: 'Land Rover',
    img: `${landrover.src}`
  },
  {
    id: 11,
    name: 'Mitsubishi',
    img: `${mithsubishi.src}`
  },
  {
    id: 12,
    name: 'Nissan',
    img: `${nissan.src}`
  },
  {
    id: 13,
    name: 'Renault',
    img: `${renault.src}`
  },
  {
    id: 14,
    name: 'Subaru',
    img: `${subaru.src}`
  },
  {
    id: 15,
    name: 'Suzuki',
    img: `${suzuki.src}`
  },
  {
    id: 16,
    name: 'AUC',
    img: `${usedcars34.src}`
  },
  {
    id: 17,
    name: 'Volkswagen',
    img: `${volkswagen.src}`
  },
  {
    id: 18,
    name: 'Opel',
    img: `${opel.src}`
  },
  {
    id: 19,
    name: 'Jaguar',
    img: `${jaguar.src}`
  },
  {
    id: 20,
    name: 'LOVOL',
    img: `${lovol.src}`
  },
  {
    id: 21,
    name: 'Peugeot',
    img: `${peugeot.src}`
  },
]


function FilteredUsedCars({ setShowModal, filteredCars }: Props) {

  // useState(() => {
  //   if(filteredCars.length <=0) {
  //     setCarArr(Array.isArray(filteredCars) && filteredCars.length ? Array(40).fill(0).map(el => filteredCars[Math.floor(Math.random() * filteredCars.length)])
  //     )
  //   }

  // }, [])

  // const [carArr, setCarArr] = useState<Car[]>(
  //   Array.isArray(filteredCars) && filteredCars.length ? Array(40).fill(0).map(el => filteredCars[Math.floor(Math.random() * filteredCars.length)]) : [])

  // console.log(carArr)

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // {
  //   filteredCars.map(car =>
  //     console.log(car.id)
  //   )
  // }

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


  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }


  function logoFind(LogoList, str) {
    if (LogoList.find(brend => brend.name === str)) {
      const imgLogo = LogoList.find(brend => brend.name === str)?.img
      return imgLogo
    }
  }

  function driverTypeStr(x) {
    if (x === 'front') {
      return "Передний привод"
    }
    if (x === 'full_4wd') {
      return "Полный привод"
    }
  }

  function showModal(event: MouseEventHandler<HTMLButtonElement>) {
    setShowModal(true)
  }

  // {
  //   filteredCars.map(car =>
  //     console.log(car.id)
  //   )
  // }

  function upFirst(engine) {
    return engine.charAt(0).toUpperCase() + engine.slice(1)
  }

  return (
    <>
      <div className='background'>
        <div className='cards' id="desktop">
          {filteredCars.map(car =>
            <Card sx={{
              width: 345, height: 500, display: 'flex', border: '1px  solid transparent',
              flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear',
              '&:hover': { transform: 'scale(1.04)', border: '1px solid black' },
              '&:hover .credit': {
                display: 'flex',
                transition: '1s',
                animation: 'credit-open.5s',
                marginTop: '330px',
                backgroundColor: '#0c7ee1',
                position: 'absolute'
              }
            }} >
              <CardHeader
                avatar={
                  <Avatar sx={{}} aria-label="recipe"
                    src={logoFind(LogoList, car.vendor)}>

                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={car.vendor}
                subheader={car.modelShortName}
              />

              <Link href={{
                pathname: '/catalog/car/[id]',
                query: { id: car.id }
              }}>
                <CardMedia
                  component="img"
                  height="194"
                  image={car.picture[0]}
                  sx={{ cursor: 'pointer' }}

                  alt="Paella dish"
                />
              </Link>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {upFirst(car.engine)} / {car.driverType} / Пробег {numberWithSpaces(car.mileage)} км
                  <div className='price'><h3>{numberWithSpaces(Number(car.price))} ₽</h3></div>
                  <div className='priceMonth'>
                    <button className="btn">от {numberWithSpaces(Math.round(Number(car.price) / 150))} ₽/мес</button>
                  </div>
                  {/* <div className='office'>
                    <span>{car.DealerModel.name}</span>    <RoomIcon />
                  </div> */}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon sx={{ '&:hover': { color: 'red' } }} />
                </IconButton>
                <IconButton aria-label="share">
                  <AddRoadIcon sx={{ '&:hover': { color: 'green' } }} />
                </IconButton>
                {/* <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore> */}
              </CardActions>
              <button className="credit" onClick={showModal}>
                <span className="consultation" >Получить консультацию</span>
              </button>
            </Card>
          )}
        </div>

        <div className='cards' id="mob">
          {filteredCars.map(car =>
            <Card sx={{
              width: '90%', height: 430, display: 'flex', border: '1px  solid transparent',
              flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear',
              '&:hover': { transform: 'scale(1.04)', border: '1px solid black' },
            }} >
              <CardHeader
                sx={{ display: 'flex', height: '50px', dispaly: 'flex', alignItems: 'center' }}
                avatar={
                  <Avatar sx={{}} aria-label="recipe"
                    src={logoFind(LogoList, car.vendor)}>
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings" sx={{
                    marginTop: '-10px',
                    marginRight: '-5px'
                  }}>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon sx={{ '&:hover': { color: 'red' } }} />
                    </IconButton>
                  </IconButton>
                }
                title={car.vendor}
                subheader={car.modelShortName}
              />

              <Link href={{
                pathname: '/catalog/car/[id]',
                query: { id: car.id }
              }}>
                <CardMedia
                  component="img"
                  height="160px"
                  image={car.picture[0]}
                  sx={{
                    cursor: 'pointer',
                    backgroundSize: 'contain'
                  }}

                  alt="car"
                />
              </Link>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {upFirst(car.engine)} / {car.driverType} привод / Пробег {numberWithSpaces(car.mileage)} км
                  <div className='price'><h3>{numberWithSpaces(Number(car.price))} ₽</h3></div>
                  <div className='priceMonth'>
                    <button className="btn">от {numberWithSpaces(Math.round(Number(car.price) / 150))} ₽/мес</button>
                  </div>
                </Typography>
              </CardContent>
              <div style={{ display: "flex", width: '100%', height: '45px', justifyContent: 'center', padding: '6px' }}>
                <Button variant="contained"
                  sx={{ textAlign: 'center', fontSize: '12px', width: '95%', }}
                  onClick={showModal}>Получить консультацию</Button>
              </div>
            </Card>
          )}
        </div>
      </div>

      <style jsx>{`              
      @keyframes credit-open {
                0% {
                    opacity: 0;
                    margin-top:-100%;
                }

                50% {
                    opacity: 0.5;
                }

                60% {
                    opacity: 0.8;
                }
                80% {
                    opacity: 0.9;
                }
        
                100% {
                    opacity: 1;
                }
      }
 
    .background {
      display:flex;
      width: 100%;
      height: 110vh;
      padding: 20px;
      justify-content: center;
      overflow: auto;
      border-top: 1px solid #d4d3d3;
      background-color: #f5f2f261;
    }
    
    .cards {
      display: flex;
      justify-content: center;
      gap:40px;
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
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
      border:solid 1px #005baa;
      color:#005baa;
      background-color: transparent;
      border-radius: 3px;
      font-size: 15px;
      font-weight: bold;
      transition: 0.6s;
    }

    .btn:hover {
      background-color:#005baa; 
      color:white;
      transform: scale(0.99);
    }

    ul {
      list-style: none;
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

    @media(max-width: 640px) {
      #desktop{
        display: none;
      }
      #mob{
        display: flex;
      } 
      .btn {
        width: 100px;
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
    }
            
  `}</style>
    </>
  )
}

export default FilteredUsedCars