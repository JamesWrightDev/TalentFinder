import Head from 'next/head'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import TwitterFeed from '../components/TwitterFeed/TwitterFeed'
import ContactForm from '../components/ContactForm';
import TextSection from '../components/TextSection';
import CandidateBanner from '../components/CandidateBanner';
import client, {getAllCandidates} from '../util/prismic';

export default function Home(props) {
  const {hero_header, hero_body} = props.homepage;
  const {candidates} = props;
  ;
  return (
    <>
      <Layout>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero textBody={hero_body[0].text} textHeader={hero_header[0].text} cta/>
        <CandidateBanner candidates={candidates}/>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-x-24 gap-y-6 my-24 auto-cols-min'>
          <div className="col-start-1 col-end-3 row-start-1 row-end-2">
            <TextSection />
          </div>
          <div className="lg:col-start-1 lg:col-end-3 row-start-2 row-end-4">
            <TwitterFeed />
          </div>
          <div className="lg:row-start-1 col-start-1 lg:col-start-3 lg:col-end-5">
            <ContactForm />
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const homeQuery = await client.getSingle('homepage');
  const {data} = homeQuery;

  const candidates = await getAllCandidates();

  return {
    props: {
      candidates: candidates.results,
      homepage: data,
    }
  }
}