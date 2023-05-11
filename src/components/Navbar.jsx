import React from 'react'

const Navbar = () => {
    return (
        <header className="flex justify-between items-center py-4 pr-5 text-xl">
            <img className="w-[22px] h-[22px] mx-auto" src="/images/logo.png" alt="" />
            <nav className="text-white">
                <ul className="flex justify-between gap-4">
                    <li className=""><a href="#">Home</a></li>
                    <li className=""><a href="#">About</a></li>
                    <li className=""><a href="#">Lab</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
