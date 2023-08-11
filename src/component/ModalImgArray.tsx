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
        <div className={className.join(' ')} style={{ color: 'red' }} id="modalBackground" ref={backgroundEl} onClick={(event) => {
            if (event.target === backgroundEl.current) closeModal()
        }}>
            {/* <div className="modalWindow" id="modalWindow">
            </div> */}

            <div className="modalWindow" id="modalWindow">

                <Paper
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
                </Paper>
                <div className="imagesContainer">

                    {/* <Image
                                    src={img}
                                    alt={img}
                                    layout="fill"
                                    sizes="(max-width: 750px) 50vw,
                                            (max-width: 828px) 40vw,
                                            (max-width: 1080px) 33vw,
                                            20vw"
                                    loading="lazy"
                                /> */}

                    <Image src={carImg[activeStep - 1]}
                        alt="Car Image"
                        width={300}
                        height={200}
                        loading="lazy"
                    />
                </div>

           

            <MobileStepper
                sx={{ display: 'flex', width: '100%' }}
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
                        <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeft />
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

            .modalWindow {
                height: 500px;
                width: 700px;
                background-position: center center;
                background-repeat: no-repeat;
                overflow: hidden;
                background-size:contain;
                flex-direction: column; /* Добавьте это свойство */

            }


            .imagesContainer {
                display: flex;
                flex-direction: row;
                overflow-x: auto; /* Добавьте это свойство для горизонтальной прокрутки */
            }
            
            .card{
                max-width: 400;
                flex-grow: 1 ;
            }

            @media(max-width: 1100px) {
                .modalWindow {
                 height: 400px;
                  width: 600px;
                }
            }
            @media(max-width: 600px) {
                .modalWindow {
                 height: 300px;
                  width: 500px;
                }
            }
            @media(max-width: 360px) {
                .modalWindow {
                 height: 200px;
                  width: 100%;
                }
            }
            
      `}
        </style>
    </>
}
