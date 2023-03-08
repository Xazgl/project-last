import { NextApiRequest, NextApiResponse } from "next"
import db from "../../../prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { id } = req.query
        const clientToken = req.cookies['clientToken']
        if (clientToken) {
            try {
                if (typeof id === 'string') {
                    const carFavorite = await db.favoriteCarsToCar.create({
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
                    res.status(200).send(carFavorite)
                }
            } catch (error) {
                res.status(500).send(error)
            }
        }
    }
}
