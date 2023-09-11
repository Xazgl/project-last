import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { MenuBar } from '../../src/component/Menu'

import { useRef, useState } from 'react'
import BarMenu from '../../src/component/BarMenu'
import { RegComponent } from '../../src/component/admin/Reg'
import { MenuBarNew } from '../../src/component/actual/menuNew/Menu'
import { Modal } from '../../src/component/Modal'

const RegAdmin: NextPage = () => {

  const refSales = useRef<HTMLDivElement>(null)
  const refTop = useRef<HTMLDivElement>(null)
  const refContact = useRef<HTMLDivElement>(null)
  const refAdvatages = useRef<HTMLDivElement>(null)
  const refFooter = useRef<HTMLDivElement>(null)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Head>
        <title>REG</title>
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuBarNew setShowModal={setShowModal} />
      <RegComponent />
      {
        showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
      }
    </>
  )
}

export default RegAdmin
