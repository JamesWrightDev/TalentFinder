import React from 'react'
import Tweet from './Tweet';

import twitterData from '../../tweets.json';

export default function TwitterFeed() {
    const {tweets} = twitterData;

    return (
        <>
            <h3 className="font-sans font-bold text-2xl mb-6 text-gray-900">Twitter Feed</h3>
            {
                tweets && tweets.map(tweet => {
                    return(
                        <Tweet tweetData={tweet} key={tweet.id}/>
                    )
                })
            }
        </>
    )
}
