import React from 'react'
import SunburstContainer from './SunburstContainer.jsx'
const Overview = (props) => {
    //console.log(`props.build in Overview: `, props.build)
    const { build, activeBuild } = props;
    return (
        <div id="container">
            {/* <p>overview</p> */}
            <SunburstContainer build={build} activeBuild={activeBuild} />
        </div>
    );
}

export default Overview;