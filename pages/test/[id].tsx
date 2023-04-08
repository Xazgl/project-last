import { Modal } from '../../src/component/Modal'
import { QuestionAnswer } from "@mui/icons-material"
import { Job } from "@prisma/client"
import { GetServerSideProps, NextPage } from "next"
import Head from 'next/head'
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { FooterMain } from "../../src/component/actual/FooterMain"
import { MenuBar } from "../../src/component/Menu"
import { TradeinModal } from "../../src/component/ModalTwo"
import BarMenu from '../../src/component/BarMenu'
import { Corusel1C } from '../../src/component/testArkont/slider/Corusel1C'
import { CarDto } from '../../@types/dto'
import db from '../../prisma'
import { Button, CircularProgress } from '@mui/material'
import { CarouselComponentTest } from '../../src/component/testArkont/sliderMobile/CarouselComponentTest'
import { UlDesc } from '../../src/component/testArkont/UlDesc'
import ServiceList from '../../src/component/testArkont/ServiceList'
import Table from '../../src/component/testArkont/Table'


const Corusel: NextPage = () => {
    const [car, setCar] = useState<CarDto>(null)
    const router = useRouter()
    const { id } = router.query
    const [showModal, setShowModal] = useState(false)
    const [showTradeInModal, setShowTradeInModal] = useState(false)

    useEffect(() => {
        if (router.isReady) {
            async function start() {
                const res = await fetch('/api/car/' + router.query.id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                if (res.ok) {
                    const carFetch = await res.json()
                    setCar(carFetch)
                }
            }
            start()
            console.log(car)
        }

    }, [router.isReady]);


    const [mobileAdaptive, setMobileAdaptive] = useState(false);

    // Определение количества отображаемых элементов в зависимости от ширины экрана
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setMobileAdaptive(true);
            } else {
                setMobileAdaptive(false);
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    const services = [
        { id: 1, name: 'Замена тормозных колодок', price: 500 },
        { id: 2, name: 'Замена топливного насоса', price: 4000 },
        { id: 3, name: 'Заправка кондиционера', price: 1000 },
    ];


    return (
        <>
            <Head>
                <title>Тестовая страница 1С</title>
                <meta name="description" content="Work with me" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {car ?
                <>
                    {mobileAdaptive == false ?
                        <Corusel1C car={car} />
                        :
                        <CarouselComponentTest car={car} />
                    }
                    <ServiceList services={services} />
                </>
                :
                <CircularProgress />
            }



            {
                showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
            }

            {
                showTradeInModal && <TradeinModal showTradeInModal={showTradeInModal} setShowTradeInModal={setShowTradeInModal} />
            }



        </>
    )

}



export default Corusel
