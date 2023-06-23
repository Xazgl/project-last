import React, { Dispatch, MouseEventHandler, SetStateAction, useEffect, useState } from 'react'
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
import { Box, Button, createTheme, useMediaQuery } from '@mui/material';
import { LogoList, driverTypeStr, logoFind, numberWithSpaces } from '../../../../services/functions';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import bannerDc from '/public/images/catalogPages/geely/dc.jpg'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CardModelsFilter from './modelsCard/CardModelsFilter';
import { AllCarDto } from '../../../../../@types/dto';

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>,
  filteredCars: AllCarDto,
  setShowModalFavorite: Dispatch<SetStateAction<boolean>>,
  cars: AllCarDto,
  setFilteredCars: Dispatch<SetStateAction<AllCarDto>>,

}



function FilteredNewCars({ setShowModal, setShowModalFavorite, filteredCars, cars,  setFilteredCars  }: Props) {

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
                    '&:hover': { color: 'black' }, fontFamily: 'Roboto'
                  }}
                />
              </Link>
              <Typography
                sx={{
                  display: 'flex', fontSize: '17px', justifyContent: 'center', fontFamily: 'Roboto'

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
                    '&:hover': { color: 'green' }, fontFamily: 'Roboto'
                  }}
                />
              </Link>
              <Typography
                sx={{
                  display: 'flex', fontSize: '17px', justifyContent: 'center', fontFamily: 'Roboto'
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
                    '&:hover': { color: 'red' }, fontFamily: 'Roboto'
                  }}
                />
              </Link>
              <Typography
                sx={{
                  display: 'flex', fontSize: '17px', justifyContent: 'center', fontFamily: 'Roboto'
                }}
              >{favArr.length}</Typography>
            </>)
          }
        </Box>

        <div className='cards' id="desktop">

          {/* <div className='descBrand'>
            <div className='titleBrand'>О Geely</div>
            <div className='txtBrand'>
              Geely - символ элегантности, инноваций и
              непревзойденного качества. Отправляйтесь в
              захватывающее путешествие с мастером инженерного искусства,
              который воплощает будущее автомобильной индустрии.Бренд Geely -
              история страстного стремления
              и мастерства, начавшаяся с маленькой китайской автомобильной
              компании и превратившаяся в глобального лидера инноваций и
              качества в автомобильной индустрии. Сегодня Geely -
              это символ современности и элегантности, предлагающий
              уникальный опыт вождения и гарантирующий безопасность и комфорт на каждом пути.
            </div>
            <div className='rowColumn'>
              <div className='columnBrand'>
                <Card sx={{
                  width: 345, height: 'auto', display: 'flex', border: '1px  solid transparent',
                  flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear', fontFamily: 'Roboto',

                }} >
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{ maxWidth: '50px', maxHeight: '50px', marginLeft: '10px' }}
                        aria-label="brand"
                        src={logoFind(LogoList,'Geely')}
                      />
                    }
                    action={
                      <IconButton aria-label="settings">
                        <AddLocationAltIcon sx={{ cursor: 'pointer' }} onClick={handleCopyLink} />
                      </IconButton>
                    }
                    title={'Официальный дилер'}
                    subheader={'Geely Арконт'}
                  />

                  <Link href={{
                    pathname: 'https://yandex.ru/maps/38/volgograd/?from=api-maps&ll=44.438373%2C48.705594&mode=routes&origin=jsapi_2_1_79&rtext=~48.705594%2C44.438373&rtt=auto&ruri=~&z=16',
                  }}>
                    <CardMedia
                      component="img"
                      height="194"
                      image={bannerDc.src}
                      sx={{
                        cursor: 'pointer',
                      }}
                      loading="lazy"
                      decoding='async'

                      alt="car"
                    />
                  </Link>
                </Card>
              </div>
              <div className='columnBrand'>
                <div className='titleBrand'>
                  <span id="titleMap">Geely Арконт </span>
                </div>
                <div className="descBrand">
                  <a className='href_a' href="tel:+78442205073">+7 (844) 220-50-73</a>
                </div>
                <div className="descBrand">
                  г. Волгоград, ул. Неждановой, 12
                </div>
                <div className="descBrand">
                  <a className='href_a' href="mailto:geely@arkont.ru">geely@arkont.ru</a>
                </div>
                <div className="descBrand">
                  <a className='href_a' style={{ color: 'black' }} href="https://yandex.ru/maps/38/volgograd/?from=api-maps&ll=44.438373%2C48.705594&mode=routes&origin=jsapi_2_1_79&rtext=~48.705594%2C44.438373&rtt=auto&ruri=~&z=16">Построить маршрут</a>
                </div>
              </div>
            </div>
            <div className="descBrand">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A399fb4497c8726800a313dd39c8c20ad93898ba103df9256cab8c789f8a27656&amp;source=constructor" width="100%" height="00" frameBorder="0"></iframe>
            </div>
                
          </div> */}

          {filteredCars.map(car =>
            <Card key={car.id} sx={{
              width: 345, height: 490, display: 'flex', border: '1px  solid transparent',
              flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear', fontFamily: 'Roboto',
              '&:hover': { transform: 'scale(1.04)', },
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
                    <MoreVertIcon sx={{ cursor: 'pointer' }} onClick={handleCopyLink} />
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
                  loading="lazy"
                  decoding='async'

                  alt="car"
                />
              </Link>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {car.CarModification.name} / {driverTypeStr(car.CarModification.driveType)}
                  <div className='price'> <h3 >Цена от  <span style={{ color: '#0c54a0' }}>{numberWithSpaces(Number(car.price))}*</span>  ₽</h3></div>
                  <div className='priceMonth'>
                    <button className="btn">от {numberWithSpaces(Math.round(Number(car.priceMonth)))} ₽/мес
                    </button>
                  </div>
                  <div className='office'>
                    <span>{car.DealerModel.name}</span>    <RoomIcon sx={{fontSize:'16px'}} />
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
          {/* {filteredCars.length > 0 && (
            <Card sx={{
              width: 345, height: 500, display: 'flex',
              flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear', fontFamily: 'Roboto',
            }} >
            </Card>
          )} */}
        </div>

        <div className='cards' id="mob">
          {filteredCars.map(car =>
            <Card key={car.id} sx={{
              width: '90%', height: 480, display: 'flex', border: '1px  solid transparent',
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

                  loading="lazy"
                  decoding='async'
                  alt="car"
                />
              </Link>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {car.CarModification.name} / {driverTypeStr(car.CarModification.driveType)}
                  <div className='price'><h3>{numberWithSpaces(Number(car.price))} ₽</h3></div>
                  <div className='priceMonth'>
                    <button className="btn"  onClick={showModal}>от {numberWithSpaces(Math.round(Number(car.priceMonth)))} ₽/мес</button>
                  </div>
                  <div className='office'>
                    <span>{car.DealerModel.name}</span>    <RoomIcon />
                  </div>
                </Typography>
              </CardContent>
              <div style={{ display: "flex", width: '100%', height: '45px', justifyContent: 'center', padding: '6px' }}>
                <Button variant="contained"
                  sx={{ textAlign: 'center', fontSize: '12px', fontFamily: 'Roboto', width: '95%', }}
                  onClick={showModal}>Получить консультацию</Button>
              </div>
            </Card>
          )}
        </div>
      </div >

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
      height: 100%;
      padding: 20px;
      justify-content: center;
      background-color: #f5f2f261;
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
      border-bottom:solid  #0c54a0  2px;
    }

    .descBrand {
      display: flex;
      margin-top: 20px;
    }

    .href_a{
      text-decoration: none;
      color:#0c54a0;
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
      background-color: #f2f2f2;
      font-size: 15px;
      font-weight: bold;
      transition: 0.6s;
      font-family: 'Roboto','sans-serif'; 
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
      font-family: 'Roboto','sans-serif'; 
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
      font-family: 'Roboto','sans-serif'; 

    }

    .credit:hover {
      background-color:#0c54a0;
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
      font-family: 'Roboto','sans-serif'; 

    }

    #priceMonth {
      width: 100%;
      height: auto;
      font-weight: bold;
      margin-top:20px;
      font-family: 'Roboto','sans-serif'; 
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