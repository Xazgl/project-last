import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { AllCarDto } from '../../@types/dto'
import db, { Car } from '../../prisma'
import { NewCarComponent } from '../../src/component/actual/allNewCarPage/NewCarComponent'
import FavoriteCars from '../../src/component/actual/favoriteCarPage/FavoriteCards'
import { FooterMain } from '../../src/component/actual/FooterMain'
import BarMenu from '../../src/component/BarMenu'
import { MenuBar } from '../../src/component/Menu'
import { Modal } from '../../src/component/Modal'
import { ModalFavorite } from '../../src/component/ModalFavorite'
import { TradeinModal } from '../../src/component/ModalTwo'


const FavoriteCarPage: NextPage = () => {



    const [showModal, setShowModal] = useState(false)
    const [showTradeInModal, setShowTradeInModal] = useState(false)
    const [favArr, setFavArr] = useState([]);


    const refSales = useRef<HTMLDivElement>(null)
    const refTop = useRef<HTMLDivElement>(null)
    const refContact = useRef<HTMLDivElement>(null)
    const refAdvatages = useRef<HTMLDivElement>(null)
    const refFooter = useRef<HTMLDivElement>(null)
    const refForm = useRef<HTMLDivElement>(null)


    useEffect(() => {
        async function start() {
            const res = await fetch('/api/favorite/getAll', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (res.ok) {
                const result = await res.json()
                setFavArr(result.favoriteCarUser.favoriteCars)
            }
        }
        start()
    }, [])


    return (
        <>
            <Head>
                <title>АРКОНТ ОФИЦИАЛЬНЫЙ ДИЛЕР В ВОЛГОГРАДЕ</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MenuBar />
            <BarMenu />
            <FavoriteCars favArr={favArr} setFavArr={setFavArr} setShowModal={setShowModal} />
            {/* <FooterMain  setShowTradeInModal={setShowTradeInModal} refs={{ refFooter  }} /> */}

            {
                showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
            }

            {
                showTradeInModal && <TradeinModal showTradeInModal={showTradeInModal} setShowTradeInModal={setShowTradeInModal} />
            }

        </>
    )
}

export default FavoriteCarPage





