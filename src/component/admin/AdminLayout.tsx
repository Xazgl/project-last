
import Head from "next/head"
import AdminBar from "../AdminBar"
import BarMenu from "../BarMenu"
import { MenuBar } from "../Menu"


const AdminLayout: React.FC<{title: string}> = ({children, title}) => {
    return (
    <>
        <Head>
          <title>{title}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <MenuBar  refs= {refs}/> */}
        <AdminBar />
        <BarMenu />
        {children}
    </>
    )
}

export default AdminLayout