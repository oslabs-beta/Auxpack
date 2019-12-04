import React, { useState, useEffect } from 'react';

const TreeShaking = () => {
  const [modules, setModules] = useState({cjs:[], esm:[], both:[]});
  const [displayTotal, setTotal] = useState(true);
  const [displayEsm, setEsm] = useState(false);
  const [displayCjs, setCjs] = useState(false);
  const [displayBoth, setBoth] = useState(false);

  useEffect(() => {
    fetch('/getStats')
    .then(res => res.json())
    .then(data => setModules(data[0].treeStats))
    .catch(err => console.log(err))
  }, [])

  // parse from aux-stats.json
  const esmCount = modules.esm.length;
  const cjsCount = modules.cjs.length;
  const bothCount = modules.both.length;
  const totalCount = modules.cjs.length + modules.esm.length + modules.both.length;
  const esmList = modules.esm.map((object, i) => <div key={i}>{object.name}</div>);
  const cjsList = modules.cjs.map((object, i) => <div key={i}>{object.name}</div>);
  const bothList = modules.both.map((object, i) => <div key={i}>{object.name}</div>);
  const totalList = esmList.concat(cjsList).concat(esmList);

  // conditional rendering to display total modules
  let total = null;
  if (displayTotal === true) {
    total = <div>{totalList}</div>
  }

  // conditional rendering to display treeshakable (esm) modules
  let esm = null;
  if (displayEsm === true) {
    esm = <div>{esmList}</div>
  }

  // conditional rendering to display non-treeshakable (cjs) modules
  let cjs = null;
  if (displayCjs === true) {
    cjs = <div>{cjsList}</div>
  }

  // conditional rendering to display mixed (both esm and cjs) modules
  let both = null;
  if (displayBoth === true) {
    both = <div>{bothList}</div>
  }

  return (
    <div>
      <div className="tree-modules">
        <div>
          <h3>Total Modules</h3>
          <p>{`Count: ${(totalCount !== 0) ? totalCount : 0}`}</p>
          <p>{`Percentage: ${Math.round(totalCount / totalCount * 100)}%`}</p>
        </div>
        <div>
          <h3>{`Treeshakable (ESM) Modules`}</h3>
          <p>{`Count: ${(esmCount !== 0) ? esmCount : 0}`}</p>
          <p>{`Percentage: ${Math.round(esmCount / totalCount * 100)}%`}</p>
        </div>
        <div>
          <h3>{`Non-Treeshakable (CJS) Modules`}</h3>
          <p>{`Count: ${(cjsCount !== 0) ? cjsCount : 0}`}</p>
          <p>{`Percentage: ${Math.round(cjsCount / totalCount * 100)}%`}</p>
        </div>
        <div>
          <h3>Mixed Modules</h3>
          <p>{`Count: ${(bothCount !== 0) ? bothCount : 0}`}</p>
          <p>{`Percentage: ${Math.round(bothCount / totalCount * 100)}%`}</p>
        </div>
      </div>
      <div className="tree-list">
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