import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import { FixedSizeList as List } from 'react-window';


const ErrorsTable = props => {
    const errorsArr = (props.build[0].errors.length !== 0) ? props.build[0].errors : [];
    console.log(`Errors: `, errorsArr)


    // const rowHeights = new Array(errorsArr.length)
    //     .fill(true)
    //     .map(() => 25 + Math.round(Math.random() * 50));

    //const getItemSize = index => rowHeights[index];

    const Row = ({ index, style }) => (<div style={style} key={index}>Error {index + 1}: {(errorsArr[index]) ? errorsArr[index] : 'No errors.'} </div>);
    // List props must include: height={num}, width={num}, itemCount={errorsArr.length}, itemData = {errorsArr},

    // List.propTypes = {
    //     height: PropTypes.number.isRequired,
    //     width: PropTypes.number.isRequired,
    //     itemSize: PropTypes.number.isRequired,
    //     itemCount: PropTypes.number.isRequired
    // };

    console.log(Row)
    const Errors = () => (
        <List style={{
            margin: '0 auto'
        }}
            height={150}
            itemCount={errorsArr.length}
            itemSize={50}
            width={900}
        >
            {Row}
        </List>
    );

    return <div>
        <strong>Errors</strong>
        <Errors />
    </div>
}

export default ErrorsTable;