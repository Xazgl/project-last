import { UsedCars } from "@prisma/client";
import { CarDto } from "../../../../@types/dto";
import { FilterUserOptions } from "./typeForFilterUsed";

export function brandNameFilter(car: UsedCars, currentFilter: FilterUserOptions) {
    if (currentFilter.brandName?.length) {
        return currentFilter.brandName.includes(car.vendor)  // TODO массив брендов  или будет один
    }
    // [].some
    return true
}


export function modelNameFilter(car: UsedCars, currentFilter: FilterUserOptions) {
    if (currentFilter.modelName?.length) {
        return currentFilter.modelName.includes(car.modelShortName) 
    }
    // [].some
    return true
}


export function colorNameFilter(car: UsedCars, currentFilter: FilterUserOptions) {
    if (currentFilter.colorName?.length) {
         return currentFilter.colorName.includes(car.color)  
    }
    // [].some
    return true
}

export function priceFilter(car: UsedCars, currentFilter: FilterUserOptions) {
    if (currentFilter.minPrice && currentFilter.maxPrice) {
        return car.price > currentFilter.minPrice && car.price < currentFilter.maxPrice
    }
    if (currentFilter.minPrice) {
        return car.price > currentFilter.minPrice
    }
    if (currentFilter.maxPrice) {
        return car.price < currentFilter.maxPrice
    }    
    return true
}


export function gearBoxNameFilter(car: UsedCars, currentFilter: FilterUserOptions) {
    if (currentFilter.gearBoxName?.length) {
        return currentFilter.gearBoxName?.includes(car.gearboxType)  
    }
    // [].some
    return true
}


export function carBodyTypeNameFilter(car: UsedCars, currentFilter: FilterUserOptions) {
    if (currentFilter.carBodyTypeName?.length) {
        return currentFilter.carBodyTypeName?.includes(car.bodyType)  
    }
    // [].some
    return true
}


export function driverTypeNameFilter(car: UsedCars, currentFilter: FilterUserOptions) {
    if (currentFilter.driverTypeName?.length) {
        return currentFilter.driverTypeName.includes(car.driverType)  
    }
    // [].some
    return true
}



export function engineTypeNameFilter(car: UsedCars, currentFilter: FilterUserOptions) {
    if (currentFilter.engineTypeName?.length) {
        return currentFilter.engineTypeName.includes(car.engine)
    }
    // [].some
    return true
}