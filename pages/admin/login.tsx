import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { MenuBar } from '../../src/component/Menu'
import { Login } from '../../src/component/Login'
import { useRef, useState } from 'react'
import BarMenu from '../../src/component/BarMenu'
import { Modal } from '../../src/component/Modal'
import { MenuBarNew } from '../../src/component/actual/menuNew/Menu'
import { FooterMainNew } from '../../src/component/actual/menuNew/FooterMain'



const Admin: NextPage = () => {
  const [showModal, setShowModal] = useState(false)
  const refSales = useRef<HTMLDivElement>(null)
  const refTop = useRef<HTMLDivElement>(null)
  const refContact = useRef<HTMLDivElement>(null)
  const refAdvatages = useRef<HTMLDivElement>(null)
  const refFooter = useRef<HTMLDivElement>(null)

  return (
    <>
      <Head>
        <title>LOGIN</title>
        <meta name="robots" content="noindex"  />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuBarNew setShowModal={setShowModal} />
      <BarMenu />
      <Login />
      <FooterMainNew setShowModal={setShowModal} refs={{ refFooter }} />

      {
        showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
      }
    </>
  )
}

export default Admin
