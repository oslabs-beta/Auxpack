import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { MemoryRouter as Router } from 'react-router';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 500,
    color: "black",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={classes.root}
    >
      <Router>
        <Link to="/">
          <BottomNavigationAction label="Overview"/>
        </Link>
        <Link to="/builds">
          <BottomNavigationAction label="Build Data"/>
        </Link>
        <Link to="recommendations">
          <BottomNavigationAction label="Recommendations"/>
        </Link>
      </Router>
    </BottomNavigation>
  );
}