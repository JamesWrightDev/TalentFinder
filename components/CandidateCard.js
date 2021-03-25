import React from 'react'
import Link from 'next/link'

export default function CandidateCard({name, imageUrl, slug}) {
    return (
        <Link href={`/candidate/${slug}`}>
            <div className="w-40 h-40 mb-4 mr-4 cursor-pointer hover:shadow-md transition-shadow rounded-full">
                <img src={imageUrl} alt="" className="object-cover h-full w-full rounded-full" />
            </div>
        </Link>
    )
}
