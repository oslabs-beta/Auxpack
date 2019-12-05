import React, { useState, useEffect } from 'react';
import Sunburst from '../../views/sunburst/Sunburst.jsx'
import { parse } from 'path';

const SunburstContainer = ({ build, activeBuild }) => {
    //console.log(`build props in SunburstContainer: `, build, activeBuild);

    const [defaultBar, setBar] = useState(false);
    const [dataBar, setDataBar] = useState([]);
    const [burstData, setData] = useState([]);
    const [activeBurst, setBurst] = useState(null);
    //console.log(`activeBuild `, activeBuild)

    // parse data, return array of arrays, each subarray contains [path, sizeString]
    const dataParser = () => {
        const data = build;

        //loops through assets
        let i = activeBuild;
        //console.log(`activeBuild in dataParser`, activeBuild)
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
    }, [activeBuild]) // second arg: dependency that change

    const handleBurstHover = (path) => {
        setBurst(path)
    }


    return <React.Fragment>
        {(burstData !== undefined) ? <Sunburst
            burstData={burstData}
            onHover={handleBurstHover}
        /> : <h1>Loading...</h1>}
    </React.Fragment>
}

export default SunburstContainer;