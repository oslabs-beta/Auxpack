import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const TreeModule = (props) => {
  const useStyles = makeStyles({
    card: {
      height: '100%',
      display: 'flex',
      'flex-direction': 'column',
    },
    button: {
      width: '100%',
    },
    div: {
      'margin-top': 'auto',
    }
  });

  const classes = useStyles();

  return (
  <Card className={classes.card}>
    <CardContent>
      <h3>{props.name}</h3>
      <p>{`Count: ${(props.count !== 0) ? props.count : 0}`}</p>
      <p>{`Percentage: ${Math.round(props.count / props.total * 100)}%`}</p>
    </CardContent>
    <CardActions className={classes.div}>
        <Button className={classes.button} onClick={props.onClick}>{props.button}</Button>
    </CardActions>
  </Card>
  )
}

export default TreeModule;