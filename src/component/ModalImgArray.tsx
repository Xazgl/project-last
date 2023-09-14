import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, MobileStepper, Paper, Typography, useTheme } from "@mui/material";
import { FormEvent, useState } from "react";
import { Dispatch, SetStateAction, useRef } from "react";
import Image from 'next/image';



type ModelProps = {
    showModalImg: boolean,
    setShowModalImg: Dispatch<SetStateAction<boolean>>,
    carImg: string[],
    carStepImg: string
}


export function ModalImgArray({ showModalImg, setShowModalImg, carImg, carStepImg }: ModelProps) {
    const theme = useTheme();
    const [closeStarting, setCloseStarting] = useState(false)
    const [activeStep, setActiveStep] = useState(
        carStepImg && carImg.includes(carStepImg) ? carImg.indexOf(carStepImg) : 0
    );
    const maxSteps = carImg.length;


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    function closeModal() {
        setCloseStarting(true)
        setTimeout(() => {
            setShowModalImg(false)
            setCloseStarting(false)
        }, 500)
    }

    const backgroundEl = useRef(null)
    const className = [
        'modalBackground',
        showModalImg ? 'modalBackground_show' : '',
        closeStarting ? 'modalBackground_close-starting' : '',
    ]
    return <>
        <div className={className.join(' ')} style={{ color: 'black' }} id="modalBackground" ref={backgroundEl} onClick={(event) => {
            if (event.target === backgroundEl.current) closeModal()
        }}>
            {/* <div className="modalWindow" id="modalWindow">
            </div> */}

            <div className="modalWindow" id="modalWindow">

                {/* <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        pl: 2,
                        bgcolor: 'background.default',
                    }}
                >
                </Paper> */}
                <div className="imagesContainer">

                    {/* <Image
                                    src={carImg[activeStep - 1]}
                                    alt={carImg[activeStep - 1]}
                                    layout="fill"
                                    sizes="(max-width: 750px) 50vw,
                                            (max-width: 828px) 40vw,
                                            (max-width: 1080px) 33vw,
                                            20vw"
                                    loading="lazy"
                                />

                    <Image src={carImg[activeStep - 1]}
                        alt="Car Image"
                        width={'100%'}
                        height={200}
                        loading="lazy"
                    /> */}
                </div>



                <MobileStepper
                    sx={{ display: 'flex', width: '100%',color:' #131313' }}
                    variant="text"
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        < Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            <KeyboardArrowRight sx={{color:' #131313'}} />
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            <KeyboardArrowLeft   sx={{color:' #131313'}}/>
                        </Button>
                    }
                />
            </div>

        </div >

        <style jsx>{`
            @keyframes modalBackground-open {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }

            @keyframes modalBackground-close {
                from {
                    opacity: 1;
                }
                to {
                    opacity: 0;
                }
            }

            .disable-scroll {
                overflow: hidden;
            }

            .modalBackground {
                display: none;
                position: fixed;
                justify-content: center;
                top: 0;
                right: 0;
                left: 0;
                height: 100vh;
                background-color: rgb(0,0,0, 0.5);
                align-items: center;
                z-index: 9999;
                cursor: pointer;
            }

            .modalBackground_show {
                animation:modalBackground-open.5s ;
                display: flex;
            }

            .modalBackground_close-starting {
                animation:modalBackground-close.5s ;
            }

            .imagesContainer {
                display: flex;
                height: 600px;
                width: 800px;
                background-image: url('${carImg[activeStep]}');
                background-size:contain;
                background-repeat: no-repeat;  
            }


            .modalWindow {
                height: 700px;
                width: 800px;
                background-position: center center;
                background-repeat: no-repeat;
                overflow: hidden;
                background-size:contain;
            }


            @media(max-width: 840px) {
                .modalWindow {
                    height: 450px;
                    width: 500px;
                }

                .imagesContainer {
                  height: 400px;
                  width: 600px;
                }
            }

            @media(max-width: 600px) {
                .modalWindow {
                    height: 310px;
                    width: 400px;
                }

                .imagesContainer {
                  height: 260px;
                  width: 400px;
                  background-size: cover;
                }
            }
            @media(max-width: 414px) {
                .modalWindow {
                    height: 250px;
                    width: 300px;
                }

                .imagesContainer {
                  height: 200px;
                  width: 300px;
                }
            }

            @media(max-width: 320px) {
                .modalWindow {
                    width: 250px;
                }

                .imagesContainer {
                  width: 250px;
                }
            }
            
      `}
        </style>
    </>
}
