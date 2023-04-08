import { NextApiRequest, NextApiResponse } from "next"
import checkSession from "../../../../src/services/checkCookie"
import db from "../../../../prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    try {
        const sid = req.cookies['sid']
        const admin = await checkSession(sid)
        if (admin) {
            if (req.method === 'POST') {
                if (typeof id === 'string') {
                    const deleteCar = await db.usedCars.delete({
                        where: { id },
                    })
                    res.send(`Success ${deleteCar} deleted`)
                }
            }
        }
        const host = process.env.NODE_ENV === 'production' ? process.env.HOST : 'http://localhost:3000'
        return res.status(401).send({ redirectUrl: host + '/admin/login' })
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: "Ошибка сервера" })
    }    
}