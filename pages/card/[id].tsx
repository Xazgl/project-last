import { QuestionAnswer } from "@mui/icons-material"
import { Offer} from "@prisma/client"
import { NextPage } from "next"
import Head from 'next/head'
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { MainBanner } from '../../src/component/MainBanner'
import { MenuBar } from "../../src/component/Menu"
import { Map } from '../../src/component/Map'
import SaleBlock from "../../src/component/exeed/SaleBlock"





const CardSale: NextPage = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [shortDesc, setShortDesc] = useState('')
    const [pict, setPicture] = useState('')
    const [filterMain, setFilterMain] = useState('')

    const router = useRouter()
    const { id } = router.query


 
    const refTop = useRef<HTMLDivElement>(null)
    const refContact = useRef<HTMLDivElement>(null)
    const refAdvatages = useRef<HTMLDivElement>(null)
  




    useEffect(()=>{
        if (router.isReady) {
            async function start() {
                const res = await fetch('/api/card/' + router.query.id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                if (res.ok) {
                   let sale= await res.json()
                    console.log(sale)
                    setTitle(sale.title)
                    setDescription(sale.description)
                }
            }
            start()
        }
    
    }, [router.isReady]);
  

    return (
        <>
            <Head>
                <title>Подробнее о Специальном предложении</title>
                <meta name="description" content="Work with me" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Menu refs={{ refSales, refContact, refAdvatages }}/> */}
            <MainBanner  refs={{ refTop }}/>
            <SaleBlock description={description} title={title}/>
            <Map  refs={{ refTop, refContact }}/>
          
        </>
    )

}

export default CardSale
