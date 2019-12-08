import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link } from 'react-router-dom';
import FolderIcon from '@material-ui/icons/Folder';
import InsertChart from '@material-ui/icons/InsertChart'
import MergeType from '@material-ui/icons/MergeType'


//makestyles to create styles on Material UI components
const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  //hook used to indicate which tab is "active"
  const [value, setValue] = React.useState(0);

  return (
    //component in <BottomNavigationAction simulates a component that has behavior of that component from react router
    //Links can send users to routes which is what "to" attributes send them towards
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={classes.root}
      id="bottom-nav"
    >
      <BottomNavigationAction label="Overview" icon={<InsertChart/>} component={Link} to="/"/>
      <BottomNavigationAction label="Build Data" icon={<FolderIcon/>} component={Link} to ="/build"/>
      <BottomNavigationAction label="Tree Shaking" icon={<MergeType/>} component={Link} to="/treeshaking"/>
    </BottomNavigation>
  );
}