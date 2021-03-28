import Head from 'next/head'
import Box from '@material-ui/core/Box';


const styles = {
    layoutBox: {
        // backgroundImage: `url(${Image})`
        backgroundImage: `url(${"/background.jpg"})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%"
    }
};

export default function Layout({ children }) {
  return (
    <Box style={styles.layoutBox}>
      <Head>
        <title>Star Wars Starships</title>
        <link rel="icon" href="/deathstar.ico" />
      </Head>
      <main>{children}</main>
    </Box>
  );
}
