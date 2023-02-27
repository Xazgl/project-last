import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../prisma';
import bcryptjs from 'bcryptjs';
import { nanoid } from 'nanoid';
import { sign } from '../../src/services/signature'
import { setCookies } from 'cookies-next';
import { z } from 'zod';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            if (!req.cookies['clientToken']) {
                // sessions
                const sessionToken = nanoid(36)
                const expires = new Date(Date.now() + 60 * 60 * 24 * 365 * 5 * 1000)
                setCookies('clientToken', sessionToken, { req, res, expires });
                const session = await db.sessionClient.create({
                    data: {
                        sessionToken,
                        expires,
                    }
                })
                res.send({ sessionToken })
            }
            res.end()
        } catch (error) {
            res.status(500).send({ message: "Ошибка в базе данных" })
        }
    } else {
        res.status(404).send({ message: "Неверный адрес" })
    }
}