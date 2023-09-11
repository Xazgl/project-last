
import { Dispatch, FormEvent, SetStateAction, useEffect, useMemo, useState } from "react"
import OfficeFilterSidebar from "./OfficeFilterSidebar";
import FilteredOffice from "./FilteredOffice";
import { Offices } from "@prisma/client";
import { Circle } from "@mui/icons-material";
import Link from "next/link";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




type Props = {
    setShowModal: Dispatch<SetStateAction<boolean>>,
    offices: Offices[],
}

export function OfficesListComponent({ setShowModal, offices }: Props) {


    const [filteredOffices, setFilteredOffices] = useState<Offices[]>(offices)

    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }

    // Определение количества отображаемых элементов в зависимости от ширины экрана
    const [mobileAdaptive, setMobileAdaptive] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 1000) {
                setMobileAdaptive(true);
            } else {
                setMobileAdaptive(false);
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [])


    return (
        <>
            <div className="background">
                <div className='road'>
                    <Link href="/">
                        <a className="menuRoad" rel="noopener noreferrer" >
                            Главная
                        </a>
                    </Link>

                    <Circle sx={{ fontSize: '8px', color: ' #131313' }} />

                    <Link href="/company/contact">
                        <a className="menuRoad" rel="noopener noreferrer" >
                            Дилерские центры
                        </a>
                    </Link>

                </div>
                {mobileAdaptive == false ?
                    <div className="flexContainer">
                        <>
                            <div className="title">Дилерские центры</div>

                            <OfficeFilterSidebar offices={offices} filteredOffices={filteredOffices} setFilteredOffices={setFilteredOffices} />
                        </>
                    </div>
                    :
                    <>
                        <Accordion sx={{
                            marginTop: '30px',
                            opacity:'90%',
                            height: 'auto',
                            position: 'sticky',
                            top: '0',
                            left: '0',
                            zIndex:'2'
                        }}>
                        <AccordionSummary sx={{ backgroundColor: ' #131313', color: 'white' }}
                            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Дилерские центры</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ display: 'flex',flexDirection:'column', alignItems:'center' }}>
                            <Typography>
                                <OfficeFilterSidebar offices={offices} filteredOffices={filteredOffices} setFilteredOffices={setFilteredOffices} />

                            </Typography>
                        </AccordionDetails>
                    </Accordion>
            </>
                }


            <div className="dealerBlock">
                <FilteredOffice filteredOffices={filteredOffices} setShowModal={setShowModal} />
            </div>
        </div >
            <style jsx>{`
                .background {
                    display:flex; 
                    width: 100%;
                    height:auto;
                    margin-top: 100px;
                    flex-direction: column;
                }

                .road{
                    display: flex;
                    justify-content: start;
                    gap:10px;
                    align-items: center;
                }

                .menuRoad{
                    display: flex;
                    text-decoration: none;
                    color:black;
                }

                .flexContainer {
                    display: flex;
                    height: auto;
                    position: sticky; 
                    top: 0;
                    left:0;
                    z-index:2;
                    background-color: white;
           
                }

                .title {
                    display: flex;
                    justify-content: start;
                    width: 100%;
                    font-size: 45px;
                    font-weight: bold;
                    text-align: center;
                    font-family: 'Roboto','sans-serif'; 
                    margin-top:20px;

                }

                #color {
                    gap:10px;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                }

                .sideBar {
                    display:flex;
                    align-items: center;
                    width:100%;
                    height: auto;
                    border:solid 2px black;
                    overflow: auto;
                }

                .rowSideBar {
                    width: 100%;
                    flex-direction: row;
                    height: auto;
                    padding:20px;
                    border-bottom: 1px solid #d4d3d3;
                }

                #center{
                    display:flex;
                    justify-content: center;
                }

                #column {
                    display:flex;
                    flex-direction: column;
                    width: 100%;
                }

                #carBodyType{
                    display:flex;
                    flex-direction: column;
                    width: 100%;
                    align-items: center;
                }

                #row {
                    display:flex;
                    flex-direction: row;
                    width: 100%;
                }

                input {
                    width: 100%;
                    height: 30px;
                    border:solid 1px  #131313;
                    font-size:16px;
                    margin-top:5px;
                    padding: 5px 5px;
                    font-family: 'Roboto','sans-serif'; 

                }

                #price {
                    display: flex;
                    font-family: 'Roboto','sans-serif'; 

                }

                .dealerBlock {
                    display:flex;
                    width: 100%;
                    height: auto;
                }

                select {
                    width: 100%;
                    height: 30px;
                    border:solid 1px  #131313;
                    font-size:16px;
                    font-family: 'Roboto','sans-serif'; 

                }
                
                .carTypeDiv {
                   display: flex;
                   justify-content: center;
                   height: 50px;
                   width: 120px;
                   padding: 5px;
                   border-radius: 7px;
                }

                .imgCarType{
                     cursor: pointer;
                }

                .carTypeDiv:hover {
                    background-color: #d4d3d3
                }

                @media(max-width: 1000px) {
                     .flexContainer {
                          flex-direction: column;
                          align-items: center;
                          justify-content: center;
                     }
                }
                
                @media(max-width: 600px) {
                    .background {  
                        flex-direction: column;
                        margin-top: 10px;
                    }
                    .title {
                        font-size: 35px;
                    }
                    .menuRoad{
                        font-size: 14px;
                    }
                }

                @media(max-width: 450px) {
                    .menuRoad{
                        font-size: 12px;
                    }
                    .title {
                        font-size: 30px;
                    }
                }

                @media(max-width: 350px) {
                    .title {
                        font-size: 25px;
                    }
                    .menuRoad{
                        font-size: 10px;
                    }
                }
                
                
            `}</style>
        </>
    )
}