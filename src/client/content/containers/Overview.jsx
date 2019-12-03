import React from 'react'
import SunburstContainer from './SunburstContainer.jsx'

const Overview = (props) => {
    const { build, activeBuild } = props;
    return (
        <div id="container">
            <SunburstContainer build={build} activeBuild={activeBuild} />
        </div>
    );
}

export default Overview;