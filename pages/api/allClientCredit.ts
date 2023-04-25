import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../prisma';
import checkSession from '../../src/services/checkCookie';
import helmet from 'helmet';

export default async function allClientCredit(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const token = req.cookies['sid']
            const admin = await checkSession(token)
            if (admin) {
                const clientsCredit = await db.calcCredit.findMany()
                res.send(clientsCredit)
            } else {
                res.status(403).send({ message: "Нет прав доступа" })
            }
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: "Ошибка сервера" })
        }
    } else {
        res.status(404).send({ message: "Неверный адрес" })
    }
}

