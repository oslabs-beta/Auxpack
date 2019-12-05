import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import { FixedSizeList as List } from 'react-window';
// import InfiniteLoader from 'react-window-infinite-loader';




const ChangesTable = (props) => {
    const { dirFinalArrayPrev, dirFinalArray, getBytes } = props;
    console.log(`prev: `, props.dirFinalArrPrev, `current: `, dirFinalArray)

    const modulesArrProp = props.build[0].chunks[0].modules;

    const modulesArr = (modulesArrProp.length !== 0) ? modulesArrProp : [];
    const modulesCount = modulesArr.length;

    const Row = ({ index, style }) => {
        // use getBytes to add units after 'size'
        const bytes = getBytes(modulesArr[index].size)
        return (<div style={style} key={index} className="row"><span className="path-span">{modulesArr[index].name}</span><span className="size-span">Size: {bytes}</span></div>);
    }

    // List props must include: height={num}, width={num}, itemCount={modulesCount}, itemData = {modulesArr},
    List.propTypes = {
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        itemSize: PropTypes.number.isRequired,
        itemCount: PropTypes.number.isRequired
    };

    // Changes filtering
    let dirFinalFiles = [];
    for (let i = 0; i < dirFinalArray.length; i++) {
        let pathString = dirFinalArray[i]
        for (let j = 1; j < pathString.length; j++) {
            for (let k = 0; k < pathString[j].length; k++) {
                dirFinalFiles.push([pathString[0] + '/' + pathString[j][k].filename, pathString[j][k].size])
            }
        }
    }

    const Changes = () => <List
        className="scroll-list"
        height={150}
        itemCount={modulesCount}
        itemData={modulesArr}
        itemSize={50}
        width={1120}
    >
        {Row}
    </List>;

    return <div className="changes">
        <strong>Changes:</strong>
        <p>Added</p>
        <Changes />
        <p>Removed</p>
        <Changes />

    </div>
}

export default ChangesTable;