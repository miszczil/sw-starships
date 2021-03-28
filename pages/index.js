import React from 'react';
import Layout from '../components/Layout'
import Head from 'next/head'
import FilmFilter from '../components/FilmFilter'
import StarshipList from '../components/StarshipList'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Container';

import { getAllStarshipsData } from '../lib/starships'
import { getAllFilmsData } from '../lib/films'

export default function Home({ allStarshipsData, allFilmsData }) {

  const [filter, setFilter] = React.useState("");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  }

  const starshipsFiltered = filter == "" ? allStarshipsData :
    allStarshipsData.filter((starship) => starship.films.includes(filter));

  return (
    <Layout>
      <FilmFilter films={ allFilmsData } filter={ filter } onFilterChange={ handleFilterChange } />
      {
        filter && !starshipsFiltered.length ?
        (
          <Typography color="textSecondary" gutterBottom>
            Sorry, apparently no starships appeared in{" "}
            <em>{ allFilmsData.find((film) => film.url == filter).title }</em>
          </Typography>
        ) : (<StarshipList starships={ starshipsFiltered } />)
      }
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
