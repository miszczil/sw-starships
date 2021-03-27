import React from 'react';
import Link from 'next/link'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class StarshipList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listItems = this.props.starships.map((starship) =>
      {
        const id = starship.url.match(/starships\/(\d+)/)[1];
        return (
          <ListItem key={id}>
            <Link href={"starships/" + id}>
              <ListItemText primary={starship.name} secondary={starship.model} />
            </Link>
          </ListItem>
        )
      }
    );

    return (
      <div className="starshipList">
        <List component="nav" aria-label="main mailbox folders">
          {listItems}
        </List>
      </div>
    );

  }
}

export default StarshipList;
