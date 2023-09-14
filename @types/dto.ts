import { Offer, Car, CarComplectation, CarModel, CarModification, DealerModel, Extras, ClientTradein, ClientNeedCall, CalcCredit, ClientParts, UsedCars, CompareCarsToCar, FavoriteCarsToCar, FavoriteUsedCarsToCar, CompareUsedCarsToCar, YandexGeo, BrandNews, Brands } from "@prisma/client";


// export type ClientDto = Omit<Client, 'updatedAt'>
export type ClientеTradeInDto = Omit<ClientTradein, 'updatedAt'>

export type CreateSaleDto = Pick<Offer, 'title' | 'shortDesc' | 'description' | 'filterMainPeople' | 'detailFilterBrand' | 'detailFilterMode' | 'price' | 'price'>
export type AllOffersDto = Pick<Offer, 'id' | 'title' | 'shortDesc' | 'description' | 'filterMainPeople' | 'detailFilterBrand' | 'detailFilterMode' | 'img' | 'active' | 'price' | 'createdAt'>
// export type AllCarDto = Pick<Car, 'id' | 'id_1c' | 'color'  | 'bodyColorMetallic' | 'mileage'  | 'mileageUnit' |'vin' |'year' | 'img' |'priceMonth' | 'price' | 'special_price' | 'specialOffer' | 'tradeinDiscount' | 'creditDiscount' | 'insuranceDiscount' | 'desc' | 'active' | 'carModelId' | 'carModificationId' |'carComplectationId' | 'dealerModelId' |'availability' | 'createdAt' >

export type CarDto = Car & {
    CarModel: CarModel;
    CarComplectation: CarComplectation;
    CarModification: CarModification;
    extras: Extras[];
    DealerModel: DealerModel,
    FavoriteCarsToCar: FavoriteCarsToCar[],
    CompareCarsToCar: CompareCarsToCar[],
}


type Map = {
    id: string;
    nameDc: string;
    imgDC: string;
    linkToYandex: string;
    iframeMapSrc: string;
    phone: string;
    adress: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export type NewsOne =  {
    id: string;
    title: string;
    description: string;
    img: string[];
}

export type BrandPageDto = Brands & {
    id: string;
    brand: string;
    banner: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    map: Map[];
    news: NewsOne [];
}

export type CarDtoWithoutFavorite = Car & {
    CarModel: CarModel;
    CarComplectation: CarComplectation;
    CarModification: CarModification;
    extras: Extras[];
    DealerModel: DealerModel,
}


export type CarUsedInclude = UsedCars & {
    FavoriteUsedCarsToCar: FavoriteUsedCarsToCar[],
    CompareUsedCarsToCar: CompareUsedCarsToCar[]

}

export type AllCarDto = CarDto[];


export type AllUsedCarDto = UsedCars[];


export type UpdateSaleDto = Pick<Offer, 'id' | 'title' | 'shortDesc' | 'description' | 'filterMainPeople' | 'detailFilterBrand' | 'detailFilterMode' | 'price' | 'img' | 'active' | 'createdAt'>

// export type AllCalcDto = Pick<CalcTo, 'id' | 'brendName' | 'model' | 'complectation' | 'mileage' | 'carAge' |'createdAt'>

// export type AllClientSalesDto = Pick<CalcTo, 'id' | 'name' | 'phone' | 'vin' | 'title' | 'comment' |'createdAt'>

export type AllClientNeedCall = Pick<ClientNeedCall, 'id' | 'name' | 'phone' | 'office' | 'createdAt'>

export type AllClientCredit = Pick<CalcCredit, 'id' | 'name' | 'phone' | 'firstPrice' | 'carName' | 'month' | 'createdAt'>

export type AllClientParts = Pick<ClientParts, 'id' | 'name' | 'phone' | 'vin' | 'IntSpareParts' | 'comment' | 'createdAt'>
