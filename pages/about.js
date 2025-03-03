import Link from "next/link"
import Image from "next/image"

const About = () => {
    return (
        <div className="pb-10 md:pb-14">
            <div className="relative w-[90%] sm:w-[90%] lg:w-[80%] mx-auto mt-10 md:mt-20">
                <div className="flex gap-6">
                    <Link href="/">
                        <p className="text-3xl md:text-4xl 2xl:text-6xl text-white font-bold">X</p>
                    </Link>
                    <h1 className="text-3xl md:text-4xl 2xl:text-6xl text-white font-bold">ABOUT ME</h1>
                </div>

                {/* content */}
                <div className="mt-10 md:mt-14 text-white/80 text-sm md:text-base">
                    <p className="md:w-[75%] leading-loose 2xl:leading-loose 2xl:text-xl">Halo, saya Achmad Fauzan Husain. Seorang fullstack web developer yang juga gemar mendesain web. Sedang sibuk mengejar mimpi sambil menikmati prosesnya. Biasa diberi ucapan selamat pada tanggal 13 agustus</p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-5">
                        <Image
                            src="/about.jpeg"
                            width={200}
                            height={0}
                            className="flex-1 w-full max-h-[400px] rounded-2xl object-cover object-bottom"
                        />

                        <div className="flex justify-between gap-4 flex-col flex-1 leading-loose 2xl:leading-loose 2xl:text-xl">
                            <div>
                                <p className="mt-4 2xl:mt-0">Saya belajar pembuatan website disaat kelas 2 smp secara otodidak dan melanjutkan belajar di smk di jurusan rekayasa perangkat lunak.</p>
                                <p className="mt-8">Sekarang saya mengambil jurusan Rekayasa Perangkat Lunak di <span className="font-semibold">Telkom University</span>.</p>
                                <p className="mt-8">Saya suka olahraga dan sesekali nonton film.</p>
                            </div>

                            <div className="mb-12">
                                <p className="text-sm">follow my:</p>
                                <div className="flex gap-10 mt-5">
                                    <Link href="https://www.instagram.com/_fauzanhusain/">
                                        <Image src="/icon/instagram.png" width={25} height={0} className="2xl:w-[35px]" />
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/fauzan-husain-182851246/">
                                        <Image src="/icon/linkedin.png" width={25} height={0} className="2xl:w-[35px]" />
                                    </Link>
                                    <Link href="https://github.com/FauzanHusain13">
                                        <Image src="/icon/github.png" width={25} height={0} className="2xl:w-[35px]" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About