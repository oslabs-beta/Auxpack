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

        return (
            <table className="highlight">
                <thead>
                    <tr className="card-body">
                        <th>Error</th>
                    </tr>
                </thead>
                <tbody>
                    {errorsListItems}
                </tbody>
            </table >
        )
    }


    return <div className="cards-container">
        <ErrorsCard />
    </div>

}

export default ErrorsTable;