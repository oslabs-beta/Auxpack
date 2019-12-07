import React from 'react';

const ErrorsTable = props => {
    const errorsArr = (props.build[0].errors.length !== 0) ? props.build[0].errors : [];
    const errorsListItems = errorsArr.map((str, i) => {
        // return (<li className="errors-li" key={i}>
        //     <span>Error: {str}</span>
        // </li>)
        return (<tr key={i}>
            <td>{str}</td>
        </tr>)
    })

    const ErrorsCard = () => {
        return (<div className="card large-card darken-1">
            <div className="card-content">
                {/* <span className="card-title">Errors</span> */}
                <table className="highlight centered">
                    <thead>
                        <tr className="card-body">

                            <th>Error Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {errorsListItems}
                    </tbody>
                </table >
            </div>
        </div>)
    }

    return <div>
        <ErrorsCard />
    </div>
}

export default ErrorsTable;