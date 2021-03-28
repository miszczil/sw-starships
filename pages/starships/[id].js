import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { getAllStarshipIds, getStarshipData } from '../../lib/starships'

// const useStyles = makeStyles({
//   button: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });

export default function Starship({ starshipData }) {

  const rows = [
    "name",
    "model",
    "MGLT",
    "cargo_capacity",
    "consumables",
    "cost_in_credits",
    "crew",
    "hyperdrive_rating",
    "length",
    "manufacturer",
    "max_atmosphering_speed",
    "passengers",
    "starship_class"
  ]

  return (
    <Layout>
      <Head>
        <title>{starshipData.name} – Star Wars Starships</title>
      </Head>

      <Link href="/">
        <Button>← Back to list</Button>
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
          <TableContainer component={Paper}>
            <Table stickyHeader>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row}>
                    <TableCell component="th" align="right" scope="row" fontWeight="fontWeightBold">
                      {row}
                    </TableCell>
                    <TableCell>{starshipData[row]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
