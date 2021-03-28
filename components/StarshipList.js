import Link from 'next/link'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    color: theme.palette.text.primary,
  },
}));

export default function StarshipList(props) {
  const classes = useStyles();

    const listItems = props.starships.map((starship, i) =>
      {
        const id = starship.url.match(/starships\/(\d+)/)[1];
        return (
          <div key={id} className={classes.itemContainer}>
          <ListItem primary="true" button>
            <Link href={"starships/" + id}>
              <ListItemText primary={starship.name} secondary={starship.model} />
            </Link>
          </ListItem>
          {i != props.starships.length - 1  && (<Divider light />)}
          </div>
        )
      }
    );

    return (
      <List disablePadding component="nav">
        {listItems}
      </List>
    );
}
