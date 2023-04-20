import { NextApiRequest, NextApiResponse } from "next";
import sharp from "sharp"; // импортируем библиотеку sharp
import db from "../../../prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  try {
    if (req.method === 'GET') {
      if (typeof id === 'string') {
        const answer = await db.usedCars.findUnique({
          where: {
            id: id
          },
        });
        // Используем sharp для сжатия изображения перед отправкой на клиентскую сторону
        const compressedImage = await sharp(answer.picture[0])
          .jpeg({ quality: 80 }) // Устанавливаем качество сжатия JPEG изображения
          .toBuffer();
        res.setHeader('Content-Type', 'image/jpeg'); // Устанавливаем заголовок Content-Type для изображения
        res.send(compressedImage); // Отправляем сжатое изображение на клиентскую сторону
      }
    } else {
      res.status(403).send({ message: "не найдена машина" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Ошибка сервера" });
  }
}
