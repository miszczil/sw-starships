import React from 'react';
import Layout from '../components/Layout'
import Head from 'next/head'
import FilmFilter from '../components/FilmFilter'
import StarshipList from '../components/StarshipList'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { getAllStarshipsData } from '../lib/starships'
import { getAllFilmsData } from '../lib/films'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  listWrapper: {
    minHeight: 0,
    overflow: "scroll",
    marginTop: 16
  }
}));


export default function Home({ allStarshipsData, allFilmsData }) {
  const classes = useStyles();

  const [filter, setFilter] = React.useState("");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  }

  const starshipsFiltered = filter == "" ? allStarshipsData :
    allStarshipsData.filter((starship) => starship.films.includes(filter));

  return (
    <Layout>
      <FilmFilter films={allFilmsData} filter={filter} onFilterChange={handleFilterChange} />
      <Box className={classes.listWrapper}>
        {
          filter && !starshipsFiltered.length ?
          (
            <Typography color="textSecondary">
              Sorry, apparently no starships appeared in{" "}
            <em>{allFilmsData.find((film) => film.url == filter).title}</em>.
            </Typography>
          ) : (<StarshipList starships={starshipsFiltered} />)
        }
      </Box>
    </Layout>
  )
}

export async function getStaticProps() {
  const allStarshipsData = await getAllStarshipsData();
  const allFilmsData = await getAllFilmsData();

  return {
    props: {
      allStarshipsData: allStarshipsData.results,
      allFilmsData: allFilmsData.results
    }
  }
}
