import { NextApiRequest, NextApiResponse } from "next"
import db from "../../../prisma"
import { getRedisInstance } from "../../../src/services/redis";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const clientToken = req.cookies['clientToken']
        if (clientToken) {
            if (req.method === 'GET') {
                if (typeof clientToken === 'string') {
                    // Генерируем уникальный ключ
                    const cacheKey = `favoriteCars:${clientToken}`;
                    // Проверяем Редим кэш
                    const cachedData = await getRedisInstance().get(cacheKey);
                    if (cachedData) {
                        const favoriteCarUser = JSON.parse(cachedData);
                        return res.status(200).send({ favoriteCarUser });
                    }
                    // если кеша нет, то база данных
                    const favoriteCarUser = await db.sessionClient.findUnique({
                        where: {
                            sessionToken: clientToken,
                        },
                        include: {
                            favoriteCars: {
                                select: {
                                    car: {
                                        include: {
                                            CarModel: true,
                                            CarComplectation: true,
                                            CarModification: true,
                                            extras: true,
                                            DealerModel: true,
                                        },
                                    },
                                },
                            },
                        },
                    });
                    // Сохраняем в Redis с временными метками 
                    await getRedisInstance().set(cacheKey, JSON.stringify(favoriteCarUser));
                    await getRedisInstance().set(`${cacheKey}:timestamp`, Date.now().toString());
                    return res.status(200).send({ favoriteCarUser });
                }
            }
            return res.status(401).send({ message: 'не тот маршрут' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: "Ошибка сервера" })
    }
}

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         const clientToken = req.cookies['clientToken']
//         if (clientToken) {
//             if (req.method === 'GET') {
//                 if (typeof clientToken === 'string') {
//                     const favoriteCarUser = await db.sessionClient.findUnique(
//                         {
//                             where: {
//                                 sessionToken: clientToken,
//                             },
//                             include: {
//                                favoriteCars: {
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
//                    return  res.status(200).send({ favoriteCarUser })
//                 }
//             }
//            return res.status(401).send({ message: 'не тот маршрут' })
//         }
//     } catch (error) {
//         console.error(error)
//         res.status(500).send({ message: "Ошибка сервера" })
//     }
// }