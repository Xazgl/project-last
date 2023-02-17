//@ts-ignore
import { NextApiRequest, NextApiResponse } from "next";
import db from '../../prisma';
import nextConnect from 'next-connect';
import multer from 'multer';
import { CreateSaleDto, UpdateSaleDto } from '../../@types/dto';
import checkSession from "../../src/services/checkCookie";
import helmet from "helmet";
import { z } from 'zod';

const upload = multer({
    storage: multer.diskStorage({
        destination: './public/uploads',
        filename: (req, file, cb) => cb(null, file.originalname),
    }),
});
// const app = express()
// const route = express.Route
// app.use(route)

const apiRoute = nextConnect<NextApiRequest & { file?: Express.Multer.File }, NextApiResponse>({
    onError(error, req, res) {
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

apiRoute.use(upload.single('image'));
apiRoute.use(helmet());

apiRoute.post(async (req, res, next) => {
    const token = req.cookies['sid']
    const admin = await checkSession(token)
    if (admin) {
        return next()
    }
    next(new Error('Auth required'))
}, async (req, res) => {
    const img: string = req.file ? req.file.filename : ''
    const { id_1c_Car, usedOrNew, color, bodyColorMetallic, mileage,
        vin, year, price, special_price, specialOffer, tradeinDiscount,
        creditDiscount, insuranceDiscount, descriptionEditor, carModelId,
        carModificationId, carComplectationId, dealerModelId,
        id_1c_CarModel, modelId_1c, brandName, modelName, categoryId_1c,
        categoryIdName, generationId_1c, generationIName, groupId,
        groupName, nameExtras, id_1c_CarModification, nameCarModification,
        engineType, engineVolume, enginePower, gearboxType, driveType,
        bodyType, bodyDoorCount, steeringWheel, length, width,
        id_1c_CarComplectation, nameCarComplectation, seatsCar,
        id_1c_DealerModel, nameDealerModel, address, phone } = req.body
    try {
        try {
            const loginSchema = z.object({
                id_1c_Car: z.string().min(2).max(30),
                usedOrNew: z.string().min(3).max(30),
                color: z.string().min(3).max(30),
                bodyColorMetallic: z.string().min(1).max(1),
                mileage: z.string().min(0).max(30),
                vin: z.string().min(17).max(17),
                year: z.string().min(4).max(4),
                price: z.number().min(0).max(30),
                special_price: z.number().min(0).max(30),
                specialOffer: z.string().min(0).max(30),
                tradeinDiscount: z.number().min(0).max(30),
                creditDiscount: z.number().min(0).max(30),
                insuranceDiscount: z.number().min(0).max(30),
                descriptionEditor: z.string().min(0).max(400),
                carModelId: z.number().min(1).max(30),
                carModificationId: z.number().min(1).max(30),
                carComplectationId: z.number().min(1).max(30),
                dealerModelId: z.number().min(1).max(30),

                modelId_1c: z.number().min(0).max(30),
                brandName: z.string().min(2).max(30),
                modelName: z.string().min(2).max(50),
                categoryId_1c: z.number().min(1).max(30),
                categoryIdName: z.string().min(2).max(30),
                generationId_1c: z.number().min(1).max(30),
                generationIName: z.string().min(1).max(30),

                groupId: z.number().min(0).max(30),
                groupName: z.string().min(0).max(50),
                nameExtras: z.string().min(0).max(50),

                nameCarModification: z.string().min(2).max(50),
                engineType: z.string().min(5).max(6),
                engineVolume: z.string().min(1).max(5),
                enginePower: z.string().min(1).max(3),
                gearboxType: z.string().min(6).max(8),
                driveType: z.string().min(4).max(8),
                bodyType: z.string().min(3).max(10),
                bodyDoorCount: z.number().min(1).max(1),
                steeringWheel: z.string().min(4).max(5),
                length: z.string().min(0).max(6),
                width: z.string().min(0).max(6),

                nameCarComplectation: z.string().min(2).max(60),
                seatsCar: z.string().min(1).max(2),
                nameDealerModel: z.string().min(2).max(60),
                address: z.string().min(1).max(150),
                phone: z.string().min(8).max(30)
            })
            const {
                id_1c_Car, usedOrNew, color, bodyColorMetallic, mileage,
                vin, year, price, special_price, specialOffer, tradeinDiscount,
                creditDiscount, insuranceDiscount, descriptionEditor, carModelId,
                carModificationId, carComplectationId, dealerModelId,
                modelId_1c, brandName, modelName, categoryId_1c,
                categoryIdName, generationId_1c, generationIName, groupId,
                groupName, nameExtras, nameCarModification,
                engineType, engineVolume, enginePower, gearboxType, driveType,
                bodyType, bodyDoorCount, steeringWheel, length, width,
                nameCarComplectation, seatsCar,
                nameDealerModel, address, phone
            } = loginSchema.parse(req.body)

            const car = await db.car.findUnique({
                where: {
                    vin: vin,
                }
            })
            if (car === null) {
                const newCar = await db.car.create({
                    data: {
                        vin:  String(vin),
                        id_1c: String(id_1c_Car),
                        usedOrNew:String(usedOrNew),
                        color: String(color),
                        bodyColorMetallic: String(bodyColorMetallic),
                        mileage:String(mileage),
                        mileageUnit: 'km',
                        year: String(year),
                        img: {
                            set: String(img)
                        },
                        priceMonth: Number(price) / 150,
                        price: Number(price),
                        special_price: Number(special_price),
                        specialOffer: Number(specialOffer),
                        tradeinDiscount: Number(tradeinDiscount),
                        creditDiscount: Number(creditDiscount),
                        insuranceDiscount: Number(insuranceDiscount),
                        desc: descriptionEditor,
                        availability: 'available',
                        CarModification: {
                            connectOrCreate: {
                                where: {
                                    id_1c: Number(carModificationId)
                                },
                                create: {
                                    id_1c: Number(carModificationId),
                                    name: String(nameCarModification),
                                    engineType: String(engineType),
                                    engineVolume: String(engineVolume),
                                    enginePower: String(enginePower),
                                    gearboxType: String(gearboxType),
                                    driveType: String(driveType),
                                    bodyType: String(bodyType),
                                    bodyDoorCount: Number(bodyDoorCount),
                                    steeringWheel: String(steeringWheel),
                                    length: String(length),
                                    width: String(width),
                                }
                            },
                        },
                        CarComplectation: {
                            connectOrCreate: {
                                where: {
                                    id_1c: Number(carComplectationId)
                                },
                                create: {
                                    id_1c: Number(carComplectationId),
                                    name: String(nameCarComplectation),
                                    seatsCar: String(seatsCar),
                                }
                            }
                        },
                        DealerModel: {
                            connectOrCreate: {
                                where: {
                                    id_1c: Number(dealerModelId),
                                },
                                create: {
                                    id_1c: Number(dealerModelId),
                                    name: String(nameDealerModel),
                                    address: String(address),
                                    phone: phone,
                                }
                            }
                        },
                        extras: {
                            connectOrCreate: {
                                where: {
                                    name: nameExtras
                                },
                                create: {
                                    groupId: Number(groupId),
                                    groupName:String(groupName),
                                    name: nameExtras
                                }
                            }
                        },
                        CarModel: {
                            connectOrCreate: {
                                where: {
                                    modelId_1c: Number(carModelId),
                                },
                                create: {
                                    id_1c: Number(carModelId),
                                    modelId_1c: Number(modelId_1c),
                                    brandName: String(brandName),
                                    modelName: String(modelName),
                                    categoryId_1c: Number(categoryId_1c),
                                    categoryIdName: String(categoryIdName),
                                    generationId_1c: Number(generationId_1c),
                                    generationIName: String(generationIName),
                                }
                            }
                        }
                    }
                })
                res.status(200).send(newCar)
            } else {
                res.status(404).send('vin  номер  занят ')
            }

        } catch {
            res.status(404).send({ message: "Ошибка валидации на сервере" })
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: "Ошибка сервера" })
    }
});

apiRoute.get(async (req, res) => {
    try {
        const cars = await db.car.findMany(
            {
                where: {
                    active: true,
                },
                include: {
                    CarModel: true,
                    CarComplectation: true,
                    CarModification: true,
                    extras: true,
                    DealerModel: true,
                }
            }
        )
        res.status(200).send(cars)
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: "Ошибка сервера" })
    }
})

apiRoute.put(async (req, res, next) => {
    const token = req.cookies['sid']
    const admin = await checkSession(token)
    if (admin) {
        return next()
    }
    next(new Error('Auth required'))
}, async (req, res) => {
    const img: string = req.file ? req.file.filename : ''
    const { id, title, shortDesc, description, filterMainPeople, detailFilterBrand, detailFilterMode, price } = req.body as UpdateSaleDto
    try {
        try {
            const loginSchema = z.object({
                title: z.string().min(2).max(30),
                shortDesc: z.string().min(2).max(60),
                description: z.string().min(2).max(300),
                filterMain: z.string(),
                detailFilter: z.string(),
                price: z.string().min(2).max(20)
            })
            const { title, shortDesc, description, filterMain, detailFilter, price } = loginSchema.parse(req.body)
        } catch {
            res.status(404).send({ message: "Ошибка валидации на сервере" })
        }
        const newSale = await db.offer.update({
            where: { id },
            data: {
                title, shortDesc, description, filterMainPeople, detailFilterBrand, detailFilterMode, price, active: true, img
            }
        })
        res.send(newSale)
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: "Ошибка сервера" })
    }
    // res.status(200).json({ data: 'success' });
});

export default apiRoute;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};


