import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar';
import TalentCard from './TalentCard';

import { getAllCandidates, getCandidateByDepartment } from '../../util/prismic';

export default function TalentFinder() {
    const [candidates, setCandidates] = useState(false);

    useEffect(() => {
        fetchResults();
    }, []);

    const fetchResults = async () => {
        const res = await getAllCandidates();
        const { results } = res;
        setCandidates(results);
    }

    const filterResults = async (department) => {
        if(!department) {
            fetchResults();
            return;
        }
        
        const res = await getCandidateByDepartment(department);
        const { results } = res;
        setCandidates(results);
    }
    return (
        <div>
            <h2 className="font-sans font-bold text-2xl text-center pb-6">Featured Talent</h2>
            <SearchBar handleFilter={filterResults} />
            {
                candidates && candidates.map(candidate => {
                    return (
                        <TalentCard
                            key={candidate.id}
                            name={candidate.data.candidate_name[0].text}
                            imageUrl={candidate.data.candidate_avatar.url}
                            department={candidate.data.department}
                            slug={candidate.uid}
                        />
                    )
                })
            }
        </div>
    )
}
