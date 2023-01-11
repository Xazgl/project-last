import { Modal } from '../../src/component/Modal'
import { QuestionAnswer } from "@mui/icons-material"
import { Job } from "@prisma/client"
import { NextPage } from "next"
import Head from 'next/head'
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { FooterMain } from "../../src/component/actual/FooterMain"
import { MenuBar } from "../../src/component/Menu"
import { TradeinModal } from "../../src/component/ModalTwo"
import { More } from '../../src/component/actual/job/More'
import { VacancyForm } from '../../src/component/actual/job/VacancyForm'


const Job: NextPage = () => {
    const [job, setJob] = useState('')
    const router = useRouter()
    const { id } = router.query
    const [showModal, setShowModal] = useState(false)
    const [showTradeInModal, setShowTradeInModal] = useState(false)
    const [open, setOpen] = useState(false)
    const refSales = useRef<HTMLDivElement>(null)
    const refTop = useRef<HTMLDivElement>(null)
    const refContact = useRef<HTMLDivElement>(null)
    const refAdvatages = useRef<HTMLDivElement>(null)
    const refFooter = useRef<HTMLDivElement>(null)



    useEffect(() => {
        if (router.isReady) {
            async function start() {
                const res = await fetch('/api/job/' + router.query.id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                if (res.ok) {
                    let job = await res.json()
                    setJob(job)
                    console.log(job)
                }
            }
            start()
        }

    }, [router.isReady]);



    return (
        <>
            <Head>
                <title>Подробнее о вакансии</title>
                <meta name="description" content="Work with me" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MenuBar refs={{ refSales, refContact, refAdvatages }} />
            <More job={job} setOpen={setOpen} />
            {open=== true &&
                <VacancyForm  job={job} />
            }
            <FooterMain setShowTradeInModal={setShowTradeInModal} refs={{ refFooter }} />

            {
                showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
            }

            {
                showTradeInModal && <TradeinModal showTradeInModal={showTradeInModal} setShowTradeInModal={setShowTradeInModal} />
            }
        </>
    )

}

export default Job
