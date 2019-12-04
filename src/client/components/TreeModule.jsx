import React from 'react'

const TreeModule = (props) => {
  <div>
    <h3>Mixed Modules</h3>
    <p>{`Count: ${(bothCount !== 0) ? bothCount : 0}`}</p>
    <p>{`Percentage: ${Math.round(bothCount / totalCount * 100)}%`}</p>
  </div>
}

export default TreeModule;