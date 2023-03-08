import { Offices } from "@prisma/client";
import { CarDto } from "../../../../@types/dto";
import { FilterUserOptions } from "./typeForFilter";



export function cityOfficeFilter(offices: Offices, currentFilter: FilterUserOptions) {
    // if (currentFilter.city && currentFilter.city.length) {
    if (currentFilter.city?.length) {
        return currentFilter.city.includes(offices.city)
    }
    // [].some
    return true
}

export function brandNameFilter(offices: Offices, currentFilter: FilterUserOptions) {
    if (currentFilter.brandName?.length) {
        // console.log(currentFilter.brandName , 'currentFilterbrandName') // то что выбрал
        // console.log(car.CarModel.brandName , 'carCarModelbrandName')   // то что из базы 
        return currentFilter.brandName.includes(offices.brend)  // TODO массив брендов  или будет один
    }
    // [].some
    return true
}
