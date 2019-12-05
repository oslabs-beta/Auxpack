import React from 'react';
import { FixedSizeList as List } from 'react-window';


const ErrorsTable = props => {
    const errorsArr = (props.build[0].errors.length !== 0) ? props.build[0].errors : [];

    const Row = ({ index, style }) => (<div style={style} key={index}>Error {index + 1}: {(errorsArr[index]) ? errorsArr[index] : 'No errors.'} </div>);
    // List props must include: height={num}, width={num}, itemCount={errorsArr.length}, itemData = {errorsArr},

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