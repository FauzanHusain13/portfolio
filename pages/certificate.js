import Image from "next/image"

const Certificate = () => {
    return (
        <div className="px-8 lg:px-36 mt-10 md:mt-16 pb-20">
            <h1 className="text-2xl">Certificate</h1>

            <div className="grid sm:grid-cols-2 gap-5 mt-6">
                <div className="hover:shadow-xl p-5 pb-8 rounded-md transition duration-300">
                    <Image src="/certificate/certificate-1.png" width={400} height={400} className="w-full m-auto border-2" />
                    <p className="mt-3 font-semibold">Fullstack Javascript Developer 2021: Website Top Up Voucher Game</p>
                </div>
                <div className="hover:shadow-xl p-5 pb-8 rounded-md transition duration-300">
                    <Image src="/certificate/certificate-2.png" width={400} height={400} className="w-full m-auto border-2" />
                    <p className="mt-3 font-semibold">Cloud Practioner Essentials (Belajar Dasar AWS Cloud)</p>
                </div>
            </div>
        </div>
    )
}

export default Certificate