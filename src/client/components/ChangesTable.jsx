import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import { FixedSizeList as List } from 'react-window';
// import InfiniteLoader from 'react-window-infinite-loader';




const ChangesTable = (props) => {
    const { dirFinalArrayPrev, dirFinalArray } = props;
    //console.log(`prev: `, props.dirFinalArrPrev, `current: `, dirFinalArray)

    const modulesArrProp = props.build[0].chunks[0].modules;

    const modulesArr = (modulesArrProp.length !== 0) ? modulesArrProp : [];
    const modulesCount = modulesArr.length;

    // const fileTable = dirFinalArray.map(directory => directory[1].map((file, j) => (
    //     <li key={file.filename + file.size + j}>
    //         <div>{file.filename}</div>
    //         <div>{props.getBytes(file.size)}</div>
    //         <div>{file.percentage}</div>
    //     </li>
    // ))

    //const getItemSize = index => rowHeights[index];

    const Row = ({ index, style }) => (<div style={style} key={index}>{modulesArr[index].name}</div>);
    // List props must include: height={num}, width={num}, itemCount={modulesCount}, itemData = {modulesArr},
    List.propTypes = {
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        itemSize: PropTypes.number.isRequired,
        itemCount: PropTypes.number.isRequired
    };

    const Changes = () => <List style={{
        margin: '0 auto'
    }}
        height={150}
        itemCount={modulesCount}
        itemData={modulesArr}
        itemSize={50}
        width={900}
    >
        {Row}
    </List>;

    return <div>

        <div>
            <strong>Changes:</strong>
            <Changes />
        </div>
    </div>
}

export default ChangesTable;