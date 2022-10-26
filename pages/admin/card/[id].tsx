import { QuestionAnswer } from "@mui/icons-material"
import { Sales } from "@prisma/client"
import { NextPage } from "next"
import Head from 'next/head'
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import SaleBlockRedact from "../../../src/component/admin/SaleBlockRedact"





const CardSale: NextPage = () => {
    // const [title, setTitle] = useState('')
    // const [description, setDescription] = useState('')
    // const [price, setPrice] = useState('')
    // const [mainFilt, setMainFilt] = useState(0)// id фильтра 
    // const [miniFilter, setMiniFilter] = useState(0)// id под фильтра 
    // const [image, setImage] = useState<File | null>(null)
    // const [shortDesc, setShortDesc] = useState('')
    // console.warn('render CardSale')
    // const router = useRouter()
    // const { id } = router.query


    // useEffect(()=>{
    //     if (router.isReady) {
    //         async function showSale () {
    //             const res = await fetch('/api/card/' + router.query.id, {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //             })
    //             if (res.ok) {
    //                 let sale = await res.json()
    //                 console.log(sale)
    //                 setTitle(sale.title)
    //                 setDescription(sale.description)
    //                 setPrice(sale.price)
    //                 setMainFilt(sale.filterMain)
    //                 setMiniFilter(sale.detailFilter)
    //                 setImage(sale.img)
    //                 setShortDesc(sale.shortDesc)
    //             }
    //         }
    //         showSale()

    //     }

    // }, [router.isReady]);


    return (
        <>
            <Head>
                <title>Редактирование акции</title>
                <meta name="description" content="Work with me" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SaleBlockRedact />
            {/* <SaleBlockRedact  description={description} shortDesc={shortDesc} title={title} price={price}
             mainFilt={mainFilt} miniFilter={miniFilter} image={image}
            /> */}
        </>
    )

}

export default CardSale
