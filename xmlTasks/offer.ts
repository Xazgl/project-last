export interface Offer {

    id: string[],
    offer_id: OfferId[],
    vendor: string[],
    model: string[],
    price: string[],
    enable_auto_discounts: string[],
    currencyId: string[],
    count: number[],
    categoryId: number[],
    delivery: string[],
    pickup: string[],
    store: string[],
    description: string[],
    sales_notes: string[],
    picture: string[],
    typePrefix: string[],
    manufacturer_warranty: string[],
    url: string[],
    param: Params,

    // mileage: string[],
    // year: string[],
    // bodyType: string[],
    // steeringWheel: string[],
    // color: string[],
    // pts: string[],  //птс
    // numberofOwners: string[],  //колличество владельцев
    // engine: string[], //бензин, 2 л, 149 л. с
    // driveType: string[], //Полный
    // gearboxType: string[],//Автомат вариатор
    // generationIName: string[],
    // modelName: string[],

}


export interface OfferId {
    $: Id;
    type: Type ;
}

export interface Id {
    id: string;
}

export interface Type {
    str: string;
}



export interface Params {
   params:string[]
}