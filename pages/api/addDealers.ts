import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../prisma';
import checkSession from '../../src/services/checkCookie';

export default async function addDealers(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const token = req.cookies['sid']
            const admin = await checkSession(token)
            if (admin) {
                await db.$transaction([
                    db.offices.deleteMany({}),
                ])
                const  bodyStr = req.body
                const dealers= JSON.parse(bodyStr)
                for (const dealer of dealers) {
                    const newDealers = await db.offices.create({
                        data: {
                            name: dealer.name,
                            label: dealer.label,
                            photo: dealer.photo,
                            city: dealer.city,
                            address: dealer.address,
                            phone: dealer.phone,
                            brend: dealer.brend,
                        }
                    })
                }
                const allDealer = await db.offices.findMany()
                res.status(200).send(allDealer)
            }
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: "Ошибка сервера" })
        }
    } else {
        res.status(404).send({ message: "Неверный адрес" })
    }
}

