//new car logo
import chery from '/public/images/logo-around/chery.webp';
import chevrolet from '/public/images/logo-around/chevrolet.webp';
import datsun from '/public/images/logo-around/datsun.webp';
import exeed from '/public/images/logo-around/exeed.webp';
import faw from '/public/images/logo-around/faw.webp';
import ford from '/public/images/logo-around/ford.webp';
import hisun from '/public/images/logo-around/hisun.webp';
import hyundai from '/public/images/logo-around/hyundai.webp';
import jeep from '/public/images/logo-around/jeep.webp';
import kia from '/public/images/logo-around/kia.webp';
import landrover from '/public/images/logo-around/landrover.webp';
import mithsubishi from '/public/images/logo-around/mithsubishi.webp';
import nissan from '/public/images/logo-around/nissan.webp';
import renault from '/public/images/logo-around/renault.webp';
import subaru from '/public/images/logo-around/subaru.webp';
import suzuki from '/public/images/logo-around/suzuki.webp';
import uaz from '/public/images/logo-around/uaz.webp';
import usedcars34 from '/public/images/logo-around/usedcars34.webp';
import volkswagen from '/public/images/logo-around/volkswagen.webp';
import opel from '/public/images/logo-around/opel.webp';
import jaguar from '/public/images/logo-around/jaguar.webp';
import lovol from '/public/images/logo-around/lovol.webp';
import peugeot from '/public/images/logo-around/peugeot.webp';
//used car logo
import audi from '/public/images/logo-around/usedCars/au.png';
import bmw from '/public/images/logo-around/usedCars/bm.png';
import cadillac from '/public/images/logo-around/usedCars/ca.png';
import changan from '/public/images/logo-around/usedCars/cha.png';
import chrysler from '/public/images/logo-around/usedCars/chr.png';
import citroen from '/public/images/logo-around/usedCars/ci.png';
import daewoo from '/public/images/logo-around/usedCars/de.png';
import greatWall from '/public/images/logo-around/usedCars/gw.png';
import honda from '/public/images/logo-around/usedCars/ho.png';
import hower from '/public/images/logo-around/usedCars/hov.png';
import infinity from '/public/images/logo-around/usedCars/in.png';
import lada from '/public/images/logo-around/usedCars/lada.png';
import lexus from '/public/images/logo-around/usedCars/le.png';
import lifan from '/public/images/logo-around/usedCars/li.png';
import mazda from '/public/images/logo-around/usedCars/ma.png';
import mercedes from '/public/images/logo-around/usedCars/me.png';
import porsche from '/public/images/logo-around/usedCars/po.png';
import skoda from '/public/images/logo-around/usedCars/sh.png';
import sunYong from '/public/images/logo-around/usedCars/sun.png';
import toyota from '/public/images/logo-around/usedCars/to.png';



export type LogoArr = {
    id: number,
    name: string
    img: string,
}


export const LogoList: LogoArr[] = [
    {
        id: 1,
        name: 'Chery',
        img: `${chery.src}`
    },
    {
        id: 2,
        name: 'Chevrolet',
        img: `${chevrolet.src}`
    },
    {
        id: 3,
        name: 'Datsun',
        img: `${datsun.src}`
    },
    {
        id: 4,
        name: 'EXEED',
        img: `${exeed.src}`
    },
    {
        id: 5,
        name: 'FAW',
        img: `${faw.src}`
    },
    {
        id: 6,
        name: 'Ford',
        img: `${ford.src}`
    },
    {
        id: 7,
        name: 'Hisun',
        img: `${hisun.src}`
    },
    {
        id: 7,
        name: 'Hyundai',
        img: `${hyundai.src}`
    },
    {
        id: 8,
        name: 'Jeep',
        img: `${jeep.src}`
    },
    {
        id: 9,
        name: 'KIA',
        img: `${kia.src}`
    },
    {
        id: 10,
        name: 'Land Rover',
        img: `${landrover.src}`
    },
    {
        id: 11,
        name: 'Mitsubishi',
        img: `${mithsubishi.src}`
    },
    {
        id: 12,
        name: 'Nissan',
        img: `${nissan.src}`
    },
    {
        id: 13,
        name: 'Renault',
        img: `${renault.src}`
    },
    {
        id: 14,
        name: 'Subaru',
        img: `${subaru.src}`
    },
    {
        id: 15,
        name: 'Suzuki',
        img: `${suzuki.src}`
    },
    {
        id: 16,
        name: 'AUC',
        img: `${usedcars34.src}`
    },
    {
        id: 17,
        name: 'Volkswagen',
        img: `${volkswagen.src}`
    },
    {
        id: 18,
        name: 'Opel',
        img: `${opel.src}`
    },
    {
        id: 19,
        name: 'Jaguar',
        img: `${jaguar.src}`
    },
    {
        id: 20,
        name: 'LOVOL',
        img: `${lovol.src}`
    },
    {
        id: 21,
        name: 'Peugeot',
        img: `${peugeot.src}`
    },
    {
        id: 22,
        name: 'Audi',
        img: `${audi.src}`
    },
    {
        id: 23,
        name: 'BMW',
        img: `${bmw.src}`
    },
    {
        id: 24,
        name: 'Cadillac',
        img: `${cadillac.src}`
    },
    {
        id: 25,
        name: 'Changan',
        img: `${changan.src}`
    },
    {
        id: 26,
        name: 'Chrysler',
        img: `${chrysler.src}`
    },
    {
        id: 27,
        name: 'Citroen',
        img: `${citroen.src}`
    },
    {
        id: 28,
        name: 'Daewoo',
        img: `${daewoo.src}`
    },
    {
        id: 29,
        name: 'Great Wall',
        img: `${greatWall.src}`
    },
    {
        id: 30,
        name: 'Honda',
        img: `${honda.src}`
    },
    {
        id: 31,
        name: 'Hover',
        img: `${hower.src}`
    },
    {
        id: 32,
        name: 'Infinity',
        img: `${infinity.src}`
    },
    {
        id: 33,
        name: 'ВАЗ (Lada)',
        img: `${lada.src}`
    },
    {
        id: 34,
        name: 'Lexus',
        img: `${lexus.src}`
    },
    {
        id: 35,
        name: 'Lifan',
        img: `${lifan.src}`
    },
    {
        id: 36,
        name: 'Mazda',
        img: `${mazda.src}`
    },
    {
        id: 37,
        name: 'Mercedes-Benz',
        img: `${mercedes.src}`
    },
    {
        id: 38,
        name: 'Porsche',
        img: `${porsche.src}`
    },
    {
        id: 39,
        name: 'Skoda',
        img: `${skoda.src}`
    },
    {
        id: 40,
        name: 'SsangYong',
        img: `${sunYong.src}`
    },
    {
        id: 41,
        name: 'Toyota',
        img: `${toyota.src}`
    },
]


export function logoFind(LogoList, str) {
    if (!str) return str
    else {
        if (LogoList.find(brend => brend.name === str)) {
            const imgLogo = LogoList.find(brend => brend.name === str)?.img
            return imgLogo
        }
    }
}
