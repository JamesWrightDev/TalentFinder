import React from 'react'
import Footer from './Footer';
import Nav from './Nav';

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <div className="relative min-h-screen">
                <main className="container mx-auto px-5 md:px-24 pb-32 ">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}
