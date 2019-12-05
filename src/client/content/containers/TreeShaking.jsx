import React, { useState, useEffect } from 'react';
import TreeModule from '../../components/TreeModule.jsx';
import TreeList from '../../components/TreeList.jsx';
import Grid from '@material-ui/core/Grid';

export default function AutoGrid(props) {
  const [name, setName] = useState('Total');
  const [state, setState] = useState({
    displayTotal: true,
    displayEsm: false,
    displayCjs: false,
    displayBoth: false
  })

  const modules = props.build[props.activeBuild].treeStats;
  const esmCount = modules.esm.length;
  const cjsCount = modules.cjs.length;
  const bothCount = modules.both.length;
  const totalCount = modules.cjs.length + modules.esm.length + modules.both.length;
  const esmList = modules.esm.map(object => object.name); 
  const cjsList = modules.cjs.map(object => object.name);
  const bothList = modules.both.map(object => object.name);
  const totalList = esmList.concat(cjsList).concat(esmList);

  // conditional rendering to display total modules
  let total = null;
  if (state.displayTotal === true) {
    total = <TreeList list={totalList}/>;
  }

  // conditional rendering to display treeshakable (esm) modules
  let esm = null;
  if (state.displayEsm === true) {
    esm = <TreeList list={esmList}/>;
  }

  // conditional rendering to display non-treeshakable (cjs) modules
  let cjs = null;
  if (state.displayCjs === true) {
    cjs = <TreeList list={cjsList}/>;
  }

  // conditional rendering to display mixed (both esm and cjs) modules
  let both = null;
  if (state.displayBoth === true) {
    both = <TreeList list={bothList}/>;
  }

  // logic for buttons in TreeModules to trigger conditional rendering and switch between lists
  const showTotal = () => {
    setState({
      displayTotal: true,
      displayEsm: true,
      displayCjs: false,
      displayBoth: false
    });
    setName('Total')
  }

  const showEsm = () => {
    setState({
      displayTotal: false,
      displayEsm: true,
      displayCjs: false,
      displayBoth: false
    });
    setName('ESM');
  }

  const showCjs = () => {
    setState({
      displayTotal: false,
      displayEsm: false,
      displayCjs: true,
      displayBoth: false
    });
    setName('CJS');
  }

  const showBoth = () => {
    setState({
      displayTotal: false,
      displayEsm: false,
      displayCjs: false,
      displayBoth: true
    });
    setName('Mixed');
  }

  return (
    <div>
      <Grid container spacing={1} className="tree-modules">
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
          <h3>{`${name} Modules List`}</h3>
          {total}
          {esm}
          {cjs}
          {both}
        </Grid>
      </Grid>
    </div>
  );
}
 