import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../prisma';

export default async function allCars(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const cars = await db.car.findMany(
                {
                    where: {
                        active: true,
                    },
                    include: {
                        CarModel: true,
                        CarComplectation: true,
                        CarModification: true,
                        extras: true,
                        DealerModel: true,
                        FavoriteCarsToCar:true,
                        CompareCarsToCar: true,
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

