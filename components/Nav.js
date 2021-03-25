import React from 'react'
import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="bg-white py-6 px-6 lg:px-20 flex justify-between ">
            <Link href="/">
                <img src="/assets/logo.svg" alt="" className="w-12 h-12 cursor-pointer" alt="Logo"/>
            </Link>
            <Link href="/talent">
                <a className="underline">Talent Finder</a>
            </Link>
        </nav>
    )
}
