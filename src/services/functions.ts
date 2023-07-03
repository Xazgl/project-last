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


//Geely
import tugella from '/public/images/catalogPages/geely/models/tugella.webp';
import atlas_pro from '/public/images/catalogPages/geely/models/atlas_pro.webp';
import coolray from '/public/images/catalogPages/geely/models/coolray.webp';
import monjaro from '/public/images/catalogPages/geely/models/monjaro.webp';
//Chery
import tiggo4 from '/public/images/catalogPages/chery/models/tiggo4.png';
import tiggo7pro from '/public/images/catalogPages/chery/models/tiggo7pro.png';
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
//hundai
import tucson from '/public/images/catalogPages/hyundai/models/tucson.png';
import santaFE from '/public/images/catalogPages/hyundai/models/santafe.png';
//kia
import ceed from '/public/images/catalogPages/kia/models/ceed.png';
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




export function modelPhotoFind(ModelPhotoList, str) {
    const normalizeString = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

    const matchModel = ModelPhotoList.find(
        (model) => normalizeString(model.name) === normalizeString(str)
    );

    return matchModel ? matchModel.img : null;
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

    //chery
    {
        id: 5,
        name: 'Tiggo 4 Pro',
        img: `${tiggo4.src}`
    },
    {
        id: 6,
        name: 'Tiggo 8 Pro Max',
        img: `${tiggo8promax.src}`
    },
    {
        id: 7,
        name: 'Tiggo 7 Pro Max',
        img: `${tiggo7pro.src}`
    },
    {
        id: 8,
        name: 'Tiggo 8',
        img: `${tiggo8.src}`
    },

    {
        id: 9,
        name: 'Tiggo 8 Pro',
        img: `${tiggo8pro.src}`
    },
    {
        id: 10,
        name: 'Arrizo 8',
        img: `${arrizo8.src}`
    },
    //kaiyi
    {
        id: 11,
        name: 'E5',
        img: `${e5.src}`
    },
    //faw
    {
        id: 12,
        name: 'Bestune T77',
        img: `${t77.src}`
    },
    {
        id: 13,
        name: 'Bestune B70',
        img: `${b70.src}`
    },
    {
        id: 14,
        name: 'Bestune T55',
        img: `${t55.src}`
    },
    //exeed
    {
        id: 15,
        name: 'LX AWD',
        img: `${awd.src}`
    },
    {
        id: 16,
        name: 'TXL',
        img: `${txl.src}`
    },
    {
        id: 17,
        name: 'LX',
        img: `${lx.src}`
    },
    {
        id: 18,
        name: 'Bestune T55',
        img: `${t55.src}`
    },
    {
        id: 19,
        name: 'TXL 2.0',
        img: `${txl2.src}`
    },
    {
        id: 20,
        name: 'VX',
        img: `${vx.src}`
    },
    {
        id: 21,
        name: 'RX',
        img: `${rx.src}`
    },
    //УАЗ
    {
        id: 22,
        name: 'Patriot',
        img: `${patriot.src}`
    },
    {
        id: 23,
        name: 'Pickup',
        img: `${patriotPickup.src}`
    },
    {
        id: 24,
        name: '3741',
        img: `${sgr.src}`
    },
    {
        id: 25,
        name: 'Sgr',
        img: `${sgr.src}`
    },
    {
        id: 26,
        name: 'Profi',
        img: `${patriotProfi.src}`
    },
    {
        id: 27,
        name: 'Hunter',
        img: `${hunter.src}`
    },
    //hundai
    {
        id: 28,
        name: 'Santa Fe',
        img: `${santaFE.src}`
    },
    {
        id: 29,
        name: 'Tucson',
        img: `${tucson.src}`
    },
    //kia
    {
        id: 30,
        name: 'Ceed',
        img: `${ceed.src}`
    },
    //jetour
    {
        id: 31,
        name: 'X90 PLUS',
        img: `${x90.src}`
    },
    {
        id: 32,
        name: 'DASHING',
        img: `${dashing.src}`
    },
    //jetta
    {
        id: 33,
        name: 'VA3',
        img: `${va3.src}`
    },
    {
        id: 34,
        name: 'VS5',
        img: `${vs5.src}`
    },
    {
        id: 35,
        name: 'VS7',
        img: `${vs7.src}`
    },
    //jac
    {
        id: 36,
        name: 'J7',
        img: `${j7.src}`
    },
    {
        id: 37,
        name: 'JS6',
        img: `${js6.src}`
    },
    {
        id: 38,
        name: 'S3',
        img: `${s3.src}`
    },
    {
        id: 39,
        name: 'T6',
        img: `${t6.src}`
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
    { id: 'arkontSelect', card: selectCard, card2: selectCard2, title: 'Арконт селект', link: '/brands/arkont-select' },
    { id: 'baic', card: baicCard, card2: baicCard2, title: 'Baic' },
    { id: 'chery', card: cheryCard, card2: cheryCard2, title: 'Chery', link: '/brands/chery' },
    { id: 'exeed', card: exeedCard, card2: exeedCard2, title: 'EXEED', link: '/brands/exeed' },
    { id: 'faw', card: fawCard, card2: fawCard2, title: 'FAW', link: '/brands/faw' },
    { id: 'geely', card: geelyCard, card2: geelyCard2, title: 'Geely', link: '/brands/geely' },
    { id: 'hyundai', card: hyundaiCard, card2: hyundaiCard2, title: 'Hyundai', link: '/brands/hyundai' },
    { id: 'jac', card: jacCard, card2: jacCard2, title: 'JAC', link: '/brands/jac' },
    { id: 'jetour', card: jetourCard, card2: jetourCard2, title: 'Jetour', link: '/brands/jetour' },
    { id: 'jetta', card: jettaCard, card2: jettaCard2, title: 'Jetta', link: '/brands/jetta' },
    { id: 'kaiyi', card: kaiyiCard, card2: kaiyiCard2, title: 'KAIYI', link: '/brands/kaiyi' },
    { id: 'kia', card: kiaCard, card2: kiaCard2, title: 'KIA', link: '/brands/kia' },
    { id: 'uaz', card: uazCard, card2: uazCard2, title: 'УАЗ', link: '/brands/uaz' },
    { id: 'hisun', card: hisunCard, card2: hisunCard2, title: 'Hisun', link: 'hisun-arkont.ru' },
    { id: 'lovol', card: lovolCard, card2: lovolCard2, title: 'Lovol', link: 'lovol-arkont.ru' },
    { id: 'mitsubishi', card: mmcCard, card2: mmcCard2, title: 'Mitsubishi', link: 'service.mitsubishi-volgograd.ru' },
    { id: 'nissan', card: nissanCard, card2: nissanCard2, title: 'Nissan', link: 'nissan.arkont-service.ru' },
    { id: 'opel', card: opelCard, card2: opelCard2, title: 'Opel', link: 'opel.arkont-service.ru' },
    { id: 'peugeot', card: peugeotCard, card2: peugeotCard2, title: 'Peugeot', link: 'peugeot.arkont-service.ru' },
    { id: 'renault', card: renaultCard, card2: renaultCard2, title: 'Renault', link: 'renault.arkont-service.ru' },
    { id: 'subaru', card: subaruCard, card2: subaruCard2, title: 'Subaru', link: 'subaru.arkont-service.ru' },
    { id: 'suzuki', card: suzukiCard, card2: suzukiCard2, title: 'Suzuki', link: 'service.suzuki-volgograd.ru' },
    { id: 'volkswagen', card: vCard, card2: vCard2, title: 'Volkswagen', link: 'volkswagen.arkont-service.ru' },
    { id: 'jaguar', card: jaguarCard, card2: jaguarCard2, title: 'Jaguar', link: 'jlr.arkont-service.ru' },
    { id: 'landrover', card: lrCard, card2: lrCard2, title: 'Land Rover', link: 'jlr.arkont-service.ru' }
];



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