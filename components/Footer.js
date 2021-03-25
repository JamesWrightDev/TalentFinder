import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="w-full absolute b-0 h-44 px-6 lg:px-20 py-4">
            <div className="flex flex-col lg:flex-row">
                <img src="/assets/logo.svg" alt="" className="w-12 h-12 cursor-pointer" alt="Logo" />
                <div className="lg:px-24 py-8">
                    <h5 className="font-bold text-lg pb-6">Links</h5>
                    <ul>
                        <li>
                            <a href="">Contact us</a>
                        </li>
                        <li>
                            <a href="">About us</a>
                        </li>
                        <li>
                            <a href="">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div className="py-8 lg:px-14">
                    <h5 className="font-bold text-lg pb-6">Address</h5>
                    <p>1 Fake Street</p>
                    <p>Manchester</p>
                    <p>M1 1AB</p>
                </div>
            </div>
        </footer>
    )
}
