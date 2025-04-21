import Image from "next/image"
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
                    <h1 className='text-4xl md:text-5xl 2xl:text-7xl text-white font-bold'>
                    I believe Blockchain <br className="sm:hidden" /> Technology <br /> will rule DeFi and Dapp <br className="sm:hidden" /> in the future.
                    </h1>
                </div>

                {/* portfolio investment */}
                <div className="text-white mt-20 md:mt-36">
                    <h2 className="text-3xl md:text-4xl 2xl:text-5xl">My Liquid Assets</h2>

                    <div className="mt-8 md:-12 flex gap-8 justify-start items-center bg-white px-8 rounded-lg">
                        <div className="flex-shrink-0">
                            <Image className="w-[60px] 2xl:w-[80px]" src="/icon/bitcoin.png" width={60} height={60} alt="Bitcoin" />
                        </div>
                        <div className="flex-shrink-0">
                            <Image className="w-[60px] 2xl:w-[80px]" src="/icon/ethereum.png" width={60} height={60} alt="Ethereum" />
                        </div>
                        <div className="flex-shrink-0">
                            <Image className="w-[200px] 2xl:w-[250px]" src="/icon/nvidia.png" width={200} height={60} alt="Nvidia" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Investment