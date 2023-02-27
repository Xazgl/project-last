import { UsedCars } from "@prisma/client"
import { NextPage } from "next"
import Head from 'next/head'
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { InfoCarHeaderMobileUsed } from "../../../src/component/actual/currentCarUsed/InfoCarHeaderMobileUsed"
import { InfoCarHeaderUsed } from "../../../src/component/actual/currentCarUsed/InfoCarHeaderUsed"
import { InfoCarTableUsed } from "../../../src/component/actual/currentCarUsed/InfoCarTableUsed"
import { InfoCreditUsed } from "../../../src/component/actual/currentCarUsed/InfoCreditUsed"
import { InfoSaleUsed } from "../../../src/component/actual/currentCarUsed/InfoSaleUsed"
import BarMenu from "../../../src/component/BarMenu"
import { MenuBar } from "../../../src/component/Menu"
import { ModalImg } from "../../../src/component/ModalImg"

const CarPage: NextPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [carImg, setCarImg] = useState('')
    const router = useRouter()
    const [car, setCar] = useState<UsedCars>(null) // TODO: написать тип ДТО {}
    const { id } = router.query

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
            <MenuBar />
            <BarMenu />
            <InfoCarHeaderUsed car={car} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
            <InfoCarHeaderMobileUsed car={car} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
            <InfoCarTableUsed car={car} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
            <InfoSaleUsed car={car} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
            <InfoCreditUsed car={car} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
            {/* <InfoOffice car={car} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} /> */}

            {
                showModal && <ModalImg carImg={carImg} showModal={showModal} setShowModal={setShowModal} />
            }

        </>
    )

}

export default CarPage
