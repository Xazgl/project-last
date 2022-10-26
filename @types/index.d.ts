import { Client, Sales,ClientеTradeIn, CalcTo } from "@prisma/client";

export type ClientDto = Omit<Client, 'updatedAt'>
export type ClientеTradeInDto = Omit<ClientеTradeIn, 'updatedAt'>

export type CreateSaleDto = Pick<Sales, 'title' | 'shortDesc'| 'description' | 'filterMain' |'detailFilter' |'price'>
export type AllSaleDto = Pick<Sales, 'id' | 'title'  | 'shortDesc'|'description'  | 'filterMain' |'detailFilter' |'price' | 'img' | 'active' |'createdAt'>
export type UpdateSaleDto = Pick<Sales, 'id' | 'title' | 'shortDesc'| 'description' | 'filterMain' |'detailFilter' |'price' | 'img' | 'active' |'createdAt'>

export type AllCalcDto = Pick<CalcTo, 'id' | 'brendName' | 'model' | 'complectation' | 'mileage' | 'carAge' |'createdAt'>

export type AllClientSalesDto = Pick<CalcTo, 'id' | 'name' | 'phone' | 'vin' | 'title' | 'comment' |'createdAt'>

export type AllClientNeedCall= Pick<CalcTo, 'id' | 'name' | 'phone' |'createdAt'>