import React from 'react'

export default function Button({label}) {
    return <button type="button" className="focus:outline-none text-black text-sm py-2 px-10 rounded border border-black hover:bg-black hover:text-white hover:shadow-lg transition-colors">{label}</button>
}
