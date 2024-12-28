import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="pb-10 md:pb-14">
      {/* header */}
      <div className='w-[95%] sm:w-[90%] lg:w-[80%] mx-auto mt-10 md:mt-14'>
        <p className="text-white text-sm md:text-base">Hello! I am fauzan husain</p>
        <h1 className='text-5xl md:text-7xl mt-2 font-bold text-white'>
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
        <p className='mt-4 text-white/50 hover:text-white transition-all duration-150 text-sm md:text-base cursor-pointer'>
          Create your website with an attractive user interface and <br />
          complex back end features.
        </p>

        <div className='mt-12 flex gap-4'>
          <Link href="/" className='flex items-center gap-2 text-white text-xs md:text-sm bg-[#D9D9D9]/20 hover:bg-[#D9D9D9]/30 px-5 md:px-6 py-3 rounded-lg transition-all duration-300'>
            <Image src="/icon/whatsapp.png" width={20} height={0} />
            contact me
          </Link>
          <Link href="/" className='flex items-center gap-2 text-white text-xs md:text-sm bg-[#3D3BF3] hover:bg-[#3835d8] px-5 md:px-6 py-3 rounded-lg transition-all duration-300'>
            <Image src="/icon/info.png" width={20} height={0} />
            about me
          </Link>
        </div>
      </div>

      {/* projects */}
      <div className="w-[95%] sm:w-[90%] lg:w-[80%] mx-auto mt-20 md:mt-24">
        <h1 className='text-2xl md:text-4xl text-white font-bold'>
          {'PROJECTS'.split('').map((char, index) => (
            <span
              key={index}
              className='inline-block transition-all hover:bg-[#9694FF] hover:rounded-full duration-200 hover:scale-125 hover:rotate-6 cursor-pointer'
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <p className='text-xs md:text-sm text-white/60 mt-2'>Projects that I only want to showcase</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
          <div className='bg-[#D9D9D9]/10 p-2 pt-3 pb-5 rounded-lg mx-auto'>
            <Image src="/projects/virgo.png" width={500} height={0} className='rounded-lg' />
            <div className='px-2 md:px-4 text-white'>
              <h2 className='text-lg md:text-xl font-semibold mt-2'>Virgo</h2>
              <p className='text-xs md:text-sm mt-1 opacity-60'>Virgo is a social media application with features like social media in general</p>
              <Link href="/" className='flex justify-center bg-[#3D3BF3] hover:bg-[#3734d3] text-xs mt-5 md:mt-8 p-3 rounded-lg transition-all duration-300'>View Details</Link>
            </div>
          </div>
          <div className='bg-[#D9D9D9]/10 p-2 pt-3 pb-5 rounded-lg mx-auto'>
            <Image src="/projects/e-commerce.png" width={500} height={0} className='rounded-lg' />
            <div className='px-2 md:px-4 text-white'>
              <h2 className='text-lg md:text-xl font-semibold mt-2'>E-commerce</h2>
              <p className='text-xs md:text-sm mt-1 opacity-60'>This application has features like e commerce in general, except that payments are still manual.</p>
              <Link href="/" className='flex justify-center bg-[#3D3BF3] hover:bg-[#3734d3] text-xs mt-5 md:mt-8 p-3 rounded-lg transition-all duration-300'>View Details</Link>
            </div>
          </div>
          <div className='bg-[#D9D9D9]/10 p-2 pt-3 pb-5 rounded-lg mx-auto'>
            <Image src="/projects/realtime-chat.png" width={500} height={0} className='rounded-lg' />
            <div className='px-2 md:px-4 text-white'>
              <h2 className='text-lg md:text-xl font-semibold mt-2'>Realtime chat app</h2>
              <p className='text-xs md:text-sm mt-1 opacity-60'>This application is a chat application between users in real time</p>
              <Link href="/" className='flex justify-center bg-[#3D3BF3] hover:bg-[#3734d3] text-xs mt-5 md:mt-8 p-3 rounded-lg transition-all duration-300'>View Details</Link>
            </div>
          </div>
          <div className='bg-[#D9D9D9]/10 p-2 pt-3 pb-5 rounded-lg mx-auto'>
            <Image src="/projects/forest-api.png" width={500} height={0} className='rounded-lg' />
            <div className='px-2 md:px-4 text-white'>
              <h2 className='text-lg md:text-xl font-semibold mt-2'>NPM:forest-api</h2>
              <p className='text-xs md:text-sm mt-1 opacity-60'>npm project for get data from social media</p>
              <Link href="/" className='flex justify-center bg-[#3D3BF3] hover:bg-[#3734d3] text-xs mt-5 md:mt-8 p-3 rounded-lg transition-all duration-300'>View Details</Link>
            </div>
          </div>
        </div>
      </div>

      {/* e-certificate */}
      <div className='w-[95%] sm:w-[90%] lg:w-[80%] mx-auto mt-20 md:mt-24'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>
          {'E-CERTIFICATE'.split('').map((char, index) => (
            <span
              key={index}
              className='inline-block transition-all hover:bg-[#9694FF] hover:rounded-full duration-200 hover:scale-125 hover:rotate-6 cursor-pointer'
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <p className='text-xs md:text-sm text-white/60 mt-2'>Certificate from the training I attended</p>

        <div className='grid gap-4 mt-10'>
          <div className='flex flex-col md:flex-row md:gap-4 bg-[#D9D9D9]/10 p-3 rounded-lg'>
            <Image src="/certificate/certificate-1.png" width={200} height={0} className='rounded-lg w-full flex-1 object-cover' />

            <div className='text-white flex flex-col justify-between flex-1'>
              <div>
                <h2 className='text-lg lg:text-xl font-semibold mt-4 lg:mt-6'>Bootcamp: Fullstack Javascript Developer</h2>
                <p className='mt-2 text-xs sm:text-sm opacity-50 w-full lg:w-full'>In this bootcamp we learn to create and develop <br className='hidden lg:block' /> top up game voucher applications using mongodb,<br className='hidden lg:block' /> expressjs, reactjs, and nodejs.</p>
              </div>
              <div className='mb-6 mt-6'>
                <Image src="/tech/tech1.png" width={200} height={0} className='w-[150px] md:w-[200px]' />
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:gap-4 bg-[#D9D9D9]/10 p-3 rounded-lg'>
            <Image src="/certificate/certificate-2.png" width={200} height={0} className='rounded-lg w-full flex-1 object-cover md:order-2' />

            <div className='text-white flex flex-col justify-between flex-1 md:order-1'>
              <div>
                <h2 className='text-lg lg:text-xl font-semibold mt-4 lg:mt-6'>Bootcamp: CSS Introduction</h2>
                <p className='mt-2 text-xs sm:text-sm opacity-50 w-full lg:w-full'>In this bootcamp we just learn html and css</p>
              </div>
              <div className='mb-6 mt-6'>
                <Image src="/tech/tech2.png" width={200} height={0} className='w-[70px] md:w-[80px]' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* technology */}
      <div className="w-[95%] sm:w-[90%] lg:w-[80%] mx-auto mt-20 md:mt-24">
        <h1 className='text-2xl md:text-4xl text-center text-white font-bold'>
          {'TECHNOLOGY'.split('').map((char, index) => (
            <span
              key={index}
              className='inline-block transition-all hover:bg-[#9694FF] hover:rounded-full duration-200 hover:scale-125 hover:rotate-6 cursor-pointer'
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <p className='text-xs md:text-sm text-white/60 mt-2 text-center'>the technology i use</p>

        <div className="mt-10 grid grid-cols-5 gap-y-16 justify-center">
            <Image src="/icon/mongodb.png" width={40} height={0} className='mx-auto' />
            <Image src="/icon/expressjs.png" width={40} height={0} className='mx-auto' />
            <Image src="/icon/reactjs.png" width={40} height={0} className='mx-auto' />
            <Image src="/icon/nextjs.png" width={40} height={0} className='mx-auto' />
            <Image src="/icon/nodejs.png" width={40} height={0} className='mx-auto' />
            <Image src="/icon/postman.png" width={40} height={0} className='mx-auto' />
            <Image src="/icon/firebase.png" width={40} height={0} className='mx-auto' />
            <Image src="/icon/tailwind.png" width={40} height={0} className='mx-auto' />
            <Image src="/icon/redis.png" width={40} height={0} className='mx-auto' />
            <Image src="/icon/figma.png" width={40} height={0} className='mx-auto' />
        </div>
      </div>

      {/* internship */}
      <div className="w-[95%] sm:w-[90%] lg:w-[80%] mx-auto mt-20 md:mt-28">
        <h1 className='text-2xl md:text-4xl text-white font-bold'>
          {'INTERNSHIP'.split('').map((char, index) => (
            <span
              key={index}
              className='inline-block transition-all hover:bg-[#9694FF] hover:rounded-full duration-200 hover:scale-125 hover:rotate-6 cursor-pointer'
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <p className='text-xs md:text-sm text-white/60 mt-2'>the technology i use</p>

        <div className='grid grid-cols-2 md:grid-cols-3 mt-10'>
          <div className='bg-[#3D3BF3]/25 hover:bg-[#3D3BF3]/10 hover:border transition-all duration-300 cursor-pointer text-white p-6 rounded-xl'>
            <h1 className=''>PT TRANS NASIONAL TEKNOLOGI</h1>
            <p className='opacity-60 text-sm mt-1'>3 month</p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="w-[95%] sm:w-[90%] lg:w-[80%] mx-auto mt-20 md:mt-28">
          <p className='text-center text-sm text-white'>follow my:</p>

          <div className='flex justify-center gap-12 mt-10'>
            <Link href="/">
              <Image src="/icon/instagram.png" width={30} height={0} />
            </Link>
            <Link href="/">
              <Image src="/icon/linkedin.png" width={30} height={0} />
            </Link>
            <Link href="/">
              <Image src="/icon/github.png" width={30} height={0} />
            </Link>
          </div>
      </div>
    </div>
  )
}
