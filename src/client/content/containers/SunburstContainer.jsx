import React, { useState, useEffect } from 'react';
import Sunburst from '../components/Sunburst.jsx'

const SunburstContainer = ({ build, activeBuild }) => {
    //currently unused --> hooks for graphs
    const [defaultBar, setBar] = useState(false);
    const [dataBar, setDataBar] = useState([]);
    const [burstData, setData] = useState([]);
    //this hook displays data into graphs based on hovering
    const [activeBurst, setBurst] = useState(null);

    // parse data, return array of arrays, each subarray contains [path, sizeString]
    const dataParser = () => {
        const data = build;

        //loops through assets
        let i = activeBuild;
        //let pathAry;
        let path;
        let sizeStr;
        let sunBurstData = [];
        // check if data is empty

        if (data.length !== 0) {
            for (let k = 0; k < data[i].chunks.length; k++) {
                for (let l = 0; l < data[i].chunks[k].modules.length; l++) {
                    sizeStr = data[i].chunks[k].modules[l].size.toString();
                    path = data[i].chunks[k].modules[l].name.replace("./", "");
                    sunBurstData.push([path, sizeStr])
                }
            }
            return sunBurstData;
        }
    } // end dataParser definition

    useEffect(() => {
        const parsedData = dataParser();
        setData(parsedData);
    }, [activeBuild]) // 2nd arg: dependency that change (activeBuild changes build --> rerenders)

    const handleBurstHover = (path) => {
        setBurst(path)
    }

    //conditional rendering to indicate loading of the data prior to data being fetched
    return ( 
    <React.Fragment>
        {(burstData !== undefined) ? <Sunburst
            burstData={burstData}
            onHover={handleBurstHover}
        /> : <h1 id="loading">Loading...</h1>}
    </React.Fragment>
    )
}

export default SunburstContainer;