
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef, useState } from 'react'
import { AssistentImg } from '../../src/component/actual/assistentPage/AssistentImg'
import { AssistentTxt } from '../../src/component/actual/assistentPage/AssistentTxt'
import { MainBannerAssistent } from '../../src/component/actual/assistentPage/MainBannerAssistent'

import { FooterMain } from '../../src/component/actual/FooterMain'
import BarMenu from '../../src/component/BarMenu'
import { MenuBar } from '../../src/component/Menu'
import { Modal } from '../../src/component/Modal'
import { TradeinModal } from '../../src/component/ModalTwo'


const AssistentPage: NextPage  = () => {
  
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
        <title>АРКОНТ Аварийный комиссар в ВОЛГОГРАДЕ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuBar />
      <BarMenu />
      <MainBannerAssistent setShowModal={setShowModal}  refs={{refForm}}/>
      <AssistentImg />
      <AssistentTxt />
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


export default AssistentPage





