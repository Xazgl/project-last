import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';
import db from '../../prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { brendName, model, complectation, mileage, carAge} = req.body
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
                subject: `Калькулятор ТО`,
                text: `Заявка на рассчет  от ${brendName} ${model} спецификация  ${complectation} пробег ${mileage}км  срок эксплуатации  ${carAge}`,
                html:
                `Заявка на рассчет  от ${brendName} ${model} спецификация  ${complectation} пробег ${mileage}км  срок эксплуатации  ${carAge}`,
            })
            //регистрация в базу
            const calculateResult= await db.calcTo.create({data: {
                brendName, 
                model, 
                complectation, 
                mileage,
                carAge,
            }})
            res.status(200).send(calculateResult);
            // res.status(200).send(result);
        } catch (error) {
             res.status(500).send({ message: "Ошибка сервера" })
           
        }
    } else {
        res.status(404).send({ message: "Неверный адрес" })
    }
}