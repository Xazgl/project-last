
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRef, useState } from 'react'
import db, { Offer } from '../../prisma'
import { NumbersBanner } from '../../src/component/actual/carNumbers/NumbersBanner'
import { FooterMain } from '../../src/component/actual/FooterMain'
import { ServiceForm } from '../../src/component/actual/serviceCarPage/ServiceForm'
import { CardsSpecialOffers } from '../../src/component/actual/specialOffers/CardsSpecialOffers'
import BarMenu from '../../src/component/BarMenu'
import { MenuBar } from '../../src/component/Menu'
import { Modal } from '../../src/component/Modal'
import { TradeinModal } from '../../src/component/ModalTwo'


const ServicePage: NextPage <{ offers: Offer[] }> = ({ offers }) => {
  
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
        <title>АРКОНТ ЗАПИСЬ НА СЕРВИС</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuBar />
      <BarMenu />
      <ServiceForm />
      <CardsSpecialOffers  setShowModal={setShowModal} offers={ offers } />
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
  const offers = await db.offer.findMany()
        
  return {
    props: {
      offers: JSON.parse(JSON.stringify(offers)),
    }
  }
}



export default ServicePage





