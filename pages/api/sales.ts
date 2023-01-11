//@ts-ignore
import { NextApiRequest, NextApiResponse } from "next";
import db from '../../prisma';
import nextConnect from 'next-connect';
import multer from 'multer';
import { CreateSaleDto, UpdateSaleDto } from '../../@types';
import checkSession from "../../src/services/checkCookie";
import helmet from "helmet";
import { z } from 'zod';

const upload = multer({
    storage: multer.diskStorage({
        destination: './public/uploads',
        filename: (req, file, cb) => cb(null, file.originalname),
    }),
});
// const app = express()
// const route = express.Route
// app.use(route)

const apiRoute = nextConnect<NextApiRequest & { file?: Express.Multer.File }, NextApiResponse>({
    onError(error, req, res) {
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

apiRoute.use(upload.single('image'));
apiRoute.use(helmet());

apiRoute.post(async (req, res, next) => {
    const token = req.cookies['sid']
    const admin = await checkSession(token)
    if (admin) {
        return next()
    }
    next(new Error('Auth required'))
}, async (req, res) => {
    const img: string = req.file ? req.file.filename : ''
    const { title, shortDesc, description, filterMainPeople,  detailFilterBrand, detailFilterMode, price } = req.body as CreateSaleDto
    try {
        try {
            const loginSchema = z.object({
                title: z.string().min(2).max(30),
                shortDesc: z.string().min(2).max(60),
                description: z.string().min(2).max(300),
                filterMainPeople: z.string().max(50),
                detailFilterBrand: z.string().max(50),
                detailFilterMode: z.string().max(100),
                price: z.string().min(2).max(20)
            })
            const { title, shortDesc, description, filterMainPeople, detailFilterBrand, detailFilterMode, price } = loginSchema.parse(req.body)
        } catch {
            res.status(404).send({ message: "Ошибка валидации на сервере" })
        }
        const newSale = await db.offer.create({
            data: {
                title, shortDesc, description,filterMainPeople, detailFilterBrand, detailFilterMode, price, active: true, img
            }
        })
        res.status(200).send(newSale)
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: "Ошибка сервера" })
    }
    // res.status(200).json({ data: 'success' });
});

apiRoute.get(async (req, res) => {
    try {
        const sales = await db.offer.findMany()
        res.send(sales)
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: "Ошибка сервера" })
    }
})

apiRoute.put(async (req, res, next) => {
    const token = req.cookies['sid']
    const admin = await checkSession(token)
    if (admin) {
        return next()
    }
    next(new Error('Auth required'))
}, async (req, res) => {
    const img: string = req.file ? req.file.filename : ''
    const {id, title, shortDesc, description,filterMainPeople, detailFilterBrand, detailFilterMode, price } = req.body as UpdateSaleDto
    try {
        try {
            const loginSchema = z.object({
                title: z.string().min(2).max(30),
                shortDesc: z.string().min(2).max(60),
                description: z.string().min(2).max(300),
                filterMain: z.string(),
                detailFilter: z.string(),
                price: z.string().min(2).max(20)
            })
            const { title, shortDesc, description, filterMain, detailFilter, price } = loginSchema.parse(req.body)
        } catch {
            res.status(404).send({ message: "Ошибка валидации на сервере" })
        }
        const newSale = await db.offer.update({
            where:{id},
            data: {
                title, shortDesc, description,filterMainPeople, detailFilterBrand, detailFilterMode, price, active: true, img
            }
        })
        res.send(newSale)
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: "Ошибка сервера" })
    }
    // res.status(200).json({ data: 'success' });
});

export default apiRoute;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};

// import type { NextApiRequest, NextApiResponse } from 'next'
// import { CreateSaleDto } from '../../@types';
// import db, { Sales } from '../../prisma';
// import multer from 'multer'
// import path from 'path';
// import { runMiddleware } from '../../src/services/middleware';

// const imageDir = path.join(__dirname, '../../../../public/images')
// const upload = multer({ dest: imageDir })

// export default async function findClient(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         await runMiddleware(req, res, upload.single('image'))
//         console.log(req.files)
//         const { title, description, img } = req.body as CreateSaleDto
//         try {
//             const newSale = await db.sales.create({
//                 data: {
//                     title, description, active: true
//                 }
//             })
//             res.send(newSale)
//         } catch (error) {
//             console.error(error)
//             res.status(500).send({ message: "Ошибка сервера" })
//         }
//     } else if (req.method === 'GET') {
//         // res.send(__dirname)
//         try {
//             const sales = await db.sales.findMany()
//             res.send(sales)
//         } catch (error) {
//             console.error(error)
//             res.status(500).send({ message: "Ошибка сервера" })
//         }
//     } else {
//         res.status(404).send({ message: "Неверный адрес" })
//     }
// }
