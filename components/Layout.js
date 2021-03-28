import Head from 'next/head'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
    mainContainer: {
      backgroundColor: fade(theme.palette.background.paper, 0.8),
      padding: 24,
      maxHeight: "100%",
      display: "flex",
      flexDirection: "column",
    }
  })
);

const styles = {
    layoutBox: {
        backgroundImage: `url(${"/background.jpg"})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        padding: "24px 0",
        boxSizing: "border-box"
    }
};

export default function Layout(props) {
  const classes = useStyles(props);

  return (
    <Box style={styles.layoutBox}>
      <Head>
        <title>Star Wars Starships</title>
        <link rel="icon" href="/deathstar.ico" />
      </Head>
      <Container className={classes.mainContainer} maxWidth="sm">{props.children}</Container>
    </Box>
  );
}
