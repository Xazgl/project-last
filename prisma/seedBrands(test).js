// // @ts-check
const { PrismaClient } = require('@prisma/client');
const { nanoid } = require('nanoid');
const db = new PrismaClient()





const brandsPages = [
    //Geely
    {
        id: 1,
        brand: 'Geely',
        banner: `/uploads/catalogPages/geely/bannerDesktop.png`,
        maps: [
            {
                id: 1,
                nameDc: 'Geely Арконт',
                imgDC: `/uploads/catalogPages/geely/dc.jpg`,
                linkToYandex: 'https://yandex.ru/maps/38/volgograd/?from=api-maps&ll=44.438373%2C48.705594&mode=routes&origin=jsapi_2_1_79&rtext=~48.705594%2C44.438373&rtt=auto&ruri=~&z=16',
                iframeMapSrc: 'https://yandex.ru/map-widget/v1/?um=constructor%3A399fb4497c8726800a313dd39c8c20ad93898ba103df9256cab8c789f8a27656&amp;source=constructor',
                phone: '+7 (844) 220-50-73',
                adress: 'г. Волгоград, ул. Неждановой, 12',
                email: 'geely@arkont.ru',
            }
        ],
        aboutBrand: 'Geely - символ элегантности, инноваций и непревзойденного качества. Отправляйтесь в захватывающее путешествие с мастером инженерного искусства, который воплощает будущее автомобильной индустрии.Бренд Geely - история страстного стремления и мастерства, начавшаяся с маленькой китайской автомобильной компании и превратившаяся в глобального лидера инноваций и качества в автомобильной индустрии. Сегодня Geely - это символ современности и элегантности, предлагающий уникальный опыт вождения и гарантирующий безопасность и комфорт на каждом пути.',
        news: [
            {
                id: 1,
                title: 'Абсолютно новый кроссовер Monjaro',
                desc: `Абсолютно новый кроссовер Monjaro - премиальная модель Geely по уровню дизайна,материалов и технологий.Это новый флагман модельной гаммы Geely в России`,
                img: [
                    `/uploads/catalogPages/geely/news/news_1.jpg`,
                    `/uploads/catalogPages/geely/news/news_2.png`,
                ],
            }
        ]
    },
    //BAIC
    {
        id: 2,
        brand: 'BAIC',
        banner: `/uploads/catalogPages/baic/bannerDesktop.png`,
        maps: [
            {
                id: 1,
                nameDc: 'BAIC Арконт',
                imgDC: `/uploads/catalogPages/baic/dc.png`,
                linkToYandex: 'https://yandex.ru/maps/10951/volzhskiy/?ll=44.682852%2C48.763465&mode=routes&rtext=~48.772454%2C44.567981&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzgzMDAzMxJY0KDQvtGB0YHQuNGPLCDQktC-0LvQs9C-0LPRgNCw0LQsINC_0YDQvtGB0L_QtdC60YIg0LjQvNC10L3QuCDQki7QmC4g0JvQtdC90LjQvdCwLCAxMTPQlCIKDZxFMkIV_hZDQg%2C%2C&z=12',
                iframeMapSrc: 'https://yandex.ru/map-widget/v1/?um=constructor%3A790d51cca41cacb371a72350bef338f9172fe0e13003b637ee757b26308eaf48&amp;source=constructor',
                phone: '+7 (844) 220-41-50',
                adress: 'г. Волгоград, ул. Неждановой, 12',
                email: 'baic@arkont.ru',
            },
            {
                id: 2,
                nameDc: 'BAIC Арконт',
                imgDC: `/uploads/catalogPages/baic/dc.png`,
                linkToYandex: 'https://yandex.ru/maps/10951/volzhskiy/?ll=44.682852%2C48.763465&mode=routes&rtext=~48.757501%2C44.790279&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNjI4MzMxMTE5EnrQoNC-0YHRgdC40Y8sINCS0L7Qu9Cz0L7Qs9GA0LDQtNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQktC-0LvQttGB0LrQuNC5LCDQv9GA0L7RgdC_0LXQutGCINC40LzQtdC90Lgg0JvQtdC90LjQvdCwLCAzNTkvMSIKDT8pM0IVrgdDQg%2C%2C&z=12',
                iframeMapSrc: 'https://yandex.ru/map-widget/v1/?um=constructor%3A5ded68bed0084484ff22d2dcb9c9675829c17fac454bb7c7e0902cf0a1455595&amp;source=constructor',
                phone: '+7 (844) 344-54-05',
                adress: 'г. Волжский,пр. им. Ленина, 359',
                email: 'baic@arkont.ru',
            }
        ],
        aboutBrand: 'BAIC - это бренд, вдохновленный смелостью, инновациями и стремлением к превосходству. Всяческая деталь их автомобилей является выразителем эстетики и технической изысканности, на каждом шагу они стремятся к совершенству.',
        news: [

        ]
    },
    //Chery
    {
        id: 3,
        brand: 'Chery',
        banner: `/uploads/catalogPages/chery/bannerDesktop.png`,
        maps: [
            {
                id: 1,
                nameDc: 'Chery Арконт',
                imgDC: `/uploads/catalogPages/chery/dc.png`,
                linkToYandex: 'https://yandex.ru/maps/38/volgograd/?from=api-maps&ll=44.490567%2C48.756841&mode=routes&origin=jsapi_2_1_79&rtext=~48.756968%2C44.490263&rtt=auto&ruri=~&z=19.3',
                iframeMapSrc: 'https://yandex.ru/map-widget/v1/?um=constructor%3A790d51cca41cacb371a72350bef338f9172fe0e13003b637ee757b26308eaf48&amp;source=constructor',
                phone: '+7 (844) 220-50-73',
                adress: 'г. Волгоград, ул. Землячки, 19Г',
                email: 'chery@arkont.ru',
            }
        ],
        aboutBrand: 'Chery - это автомобильный бренд, который зарекомендовал себя как один из ведущих производителей автомобилей в Китае. Бренд Chery объединяет инновационные технологии, современный дизайн и высокое качество изготовления, предлагая широкий ассортимент автомобилей для различных потребностей и предпочтений покупателей.',
        news: [
            {
                id: 1,
                title: 'Абсолютно новый Chery Arrizo 8',
                desc: `Абсолютно новый Chery Arrizo 8 - Эффектный силуэт кузова и мощные мускулистые линии, словно визуальное выражение динамики, создают ощущение энергии и неудержимой жизненной силы.`,
                img: [
                    `/uploads/catalogPages/chery/news/1.webp`,
                    `/uploads/catalogPages/chery/news/1.jpg`,
                ],
            }
        ]
    },
    //EXEED
    {
        id: 4,
        brand: 'EXEED',
        banner: `uploads/catalogPages/exeed/bannerDesktop.png`,
        maps: [
            {
                id: 1,
                nameDc: 'EXEED Арконт',
                imgDC: `/uploads/catalogPages/exeed/dc.png`,
                linkToYandex: 'https://yandex.ru/maps/10951/volzhskiy/?from=&ll=44.791306%2C48.782364&mode=routes&rtext=~48.758962%2C44.496026&rtt=mt&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Nzg0NTk3MBJB0KDQvtGB0YHQuNGPLCDQktC-0LvQs9C-0LPRgNCw0LQsINGD0LvQuNGG0LAg0JfQtdC80LvRj9GH0LrQuCwgMjUiCg3v-zFCFS0JQ0I%2C&source=wizroute&z=14',
                iframeMapSrc: 'https://yandex.ru/map-widget/v1/?um=constructor%3A42b4d2801fa613a4a282481f1e42ad790bfce6b95a1c76ad30128b7cd8f0c726&amp;source=constructor',
                phone: '+7 (8442) 202-173',
                adress: 'г. Волгоград, ул. Землячки, 25',
                email: 'exeed@arkont.ru',
            }
        ],
        aboutBrand: `Exeed - это эмблема величия и передовых технологий. Автомобили отличаются инновационными решениями и безупречным качеством. Каждая модель является истинным произведением искусства, сочетая в
                    себе изысканный дизайн и передовые технологии,
                    что делает их вне конкуренции на рынке автомобилестроения.`,
        news: [
            {
                id: 1,
                title: '  Новый EXEED LX AWD 1.6 2023 г.',
                desc: ``,
                img: [
                    `/uploads/catalogPages/exeed/news/1.png`,
                    `/uploads/catalogPages/exeed/news/2.png`,
                ],
            }
        ]
    },
    //FAW
    {
        id: 5,
        brand: 'FAW',
        banner: `/uploads/catalogPages/faw/bannerDesktop.png`,
        maps: [
            {
                id: 1,
                nameDc: 'FAW Арконт',
                imgDC: `/uploads/catalogPages/faw/dc.webp`,
                linkToYandex: 'https://yandex.ru/maps/10951/volzhskiy/?from=&ll=44.791306%2C48.782364&mode=routes&rtext=~48.814410%2C44.602135&rtt=mt&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozMTQwMjEyMTU3EknQoNC-0YHRgdC40Y8sINCS0L7Qu9Cz0L7Qs9GA0LDQtCwg0JLQuNC70YzQvdGO0YHRgdC60LDRjyDRg9C70LjRhtCwLCA0Mi8yIgoNl2gyQhX0QUNC&source=wizroute&z=14',
                iframeMapSrc: 'https://yandex.ru/map-widget/v1/?um=constructor%3Ad9d05808de66081e63c2d675691c94f71311f11c7f9fd589d05c85583f871a5c&amp;source=constructor',
                phone: '+7 (844) 222-05-77',
                adress: 'г. Волгограл, ул.Вильнюсская, 42/2',
                email: 'faw@arkont.ru',
            }
        ],
        aboutBrand: `Бренд FAW - это воплощение смелости, инноваций и превосходства.
        Каждая деталь их автомобилей является выразительным проявлением эстетики
        и технической изысканности, подчеркивая стремление к совершенству.`,
        news: [
            {
                id: 1,
                title: 'Новый Bestune B70',
                desc: `В Bestune B70 сочетаются динамика и комфорт, дополненные дерзким и
                уверенным профилем.
                Его элегантность считывается в пристальном внимании к деталям.`,
                img: [
                    `/uploads/catalogPages/faw/news/1.png`,
                    `/uploads/catalogPages/faw/news/2.png`,
                ],
            }
        ]
    },
    //Hyundai
    {
        id: 6,
        brand: 'Hyundai',
        banner: `/uploads/catalogPages/hyundai/bannerDesktop.png`,
        maps: [
            {
                id: 1,
                nameDc: 'Hyundai Арконт',
                imgDC: `/uploads/catalogPages/hyundai/dc.png`,
                linkToYandex: 'https://yandex.ru/maps/38/volgograd/?from=&ll=44.516979%2C48.707068&mode=routes&rtext=~48.757240%2C44.790844&rtt=mt&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNjI4MzMwMzI5EnjQoNC-0YHRgdC40Y8sINCS0L7Qu9Cz0L7Qs9GA0LDQtNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQktC-0LvQttGB0LrQuNC5LCDQv9GA0L7RgdC_0LXQutGCINC40LzQtdC90Lgg0JvQtdC90LjQvdCwLCAzNTkiCg3UKTNCFWoHQ0I%2C&source=wizroute&z=12',
                iframeMapSrc: 'https://yandex.ru/map-widget/v1/?um=constructor%3Ac0bb2e4bbea3eda65ae9e8aa759ff967aaece10f97c8a220e480d62424245994&amp;source=constructor',
                phone: '+7 (8443) 44-51-07',
                adress: 'г. Волжский, пр-т Ленина, 359',
                email: 'hyundai@arkont.ru',
            }
        ],
        aboutBrand: ` Hyundai - это бренд, который олицетворяет инновации, стиль и
        надежность. Каждая модель Hyundai является совершенным сочетанием
        современного дизайна, передовых технологий и высокой функциональности.`,
        news: [

        ]
    },
    //JAC
    {
        id: 7,
        brand: 'JAC',
        banner: `/uploads/catalogPages/jac/bannerDesktop.png}`,
        maps: [
            {
                id: 1,
                nameDc: 'JAC Арконт',
                imgDC: `/uploads/catalogPages/jac/dc.png`,
                linkToYandex: 'https://yandex.ru/maps/38/volgograd/?from=&ll=44.516979%2C48.707068&mode=routes&rtext=~48.815603%2C44.602046&rtt=mt&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTg2NjY4MjQ0EkfQoNC-0YHRgdC40Y8sINCS0L7Qu9Cz0L7Qs9GA0LDQtCwg0JLQuNC70YzQvdGO0YHRgdC60LDRjyDRg9C70LjRhtCwLCA0MiIKDX9oMkIVLUNDQg%2C%2C&source=wizroute&z=12',
                iframeMapSrc: 'https://yandex.ru/map-widget/v1/?um=constructor%3A2c8d19f7fa288315ffd139664af31d5e895b8219ec73cbee2f0e517baaeddd2e&amp;source=constructor',
                phone: '+7 (8442) 74-65-82',
                adress: 'г. Волгоград, ул. Вильнюсская, д. 42',
                email: 'jac@arkont.ru',
            }
        ],
        aboutBrand: ` JAC - это бренд, который воплощает динамичность, элегантность и непревзойденное качество.
        Каждая модель JAC обладает харизмой, превосходным дизайном и передовыми инновациями, предлагая непревзойденный комфорт и удовольствие от вождения. Отличительной чертой автомобилей JAC является их современный стиль, сочетающий в себе гармонию форм и деталей. Кроме того, JAC славится своей надежностью
        и высокой функциональностью, делая его брендом, в котором можно полностью доверять`,
        news: [
        ]
    },
    //Jetour
    {
        id: 8,
        brand: 'Jetour',
        banner: `/uploads/catalogPages/jetour/bannerDesktop.png`,
        maps: [
            {
                id: 1,
                nameDc: 'JETOUR Арконт',
                imgDC: `/uploads/catalogPages/jetour/dc.png`,
                linkToYandex: 'https://yandex.ru/maps/38/volgograd/?from=&ll=44.516979%2C48.707068&mode=routes&rtext=~48.769343%2C44.542209&rtt=mt&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Nzg0OTA1NBJR0KDQvtGB0YHQuNGPLCDQktC-0LvQs9C-0LPRgNCw0LQsINGD0LvQuNGG0LAg0JzQsNGA0YjQsNC70LAg0JXRgNGR0LzQtdC90LrQviwgN9CRIgoNOCsyQhXPE0NC&source=wizroute&z=12',
                iframeMapSrc: 'https://yandex.ru/map-widget/v1/?um=constructor%3Aec8401cd524a77e0bb1e7289105802ab62916cc8972ed8dbfa46ff15178d695a&amp;source=constructor',
                phone: '+7 (8442) 74-65-82',
                adress: 'г. Волгоград, ул. Маршала Ерёменко, 7Б',
                email: 'jetour@arkont.ru',
            }
        ],
        aboutBrand: `Автомобиль JETOUR - это совершенно новый автомобильный бренд, разработанный в ответ на тенденции развития рынка и изменения потребительского спроса.
        Компания анализирует изменения в подходе потребителей к автопутешествиям и применяет эти данные в разработке своих продуктов.
        JETOUR стремится стать лидером на рынке &apos; Путешествие плюс &apos; и предоставлять более разумные туристические решения для большего числа семей и индивидуальных клиентов.`,
        news: [
        ]
    },
    //Jetta
    {
        id: 9,
        brand: 'Jetta',
        banner: `/uploads/catalogPages/jetta/bannerDesktop.png`,
        maps: [
            {
                id: 1,
                nameDc: 'JETTA Арконт',
                imgDC: `/uploads/catalogPages/jetta/dc.png`,
                linkToYandex: 'https://yandex.ru/maps/38/volgograd/?from=&ll=44.557853%2C48.775070&mode=routes&rtext=~48.814410%2C44.602135&rtt=mt&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozMTQwMjEyMTU3EknQoNC-0YHRgdC40Y8sINCS0L7Qu9Cz0L7Qs9GA0LDQtCwg0JLQuNC70YzQvdGO0YHRgdC60LDRjyDRg9C70LjRhtCwLCA0Mi8yIgoNl2gyQhX0QUNC&source=wizroute&z=14',
                iframeMapSrc: 'https://yandex.ru/map-widget/v1/?um=constructor%3A7c2dd1c61d3b6f0bc20fd356f366f089fcf707601cb647896a4ca2c643da329e&amp;source=constructor',
                phone: '+7 (8442) 74-65-82',
                adress: 'г. Волгоград, ул. Вильнюсская, д. 42',
                email: 'jetta@arkont.ru',
            }
        ],
        aboutBrand: `Jetta – автомобильный бренд, созданный Volkswagen Group и FAW Group в 2019 году.
        Популярная модель Volkswagen Jetta легла в основу новой компании, так как служит
        ориентиром на высокое качество и безопасность`,
        news: [
        ]
    },
    //KAIYI
    {
        id: 10,
        brand: 'Kaiyi',
        banner: `/uploads/catalogPages/kaiyi/bannerDesktop.png`,
        maps: [
            {
                id: 1,
                nameDc: 'KAIYI Арконт',
                imgDC: `/uploads/catalogPages/kaiyi/dc.png`,
                linkToYandex: 'https://yandex.ru/maps/38/volgograd/?from=&ll=44.557853%2C48.775070&mode=routes&rtext=~48.772454%2C44.567981&rtt=mt&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzgzMDAzMxJY0KDQvtGB0YHQuNGPLCDQktC-0LvQs9C-0LPRgNCw0LQsINC_0YDQvtGB0L_QtdC60YIg0LjQvNC10L3QuCDQki7QmC4g0JvQtdC90LjQvdCwLCAxMTPQlCIKDZxFMkIV_hZDQg%2C%2C&source=wizroute&z=14',
                iframeMapSrc: 'https://yandex.ru/map-widget/v1/?um=constructor%3A81a61d96dc94865b6d8a803ed2f662d87e8da0a83ee723e21c4e13e188d5fb7c&amp;source=constructor',
                phone: '+7 (844) 220-50-73',
                adress: 'г. Волгоград, пр. имени Ленина, 113Д',
                email: 'kaiyi@arkont.ru',
            }
        ],
        aboutBrand: `KAIYI - это бренд, который вобрал в себя смелость, инновации и
        превосходство. Каждая деталь их автомобилей выражает эстетику
        и техническую изысканность, отражая стремление к совершенству. `,
        news: [
        ]
    },

]


async function startSeed() {
    const brands = await Promise.all(brandsPages.map(async brand => {
        return await db.brands.create({
            data: {
                brand: brand.brand,
                banner: brand.banner,
                description: brand.aboutBrand,
                maps: {
                    connectOrCreate: brand.maps.map(dc => ({
                        where: {
                            id: dc.nameDc + nanoid()
                        },
                        create: {
                            nameDc: dc.nameDc,
                            imgDC: dc.imgDC,
                            linkToYandex: dc.linkToYandex,
                            iframeMapSrc: dc.iframeMapSrc,
                            phone: dc.phone,
                            adress: dc.adress,
                            email: dc.email,
                        }
                    }))
                },
                news: {
                    connectOrCreate: brand.news.map(item => ({
                        where: {
                            id: dc.nameDc + nanoid()
                        },
                        create: {
                            title: item.title,
                            description: item.desc,
                            img: { set: item.img }
                        }
                    })),
                }
            }
        })
    }))
}



startSeed()