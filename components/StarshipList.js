import React from 'react';
import Link from 'next/link'

import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  listContainer: {
    width: '100%',
    padding: 0,
    backgroundColor: fade(theme.palette.background.paper, 0.8),
  },
  itemContainer: {
    color: theme.palette.text.primary,
  },

});

export class StarshipList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    const listItems = this.props.starships.map((starship, i) =>
      {
        const id = starship.url.match(/starships\/(\d+)/)[1];
        return (
          <div key={id} className={classes.itemContainer}>
          <ListItem primary button>
            <Link href={"starships/" + id}>
              <ListItemText primary={starship.name} secondary={starship.model} />
            </Link>
          </ListItem>
          {i != this.props.starships.length - 1  && (<Divider light />)}
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
}

export default withStyles(styles, { withTheme: true })(StarshipList)
