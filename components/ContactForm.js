import React from 'react'
import Button from './Button'

export default function ContactForm() {
    return (
        <div className="shadow-lg p-5 rounded-lg">
        <h3 className="font-sans font-bold text-2xl mb-6 text-gray-900">Contact Us</h3>
        <form>
            {/* Name Input */}
            <div className="my-5 text-sm">
                <label htmlFor="name" className="block text-black">Name</label>
                <input type="text"  id="name" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="" />
            </div>
            <div className="my-5 text-sm">
                <label htmlFor="email" className="block text-black">Email</label>
                <input type="text"  id="email" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="" />
            </div>
            <div className="my-5 text-sm">
                <label htmlFor="message" className="block text-black">Message</label>
                <textarea id="message" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full resize-none" />
            </div>
            <Button label="Send Message"/>
        </form>
        </div>
    )
}
