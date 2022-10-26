import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';
import db from '../../prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, phone} = req.body
        try {
            //письмо
            let testEmailAccount = await nodemailer.createTestAccount()
            let transporter = nodemailer.createTransport({
                host: 'smtp.yandex.ru',
                port: 465,
                secure: true,
                auth: {
                    user: 'UriyAPKOHT@yandex.ru',
                    pass: 'sgqwqfsmmnajkskr',
                },
            })
            let result = await transporter.sendMail({
                from: '"Заявка от клиента с Chery-Service" UriyAPKOHT@yandex.ru',
                to: 'UriyAPKOHT@yandex.ru',
                subject: 'Заявка на обратный звонок',
                text: `Заявка  от ${name} ${phone}`,
                html:`Заявка  от ${name} ${phone}`,
            })
            //регистрация в базу
            const clientSend = await db.clientNeedCall.create({data: {
                name, 
                phone, 
            }})
            res.status(200).send(clientSend);
            // res.status(200).send(result);
        } catch (error) {
             res.status(500).send({ message: "Ошибка сервера" })
           
        }
    } else {
        res.status(404).send({ message: "Неверный адрес" })
    }
}