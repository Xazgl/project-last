import { NextApiRequest } from 'next'
// import { unsign } from './signature'
// import db from '../../prisma'

export default async function   checkSession (token: string) {
    // const token = req.cookies['sid']
    if (typeof window === 'undefined' && token) {
        const unsign = (await import('./signature')).unsign
        const sessionToken = unsign(token, process.env.SECRET!)

        if (sessionToken && typeof sessionToken === 'string') {
            const db = (await import('../../prisma')).default
            const session = await db.session.findUnique({ where: { sessionToken }, 
                include: { admin: true } })
            if (session) {
                return { admin: session.admin }
            }
        }
    }
}