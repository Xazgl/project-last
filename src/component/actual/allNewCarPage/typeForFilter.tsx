export type OfficesList = {
    id: number,
    brend: string,
    modelCar: ModelList[]
}

export  type ModelList = {
    id: number,
    modelName: string,
}

export  type NewOrOldList = {
    id: number,
    name: string,
    offices: OfficesList[]
}

export type FilterUserOptions = {
    carType?: 'new' | 'used'
    dealerOffice?: string[]
    minPrice?: number
    maxPrice?: number
    brandName?: string[]
    modelName?: string[],
    colorName?: string[],
    gearBoxName?:string[],
}


// const filterList:NewOrOldList = [
//     {   id: 1,
//         name: 'Новые',
//         offices : [
//             {

//             }

//         ]
//     }

// ]