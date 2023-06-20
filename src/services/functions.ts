import suv from '/public/images/carBodyTyp/suv.svg'
import crossover from '/public/images/carBodyTyp/crossover.svg'
import hatchback from '/public/images/carBodyTyp/hatchback.svg'
import liftback from '/public/images/carBodyTyp/liftback.svg'
import minivan from '/public/images/carBodyTyp/minivan.svg'
import sedan from '/public/images/carBodyTyp/sedan.svg'
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
import geely from '/public/images/logo-around/geely.webp';
import all from '/public/images/logo-around/all.webp';



export function gearBoxName(x) {
    if (x === 'automatic') {
        return 'Автомат'
    }
    if (x === 'robotized') {
        return 'Робот'
    }
    if (x === 'variator') {
        return 'Вариатор'
    }
    if (x === 'manual') {
        return 'Механика'
    }
}

export function carBodyImgChange(x) {
    if (x === 'suv') {
        return crossover
    }
    if (x === 'sedan') {
        return sedan
    }
    if (x === 'hatchback') {
        return hatchback
    }
    if (x === 'liftback') {
        return liftback
    }
    if (x === 'minivan' || 'compactvan') {
        return minivan
    }

}

export function driverTypeName(x) {
    if (x === 'full_4wd') {
        return 'Полный'
    }
    if (x === 'front') {
        return 'Передний'
    }
}

export function engineTypeName(x) {
    if (x === 'diesel') {
        return 'дизель'
    }
    if (x === 'petrol') {
        return 'бензин'
    }
}

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
        name: 'Kia',
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
        name: 'Geely',
        img: `${geely.src}`
    },
    {
        id: 23,
        name: 'УАЗ',
        img: `${uaz.src}`
    },
    {
        id: 24,
        name: 'Уаз',
        img: `${uaz.src}`
    },
    {
        id: 25,
        name: 'UAZ',
        img: `${uaz.src}`
    },
    {
        id: 26,
        name: 'Любой',
        img: `${all.src}`
    },
    
]

export function logoFind(LogoList, str) {
    if (LogoList.find(brend => brend.name === str)) {
        const imgLogo = LogoList.find(brend => brend.name === str)?.img
        return imgLogo
    }
}

export function engineWithReplace(str){
    return str.toString().replace(/\).*/, ')')
}

export function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}



export function driverTypeStr(x) {
    if (x === 'front') {
        return "Передний привод"
    }
    if (x === 'full_4wd') {
        return "Полный привод"
    }
}
export function gearboxName(transmissions) {
    const gearboxMap = {
      automatic: 'Автомат',
      robotized: 'Робот',
      variator: 'Вариатор',
      manual: 'Механика'
    };
  
    if (Array.isArray(transmissions)) {
      return transmissions.map(transmission => gearboxMap[transmission] || '');
    } else {
      return gearboxMap[transmissions] || '';
    }
  }


export type Model = {
    id: number,
    name: string
    img: string,
  }


//Geely
import tugella from '/public/images/catalogPages/geely/models/tugella.webp';
import atlas_pro from '/public/images/catalogPages/geely/models/atlas_pro.webp';
import coolray from '/public/images/catalogPages/geely/models/coolray.webp';
import monjaro from '/public/images/catalogPages/geely/models/monjaro.webp';
import { useEffect, useState } from 'react'


export function modelPhotoFind(ModelPhotoList, str) {
    if (ModelPhotoList.find(model => model.name === str)) {
        const imgModel = ModelPhotoList.find(model => model.name === str)?.img
        return imgModel
    }
}



export const ModelPhotoList: Model[] = [
    {
        id: 1,
        name: 'Monjaro',
        img: `${monjaro.src}`
    },
    {
        id: 2,
        name: 'Coolray',
        img: `${coolray.src}`
    },
    {
        id: 3,
        name: 'Tugella',
        img: `${tugella.src}`
    },
    {
        id: 4,
        name: 'Atlas Pro',
        img: `${atlas_pro.src}`
    },
    
]



//geely
import geelyCard from '/public/images/catalogPages/all/cards/blue/geely.webp';
import geelyCard2 from '/public/images/catalogPages/all/cards/logo/geely.jpg';

//arkont-select
import selectCard from '/public/images/catalogPages/all/cards/blue/arkont_select.webp';
import selectCard2 from '/public/images/catalogPages/all/cards/logo/arkont_select.webp';
//arkont-baic
import baicCard from '/public/images/catalogPages/all/cards/blue/baic.webp';
import baicCard2 from '/public/images/catalogPages/all/cards/logo/baic.webp';
//chery
import cheryCard from '/public/images/catalogPages/all/cards/blue/chery.webp';
import cheryCard2 from '/public/images/catalogPages/all/cards/logo/chery.webp';
//exeed
import exeedCard from '/public/images/catalogPages/all/cards/blue/exeed.webp';
import exeedCard2 from '/public/images/catalogPages/all/cards/logo/exeed.webp';
//faw
import fawCard from '/public/images/catalogPages/all/cards/blue/faw.webp';
import fawCard2 from '/public/images/catalogPages/all/cards/logo/faw.webp';
//hyundai
import hyundaiCard from '/public/images/catalogPages/all/cards/blue/hyundai.webp';
import hyundaiCard2 from '/public/images/catalogPages/all/cards/logo/hyundai.webp';
//jac
import jacCard from '/public/images/catalogPages/all/cards/blue/jac.webp';
import jacCard2 from '/public/images/catalogPages/all/cards/logo/jac.webp';
//jetour
import jetourCard from '/public/images/catalogPages/all/cards/blue/jetour.webp';
import jetourCard2 from '/public/images/catalogPages/all/cards/logo/jetour.webp';
//jetta
import jettaCard from '/public/images/catalogPages/all/cards/blue/jetta.webp';
import jettaCard2 from '/public/images/catalogPages/all/cards/logo/jetta.webp';
//kaiyi
import kaiyiCard from '/public/images/catalogPages/all/cards/blue/kaiyi.webp';
import kaiyiCard2 from '/public/images/catalogPages/all/cards/logo/kaiyi.webp';
//kia
import kiaCard from '/public/images/catalogPages/all/cards/blue/kia.webp';
import kiaCard2 from '/public/images/catalogPages/all/cards/logo/kia.webp';
//uaz
import uazCard from '/public/images/catalogPages/all/cards/blue/uaz.webp';
import uazCard2 from '/public/images/catalogPages/all/cards/logo/uaz.webp';
//hisun
import hisunCard from '/public/images/catalogPages/all/cards/blue/hisun.webp';
import hisunCard2 from '/public/images/catalogPages/all/cards/logo/hisun.webp';
//lovol
import lovolCard from '/public/images/catalogPages/all/cards/blue/lovol.webp';
import lovolCard2 from '/public/images/catalogPages/all/cards/logo/lovol.webp';
//mmc
import mmcCard from '/public/images/catalogPages/all/cards/blue/mmc.webp';
import mmcCard2 from '/public/images/catalogPages/all/cards/logo/mmc.webp';
//nissan
import nissanCard from '/public/images/catalogPages/all/cards/blue/nissan.webp';
import nissanCard2 from '/public/images/catalogPages/all/cards/logo/nissan.webp';
//opel
import opelCard from '/public/images/catalogPages/all/cards/blue/opel.webp';
import opelCard2 from '/public/images/catalogPages/all/cards/logo/opel.webp';
//peugeot
import peugeotCard from '/public/images/catalogPages/all/cards/blue/peugeot.webp';
import peugeotCard2 from '/public/images/catalogPages/all/cards/logo/peugeot.webp';
//renault
import renaultCard from '/public/images/catalogPages/all/cards/blue/renault.webp';
import renaultCard2 from '/public/images/catalogPages/all/cards/logo/renault.webp';
//subaru
import subaruCard from '/public/images/catalogPages/all/cards/blue/subaru.webp';
import subaruCard2 from '/public/images/catalogPages/all/cards/logo/subaru.webp';
//suzuki
import suzukiCard from '/public/images/catalogPages/all/cards/blue/suzuki.webp';
import suzukiCard2 from '/public/images/catalogPages/all/cards/logo/suzuki.webp';
//volkswagen
import vCard from '/public/images/catalogPages/all/cards/blue/v.webp';
import vCard2 from '/public/images/catalogPages/all/cards/logo/v.webp';
//jaguar
import jaguarCard from '/public/images/catalogPages/all/cards/blue/jaguar.webp';
import jaguarCard2 from '/public/images/catalogPages/all/cards/logo/jaguar.webp';
//lr
import lrCard from '/public/images/catalogPages/all/cards/blue/lr.webp';
import lrCard2 from '/public/images/catalogPages/all/cards/logo/lr.webp';

export const brandsCards = [
    { id: 'arkontSelect', card: selectCard, card2: selectCard2, title: 'Арконт селект' },
    { id: 'baic', card: baicCard, card2: baicCard2, title: 'Baic' },
    { id: 'chery', card: cheryCard, card2: cheryCard2, title: 'Chery' },
    { id: 'exeed', card: exeedCard, card2: exeedCard2, title: 'EXEED' },
    { id: 'faw', card: fawCard, card2: fawCard2, title: 'FAW' },
    { id: 'geely', card: geelyCard, card2: geelyCard2, title: 'Geely', link: '/brands/geely' },
    { id: 'hyundai', card: hyundaiCard, card2: hyundaiCard2, title: 'Hyundai' },
    { id: 'jac', card: jacCard, card2: jacCard2, title: 'JAC' },
    { id: 'jetour', card: jetourCard, card2: jetourCard2, title: 'Jetour' },
    { id: 'jetta', card: jettaCard, card2: jettaCard2, title: 'Jetta' },
    { id: 'kaiyi', card: kaiyiCard, card2: kaiyiCard2, title: 'KAIYI' },
    { id: 'kia', card: kiaCard, card2: kiaCard2, title: 'KIA' },
    { id: 'uaz', card: uazCard, card2: uazCard2, title: 'УАЗ' },
    { id: 'hisun', card: hisunCard, card2: hisunCard2, title: 'Hisun' },
    { id: 'lovol', card: lovolCard, card2: lovolCard2, title: 'Lovol' },
    { id: 'mitsubishi', card: mmcCard, card2: mmcCard2, title: 'Mitsubishi' },
    { id: 'nissan', card: nissanCard, card2: nissanCard2, title: 'Nissan' },
    { id: 'opel', card: opelCard, card2: opelCard2, title: 'Opel' },
    { id: 'peugeot', card: peugeotCard, card2: peugeotCard2, title: 'Peugeot' },
    { id: 'renault', card: renaultCard, card2: renaultCard2, title: 'Renault' },
    { id: 'subaru', card: subaruCard, card2: subaruCard2, title: 'Subaru' },
    { id: 'suzuki', card: suzukiCard, card2: suzukiCard2, title: 'Suzuki' },
    { id: 'volkswagen', card: vCard, card2: vCard2, title: 'Volkswagen' },
    { id: 'jaguar', card: jaguarCard, card2: jaguarCard2, title: 'Jaguar' },
    { id: 'landrover', card: lrCard, card2: lrCard2, title: 'Land Rover' }
];