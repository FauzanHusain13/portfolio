import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import ParticlesComponent from '@/components/particles'

export default function Home() {
  return (
    <div className="pb-10 md:pb-14">
      <ParticlesComponent id="particles" />
      <Navbar />
      {/* header */}
      <div className='relative w-[95%] sm:w-[90%] lg:w-[80%] mx-auto mt-10 md:mt-14'>
        <p className="text-white text-sm md:text-base 2xl:text-lg">Hello! I am fauzan husain</p>
        <h1 className='text-5xl md:text-7xl 2xl:text-8xl mt-2 font-bold text-white'>
          {`I'm Fullstack Javascript`.split('').map((char, index) => (
            <span
              key={index}
              className='inline-block transition-all hover:bg-[#9694FF] hover:rounded-full duration-200 hover:scale-125 hover:rotate-6 cursor-pointer'
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
          <br />
          <span className='bg-gradient-to-r from-[#253EE1] to-[#E43581] bg-clip-text text-transparent cursor-pointer'>
            Developer
          </span>
        </h1>
        <p className='mt-4 2xl:text-xl text-white/50 hover:text-white transition-all duration-150 text-sm md:text-base cursor-pointer'>
          Create your website with an attractive user interface and <br />
          complex back end features.
        </p>

        <div className='mt-12 flex gap-4'>
          <Link href="https://wa.me/6289684053091" className='flex items-center gap-2 text-white text-xs md:text-sm 2xl:text-lg bg-[#D9D9D9]/20 hover:bg-[#D9D9D9]/30 px-5 md:px-6 2xl:px-8 py-3 2xl:py-5 rounded-lg transition-all duration-300'>
            <Image src="/icon/whatsapp.png" width={20} height={0} />
            contact me
          </Link>
          <Link href="/about" className='flex items-center gap-2 text-white text-xs md:text-sm 2xl:text-lg bg-[#3D3BF3] hover:bg-[#3835d8] px-5 md:px-6 2xl:px-8 py-3 2xl:py-5 rounded-lg transition-all duration-300'>
            <Image src="/icon/info.png" width={20} height={0} />
            about me
          </Link>
        </div>
      </div>

      {/* projects */}
      <div className="relative w-[95%] sm:w-[90%] lg:w-[80%] mx-auto mt-20 md:mt-24">
        <h1 className='text-2xl md:text-4xl 2xl:text-6xl text-white font-bold'>
          {'REAL PROJECTS'.split('').map((char, index) => (
            <span
              key={index}
              className='inline-block transition-all hover:bg-[#9694FF] hover:rounded-full duration-200 hover:scale-125 hover:rotate-6 cursor-pointer'
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <p className='text-xs md:text-sm 2xl:text-lg text-white/60 mt-2'>Projects that I only want to showcase</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <div className='bg-[#D9D9D9]/10 p-2 pt-3 pb-5 rounded-lg mx-auto w-full'>
            <div className='px-2 md:px-4'>
              <Image src="/projects/virgo.png" width={500} height={0} className='rounded-lg w-full mx-auto' />
              <div className='text-white'>
                <h2 className='text-lg 2xl:text-2xl md:text-xl font-semibold mt-2 2xl:mt-4'>Virgo</h2>
                <p className='text-xs md:text-sm 2xl:text-lg mt-1 2xl:mt-2 opacity-60'>Virgo is a social media application with features like social media in general</p>
                <Link href="https://github.com/FauzanHusain13/virgo-app-server" className='flex justify-center bg-[#3D3BF3] hover:bg-[#3734d3] text-xs 2xl:text-base mt-5 md:mt-8 p-3 2xl:p-5 rounded-lg transition-all duration-300'>View Details</Link>
              </div>
            </div>
          </div>
          <div className='bg-[#D9D9D9]/10 p-2 pt-3 pb-5 rounded-lg mx-auto w-full'>
            <div className='px-2 md:px-4'>
              <Image src="/projects/kebunmu.png" width={500} height={0} className='rounded-lg w-full mx-auto' />
              <div className='text-white'>
                <h2 className='text-lg 2xl:text-2xl md:text-xl font-semibold mt-2 2xl:mt-4'>Kebunmu</h2>
                <p className='text-xs md:text-sm 2xl:text-lg mt-1 2xl:mt-2 opacity-60'>Helping farmers to record document about their farm with integrated Artificial Intelligence features</p>
                <Link href="https://kebunmu.vercel.app" className='flex justify-center bg-[#3D3BF3] hover:bg-[#3734d3] text-xs 2xl:text-base mt-5 md:mt-8 p-3 2xl:p-5 rounded-lg transition-all duration-300'>View Details</Link>
              </div>
            </div>
          </div>
          <div className='bg-[#D9D9D9]/10 p-2 pt-3 pb-5 rounded-lg mx-auto w-full'>
            <div className='px-2 md:px-4'>
              <Image src="/projects/e-commerce.png" width={500} height={0} className='rounded-lg w-full mx-auto' />
              <div className='text-white'>
                <h2 className='text-lg 2xl:text-2xl md:text-xl font-semibold mt-2 2xl:mt-4'>E-commerce</h2>
                <p className='text-xs md:text-sm 2xl:text-lg mt-1 2xl:mt-2 opacity-60'>This application has features like e commerce in general, except that payments are still manual.</p>
                <Link href="https://github.com/FauzanHusain13/e-commerce-server" className='flex justify-center bg-[#3D3BF3] hover:bg-[#3734d3] text-xs 2xl:text-base mt-5 md:mt-8 p-3 2xl:p-5 rounded-lg transition-all duration-300'>View Details</Link>
              </div>    
            </div>
          </div>
          <div className='bg-[#D9D9D9]/10 p-2 pt-3 pb-5 rounded-lg mx-auto w-full'>
            <div className='px-2 md:px-4'>
              <Image src="/projects/realtime-chat.png" width={500} height={0} className='rounded-lg w-full mx-auto' />
              <div className='text-white'>
                <h2 className='text-lg 2xl:text-2xl md:text-xl font-semibold mt-2 2xl:mt-4'>Realtime chat app</h2>
                <p className='text-xs md:text-sm 2xl:text-lg mt-1 2xl:mt-2 opacity-60'>This application is a chat application between users in real time</p>
                <Link href="https://github.com/FauzanHusain13/server-chat" className='flex justify-center bg-[#3D3BF3] hover:bg-[#3734d3] text-xs 2xl:text-base mt-5 md:mt-8 p-3 2xl:p-5 rounded-lg transition-all duration-300'>View Details</Link>
              </div>
            </div>
          </div>
          <div className='bg-[#D9D9D9]/10 p-2 pt-3 pb-5 rounded-lg mx-auto w-full'>
            <div className='px-2 md:px-4'>
              <Image src="/projects/forest-api.png" width={500} height={0} className='rounded-lg w-full mx-auto' />
              <div className='text-white'>
                <h2 className='text-lg 2xl:text-2xl md:text-xl font-semibold mt-2 2xl:mt-4'>NPM:forest-api</h2>
                <p className='text-xs md:text-sm 2xl:text-lg mt-1 2xl:mt-2 opacity-60'>npm project for get data from social media</p>
                <Link href="https://www.npmjs.com/package/forest-api" className='flex justify-center bg-[#3D3BF3] hover:bg-[#3734d3] text-xs 2xl:text-base mt-5 md:mt-8 p-3 2xl:p-5 rounded-lg transition-all duration-300'>View Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* e-certificate */}
      <div className='relative w-[95%] sm:w-[90%] lg:w-[80%] mx-auto mt-20 md:mt-24'>
        <h1 className='text-2xl md:text-4xl 2xl:text-6xl text-white font-bold'>
          {'E-CERTIFICATE'.split('').map((char, index) => (
            <span
              key={index}
              className='inline-block transition-all hover:bg-[#9694FF] hover:rounded-full duration-200 hover:scale-125 hover:rotate-6 cursor-pointer'
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <p className='text-xs md:text-sm 2xl:text-lg text-white/60 mt-2'>Certificate from the training I attended</p>

        <div className='grid gap-4 mt-10'>
          <div className='flex flex-col md:flex-row md:gap-4 bg-[#D9D9D9]/10 p-3 rounded-lg'>
            <Image src="/certificate/certificate-1.png" width={200} height={0} className='rounded-lg w-full flex-1 object-cover' />

            <div className='text-white flex flex-col justify-between flex-1'>
              <div>
                <h2 className='text-lg md:text-xl 2xl:text-3xl font-semibold mt-4 lg:mt-6 2xl:mt-8'>Bootcamp: Fullstack Javascript Developer</h2>
                <p className='text-xs md:text-sm 2xl:text-lg mt-4 2xl:mt-6 opacity-60'>In this bootcamp we learn to create and develop <br className='hidden lg:block' /> top up game voucher applications using mongodb,<br className='hidden lg:block' /> expressjs, reactjs, and nodejs.</p>
              </div>
              <div className='mb-6 mt-6'>
                <Image src="/tech/tech1.png" width={200} height={0} className='w-[150px] md:w-[200px] 2xl:w-[300px]' />
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:gap-4 bg-[#D9D9D9]/10 p-3 rounded-lg'>
            <Image src="/certificate/certificate-2.png" width={200} height={0} className='rounded-lg w-full flex-1 object-cover md:order-2' />

            <div className='text-white flex flex-col justify-between flex-1 md:order-1'>
              <div>
                <h2 className='text-lg md:text-xl 2xl:text-3xl font-semibold mt-4 lg:mt-6 2xl:mt-8'>Bootcamp: CSS Introduction</h2>
                <p className='text-xs md:text-sm 2xl:text-lg mt-4 2xl:mt-6 opacity-60'>In this bootcamp we just learn html and css</p>
              </div>
              <div className='mb-6 mt-6'>
                <Image src="/tech/tech2.png" width={200} height={0} className='w-[70px] md:w-[80px] 2xl:w-[110px]' />
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:gap-4 bg-[#D9D9D9]/10 p-3 rounded-lg'>
            <Image src="/certificate/certificate-3.png" width={200} height={0} className='rounded-lg w-full flex-1 object-cover' />

            <div className='text-white flex flex-col justify-between flex-1'>
              <div>
                <h2 className='text-lg md:text-xl 2xl:text-3xl font-semibold mt-4 lg:mt-6 2xl:mt-8'>Bootcamp: Backend Javascript Developer</h2>
                <p className='text-xs md:text-sm 2xl:text-lg mt-4 2xl:mt-6 opacity-60'>In this bootcamp I learned by working on several tasks, <br className='hidden lg:block' /> and the final project was to create an API project <br className='hidden lg:block' /> that connects to the database.</p>
              </div>
              <div className='mb-6 mt-6'>
                <Image src="/tech/tech1.png" width={200} height={0} className='w-[150px] md:w-[200px] 2xl:w-[300px]' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* technology */}
      <div className="relative w-[95%] sm:w-[90%] lg:w-[80%] mx-auto mt-20 md:mt-24">
        <h1 className='text-2xl md:text-4xl 2xl:text-6xl text-center text-white font-bold'>
          {'TECHNOLOGY'.split('').map((char, index) => (
            <span
              key={index}
              className='inline-block transition-all hover:bg-[#9694FF] hover:rounded-full duration-200 hover:scale-125 hover:rotate-6 cursor-pointer'
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <p className='text-xs md:text-sm 2xl:text-lg text-white/60 mt-2 text-center'>the technology i use</p>

        <div className="mt-10 grid grid-cols-5 gap-y-16 justify-center">
            <Image src="/icon/mongodb.png" width={40} height={0} className='mx-auto w-[40px] 2xl:w-[60px]' />
            <Image src="/icon/expressjs.png" width={40} height={0} className='mx-auto w-[40px] 2xl:w-[60px]' />
            <Image src="/icon/reactjs.png" width={40} height={0} className='mx-auto w-[40px] 2xl:w-[60px]' />
            <Image src="/icon/nextjs.png" width={40} height={0} className='mx-auto w-[40px] 2xl:w-[60px]' />
            <Image src="/icon/nodejs.png" width={40} height={0} className='mx-auto w-[40px] 2xl:w-[60px]' />
            <Image src="/icon/postman.png" width={40} height={0} className='mx-auto w-[40px] 2xl:w-[60px]' />
            <Image src="/icon/firebase.png" width={40} height={0} className='mx-auto w-[40px] 2xl:w-[60px]' />
            <Image src="/icon/tailwind.png" width={40} height={0} className='mx-auto w-[40px] 2xl:w-[60px]' />
            <Image src="/icon/redis.png" width={40} height={0} className='mx-auto w-[40px] 2xl:w-[60px]' />
            <Image src="/icon/figma.png" width={40} height={0} className='mx-auto w-[40px] 2xl:w-[60px]' />
        </div>

        <Link href="/investment">
          <div className='text-white text-center mt-16 rounded-lg mx-auto w-[60%] md:w-[40%] lg:w-[30%] text-sm p-4 bg-[#3D3BF3] hover:bg-[#3835d8] transition-all duration-300'>
            Portfolio Investment
          </div>
        </Link>
      </div>

      {/* internship */}
      <div className="relative w-[95%] sm:w-[90%] lg:w-[80%] mx-auto mt-20 md:mt-28">
        <h1 className='text-2xl md:text-4xl 2xl:text-6xl text-white font-bold'>
          {'INTERNSHIP'.split('').map((char, index) => (
            <span
              key={index}
              className='inline-block transition-all hover:bg-[#9694FF] hover:rounded-full duration-200 hover:scale-125 hover:rotate-6 cursor-pointer'
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <p className='text-xs md:text-sm 2xl:text-lg text-white/60 mt-2'>my internship in tech company</p>

        <div className='grid grid-cols-2 md:grid-cols-3 mt-10'>
          <div className='bg-[#3D3BF3]/25 hover:bg-[#3D3BF3]/10 hover:border transition-all duration-300 cursor-pointer text-white p-6 rounded-xl'>
            <h1 className='2xl:text-xl'>PT TRANS NASIONAL TEKNOLOGI</h1>
            <p className='opacity-60 text-sm 2xl:text-lg mt-1'>3 month</p>
            <Image src="/tech/tech1.png" width={200} height={0} className='mt-2' />
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="relative w-[95%] sm:w-[90%] lg:w-[80%] mx-auto mt-20 md:mt-28">
          <p className='text-center text-sm text-white'>follow my:</p>

          <div className='flex justify-center gap-12 mt-10'>
            <Link href="https://www.instagram.com/_fauzanhusain/">
              <Image src="/icon/instagram.png" width={30} height={0} className='2xl:w-[40px]' />
            </Link>
            <Link href="https://www.linkedin.com/in/achmadfauzanhusain">
              <Image src="/icon/linkedin.png" width={30} height={0} className='2xl:w-[40px]' />
            </Link>
            <Link href="https://github.com/achmadfauzanhusain">
              <Image src="/icon/github.png" width={30} height={0} className='2xl:w-[40px]' />
            </Link>
          </div>
      </div>
    </div>
  )
}
