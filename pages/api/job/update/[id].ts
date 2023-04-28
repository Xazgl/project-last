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
                const { title, description, salary, exp, office, carBrend, active } = req.body
                if (typeof id === 'string') {
                    try {
                        const updateJob = await db.job.update({
                            where: {
                                id: id
                            },
                            data: {
                                title,
                                description,
                                salary,
                                exp,
                                office,
                                carBrend,
                                active
                            }
                        })
                        res.status(200).send(updateJob);
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