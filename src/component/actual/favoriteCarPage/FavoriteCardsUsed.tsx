
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RoomIcon from '@mui/icons-material/Room';
import Link from 'next/link';

import { AllCarDto } from '../../../../@types/dto';
import { Button, CircularProgress } from '@mui/material';
import { driverTypeStr, logoFind, numberWithSpaces } from '../allNewCarPage/servicesNewCar/service';
import { LogoList } from '../allNewCarPage/type/typeNewCar';




type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>,
  favArrUsed: any,
  setFavArrUsed: Dispatch<SetStateAction<any[]>>,
}



function FavoriteCarsUsed({ setShowModal, setFavArrUsed, favArrUsed }: Props) {

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
          result !== undefined ?
            setFavArrUsed(result.favoriteCarUser.favoriteUsedCars)
            :
            setFavArrUsed(null)
        }
      }
      start()
    }
  }

  return (
    <>

      <div className='background'>
        {favArrUsed !== null ?
          (<>
            <div className='cards' id="desktop">
              {favArrUsed.map(car => {
                return <Card key={car.car.id} sx={{
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
                        src={logoFind(LogoList, car.car.vendor )}>

                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={car.car.vendor }
                    subheader={car.car.modelShortName}
                  />

                  <Link href={{
                    pathname: '/catalog/car/[id]',
                    query: { id: car.car.id }
                  }}>
                    <CardMedia
                      component="img"
                      height="194"
                      loading="lazy"
                      decoding='async'
                      image={car.car. picture[0]}
                      sx={{
                        cursor: 'pointer',
                      }}

                      alt="car"
                    />
                  </Link>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {car.car.mileage}км / {driverTypeStr(car.car.year)}
                      <div className='price'><h3>{numberWithSpaces(Number(car.car.price))} ₽</h3></div>
                      <div className='priceMonth'>
                        <button className="btn">от {numberWithSpaces(Math.round(Number(car.car.price/120)))} ₽/мес</button>
                      </div>
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon sx={{ color: 'red' }}
                        onClick={() => deleteToFavorite(car.car.id)}
                      />
                    </IconButton>
                    <IconButton aria-label="share">
                    </IconButton>
                  </CardActions>
                  <button className="credit" onClick={showModal}>
                    <span className="consultation" >Получить консультацию</span>
                  </button>
                </Card>
              }
              )}

            </div>

            <div className='cards' id="mob">
              {favArrUsed.map(car =>
                <Card key={car.car.id} sx={{
                  width: '90%', height: 490, display: 'flex', border: '1px  solid transparent',
                  flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear',
                  '&:hover': { transform: 'scale(1.04)', border: '1px solid black' },
                }} >
                  <CardHeader
                    sx={{ display: 'flex', height: '50px', dispaly: 'flex', alignItems: 'center' }}
                    avatar={
                      <Avatar sx={{}} aria-label="recipe"
                        src={logoFind(LogoList, car.car.vendor)}>
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings" sx={{
                        marginTop: '-10px',
                        marginRight: '-5px'
                      }}>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon sx={{ color: 'red' }}
                            onClick={() => deleteToFavorite(car.car.id)}
                          />
                        </IconButton>
                      </IconButton>
                    }
                    title={car.car.vendor}
                    subheader={car.car.modelShortName}
                  />

                  <Link href={{
                    pathname: '/catalog/car/[id]',
                    query: { id: car.car.id }
                  }}>
                    <CardMedia
                      component="img"
                      height="180px"
                      image={car.car.picture[0]}
                      sx={{
                        cursor: 'pointer',
                        backgroundSize: 'contain'
                      }}

                      alt="car"
                    />
                  </Link>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    {car.car.mileage}км / {driverTypeStr(car.car.year)}
                      <div className='price'><h3>{numberWithSpaces(Number(car.car.price))} ₽</h3></div>
                      <div className='priceMonth'>
                        <button className="btn">от {numberWithSpaces(Math.round(Number(car.car.price/120)))} ₽/мес</button>
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
          </>)
          :
          <CircularProgress />
        }
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
 

    .divTitle{
      display:flex;
      width: 100%;
      font-size:60px;
      color:rgba(0, 0, 0, 0.6);
      justify-content: center;
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
      font-family: 'Roboto','sans-serif'; 

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
      font-family: 'Roboto','sans-serif'; 


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

export default FavoriteCarsUsed