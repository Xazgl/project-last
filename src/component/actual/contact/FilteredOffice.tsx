import { Car, Offices } from '@prisma/client'
import React, { Dispatch, MouseEventHandler, SetStateAction, useEffect, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { black } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RoomIcon from '@mui/icons-material/Room';
import Link from 'next/link';
import { Button, createTheme, useMediaQuery } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>,
  filteblackOffices: Offices[],
}



function FilteredOffice({ setShowModal, filteblackOffices }: Props) {


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
    setShowModal(true)
  }


  return (
    <>
      <div className='background'>
        <div className='cards' id="desktop">
          {filteblackOffices.map(dealer =>
            <Card
              key={dealer.id}
              sx={{
                width: 345, height: 410, display: 'flex', border: '1px  solid transparent',
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
                  marginTop: '360px',
                  backgroundColor: '#131313',
                  position: 'absolute'
                }
              }} >
              <CardHeader
                avatar={
                  <Avatar sx={{}} aria-label="recipe"
                    src={dealer.label}>
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={<Typography
                  sx={{
                    color: '#151515', fontWeight: 'bold', fontSize: '13px'
                  }}>
                  {dealer.name}
                </Typography>}
              />

              <Link href={{
                pathname: '/catalog/car/[id]',
                query: { id: dealer.id }
              }}>
                <CardMedia
                  component="img"
                  height="194"
                  image={dealer.photo}
                  sx={{
                    cursor: 'pointer',
                  }}

                  alt="car"
                />
              </Link>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {/* {dealer.city}, {dealer.address} */}
                  <div className='office'>
                    <>
                      <div className="circle"> <RoomIcon sx={{ fontSize: '1p9x' }} /> </div> <span>{dealer.address}</span>
                    </>
                  </div>
                  <div className='price'>
                    <>
                      <div className="circle" id="circlePhone"> <LocalPhoneIcon sx={{ fontSize: '14px' }} /> </div>
                      <h3>{dealer.phone}</h3>
                    </>
                  </div>

                </Typography>
              </CardContent>
              <button className="cblackit" onClick={() => showModal}>
                <span className="consultation" >Позвонить</span>
              </button>
            </Card>
          )}
        </div>

        <div className='cards' id="mob">
          {filteblackOffices.map(dealer =>
            <Card
              key={dealer.id}
              sx={{
                width: '90%', height: 410, display: 'flex', border: '1px  solid transparent',
                flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear',
                '&:hover': {
                  transform: 'scale(1.04)'
                },
              }} >
              <CardHeader
                sx={{ display: 'flex', height: '50px', dispaly: 'flex', alignItems: 'center' }}
                avatar={
                  <Avatar sx={{}} aria-label="recipe"
                    src={dealer.label}>
                  </Avatar>
                }
                title={<Typography
                  sx={{
                    color: '#151515', fontWeight: 'bold', fontSize: '13px'
                  }}>
                  {dealer.name}
                </Typography>}
              />

              <Link href={{
                pathname: '/catalog/car/[id]',
                query: { id: dealer.id }
              }}>
                <CardMedia
                  component="img"
                  height="180px"
                  image={dealer.photo}
                  sx={{
                    cursor: 'pointer',
                    backgroundSize: 'contain'
                  }}

                  alt="car"
                />
              </Link>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <div className='office'>
                    <>
                      <div className="circle"> <RoomIcon sx={{ fontSize: '1p9x' }} /> </div> <span>{dealer.address}</span>
                    </>
                  </div>
                  <div className='price'>
                    <>
                      <div className="circle" id="circlePhone"> <LocalPhoneIcon sx={{ fontSize: '14px' }} /> </div>
                      <h3 id="phone">{dealer.phone}</h3>
                    </>
                  </div>
                </Typography>
              </CardContent>
              <div style={{ display: "flex", width: '100%', height: '45px', justifyContent: 'center', padding: '6px' }}>
                <Button variant="contained"
                  sx={{ textAlign: 'center', fontSize: '12px', width: '95%', backgroundColor: ' #131313', borderRadius: '0' }}
                  onClick={showModal}>Связаться</Button>
              </div>
            </Card>
          )}
        </div>
      </div>

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
      height: 100%;
      padding: 20px;
      justify-content: center;
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
      font-family: 'Gilroy',sans-serif;
      color:#151515;
      gap:10px;
    }

    .priceMonth {
      display: flex;
      justify-content: start;
      width: 80%;
      height: 35px;
    }

    .circle {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        color:   #131313;
        font-weight: bold;
        cursor: pointer;
    }
    
    #circlePhone {
      background-color:  #131313;
      color:  white;

    }

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding:1px;
      width:80%;
      height: 100%;
      border:solid 1px  #131313;
      color: #131313;
      background-color: transparent;
      border-radius: 3px;
      font-size: 15px;
      font-weight: bold;
      transition: 0.6s;
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
      gap:10px;
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
      border:none;
      color:white;
      font-size:16px;
      text-align: center;
    }

    .cblackit:hover {
      background-color:#D1AC02;
      
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
        height: 30px;
        font-size: 12px;
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
      #phone {
        font-size: 15px;
      }
    }

    @media(max-width: 320px) {
      #phone {
        font-size: 13px;
      }
    }

  

  
            
  `}</style>
    </>
  )
}

export default FilteredOffice