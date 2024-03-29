
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRef, useState } from 'react'
import db, { Offices } from '../../prisma'
import { OfficesListComponent } from '../../src/component/actual/contact/OfficesListComponent'
import { FooterMain } from '../../src/component/actual/FooterMain'
import BarMenu from '../../src/component/BarMenu'
import { MenuBar } from '../../src/component/Menu'
import { Modal } from '../../src/component/Modal'
import { TradeinModal } from '../../src/component/ModalTwo'
import { MenuBarNew } from '../../src/component/actual/menuNew/Menu'
import { FooterMainNew } from '../../src/component/actual/menuNew/FooterMain'


const ContactPage: NextPage<{ offices: Offices[] }> = ({ offices }) => {

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
        <title>АРКОНТ ОФИЦИАЛЬНЫЕ ДИЛЕРСКИЕ ЦЕНТРЫ В ВОЛГОГРАДЕ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuBarNew setShowModal={setShowModal} />
      <BarMenu />
      <div className='background'>
        <div className='content'>
          <OfficesListComponent setShowModal={setShowModal} offices={offices} />
        </div>
      </div>
      <FooterMainNew setShowModal={setShowModal} refs={{ refFooter }} />

      {
        showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
      }

      {
        showTradeInModal && <TradeinModal showTradeInModal={showTradeInModal} setShowTradeInModal={setShowTradeInModal} />
      }


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
  const offices = await db.offices.findMany()

  return {
    props: {
      offices: JSON.parse(JSON.stringify(offices)),
    }
  }
}

export default ContactPage





