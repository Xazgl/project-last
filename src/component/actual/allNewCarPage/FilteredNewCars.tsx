import { Car } from '@prisma/client'
import React, { Dispatch, SetStateAction, useState } from 'react'
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

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>,
  filteredCars: Car[]
}


function FilteredNewCars({ setShowModal, filteredCars }: Props) {

  // useState(() => {
  //   if(filteredCars.length <=0) {
  //     setCarArr(Array.isArray(filteredCars) && filteredCars.length ? Array(40).fill(0).map(el => filteredCars[Math.floor(Math.random() * filteredCars.length)])
  //     )
  //   }

  // }, [])

  const [carArr, setCarArr] = useState<Car[]>(
    Array.isArray(filteredCars) && filteredCars.length ? Array(40).fill(0).map(el => filteredCars[Math.floor(Math.random() * filteredCars.length)]) : [])

    console.log(carArr)
      
      
   
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

  function driverTypeStr(x) {
    if (x === 'front') {
      return "Передний привод"
    }
    if (x === 'full_4wd') {
      return "Полный привод"
    }
  }

  function showModal(event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    setShowModal(true)
  }

  // {
  //   filteredCars.map(car =>
  //     console.log(car.id)
  //   )
  // }

  return (
    <>
      <div className='background'>
        <div className='cards'>
          {filteredCars.map(car =>
            <Card sx={{
              maxWidth: 345, display: 'flex', border: '1px  solid transparent', flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear',
              '&:hover': { transform: 'scale(1.04)', border: '1px solid black' },
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
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={car.CarModel.brandName}
                subheader={car.CarModel.modelName}
              />

              <Link href={{
                pathname: '/catalog/car/[id]',
                query: { id: car.id }
              }}>
                <CardMedia
                  component="img"
                  height="194"
                  image={car.img[0]}
                  sx={{ cursor: 'pointer' }}

                  alt="Paella dish"
                />
              </Link>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {car.CarModification.name} / {driverTypeStr(car.CarModification.driveType)}
                  <div className='price'><h3>{numberWithSpaces(car.price)} ₽</h3></div>
                  <div className='priceMonth'>
                    <button className="btn">от {numberWithSpaces(Math.round(car.priceMonth))} ₽/мес</button>
                  </div>
                  <div className='office'>
                    <span>{car.DealerModel.name}</span>    <RoomIcon />
                  </div>
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
              <button className="credit"  onClick={showModal}>
                <span className="consultation" >Получить консультацию</span>
              </button>
            </Card>

            // <div className='card'>
            //   <h1>{car.id}</h1>
            // </div>
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
      height: auto;
      padding: 20px;
      justify-content: center;
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
    }

    .credit:hover {
      background-color:#0088ff;
    }

            
  `}</style>
    </>
  )
}

export default FilteredNewCars