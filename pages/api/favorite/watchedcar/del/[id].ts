import { NextApiRequest, NextApiResponse } from "next"
import db from "../../../../../prisma"
import { getRedisInstance } from "../../../../../src/services/redis"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { id } = req.query
        const clientToken = req.cookies['clientToken']
        if (clientToken) {
            try {
                if (typeof id === 'string') {
                    const user = await db.sessionClient.findUnique({
                        where: {
                            sessionToken: clientToken
                        },
                    })
                    try {
                        const currentCar = await db.watchedCarsToCar.deleteMany({
                            where: {
                                carId: id,
                                sessionId: user.id,
                            },
                        })
                        
                        // Очищаем кэш пользователя после удаления автомобиля из списка просмотренных
                        const cacheKey = `watchedCars:${clientToken}`;
                        await getRedisInstance().del(cacheKey);
                        
                        res.status(200).send(currentCar)
                    }catch {
                        res.status(500).send('Машина отсутствует')
                    }
                }
            } catch (error) {
                res.status(500).send(error)
            }
        }
    }
}

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         const { id } = req.query
//         const clientToken = req.cookies['clientToken']
//         if (clientToken) {
//             try {
//                 if (typeof id === 'string') {
//                     const user = await db.sessionClient.findUnique({
//                         where: {
//                             sessionToken: clientToken
//                         },
//                     })
//                     try {
//                         const currentCar = await db.watchedCarsToCar.deleteMany({
//                             where: {
//                                 carId: id,
//                                 sessionId: user.id,
//                             },     
//                         })
//                         res.status(200).send(currentCar)
//                     }catch {
//                         res.status(500).send('Машина отсутствует')
//                     }
//                 }
//             } catch (error) {
//                 res.status(500).send(error)
//             }
//         }
//     }
// }
