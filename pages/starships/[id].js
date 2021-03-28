import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { getAllStarshipIds, getStarshipData } from '../../lib/starships'

const useStyles = makeStyles({
  backButton: {
    alignSelf: "start",
    marginBottom: 16
  },
  card: {
    display: "flex",
    flexDirection: "column"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    minHeight: 0,
    boxSizing: "border-box"
  },
  tableContainer: {
    marginTop: 16
  }
});

export default function Starship({ starshipData }) {
  const classes = useStyles();

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
        <Button className={classes.backButton}>← Back to list</Button>
      </Link>

      <Card className={classes.cardContent}>
        <CardContent className={classes.cardContent}>
          <Typography color="textSecondary" gutterBottom>
            {starshipData.model}
          </Typography>
          <Typography variant="h5" component="h2">
            {starshipData.name}
          </Typography>

          <TableContainer className={classes.tableContainer}>
            <Table stickyHeader>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row}>
                    <TableCell component="th" align="right" fontWeight="fontWeightBold">
                      <strong>{row.replace(/_/g, " ")}</strong>
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
