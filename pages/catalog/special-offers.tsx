
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRef, useState } from 'react'
import db, { Offer } from '../../prisma'
import { FooterMain } from '../../src/component/actual/FooterMain'
import { CardsSpecialOffers } from '../../src/component/actual/specialOffers/CardsSpecialOffers'
import BarMenu from '../../src/component/BarMenu'
import { MenuBar } from '../../src/component/Menu'
import { Modal } from '../../src/component/Modal'
import { TradeinModal } from '../../src/component/ModalTwo'
import { getDataFromRedis, getRedisInstance } from '../../src/services/redis'
import { MenuBarNew } from '../../src/component/actual/menuNew/Menu'
import { FooterMainNew } from '../../src/component/actual/menuNew/FooterMain'


const SpecialOffersPage: NextPage<{ offers: Offer[] }> = ({ offers }) => {

  const [showModal, setShowModal] = useState(false)
  const [showTradeInModal, setShowTradeInModal] = useState(false)
  const refSales = useRef<HTMLDivElement>(null)
  const refTop = useRef<HTMLDivElement>(null)
  const refContact = useRef<HTMLDivElement>(null)
  const refAdvatages = useRef<HTMLDivElement>(null)
  const refFooter = useRef<HTMLDivElement>(null)
  const refForm = useRef<HTMLDivElement>(null)

  return (
    <>
      <Head>
        <title>АРКОНТ ОФИЦИАЛЬНЫЙ ДИЛЕР В ВОЛГОГРАДЕ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuBarNew setShowModal={setShowModal} />
      <BarMenu />
      <CardsSpecialOffers setShowModal={setShowModal} offers={offers} />
      {/* <TradeInForm /> */}
      <FooterMainNew setShowModal={setShowModal} refs={{ refFooter }} />

      {
        showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
      }

      {
        showTradeInModal && <TradeinModal showTradeInModal={showTradeInModal} setShowTradeInModal={setShowTradeInModal} />
      }

    </>
  )
}

// console.log('getServerSideProps!!!!!!!!!!!!!!!');


export const getServerSideProps: GetServerSideProps = async (context) => {
  // const { getDataFromRedis, getRedisInstance() } = await import('../../src/services/redis')
  let offers: Offer[] = []; // Объявление переменной job
  try {
    // Получаем данные из Redis и парсим их в массив объектов
    const offersData: string = await getDataFromRedis('offers');
    if (!offersData) {
      offers = await db.offer.findMany({
        where: {
          active: true
        }
      })
      // Сохраняем данные в Redis на день
      getRedisInstance().set('offers', JSON.stringify(offers), 'EX', 86400);
    } else {
      offers = JSON.parse(offersData) as Offer[]; // Преобразование строки в массив объектов типа Car
    }
    // Устанавливаем заголовки Cache-Control и ETag
    context.res.setHeader('Cache-Control', 'public, max-age=86400'); // Максимальное время кэширования - 4 часа
    context.res.setHeader('ETag', 'some-unique-value'); // Уникальное значение ETag
    return {
      props: {
        offers
      },
    };
  } catch (error) {
    console.error('Error querying the database:', error);
    return {
      props: {
        offers: []
      },
    };
  }

  // return {
  //   props: {
  //     offers: JSON.parse(JSON.stringify(offers)),
  //   }
  // }
}


export default SpecialOffersPage





