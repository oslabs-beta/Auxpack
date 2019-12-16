import React from 'react';
import TreeModule from '../components/TreeModule.jsx';

const TreeShaking = ({ build, activeBuild }) => {
  // render expansion panels if build data is available
  if (build[activeBuild] !== undefined) {
    const modules = build[activeBuild].treeStats;
    const totalCount = modules.cjs.length + modules.esm.length + modules.both.length;

    return (
      <div className='cards-container centered'>
        <div className='content-card'>
          <div className='tree-module'>
            <TreeModule list={modules.esm.concat(modules.cjs).concat(modules.both)} 
              title={`Total Modules`} 
              count={totalCount} 
              totalCount={totalCount} 
            />
            <TreeModule list={modules.esm} 
              title={`Treeshakable (ESM) Modules`} 
              count={modules.esm.length} 
              totalCount={totalCount} 
            />
            <TreeModule list={modules.cjs} 
              title={`Non-Treeshakable (CJS) Modules`} 
              count={modules.cjs.length} 
              totalCount={totalCount} 
            />
            <TreeModule list={modules.both} 
              title={`Mixed Modules`} 
              count={modules.both.length} 
              totalCount={totalCount} 
            />
          </div>
        </div>
      </div>
    )
  } else {
    return (<div className="centered cards-container">
      <p>No treeshakable modules available.</p>
    </div>)
  }

  // render note if build data is not available
  return (
    <div className='cards-container centered'>
      <div className='content-card full-center'>
        <div className='full-center'>
          No modules to display 
        </div>
      </div>
    </div>
  )
}

export default TreeShaking;




