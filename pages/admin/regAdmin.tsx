import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { MenuBar } from '../../src/component/Menu'

import { useRef, useState } from 'react'
import BarMenu from '../../src/component/BarMenu'
import { RegComponent } from '../../src/component/admin/Reg'

const RegAdmin: NextPage = () => {

  const refSales = useRef<HTMLDivElement>(null)
  const refTop = useRef<HTMLDivElement>(null)
  const refContact = useRef<HTMLDivElement>(null)
  const refAdvatages = useRef<HTMLDivElement>(null)
  const refFooter = useRef<HTMLDivElement>(null)

  return (
    <>
      <Head>
        <title>REG</title>
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuBar />
      <RegComponent />
    </>
  )
}

export default RegAdmin
