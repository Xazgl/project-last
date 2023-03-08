
import { Dispatch, FormEvent, SetStateAction, useEffect, useMemo, useState } from "react"
import OfficeFilterSidebarMobile from "./OfficeFilterSidebarMobile";
import OfficeFilterSidebar from "./OfficeFilterSidebar";
import FilteredOffice from "./FilteredOffice";
import { Offices } from "@prisma/client";





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




    return (
        <>
            <div className="background">
                <div className="title">Дилерские центры</div>
                <OfficeFilterSidebar offices={offices} filteredOffices={filteredOffices} setFilteredOffices={setFilteredOffices} />
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

                .title {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    font-size: 45px;
                    font-weight: bold;
                    text-align: center;
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
                    border:solid 1px #005baa;
                    font-size:16px;
                    margin-top:5px;
                    padding: 5px 5px;
                }

                #price {
                    display: flex;
                }

                .dealerBlock {
                    display:flex;
                    width: 100%;
                    height: auto;
                }

                select {
                    width: 100%;
                    height: 30px;
                    border:solid 1px #005baa;
                    font-size:16px;
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

              
                @media(max-width: 600px) {
                    .background {  
                        flex-direction: column;
                        margin-top: 10px;
                    }
                    .title {
                        font-size: 35px;
                    }
                }

                @media(max-width: 350px) {
                    .title {
                        font-size: 25px;
                    }
                }
                
                
            `}</style>
        </>
    )
}