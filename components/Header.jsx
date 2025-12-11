import React from 'react'
import Link from 'next/link';

const Header = () => {
    return (
            <header className="hero py-4  mx-auto max-w-7xl flex items-center justify-between px-2">
                <Link href={"/"} className="text-3xl text-green-600">Grinko Company <i className="text-md align-text-top text-[20px] pi pi-sparkles"></i></Link>
                <nav className="flex gap-5">
                    <ul className="hidden md:flex text-xl gap-8 items-center">
                        <Link href={"/"}>Home</Link>
                        <a href="#services">Services</a>
                        <Link href={"/about-us"}>About Us</Link>
                        <Link href={"/careers"}>Careers</Link>
                        <li><a href={"#contact"}> Contact us </a> </li>

                    </ul>
                <Link href="/book-cleaning">
                        <button className="bg-green-600 text-white rounded-2xl p-2 cursor-pointer">Get Quotes</button>
                    </Link>
                </nav>
            </header>
    )
}
export default Header
