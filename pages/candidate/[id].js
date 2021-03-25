import React from 'react'
import Layout from '../../components/Layout';
import client, { getAllCandidates } from '../../util/prismic';

export default function CandidatePage(props) {
    const { data } = props.doc;
    
    return (
        <Layout>
            <div className="flex flex-col items-center">
                <img src={data.candidate_avatar.small.url} className="rounded-full w-52 h-52 mb-12" alt=""/>
                <h1 className="font-bold text-center text-6xl">{data.candidate_name[0].text}</h1>
            </div>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    try {
        const doc = await client.getByUID('candidate', params.id)

        return {
            props: {
                doc: doc,
            },
        }
    } catch (e) {
        console.log(e);
    }
}
export async function getStaticPaths() {
    const paths = await getAllCandidates();
    const params = paths.results.map(path => {
        return { "params": { id: path.uid } };
    })

    return {
        paths: params,
        fallback: false,
    };
}