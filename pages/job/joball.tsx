//@ts-ignore
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { MenuBar } from '../../src/component/Menu'
import { Modal } from '../../src/component/Modal'
import { TradeinModal } from '../../src/component/ModalTwo'
import { useEffect, useRef, useState } from 'react'
import db, { Job } from '../../prisma'
import { QuestionForm } from '../../src/component/actual/QuestionForm'
import { FooterMain } from '../../src/component/actual/FooterMain'
import { MainBanner } from '../../src/component/actual/job/MainBanner'
import { Banner } from '../../src/component/actual/job/Banner'
import { CompanyMini } from '../../src/component/actual/job/CompanyMini'
import { Staff } from '../../src/component/actual/job/Staff'
import { CardsOffers } from '../../src/component/actual/job/CardsOffersJob'
import BarMenu from '../../src/component/BarMenu'
import { getDataFromRedis, redisClient } from '../../src/services/redis'


const JobPage: NextPage<{ job: Job[] }> = ({ job }) => {

  const [showModal, setShowModal] = useState(false)
  const [showTradeInModal, setShowTradeInModal] = useState(false)

  const refSales = useRef<HTMLDivElement>(null)
  const refTop = useRef<HTMLDivElement>(null)
  const refContact = useRef<HTMLDivElement>(null)
  const refAdvatages = useRef<HTMLDivElement>(null)
  const refFooter = useRef<HTMLDivElement>(null)

  return (
    <>
      <Head>
        <title>Работа с АРКОНТ </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuBar />
      <BarMenu />
      <MainBanner />
      <CardsOffers job={job} setShowModal={setShowModal} />
      <Banner setShowModal={setShowModal} />
      <CompanyMini />
      <Staff />
      <QuestionForm />
      <FooterMain setShowTradeInModal={setShowTradeInModal} refs={{ refFooter }} />

      {
        showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
      }

      {
        showTradeInModal && <TradeinModal showTradeInModal={showTradeInModal} setShowTradeInModal={setShowTradeInModal} />
      }

    </>
  )
}

export default JobPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  let job: Job[] = []; // Объявление переменной job
  try {
    // Получаем данные из Redis и парсим их в массив объектов
    const jobData: string = await getDataFromRedis('job');
    if (!jobData) {
      job = await db.job.findMany({
        where: {
          active: true
        }
      })
      // Сохраняем данные в Redis на день
      redisClient.set('job', JSON.stringify(job), 'EX', 14400);
    } else {
      job = JSON.parse(jobData) as Job[]; // Преобразование строки в массив объектов типа Car
    }
    // Устанавливаем заголовки Cache-Control и ETag
    context.res.setHeader('Cache-Control', 'public, max-age=14400'); // Максимальное время кэширования - 4 часа
    context.res.setHeader('ETag', 'some-unique-value'); // Уникальное значение ETag
    return {
      props: {
        job
      },
    };
  } catch (error) {
    console.error('Error querying the database:', error);
    return {
      props: {
        job: []
      },
    };
  }
}


//   job = await db.job.findMany({
//     where: {
//       active: true
//     }
//   })
//   return {
//     props: {
//       job: JSON.parse(JSON.stringify(job)),
//     }
//   }
// }



