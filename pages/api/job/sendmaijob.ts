import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../prisma';
import nodemailer from 'nodemailer';
import { z } from 'zod';

export default async function sendmaijob(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
        const vacansySchema = z.object({
            name: z.string().min(2).max(30),
            surname: z.string().min(2).max(30),
            patronymic: z.string().min(2).max(40),
            phone: z.string().min(2).max(30),
            salary: z.string().min(2).max(100),
            companyName: z.string().min(2).max(200),
            companyPosition: z.string().min(2).max(100),
            startData: z.string().min(2).max(80),
            endData: z.string().min(2).max(80),
            text: z.string().min(2).max(400),
            textTwo: z.string().min(2).max(400),
        })
        const vacansyFromReq =  vacansySchema.parse(req.body)
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
                from: '"Заявка с arkont.ru" UriyAPKOHT@yandex.ru',
                to: 'UriyAPKOHT@yandex.ru',
                subject: `Отклик на резюме с arkont.ru  `,
                text: `Отклик на резюме от ${vacansyFromReq.name} ${vacansyFromReq.surname} ${vacansyFromReq.patronymic}
                 ${vacansyFromReq.phone}. Рабола в  ${vacansyFromReq.companyName} должность ${vacansyFromReq.companyPosition}
                 стаж работы от ${vacansyFromReq.startData} до ${vacansyFromReq.endData}. Причина увольнения 
                 ${vacansyFromReq.text}. Пожелания ${vacansyFromReq.textTwo}`,
                html:
                    `Отклик на резюме от ${vacansyFromReq.name} ${vacansyFromReq.surname} ${vacansyFromReq.patronymic}
                ${vacansyFromReq.phone}. Работал(а) в  ${vacansyFromReq.companyName} должность ${vacansyFromReq.companyPosition}
                стаж работы от ${vacansyFromReq.startData} до ${vacansyFromReq.endData}. Причина увольнения 
                ${vacansyFromReq.text}. Пожелания ${vacansyFromReq.textTwo}`,
            })
            //регистрация в базу
            const vacancySend = await db.vacancy.create({
                data: {
                    name: vacansyFromReq.name,
                    surname:vacansyFromReq.surname,
                    patronymic:vacansyFromReq.patronymic,
                    phone: vacansyFromReq.phone,
                    salary:vacansyFromReq.salary,
                    companyName:vacansyFromReq.companyName,
                    companyPosition:vacansyFromReq.companyPosition,
                    startData:vacansyFromReq.startData,
                    endData:vacansyFromReq.endData,
                    text:vacansyFromReq.text,
                    textTwo:vacansyFromReq.textTwo
                }
            })
            res.status(200).send(vacancySend);
        } catch (error) {
            res.status(500).send({ message: "Ошибка сервера" })
        }
    } else {
        res.status(404).send({ message: "Неверный адрес" })
    }
}

