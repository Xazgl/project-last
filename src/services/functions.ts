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
        return 'Автомат'
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