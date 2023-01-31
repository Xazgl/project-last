import { NextPage } from "next"
import Head from 'next/head'
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { AllCarDto } from "../../../@types/dto"
import { InfoCar } from "../../../src/component/actual/currentCar/CarInfo"
import { ModalImg } from "../../../src/component/ModalImg"

const CarPage: NextPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [carImg, setCarImg] = useState('')

    return (
        <>
            <Head>
                <title>Подробнее о машине </title>
                <meta name="description" content="Work with me" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <InfoCar setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />

            {
                showModal && <ModalImg  carImg={carImg} showModal={showModal} setShowModal={setShowModal} />
            }

        </>
    )

}

export default CarPage
