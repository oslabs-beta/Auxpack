import React from 'react'

const TreeModule = (props) => {
  return (
  <div>
    <h3>{props.name}</h3>
    <p>{`Count: ${(props.count !== 0) ? props.count : 0}`}</p>
    <p>{`Percentage: ${Math.round(props.count / props.total * 100)}%`}</p>
  </div>
  )
}

export default TreeModule;