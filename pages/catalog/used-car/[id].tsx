import { NextPage } from "next"
import Head from 'next/head'
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { CarUsedInclude } from "../../../@types/dto"
import { InfoCarHeaderMobileUsed } from "../../../src/component/actual/currentCarUsed/InfoCarHeaderMobileUsed"
import { InfoCarHeaderUsed } from "../../../src/component/actual/currentCarUsed/InfoCarHeaderUsed"
import { InfoCarTableUsed } from "../../../src/component/actual/currentCarUsed/InfoCarTableUsed"
import { InfoCreditUsed } from "../../../src/component/actual/currentCarUsed/InfoCreditUsed"
import { InfoSaleUsed } from "../../../src/component/actual/currentCarUsed/InfoSaleUsed"
import { FooterMain } from "../../../src/component/actual/FooterMain"
import BarMenu from "../../../src/component/BarMenu"
import { MenuBar } from "../../../src/component/Menu"
import { Modal } from "../../../src/component/Modal"
import { ModalImg } from "../../../src/component/ModalImg"
import { MenuBarNew } from "../../../src/component/actual/menuNew/Menu"
import { FooterMainNew } from "../../../src/component/actual/menuNew/FooterMain"

const CarPage: NextPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [showModalImg, setShowModalImg] = useState(false)
    const [carImg, setCarImg] = useState('')
    const router = useRouter()
    const [car, setCar] = useState<CarUsedInclude>(null) // TODO: написать тип ДТО {}
    const { id } = router.query
    const refCredit = useRef<HTMLDivElement>(null)
    const [showTradeInModal, setShowTradeInModal] = useState(false)
    const refFooter = useRef<HTMLDivElement>(null)

    useEffect(() => {
        async function start() {
            const res = await fetch('/api/usedcar/' + router.query.id, {
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
            <MenuBarNew setShowModal={setShowModal} />
            <BarMenu />
            <InfoCarHeaderUsed car={car} setCar={setCar} setCarImg={setCarImg}
                showModal={showModal} setShowModal={setShowModal} showModalImg={showModalImg}
                setShowModalImg={setShowModalImg} refCredit={refCredit}
            />
            <InfoCarHeaderMobileUsed car={car} setCar={setCar} setCarImg={setCarImg}
                showModal={showModal} setShowModal={setShowModal} showModalImg={showModalImg}
                setShowModalImg={setShowModalImg} refCredit={refCredit}
            />
            <InfoCarTableUsed car={car} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
            <InfoSaleUsed car={car} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
            <InfoCreditUsed car={car} setCarImg={setCarImg} showModal={showModal}
                setShowModal={setShowModal} refCredit={refCredit}
            />
            <FooterMainNew setShowModal={setShowModal} refs={{ refFooter }} />

            {/* <InfoOffice car={car} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} /> */}


            {
                showModalImg && <ModalImg carImg={carImg} showModalImg={showModalImg} setShowModalImg={setShowModalImg} />
            }

            {
                showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
            }
        </>
    )

}

export default CarPage
