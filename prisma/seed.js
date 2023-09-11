// @ts-check
const { PrismaClient } = require('@prisma/client');
const db = new PrismaClient()

const dealerList = [
    {
        // id: 0,
        name: 'Renault Арконт',
        label: `/uploads/logo-around/renault.webp`,
        photo: `/uploads/offices/renault.jpeg`,
        city: 'Волгоград',
        address: 'ул. Вильнюсская, 42/2',
        phone: '+7 (8442) 74-65-81',
        brend: 'Renault'
    },
    {
        name: 'KIA Арконт',
        label: `/uploads/logo-around/kia.webp`,
        photo: `/uploads/offices/kia.jpeg`,
        city: 'Волгоград',
        address: 'ул. Вильнюсская, 42/2',
        phone: '+7 (8442) 74-65-81',
        brend: 'KIA'
    },
    {
        name: 'Volkswagen Арконт',
        label: `/uploads/logo-around/volkswagen.webp`,
        photo: `/uploads/offices/volk.jpeg`,
        city: 'Волгоград',
        address: 'пр-т Ленина, 113Д',
        phone: '+7 (8442) 74-65-75',
        brend: 'Volkswagen'
    },
    {
        name: 'Nissan Арконт',
        label: `/uploads/logo-around/nissan.webp`,
        photo: `/uploads/offices/nissan.jpeg`,
        city: 'Волгоград',
        address: 'ул. Ерёменко, 7Б',
        phone: '+7 (8442) 74-65-72',
        brend: 'Nissan',
    },
    {
        name: 'Mitsubishi Арконт',
        label: `/uploads/logo-around/mithsubishi.webp`,
        photo: `/uploads/offices/mitsu.jpeg`,
        city: 'Волгоград',
        address: 'ул. Землячки, 19Г',
        phone: '+7 (8442) 74-65-42',
        brend: 'Mitsubishi',
    },
    {
        name: 'Hyundai Арконт',
        label: `/uploads/logo-around/hyundai.webp`,
        photo: `/uploads/offices/hyundai.jpeg`,
        city: 'Волжский',
        address: 'пр-т Ленина, 359',
        phone: '+7 (8443) 44-51-07',
        brend: 'Hyundai',
    },
    {
        name: 'АРКОНТСЕЛЕКТ на Землячке',
        label: `/uploads/logo-around/arkont_select.png`,
        photo: `/uploads/offices/used-zeml.jpeg`,
        city: 'Волгоград',
        address: 'ул. Землячки, 25',
        phone: '+7 (8442) 74-65-83',
        brend: 'C пробегом',
    },
    {
        name: 'АРКОНТСЕЛЕКТ в Волжском',
        label: `/uploads/logo-around/arkont_select.png`,
        photo: `/uploads/offices/used-vlz.jpeg`,
        city: 'Волжский',
        address: 'пр-т Ленина, 359',
        phone: '+7 (8443) 44-51-08',
        brend: 'C пробегом',
    },
    {
        name: 'УАЗ Арконт',
        label: `/uploads/logo-around/uaz.webp`,
        photo: `/uploads/offices/uaz.jpeg`,
        city: 'Волгоград',
        address: 'ул. Вильнюсская, 42/1',
        phone: '+7 (8442) 52-50-64',
        brend: 'УАЗ',
    },
    {
        name: 'Chery Арконт',
        label: `/uploads/logo-around/chery.webp`,
        photo: `/uploads/offices/chery.jpeg`,
        city: 'Волгоград',
        address: 'ул. Землячки 19Г',
        phone: '+7 (8442) 20-21-73',
        brend: 'Chery',
    },
    {
        name: 'EXEED Арконт',
        label: `/uploads/logo-around/exeed.webp`,
        photo: `/uploads/offices/exeed.jpeg`,
        city: 'Волгоград',
        address: 'г. Волгоград, ул. Землячки, 25',
        phone: '+7 (8442) 20-21-73',
        brend: 'EXEED',
    },
    {
        name: 'Geely Арконт',
        label: `/uploads/logo-around/usedCars/gee.png`,
        photo: `/uploads/offices/no_photo.png`,
        city: 'Волгоград',
        address: 'ул.Нежданова, 12',
        phone: '+7 (8442) 20-49-73',
        brend: 'Geely',
    },
    {
        name: 'HISUN Арконт',
        label: `/uploads/logo-around/hisun.webp`,
        photo: `/uploads/offices/no_photo.png`,
        city: 'Волгоград',
        address: 'пр-т им. В.И. Ленина, 113Д',
        phone: '+7 (8442) 20-49-74',
        brend: 'HISUN',
    },
    {
        name: 'LOVOL Арконт',
        label: `/uploads/logo-around/lovol.webp`,
        photo: `/uploads/offices/no_photo.png`,
        city: 'Волгоград',
        address: 'ул. Историческая, д.170',
        phone: '+7 (8442) 20-49-74',
        brend: 'LOVOL',
    },
    {
        name: 'Datsun Арконт',
        label: `/uploads/logo-around/datsun.webp`,
        photo: `/uploads/offices/no_photo.png`,
        city: 'Волгоград',
        address: 'ул. Ерёменко, 7Б',
        phone: '+7 (8442) 59-97-83',
        brend: 'Datsun',
    },
    {
        name: 'Datsun Арконт',
        label: `/uploads/logo-around/datsun.webp`,
        photo: `/uploads/offices/no_photo.png`,
        city: 'Волжский',
        address: 'пр-т. им. Ленина, 359',
        phone: '+7 (8443) 20-50-15',
        brend: 'Datsun',
    },
    {
        name: 'Datsun Арконт',
        label: `/uploads/logo-around/datsun.webp`,
        photo: `/uploads/offices/no_photo.png`,
        city: 'Волгоград',
        address: 'ул. Неждановой, 12',
        phone: '+7 (8442) 59-64-45',
        brend: 'Datsun',
    },
    {
        name: 'Opel Арконт',
        label: `/uploads/logo-around/opel.webp`,
        photo: `/uploads/offices/no_photo.png`,
        city: 'Волгоград',
        address: 'ул. Вильнюсская, 42/1',
        phone: '+7 (8442) 52-50-45',
        brend: 'Opel',
    },
    {
        name: 'Ford Арконт',
        label: `/uploads/logo-around/ford.webp`,
        photo: `/uploads/offices/no_photo.png`,
        city: 'Волгоград',
        address: 'ул. Вильнюсская, 42/1',
        phone: '+7 (8442) 59-70-50',
        brend: 'Ford',
    },
    {
        name: 'FAW Арконт',
        label: `/uploads/logo-around/faw.webp`,
        photo: `/uploads/offices/no_photo.png`,
        city: 'Волгоград',
        address: 'ул. Вильнюсская, 42',
        phone: '+7 (8442) 22-05-77',
        brend: 'Faw',
    }
]

async function startSeed() {
    await db.offices.createMany({
        data: dealerList
    })
}



startSeed()









