import React from 'react';


const ErrorsTable = props => {
    const errorsArr = (props.build[0].errors.length !== 0) ? props.build[0].errors : [];
    const errorsListItems = errorsArr.map((str, i) => {
        // return (<li className="errors-li" key={i}>
        //     <span>Error: {str}</span>
        // </li>)
        return (<tr key={i} className="word-break">
            <td>{str}</td>
        </tr>)
    })



    return (<table className="highlight error-table">
        <thead>
            <tr>
                <th>Error Messages:</th>
            </tr>
        </thead>
        <tbody>
            {errorsListItems}
        </tbody>
    </table >)
}

export default ErrorsTable;