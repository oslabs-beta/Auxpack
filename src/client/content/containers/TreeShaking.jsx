import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Container } from '@material-ui/core';

// makeStyles used to style Material UI components
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  }
}));

const TreeShaking = ({ build, activeBuild }) => {
  if (build[activeBuild].treeStats) {
    // parsing through data for treeshaking information
    const modules = build[activeBuild].treeStats;
    const esmCount = modules.esm.length;
    const cjsCount = modules.cjs.length;
    const bothCount = modules.both.length;
    const totalCount = modules.cjs.length + modules.esm.length + modules.both.length;

    // list items displayed when expansion panel/card opens
    const esmList = modules.esm.map((obj, i) => {
      return (
        <tr key={i} className="table-row">
          <td>{obj.name}</td>
        </tr>
      )
    });

    const cjsList = modules.cjs.map((obj, i) => {
      return (
        <tr key={i} className="table-row">
          <td>{obj.name}</td>
        </tr>
      )
    });

    const bothList = modules.both.map((obj, i) => {
      return (
        <tr key={i} className="table-row">
          <td>{obj.name}</td>
        </tr>
      )
    });

    const totalList = modules.esm.concat(modules.cjs).concat(modules.both).map((obj, i) => {
      return (
        <tr key={i} className="table-row">
          <td>{obj.name}</td>
        </tr>
      )
    })

    // expansion panels/cards
    const TotalCard = () => {
      return (
        <table className="highlight">
          <tbody>
            {totalList}
          </tbody>
        </table>
      )
    }
    const ESMCard = () => {
      return (
        <table className="highlight">
          <tbody>
            {esmList}
          </tbody>
        </table>
      )
    }

    const CJSCard = () => {
      return (
        <table className="highlight">
          <tbody>
            {cjsList}
          </tbody>
        </table>
      )
    }

    const BothCard = () => {
      return (
        <table className="highlight">
          <tbody>
            {bothList}
          </tbody>
        </table>
      )
    }

    const SimpleExpansionPanel = () => {
      const classes = useStyles();

      return (
        <div className='content-card'>
          <div className={classes.root}>
            <ExpansionPanel className="expansionPanel">
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading} className="expansion-heading">
                  <strong className="centered">Total Modules</strong>
                  <span>
                    <strong>Count: </strong>{`${(totalCount !== 0) ? totalCount : 0}   `}
                    <strong>Percentage: </strong>{`${Math.round(totalCount / totalCount * 100)}%`}
                  </span>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="panelDetails">
                <TotalCard />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className="expansionPanel">
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading} className="expansion-heading">
                  <strong className="centered">{`Treeshakable (ESM) Modules`}</strong>
                  <span>
                    <strong>Count: </strong>{`${(esmCount !== 0) ? esmCount : 0}   `}
                    <strong>Percentage: </strong>{`${Math.round(esmCount / totalCount * 100)}%`}
                  </span>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="panelDetails">
                <ESMCard />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className="expansionPanel">
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading} className="expansion-heading">
                  <strong className="centered">{`Non-Treeshakable (CJS) Modules`}</strong>
                  <span>
                    <strong>Count: </strong>{`${(cjsCount !== 0) ? cjsCount : 0}   `}
                    <strong>Percentage: </strong>{`${Math.round(cjsCount / totalCount * 100)}%`}
                  </span>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="panelDetails">
                <CJSCard />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className="expansionPanel">
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading} className="expansion-heading">
                  <strong className="centered">{`Mixed Modules`}</strong>
                  <span>
                    <strong>Count: </strong>{`${(bothCount !== 0) ? bothCount : 0}   `}
                    <strong>Percentage: </strong>{`${Math.round(bothCount / totalCount * 100)}%`}
                  </span>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="panelDetails">
                <BothCard />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </div>
      )
    }

    return (
      <div className="cards-container centered">
        <SimpleExpansionPanel />
      </div>
    )
  } else {
    return (<div className="centered cards-container">
      <p>No treeshakable modules available.</p>
    </div>)
  }
}

export default TreeShaking;




