import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../prisma';
import bcryptjs from 'bcryptjs';
import { nanoid } from 'nanoid';
import { sign } from '../../src/services/signature'
import { setCookies } from 'cookies-next';
import { z } from 'zod';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const loginSchema = z.object({
                login: z.string().min(2).max(20),
                pass: z.string().min(2).max(20)
            })
            const { login, pass } = loginSchema.parse(req.body)
            const adminByLogin = await db.admin.findUnique({ where: { login } })
            if (adminByLogin) {
                if (await bcryptjs.compare(pass, adminByLogin.passwordHash)) {
                    // sessions
                    const sessionToken = nanoid()
                    const token = sign(sessionToken, process.env.SECRET!)
                    setCookies('sid', token, { req, res, maxAge: 60 * 60 * 24 });
                    //   res.cookie('sid',token,{httpOnly:true,maxAge:2*24*60*60*1000})
                    const session = await db.session.create({
                        data: {
                            sessionToken: sessionToken,
                            expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
                            adminId: adminByLogin.id
                        }
                    })
                    res.send({ redirectUrl: '/admin/sales' })
                } else {
                    res.status(401).send({ status: 'Incorrect credentials' })
                }
            } else {
                res.status(401).send({ status: 'Incorrect credentials' })
            }
        } catch (error) {
            res.status(400).send({ message: "Некорретный логин и пароль" })
        }
    } else {
        res.status(404).send({ message: "Неверный адрес" })
    }
}