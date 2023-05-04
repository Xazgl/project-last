
import { Dispatch, FormEvent, SetStateAction,  useState } from "react"
import { AllUsedCarDto } from "../../../../@types/dto";
import CarUsedFilterSidebar from "./CarUsedFilterSidebar";
import CarUsedSidebarMobile from "./CarUsedSidebarMobile";
import FilteredUsedCars from "./FilteredUsedCars";



// type OfficesList = {
//     id: number,
//     brend: string,
//     modelCar: ModelList[]
// }

// type ModelList = {
//     id: number,
//     modelName: string,
// }

// type NewOrOldList = {
//     id: number,
//     name: string,
//     modelCar: OfficesList[]
// }


type Props = {
    setShowModal: Dispatch<SetStateAction<boolean>>,
    cars: AllUsedCarDto,
}

export function UsedCarComponent({ setShowModal, cars }: Props) {

    const [filteredCars, setFilteredCars] = useState(cars)

    return (
        <>
            <div className="background">
                <CarUsedSidebarMobile cars={cars} filteredCars={filteredCars} setFilteredCars={setFilteredCars} />
                <CarUsedFilterSidebar cars={cars} filteredCars={filteredCars} setFilteredCars={setFilteredCars} />
                <div className="carBlock">
                    <FilteredUsedCars filteredCars={filteredCars} setShowModal={setShowModal} />
                </div>
            </div >
            <style jsx>{`
                .background {
                    display:flex; 
                    width: 100%;
                    height:auto;
                    margin-top: 100px;
                }

                #color {
                    gap:10px;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                }

                .sideBar {
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    width: 400px;
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

                .carBlock {
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
                }
                
                
            `}</style>
        </>
    )
}