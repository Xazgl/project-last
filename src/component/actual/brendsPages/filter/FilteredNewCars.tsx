import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
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
import RoomIcon from '@mui/icons-material/Room';
import Link from 'next/link';
import { Box, Button, } from '@mui/material';
import { LogoList, driverTypeStr, logoFind, numberWithSpaces } from '../../../../services/functions';
import { AllCarDto } from '../../../../../@types/dto';
import CarWithoutImg from '/public/images/noPhoto.png'
import Image from 'next/image';

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>,
  filteredCars: AllCarDto,
  setShowModalFavorite: Dispatch<SetStateAction<boolean>>,
  cars: AllCarDto,
  setFilteredCars: Dispatch<SetStateAction<AllCarDto>>,

}



function FilteredNewCars({ setShowModal, setShowModalFavorite, filteredCars, cars, setFilteredCars }: Props) {

  const [expanded, setExpanded] = React.useState(false);

  const [colorIcon, setColorIcon] = React.useState(false);

  const [favArr, setFavArr] = React.useState([]);
  const [watchedArr, setWatchedArr] = React.useState([]);
  const [compareArr, setCompareArr] = React.useState([]);

  const [copied, setCopied] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);


  const handleCopyLink = (event) => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => setCopied(true))
      .catch((error) => console.error('Не удалось скопировать ссылку', error));
    // setAnchorEl(event.currentTarget);
  };


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

  function showModal() {
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





  const [isVisible, setIsVisible] = useState(false);
  const visibleElementRef = useRef(null);



  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      const isElementVisible = (element) => {
        const { top, bottom } = element.getBoundingClientRect();
        return top < windowHeight && bottom >= 0;
      };

      const element = visibleElementRef.current;

      if (isElementVisible(element)) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div className='background'  >
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
                    '&:hover': { color: 'black' }, fontFamily: 'Gilroy'
                  }}
                />
              </Link>
              <Typography
                sx={{
                  display: 'flex', fontSize: '17px', justifyContent: 'center', fontFamily: 'Gilroy'

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
                    '&:hover': { color: 'green' }, fontFamily: 'Gilroy'
                  }}
                />
              </Link>
              <Typography
                sx={{
                  display: 'flex', fontSize: '17px', justifyContent: 'center', fontFamily: 'Gilroy'
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
                    '&:hover': { color: 'black' }, fontFamily: 'Gilroy'
                  }}
                />
              </Link>
              <Typography
                sx={{
                  display: 'flex', fontSize: '17px', justifyContent: 'center', fontFamily: 'Gilroy'
                }}
              >{favArr.length}</Typography>
            </>)
          }
        </Box>

        <div className='cards' id="desktop" ref={visibleElementRef}>
        <div className='titleBackground'>Модельный ряд</div>

        
          { filteredCars.map(car =>
            // <Slide in={isVisible} key={car.id} direction="right" timeout={500}>
            <Card key={car.id} sx={{
              width: 345, height: 490, display: 'flex', border: '1px  solid transparent',
              flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear',
              fontFamily: 'Gilroy', boxShadow: 'none',
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
                marginTop: '400px',
                backgroundColor: ' #131313',
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
                    <MoreVertIcon sx={{ cursor: 'pointer' }} onClick={handleCopyLink} />
                  </IconButton>
                }
                title={car.CarModel.brandName}
                subheader={car.CarModel.modelName}
              />

              {car.img.length > 0 ?
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
                    loading="lazy"
                    decoding='async'

                    alt="car"
                  />
                  {/* <Box
                    sx={{
                      display: 'flex', width: '100%',height: "194", position: 'relative',
                      marginTop:'0px',paddingTop: '0px'
                    }}
                  >
                    <Image
                      src={car.img[0]}
                      alt={car.img[0]}
                      layout="fill"
                      sizes="(max-width: 750px) 50vw,
                            (max-width: 828px) 40vw,
                            (max-width: 1080px) 33vw,
                            20vw"
                      loading="lazy"
                    />
                  </Box> */}
                </Link>
                :
                <CardMedia
                  component="img"
                  height="194"
                  image={CarWithoutImg.src}
                  sx={{
                    cursor: 'pointer',
                  }}
                  loading="lazy"
                  decoding='async'

                  alt="car"
                />
              }
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {car.CarModification.name} / {driverTypeStr(car.CarModification.driveType)}
                  <div className='price'> <h3 >Цена от  <span style={{ color: ' #131313' }}>{numberWithSpaces(Number(car.price))}*</span>  ₽</h3></div>
                  <div className='priceMonth'>
                    <button className="btn" onClick={showModal}>от {numberWithSpaces(Math.round(Number(car.priceMonth)))} ₽/мес
                    </button>
                  </div>
                  <div className='office'>
                    <span>{car.DealerModel.name}</span>    <RoomIcon sx={{ fontSize: '16px' }} />
                  </div>
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
                {/* <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore> */}
              </CardActions>
              {/* <button className="cblackit" onClick={showModal}>
                <span className="consultation" >Получить консультацию</span>
              </button> */}
            </Card>
            // </Slide>

          )}
          {/* { filteredCars.length > 0 && (
            <Card sx={{
              width: 345, height: 500, display: 'flex',
              flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear', fontFamily: 'Gilroy',
            }} >
            </Card>
          )} */}
        </div>

        <div className='cards' id="mob">
        <div className='titleBackground'>Модельный ряд</div>
          { filteredCars.map(car =>
            <Card key={car.id} sx={{
              width: '90%', height: 480, display: 'flex', border: '1px  solid transparent',
              flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear', boxShadow: 'none'
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
                        <FavoriteIcon sx={{ color: 'black' }}
                          onClick={() => deleteToFavorite(car.id)}
                        /> :
                        <FavoriteIcon sx={{ '&:hover': { color: 'black' } }}
                          onClick={() => addToFavorite(car.id)}
                        />
                      }
                    </IconButton>
                  </IconButton>
                }
                title={car.CarModel.brandName}
                subheader={car.CarModel.modelName}
              />

              {car.img.length > 0 ?
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

                    loading="lazy"
                    decoding='async'
                    alt="car"
                  />
                </Link>
                :
                <CardMedia
                  component="img"
                  height="180px"
                  image={CarWithoutImg.src}
                  sx={{
                    cursor: 'pointer',
                    backgroundSize: 'contain'
                  }}
                  loading="lazy"
                  decoding='async'
                  alt="car"
                />
              }
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {car.CarModification.name} / {driverTypeStr(car.CarModification.driveType)}
                  <div className='price'><h3>{numberWithSpaces(Number(car.price))} ₽</h3></div>
                  <div className='priceMonth'>
                    <button className="btn" onClick={showModal}>от {numberWithSpaces(Math.round(Number(car.priceMonth)))} ₽/мес</button>
                  </div>
                  <div className='office'>
                    <span>{car.DealerModel.name}</span>    <RoomIcon />
                  </div>
                </Typography>
              </CardContent>
              <div style={{ display: "flex", width: '100%', height: '45px', justifyContent: 'center', padding: '6px' }}>
                <Button variant="contained"
                  sx={{
                    textAlign: 'center', fontSize: '12px', fontFamily: 'Gilroy', width: '95%', height: '100%',
                    backgroundColor: ' #131313', borderRadius: '0'
                  }}
                  onClick={showModal}>Получить консультацию</Button>
              </div>
            </Card>
          )}
        </div>


        <div className='cards' id="mobMini">
          { filteredCars.map(car =>
            <Card key={car.id} sx={{
              width: '99%', height: 370, display: 'flex', border: '1px  solid transparent',
              flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear', boxShadow: 'none'
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
                        <FavoriteIcon sx={{ color: 'black' }}
                          onClick={() => deleteToFavorite(car.id)}
                        /> :
                        <FavoriteIcon sx={{ '&:hover': { color: 'black' } }}
                          onClick={() => addToFavorite(car.id)}
                        />
                      }
                    </IconButton>
                  </IconButton>
                }
                title={car.CarModel.brandName}
                subheader={car.CarModel.modelName}
              />

              {car.img.length > 0 ?
                <Link href={{
                  pathname: '/catalog/car/[id]',
                  query: { id: car.id }
                }}>
                  <CardMedia
                    component="img"
                    height="140px"
                    image={car.img[0]}
                    sx={{
                      cursor: 'pointer',
                      backgroundSize: 'contain'
                    }}

                    loading="lazy"
                    decoding='async'
                    alt="car"
                  />
                </Link>
                :
                <CardMedia
                  component="img"
                  height="140px"
                  image={CarWithoutImg.src}
                  sx={{
                    cursor: 'pointer',
                    backgroundSize: 'contain'
                  }}
                  loading="lazy"
                  decoding='async'
                  alt="car"
                />
              }
              <CardContent>
                <Typography variant="body2" color="text.secondary" >
                  {car.CarModification.name} <br /> {driverTypeStr(car.CarModification.driveType)}
                  <div className='price'><h3>{numberWithSpaces(Number(car.price))} ₽</h3></div>
                  <div className='priceMonth'>
                    <button className="btn" onClick={showModal}>от {numberWithSpaces(Math.round(Number(car.priceMonth)))} ₽/мес</button>
                  </div>
                  <div className='office'>
                    <span>{car.DealerModel.name}</span>  <RoomIcon />
                  </div>
                </Typography>
              </CardContent>
              <div
                style={{
                  display: "flex", width: '100%', height: '45px', justifyContent: 'center', padding: '6px'
                }}
              >
                {/* <Button variant="contained"
                  sx={{
                    textAlign: 'center', fontSize: '10px', fontFamily: 'Gilroy', width: '100%', height:'40px',
                    backgroundColor: ' #131313', borderRadius: '0'
                  }}
                  onClick={showModal}>Получить консультацию</Button> */}
              </div>
            </Card>
          )}
        </div>
      </div >

      <style jsx>{`              
    @keyframes cblackit-open {
          0% {
              opacity: 0;
              transform: translateY(-100%);
          }
      
          30% {
              opacity: 0.5;
              transform: translateY(-70%);
          }
      
          60% {
              opacity: 0.8;
              transform: translateY(-30%);
          }
      
          90% {
              opacity: 0.9;
              transform: translateY(-10%);
          }
      
          100% {
              opacity: 1;
              transform: translateY(0%);
          }
    }

    .background {
      display:flex;
      width: 100%;
      height: 100%;
      padding: 20px;
      justify-content: center;
      background-color: #f5f2f261;
    }

    
    .titleBackground{
      justify-content: start;
      width: 100%;
      font-size: 25px;
      font-weight: bold;
    }
    
    .descBrand{
      display: flex; 
      flex-direction: column;
      width: 100%;
      height: auto;
    }

    .titleBrand {
      display: flex;
      justify-content: flex-start;
      font-size: 25px;
      font-weight: bold;
    }

    .txtBrand {
      display:flex;
      justify-content: flex-start;
      margin-top:20px;
    }

    .rowColumn {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top:20px;
    }

    .columnBrand{
      display: flex;
      justify-content: flex-start;
      width: 50%;
      flex-direction:column;
    }

    #titleMap {
      border-bottom:solid   #131313  2px;
    }

    .descBrand {
      display: flex;
      margin-top: 20px;
    }

    .href_a{
      text-decoration: none;
      color: #131313;
    }


    .cards {
      display: flex;
      justify-content: start;
      gap:30px;
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
    }
 
    .price {
      font-size: 15px;
      line-height: 18px;
      display: flex;
      align-items: center;
      letter-spacing: normal;
      font-family: 'Gilroy',sans-serif;
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
      border: none;
      border-radius: 10px;
      color: white;
      background-color: black;
      font-size: 15px;
      font-weight: bold;
      transition: 0.6s;
      font-family: 'Gilroy','sans-serif'; 
      cursor: pointer;
    }

    .btn:hover {
      background-color: #131313; 
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
      font-family: 'Gilroy','sans-serif'; 
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
      cursor: pointer;
      border:none;
      color:white;
      font-size:16px;
      text-align: center;
      font-family: 'Gilroy','sans-serif'; 
      background-color:  #131313; 
      cursor: pointer;
      animation: cblackit-open 1.5s ease-in-out forwards;
      border-radius: 5px;

    }

    .cblackit:hover {
      background-color: #131313;
    }

    #mob{
      display: none;
      gap:10px;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      flex-wrap: nowrap;
    }

    #mobMini{
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
      font-family: 'Gilroy','sans-serif'; 

    }

    #priceMonth {
      width: 100%;
      height: auto;
      font-weight: bold;
      margin-top:20px;
      font-family: 'Gilroy','sans-serif'; 
    }

    @media(max-width: 1100px) {
      .cards {
       justify-content: center;
      }
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

      .titleBackground {
         font-size: 20px;
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

    @media(max-width: 360px) {
      #mob {
        display: none;
      }

      #mobMini {
        display: flex;
      }

      .priceMonth {
        width: 100%;
      }
      
      .price {
        font-size: 18px;
      }

      .btn {
        width: 100%;
        height: 35px;
        font-size: 13px;
      }

      .office {
          display: none;
      }
    }
    
  `}</style>
    </>
  )
}

export default FilteredNewCars