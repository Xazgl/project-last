import { NextApiRequest, NextApiResponse } from "next"
import db from "../../../../prisma"

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

                    const currentCar = await db.watchedCarsToCar.findFirst({
                        where: {
                            carId: id,
                            sessionId: user.id
                        }
                    })

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
                        })
                        res.status(200).send(carWatched)
                    } else {
                        res.status(200).send('Машина уже добавлена')
                    }
                }
            } catch (error) {
                res.status(500).send(error)
            }
        }
    }
}
