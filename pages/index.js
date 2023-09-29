import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';
import AOS from "aos"
import 'aos/dist/aos.css'; // Import stylesheet

export default function Home() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <div className="pb-32 md:pb-44">
      <div className="mt-28 md:mt-36 text-center">
        <h1 className="text-xl md:text-2xl">
          I'm <span className="text-[#D00303] font-semibold">Fauzan Husain</span>, Fullstack <span className="text-[#EEAB00] font-semibold">javascript</span><br /> developer. But specific for backend
        </h1>

        <div className="mt-8 text-sm">
          <Link href="https://wa.me/6282187107029" className="text-[#D00303] border-2 border-[#D00303] hover:bg-[#D00303] hover:text-white transition-all px-5 sm:px-6 py-2 rounded-md">
            Contact me
          </Link>
        </div>

        <div data-aos="fade-up" className="mt-10 flex justify-evenly w-[40%] sm:w-[25%] lg:w-[15%] mx-auto">
          <Link href="https://github.com/FauzanHusain13" className="opacity-70 hover:opacity-100 transition">
            <Image src="/icon-github.png" width={30} height={30} />
          </Link>
          <Link href="https://www.instagram.com/_fauzanhusain" className="opacity-70 hover:opacity-100 transition">
            <Image src="/icon-instagram.png" width={30} height={30} />
          </Link>
        </div>

        {/* icon scroll down */}
        <div className="hidden md:block animate-bounce w-12 h-12 p-4 rounded-full bg-white shadow-lg mx-auto mt-28">
          <Image src="/icon-scroll.png" width={45} height={45}/>
        </div>
      </div>

      <hr className="mt-20 sm:mt-12 w-1/2 m-auto" />

      {/* project */}
      <div className="mt-24 px-8 lg:px-36">
        <h1 className="text-xl md:text-2xl">Projects</h1>

        <div className="grid sm:grid-cols-2 gap-5 mt-6">
          <Link href="https://www.npmjs.com/package/forest-api" data-aos="fade-right" className="hover:shadow-xl p-5 rounded-md transition duration-300">
            <Image src="/project/forest-api.png" width={500} height={100} />
            <h1 className="mt-3 text-lg">forest-api</h1>
            <p className="text-slate-500 w-[95%] md:w-[90%] mt-1">forest-api is npm package for get data about social media</p>
          </Link>

          <Link href="https://www.npmjs.com/package/live-age" data-aos="fade-left" className="hover:shadow-xl p-5 rounded-md transition duration-300">
            <Image src="/project/live-age.png" width={500} height={100} />
            <h1 className="mt-3 text-lg">live-age</h1>
            <p className="text-slate-500 w-[95%] md:w-[90%] mt-1">live-age is npm package to display age data without having to change the code every year</p>
          </Link>
        </div>
      </div>

      {/* tech stack */}
      <div className="mt-44 md:mt-56 px-8 lg:px-36">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-14 md:gap-0 items-center w-full">
          <Image src="/tech-stack/mongodb.png" width={50} height={50} className="m-auto w-[40px] lg:w-[50px]" />
          <Image src="/tech-stack/express.png" width={50} height={50} className="m-auto w-[40px] lg:w-[50px]" />
          <Image src="/tech-stack/reactjs.png" width={50} height={50} className="m-auto w-[40px] lg:w-[50px]" />
          <Image src="/tech-stack/nextjs.png" width={50} height={50} className="m-auto w-[40px] lg:w-[50px]" />
          <Image src="/tech-stack/tailwindcss.png" width={50} height={50} className="m-auto w-[40px] lg:w-[50px]" />
          <Image src="/tech-stack/nodejs.png" width={50} height={50} className="m-auto w-[40px] lg:w-[50px]" />
        </div>
      </div>

      {/* contact */}
      <div className="mt-44 md:mt-56 px-8 lg:px-36">
        <h1 className="text-2xl">Contact</h1>

        <div className="grid sm:grid-cols-2 mt-8">
          <div data-aos="fade-right">
            <p>do you need a website for a brand or personal <br /> website? or a collab to create a project</p>
            <p className="mt-8">email : achmadfauzan1340@gmail.com</p>
            <p>phone : 0821 - 8710 - 7029</p>
          </div>

          <div data-aos="fade-up" className="mt-16 sm:mt-0 flex justify-evenly items-center w-1/2 mx-auto">
            <Link href="https://github.com/FauzanHusain13" className="opacity-70 hover:opacity-100 transition">
              <Image src="/icon-github.png" width={30} height={30} />
            </Link>
            <Link href="https://www.instagram.com/_fauzanhusain" className="opacity-70 hover:opacity-100 transition">
              <Image src="/icon-instagram.png" width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
