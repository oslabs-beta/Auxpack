import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import { FixedSizeList as List } from 'react-window';

const ChangesTable = (props) => {
    //console.log(`props.build:`, props.build[0].chunks[0].modules.length)
    // modules array has objects, each object has name(path) and size properties.
    const modulesArrProp = props.build[0].chunks[0].modules;

    const modulesArr = (modulesArrProp.length !== 0) ? modulesArrProp : [];
    const modulesCount = modulesArr.length;

    const rowHeights = new Array(modulesCount)
        .fill(true)
        .map(() => 25 + Math.round(Math.random() * 50));

    //const getItemSize = index => rowHeights[index];

    const Row = ({ index, style }) => (<div style={style} key={index}>Modules: {modulesArr[index].name}</div>);
    // // List props must include: height={num}, width={num}, itemCount={modulesCount}, itemData = {modulesArr},
    List.propTypes = {
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        itemSize: PropTypes.number.isRequired,
        itemCount: PropTypes.number.isRequired
    };

    const Changes = () => (
        <List style={{
            margin: '0 auto'
        }}
            height={150}
            itemCount={modulesCount}
            itemSize={50}
            width={900}
        >
            {Row}
        </List>
    );

    return <div>

        <div>
            <strong>Changes:</strong>
            <Changes />
        </div>
    </div>
}

export default ChangesTable;