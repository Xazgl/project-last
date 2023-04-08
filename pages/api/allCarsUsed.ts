import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../prisma';

export default async function allCarsUsed(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const cars = await db.usedCars.findMany(
                {
                    where: {
                        active: true,
                    },
                    include: {
                        FavoriteUsedCarsToCar:true,
                        CompareUsedCarsToCar: true,
                    }
                }
            )
            res.status(200).send(cars)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: "Ошибка сервера" })
        }
    } else {
        res.status(404).send({ message: "Неверный адрес" })
    }
}

