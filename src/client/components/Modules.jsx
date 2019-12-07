import React from 'react';

const Modules = props => {

    const fileTable = props.dirFinalArray.map((directory) => {
        const fileListItems = directory[1].map((file, j) => (
            <tr key={file.filename + file.size + j}>
                <td>{file.filename}</td>
                <td>{props.getBytes(file.size)}</td>
                <td>{file.percentage}</td>
            </tr>
        ));

        return (
            <div className="module-card card darken-1" key={directory[0]}>
                <span className="card-title" style={{ color: '#3F51B5' }}>{directory[0]}</span>
                <table className="highlight centered">
                    <thead>
                        <tr className="card-body">
                            <th>File Name</th>
                            <th>File Size</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fileListItems}
                    </tbody>
                </table >
            </div>
        );
    }); // end fileTable component

    return (
        <div className="module-container">
            {fileTable}
        </div>
    );
}

export default Modules;