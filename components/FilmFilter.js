import React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 144,
  },
}));

export default function FilmFilter(props) {
  const classes = useStyles(props);

  const handleChange = (event) => {
    props.onFilterChange(event.target.value);
  };

  const handleReset = (event) => {
    event.preventDefault();
    props.onFilterChange("");
  }

  return (
    <Box>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="film-filter-label">Filter by film</InputLabel>
        <Select
          labelId="film-filter-label"
          id="film-filter"
          value={props.filter}
          onChange={handleChange}
          label="Filter by film"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          { props.films.map(film =>
              (<MenuItem value={film.url}>{film.title}</MenuItem>)
            )
          }
        </Select>
      </FormControl>
      <Typography>
      <Link href="#" onClick={handleReset}>Reset filter</Link>
      </Typography>
    </Box>
  )
}
