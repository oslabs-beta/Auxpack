import React from 'react'
import SunburstContainer from './SunburstContainer.jsx'

const Overview = ({ build, activeBuild }) => {
    //overview container for information if we wanted more than the sunburst on the first page
    return (
        <div id="container">
            <SunburstContainer build={build} activeBuild={activeBuild} />
        </div>
    );
}

export default Overview;