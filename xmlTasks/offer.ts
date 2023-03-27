export interface Offer {

    id: string,
    $: Id ,
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
    param: Param[]
}



export interface Id {
    id: string;
    type:string
}

export interface Param{
    _: string;
    $: $name;
       
}

export interface $name{
    name:string
}

