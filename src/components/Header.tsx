'use client';
import { LOGO } from "@/utils/constants";
import { useEffect, useState } from "react";
import HeaderMenu from "./HeaderMenu";
import { BiBell, BiSearch } from 'react-icons/bi'
import Link from 'next/link'
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <header className={`${isScrolled && 'bg-[#141414]'} flex justify-between`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                />
                <HeaderMenu />
                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">My List</li>
                    <li className="headerLink">Browse by Languages</li>
                </ul>
            </div>

            <div className="flex items-center space-x-4 text-sm font-light">
                <BiSearch className="hidden h-6 w-6 sm:inline" />
                <BiBell className="h-6 w-6" />
                <Link href="/account">
                    <img
                        src="https://rb.gy/g1pwyx"
                        alt="image"
                        className="cursor-pointer rounded"
                    />
                </Link>
            </div>

        </header>
    );
}

export default Header;