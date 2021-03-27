// import Layout from '../../components/layout'
import { getAllStarshipIds } from '../../lib/starships'

export default function Starship({ starshipData }) {
  return (<div />)
}

export async function getStaticPaths() {
  const res = await fetch('https://swapi.dev/api/starships/');
  const json = await res.json();

  // const paths = getAllStarshipIds()
  const paths = json.results.map((starship) => {
    return {
      params: {
        id: starship.url.match(/starships\/(\d+)/)[1]
      }
    }
  });

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      starshipData: {}
    }
  }
}
