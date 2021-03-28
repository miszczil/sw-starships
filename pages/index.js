import Layout from '../components/Layout'
import Head from 'next/head'
import StarshipList from '../components/StarshipList'
import Container from '@material-ui/core/Container';

import { getAllStarshipsData } from '../lib/starships'

export default function Home({ allStarshipsData }) {
  // console.log(allStarshipsData);

  return (
    <Layout>
      // <Container maxWidth="sm">
        <StarshipList starships={ allStarshipsData.results } />
      // </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const allStarshipsData = await getAllStarshipsData();

  return {
    props: { allStarshipsData: allStarshipsData }
  }
}
