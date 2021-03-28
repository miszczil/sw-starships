import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex"
  },
  formControl: {
    minWidth: 144
  },
  resetButton: {
    marginLeft: 8,
    alignSelf: "center"
  }
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
    <Box className={classes.box}>
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
              (<MenuItem key={film.url} value={film.url}>{film.title}</MenuItem>)
            )
          }
        </Select>
      </FormControl>
      { props.filter &&
        <Button className={classes.resetButton} color="primary" onClick={handleReset}>Reset filter</Button>
      }
    </Box>
  )
}
