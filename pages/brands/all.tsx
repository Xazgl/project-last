
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef, useState } from 'react'
import { AllCarDto } from '../../@types/dto'
import BarMenu from '../../src/component/BarMenu'
import { Modal } from '../../src/component/Modal'
import { ModalFavorite } from '../../src/component/ModalFavorite'
import { TradeinModal } from '../../src/component/ModalTwo'
import BrandsCards from '../../src/component/actual/brendsPages/all/BrandsCards'
import BrandsMap from '../../src/component/actual/brendsPages/all/BrandsMap'
import { AnimatedText } from '../../src/component/actual/brendsPages/all/textDec/AnimateTxt'
import { MenuBarNew } from '../../src/component/actual/menuNew/Menu'
import { FooterMainNew } from '../../src/component/actual/menuNew/FooterMain'

type Brand = {
  brandName: string;
  count: string
}

const BrandsPage: NextPage<{ cars: AllCarDto, brands: Brand[] }> = ({ cars, brands }) => {

  console.log(brands)
  const [showModal, setShowModal] = useState(false)
  const [showTradeInModal, setShowTradeInModal] = useState(false)
  const [showModalFavorite, setShowModalFavorite] = useState(false)
  const refFooter = useRef<HTMLDivElement>(null)

  return (
    <>
      <Head>
        <title>АРКОНТ ОФИЦИАЛЬНЫЙ ДИЛЕР</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuBarNew setShowModal={setShowModal} />
      <BarMenu />
      <div className='background'>
        <div className='content'>
          <div className='title'><AnimatedText text={`Бренды`} interval={100} /></div>
          <BrandsCards />
          
          <div className='title'>Сервисные центры Арконт</div>
          <BrandsMap />
        </div>
      </div >
      <FooterMainNew setShowModal={setShowModal} refs={{ refFooter }} />

      {
        showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
      }

      {
        showTradeInModal && <TradeinModal showTradeInModal={showTradeInModal} setShowTradeInModal={setShowTradeInModal} />
      }

      {
        showModalFavorite && <ModalFavorite showModalFavorite={showModalFavorite} setShowModalFavorite={setShowModalFavorite} cars={cars} />
      }

      <style jsx>
        {` 
          .background {
            display: flex; 
            justify-content: center;
            width: '100%' ;
            background-color: #f5f2f216;
          }
  
          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 1179px; 
          }

          .title {
            display: flex;
            justify-content: start;
            width: 100%;
            font-family: 'Roboto',sans-serif;
            margin-top: 20px;
            font-size: 25px;
            font-weight: bold;
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
            .title {
              justify-content: center;
            }
          }

          @media(max-width: 640px) {
            .content{  
              width: 450px; 
            }
          }
 
          @media(max-width: 460px) {
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

export default BrandsPage




