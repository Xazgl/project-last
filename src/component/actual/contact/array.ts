// import chery from '/public/images/logo-around/chery.webp';
// import chevrolet from '/public/images/logo-around/chevrolet.webp';
// import datsun from '/public/images/logo-around/datsun.webp';
// import exeed from '/public/images/logo-around/exeed.webp';
// import faw from '/public/images/logo-around/faw.webp';
// import ford from '/public/images/logo-around/ford.webp';
// import hisun from '/public/images/logo-around/hisun.webp';
// import hyundai from '/public/images/logo-around/hyundai.webp';
// import jeep from '/public/images/logo-around/jeep.webp';
// import kia from '/public/images/logo-around/kia.webp';
// import landrover from '/public/images/logo-around/landrover.webp';
// import mithsubishi from '/public/images/logo-around/mithsubishi.webp';
// import nissan from '/public/images/logo-around/nissan.webp';
// import renault from '/public/images/logo-around/renault.webp';
// import subaru from '/public/images/logo-around/subaru.webp';
// import suzuki from '/public/images/logo-around/suzuki.webp';
// import uaz from '/public/images/logo-around/uaz.webp';
// import usedcars34 from '/public/images/logo-around/usedcars34.webp';
// import volkswagen from '/public/images/logo-around/volkswagen.webp';
// import opel from '/public/images/logo-around/opel.webp';
// import jaguar from '/public/images/logo-around/jaguar.webp';
// import peugeot from '/public/images/logo-around/peugeot.webp';
// import geely from '/public/images/logo-around/usedCars/gee.png';
// import lovol from '/public/images/logo-around/usedCars/lov.png';
// import usedCars from '/public/images/logo-around/usedCars/usedCars.png';


// //фото дц
// import cheryOffice from '/public/images/offices/chery.jpeg';
// import exeedOffice from '/public/images/offices/exeed.jpeg';
// import hyundaiOffice from '/public/images/offices/hyundai.jpeg';
// import kiaOffice from '/public/images/offices/kia.jpeg';
// import mitsubishiOffice from '/public/images/offices/mitsu.jpeg';
// import nissanOffice from '/public/images/offices/nissan.jpeg';
// import withoutPhotoOffice from '/public/images/offices/no_photo.png';
// import uazOffice from '/public/images/offices/uaz.jpeg';
// import usedVlzOffice from '/public/images/offices/used-vlz.jpeg';
// import usedZemlOffice from '/public/images/offices/used-zeml.jpeg';
// import volkswagenOffice from '/public/images/offices/volk.jpeg';
// import renaultOffice from '/public/images/offices/renault.jpeg';




export type OfficeDealer = {
    id: number,
    name: string,
    label: string,
    photo: string,
    city: 'Волжский' | 'Волгоград'
    address: string,
    phone: string,
    brend: string,
}

export const dealerList: OfficeDealer[] = [
    {
        id: 0,
        name: 'Renault Арконт Волгоград',
        label: `${renault.src}`,
        photo: `${renaultOffice.src}`,
        city: 'Волгоград',
        address: 'ул. Вильнюсская, 42/2',
        phone: '+7 (8442) 74-65-81',
        brend: 'Renault'
    },
    {
        id: 1,
        name: 'KIA Арконт',
        label: `${kia.src}`,
        photo: `${kiaOffice.src}`,
        city: 'Волгоград',
        address: 'ул. Вильнюсская, 42/2',
        phone: '+7 (8442) 74-65-82',
        brend: 'KIA',
    },
    {
        id: 2,
        name: 'Volkswagen Арконт на Монолите',
        label: `${volkswagen.src}`,
        photo: `${volkswagenOffice.src}`,
        city: 'Волгоград',
        address: 'пр-т Ленина, 113Д',
        phone: '+7 (8442) 74-65-75',
        brend: 'Volkswagen',
    },
    {
        id: 3,
        name: 'Nissan Арконт на Еременко 7Б',
        label: `${nissan.src}`,
        photo: `${nissanOffice.src}`,
        city: 'Волгоград',
        address: 'ул. Ерёменко, 7Б',
        phone: '+7 (8442) 74-65-72',
        brend: 'Nissan',
    },
    {
        id: 4,
        name: 'Mitsubishi Арконт на Землячке',
        label: `${mithsubishi.src}`,
        photo: `${mitsubishiOffice.src}`,
        city: 'Волгоград',
        address: 'ул. Землячки, 19Г',
        phone: '+7 (8442) 74-65-42',
        brend: 'Mitsubishi',
    },
    {
        id: 5,
        name: 'Hyundai Арконт',
        label: `${hyundai.src}`,
        photo: `${hyundaiOffice.src}`,
        city: 'Волжский',
        address: 'пр-т Ленина, 359',
        phone: '+7 (8443) 44-51-07',
        brend: 'Hyundai',
    },
    {
        id: 6,
        name: 'Арконт с пробегом на Землячке',
        label: `${usedCars.src}`,
        photo: `${usedZemlOffice.src}`,
        city: 'Волгоград',
        address: 'ул. Землячки, 25',
        phone: '+7 (8442) 74-65-83',
        brend: 'C пробегом',
    },
    {
        id: 7,
        name: 'Арконт с пробегом в Волжском',
        label: `${usedCars.src}`,
        photo: `${usedVlzOffice.src}`,
        city: 'Волжский',
        address: 'пр-т Ленина, 359',
        phone: '+7 (8443) 44-51-08',
        brend: 'C пробегом',

    },
    {
        id: 8,
        name: 'УАЗ Арконт',
        label: `${uaz.src}`,
        photo: `${usedVlzOffice.src}`,
        city: 'Волгоград',
        address: 'ул. Вильнюсская, 42/1',
        phone: '+7 (8442) 52-50-64',
        brend: 'УАЗ',
    },
    {
        id: 9,
        name: 'Chery Арконт',
        label: `${chery.src}`,
        photo: `${cheryOffice.src}`,
        city: 'Волгоград',
        address: 'ул. Землячки 19Г',
        phone: '+7 (8442) 20-21-73',
        brend: 'Chery',
    },
    {
        id: 10,
        name: 'EXEED Арконт',
        label: `${exeed.src}`,
        photo: `${exeedOffice.src}`,
        city: 'Волгоград',
        address: 'г. Волгоград, ул. Землячки, 25',
        phone: '+7 (8442) 20-21-73',
        brend: 'EXEED',
    },
    {
        id: 11,
        name: 'Официальный сервис Datsun «Арконт»',
        label: `${datsun.src}`,
        photo: `${withoutPhotoOffice.src}`,
        city: 'Волгоград',
        address: 'ул. Ерёменко, 7Б',
        phone: '+7 (8442) 59-97-83',
        brend: 'Datsun',
    },
    {
        id: 12,
        name: 'Официальный сервис Datsun «Арконт» (Волжский)',
        label: `${datsun.src}`,
        photo: `${withoutPhotoOffice.src}`,
        city: 'Волжский',
        address: 'пр-т. им. Ленина, 359',
        phone: '+7 (8443) 20-50-15',
        brend: 'Datsun',
    },
    {
        id: 13,
        name: 'Официальный сервис Datsun «Арконт»',
        label: `${datsun.src}`,
        photo: `${withoutPhotoOffice.src}`,
        city: 'Волгоград',
        address: 'ул. Неждановой, 12',
        phone: '+7 (8442) 59-64-45',
        brend: 'Datsun',
    },
    {
        id: 14,
        name: 'Официальный сервис Opel «Арконт»',
        label: `${opel.src}`,
        photo: `${withoutPhotoOffice.src}`,
        city: 'Волгоград',
        address: 'ул. Вильнюсская, 42/1',
        phone: '+7 (8442) 52-50-45',
        brend: 'Opel',
    },
    {
        id: 15,
        name: 'Официальный сервис Ford «Арконт»',
        label: `${ford.src}`,
        photo: `${withoutPhotoOffice.src}`,
        city: 'Волгоград',
        address: 'ул. Вильнюсская, 42/1',
        phone: '+7 (8442) 59-70-50',
        brend: 'Ford',
    },
    {
        id: 16,
        name: 'FAW Арконт',
        label: `${faw.src}`,
        photo: `${withoutPhotoOffice.src}`,
        city: 'Волгоград',
        address: 'ул. Вильнюсская, 42',
        phone: '+7 (8442) 22-05-77',
        brend: 'Faw',
    },
    {
        id: 17,
        name: 'Geely Арконт',
        label: `${geely.src}`,
        photo: `${withoutPhotoOffice.src}`,
        city: 'Волгоград',
        address: 'ул.Нежданова, 12',
        phone: '+7 (8442) 20-49-73',
        brend: 'Geely',
    },
    {
        id: 18,
        name: 'HISUN Арконт',
        label: `${hisun.src}`,
        photo: `${withoutPhotoOffice.src}`,
        city: 'Волгоград',
        address: 'пр-т им. В.И. Ленина, 113Д',
        phone: '+7 (8442) 20-49-74',
        brend: 'HISUN',
    },
    {
        id: 19,
        name: 'LOVOL Арконт',
        label: `${lovol.src}`,
        photo: `${withoutPhotoOffice.src}`,
        city: 'Волгоград',
        address: 'ул. Историческая, д.170',
        phone: '+7 (8442) 20-49-74',
        brend: 'LOVOL',
    },
]