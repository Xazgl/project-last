import { NextApiRequest, NextApiResponse } from "next"
import db from "../../prisma"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const filterMain: string = req.body
        if (req.method === 'POST') {
            const query = req.query
            if (typeof filterMain == 'string') {
                try {
                    const updSale = await db.sales.findMany({
                        where: {
                            filterMain: filterMain,
                           
                        },
                    })
                    res.send(updSale)
                } catch(error) {
                    console.log(error)
                }
            } else {
                res.status(404).send({ message: "Ошибка типов" })
            }
        } else {
            res.send({ message: "Не правильный запрос" })
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: "Ошибка сервера" })
    }
}