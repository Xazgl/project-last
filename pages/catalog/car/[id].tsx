import { NextPage } from "next"
import Head from 'next/head'
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { AllCarDto, CarDto } from "../../../@types/dto"
import { InfoCarHeader } from "../../../src/component/actual/currentCar/InfoCarHeader"
import { InfoCarHeaderMobile } from "../../../src/component/actual/currentCar/InfoCarHeaderMobile.tsx"
import { InfoCarTable } from "../../../src/component/actual/currentCar/InfoCarTable"
import { InfoCredit } from "../../../src/component/actual/currentCar/InfoCredit"
import { InfoOffice } from "../../../src/component/actual/currentCar/InfoOffice"
import { InfoSale } from "../../../src/component/actual/currentCar/InfoSale"
import BarMenu from "../../../src/component/BarMenu"
import { MenuBar } from "../../../src/component/Menu"
import { ModalImg } from "../../../src/component/ModalImg"

const CarPage: NextPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [carImg, setCarImg] = useState('')
    const router = useRouter()
    const [car, setCar] = useState<CarDto>(null) // TODO: написать тип ДТО {}

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
                const carWatched = await  resWatched.json()
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
            <InfoCarHeader car={car}   setCar={setCar} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
            <InfoCarHeaderMobile car={car} setCar={setCar}  setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
            <InfoCarTable car={car} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
            <InfoSale car={car} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
            <InfoCredit car={car} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
            <InfoOffice car={car} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />

            {
                showModal && <ModalImg carImg={carImg} showModal={showModal} setShowModal={setShowModal} />
            }

        </>
    )

}

export default CarPage
