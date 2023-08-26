import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['200', '400', '600', '800']
})

const Footer = () => {
    return (
        <div className={`${poppins.className} p-14 bg-[#2c2c2c]`}>
            <p className="text-xs text-white text-center">Copyright &copy; 2023 Fauzan Husain</p>
        </div>
    )
}

export default Footer