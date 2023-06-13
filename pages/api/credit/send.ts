import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import db from '../../../prisma';

const requestSchema = z.object({
  name: z.string(),
  phone: z.string(),
  firstPrice: z.number(),
  month: z.number(),
  carName: z.string(),
  carId: z.string(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, phone, firstPrice, month, carName, carId } = requestSchema.parse(req.body);

      // Отправка письма
      const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
          user: 'UriyAPKOHT@yandex.ru',
          pass: 'sgqwqfsmmnajkskr',
        },
      });

      await transporter.sendMail({
        from: '"Заявка на подбор запчасти" UriyAPKOHT@yandex.ru',
        to: 'UriyAPKOHT@yandex.ru',
        subject: 'Заявка на кредит',
        text: `Заявка  на кредит от ${name} ${phone} на  ${carName}. Взнос по кредиту ${firstPrice}, планируемый срок ${month} мес. с arkont.ru ${carId}`,
        html: `Заявка  на кредит от ${name} ${phone} на  ${carName}. Взнос по кредиту ${firstPrice}, планируемый срок ${month} мес. с arkont.ru ${carId}`,
      });

      // Регистрация в базе данных
      function priceWithSpaces(firstPrice) {
        return String(Math.round(Number(firstPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')))) + ' ₽/мес';
      }

      const clientSend = await db.calcCredit.create({
        data: {
          name,
          phone,
          firstPrice: priceWithSpaces(firstPrice),
          month,
          carName,
        },
      });

      res.status(200).json(clientSend);
    } catch (error) {
      // Обработка ошибок
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  } else {
    res.status(404).json({ message: 'Неверный адрес' });
  }
}
