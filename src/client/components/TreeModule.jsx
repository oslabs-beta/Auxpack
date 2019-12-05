import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const TreeModule = (props) => {
  const useStyles = makeStyles({
    card: {
      maxWidth: 250,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();

  return (
  <Card className={classes.card}>
    <h3>{props.name}</h3>
    <p>{`Count: ${(props.count !== 0) ? props.count : 0}`}</p>
    <p>{`Percentage: ${Math.round(props.count / props.total * 100)}%`}</p>
    <Button onClick={props.onClick}>{props.button}</Button>
  </Card>
  )
}

export default TreeModule;