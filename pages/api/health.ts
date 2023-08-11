import type { NextApiRequest, NextApiResponse } from 'next'

export default async function health(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.send('OK')
    }
}