import React from 'react'

export default function Tweet({ tweetData }) {
    const { tweet, userName, imageUrl } = tweetData;
    return (
        <div className="flex py-6">
            <img className="rounded-full w-12 h-12" src={imageUrl} alt={`${userName} profile image`} />
            <div className="pl-6">
                <h4 className="font-bold text-xl pb-2">{userName}</h4>
                <p>{tweet}</p>
            </div>
        </div>
    )
}
