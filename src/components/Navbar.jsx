import React, { useState } from 'react'

const Navbar = () => {

    const [isShowNav, setIsShowNav] = useState(false)

    const handleShowNav = () => {
        setIsShowNav(!isShowNav)
    }

    return (
        <header className="flex justify-between items-center py-4 px-7 bg-[#1A0B2E] relative fixed">

            <img className="w-[25px] h-[25px] md:hidden" src="/images/logo.png" alt="" />

            <i onClick={handleShowNav} className='bx bx-menu text-white text-3xl ml-auto cursor-pointer md:hidden'></i>

            <nav className={`absolute font-['Poppins'] text-white top-full bg-[#11071F] md:bg-[#1A0B2E] ${isShowNav ? "left-0" : "-left-full"} w-full grid text-lg px-2 py-2 gap-2 duration-200 md:static md:grid md:grid-cols-4 md:justify-between md:items-center text-center`}>

                <img className="hidden md:block w-[25px] h-[25px] md:mx-auto" src="/images/logo.png" alt="" />

                <a href="#" className="hover:text-gray-300">Home</a>

                <a href="#" className="hover:text-gray-300">About</a>
                
                <a href="#" className="hover:text-gray-300">Lab</a>
            </nav>
        </header>
    )
}

export default Navbar
