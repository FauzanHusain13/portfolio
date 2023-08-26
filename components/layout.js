import Navbar from './navbar'
import Footer from './footer'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['200', '400', '600', '800']
})
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={`${poppins.className}`}>{children}</main>
      <Footer />
    </>
  )
}