import news1 from '/public/images/catalogPages/geely/news/news_1.jpg'
import news2 from '/public/images/catalogPages/geely/news/news_2.png'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { SwiperEl } from './SwiperEl';
import { ModalImg } from '../../../../../ModalImg';
import { NewsOne } from '../../../../../../../@types/dto';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


function SwiperNewsBrand({ newsBrand }: { newsBrand: NewsOne[] }) {

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [showModalImg, setShowModalImg] = React.useState(false)
  const [carImg, setCarImg] = React.useState('')

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
        <div className='cards' id="desktop">
          <div className='descBrand'>
            <div className='titleBrand'>Анонсы </div>
            <SwiperEl
              newsBrand={newsBrand}
              setShowModalImg={setShowModalImg}
              setCarImg={setCarImg}
            />
          </div>
        </div>
      </div >
      {
        showModalImg && <ModalImg carImg={carImg} showModalImg={showModalImg} setShowModalImg={setShowModalImg} />
      }
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
      padding: 20px;
      justify-content: center;
      overflow: auto;
      background-color: #f5f2f261;
      height: auto;

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
      width: 100%;
      flex-direction:column;
      padding: 10px;
    }

    .cardImg {
      display: flex;
      width: 100%;
      border: 2px solid #d1d7dd;
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

export default SwiperNewsBrand