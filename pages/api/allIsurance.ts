import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../prisma';

export default async function allIsurance(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const client = await db.calcInsurance.findMany({})
            res.status(200).send(client)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: "Ошибка сервера" })
        }
    } else {
        res.status(404).send({ message: "Неверный адрес" })
    }
}

