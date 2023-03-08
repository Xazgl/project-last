import { NextApiRequest, NextApiResponse } from "next"
import db from "../../../prisma"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const clientToken = req.cookies['clientToken']
        if (clientToken) {
            if (req.method === 'GET') {
                if (typeof clientToken === 'string') {
                    const favoriteCar = await db.sessionClient.findUnique(
                        {
                            where: {
                                sessionToken: clientToken,
                            },
                            include: {
                                Car: true,
                            }
                        }
                    )
                    res.send({favoriteCar})

                    // const client = await db.sessionClient.findUnique({
                    //     where: {
                    //         sessionToken: clientToken
                    //     },
                    // })
                    // const clientId=clientToken.id




                    // const client = await db.sessionClient.update({
                    //     where: {
                    //         sessionToken: clientToken
                    //     },
                    //     FavoriteCarsToCar: {
                    //         connectOrCreate: {
                    //                     where: {
                    //                         sessionId : client.id
                    //                     },
                    //     }
                    // FavoriteCarsToCar: {
                    //     connectOrCreate: {
                    //         where: {
                    //             sessionId : client.id
                    //         },
                    // }
                    // })
                   

                    // CarComplectation: {
                    //     connectOrCreate: {
                    //         where: {
                    //             id_1c: Number(vehicle.complectation[0].$.id)
                    //         },
                    //         create: {
                    //             id_1c: Number(vehicle.complectation[0].$.id),
                    //                 name: vehicle.complectation[0]._,
                    //                     seatsCar: '5',
                    //         }
                    //     }
                    // }
                }
            }
            return res.status(401).send({ message: 'не тот маршрут'})
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: "Ошибка сервера" })
    }
}