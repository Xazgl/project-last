import { NextApiRequest, NextApiResponse } from "next"
import db from "../../../prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    try {
        if (req.method === 'GET') {
            if (typeof id === 'string') {
                const answer= await db.job.findUnique({
                    where: { 
                        id: id 
                    },
                    
                })
                res.send(answer)
            }
        }else{
            res.status(403).send({ message: "не найдена вакансия" })
        }
    }catch(error){
        console.error(error)
        res.status(500).send({ message: "Ошибка сервера" })
    }
}
    
    
    //     // const host = process.env.NODE_ENV === 'production' ? process.env.HOST : 'http://localhost:3000'
    //     // // return res.status(401).send({ redirectUrl: host + '/admin/login' })
    // } catch (error) {
    // console.error(error)
    // res.status(500).send({ message: "Ошибка сервера" })
    
