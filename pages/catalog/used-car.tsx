import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRef, useState } from 'react'
import {  AllUsedCarDto, CarUsedInclude} from '../../@types/dto'
import db from '../../prisma'
import { UsedCarComponent } from '../../src/component/actual/allUsedCarPage/UsedCarComponent';
import { FooterMain } from '../../src/component/actual/FooterMain'
import BarMenu from '../../src/component/BarMenu'
import { MenuBar } from '../../src/component/Menu'
import { Modal } from '../../src/component/Modal'
import { TradeinModal } from '../../src/component/ModalTwo'


// const AllUsedCarPage: NextPage <{ cars: AllUsedCarDto }> = ({ cars }) => {
  const AllUsedCarPage: NextPage <{ cars: CarUsedInclude[] }> = ({ cars }) => {

  
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
      <MenuBar />
      <BarMenu />
      <UsedCarComponent  setShowModal={setShowModal} cars={cars}  />
      <FooterMain  setShowTradeInModal={setShowTradeInModal} refs={{ refFooter  }} />

      {
        showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
      }

      {
        showTradeInModal && <TradeinModal showTradeInModal={showTradeInModal} setShowTradeInModal={setShowTradeInModal} />
      }

    </>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const cars = await db.usedCars.findMany(
              {
                  where: {
                      active: true,
                  },
                  // include: {
                  //     CarModel: true,
                  //     CarComplectation: true,
                  //     CarModification: true,
                  //     extras: true,
                  //     DealerModel: true,
                  // }
              }
  )

  return {
    props: {
      cars: JSON.parse(JSON.stringify(cars)),
    }
  }
}

export default AllUsedCarPage





