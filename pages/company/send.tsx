
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef, useState } from 'react'
import { FooterMain } from '../../src/component/actual/FooterMain'
import { SendForm } from '../../src/component/actual/sendPage/SendForm'
import BarMenu from '../../src/component/BarMenu'
import { MenuBar } from '../../src/component/Menu'
import { Modal } from '../../src/component/Modal'
import { TradeinModal } from '../../src/component/ModalTwo'
import { MenuBarNew } from '../../src/component/actual/menuNew/Menu'
import { FooterMainNew } from '../../src/component/actual/menuNew/FooterMain'


const SendPage: NextPage = () => {
  
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
        <title>АРКОНТ СВЯЖИТЕСЬ С НАМИ </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuBarNew setShowModal={setShowModal} />
      <BarMenu />
      <SendForm />
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



export default SendPage





