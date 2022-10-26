import { NextApiRequest, NextApiResponse } from "next"
import db from "../../../prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    try {
        if (req.method === 'GET') {
            if (typeof id === 'string') {
                const answer= await db.sales.findUnique({
                    where: { 
                        id: id },
                })
                res.send(answer)
            }
        }else{
            res.status(403).send({ message: "не найдена акция" })
        }
    }catch(error){
        console.error(error)
        res.status(500).send({ message: "Ошибка сервера" })
    }
}
    