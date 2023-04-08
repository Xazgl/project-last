import type { NextApiRequest, NextApiResponse } from 'next'
import checkSession from '../../src/services/checkCookie'

export default async function getSession(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const sid = req.cookies['sid']
      const admin = await checkSession(sid)
      if (admin) {
        const { id, login } = admin.admin
        return res.status(200).send({ id, login })
      }
      const host = process.env.NODE_ENV === 'production' ? process.env.HOST : 'http://localhost:3000'
      return res.status(401).send({ redirectUrl: host + '/admin/login' })
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: "Ошибка сервера" })
    }
  } else {
    res.status(404).send({ message: "Неверный адрес" })
  }
}