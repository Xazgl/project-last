import { NextApiRequest, NextApiResponse } from "next"
import db from "../../../../prisma"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const clientToken = req.cookies['clientToken']
        if (clientToken) {
            if (req.method === 'GET') {
                if (typeof clientToken === 'string') {
                    const watchedCarUser = await db.sessionClient.findUnique(
                        {
                            where: {
                                sessionToken: clientToken,
                            },
                            include: {
                               watchedCars: {
                                select:{
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
                    )
                    res.send({ watchedCarUser })

                }
            }
            return res.status(401).send({ message: 'не тот маршрут' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: "Ошибка сервера" })
    }
}