import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../prisma';
import prisma from '../../prisma';
import checkSession from '../../src/services/checkCookie';

export default async function findClient(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const token = req.cookies['sid']
            const admin = await checkSession(token)
            if (admin) {
                const clients = await db.clientTradein.findMany()
                // debugger
                res.send(clients)
                // debugger
            } else {
                res.status(403).send({ message: "Нет прав доступа" })
            }
            //найти клиентов из базы
        }catch (error) {
            console.error(error)
            res.status(500).send({ message: "Ошибка сервера" })
        }
    }else {
        res.status(404).send({ message: "Неверный адрес" })
    }
}





