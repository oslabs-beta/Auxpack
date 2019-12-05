import React from 'react';
import { FixedSizeList } from 'react-window';

const TreeList = (props) => {
  const listSize = props.list.length;
  const listArr = (props.list.length !== 0) ? props.list : [];

  const row = ({ index, style }) => {
    return(
      <div 
      style={style} 
      key={index}
      >
      {(listArr[index]) ? listArr[index] : 'No modules.'} 
      </div> 
    )
  }

  const List = () => {
    return(
      <FixedSizeList 
        style={{ margin: '0 auto' }}
        height={500}
        itemCount={listSize}
        itemSize={50}
        width={900} 
      >
        {row}
      </FixedSizeList>
    )
  }

  return (
    <div>
      <List/>
    </div>
  )
}

export default TreeList;