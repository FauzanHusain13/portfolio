import Navbar from './navbar'
import Footer from './footer'
import { Poppins } from 'next/font/google'
import Head from 'next/head'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['200', '400', '600', '800']
})
 
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Fauzan Husain</title>
      </Head>
      <main className={`${poppins.className}`}>{children}</main>
    </>
  )
}