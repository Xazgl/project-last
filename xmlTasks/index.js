// @ts-check

const { PrismaClient } = require("@prisma/client");
const fs = require('fs/promises');
const path = require("path");
const xml2js = require('xml2js')
const carsLinks = require('./cars.json') || [] //ссылка на файлы от Макспостера
const axios = require('axios').default

const db = new PrismaClient()
const parser = new xml2js.Parser()


async function start() {
    try {
        // console.log(carsLinks)
        // const answer = carsLinks[0]
        // const res = await axios.get(carsLinks[0])
        // const xml = await parser.parseStringPromise(res.data)
        // console.log(xml.vehicles.vehicle)
        const vehicles = (await Promise.all(carsLinks.map(async (carLink) => {
            const res = await axios.get(carLink)
            const xml = await parser.parseStringPromise(res.data)
            return xml.vehicles.vehicle
        }))).flat()
        console.log(vehicles[0].phones[0].phone[0]._)
        // console.log(Number(vehicles[0].complectation['$']))         

        vehicles.forEach(async (vehicle) => {
            const car = db.car.findUnique({
                where: {
                    vin: vehicle.vin[0]
                }
            })
            if (!car) {
                db.car.create({
                    data: {
                        vin: vehicle.vin[0],
                        id_1c: vehicle[0].id[0],
                        usedOrNew: vehicle[0].type[0],
                        color: vehicle[0].bodyColor[0],
                        bodyColorMetallic: vehicle[0].bodyColorMetallic[0],
                        mileage: vehicle[0].mileage[0],
                        mileageUnit: vehicle[0].mileageUnit[0],
                        year: vehicle[0].year[0],
                        img: vehicle.photos[0],
                        // priceMonth: Number(vehicle[0].price[0]):150,
                        price: Number(vehicle[0].price[0]),
                        special_price: Number(vehicle[0].special_price[0]),
                        specialOffer: Number(vehicle[0].pecialOffer[0]),
                        tradeinDiscount: Number(vehicle[0].tradeinDiscount[0]),
                        creditDiscount: Number(vehicle[0].creditDiscount[0]),
                        insuranceDiscount: Number(vehicle[0].insuranceDiscount[0]),
                        desc: vehicle[0].description[0],
                        availability: vehicle[0].availability[0],
                        CarModification: {
                            connectOrCreate: {
                                where: {
                                    id_1c: Number(vehicle.modification['$'].id)
                                },
                                create: {
                                    id_1c: Number(vehicle.modification['$'].id),
                                    name: String(vehicle[0].modification[0]._),
                                    engineType: String(vehicles[0].engineType),
                                    engineVolume: String(vehicle[0].engineVolume),
                                    enginePower: String(vehicle[0].enginePower),
                                    gearboxType: String(vehicle[0].gearboxType),
                                    driveType: String(vehicle[0].driveType),
                                    bodyType: String(vehicle[0].bodyType),
                                    bodyDoorCount: Number(vehicle[0].bodyDoorCount),
                                    steeringWheel: String(vehicle[0].steeringWheel),
                                    length: String(vehicle[0].length),
                                    width: String(vehicle[0].length),
                                }
                            },
                        },
                        CarComplectation: {
                            connectOrCreate: {
                                where: {
                                    id_1c: Number(vehicle[0].complectation[0].$.id)
                                },
                                create: {
                                    id_1c: Number(vehicle[0].complectation[0].$.id),
                                    name: vehicle[0].complectation[0]._,
                                    seatsCar: '5',
                                }
                            }
                        },
                        DealerModel: {
                            connectOrCreate: {
                                where: {
                                    id_1c: Number(vehicle[0].dealer[0].$.id)
                                },
                                create: {
                                    id_1c:  Number(vehicle[0].dealer[0].$.id),
                                    name:vehicle[0].dealer[0]._,
                                    address: vehicle[0].poi_id[0],
                                    phone: vehicle[0].phones[0].phone[0]._,
                                }
                            }
                        },
                        // Extras: {
                        //     connectOrCreate: {
                        //         where: {
                        //             cars:
                        //         },
                        //         create: {
                        //             groupId: vehicle[0].extras[0].group[0].$.id,
                        //             groupName: vehicles[0].extras[0].group[0].$.name,
                        //             name: vehicles[0].extras[0].group[0].element[0]._,
                        //         }
                        //     }
                        // }
                    }
                })
            }
        })
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

start()