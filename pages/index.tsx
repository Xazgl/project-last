//@ts-ignore
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { MenuBar } from '../src/component/Menu'
import { Modal } from '../src/component/Modal'
import { TradeinModal } from '../src/component/ModalTwo'
import { useEffect, useRef, useState } from 'react'
import BarMenu from '../src/component/BarMenu'
import db from '../prisma'

// import { useUtm } from '../src/hooks/useUtm'
import { MainCard } from '../src/component/MainCard'
import { Labels } from '../src/component/actual/Labels'
import { NewCar } from '../src/component/actual/NewCar'
import { OldCar } from '../src/component/actual/OldCar'
import { QuestionForm } from '../src/component/actual/QuestionForm'
import { FooterMain } from '../src/component/actual/FooterMain'
import { AllCarDto, AllUsedCarDto } from '../@types/dto'
import { NewCarCarousel } from '../src/component/actual/NewCarCarousel'
import { CarouselComponent } from '../src/component/actual/Carousel'
import Script from 'next/script'
import { Slider } from '../src/component/actual/Slider'


const Home: NextPage<{ cars: AllCarDto, carsUsed: AllUsedCarDto }> = ({ cars, carsUsed }) => {

  const [showModal, setShowModal] = useState(false)
  const [showTradeInModal, setShowTradeInModal] = useState(false)

  const refSales = useRef<HTMLDivElement>(null)
  const refTop = useRef<HTMLDivElement>(null)
  const refContact = useRef<HTMLDivElement>(null)
  const refAdvatages = useRef<HTMLDivElement>(null)
  const refFooter = useRef<HTMLDivElement>(null)

  // const [modelName, setModelName] = useState<string>(null)
  // useEffect(() => {
  //   const utm = new URLSearchParams(location.search).get('utm_mdl')
  //   if(utm === 'rio_2022') {
  //     setModelName('Rio')
  //   }
  // }, [])
  // const { utm_mdl } = useUtm(['utm_mdl'])

  return (
    <>
      <Head>
        <title>АРКОНТ ОФИЦИАЛЬНЫЙ ДИЛЕР В ВОЛГОГРАДЕ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MenuBar />
      <BarMenu />
      <MainCard />
      <Labels />
      {/* слайдер новые авто моб */}
      <CarouselComponent cars={cars} />
      {/* слайдер новые авто  */}
      <Slider cars={cars} />
      {/* <NewCarCarousel cars={cars} /> */}
      {/* <NewCar cars={cars} /> */}
      <OldCar carsUsed={carsUsed} />
      <QuestionForm />

      <FooterMain setShowTradeInModal={setShowTradeInModal} refs={{ refFooter }} />

      {/* <BarMenu />
      <MainBanner refs={{ refTop }} />
      <OurAdvantages setShowModal={setShowModal} refs={{ refAdvatages }} /> */}
      {/* {utm_mdl && <h1>Model name: {utm_mdl}</h1>} */}
      {/* <Cards sales={sales} />  */}
      {/* <CardsNew setShowModal={setShowModal} refs={{ refSales }} />
      <Form />
      <Map refs={{ refTop, refContact }} /> */}
      {
        showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
      }

      {
        showTradeInModal && <TradeinModal showTradeInModal={showTradeInModal} setShowTradeInModal={setShowTradeInModal} />
      }

    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cars = await db.car.findMany(
    {
      where: {
        active: true,
      },
      include: {
        CarModel: true,
        CarComplectation: true,
        CarModification: true,
        extras: true,
        DealerModel: true,
      }
    }
  )

  const carsUsed = await db.usedCars.findMany(
    {
      where: {
        active: true,
      }
    }
  )

  return {
    props: {
      cars: JSON.parse(JSON.stringify(cars)),
      carsUsed: JSON.parse(JSON.stringify(carsUsed)),
    }
  }
}






