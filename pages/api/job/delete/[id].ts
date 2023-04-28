import helmet from "helmet";
import { NextApiRequest, NextApiResponse } from "next"
import checkSession from "../../../../src/services/checkCookie";
import db from "../../../../prisma";

const withHelmetDeleteJob = (handler) => (req: NextApiRequest, res: NextApiResponse) => {
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
                        const deleteJob = await db.job.findUnique({
                            where: {
                                id: id
                            },
                        })
                        res.status(200).send(deleteJob);

                    } catch (error) {
                        res.status(500).send({ message: "Ошибка удаления" })

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

export default withHelmetDeleteJob(handler)