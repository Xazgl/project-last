import { RequestHandler } from "express"
import { NextApiRequest, NextApiResponse } from "next"

export function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: RequestHandler) {
    return new Promise((resolve, reject) => {
        // @ts-ignore
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}