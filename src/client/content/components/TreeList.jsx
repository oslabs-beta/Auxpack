import React from 'react';
import { FixedSizeList } from 'react-window';

const TreeList = (props) => {
  const listSize = props.list.length;
  const listArr = (props.list.length !== 0) ? props.list : [];

  // create <div> with module name for each element in listArr to display in List below
  const row = ({ index, style }) => {
    return (
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
    return (
      <FixedSizeList
        className="scroll-list"
        height={450}
        itemCount={listArr.length}
        itemSize={50}
        width={1100}
      >
        {row}
      </FixedSizeList>
    )
  }

  return (
    <div style={{ border: '1px solid red' }}>
      <List />
    </div>
  )
}

export default TreeList;