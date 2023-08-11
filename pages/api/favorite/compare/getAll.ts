import { NextApiRequest, NextApiResponse } from "next"
import db from "../../../../prisma"
import { getRedisInstance } from "../../../../src/services/redis";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const clientToken = req.cookies['clientToken']
        if (clientToken) {
            if (req.method === 'GET') {
                if (typeof clientToken === 'string') {
                    // Генерируем уникальный ключ
                    const cacheKey = `compareCars:${clientToken}`;
                    // Проверяем Редиc кэш
                    const cachedData = await getRedisInstance().get(cacheKey);
                    if (cachedData) {
                        const compareCarUser = JSON.parse(cachedData);
                        return res.status(200).send({ compareCarUser });
                    }
                    // если кеша нет, то база данных
                    const compareCarUser = await db.sessionClient.findUnique({
                        where: {
                            sessionToken: clientToken,
                        },
                        include: {
                            compareCars: {
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
                    await getRedisInstance().set(cacheKey, JSON.stringify(compareCarUser));
                    await getRedisInstance().set(`${cacheKey}:timestamp`, Date.now().toString());
                    return res.status(200).send({ compareCarUser });
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
//                     const compareCarUser = await db.sessionClient.findUnique(
//                         {
//                             where: {
//                                 sessionToken: clientToken,
//                             },
//                             include: {
//                                compareCars: {
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
//                   return   res.send({ compareCarUser })
//                 }
//             }
//             return res.status(401).send({ message: 'не тот маршрут' })
//         }
//     } catch (error) {
//         console.error(error)
//         res.status(500).send({ message: "Ошибка сервера" })
//     }
// }