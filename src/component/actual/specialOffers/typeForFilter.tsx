export type OfficesList = {
    id: number,
    brend: string,
    modelCar: ModelList[]
}

export type ModelList = {
    id: number,
    modelName: string,
}

export type NewOrOldList = {
    id: number,
    name: string,
    offices: OfficesList[]
}

export type FilterUserOptionsOffer = {
    filterMainPeople: string[],
    detailFilterBrand: string[]
    detailFilterMode: string[],
}
