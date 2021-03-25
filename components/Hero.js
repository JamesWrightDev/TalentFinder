import React from 'react'
import Button from './Button';
export default function Hero({textHeader, textBody, cta, centered}) {
    return (
        <section className="my-24">
            <div className={`w-full  ${centered ? 'lg:text-center' : 'lg:w-2/3'}`}>
                <h1 className="mb-5 text-6xl uppercase text-sans font-bold text-gray-900">{textHeader}</h1>
                <p className="mb-10 font-sans">{textBody}</p>
                {
                    cta && (
                        <Button label="Get Started" />
                    )
                }
            </div>
        </section>
    )
}
