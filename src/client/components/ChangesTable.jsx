import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import { FixedSizeList as List } from 'react-window';
// import InfiniteLoader from 'react-window-infinite-loader';

const ChangesTable = (props) => {
    const { dirFinalArrayPrev, dirFinalArray, getBytes } = props;
    // console.log(`prev: `, props.dirFinalArrPrev, `current: `, dirFinalArray)

    const modulesArrProp = props.build[0].chunks[0].modules;

    const modulesArr = (modulesArrProp.length !== 0) ? modulesArrProp : [];
    const modulesCount = modulesArr.length;

    List.propTypes = {
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        itemSize: PropTypes.number.isRequired,
        itemCount: PropTypes.number.isRequired
    };

    // Changes filtering
    const dirFinalFiles = [];
    for (let i = 0; i < dirFinalArray.length; i++) {
        for (let j = 1; j < dirFinalArray[i].length; j++) {
            for (let k = 0; k < dirFinalArray[i][j].length; k++) {
                dirFinalFiles.push([dirFinalArray[i][0] + '/' + dirFinalArray[i][j][k].filename, dirFinalArray[i][j][k].size])
            }
        }
    }

    const dirFinalFilesPrev = [];
    for (let i = 0; i < dirFinalArrayPrev.length; i++) {
        for (let j = 1; j < dirFinalArrayPrev[i].length; j++) {
            for (let k = 0; k < dirFinalArrayPrev[i][j].length; k++) {
                dirFinalFilesPrev.push([dirFinalArrayPrev[i][0] + '/' + dirFinalArrayPrev[i][j][k].filename, dirFinalArrayPrev[i][j][k].size])
            }
        }
    }

    // added files
    const added = dirFinalFiles.filter((curr) => {
        let previous = dirFinalFilesPrev.map((item) => item[0])
        return !previous.includes(curr[0])
    })
    // removed files
    const removed = dirFinalFilesPrev.filter((curr) => {
        let original = dirFinalFiles.map((item) => item[0])
        return !original.includes(curr[0])
    });
    const additions = [];
    if (added.length === 0) {
        additions.push({ path: 'No additions', size: 0 })
    } else {
        for (let i = 0; i < added.length; i += 1) {
            const path = added[i][0]
            const size = added[i][1]
            additions.push({ path, size });
        }
    }
    const removals = [];
    if (removed.length === 0) {
        removals.push({ path: 'No removals', size: 0 })
    } else {
        for (let i = 0; i < removed.length; i += 1) {
            const path = removed[i][0]
            const size = removed[i][1]
            removals.push({ path, size });
        }
    }
    console.log(`final files: `, dirFinalFiles, `added: `, additions, `and removed: `, removals)
    // List props must include: height={num}, width={num}, itemCount={modulesCount}, itemData = {modulesArr},
    const AddedRow = ({ index, style }) => {
        // use getBytes to add units after 'size'
        const size = getBytes(additions[index].size)
        return (<div style={style} key={index} className="row">
            <span className="path-span">{additions[index].path}</span>
            <span className="size-span">Size: {size}</span>
        </div>);
    }
    const RemovedRow = ({ index, style }) => {
        // use getBytes to add units after 'size'
        const size = getBytes(removals[index].size)
        return (<div style={style} key={index} className="row">
            <span className="path-span">{removals[index].path}</span>
            <span className="size-span">Size: {size}</span>
        </div>);
    }

    const AddedTable = () => <List
        className="scroll-list"
        height={150}
        itemCount={additions.length}
        itemData={additions}
        itemSize={50}
        width={1120}
    >
        {AddedRow}
    </List>;
    const RemovedTable = () => <List
        className="scroll-list"
        height={150}
        itemCount={removals.length}
        itemData={removals}
        itemSize={50}
        width={1120}
    >
        {RemovedRow}
    </List>;

    return <div className="changes">
        <strong>Changes:</strong>
        <h5>Additions:</h5>
        <AddedTable />
        <h5>Removals:</h5>
        <RemovedTable />
    </div>
}

export default ChangesTable;
