import helmet from "helmet";
import { NextApiRequest, NextApiResponse } from "next"
import checkSession from "../../../../src/services/checkCookie";
import db from "../../../../prisma";

const withHelmetUpdateJob = (handler) => (req: NextApiRequest, res: NextApiResponse) => {
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
                const { id } = req.query
                const { title, description, shortDesc, detailFilterBrand,
                    detailFilterMode, detailFilterPeople, image, price,
                } = req.body
                if (typeof id === 'string') {
                    try {
                        const updateOffer = await db.offer.update({
                            where: {
                                id: id
                            },
                            data: {
                                title:title,
                                shortDesc:shortDesc,
                                description:description,
                                filterMainPeople: detailFilterBrand,
                                detailFilterBrand: detailFilterMode,
                                detailFilterMode: detailFilterPeople,
                                img:image,
                                price:price,
                            }
                        })
                        res.status(200).send(updateOffer);
                    } catch (error) {
                        res.status(500).send({ message: "Ошибка обновления" })

                    }
                } else {
                    res.status(404).send({ message: "Не тот формат id" })
                }
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

export default withHelmetUpdateJob(handler)