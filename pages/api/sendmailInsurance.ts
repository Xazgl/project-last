import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../prisma';
import nodemailer from 'nodemailer';
import { z } from 'zod';

export default async function sendmailInsurance(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const clinetSchema = z.object({
            name: z.string().min(2).max(20),
            phone: z.string().min(6).max(20),
            officeName: z.string().min(2).max(200),
            equipment: z.string().min(2).max(10),
            year: z.string().min(3).max(4),
            power: z.string().min(2).max(3),
            carNumber: z.string().min(6).max(9),
            city: z.string().min(2).max(40),
            carModel: z.string().min(1).max(50),
            price: z.string().min(4).max(20),
            carBrendName: z.string().min(2).max(20),
            insuranceTypeKASKO: z.boolean({}),
            insuranceTypeOSAGO: z.boolean({}),
            alarmSystem: z.boolean({}),
            carDeposit: z.boolean({}),
            installmentPlan: z.boolean({}),
            drivers: z.array(z.object({
                id:z.number(),
                yearsOld:  z.string().min(2).max(2),
                exp: z.string().min(1).max(2),
                gender:  z.enum(['Мужской', 'Женский'])
            })).nonempty({}),
        })
        const adminFromReq = clinetSchema.parse(req.body)
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

            function boolStr(bool) {
                if (bool === true) {
                    return 'да'
                } else {
                    return 'нет'
                }
            }
            let result = await transporter.sendMail({
                from: '"Заявка с arkont.ru" UriyAPKOHT@yandex.ru',
                to: 'UriyAPKOHT@yandex.ru',
                subject: `Заявка с arkont.ru `,
                text: `Заявка на страховку от ${adminFromReq.name} ${adminFromReq.phone} в ${adminFromReq.officeName}  с arkont.ru на машину  ${adminFromReq.carBrendName}
                 ${adminFromReq.carModel}  ${adminFromReq.year}  года выпуска  ${adminFromReq.power}, ГОС номер${adminFromReq.carNumber} 
                 стоимостью  ${adminFromReq.price}.Водителей в страховке: ${adminFromReq.drivers}. КАСКО:${boolStr(adminFromReq.insuranceTypeKASKO)},
                 ОСАГО:${boolStr(adminFromReq.insuranceTypeKASKO)},охранная система:${boolStr(adminFromReq.alarmSystem)},
                 машина в депозите:${boolStr(adminFromReq.carDeposit)}, рассрочка:${boolStr(adminFromReq.installmentPlan)}`,
                html:
                    `Заявка на страховку от ${adminFromReq.name} ${adminFromReq.phone} в ${adminFromReq.officeName}  с arkont.ru на машину  ${adminFromReq.carBrendName}
                    ${adminFromReq.carModel}  ${adminFromReq.year}  года выпуска  ${adminFromReq.power}, ГОС номер${adminFromReq.carNumber} 
                    стоимостью  ${adminFromReq.price}.Водителей в страховке: ${adminFromReq.drivers}. КАСКО:${boolStr(adminFromReq.insuranceTypeKASKO)},
                    ОСАГО:${boolStr(adminFromReq.insuranceTypeKASKO)},охранная система:${boolStr(adminFromReq.alarmSystem)},
                    машина в депозите:${boolStr(adminFromReq.carDeposit)}, рассрочка:${boolStr(adminFromReq.installmentPlan)}`,
            })
            //регистрация в базу
            const clientSend = await db.calcInsurance.create({
                data: {
                    name: adminFromReq.name,
                    phone: adminFromReq.phone,
                    officeName: adminFromReq.officeName,
                    equipment: adminFromReq.equipment,
                    year: adminFromReq.year,
                    power: adminFromReq.power,
                    carNumber: adminFromReq.carNumber,
                    city: adminFromReq.city,
                    carBrendName: adminFromReq.carBrendName,
                    carModel: adminFromReq.carModel,
                    price: adminFromReq.price,
                    insuranceTypeKASKO: adminFromReq.insuranceTypeKASKO,
                    insuranceTypeOSAGO: adminFromReq.insuranceTypeOSAGO,
                    alarmSystem: adminFromReq.alarmSystem,
                    carDeposit: adminFromReq.carDeposit,
                    installmentPlan: adminFromReq.installmentPlan,
                    drivers: adminFromReq.drivers
                }
            })

            const allClientSend= await db.calcInsurance.findMany()
            res.status(200).send(allClientSend);
        } catch (error) {
            res.status(500).send({ message: "Ошибка сервера" })
        }
    } else {
        res.status(404).send({ message: "Неверный адрес" })
    }
}

