import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') { 
        res.send({ redirectUrl: '/opelModels/zafira' }) 
    }else {
        res.status(401).send({ status: 'Incorrect credentials' })
    }
}