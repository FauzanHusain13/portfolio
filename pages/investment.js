import Navbar from "@/components/navbar"
import ParticlesComponent from '@/components/particles'

const Investment = () => {
    return (
        <div className="pb-10 md:pb-14">
            <ParticlesComponent id="particles" />
            <Navbar />
            <div className="relative w-[90%] sm:w-[90%] lg:w-[80%] mx-auto mt-10 md:mt-20">
                {/* thesis */}
                <div>
                    <h1 className='text-2xl md:text-5xl 2xl:text-8xl text-white font-bold'>
                    I believe Blockchain Technology <br /> will rule DeFi and Dapp in the future.
                    </h1>
                </div>

                {/* portfolio investment */}
                <div className="text-white mt-20 md:mt-36">
                    <h2 className="text-xl md:text-4xl 2xl:text-5xl">My Liquid Assets</h2>
                </div>
            </div>
        </div>
    )
}

export default Investment