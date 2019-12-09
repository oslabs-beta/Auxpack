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

const ChangesTable = props => {
    const { dirFinalArrayPrev, dirFinalArray, getBytes } = props;
    // console.log(`prev: `, props.dirFinalArrPrev, `current: `, dirFinalArray)

    // Changes filtering
    const dirFinalFiles = [];
    for (let i = 0; i < dirFinalArray.length; i++) {
        for (let j = 1; j < dirFinalArray[i].length; j++) {
            for (let k = 0; k < dirFinalArray[i][j].length; k++) {
                dirFinalFiles.push([dirFinalArray[i][0] + '/' + dirFinalArray[i][j][k].filename, dirFinalArray[i][j][k].size])
            }
        }
    }

    const dirFinalFilesPrev = [];
    for (let i = 0; i < dirFinalArrayPrev.length; i++) {
        for (let j = 1; j < dirFinalArrayPrev[i].length; j++) {
            for (let k = 0; k < dirFinalArrayPrev[i][j].length; k++) {
                dirFinalFilesPrev.push([dirFinalArrayPrev[i][0] + '/' + dirFinalArrayPrev[i][j][k].filename, dirFinalArrayPrev[i][j][k].size])
            }
        }
    }

    // added files
    const added = dirFinalFiles.filter((curr) => {
        let previous = dirFinalFilesPrev.map((item) => item[0])
        return !previous.includes(curr[0])
    })
    // removed files
    const removed = dirFinalFilesPrev.filter((curr) => {
        let original = dirFinalFiles.map((item) => item[0])
        return !original.includes(curr[0])
    });
    const additions = [];
    if (added.length === 0) {
        additions.push({ path: 'No additions', size: 0 })
    } else {
        for (let i = 0; i < added.length; i += 1) {
            const path = added[i][0]
            const size = added[i][1]
            additions.push({ path, size });
        }
    }
    const removals = [];
    if (removed.length === 0) {
        removals.push({ path: 'No removals', size: 0 })
    } else {
        for (let i = 0; i < removed.length; i += 1) {
            const path = removed[i][0]
            const size = removed[i][1]
            removals.push({ path, size });
        }
    }

    const additionListItems = additions.map((obj, i) => {
        return (<tr key={i} className="table-row">
            <td>{obj.path}</td>
            <td>{getBytes(obj.size)}</td>
        </tr>)
    })
    const removalListItems = additions.map((obj, i) => {
        return (<tr key={i} className="table-row">
            <td>{obj.path}</td>
            <td>{getBytes(obj.size)}</td>
        </tr>)
    })

    const AdditionCard = () => {
        return (<table className="highlight">
            <thead>
                <tr className="card-body">
                    <th>File Path</th>
                    <th>File Size</th>
                </tr>
            </thead>
            <tbody>
                {additionListItems}
            </tbody>
        </table >)

    }

    const RemovalCard = () => {
        return (
            <table className="highlight">
                <thead>
                    <tr className="card-body">
                        <th>File Path</th>
                        <th>File Size</th>
                    </tr>
                </thead>
                <tbody>
                    {removalListItems}
                </tbody>
            </table >

        )
    }

    const SimpleExpansionPanel = () => {
        const classes = useStyles();

        return (
            <div className={classes.root} >
                <ExpansionPanel className="expansionPanel">
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading} className="expansion-heading">
                            {/* Expansion heading */}
                            <strong className="centered">Additions</strong>
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="panelDetails">
                        {/* Additions Card Panel - content*/}
                        <AdditionCard />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                {/* Second expansion */}
                <ExpansionPanel className="expansionPanel">
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"

                    >
                        {/* Expansion heading */}
                        <Typography className={classes.heading} className="center-heading" className="expansion-heading">
                            <strong className="centered">Removals</strong>
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="panelDetails">
                        {/* Removals Card Panel - content*/}
                        <RemovalCard />
                    </ExpansionPanelDetails>
                </ExpansionPanel>

            </div>
        );
    }

    return <div className="cards-container centered">
        <SimpleExpansionPanel />
    </div>
}

export default ChangesTable;
