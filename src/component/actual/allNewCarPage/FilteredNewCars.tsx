import { Car } from '@prisma/client'
import React, { Dispatch, MouseEventHandler, SetStateAction, useEffect, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import HistoryIcon from '@mui/icons-material/History';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CompareIcon from '@mui/icons-material/Compare';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRoadIcon from '@mui/icons-material/RemoveRoad';
import RoomIcon from '@mui/icons-material/Room';
import Link from 'next/link';


import { AllCarDto } from '../../../../@types/dto';
import { Box, Button, createTheme, useMediaQuery } from '@mui/material';
import { LogoList } from './type/typeNewCar';
import { driverTypeStr, logoFind, numberWithSpaces } from './servicesNewCar/service';
import { FastForwardRounded } from '@mui/icons-material';


type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>,
  filteredCars: AllCarDto,
  setShowModalFavorite: Dispatch<SetStateAction<boolean>>,
}



function FilteredNewCars({ setShowModal, setShowModalFavorite, filteredCars }: Props) {

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

  const [colorIcon, setColorIcon] = React.useState(false);

  const [favArr, setFavArr] = React.useState([]);
  const [watchedArr, setWatchedArr] = React.useState([]);
  const [compareArr, setCompareArr] = React.useState([]);


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

  function showModalFavorite(event) {
    event.preventDefault()
    setShowModalFavorite(true)
  }

  async function addToFavorite(id) {
    const res = await fetch('/api/favorite/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.ok) {
      console.log(res)
      async function start() {
        const res = await fetch('/api/favorite/getAll', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (res.ok) {
          // console.log(res)
          const result = await res.json()
          result !== undefined ?
            setFavArr(result.favoriteCarUser.favoriteCars)
            :
            setFavArr(null)
        }
      }
      start()
    }
  }


  async function deleteToFavorite(id) {
    const res = await fetch('/api/favorite/del/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.ok) {
      console.log(res)
      async function start() {
        const res = await fetch('/api/favorite/getAll', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (res.ok) {
          // console.log(res)
          const result = await res.json()
          result !== undefined ?
            setFavArr(result.favoriteCarUser.favoriteCars)
            :
            setFavArr(null)
        }
      }
      start()
    }
  }




  async function addToCompare(id) {
    const res = await fetch('/api/favorite/compare/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.ok) {
      console.log(res)
      async function startCompare() {
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
      startCompare()
    }
  }

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

  // при загрузке дает избранное, сравнение
  useEffect(() => {
    async function start() {
      const res = await fetch('/api/favorite/getAll', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.ok) {
        const result = await res.json()
        result !== undefined ?
          setFavArr(result.favoriteCarUser.favoriteCars)
          :
          setFavArr(null)
      }
      const resComapre = await fetch('/api/favorite/compare/getAll', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (resComapre.ok) {
        const resultCompare = await resComapre.json()
        resultCompare !== undefined ?
          setCompareArr(resultCompare.compareCarUser.compareCars)
          :
          setCompareArr(null)
      }
      const resWatched = await fetch('/api/favorite/watchedcar/getAll', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (resWatched.ok) {
        const resultWatched = await resWatched.json()
        resultWatched !== undefined ?
          setWatchedArr(resultWatched.watchedCarUser.watchedCars)
          :
          setWatchedArr(null)
      }
    }
    start()


  }, [])
  return (
    <>
      <div className='background'>
        <Box
          sx={{
            display: 'flex', position: 'fixed', flexDirection: 'column', bottom: '0', right: '0',
            width: 'auto', height: 'auto', marginBottom: '20px',
          }}
        >
          {watchedArr.length > 0 &&
            (<>
              <Link href={'/catalog/watched-cars'}>
                <HistoryIcon
                  sx={{
                    display: 'flex', fontSize: '40px', bottom: '0', right: '0', color: '#005baa',
                    '&:hover': { color: 'black' }
                  }}
                />
              </Link>
              <Typography
                sx={{
                  display: 'flex', fontSize: '17px', justifyContent: 'center'
                }}
              >{watchedArr.length}</Typography>
            </>)
          }
          {compareArr.length > 0 &&
            (<>
              <Link href={'/catalog/compare-cars'}>
                <CompareIcon
                  sx={{
                    display: 'flex', fontSize: '40px', bottom: '0', right: '0', color: '#005baa',
                    '&:hover': { color: 'green' }
                  }}
                />
              </Link>
              <Typography
                sx={{
                  display: 'flex', fontSize: '17px', justifyContent: 'center'
                }}
              >{compareArr.length}</Typography>
            </>)
          }
          {favArr.length > 0 &&
            (<>
              <Link href={'/catalog/favorite-cars'}>
                <FavoriteBorderIcon
                  sx={{
                    display: 'flex', fontSize: '40px', bottom: '0', right: '0', color: '#005baa',
                    '&:hover': { color: 'red' }
                  }}
                />
              </Link>
              <Typography
                sx={{
                  display: 'flex', fontSize: '17px', justifyContent: 'center'
                }}
              >{favArr.length}</Typography>
            </>)
          }
        </Box>

        <div className='cards' id="desktop">
          {filteredCars.map(car =>
            <Card key={car.id} sx={{
              width: 345, height: 500, display: 'flex', border: '1px  solid transparent',
              flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear',
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
                  <Avatar sx={{}} aria-label="recipe"
                    src={logoFind(LogoList, car.CarModel.brandName)}>

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
                  sx={{
                    cursor: 'pointer',
                  }}

                  alt="car"
                />
              </Link>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {car.CarModification.name} / {driverTypeStr(car.CarModification.driveType)}
                  <div className='price'><h3>{numberWithSpaces(Number(car.price))} ₽</h3></div>
                  <div className='priceMonth'>
                    <button className="btn">от {numberWithSpaces(Math.round(Number(car.priceMonth)))} ₽/мес</button>
                  </div>
                  <div className='office'>
                    <span>{car.DealerModel.name}</span>    <RoomIcon />
                  </div>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  {favArr.find(carFav => carFav.car.id === car.id) ?
                    <FavoriteIcon sx={{ color: 'red' }}
                      onClick={() => deleteToFavorite(car.id)}
                    /> :
                    <FavoriteIcon sx={{ '&:hover': { color: 'red' } }}
                      onClick={() => addToFavorite(car.id)}
                    />
                  }
                </IconButton>
                <IconButton aria-label="share">
                  {compareArr.find(carCompar => carCompar.car.id === car.id) ?
                    <AddRoadIcon sx={{ color: 'green' }}
                      onClick={() => deleteToCompare(car.id)}
                    /> :
                    <AddRoadIcon sx={{ '&:hover': { color: 'green' } }}
                      onClick={() => addToCompare(car.id)}
                    />
                  }
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
            <Card key={car.id} sx={{
              width: '90%', height: 490, display: 'flex', border: '1px  solid transparent',
              flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear',
              '&:hover': { transform: 'scale(1.04)', border: '1px solid black' },
            }} >
              <CardHeader
                sx={{ display: 'flex', height: '50px', dispaly: 'flex', alignItems: 'center' }}
                avatar={
                  <Avatar sx={{}} aria-label="recipe"
                    src={logoFind(LogoList, car.CarModel.brandName)}>
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings" sx={{
                    marginTop: '-10px',
                    marginRight: '-5px'
                  }}>
                    <IconButton aria-label="add to favorites">
                      {favArr.find(carFav => carFav.car.id === car.id) ?
                        <FavoriteIcon sx={{ color: 'red' }}
                          onClick={() => deleteToFavorite(car.id)}
                        /> :
                        <FavoriteIcon sx={{ '&:hover': { color: 'red' } }}
                          onClick={() => addToFavorite(car.id)}
                        />
                      }
                    </IconButton>
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
                  height="180px"
                  image={car.img[0]}
                  sx={{
                    cursor: 'pointer',
                    backgroundSize: 'contain'
                  }}

                  alt="car"
                />
              </Link>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {car.CarModification.name} / {driverTypeStr(car.CarModification.driveType)}
                  <div className='price'><h3>{numberWithSpaces(Number(car.price))} ₽</h3></div>
                  <div className='priceMonth'>
                    <button className="btn">от {numberWithSpaces(Math.round(Number(car.priceMonth)))} ₽/мес</button>
                  </div>
                  <div className='office'>
                    <span>{car.DealerModel.name}</span>    <RoomIcon />
                  </div>
                </Typography>
              </CardContent>
              <div style={{ display: "flex", width: '100%', height: '45px', justifyContent: 'center', padding: '6px' }}>
                <Button variant="contained"
                  sx={{ textAlign: 'center', fontSize: '12px', width: '95%', }}
                  onClick={e => showModal}>Получить консультацию</Button>
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
      border:none;
      color:white;
      font-size:16px;
      text-align: center;
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
      #desktop{
        display: none;
      }
      #mob{
        display: flex;
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
    }

  

  
            
  `}</style>
    </>
  )
}

export default FilteredNewCars