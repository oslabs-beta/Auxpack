import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const TreeModule = (props) => {
  const useStyles = makeStyles({
    button: {
      'margin-top': 'auto',
      width: '100%',
    }
  });

  const classes = useStyles();

  return (
    <div className="module-card card darken-1" style={{ height: '100%', width: '100%', display: 'flex', 'flexDirection': 'column' }}>
      <div className="highlight centered">
        <div className="card-body">
          <div className="card-title" style={{ color: '#3F51B5' }}>{props.name}</div>
          <p><strong>Count: </strong>{`${(props.count !== 0) ? props.count : 0}`}</p>
          <p><strong>Percentage: </strong>{`${Math.round(props.count / props.total * 100)}%`}</p>
        </div>
      </div>
      <Button className={classes.button} onClick={props.onClick}>
        {props.button}
      </Button>
    </div>
  )
}

export default TreeModule;