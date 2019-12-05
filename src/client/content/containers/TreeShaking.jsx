import React, { useState, useEffect } from 'react';
import TreeModule from '../../components/TreeModule.jsx';
import TreeList from '../../components/TreeList.jsx';

const TreeShaking = () => {
  const [modules, setModules] = useState({cjs:[], esm:[], both:[]});
  const [state, setState] = useState({
    displayTotal: true,
    displayEsm: false,
    displayCjs: false,
    displayBoth: false
  })

  useEffect(() => {
    fetch('/getStats')
    .then(res => res.json())
    .then(data => setModules(data[0].treeStats))
    .catch(err => console.log(err))
  }, [])


  // parse data from aux-stats.json
  const esmCount = modules.esm.length;
  const cjsCount = modules.cjs.length;
  const bothCount = modules.both.length;
  const totalCount = modules.cjs.length + modules.esm.length + modules.both.length;
  const esmList = modules.esm.map(object => object.name) 
  const cjsList = modules.cjs.map(object => object.name) 
  const bothList = modules.both.map(object => object.name) 
  const totalList = esmList.concat(cjsList).concat(esmList);

  // conditional rendering to display total modules
  let total = null;
  if (state.displayTotal === true) {
    total = <TreeList list={totalList}/>
  }

  // conditional rendering to display treeshakable (esm) modules
  let esm = null;
  if (state.displayEsm === true) {
    esm = <TreeList list={esmList}/>
  }

  // conditional rendering to display non-treeshakable (cjs) modules
  let cjs = null;
  if (state.displayCjs === true) {
    cjs = <TreeList list={cjsList}/>
  }

  // conditional rendering to display mixed (both esm and cjs) modules
  let both = null;
  if (state.displayBoth === true) {
    both = <TreeList list={bothList}/>
  }

  // conditional rendering logic onClick
  const showTotal = () => {
    setState({
      displayTotal: true,
      displayEsm: true,
      displayCjs: false,
      displayBoth: false
    })
  }

  const showEsm = () => {
    setState({
      displayTotal: false,
      displayEsm: true,
      displayCjs: false,
      displayBoth: false
    })
  }

  const showCjs = () => {
    setState({
      displayTotal: false,
      displayEsm: false,
      displayCjs: true,
      displayBoth: false
    })
  }

  const showBoth = () => {
    setState({
      displayTotal: false,
      displayEsm: false,
      displayCjs: false,
      displayBoth: true
    })
  }

  return (
    <div>
      <div className="tree-modules">
        <TreeModule name={`Total Modules`} count={totalCount} total={totalCount}/>
        <TreeModule name={`Treeshakable (ESM) Modules`} count={esmCount} total={totalCount}/>
        <TreeModule name={`Non-Treeshakable (CJS) Modules`} count={cjsCount} total={totalCount}/>
        <TreeModule name={`Mixed Modules`} count={bothCount} total={totalCount}/>
      </div>
      <div className="tree-lists">
        <h3>Modules List</h3>
        {total}
        {esm}
        {cjs}
        {both}
      </div>
    </div>
  );
}
 
export default TreeShaking;