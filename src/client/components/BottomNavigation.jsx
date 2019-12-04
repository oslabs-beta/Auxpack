import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link } from 'react-router-dom';
import FolderIcon from '@material-ui/icons/Folder';
import InsertChart from '@material-ui/icons/InsertChart'
import MergeType from '@material-ui/icons/MergeType'

const useStyles = makeStyles({
  root: {
    width: 500,
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
      id="nav"
    >
      <BottomNavigationAction label="Overview" icon={<InsertChart />} component={Link} to="/" />
      <BottomNavigationAction label="Build Data" icon={<FolderIcon />} component={Link} to="/build" />
      <BottomNavigationAction label="Recommendations" icon={<MergeType />} component={Link} to="/recommendations" />
    </BottomNavigation>
  );
}