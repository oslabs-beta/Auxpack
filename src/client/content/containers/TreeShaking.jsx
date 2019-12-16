import React from 'react';
import TreeModule from '../components/TreeModule.jsx';

const TreeShaking = ({ build, activeBuild }) => {
  if (build[activeBuild] !== undefined) {
    // parsing through data for treeshaking information
    const modules = build[activeBuild].treeStats;
    const esmCount = modules.esm.length;
    const cjsCount = modules.cjs.length;
    const bothCount = modules.both.length;
    const totalCount = modules.cjs.length + modules.esm.length + modules.both.length;

    return (
      <div className="cards-container centered">
        <div className='content-card'>
          <div className="tree-module">
            <TreeModule list={modules.esm.concat(modules.cjs).concat(modules.both)} 
              title={`Total Modules`} 
              count={totalCount} 
              totalCount={totalCount} 
            />
            <TreeModule list={modules.esm} 
              title={`Treeshakable (ESM) Modules`} 
              count={esmCount} 
              totalCount={totalCount} 
            />
            <TreeModule list={modules.cjs} 
              title={`Non-Treeshakable (CJS) Modules`} 
              count={cjsCount} 
              totalCount={totalCount} 
            />
            <TreeModule list={modules.both} 
              title={`Mixed Modules`} 
              count={bothCount} 
              totalCount={totalCount} 
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <React.Fragment />
  )
}

export default TreeShaking;




