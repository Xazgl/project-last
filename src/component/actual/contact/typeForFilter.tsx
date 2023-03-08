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
    city?: string[]
    brandName?: string[]
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