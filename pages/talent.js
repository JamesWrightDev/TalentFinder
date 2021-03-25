import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import TalentFinder from '../components/TalentFinder/TalentFinder';

export default function Talent() {
    return (
        <Layout>
            <Hero centered cta={false} textBody="sit amet, consectetur adipiscing elit. Nam aliquam elit quis turpis consectetur porta. Vivamus tempus, ligula non sodales maximus, turpis nisi feugiat lorem, vel varius dui velit vel dui. Cras venenatis erat nec est mollis, ac rutrum metus sodales. Aliquam blandit enim sed magna rhoncus," textHeader="Lorem ipsum dolor "/>
            <TalentFinder/>
        </Layout>
    )
}
