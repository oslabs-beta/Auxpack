import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

//makestyles is a method from Material UI that styles components for Material UI
const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

const BuildSelect = ({build, selectBuild}) => {

    const classes = useStyles();

    const option = []
    //this loop created an array of elements based on the number of builds since the stats were recorded with plugin
    for (let i = 0; i < build.length; i ++) {
        option.push(<option value={build.length - 1 - i} key={`build${i + 1}`}>build {i + 1}</option>)
    }
    return ( 
        <React.Fragment>
            <FormControl className={classes.formControl}>
            <NativeSelect onChange={selectBuild}>
            {option}
            </NativeSelect>
        </FormControl>
      </React.Fragment>
     );
}
 
export default BuildSelect;