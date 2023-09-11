
import React, { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from 'next/link';
import UpdateDisabledIcon from '@mui/icons-material/UpdateDisabled';
import { CircularProgress, Slide } from '@mui/material';
import { driverTypeStr, logoFind, numberWithSpaces } from '../../allNewCarPage/servicesNewCar/service';
import { LogoList, gearBoxName } from '../../../../services/functions';
import { LogoListUsed } from '../../allUsedCarPage/services/servicesUsedCars';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import CountUp from 'react-countup';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';


type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>,
  refCards: MutableRefObject<HTMLDivElement>,
  watchedArr: any[],
  setWatchedArr: Dispatch<SetStateAction<any[]>>,
  watchedArrUsed: any[],
  setWatchedArrUsed: Dispatch<SetStateAction<any[]>>,

}


function WatchedCarsNew({ setShowModal, setWatchedArr, watchedArr, setWatchedArrUsed, watchedArrUsed, refCards }: Props) {

  const [expanded, setExpanded] = React.useState(false);
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
  async function deleteToWatched(id) {
    const res = await fetch('/api/favorite/watchedcar/del/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.ok) {
      console.log(res)
      async function start() {
        const res = await fetch('/api/favorite/watchedcar/getAll', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (res.ok) {
          // console.log(res)
          const result = await res.json()
          result !== undefined ?
            setWatchedArr(result.watchedCarUser.watchedCars)
            :
            setWatchedArr(null)
        }
      }
      start()
    }
  }


  //удаление с пробегом 
  async function deleteToWatchedUsed(id) {
    const res = await fetch('/api/usedwatched/del/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.ok) {
      console.log(res)
      async function start() {
        const res = await fetch('/api/usedwatched/getAll', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (res.ok) {
          // console.log(res)
          const result = await res.json()
          result !== undefined ?
            setWatchedArrUsed(result.watchedCarUser.watchedUsedCars)
            :
            setWatchedArrUsed(null)
        }
      }
      start()
    }
  }



  return (
    <>
      <div className='divTitle'>
        <HistoryToggleOffIcon sx={{ fontSize: '100%' }} />
        Вы смотрели <span id="sum">
          <CountUp start={0} end={watchedArr.length + watchedArrUsed.length} duration={1.5} separator=" " suffix="  шт" />
        </span>
      </div>
      <div className='background' ref={refCards}>
        {watchedArr !== null || watchedArrUsed !== null ?
          (<>
            <div className='cards' id="desktop" ref={visibleElementRef}>
              <>
                {watchedArr !== null ?
                  <>
                    {watchedArr.map(car => {
                      return <Slide in={isVisible} key={car.car.id} direction="right" timeout={500}>
                        <Card key={car.car.id} sx={{
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
                                <li>Пробег: 0 км</li>
                              </ul>

                              <div className='price'><h4>Цена от <span style={{ color: ' #131313' }}>{numberWithSpaces(Number(car.car.price))}*</span> ₽</h4></div>
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
                              <UpdateDisabledIcon sx={{ color: 'black' }}
                                onClick={() => deleteToWatched(car.car.id)}
                              />
                            </IconButton>
                            <IconButton aria-label="share">
                            </IconButton>
                          </CardActions>
                          {/* <button className="credit" onClick={showModal}>
                    <span className="consultation" >Получить консультацию</span>
                  </button> */}
                        </Card>
                      </Slide>
                    }
                    )}
                  </>
                  :
                  <></>
                }
              </>

              {watchedArrUsed !== null || watchedArrUsed.length < 0 ?
                <>
                  {
                    watchedArrUsed.map(carUsed => {
                      return <Card key={carUsed.car.id} sx={{
                        width: 345, height: 580, display: 'flex', border: '1px  solid transparent',
                        flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear',
                        '&:hover': {
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
                              <li>{carUsed.car.driverType} привод</li>
                              <li>Трансмиссия: {carUsed.car.gearboxType}</li>
                              {/* <li>Пробег: {carUsed.car.mileage}км</li> */}
                              <li>Пробег: {numberWithSpaces(carUsed.car.mileage)} км</li>
                            </ul>
                            <div className='price'><h4>Цена от <span style={{ color: ' #131313' }}>{numberWithSpaces(Number(carUsed.car.price))}*</span> ₽</h4></div>
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
                            <UpdateDisabledIcon sx={{ color: 'black' }}
                              onClick={() => deleteToWatchedUsed(carUsed.car.id)}
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
                    )
                  }
                </>
                :
                <></>
              }

            </div>

            <div className='cards' id="mob">
              {watchedArr !== null ?
                <>

                  {watchedArr.map(car =>
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
                              <UpdateDisabledIcon sx={{ color: 'black' }}
                                onClick={() => deleteToWatched(car.car.id)}
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
                            <li>Пробег: 0 км</li>
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
                </>
                :
                <></>
              }
              {watchedArrUsed !== null ?
                <>
                  {watchedArrUsed.map(carUsed =>
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
                              <UpdateDisabledIcon sx={{ color: 'black' }}
                                onClick={() => deleteToWatchedUsed(carUsed.car.id)}
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
                            <li>Пробег: {numberWithSpaces(carUsed.car.mileage)} км</li>
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
                </>
                :
                <></>
              }
            </div>
          </>)
          :
          <CircularProgress />
        }
      </div>

      <style jsx>{`              
     
  
      
    .divTitle{
      display:flex;
      width: 100%;
      font-size:40px;
      align-items: center;
      gap:10px;
      color:white;
      background-color:  #131313;
      justify-content: center;
      font-family: 'Roboto','sans-serif'; 
      padding: 10px;
    }

    #sum {
      font-size: 15px;
      color: rgb(209, 215, 221)
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
      color: #131313;
      background-color:  #f2f2f2;
      cursor: pointer;
      font-size: 15px;
      font-weight: bold;
      transition: 0.6s;
      cursor: pointer;
    }

    .btn:hover {
      background-color: #131313; 
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

export default WatchedCarsNew