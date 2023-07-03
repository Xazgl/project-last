
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { AllCarDto, AllUsedCarDto } from '../../@types/dto'
import db from '../../prisma'
import BarMenu from '../../src/component/BarMenu'
import { Modal } from '../../src/component/Modal'
import { ModalFavorite } from '../../src/component/ModalFavorite'
import { TradeinModal } from '../../src/component/ModalTwo'
import { GeelyImgDestop } from '../../src/component/actual/brendsPages/geely/banner/GeelyImg'
import { MenuBarNew } from '../../src/component/actual/menuNew/Menu'
import { FooterMainNew } from '../../src/component/actual/menuNew/FooterMain'
import { Grow, Paper } from '@mui/material'
import { KaiyiImgDestop } from '../../src/component/actual/brendsPages/kaiyi/banner/KaiyiImg'
import { FilterWithPageComponent } from '../../src/component/actual/brendsPages/arkont-select/NewCarComponent'
import { SelectDesktop } from '../../src/component/actual/brendsPages/arkont-select/banner/SelectImg'


type Brand = {
  brandName: string;
  count: string
}

const ArkontSelectPage: NextPage<{ cars: AllUsedCarDto, brands: Brand[] }> = ({ cars, brands }) => {
  const [showModal, setShowModal] = useState(false)
  const [showTradeInModal, setShowTradeInModal] = useState(false)
  const [showModalFavorite, setShowModalFavorite] = useState(false)
  const refFooter = useRef<HTMLDivElement>(null)

  return (
    <>
      <Head>
        <title>АРКОНТ СЕЛЕКТ АВТОМОБИЛИ С ПРОБЕГОМ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuBarNew setShowModal={setShowModal} />
      <BarMenu />
      <div className='background'>
        <div className='content'>
          <SelectDesktop/>
          <FilterWithPageComponent setShowModal={setShowModal}
            setShowModalFavorite={setShowModalFavorite}
            cars={cars} brands={brands}
          />
        </div>
      </div >
      <FooterMainNew setShowModal={setShowModal} refs={{ refFooter }} />

      {
        showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
      }

      {
        showTradeInModal && <TradeinModal showTradeInModal={showTradeInModal} setShowTradeInModal={setShowTradeInModal} />
      }

      {/* {
        showModalFavorite && <ModalFavorite showModalFavorite={showModalFavorite} setShowModalFavorite={setShowModalFavorite} cars={cars} />
      } */}

      <style jsx>
        {` 
          .background {
            display: flex; 
            justify-content: center;
            width: '100%' ;
          }
  
          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 1179px; 
          }

          @media(max-width: 1300px) {
            .content {  
              width: 970px; 
            }
          }

          @media(max-width: 900px) {
            .content{  
              width: 640px; 
            }
          }

          @media(max-width: 640px) {
            .content{  
              width: 450px; 
            }
          }    
          
          @media(max-width: 450px) {
            .content{  
              width: 360px; 
            }
          }

          @media(max-width: 360px) {
            .background {
              padding-left: 10px;
              padding-right: 10px;
            }
            .content{  
              width:90%; 
            }
          }
        `}
      </style>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const carsPromise = await db.usedCars.findMany({
      where: {
        active: true,
      }
    });

    const brandsWithCountPromise = db.carModel.groupBy({
      by: ['brandName'],
      _count: true,
    });

    const [cars, brandsWithCount] = await Promise.all([
      carsPromise,
      brandsWithCountPromise,
    ]);

    const brands = brandsWithCount.map((item) => ({
      brandName: item.brandName,
      count: item._count,
    }));

    // Устанавливаем заголовки Cache-Control и ETag
    context.res.setHeader('Cache-Control', 'public, max-age=14400,must-revalidate'); // Максимальное время кэширования - 4 часа
    context.res.setHeader('ETag', 'some-unique-value'); // Уникальное значение ETag

    return {
      props: {
        cars: JSON.parse(JSON.stringify(cars)),
        brands: JSON.parse(JSON.stringify(brands)),
      },
    };
  } catch (error) {
    console.error('Error querying the database:', error);
    return {
      props: {
        cars: [],
        brands: []
      },
    };
  }
}




// export const getServerSideProps: GetServerSideProps = async (context) => {
//   let cars: CarDtoWithoutFavorite[] = []; // Объявление переменной cars
//   let brands: string[] = []; // Объявление переменной brandsF
//   try {
//     // Получаем данные из Redis и парсим их в массив объектов
//     const carsData: string = await getDataFromRedis('cars-Geely');
//     const brandsData: string = await getDataFromRedis('brands');

//     if (!carsData) {
//       cars = await db.car.findMany(
//         {
//           where: {
//             active: true,
//             CarModel: {
//               brandName: 'Geely',
//             },
//           },
//           include: {
//             CarModel: true,
//             CarComplectation: true,
//             CarModification: true,
//             extras: true,
//             DealerModel: true,
//           },
//         }
//       );
//       // Сохраняем данные в Redis на день
//       redisClient.set('cars-Geely', JSON.stringify(cars), 'EX', 21600);
//     } else {
//       cars = JSON.parse(carsData) as CarDtoWithoutFavorite[]; // Преобразование строки в массив объектов типа Car
//     }

//     if (!brandsData) {
//       // Получаем все доступные бренды без повторений только с полем brandName
//       brands = await db.carModel.findMany({
//         distinct: ['brandName'],
//         select: {
//           brandName: true,
//         },
//       }).then((result) => result.map((item) => item.brandName).filter(Boolean));
//       // Сохраняем данные в Redis на день
//       redisClient.set('brands', JSON.stringify(brands), 'EX', 21600);
//     } else {
//       brands = JSON.parse(brandsData) as string[]; // Преобразование строки в массив объектов типа Car
//     }

//     // Устанавливаем заголовки Cache-Control и ETag
//     context.res.setHeader('Cache-Control', 'public, max-age=21600'); // Максимальное время кэширования - 4 часа
//     context.res.setHeader('ETag', 'some-unique-value'); // Уникальное значение ETag
//     context.res.setHeader('X-XSS-Protection', '1; mode=block');
//     context.res.setHeader('X-Frame-Options', 'SAMEORIGIN');
//     context.res.setHeader('X-Content-Type-Options', 'nosniff');
//     return {
//       props: {
//         cars,
//         brands
//       },
//     };

//   } catch (error) {
//     console.error('Error querying the database:', error);
//     return {
//       props: {
//         cars: [],
//         brands:[]
//       },
//     };
//   }
// }

export default ArkontSelectPage




