import React from 'react'
import Link from 'next/link'

export default function TalentCard({ name, imageUrl, department, slug }) {

    return (
        <div className="flex my-12">
            <img className="w-20 h-20 lg:w-44 lg:h-44 object-cover rounded-full" src={imageUrl} alt={`${name} profile picture`} />
            <div className="pl-6 flex flex-col justify-between py-1 lg:py-6">
                <div>
                    <h3 className="font-sans font-bold text-lg">{name}</h3>
                    <p>Department: {department}</p>
                </div>

                <Link href={`/candidate/${slug}`}>
                    <a href="" className="underline font-bold"><p>View Candidate Profile</p></a>
                </Link>
            </div>
        </div>
    )
}
