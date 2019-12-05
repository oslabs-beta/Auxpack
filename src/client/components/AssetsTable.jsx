import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import { FixedSizeList as List } from 'react-window';


const AssetsTable = props => {
    const assetsArr = (props.build[0].assets.length !== 0) ? props.build[0].assets : [];

    const convertBytes = props.getBytes;


    const rowHeights = new Array(assetsArr.length)
        .fill(true)
        .map(() => 25 + Math.round(Math.random() * 50));

    //const getItemSize = index => rowHeights[index];

    const Row = ({ index, style }) => (<div style={style} key={index}>Assets name: {assetsArr[index].name} | Chunks: {assetsArr[index].chunks} | Size: {convertBytes(assetsArr[index].size)} </div>);
    // // List props must include: height={num}, width={num}, itemCount={assetsArr.length}, itemData = {assetsArr},
    // List.propTypes = {
    //     height: PropTypes.number.isRequired,
    //     width: PropTypes.number.isRequired,
    //     itemSize: PropTypes.number.isRequired,
    //     itemCount: PropTypes.number.isRequired
    // };

    const Assets = () => (
        <List style={{
            margin: '0 auto'
        }}
            height={150}
            itemCount={assetsArr.length}
            itemSize={50}
            width={900}
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