import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';
import db from '../../../prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, phone, firstPrice, month, carName, carId } = req.body
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
                subject: 'Заявка на кредит',
                text: `Заявка  на кредит от ${name} ${phone} на  ${carName} . Взнос по кредиту ${firstPrice}, планируемый срок ${month} мес. с arkont.ru ${carId} `,
                html:
                    `Заявка  на кредит от ${name} ${phone} на  ${carName} . Взнос по кредиту ${firstPrice}, планируемый срок ${month} мес. с arkont.ru ${carId} `,
            })
            //регистрация в базу

            function priceWithSpaces(firstPrice) {
                return String(Math.round(Number(firstPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))))+' ₽/мес'
                // {numberWithSpaces(Math.round(Number(car.priceMonth)))} ₽/мес
            }

            const clientSend = await db.calcCredit.create({
                data: {
                    name,
                    phone,
                    firstPrice:priceWithSpaces(firstPrice),
                    month,
                    carName,
                }
            })
            res.status(200).send(clientSend);
            // res.status(200).send(result);
        } catch (error) {
            res.status(500).send({ message: "Ошибка сервера" })

        }
    } else {
        res.status(404).send({ message: "Неверный адрес" })
    }
}