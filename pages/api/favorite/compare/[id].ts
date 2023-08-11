import { NextApiRequest, NextApiResponse } from "next"
import db from "../../../../prisma"
import { getRedisInstance } from "../../../../src/services/redis";




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { id } = req.query;
    const clientToken = req.cookies['clientToken'];
    if (clientToken) {
      try {
        if (typeof id === 'string') {
          const user = await db.sessionClient.findUnique({
            where: {
              sessionToken: clientToken,
            },
          });

          const currentCar = await db.compareCarsToCar.findFirst({
            where: {
              carId: id,
              sessionId: user.id,
            },
          });

          if (!currentCar) {
            const compareCar = await db.compareCarsToCar.create({
              data: {
                car: {
                  connect: {
                    id,
                  },
                },
                session: {
                  connect: {
                    sessionToken: clientToken,
                  },
                },
              },
            });

            // Очищаем кэш пользователя после добавления новой машины к сравнению
            const cacheKey = `compareCars:${clientToken}`;
            await getRedisInstance().del(cacheKey);

            res.status(200).send(compareCar);
          } else {
            res.status(200).send('Машина уже добавлена');
          }
        }
      } catch (error) {
        res.status(500).send(error);
      }
    }
  }
}


// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         const { id } = req.query
//         const clientToken = req.cookies['clientToken']
//         if (clientToken) {
//             try {
//                 if (typeof id === 'string') {

//                     const user = await db.sessionClient.findUnique({
//                         where: {
//                             sessionToken: clientToken
//                         },
//                     })

//                     const currentCar = await db.compareCarsToCar.findFirst({
//                         where: {
//                             carId: id,
//                             sessionId: user.id
//                         }
//                     })

//                     if (!currentCar) {
//                         const carCompare= await db.compareCarsToCar.create({
//                             data: {
//                                 car: {
//                                     connect: {
//                                         id
//                                     }
//                                 },
//                                 session: {
//                                     connect: {
//                                         sessionToken: clientToken,
//                                     }
//                                 }
//                             }
//                         })
//                         res.status(200).send(carCompare)
//                     } else {
//                         res.status(200).send('Машина уже добавлена')
//                     }
//                 }
//             } catch (error) {
//                 res.status(500).send(error)
//             }
//         }
//     }
// }
