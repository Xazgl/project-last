import { NextPage } from "next"
import Head from 'next/head'
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { AllCarDto } from "../../../@types/dto"
import { InfoCar } from "../../../src/component/actual/currentCar/CarInfo"


const CarPage: NextPage = () => {
    // const [car, setCar] = useState<AllCarDto[]>([])
    // const router = useRouter()
    // const { id } = router.query

    // const refTop = useRef<HTMLDivElement>(null)
    // const refContact = useRef<HTMLDivElement>(null)
    // const refAdvatages = useRef<HTMLDivElement>(null)

    // useEffect(() => {
    //     if (router.isReady) {
    //         async function start() {
    //             const res = await fetch('/api/car/' + router.query.id, {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //             })
    //             if (res.ok) {
    //                 const carFetch = await res.json()
    //                 setCar(carFetch)
    //             }
    //         }
    //         start()
    //     }
    //     console.log(car)

    // }, [router.isReady]);


    return (
        <>
            <Head>
                <title>Подробнее о машине </title>
                <meta name="description" content="Work with me" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <InfoCar />

        </>
    )

}

export default CarPage
