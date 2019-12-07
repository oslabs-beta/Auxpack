import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import { FixedSizeList as List } from 'react-window';


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
    const AssetsCard = () => {
        return (
            <table className="highlight">
                <thead>
                    <tr className="card-body">
                        <th>Name</th>
                        <th>Chunks</th>
                        <th>File Size</th>
                    </tr>
                </thead>
                <tbody>
                    {assetListItems}
                </tbody>
            </table >
        )
    }

    return <div className="cards-container">
        <AssetsCard />
    </div>


}

export default AssetsTable;