import type { NextApiRequest, NextApiResponse } from 'next'
import db, { Offer } from '../../prisma';
import nextConnect from 'next-connect';
import multer from 'multer';
import checkSession from "../../src/services/checkCookie";
import helmet from "helmet";
import { z, ZodError } from 'zod';

const upload = multer({
    storage: multer.diskStorage({
        destination: './public/uploads',
        filename: (req, file, cb) => cb(null, file.originalname),
    }),
});

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
    try {
        const img: string = req.file ? req.file.filename : ''
        const loginSchema = z.object({
            title: z.string().min(2).max(50),
            shortDesc: z.string().min(2).max(150),
            description: z.string(),
            filterMainPeople: z.string().min(2).max(60),
            detailFilterBrand: z.string().min(2).max(60),
            detailFilterMode: z.string().min(2).max(60),
            price: z.string().max(60),
        })
        const {
            title, shortDesc, description, filterMainPeople, detailFilterBrand, detailFilterMode, price
        } = loginSchema.parse(req.body)
        const newOffer = await db.offer.create({
            data: {
                title,
                shortDesc,
                description,
                filterMainPeople,
                detailFilterBrand,
                detailFilterMode,
                img,
                price,
                active: true,
            }
        })
        res.status(200).send(newOffer)
    } catch (error) {
        console.error(error)
        if (error instanceof ZodError) {
            return res.status(404).send({ message: "Ошибка валидации на сервере" })
        }
        res.status(500).send({ message: "Ошибка сервера" })
    }
});

export default apiRoute;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};





// import type { NextApiRequest, NextApiResponse } from 'next';
// import db, { Offer } from '../../prisma';
// import nextConnect from 'next-connect';
// import { IncomingForm } from 'formidable-serverless';
// import checkSession from '../../src/services/checkCookie';
// import helmet from 'helmet';
// import { z, ZodError } from 'zod';
// import { rename } from 'fs/promises';
// import { join } from 'path';

// const apiRoute = nextConnect<NextApiRequest & { file?: any }, NextApiResponse>({
//   onError(error, req, res) {
//     res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
//   },
//   onNoMatch(req, res) {
//     res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
//   },
// });

// apiRoute.use(helmet());

// apiRoute.post(async (req, res, next) => {
//   const form = new IncomingForm({
//     uploadDir: './public/uploads',
//     keepExtensions: true,
//   });

//   form.parse(req, async (err, fields, files) => {
//     if (err) {
//       res.status(500).json({ error: 'Error uploading file' });
//       return;
//     }

//     try {
//       const imgFile: any = files.image;
//       const imgFileName = imgFile ? imgFile.name : '';
//       const imgFilePath = imgFile ? imgFile.path : '';

//       const loginSchema = z.object({
//         title: z.string().min(2).max(50),
//         shortDesc: z.string().min(2).max(150),
//         description: z.string(),
//         filterMainPeople: z.string().min(2).max(60),
//         detailFilterBrand: z.string().min(2).max(60),
//         detailFilterMode: z.string().min(2).max(60),
//         price: z.string().max(60),
//       });

//       const {
//         title,
//         shortDesc,
//         description,
//         filterMainPeople,
//         detailFilterBrand,
//         detailFilterMode,
//         price,
//       } = loginSchema.parse(fields);

//       const newFileName = `${new Date().getTime()}-${imgFileName}`;
//       const newFilePath = join('./public/uploads', newFileName);

//       await rename(imgFilePath, newFilePath);

//       const newOffer = await db.offer.create({
//         data: {
//           title,
//           shortDesc,
//           description,
//           filterMainPeople,
//           detailFilterBrand,
//           detailFilterMode,
//           img: newFileName,
//           price,
//           active: true,
//         },
//       });

//       res.status(200).send(newOffer);
//     } catch (error) {
//       console.error(error);
//       if (error instanceof ZodError) {
//         return res.status(404).send({ message: 'Ошибка валидации на сервере' });
//       }
//       res.status(500).send({ message: 'Ошибка сервера' });
//     }
//   });
// });

// export default apiRoute;

// export const config = {
// //   api: {
// //     bodyParser: false, // Disallow body parsing, consume as stream
// //   },
//   api: {
//     externalResolver: true,
//     sizeLimit: '50mb',
//     bodyParser: false, // Disallow body parsing, consume as stream

//   },
// };