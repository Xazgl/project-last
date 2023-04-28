import { NextApiRequest, NextApiResponse } from "next"
import checkSession from "../../../../src/services/checkCookie";
import db from "../../../../prisma";
import helmet from "helmet";

const withHelmetStatusJob = (handler) => (req: NextApiRequest, res: NextApiResponse) => {
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
                if (typeof id === 'string') {
                    try {
                        const { active } = req.body
                        if (typeof active === 'boolean' && typeof id === 'string') {
                            const updJobStatus = await db.job.update({
                                where: { id },
                                data: { active }
                            })
                            res.send(updJobStatus)
                        }
                    } catch (error) {
                        res.status(500).send({ message: "Ошибка обновления статуса" })

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

export default withHelmetStatusJob(handler)












