import { Poppins } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['200', '400', '600', '800']
})

const Navbar = () => {
    return (
        <div className={`${poppins.className} flex justify-center sm:justify-between px-20 py-6`}>
            <div>
                <Image src="/logo-fauzan.png" width={70} height={0} />
            </div>

            <div className="hidden sm:flex justify-between items-center w-[40%] md:w-[28%] lg:w-[20%] text-sm">
                <Link href="/">Projects</Link>
                <Link href="/">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar