import React from 'react'
import SunburstContainer from './SunburstContainer.jsx'

const Overview = ({ build, activeBuild }) => {
    return (
        <div id="container">
            <SunburstContainer build={build} activeBuild={activeBuild} />
        </div>
    );
}

export default Overview;