import { Offer } from "@prisma/client"
import { NextPage } from "next"
import Head from 'next/head'
import { useRouter } from "next/router"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { FooterMain } from "../../../src/component/actual/FooterMain"
import { BannerOffer } from "../../../src/component/actual/specialOffers/currentOffer/BannerOffer"
import { FormOffer } from "../../../src/component/actual/specialOffers/currentOffer/FormOffer"
import { OfferDesc } from "../../../src/component/actual/specialOffers/currentOffer/OfferDesc"
import BarMenu from "../../../src/component/BarMenu"
import { MenuBar } from "../../../src/component/Menu"
import { Modal } from "../../../src/component/Modal"
import { TradeinModal } from "../../../src/component/ModalTwo"
import { FooterMainNew } from "../../../src/component/actual/menuNew/FooterMain"
import ServiceForm from "../../car-repair/service-form"

const OfferPage: NextPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [showTradeInModal, setShowTradeInModal] = useState(false)
    const router = useRouter()
    const [offer, setOffer] = useState<Offer>(null)
    const refForm = useRef<HTMLDivElement>(null)
    const { id } = router.query
    const refFooter = useRef<HTMLDivElement>(null)


    useEffect(() => {
        async function start() {
            const res = await fetch('/api/offer/' + router.query.id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (res.ok) {
                const offerFetch = await res.json()
                console.log(offerFetch);
                setOffer(offerFetch)
            }
        }
        if (router.isReady) {
            start()
        }
    }, [router.isReady]);


    return (
        <>
            <Head>
                <title>Подробнее о предложении</title>
                <meta name="description" content="Current offer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MenuBar />
            <BarMenu />
            <BannerOffer offer={offer} setShowModal={setShowModal} />
            <OfferDesc offer={offer} refForm={refForm} />
            <FormOffer refForm={refForm} />
            {/* <ServiceForm refs={{ refForm }} /> */}
            <FooterMainNew setShowModal={setShowModal} refs={{ refFooter }} />

            {/* <InfoCarHeader car={car} refCredit={refCredit} setCar={setCar} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal}
                showModalImg={showModalImg} setShowModalImg={setShowModalImg}
            />
            <InfoCarHeaderMobile car={car} refCredit={refCredit} setCar={setCar} setCarImg={setCarImg}
                showModal={showModal} setShowModal={setShowModal} showModalImg={showModalImg}
                setShowModalImg={setShowModalImg}
            />
            <InfoCarTable car={car} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
            <InfoSale car={car} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
            <InfoCredit car={car} refCredit={refCredit} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} />
            <InfoOffice car={car} setCarImg={setCarImg} showModal={showModal} setShowModal={setShowModal} /> */}

            {
                showTradeInModal && <TradeinModal showTradeInModal={showTradeInModal} setShowTradeInModal={setShowTradeInModal} />
            }

            {
                showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
            }

        </>
    )

}

export default OfferPage
