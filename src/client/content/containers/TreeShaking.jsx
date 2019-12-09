import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  if(build[activeBuild] !== undefined) {
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
        <div className={classes.root}>
          <ExpansionPanel className="expansionPanel" style={{
            width: '100%',
          }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading} className="expansion-heading">
                <strong className="centered">Total Modules</strong>
                <strong>Count: </strong>{`${(totalCount !== 0) ? totalCount : 0}`}
                <strong>Percentage: </strong>{`${Math.round(totalCount / totalCount * 100)}%`}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className="panelDetails" style={{
              maxHeight: '400px',
              overflowY: 'auto',
              backgroundColor: 'whitesmoke',
            }}>
              <TotalCard/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className="expansionPanel" style={{
            width: '100%',
          }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading} className="expansion-heading">
                <strong className="centered">{`Treeshakable (ESM) Modules`}</strong>
                <strong>Count: </strong>{`${(esmCount !== 0) ? esmCount : 0}`}
                <strong>Percentage: </strong>{`${Math.round(esmCount / totalCount * 100)}%`}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className="panelDetails" style={{
              maxHeight: '400px',
              overflowY: 'auto',
              backgroundColor: 'whitesmoke',
            }}>
              <ESMCard/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className="expansionPanel" style={{
            width: '100%',
          }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading} className="expansion-heading">
                <strong className="centered">{`Non-Treeshakable (CJS) Modules`}</strong>
                <strong>Count: </strong>{`${(cjsCount !== 0) ? cjsCount : 0}`}
                <strong>Percentage: </strong>{`${Math.round(cjsCount / totalCount * 100)}%`}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className="panelDetails" style={{
              maxHeight: '400px',
              overflowY: 'auto',
              backgroundColor: 'whitesmoke',
            }}>
              <CJSCard/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className="expansionPanel" style={{
            width: '100%',
          }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading} className="expansion-heading">
                <strong className="centered">{`Mixed Modules`}</strong>
                <strong>Count: </strong>{`${(bothCount !== 0) ? bothCount : 0}`}
                <strong>Percentage: </strong>{`${Math.round(bothCount / totalCount * 100)}%`}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className="panelDetails" style={{
              maxHeight: '400px',
              overflowY: 'auto',
              backgroundColor: 'whitesmoke',
            }}>
              <BothCard/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      )
    }

<<<<<<< HEAD
    return (
      <div className="cards-container centered">
        <SimpleExpansionPanel/>
      </div>
    )
  }
  return (
    <React.Fragment />
  )
} 

export default TreeShaking;
 






// export default function AutoGrid({ build, activeBuild }) {
//   //dynamic label for component being displayed currently
//   const [name, setName] = useState('Total');
//   //hook used for conditional rendering of components for each set of modules
//   const [state, setState] = useState({
//     displayTotal: true,
//     displayEsm: false,
//     displayCjs: false,
//     displayBoth: false
//   })
  
//   if(build[activeBuild] !== undefined) {

  
//   //parsing through data for treeshaking information
//   const modules = build[activeBuild].treeStats;
//   const esmCount = modules.esm.length;
//   const cjsCount = modules.cjs.length;
//   const bothCount = modules.both.length;
//   const totalCount = modules.cjs.length + modules.esm.length + modules.both.length;
//   const esmList = modules.esm.map(object => object.name); 
//   const cjsList = modules.cjs.map(object => object.name);
//   const bothList = modules.both.map(object => object.name);
//   const totalList = esmList.concat(cjsList).concat(esmList);

//   // conditional rendering to display total modules
//   let total = null;
//   if (state.displayTotal === true) {
//     total = <TreeList list={totalList}/>;
//   }

//   // conditional rendering to display treeshakable (esm) modules
//   let esm = null;
//   if (state.displayEsm === true) {
//     esm = <TreeList list={esmList}/>;
//   }

//   // conditional rendering to display non-treeshakable (cjs) modules
//   let cjs = null;
//   if (state.displayCjs === true) {
//     cjs = <TreeList list={cjsList}/>;
//   }

//   // conditional rendering to display mixed (both esm and cjs) modules
//   let both = null;
//   if (state.displayBoth === true) {
//     both = <TreeList list={bothList}/>;
//   }

//   // logic for buttons in TreeModules to trigger conditional rendering and switch between lists
//   const showTotal = () => {
//     setState({
//       displayTotal: true,
//       displayEsm: true,
//       displayCjs: false,
//       displayBoth: false
//     });
//     setName('Total')
//   }

//   const showEsm = () => {
//     setState({
//       displayTotal: false,
//       displayEsm: true,
//       displayCjs: false,
//       displayBoth: false
//     });
//     setName('ESM');
//   }

//   const showCjs = () => {
//     setState({
//       displayTotal: false,
//       displayEsm: false,
//       displayCjs: true,
//       displayBoth: false
//     });
//     setName('CJS');
//   }

//   const showBoth = () => {
//     setState({
//       displayTotal: false,
//       displayEsm: false,
//       displayCjs: false,
//       displayBoth: true
//     });
//     setName('Mixed');
//   }

//   return (
//     <div className="tree-data">
//       <Grid container spacing={2} className="tree-modules">
//         <Grid item xs>
//           <TreeModule 
//             name={`Total Modules`} 
//             count={totalCount} 
//             total={totalCount} 
//             button={'Display Total Modules'} 
//             onClick={showTotal}
//           />
//         </Grid>
//         <Grid item xs> 
//           <TreeModule 
//             name={`Treeshakable (ESM) Modules`} 
//             count={esmCount} 
//             total={totalCount} 
//             button={'Display ESM Modules'} 
//             onClick={showEsm}
//           />
//         </Grid>
//         <Grid item xs>
//           <TreeModule 
//             name={`Non-Treeshakable (CJS) Modules`} 
//             count={cjsCount} 
//             total={totalCount} 
//             button={'Display CJS Modules'} 
//             onClick={showCjs}
//           />
//         </Grid>
//         <Grid item xs>
//           <TreeModule 
//             name={`Mixed Modules`} 
//             count={bothCount} 
//             total={totalCount} 
//             button={'Display Mixed Modules'} 
//             onClick={showBoth}
//           />
//         </Grid>
//       </Grid>
//       <Grid container spacing={1} className="tree-lists">
//         <Grid item xs>
//           <h5 className="list-header">{`${name} Modules List`}</h5>
//           {total}
//           {esm}
//           {cjs}
//           {both}
//         </Grid>
//       </Grid>
//     </div>
//   );
//   }
//   return (
//     <React.Fragment />
//   )
// }

=======
  return (
    <div className="tree-data">
      <Grid container spacing={2} className="tree-modules">
        <Grid item xs>
          <TreeModule name={`Total Modules`} count={totalCount} total={totalCount} button={'Display Total Modules'} onClick={showTotal}/>
        </Grid>
        <Grid item xs> 
          <TreeModule name={`Treeshakable (ESM) Modules`} count={esmCount} total={totalCount} button={'Display ESM Modules'} onClick={showEsm}/>
        </Grid>
        <Grid item xs>
          <TreeModule name={`Non-Treeshakable (CJS) Modules`} count={cjsCount} total={totalCount} button={'Display CJS Modules'} onClick={showCjs}/>
        </Grid>
        <Grid item xs>
          <TreeModule name={`Mixed Modules`} count={bothCount} total={totalCount} button={'Display Mixed Modules'} onClick={showBoth}/>
        </Grid>
      </Grid>
      <Grid container spacing={1} className="tree-lists">
        <Grid item xs>
          <h5 className="list-header">{`${name} Modules List`}</h5>
          {total}
          {esm}
          {cjs}
          {both}
        </Grid>
      </Grid>
    </div>
  );
  } else {
    return (
      <React.Fragment />
    )
  }
}
 
>>>>>>> master
