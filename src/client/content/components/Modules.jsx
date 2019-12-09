import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const Modules = props => {
    const { dirFinalArray, getBytes } = props;

    //console.log(`dirFinalArray: `, dirFinalArray)
    const fileRows = dirFinalArray.map((directory) => {
        //console.log(`directory: `, directory)
        return directory[1].map((file, j) => (<tr key={file.filename + file.size + j}>
            <td>{file.filename}</td>
            <td>{getBytes(file.size)}</td>
            <td>{file.percentage}</td>
        </tr>)
        )
    })
    // if dirFinalArray.length is 0, don't render fileRows
    const hasModules = (dirFinalArray.length !== 0) ? fileRows : (<tr>
        <td>
            No files found.
    </td>
        <td>
            0 Bytes
    </td>
        <td>
            0%
        </td></tr>)
    const FileTable = () => {
        return (<table className="highlight">
            <thead>
                <tr className="card-body">
                    <th>File Name</th>
                    <th>Size</th>
                    <th>Percentage</th>
                </tr>
            </thead>
            <tbody>
                {/* file rows */}
                {hasModules}
            </tbody>
        </table>)
    }
    // const FileTable = props.dirFinalArray.map((directory) => {
    //     const fileListItems = directory[1].map((file, j) => (
    //         <tr key={file.filename + file.size + j}>
    //             <td>{file.filename}</td>
    //             <td>{props.getBytes(file.size)}</td>
    //             <td>{file.percentage}</td>
    //         </tr>
    //     ));

    // return (
    //     <div className="card module-card mw-40 darken-1" key={directory[0]}>
    //         <div className="card-content">
    //             <span className="card-title">{directory[0]}</span>
    //             <table className="highlight centered">
    //                 <thead>
    //                     <tr className="card-body">
    //                         <th>File Name</th>
    //                         <th>File Size</th>
    //                         <th>Percentage</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {fileListItems}
    //                 </tbody>
    //             </table >
    //         </div>
    //     </div>
    // );
    //     return (<table className="highlight">
    //         <thead>
    //             <tr className="card-body">
    //                 <th>File Name</th>
    //                 <th>File Size</th>
    //                 <th>Percentage</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {fileListItems}
    //         </tbody>
    //     </table >)
    // }); // end fileTable component

    const SimpleExpansionPanel = () => {
        const classes = useStyles();

        return (
            <div className={classes.root} style={{
                padding: '10px'
            }} >
                <ExpansionPanel className="expansionPanel" style={{
                    width: '100%',
                }} >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading} className="expansion-heading">
                            {/* Expansion heading */}
                            <strong className="centered">Modules</strong>
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{
                        maxHeight: '400px',
                        overflowY: 'auto',
                        backgroundColor: 'whitesmoke',
                    }}>
                        {/* FileTable - content*/}
                        <FileTable />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }

    return (
        <div className="cards-container centered">
            <SimpleExpansionPanel />
        </div>
    );
}

export default Modules;