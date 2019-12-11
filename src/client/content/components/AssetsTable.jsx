import React from 'react';

const AssetsTable = props => {
    const assetsArr = (props.build[0].assets.length !== 0) ? props.build[0].assets : [];

    const { getBytes } = props;
    const assetListItems = assetsArr.map((obj, i) => {

        return (<tr key={i} className="table-row">
            <td>{obj.name}</td>
            <td>{obj.chunks}</td>
            <td>{getBytes(obj.size)}</td>
        </tr>)
    })

    return (<table className="highlight">
        <thead>
            <tr>
                <th>Name</th>
                <th>Chunks</th>
                <th>File Size</th>
            </tr>
        </thead>
        <tbody>
            {assetListItems}
        </tbody>
    </table>)
}


export default AssetsTable;