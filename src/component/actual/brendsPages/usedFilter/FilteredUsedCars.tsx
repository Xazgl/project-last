import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import HistoryIcon from '@mui/icons-material/History';
import CompareIcon from '@mui/icons-material/Compare';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import Image from 'next/image';
import { Box, Button } from '@mui/material';
import { logoFind, LogoList } from './services/servicesUsedCars';
import { AllUsedCarDto } from '../../../../../@types/dto';


type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>,
  filteredCars: AllUsedCarDto,
}


function FilteblackUsedCars({ setShowModal, filteredCars }: Props) {

  const [expanded, setExpanded] = React.useState(false);
  const [favArr, setFavArr] = React.useState([]);
  const [watchedArr, setWatchedArr] = React.useState([]);
  const [compareArr, setCompareArr] = React.useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => setCopied(true))
      .catch((error) => console.error('Не удалось скопировать ссылку', error));
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


  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function showModal() {
    setShowModal(true)
  }

  function upFirst(engine) {
    return engine.charAt(0).toUpperCase() + engine.slice(1)
  }

  async function addToFavorite(id) {
    const res = await fetch('/api/usedfavorite/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.ok) {
      console.log(res)
      async function start() {
        const res = await fetch('/api/usedfavorite/getAll', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (res.ok) {
          const result = await res.json()
          result !== undefined ?
            setFavArr(result.favoriteCarUser.favoriteUsedCars)
            :
            setFavArr(null)
        }
      }
      start()
    }
  }


  async function deleteToFavorite(id) {
    const res = await fetch('/api/usedfavorite/del/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.ok) {
      console.log(res)
      async function start() {
        const res = await fetch('/api/usedfavorite/getAll', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (res.ok) {
          // console.log(res)
          const result = await res.json()
          console.log(result)
          result !== undefined ?
            setFavArr(result.favoriteCarUser.favoriteUsedCars)
            :
            setFavArr(null)
        }
      }
      start()
    }
  }


  async function addToCompare(id) {
    const res = await fetch('/api/usedcompare/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.ok) {
      console.log(res)
      async function startCompare() {
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
            setCompareArr(result.compareCarUser.compareUsedCars)
            :
            setCompareArr(null)
        }
      }
      startCompare()
    }
  }

  async function deleteToCompare(id) {
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
            setCompareArr(result.compareCarUser.compareUsedCars)
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
      const res = await fetch('/api/usedfavorite/getAll', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.ok) {
        const result = await res.json()
        result !== undefined ?
          setFavArr(result.favoriteCarUser.favoriteUsedCars)
          :
          setFavArr(null)
      }
      const resComapre = await fetch('/api/usedcompare/getAll', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (resComapre.ok) {
        const resultCompare = await resComapre.json()
        resultCompare !== undefined ?
          setCompareArr(resultCompare.compareCarUser.compareUsedCars)
          :
          setCompareArr(null)
      }
      const resWatched = await fetch('/api/usedwatched/getAll', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (resWatched.ok) {
        const resultWatched = await resWatched.json()
        resultWatched !== undefined ?
          setWatchedArr(resultWatched.watchedCarUser.watchedUsedCars)
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
                    display: 'flex', fontSize: '40px', bottom: '0', right: '0', color: ' #131313',
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
                    display: 'flex', fontSize: '40px', bottom: '0', right: '0', color: ' #131313',
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
                    display: 'flex', fontSize: '40px', bottom: '0', right: '0', color: ' #131313',
                    '&:hover': { color: 'black' }
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
          <div className='titleBackground'>Модельный ряд</div>
          { filteredCars.map(car =>
            <Card
              key={car.id}
              sx={{
                width: 345, height: 500, display: 'flex', border: '1px  solid transparent',
                flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear',
                '&:hover': {
                  transform: 'scale(1.04)',
                  webkitBoxShadow: '4px 4px 16px -2px rgba(0, 0, 0, 0.2)',
                  mozBoxShadow: '4px 4px 16px -2px rgba(0, 0, 0, 0.2)',
                  boxShadow: '4px 4px 16px -2px rgba(0, 0, 0, 0.2)',
                  shadow: '4px 4px 16px -2px rgba(0, 0, 0, 0.2)'
                },
                '&:hover .cblackit': {
                  display: 'flex',
                  transition: '1s',
                  animation: 'cblackit-open.5s',
                  marginTop: '330px',
                  backgroundColor: '#0c7ee1',
                  position: 'absolute',
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
                    <MoreVertIcon sx={{ cursor: 'pointer' }} onClick={handleCopyLink} />
                  </IconButton>
                }
                title={car.vendor}
                subheader={car.modelShortName}
              />

              <Link href={{
                pathname: '/catalog/used-car/[id]',
                query: { id: car.id }
              }}>
                {/* <Image
                  key={car.picture[0]}
                  layout="fill"
                  src={car.picture[0]}
                  alt="Car"
                  width={250}
                  height={194}
                  placeholder="empty" // Определение типа заглушки
                  blurDataURL={car.picture[0]} // Указание базового URL для заглушки
                  loading="lazy"
                /> */}

                {/* <LazyLoad height={194} > */}
                {/* <CardMedia
                  component="img"
                  height="194"
                  image={car.picture[0]}
                  sx={{ cursor: 'pointer' }}
                  loading="lazy"
                  decoding='async'
                  alt="car"
                /> */}

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    height: '203px',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                >
                  <Image
                    src={car.picture[0]}
                    alt={car.picture[0]}
                    layout="fill"
                    sizes="(max-width: 750px) 100vw,
                    (max-width: 1080px) 80vw,
                    90vw"
                    loading="lazy"
                    blurDataURL={car.picture[0]}
                  />
                </Box>
              </Link>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {upFirst(car.engine)} / {car.driverType} / Пробег {numberWithSpaces(car.mileage)} км
                  <div className='price'><h4>Цена от <span style={{ color: ' #131313' }}>{numberWithSpaces(Number(car.price))}*</span> ₽</h4></div>
                  <div className='priceMonth'>
                    <button className="btn" onClick={showModal}>от {numberWithSpaces(Math.round(Number(car.price) / 150))} ₽/мес</button>
                  </div>
                  {/* <div className='office'>
                    <span>{car.DealerModel.name}</span>    <RoomIcon />
                  </div> */}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  {favArr.find(carFav => carFav.car.id === car.id) ?
                    <FavoriteIcon sx={{ color: 'black' }}
                      onClick={() => deleteToFavorite(car.id)}
                    /> :
                    <FavoriteIcon sx={{ '&:hover': { color: 'black' } }}
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
              </CardActions>
              {/* <button className="cblackit" onClick={showModal}>
                <span className="consultation" >Получить консультацию</span>
              </button> */}
            </Card>
          )}
        </div>

        <div className='cards' id="mob">
          <div className='titleBackground'>Модельный ряд</div>
          { filteredCars.map(car =>
            <Card
              key={car.id}
              sx={{
                width: '70%', height: 400, display: 'flex', border: '1px  solid transparent',
                flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear',
                '&:hover': { transform: 'scale(1.04)' },
              }} >
              <CardHeader
                sx={{ display: 'flex', height: '60px', dispaly: 'flex', alignItems: 'center', fontFamily: 'Gilroy' }}
                avatar={
                  <Avatar sx={{}} aria-label="recipe"
                    src={logoFind(LogoList, car.vendor)}>

                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings" sx={{
                    marginTop: '-10px',
                    marginRight: '-5px',
                  }}>
                    {favArr.find(carFav => carFav.car.id === car.id) ?
                      <FavoriteIcon sx={{ color: 'black' }}
                        onClick={() => deleteToFavorite(car.id)}
                      /> :
                      <FavoriteIcon sx={{ '&:hover': { color: 'black' } }}
                        onClick={() => addToFavorite(car.id)}
                      />
                    }
                  </IconButton>
                }
                title={car.vendor}
                subheader={car.modelShortName}
              />

              <Link href={{
                pathname: '/catalog/used-car/[id]',
                query: { id: car.id }
              }}>
                {/* <LazyLoad height={160}>
                  <CardMedia
                    component="img"
                    height="160px"
                    image={car.picture[0]}
                    sx={{
                      cursor: 'pointer',
                      backgroundSize: 'contain'
                    }}

                    loading="lazy"
                    decoding='async'
                    alt="car"
                  />
                </LazyLoad> */}
                <Box sx={{
                  display: 'flex',
                  justifyСontent: 'center',
                  width: '100%',
                  height: '170px',
                  position: 'relative',
                  padding: '0',
                  cursor: 'pointer'
                }}>
                  <Image
                    src={car.picture[0]}
                    alt={car.picture[0]}
                    layout="fill"
                    // 750, 828, 1080
                    sizes="(max-width: 750px) 70vw,
                  (max-width: 828px) 40vw,
                  (max-width: 1080px) 33vw,
                  20vw"
                    loading="lazy"
                  />
                </Box>
              </Link>
              <CardContent>
                <Typography variant="body2" color="text.secondary" >
                  {upFirst(car.engine)}
                  <br />
                  {car.driverType} привод
                  <br />
                  Пробег {numberWithSpaces(car.mileage)} км
                  <div className='price'><h4>Цена от <span style={{ color: ' #131313' }}>{numberWithSpaces(Number(car.price))}*</span> ₽</h4></div>
                  {/* <div className='priceMonth'>
                    <button className="btn">от {numberWithSpaces(Math.round(Number(car.price) / 150))} ₽/мес</button>
                  </div> */}
                </Typography>

                <div style={{
                  display: "flex", width: '100%', height: 'auto', justifyContent: 'center', padding: '6px'
                }}>
                  <Button variant="contained"
                    sx={{
                      textAlign: 'center', fontSize: '10px', width: '100%', fontFamily: 'Gilroy', backgroundColor: ' #131313',
                      height: '35px', borderRadius: '10px',
                      '&:hover': {
                        backgroundColor: '#D1AC02'
                      }
                    }}
                    onClick={showModal}>
                    Получить консультацию
                  </Button>
                </div>
              </CardContent>

            </Card>
          )}
        </div>
      </div >

      <style jsx>{`              
      @keyframes cblackit-open {
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
      overflow: auto;
      background-color: #f5f2f261;
      flex-direction: column;
    }

    .titleBackground{
      justify-content: start;
      width: 100%;
      font-size: 25px;
      font-weight: bold;
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
      font-family: 'Gilroy',sans-serif;
      color:black;
    }

    .priceMonth {
      display: flex;
      justify-content: start;
      width: 80%;
      height: 35px;
      border
    }

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding:1px;
      width:80%;
      height: 100%;
      border-radius: 10px;
      background-color: black;
      border:none;
      color:white;
      cursor: pointer;
      font-size: 15px;
      font-weight: bold;
      transition: 0.6s;
      cursor: pointer;
    }

    .btn:hover {
      background-color: #D1AC02; 
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

    .cblackit {
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
      font-family: 'Gilroy','sans-serif'; 
    }

    .cblackit:hover {
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

      .titleBackground {
         font-size: 20px;
      }

      .btn {
        width: 80%;
        height: 35px;
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

export default FilteblackUsedCars