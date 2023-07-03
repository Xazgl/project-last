import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Link from 'next/link';
import bannerDc from '/public/images/catalogPages/geely/dc.jpg'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { LogoList } from '../../../allNewCarPage/type/typeNewCar';
import { logoFind } from '../../../allNewCarPage/servicesNewCar/service';

import news1 from '/public/images/catalogPages/faw/news/1.png'
import news2 from '/public/images/catalogPages/faw/news/2.png'

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useState } from 'react';
import { ModalImg } from '../../../../ModalImg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: '',
    imgPath: news1.src
  },
  {
    label: '',
    imgPath: news2.src
  },
];

function News({ }) {

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const [showModalImg, setShowModalImg] = useState(false)
  const [carImg, setCarImg] = useState('')


  function showModalImgFunction(x) {
    setShowModalImg(true)
    setCarImg(x)
  }



  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      <div className='background'>

        {/* <div className="leftC" ></div> */}
        <div className='cards' id="desktop">

          <div className='descBrand'>
            <div className='titleBrand'>Анонсы </div>
            <div className='txtBrand'>
              В Bestune B70 сочетаются динамика и комфорт, дополненные дерзким и
              уверенным профилем.
              Его элегантность считывается в пристальном внимании к деталям.
            </div>
            <div className='rowColumn'>
              <div className='columnBrand'>
                <img
                  loading="lazy"
                  decoding='async'
                  src={news1.src}
                  className="cardImg"
                  onClick={() => showModalImgFunction(news1.src)}
                >

                </img>
              </div>
              <div className='columnBrand'>
                <img
                  loading="lazy"
                  decoding='async'
                  src={news2.src}
                  className="cardImg"
                  onClick={() => showModalImgFunction(news2.src)}
                >

                </img>


                <div className='stepper'>
                  <Paper
                    square
                    elevation={0}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      height: 0,
                      pl: 2,
                      bgcolor: 'transparent',
                    }}
                  >

                    <Typography>{images[activeStep].label}</Typography>
                  </Paper>
                  <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                  >
                    {images.map((step, index) => (
                      <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                          <img
                            className="imgStepper"
                            src={step.imgPath}
                            alt={step.label}

                          />
                        ) : null}
                      </div>
                    ))}
                  </AutoPlaySwipeableViews>
                  <MobileStepper
                    sx={{ backgroundColor: 'transparent' }}
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                      <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                      >

                        {theme.direction === 'rtl' ? (
                          <KeyboardArrowLeft />
                        ) : (
                          <KeyboardArrowRight />
                        )}
                      </Button>
                    }
                    backButton={
                      <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                          <KeyboardArrowRight />
                        ) : (
                          <KeyboardArrowLeft />
                        )}

                      </Button>
                    }
                  />
                </div>
                {/* <Card sx={{
                  width: 345, height: 'auto', display: 'flex', border: '1px  solid transparent',
                  flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear', fontFamily: 'Roboto',
                  borderRadius: '0px'
                }} >

                  <CardMedia
                    component="img"
                    // height="90%"
                    image={news2.src}
                    loading="lazy"
                    decoding='async'
                    sx={{ borderRadius: '0px', width: '100%' }}

                    alt="car"
                  />

                </Card> */}
                {/* <div className='titleBrand'>
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
                </div> */}
              </div>
            </div>

          </div>
        </div>

        {
          showModalImg && <ModalImg carImg={carImg} showModalImg={showModalImg} setShowModalImg={setShowModalImg} />
        }
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
      padding: 20px;
      justify-content: center;
      overflow: auto;
      background-color: #f5f2f261;
    }

    .leftC{
       width: 400px;
    }

    .descBrand{
      display: flex; 
      flex-direction: column;
      width: 100%;
      height: auto;
      border: 2px solid #d1d7dd;
      padding: 20px;
    }

    .titleBrand {
      display: flex;
      justify-content: flex-start;
      font-size: 20px;
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
      padding: 10px;
    }

    .cardImg {
      display: flex;
      width: 100%;
      border: 2px solid #d1d7dd;
      cursor: pointer;
    
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

    .stepper {
      display:none;
      max-width: 400;
      flex-grow: 1 
    }

    .imgStepper {
      height: 255;
      display: block;
      max-width: 400;
      overflow: hidden;
      width: 100%;
    }



    @media(max-width: 1100px) {
      .cards {
       justify-content: center;
      }
      .leftC{
       width: 100px;
      }
    }

    @media(max-width: 860px) {
      .leftC{
       display: none;
      }
    }

    @media(max-width: 660px) {
      .rowColumn {
        flex-direction: column;
      }
      .columnBrand{
        width: 100%;
      }

      .btn{
        height: 30px;
        font-size: 12px;
      }

      .office{
        font-size: 9px;
      }

      .background{
        height: auto;
      }

      .cardImg {
        display: none;
      }

      .stepper {
        display:flex;
        flex-direction: column;
      }
    }


    @media(max-width: 1100px) {
      .cards {
       justify-content: center;
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

    @media(max-width: 340px) {
      .titleBrand{
        font-size:20px;
      }

      .txtBrand {
        font-size: 14px;
      }

    }
  
            
  `}</style>
    </>
  )
}

export default News