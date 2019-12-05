import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import { FixedSizeList as List } from 'react-window';


const AssetsTable = props => {
    const assetsArr = (props.build[0].assets.length !== 0) ? props.build[0].assets : [];

    const convertBytes = props.getBytes;

    //const getItemSize = index => rowHeights[index];

    const Row = ({ index, style }) => (<div style={style} className="list-row" key={index}>Assets name: {assetsArr[index].name} | Chunks: {assetsArr[index].chunks} | Size: {convertBytes(assetsArr[index].size)} </div>);
    // List props must include: height={num}, width={num}, itemCount={assetsArr.length}, itemData = {assetsArr},


    const Assets = () => (
        <List className="scroll-list"
            height={150}
            itemCount={assetsArr.length}
            itemSize={assetsArr.length}
            width={1100}
        >
            {Row}
        </List>
    );

    return <div>

        <strong>Assets</strong>
        <Assets />

    </div>
}

export default AssetsTable;