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
                <Image src="/logo/logo.png" width={25} height={0} />
            </div>

            <div className="hidden sm:flex justify-between items-center w-[55%] md:w-[50%] lg:w-[32%] text-sm">
                <Link href="/">Projects</Link>
                <Link href="/certificate">Certificate</Link>
                <Link href="/">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar