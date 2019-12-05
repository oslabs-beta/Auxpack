import React from 'react';
import { FixedSizeList } from 'react-window';

const TreeList = (props) => {
  const listSize = props.list.length;
  const listArr = (props.list.length !== 0) ? props.list : [];

  // create <div> with module name for each element in listArr to display in List below
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

  // create scrollable window that only renders what is visible to user
  const List = () => {
    return(
      <FixedSizeList 
        style={{ margin: '0 auto' }}
        height={500}
        itemCount={listSize}
        itemSize={50}
        width={`auto`}   
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