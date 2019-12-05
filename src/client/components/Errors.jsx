import React from 'react';
import { FixedSizeList as List } from 'react-window';


const ErrorsTable = props => {
    const errorsArr = (props.build[0].errors.length !== 0) ? props.build[0].errors : [];
    //const errorsArr = []
    // const Row = ({ index, style }) => (<div className="row" style={style} key={index}>Error {index + 1}: {(!errorsArr[index]) ? 'No errors.' : errorsArr[index]} </div>);
    // List props must include: height={num}, width={num}, itemCount={errorsArr.length}, itemData = {errorsArr},

    // const Errors = () => (
    //     <List
    //         className="scroll-list"
    //         height={150}
    //         itemCount={errorsArr.length}
    //         itemSize={50}
    //         width={1100}
    //     >
    //         {Row}
    //     </List>
    // );
    const errorsListItems = errorsArr.map((str, i) => {
        return (<li className="errors-li" key={i}>
            <span>Error: {str}</span>
        </li>)
    })

    const ErrorsCard = () => {
        return (<div className="card large-card darken-1">
            <div className="card-content">
                <span className="card-title">Errors</span>
                <ul className="changes-list">
                    {errorsListItems}
                </ul>
            </div>
        </div>)
    }

    return <div>
        <ErrorsCard />
    </div>
}

export default ErrorsTable;