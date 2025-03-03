import Image from "next/image"

const Navbar = () => {
    return (
        <div className="relative flex justify-center p-6">
            <Image src="/logo/logo-white.png" width={25} height={0} className="w-[25px] 2xl:w-[35px]" />
        </div>
    )
}

export default Navbar