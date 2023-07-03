//@ts-check

import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Link, Slide, Typography } from "@mui/material"
import { useEffect, useRef, useState } from "react";
import carNull from '/public/images/carNull.png'

function CarNull({ }) {

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
      <div className='background' ref={visibleElementRef}>
        <Slide in={isVisible}  direction="right" timeout={600}>

        <Card sx={{
          width: 270, height: 350, display: 'flex', border: '2px  solid #d1d7dd',
          flexDirection: 'column', marginTop: '10px', transition: ' 0.2s linear', fontFamily: 'Roboto',
          borderRadius: '0px',
          '&:hover': {
            transform: 'scale(1.04)',
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
            sx={{ display: 'flex', height: '50px', dispaly: 'flex', alignItems: 'center' }}
          />
          <CardMedia
            component="img"

            image={carNull.src}
            sx={{
              cursor: 'pointer',
              height: '100px'
            }}
            loading="lazy"
            decoding='async'
            alt="car"
          />
          <CardContent sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <Typography sx={{ marginTop: '40px',justifyContent:'start',display: 'flex', width:'100%'}} variant="body1" color="text.secondary">Авто в наличии нет</Typography>
            <Link href="/brands/all">
              <a rel="noopener noreferrer">
                <Button variant="contained" sx={{ width:'250px',marginTop: '40px', backgroundColor: '#0c54a0', borderRadius: '0' }}>Другие бренды</Button>
              </a>
            </Link>
          </CardContent>
        </Card >
        </Slide>

      </div >
      <style jsx>{`

               .background {
                   display:flex;
                   width: 100%;
                   height: 100%;
                   padding: 20px;
                   justify-content: center;
                   overflow: auto;
                   background-color: #f5f2f261;
               }   

               
               

                 @media(max-width: 660px) {
                  #desktop{
                    display: none;
                  }
                  
                  #mob{
                    display: flex;
                  } 

                  .btn {
                    width:100%;
                  }
                }     
            `}</style>
    </>
  )
}

export default CarNull