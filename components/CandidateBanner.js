import React from 'react'
import CandidateCard from '../components/CandidateCard';

export default function CandidateBanner({candidates}) {
    return (
        <div className="my-24">
            <h2 className="text-3xl font-bold font-sans text-center mb-7">Featured Candidates</h2>
            <div className="flex justify-center flex-wrap">
                {
                    candidates && candidates.map(candidate => {
                        return(
                            <CandidateCard key={candidate.id} slug={candidate.uid} imageUrl={candidate.data.candidate_avatar.small.url}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
