import React from 'react';
import { FixedSizeList as List } from 'react-window';


const ErrorsTable = props => {
    const errorsArr = (props.build[0].errors.length !== 0) ? props.build[0].errors : [];
    //const errorsArr = []
    const Row = ({ index, style }) => (<div className="row" style={style} key={index}>Error {index + 1}: {(!errorsArr[index]) ? 'No errors.' : errorsArr[index]} </div>);
    // List props must include: height={num}, width={num}, itemCount={errorsArr.length}, itemData = {errorsArr},

    const Errors = () => (
        <List
            className="scroll-list"
            height={150}
            itemCount={errorsArr.length}
            itemSize={50}
            width={1100}
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