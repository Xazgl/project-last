import { NextApiRequest, NextApiResponse } from "next"
import db from "../../../../prisma"
import { redisClient } from "../../../../src/services/redis";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const clientToken = req.cookies['clientToken']
        if (clientToken) {
            if (req.method === 'GET') {
                if (typeof clientToken === 'string') {
                    const cacheKey = `watchedCars:${clientToken}`;
                    const cachedData = await redisClient.get(cacheKey);
                    if (cachedData) {
                        const watchedCarUser = JSON.parse(cachedData);
                        return res.status(200).send({ watchedCarUser });
                    }
                    const watchedCarUser = await db.sessionClient.findUnique(
                        {
                            where: {
                                sessionToken: clientToken,
                            },
                            include: {
                                watchedCars: {
                                    select: {
                                        car: {
                                            include: {
                                                CarModel: true,
                                                CarComplectation: true,
                                                CarModification: true,
                                                extras: true,
                                                DealerModel: true,
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    );
                    await redisClient.set(cacheKey, JSON.stringify(watchedCarUser));
                    await redisClient.set(`${cacheKey}:timestamp`, Date.now().toString());
                    return res.status(200).send({ watchedCarUser});
                }
            } else if (req.method === 'POST') {
                const { id } = req.query;
                if (typeof id === 'string') {
                    const user = await db.sessionClient.findUnique({
                        where: {
                            sessionToken: clientToken
                        },
                    });
                    const currentCar = await db.watchedCarsToCar.findFirst({
                        where: {
                            carId: id,
                            sessionId: user.id
                        }
                    });
                    if (!currentCar) {
                        const carWatched = await db.watchedCarsToCar.create({
                            data: {
                                car: {
                                    connect: {
                                        id
                                    }
                                },
                                session: {
                                    connect: {
                                        sessionToken: clientToken,
                                    }
                                }
                            }
                        });
                        const cacheKey = `watchedCars:${clientToken}`;
                        await redisClient.del(cacheKey);
                        return res.status(200).send(carWatched);
                    } else {
                        return res.status(200).send('Машина уже добавлена');
                    }
                }
            }
            return res.status(401).send({ message: 'не тот маршрут' })
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Ошибка сервера" })
    }
}
















// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         const clientToken = req.cookies['clientToken']
//         if (clientToken) {
//             if (req.method === 'GET') {
//                 if (typeof clientToken === 'string') {
//                     const watchedCarUser = await db.sessionClient.findUnique(
//                         {
//                             where: {
//                                 sessionToken: clientToken,
//                             },
//                             include: {
//                                watchedCars: {
//                                 select:{
//                                     car: {
//                                         include: {
//                                             CarModel: true,
//                                             CarComplectation: true,
//                                             CarModification: true,
//                                             extras: true,
//                                             DealerModel: true,
//                                         }
//                                     }
//                                 }
//                                }
//                             }
//                         }
//                     )
//                    return  res.send({ watchedCarUser })

//                 }
//             }
//             return res.status(401).send({ message: 'не тот маршрут' })
//         }
//     } catch (error) {
//         console.error(error)
//         res.status(500).send({ message: "Ошибка сервера" })
//     }
// }