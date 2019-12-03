import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
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
          <BottomNavigationAction label="Overview" component={Link} to="/"/>
          <BottomNavigationAction label="Build Data" component={Link} to ="/build"/>
          <BottomNavigationAction label="Recommendations" component={Link} to="/recommendations"/>
    </BottomNavigation>
  );
}