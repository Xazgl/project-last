import { NextApiRequest, NextApiResponse } from "next"
import db from "../../../prisma"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const clientToken = req.cookies['clientToken']
        if (clientToken) {
            if (req.method === 'GET') {
                if (typeof clientToken === 'string') {
                    const favoriteCarUser = await db.sessionClient.findUnique(
                        {
                            where: {
                                sessionToken: clientToken,
                            },
                            include: {
                               favoriteUsedCars: {
                                select:{
                                    car: {}
                                }
                               }
                            }
                        }
                    )
                   return  res.status(200).send({ favoriteCarUser })
                }
            }
           return res.status(401).send({ message: 'не тот маршрут' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: "Ошибка сервера" })
    }
}