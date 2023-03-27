// @ts-check

const { PrismaClient } = require("@prisma/client");
const { AxiosError } = require("axios");
const fs = require('fs/promises');
// const { nanoid } = require("nanoid");
const path = require("path");
const xml2js = require('xml2js')
const carsLinks = require('./cars.json') || [] //ссылка на файлы от Макспостера
const carsLinksOld = require('./carsOld.json') || [] //ссылка на файлы по бу машинам

// const carsLinks = [ "https://export.maxposter.ru/tradedealer/4579-45794.xml"] //ссылка на файлы от Макспостера
const axios = require('axios').default

const db = new PrismaClient()
const parser = new xml2js.Parser()


async function start() {
    try {
        // if (process.env.NODE_ENV !== 'production') {
        //     await db.$transaction([
        //         db.car.deleteMany({}),
        //         db.carModel.deleteMany({}),
        //         db.carModification.deleteMany({}),
        //         db.extras.deleteMany({}),
        //         db.dealerModel.deleteMany({}),
        //         db.carComplectation.deleteMany({}),
        //         db.favoriteCarsToCar.deleteMany({}),
        //         db.watchedCarsToCar.deleteMany({}),
        //         db.compareCarsToCar.deleteMany({}),
        //         db.sessionClient.deleteMany({}),
        //     ])
        // }

        // console.log(carsLinks)
        // const answer = carsLinks[0]
        // const res = await axios.get(carsLinks[0])
        // const xml = await parser.parseStringPromise(res.data)
        // console.log(xml.vehicles.vehicle)
        /**
         * @type {import('./vehicle').Vehicle[] } 
         */
        const vehicles = (await Promise.all(carsLinks.map(async (carLink) => {
            try {
                const res = await axios.get(carLink)
                const xml = await parser.parseStringPromise(res.data)
                //  if(xml.vehicles.length > 0) {
                // console.log(`ответ ${(xml.vehicles.vehicle)}`)
                return xml.vehicles.vehicle
                //  } else {
                //     return null
                //  }              
            } catch (error) {
                if (error instanceof AxiosError)
                    console.error(error.code + ': ' + error.message)
                return null
            }
        }))).filter(veh => veh !== null).flat()
        // const result = vehicles.filter(arrayVehicle => arrayVehicle !== undefined);
        // console.log(result)


        // console.log(vehicles[0])
        // console.log(Number(vehicles[0].complectation['$']))         
        // fs.writeFile('./vehicle.json', JSON.stringify(vehicles[0], null, 2))
        // vehicles.forEach(async (vehicle) => {
        for (const vehicle of vehicles) {
            console.log(vehicle.vin[0])
            const car = await db.car.findUnique({
                where: {
                    vin: vehicle.vin[0],
                }
            })
            if (car === null) {
                try {
                    // let generId = 0
                    // let generName = 'Не указано'

                    // if ( vehicle.generation[0].$.id){
                    //       let generId = Number( vehicle.generation[0].$.id )
                    //       let generName = vehicle.generation[0]._ 
                    // } 

                    const newCar = await db.car.create({
                        data: {
                            vin: vehicle.vin[0],
                            // vin: nanoid(),
                            id_1c: String(vehicle.id[0]),
                            // id_1c: nanoid(),
                            usedOrNew: vehicle.type[0],
                            color: vehicle.bodyColor[0],
                            bodyColorMetallic: vehicle.bodyColorMetallic[0],
                            mileage: vehicle.mileage[0],
                            mileageUnit: vehicle.mileageUnit[0],
                            year: vehicle.year[0],
                            img: {
                                set: vehicle.photos[0].photo
                            },
                            priceMonth: Number(vehicle.price[0]) / 150,
                            price: Number(vehicle.price[0]),
                            special_price: Number(vehicle.special_price[0]),
                            specialOffer: Number(vehicle.specialOffer[0]),
                            tradeinDiscount: Number(vehicle.tradeinDiscount[0]),
                            creditDiscount: Number(vehicle.creditDiscount[0]),
                            insuranceDiscount: Number(vehicle.insuranceDiscount[0]),
                            desc: vehicle.description[0],
                            availability: vehicle.availability[0],
                            CarModification: {
                                connectOrCreate: {
                                    where: {
                                        id_1c: Number(vehicle.modification[0]['$'].id)
                                    },
                                    create: {
                                        id_1c: Number(vehicle.modification[0]['$'].id),
                                        name: String(vehicle.modification[0]._),
                                        engineType: String(vehicle.engineType),
                                        engineVolume: String(vehicle.engineVolume),
                                        enginePower: String(vehicle.enginePower),
                                        gearboxType: String(vehicle.gearboxType),
                                        driveType: String(vehicle.driveType),
                                        bodyType: String(vehicle.bodyType),
                                        bodyDoorCount: Number(vehicle.bodyDoorCount),
                                        steeringWheel: String(vehicle.steeringWheel),
                                        length: String(vehicle.length),
                                        width: String(vehicle.length),
                                    }
                                },
                            },
                            CarComplectation: {
                                connectOrCreate: {
                                    where: {
                                        id_1c: Number(vehicle.complectation[0].$.id)
                                    },
                                    create: {
                                        id_1c: Number(vehicle.complectation[0].$.id),
                                        name: vehicle.complectation[0]._,
                                        seatsCar: '5',
                                    }
                                }
                            },
                            DealerModel: {
                                connectOrCreate: {
                                    where: {
                                        id_1c: Number(vehicle.dealer[0].$.id),
                                    },
                                    create: {
                                        id_1c: Number(vehicle.dealer[0].$.id),
                                        name: vehicle.dealer[0]._,
                                        address: vehicle.poi_id[0],
                                        phone: vehicle.phones[0].phone[0]._,
                                    }
                                }
                            },
                            extras: {
                                connectOrCreate: {
                                    where: {
                                        name: vehicle.extras[0].group[0].element[0]._
                                    },
                                    create: {
                                        groupId: Number(vehicle.extras[0].group[0].$.id),
                                        groupName: vehicle.extras[0].group[0].$.name,
                                        // name: vehicle.extras[0].group[0].element[0]._
                                        name: vehicle.extras[0].group[0].element[0]._
                                    }
                                }
                            },
                            CarModel: {
                                connectOrCreate: {
                                    where: {
                                        modelId_1c: Number(vehicle.model[0].$.id),
                                    },
                                    create: {
                                        id_1c: Number(vehicle.brand[0].$.id),
                                        modelId_1c: Number(vehicle.model[0].$.id),
                                        brandName: vehicle.brand[0]._,
                                        modelName: vehicle.model[0]._,
                                        categoryId_1c: Number(vehicle.category[0].$.id),
                                        categoryIdName: vehicle.category[0]._,
                                        generationId_1c: vehicle.generation[0] ? Number(vehicle.generation[0].$.id) : 0,
                                        generationIName: vehicle.generation[0] ? vehicle.generation[0]._ : '',
                                    }
                                }
                            }
                        }
                    })

                    // console.log(newCar)
                } catch (error) {
                    console.error(error)
                    console.log('VIN: ' + vehicle.vin[0])
                }
            } else {
                // console.log(car);
            }
        }
    } catch (error) {
        console.error(error)
    }
}
//         // console.log(cars);
//         // const data = await fs.readFile(path.join(process.cwd(), './xml/mitsuNew.xml'), 'utf8');
//         // const xml = await parser.parseStringPromise(data)
//         // // database.table[]=>column[]{$:{name:string}, _:string} 
//         // const cars = xml.database.table.map(table => {
//         //     const car = {}

//         //     table.column.forEach(column => {
//         //         car[column.$.name] = column._
//         //     })
//         //     return {
//         //         id_1c: parseInt(car.id),
//         //         brand: car.brand,
//         //         VIN: car.VIN,
//         //         model: car.model
//         //     }
//         // })
//         // // console.log(cars);
//         // db.$transaction([
//         //     db.cars.deleteMany(),
//         //     db.cars.createMany({
//         //         data: cars
//         //     })
//         // ]) 
//         // console.log("Success"); 
//     } catch (error) {
//         console.error(error)
//     }
// }

start()





async function startOld() {
    try {
        // if (process.env.NODE_ENV !== 'production') {
        //     await db.$transaction([
        //         db.usedCars.deleteMany({}),
        //         db.favoriteUsedCarsToCar.deleteMany({}),
        //         db.watchedUsedCarsToCar.deleteMany({}),
        //         db.compareUsedCarsToCar.deleteMany({}),
        //         db.sessionClient.deleteMany({}),
        //     ])
        // }
        /**
         * @type {import('./offer').Offer[] } 
         */
        const offers = (await Promise.all(carsLinksOld.map(async (carLink) => {
            const res = await axios.get(carLink)
            const xml = await parser.parseStringPromise(res.data)
            // console.log(xml.yml_catalog.shop[0].offers.offer)
            return xml.yml_catalog.shop[0].offers[0].offer
        }))).flat()

        for (const offer of offers) {
            // console.log(offer)
            // console.log(offer.$.id)
            // console.log(offer.param[0]._)//пробег
            // console.log(offer.param[1]._)//год
            // console.log(offer.param[2]._)//кузов
            // console.log(offer.param[3]._)//руль
            // console.log(offer.param[4]._)//цвет
            // console.log(offer.param[5]._)//ПТС
            // console.log(offer.param[6]._)//кол владельцев
            // console.log(offer.param[7]._)//двигатель
            // console.log(offer.param[8]._)//привод
            // console.log(offer.param[9]._)//кпп
            // console.log(offer.param[10]._)//попкол
            // console.log(offer.param[11]._)//модель


            const usedCar = await db.usedCars.findUnique({
                where: {
                    offersId: offer.$.id,
                }
            })

            function bool(x) {
                if (x === 'false') {
                    return false
                } else {
                    return true
                }
            }


            if (usedCar === null) {
                try {
                    if (offer.param.length > 11) {
                        const usedCar = await db.usedCars.create({
                            data: {
                                offersId: offer.$.id,
                                vendor: String(offer.vendor[0]),
                                modelFullName: String(offer.model[0]),
                                price: Number(offer.price[0]),
                                enable_auto_discounts: bool(offer.enable_auto_discounts[0]),
                                currencyId: String(offer.currencyId),
                                count: String(offer.count),
                                categoryId: String(offer.categoryId),
                                delivery: bool(offer.delivery[0]),
                                pickup: bool(offer.pickup[0]),
                                store: bool(offer.store[0]),
                                description: String(offer.description[0]),
                                sales_notes: String(offer.sales_notes[0]),
                                picture: {
                                    set: offer.picture[0]
                                },
                                // typePrefix: offer.typePrefix[0],
                                typePrefix: 'used',
                                manufacturer_warranty: bool(offer.manufacturer_warranty[0]),
                                url: offer.url[0],
                                mileage: offer.param[0]._,
                                year: offer.param[1]._,
                                bodyType: offer.param[2]._,
                                steeringWheel: offer.param[3]._,
                                color: offer.param[4]._,
                                pts: offer.param[5]._,
                                numberOfOwners: offer.param[6]._,
                                engine: offer.param[7]._,
                                driverType: offer.param[8]._,
                                gearboxType: offer.param[9]._,
                                generation: offer.param[10]._,
                                modelShortName: offer.param[11]._
                            }
                        })
                    } else {
                        const usedCar = await db.usedCars.create({
                            data: {
                                offersId: offer.$.id,
                                vendor: String(offer.vendor[0]),
                                modelFullName: String(offer.model[0]),
                                price: Number(offer.price[0]),
                                enable_auto_discounts: bool(offer.enable_auto_discounts[0]),
                                currencyId: String(offer.currencyId),
                                count: String(offer.count),
                                categoryId: String(offer.categoryId),
                                delivery: bool(offer.delivery[0]),
                                pickup: bool(offer.pickup[0]),
                                store: bool(offer.store[0]),
                                description: String(offer.description[0]),
                                sales_notes: String(offer.sales_notes[0]),
                                picture: {
                                    set: offer.picture[0]
                                },
                                // typePrefix: offer.typePrefix[0],
                                typePrefix: 'used',
                                manufacturer_warranty: bool(offer.manufacturer_warranty[0]),
                                url: offer.url[0],
                                mileage: offer.param[0]._,
                                year: offer.param[1]._,
                                bodyType: offer.param[2]._,
                                steeringWheel: offer.param[3]._,
                                color: offer.param[4]._,
                                numberOfOwners: offer.param[5]._,
                                engine: offer.param[6]._,
                                driverType: offer.param[7]._,
                                gearboxType: offer.param[8]._,
                                generation: offer.param[9]._,
                                modelShortName: offer.param[10]._
                            }
                        })
                    }
                } catch (error) {
                    console.error(error)
                    // console.log(offer.param[5], offer.param.length)
                    // console.log('id: ' +   offer.id, 'param пробег:' + offer.param[0], 'param год выпуска:' + offer.param[1],'param Кузов:' + offer.param[2],'param Руль:'+ offer.param[3], 
                    // 'param Цвет:'+ offer.param[4],'param ПТС:'+offer.param[5],'param кол-во владельцев:'+ offer.param[6],'param Двигатель:' +  offer.param[7], 'param Привод:'+ offer.param[8],
                    // 'param КПП:'+ offer.param[9],'param Поколение:' + offer.param[10], 'param Модель:'+offer.param[11])
                }
            } else {
                // console.log(car);
            }
        }


        // })
        // console.log(cars);
        // const data = await fs.readFile(path.join(process.cwd(), './xml/mitsuNew.xml'), 'utf8');
        // const xml = await parser.parseStringPromise(data)
        // // database.table[]=>column[]{$:{name:string}, _:string} 
        // const cars = xml.database.table.map(table => {
        //     const car = {}

        //     table.column.forEach(column => {
        //         car[column.$.name] = column._
        //     })
        //     return {
        //         id_1c: parseInt(car.id),
        //         brand: car.brand,
        //         VIN: car.VIN,
        //         model: car.model
        //     }
        // })
        // // console.log(cars);
        // db.$transaction([
        //     db.cars.deleteMany(),
        //     db.cars.createMany({
        //         data: cars
        //     })
        // ]) 
        // console.log("Success"); 
    } catch (error) {
        console.error(error)
    }
}

startOld()
