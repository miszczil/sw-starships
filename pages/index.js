import Head from 'next/head'
import StarshipList from '../components/StarshipList'

import { getAllStarshipsData } from '../lib/starships'

export default function Home({ allStarshipsData }) {
  // console.log(allStarshipsData);

  return (
    <div className="container">
      <Head>
        <title>Star Wars Starships</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StarshipList starships={ allStarshipsData.results } />
    </div>
  )
}

export async function getStaticProps() {
  // const allStarshipsData = getAllStarshipsData();
  const res = await fetch('https://swapi.dev/api/starships/');

  return {
    props: { allStarshipsData: await res.json() }
    // props: { allStarshipsData: allStarshipsData }
    // props: {}
  }
}
