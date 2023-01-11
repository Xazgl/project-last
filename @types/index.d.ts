import { Client, Offer,ClientеTradeIn, CalcTo } from "@prisma/client";

export type ClientDto = Omit<Client, 'updatedAt'>
export type ClientеTradeInDto = Omit<ClientеTradeIn, 'updatedAt'>

export type CreateSaleDto = Pick<Offer, 'title' | 'shortDesc'| 'description' | 'filterMainPeople' | 'detailFilterBrand' | 'detailFilterMode' | 'price'  |'price'>
export type AllOffersDto = Pick<Offer, 'id' | 'title'  | 'shortDesc'|'description'  | 'filterMainPeople' |'detailFilterBrand' |'detailFilterMode' | 'img' | 'active' |'createdAt'>
export type UpdateSaleDto = Pick<Offer, 'id' | 'title' | 'shortDesc'| 'description' | 'filterMainPeople' | 'detailFilterBrand' | 'detailFilterMode' | 'price' | 'img' | 'active' |'createdAt'>

export type AllCalcDto = Pick<CalcTo, 'id' | 'brendName' | 'model' | 'complectation' | 'mileage' | 'carAge' |'createdAt'>

export type AllClientSalesDto = Pick<CalcTo, 'id' | 'name' | 'phone' | 'vin' | 'title' | 'comment' |'createdAt'>

export type AllClientNeedCall= Pick<CalcTo, 'id' | 'name' | 'phone' |'createdAt'>

