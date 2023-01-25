import { CarDto } from "../../../../@types/dto";
import { FilterUserOptions } from "./typeForFilter";

export function carTypeFilter(car: CarDto, currentFilter: FilterUserOptions) {
    if (currentFilter.carType) {
        return car.usedOrNew === currentFilter.carType
    }
    return true
}

export function dealerOfficeFilter(car: CarDto, currentFilter: FilterUserOptions) {
    // if (currentFilter.dealerOffice && currentFilter.dealerOffice.length) {
    if (currentFilter.dealerOffice?.length) {
        return currentFilter.dealerOffice.includes(car.DealerModel.name)
    }
    // [].some
    return true
}

export function brandNameFilter(car: CarDto, currentFilter: FilterUserOptions) {
    if (currentFilter.brandName?.length) {
        return currentFilter.brandName.includes(car.CarModel.brandName)  // TODO массив брендов  или будет один
    }
    // [].some
    return true
}

export function modelNameFilter(car: CarDto, currentFilter: FilterUserOptions) {
    if (currentFilter.modelName?.length) {
        return currentFilter.modelName.includes(car.CarModel.modelName)  
    }
    // [].some
    return true
}


export function colorNameFilter(car: CarDto, currentFilter: FilterUserOptions) {
    if (currentFilter.colorName?.length) {
        return currentFilter.colorName.includes(car.CarModel.color)  
    }
    // [].some
    return true
}

export function priceFilter(car: CarDto, currentFilter: FilterUserOptions) {
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



export function gearBoxNameFilter(car: CarDto, currentFilter: FilterUserOptions) {
    if (currentFilter.gearBoxName?.length) {
        return currentFilter.gearBoxName?.includes(car.CarModification.gearboxType)  
    }
    // [].some
    return true
}