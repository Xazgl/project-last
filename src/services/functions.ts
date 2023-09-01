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
import kaiyi from '/public/images/logo-around/kaiyi.webp';
import jetour from '/public/images/logo-around/jetour.webp';
import jetta from '/public/images/logo-around/jetta.webp';
import jac from '/public/images/logo-around/jac.webp';
import baic from '/public/images/logo-around/baic.webp';
import all from '/public/images/logo-around/all.webp';
import arkontSelect from '/public/images/logo-around/usedCars/arkont_select.png';



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
        return 'Дизель'
    }
    if (x === 'petrol') {
        return 'Бензин'
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
        name: 'АРКОНТ СЕЛЕКТ',
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
        name: 'АРКОНТ СЕЛЕКТ',
        img: `${arkontSelect.src}`
    },
    {
        id: 27,
        name: 'Kaiyi',
        img: `${kaiyi.src}`
    },
    {
        id: 28,
        name: 'Любой',
        img: `${arkontSelect.src}`
    },
    {
        id: 29,
        name: 'Jetour',
        img: `${jetour.src}`
    },
    {
        id: 30,
        name: 'Jetta',
        img: `${jetta.src}`
    },
    {
        id: 31,
        name: 'JAC',
        img: `${jac.src}`
    },
    {
        id: 32,
        name: 'BAIC',
        img: `${baic.src}`
    },

]

export function logoFind(LogoList, str) {
    if (LogoList.find(brend => brend.name === str)) {
        const imgLogo = LogoList.find(brend => brend.name === str)?.img
        return imgLogo
    }
}

export function engineWithReplace(str) {
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

type Brands = {
    id: number,
    brand: string,
    models: Model[]
}


//Geely
import tugella from '/public/images/catalogPages/geely/models/tugella.webp';
import atlas_pro from '/public/images/catalogPages/geely/models/atlas_pro.webp';
import coolray from '/public/images/catalogPages/geely/models/coolray.webp';
import monjaro from '/public/images/catalogPages/geely/models/monjaro.webp';
//Chery
import tiggo4 from '/public/images/catalogPages/chery/models/tiggo4.png';
import tiggo7pro from '/public/images/catalogPages/chery/models/tiggo7pro.png';
import tiggo7ProMax from '/public/images/catalogPages/chery/models/tiggo7pro.png';
import tiggo8 from '/public/images/catalogPages/chery/models/tiggo8.png';
import tiggo8pro from '/public/images/catalogPages/chery/models/tiggo8pro.png';
import tiggo8promax from '/public/images/catalogPages/chery/models/tiggo8promax.webp';
import arrizo8 from '/public/images/catalogPages/chery/models/arrizo8.webp';
//Kaiyi
import e5 from '/public/images/catalogPages/kaiyi/models/e5.webp';
//FAW
import b70 from '/public/images/catalogPages/faw/models/b70.png';
import t55 from '/public/images/catalogPages/faw/models/t55.png';
import t77 from '/public/images/catalogPages/faw/models/t77.png';
//EXEED
import awd from '/public/images/catalogPages/exeed/models/awd.png';
import lx from '/public/images/catalogPages/exeed/models/lx.png';
import txl from '/public/images/catalogPages/exeed/models/txl.png';
import txl2 from '/public/images/catalogPages/exeed/models/txl2.0.png';
import vx from '/public/images/catalogPages/exeed/models/vx.webp';
import rx from '/public/images/catalogPages/exeed/models/rx.webp';
//УАЗ
import hunter from '/public/images/catalogPages/uaz/models/hunter.webp';
import patriot from '/public/images/catalogPages/uaz/models/patriot.png';
import sgr from '/public/images/catalogPages/uaz/models/sgr.webp';
import sgrFarmer from '/public/images/catalogPages/uaz/models/cgr-farmer.webp';
import sgrBort from '/public/images/catalogPages/uaz/models/cgr-bort.webp';
import patriotPickup from '/public/images/catalogPages/uaz/models/patriot-pickup.webp';
import patriotProfi from '/public/images/catalogPages/uaz/models/patriot-profi.webp';
import ptriotProfiReferedj from '/public/images/catalogPages/uaz/models/ptriot-profi-referedj.webp';
import yaz2360 from '/public/images/catalogPages/uaz/models/2360.webp';
import yaz3303 from '/public/images/catalogPages/uaz/models/3303.webp';
import yaz3909 from '/public/images/catalogPages/uaz/models/3909.webp';
//hundai
import tucson from '/public/images/catalogPages/hyundai/models/tucson.png';
import santaFE from '/public/images/catalogPages/hyundai/models/santafe.png';
//kia
import ceed from '/public/images/catalogPages/kia/models/ceed.png';
import cerato from '/public/images/catalogPages/kia/models/cerato.png';
import soul from '/public/images/catalogPages/kia/models/soul.png';
import seltos from '/public/images/catalogPages/kia/models/seltos.png';
//jetour
import dashing from '/public/images/catalogPages/jetour/models/dashing.webp';
import x90 from '/public/images/catalogPages/jetour/models/x90.webp';
//jetta
import va3 from '/public/images/catalogPages/jetta/models/va3.webp';
import vs5 from '/public/images/catalogPages/jetta/models/vs5.webp';
import vs7 from '/public/images/catalogPages/jetta/models/vs7.webp';
//jac
import j7 from '/public/images/catalogPages/jac/models/j7.webp';
import js6 from '/public/images/catalogPages/jac/models/js6.webp';
import s3 from '/public/images/catalogPages/jac/models/s3.webp';
import t6 from '/public/images/catalogPages/jac/models/t6.webp';
import t8Pro from '/public/images/catalogPages/jac/models/t8.webp';
//volkswagen
import taos from '/public/images/catalogPages/volk/models/taos.png';
//baic
import bj40 from '/public/images/catalogPages/baic/models/bj40.webp';
import u5 from '/public/images/catalogPages/baic/models/u5.webp';
import x35 from '/public/images/catalogPages/baic/models/x35.webp';


export function modelPhotoFind(ModelPhotoList, modelName) {
    // Приведите входное значение modelName к нижнему регистру и удалите лишние символы
    const normalizedModel = modelName?.toLowerCase()?.replace(/[^a-z0-9]/g, '');
    // Пройдемся по каждому бренду в ModelPhotoList
    for (const brand of ModelPhotoList) {
        // Ищем модель внутри бренда
        const model = brand.models.find((model) =>
            model.name.toLowerCase()?.replace(/[^a-z0-9]/g, '') === normalizedModel
        );
        //Если модель найдена, вернем ее изображение
        if (model) {
            return model.img;
        }
    }
    return null;
}


export const ModelPhotoList: Brands[] = [
    //Geely
    {
        id: 1,
        brand: 'geely',
        models: [
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
            }
        ]
    },
    //Chery
    {
        id: 2,
        brand: 'chery',
        models: [
            {
                id: 1,
                name: 'Tiggo 4 Pro',
                img: `${tiggo4.src}`
            },
            {
                id: 2,
                name: 'Tiggo 8 Pro Max',
                img: `${tiggo8promax.src}`
            },
            {
                id: 3,
                name: 'Tiggo 7 Pro',
                img: `${tiggo7ProMax.src}`
            },
            {
                id: 4,
                name: 'Tiggo 7 Pro Max',
                img: `${tiggo7pro.src}`
            },
            {
                id: 5,
                name: 'Tiggo 8',
                img: `${tiggo8.src}`
            },

            {
                id: 6,
                name: 'Tiggo 8 Pro',
                img: `${tiggo8pro.src}`
            },
            {
                id: 7,
                name: 'Arrizo 8',
                img: `${arrizo8.src}`
            },
        ]
    },
    //Kaiyi
    {
        id: 3,
        brand: 'kaiyi',
        models: [
            {
                id: 1,
                name: 'E5',
                img: `${e5.src}`
            },
        ]
    },
    //faw
    {
        id: 4,
        brand: 'faw',
        models: [
            //faw
            {
                id: 1,
                name: 'Bestune T77',
                img: `${t77.src}`
            },
            {
                id: 2,
                name: 'Bestune B70',
                img: `${b70.src}`
            },
            {
                id: 3,
                name: 'Bestune T55',
                img: `${t55.src}`
            },
            {
                id: 4,
                name: 'Bestune T55',
                img: `${t55.src}`
            },
        ]
    },
    //exeed
    {
        id: 5,
        brand: 'exeed',
        models: [
            {
                id: 1,
                name: 'LX AWD',
                img: `${awd.src}`
            },
            {
                id: 2,
                name: 'TXL',
                img: `${txl.src}`
            },
            {
                id: 3,
                name: 'LX',
                img: `${lx.src}`
            },
            {
                id: 4,
                name: 'TXL 2.0',
                img: `${txl2.src}`
            },
            {
                id: 5,
                name: 'VX',
                img: `${vx.src}`
            },
            {
                id: 6,
                name: 'RX',
                img: `${rx.src}`
            },
        ]
    },
    //УАЗ
    {
        id: 6,
        brand: 'уаз',
        models: [
            {
                id: 1,
                name: 'Patriot',
                img: `${patriot.src}`
            },
            {
                id: 2,
                name: 'Pickup',
                img: `${patriotPickup.src}`
            },
            {
                id: 3,
                name: '3741',
                img: `${sgr.src}`
            },
            {
                id: 4,
                name: 'Sgr',
                img: `${sgr.src}`
            },
            {
                id: 5,
                name: 'Profi',
                img: `${patriotProfi.src}`
            },
            {
                id: 6,
                name: 'Hunter',
                img: `${hunter.src}`
            },
            {
                id: 7,
                name: 'CГР',
                img: `${sgr.src}`
            },
            {
                id: 8,
                name: 'Профи',
                img: `${patriotProfi.src}`
            },
            {
                id: 9,
                name: '2360',
                img: `${yaz2360.src}`
            },
            {
                id: 10,
                name: '3303',
                img: `${yaz3303.src}`
            },
            {
                id: 11,
                name: '3909',
                img: `${yaz3909.src}`
            },
            {
                id: 12,
                name: '3962',
                img: `${sgr.src}`
            },
            {
                id: 13,
                name: '452',
                img: `${sgr.src}`
            }
        ]
    },
    //hundai
    {
        id: 7,
        brand: 'hundai',
        models: [
            {
                id: 1,
                name: 'Santa Fe',
                img: `${santaFE.src}`
            },
            {
                id: 2,
                name: 'Tucson',
                img: `${tucson.src}`
            }
        ]
    },
    //kia
    {
        id: 8,
        brand: 'kia',
        models: [
            {
                id: 1,
                name: 'Ceed',
                img: `${ceed.src}`
            },
            {
                id: 2,
                name: 'Cerato',
                img: `${cerato.src}`
            },
            {
                id: 3,
                name: 'Soul',
                img: `${soul.src}`
            },
            {
                id: 4,
                name: 'Seltos',
                img: `${seltos.src}`
            },
        ]
    },
    //jetour
    {
        id: 9,
        brand: 'jetour',
        models: [
            {
                id: 1,
                name: 'X90 PLUS',
                img: `${x90.src}`
            },
            {
                id: 2,
                name: 'DASHING',
                img: `${dashing.src}`
            }
        ]
    },
    //jetta
    {
        id: 10,
        brand: 'jetta',
        models: [
            {
                id: 1,
                name: 'VA3',
                img: `${va3.src}`
            },
            {
                id: 2,
                name: 'VS5',
                img: `${vs5.src}`
            },
            {
                id: 3,
                name: 'VS7',
                img: `${vs7.src}`
            }
        ]
    },
    //jac
    {
        id: 11,
        brand: 'jac',
        models: [
            {
                id: 44,
                name: 'J7',
                img: `${j7.src}`
            },
            {
                id: 45,
                name: 'JS6',
                img: `${js6.src}`
            },
            {
                id: 46,
                name: 'S3',
                img: `${s3.src}`
            },
            {
                id: 47,
                name: 'T6',
                img: `${t6.src}`
            },
            {
                id: 52,
                name: 'T8 Pro',
                img: `${t8Pro.src}`
            }
        ]
    },
    //volk
    {
        id: 12,
        brand: 'volkswagen',
        models: [
            {
                id: 48,
                name: 'Taos',
                img: `${taos.src}`
            }
        ]
    },
    //baic
    {
        id: 13,
        brand: 'baic',
        models: [
            {
                id: 49,
                name: 'BJ40',
                img: `${bj40.src}`
            },
            {
                id: 50,
                name: 'U5 Plus',
                img: `${u5.src}`
            },
            {
                id: 51,
                name: 'X35',
                img: `${x35.src}`
            }
        ]
    }
]

// export function modelPhotoFind(ModelPhotoList, str) {
//     const normalizeString = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

//     const matchModel = ModelPhotoList.find(
//         (model) => normalizeString(model.name) === normalizeString(str)
//     );

//     return matchModel ? matchModel.img : null;
// }

// export function modelPhotoFind(modelList: { [brand: string]: Model[] }, brand: string, modelName: string) {
//     const normalizeString = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

//     const brandModels = modelList[normalizeString(brand)];

//     if (brandModels) {
//       const matchModel = brandModels.find(
//         (model) => normalizeString(model.name) === normalizeString(modelName)
//       );

//       return matchModel ? matchModel.img : null;
//     }

//     return null;
//   }




// export const ModelPhotoList: Model[] = [
//     {
//         id: 1,
//         name: 'Monjaro',
//         img: `${monjaro.src}`
//     },
//     {
//         id: 2,
//         name: 'Coolray',
//         img: `${coolray.src}`
//     },
//     {
//         id: 3,
//         name: 'Tugella',
//         img: `${tugella.src}`
//     },
//     {
//         id: 4,
//         name: 'Atlas Pro',
//         img: `${atlas_pro.src}`
//     },

//     //chery
//     {
//         id: 5,
//         name: 'Tiggo 4 Pro',
//         img: `${tiggo4.src}`
//     },
//     {
//         id: 6,
//         name: 'Tiggo 8 Pro Max',
//         img: `${tiggo8promax.src}`
//     },
//     {
//         id: 7,
//         name: 'Tiggo 7 Pro',
//         img: `${tiggo7ProMax.src}`
//     },
//     {
//         id: 8,
//         name: 'Tiggo 7 Pro Max',
//         img: `${tiggo7pro.src}`
//     },
//     {
//         id: 9,
//         name: 'Tiggo 8',
//         img: `${tiggo8.src}`
//     },

//     {
//         id: 10,
//         name: 'Tiggo 8 Pro',
//         img: `${tiggo8pro.src}`
//     },
//     {
//         id: 11,
//         name: 'Arrizo 8',
//         img: `${arrizo8.src}`
//     },
//     //kaiyi
//     {
//         id: 12,
//         name: 'E5',
//         img: `${e5.src}`
//     },
//     //faw
//     {
//         id: 13,
//         name: 'Bestune T77',
//         img: `${t77.src}`
//     },
//     {
//         id: 14,
//         name: 'Bestune B70',
//         img: `${b70.src}`
//     },
//     {
//         id: 15,
//         name: 'Bestune T55',
//         img: `${t55.src}`
//     },
//     //exeed
//     {
//         id: 16,
//         name: 'LX AWD',
//         img: `${awd.src}`
//     },
//     {
//         id: 17,
//         name: 'TXL',
//         img: `${txl.src}`
//     },
//     {
//         id: 18,
//         name: 'LX',
//         img: `${lx.src}`
//     },
//     {
//         id: 19,
//         name: 'Bestune T55',
//         img: `${t55.src}`
//     },
//     {
//         id: 20,
//         name: 'TXL 2.0',
//         img: `${txl2.src}`
//     },
//     {
//         id: 21,
//         name: 'VX',
//         img: `${vx.src}`
//     },
//     {
//         id: 22,
//         name: 'RX',
//         img: `${rx.src}`
//     },
//     //УАЗ
//     {
//         id: 23,
//         name: 'Patriot',
//         img: `${patriot.src}`
//     },
//     {
//         id: 24,
//         name: 'Pickup',
//         img: `${patriotPickup.src}`
//     },
//     {
//         id: 25,
//         name: '3741',
//         img: `${sgr.src}`
//     },
//     {
//         id: 26,
//         name: 'Sgr',
//         img: `${sgr.src}`
//     },
//     {
//         id: 27,
//         name: 'Profi',
//         img: `${patriotProfi.src}`
//     },
//     {
//         id: 28,
//         name: 'Hunter',
//         img: `${hunter.src}`
//     },
//     {
//         id: 29,
//         name: 'CГР',
//         img: `${sgr.src}`
//     },
//     {
//         id: 30,
//         name: 'Профи',
//         img: `${patriotProfi.src}`
//     },
//     {
//         id: 31,
//         name: '2360',
//         img: `${yaz2360.src}`
//     },
//     {
//         id: 32,
//         name: '3303',
//         img: `${yaz3303.src}`
//     },
//     {
//         id: 33,
//         name: '3909',
//         img: `${yaz3909.src}`
//     },
//     {
//         id: 34,
//         name: '3962',
//         img: `${sgr.src}`
//     },
//     {
//         id: 35,
//         name: '452',
//         img: `${sgr.src}`
//     },
//     //hundai
//     {
//         id: 36,
//         name: 'Santa Fe',
//         img: `${santaFE.src}`
//     },
//     {
//         id: 37,
//         name: 'Tucson',
//         img: `${tucson.src}`
//     },
//     //kia
//     {
//         id: 38,
//         name: 'Ceed',
//         img: `${ceed.src}`
//     },
//     //jetour
//     {
//         id: 39,
//         name: 'X90 PLUS',
//         img: `${x90.src}`
//     },
//     {
//         id: 40,
//         name: 'DASHING',
//         img: `${dashing.src}`
//     },
//     //jetta
//     {
//         id: 41,
//         name: 'VA3',
//         img: `${va3.src}`
//     },
//     {
//         id: 42,
//         name: 'VS5',
//         img: `${vs5.src}`
//     },
//     {
//         id: 43,
//         name: 'VS7',
//         img: `${vs7.src}`
//     },
//     //jac
//     {
//         id: 44,
//         name: 'J7',
//         img: `${j7.src}`
//     },
//     {
//         id: 45,
//         name: 'JS6',
//         img: `${js6.src}`
//     },
//     {
//         id: 46,
//         name: 'S3',
//         img: `${s3.src}`
//     },
//     {
//         id: 47,
//         name: 'T6',
//         img: `${t6.src}`
//     },
//     {
//         id: 52,
//         name: 'T8 Pro',
//         img: `${t8Pro.src}`
//     },
//     //volk
//     {
//         id: 48,
//         name: 'Taos',
//         img: `${taos.src}`
//     },
//     //baic
//     {
//         id: 49,
//         name: 'BJ40',
//         img: `${bj40.src}`
//     },
//     {
//         id: 50,
//         name: 'U5 Plus',
//         img: `${u5.src}`
//     },
//     {
//         id: 51,
//         name: 'X35',
//         img: `${x35.src}`
//     },

// ]


export function matchesEngine(engine) {
    let arr = engine.toString().split(/\s*,\s*/)
    return arr[2].replace(/\s/g, '');
}

export function gearboxType(gearbox) {
    if (gearbox === 'Механическая') {
        return 'MT'
    } else {
        return 'АТ'

    }
}


export function engineArrStr(engine) {
    let arr = engine.toString().split(/\s*,\s*/)
    return arr[1]
}