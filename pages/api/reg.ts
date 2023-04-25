import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../prisma';
import bcryptjs from 'bcryptjs';
// import { redirect } from 'next/dist/server/api-utils';
import helmet from 'helmet';

const withHelmetReg = (handler) => (req: NextApiRequest, res: NextApiResponse) => {
    helmet()(req, res, () => {
        handler(req, res);
    });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { login, pass } = req.body
        try {
            const passwordHash = await bcryptjs.hash(pass, 10)
            const userAD = await db.admin.create({
                data: {
                    login,
                    passwordHash
                }
            })
            res.send({ redirectUrl: '/admin/login' })

        } catch (error) {
            res.status(500).send({ message: "Ошибка сервера" })
        }
    } else {
        res.status(404).send({ message: "Неверный адрес" })
    }
}

export default withHelmetReg(handler);


// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         const { login, pass } = req.body
//         try {
//             const passwordHash = await bcryptjs.hash(pass, 10)
//             const userAD = await db.admin.create({
//                 data: {
//                     login,
//                     passwordHash
//                 }
//             })
//             res.send({ redirectUrl: '/admin/login' })

//         } catch (error) {
//             res.status(500).send({ message: "Ошибка сервера" })
//         }
//     } else {
//         res.status(404).send({ message: "Неверный адрес" })
//     }
// }