import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const TreeModule = ({ list, title, count, totalCount }) => {

  // makeStyles used to style Material UI components
  const useStyles = makeStyles(theme => ({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    }
  }));

  const classes = useStyles();

  // list items displayed when expansion panel/card opens
  const Row = list.map((obj, i) => {
    return(
      <tr key={i} className="table-row">
        <td>{obj.name}</td>
      </tr>
    )
  })
  
  // expansion panel/card
  const Card = () => {
    return (
      <table className="highlight">
        <tbody>
          {Row}
        </tbody>
      </table>
    )
  }
  
  return (
    <ExpansionPanel className="expansionPanel">
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading} className="expansion-heading">
          <strong className="centered">{title}</strong>
          <span>
            <strong>Count: </strong>{`${(count !== 0) ? count : 0}   `}
            <strong>Percentage: </strong>{`${Math.round(count / totalCount * 100)}%`}
          </span>
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="panelDetails">
        <Card/>
      </ExpansionPanelDetails>
    </ExpansionPanel> 
  )
}

export default TreeModule;



