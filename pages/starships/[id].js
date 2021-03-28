import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { getAllStarshipIds, getStarshipData } from '../../lib/starships'

export default function Starship({ starshipData }) {
  return (
    <Layout>
      <Head>
        <title>{starshipData.name} – Star Wars Starships</title>
      </Head>
      <Link href="/">
        <Button color="primary">← Back to list</Button>
      </Link>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            { starshipData.model }
          </Typography>
          <Typography variant="h5" component="h2">
            { starshipData.name }
          </Typography>
          <Typography variant="caption" color="textSecondary">
            <b>Cost:</b> { starshipData.cost_in_credits }{" "}
            { starshipData.cost_in_credits !== "unknown" && "GC" }
          </Typography>
        </CardContent>
      </Card>
    </Layout>
  )
}

export async function getStaticPaths() {
  const ids = await getAllStarshipIds();
  const paths = ids.map((id) => {
    return {
      params: {
        id: id
      }
    }
  });

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {

  const starshipData = await getStarshipData(params.id);

  return {
    props: {
      starshipData
    }
  }
}
