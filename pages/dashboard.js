import Head from 'next/head'
import Layout from '../components/shared/Layout'
import NetWorthIntro from '../components/NetWorthIntro'
import NavBar from '../components/desktop/NavBar'
import MobileHeader from '../components/mobile/Header'
import MobileNavBar from '../components/mobile/NavBar'
import Profile from '../components/mobile/Profile'

export default function DashboardPage() {
   return (
      <>
         <Head>
            <title>Wallet - Dashboard</title>
            <link rel="icon" href="/icons/favicon.svg" />
         </Head>
         <Layout>
            <NavBar />
            <MobileHeader
               right={<Profile />}
            />
            <main className="flex-1 mt-4">
               <NetWorthIntro />
            </main>
            <MobileNavBar />
         </Layout>
      </>
   )
}
