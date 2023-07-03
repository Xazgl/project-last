import { NextPage } from "next"
import Head from 'next/head'
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { CarDto } from "../../../@types/dto"
import { InfoCarHeader } from "../../../src/component/actual/currentCar/InfoCarHeader"
import { InfoCarHeaderMobile } from "../../../src/component/actual/currentCar/InfoCarHeaderMobile.tsx"
import { InfoCarTable } from "../../../src/component/actual/currentCar/InfoCarTable"
import { InfoCredit } from "../../../src/component/actual/currentCar/InfoCredit"
import { InfoOffice } from "../../../src/component/actual/currentCar/InfoOffice"
import { InfoSale } from "../../../src/component/actual/currentCar/InfoSale"
import { FooterMain } from "../../../src/component/actual/FooterMain"
import BarMenu from "../../../src/component/BarMenu"
import { MenuBar } from "../../../src/component/Menu"
import { Modal } from "../../../src/component/Modal"
import { ModalImg } from "../../../src/component/ModalImg"
import { FooterMainNew } from "../../../src/component/actual/menuNew/FooterMain"

const CarPage: NextPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [showModalImg, setShowModalImg] = useState(false)
  const [showTradeInModal, setShowTradeInModal] = useState(false)
  const refFooter = useRef<HTMLDivElement>(null)
  const [carImg, setCarImg] = useState('')
  const router = useRouter()
  const [car, setCar] = useState<CarDto>(null) // TODO: написать тип ДТО {}
  const refCredit = useRef<HTMLDivElement>(null)

  const { id } = router.query

  useEffect(() => {
    async function start() {
      const res = await fetch('/api/car/' + router.query.id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      if (res.ok) {
        const carFetch = await res.json()
        console.log(carFetch);
        setCar(carFetch)
      }
      const resWatched = await fetch('/api/favorite/watchedcar/' + router.query.id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      if (resWatched.ok) {
        const carWatched = await resWatched.json()
        console.log(carWatched);
      }
    }
    if (router.isReady) {
      start()
      console.log('start');

    }
  }, [router.isReady]);


  return (
    <>
      <Head>
        <title>Подробнее о машине </title>
        <meta name="description" content="Work with me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuBar />
      <BarMenu />
      <div className='background'>
        <div className='content'>
          <InfoCarHeader car={car} refCredit={refCredit} setCar={setCar} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal}
            showModalImg={showModalImg} setShowModalImg={setShowModalImg}
          />
          <InfoCarHeaderMobile car={car} refCredit={refCredit} setCar={setCar} setCarImg={setCarImg}
            showModal={showModal} setShowModal={setShowModal} showModalImg={showModalImg}
            setShowModalImg={setShowModalImg}
          />
          <InfoCarTable car={car} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
          <InfoSale car={car} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
          <InfoCredit car={car} refCredit={refCredit} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
          <InfoOffice car={car} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
          {/* <FooterMain setShowTradeInModal={setShowTradeInModal} refs={{ refFooter }} /> */}
        </div>
      </div >
      <FooterMainNew setShowModal={setShowModal} refs={{ refFooter }} />

      {
        showModalImg && <ModalImg carImg={carImg} showModalImg={showModalImg} setShowModalImg={setShowModalImg} />
      }

      {
        showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
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

export default CarPage
