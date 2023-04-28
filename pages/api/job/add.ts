import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';
import db from '../../../prisma';
import helmet from 'helmet';
import checkSession from '../../../src/services/checkCookie';


const withHelmetAddJob = (handler) => (req: NextApiRequest, res: NextApiResponse) => {
    helmet()(req, res, () => {
        handler(req, res);
    });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const sid = req.cookies['sid']
        const admin = await checkSession(sid)
        if (admin) {
            try {
                const { title, description, salary, exp, office, carBrend } = req.body
                //регистрация в базу
                const newJob = await db.job.create({
                    data: {
                        title,
                        description,
                        salary,
                        exp,
                        office,
                        carBrend,
                        active: true
                    }
                })
                res.status(200).send(newJob);
            } catch (error) {
                res.status(500).send({ message: "Ошибка сервера" })

            }
        } else {
            res.status(404).send({ message: "Вы не авторизированы" })
        }
    } else {
        res.status(404).send({ message: "Неверный адрес" })
    }
}

export default withHelmetAddJob(handler)