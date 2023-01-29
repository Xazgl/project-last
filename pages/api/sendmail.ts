import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';
import db from '../../prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, phone, vin, IntSpareParts, comment } = req.body
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
                from: '"Заявка на подбор запчасти" UriyAPKOHT@yandex.ru',
                to: 'UriyAPKOHT@yandex.ru',
                subject: 'Заявка на подбор запчасти ',
                text: `Заявка  на подбор запчасти от ${name} ${phone} VIN ${vin} ариткул запчасти ${IntSpareParts},комментарий к заявке ${comment} с chery-arkont.ru`,
                html:
                    `Заявка  на подбор запчасти от ${name} ${phone} VIN ${vin} ариткул запчасти ${ IntSpareParts},комментарий к заявке ${comment} с chery-arkont.ru`,
            })
            //регистрация в базу
            const clientSend = await db.clientParts.create({data: {
                name, 
                phone, 
                vin, 
                IntSpareParts, 
                comment,
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