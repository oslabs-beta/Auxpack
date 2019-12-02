import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import Overview from '../content/containers/Overview.jsx'
import BuildData from '../content/containers/BuildData.jsx'
import Recommendations from '../content/containers/Recommendations.jsx'
// import mockStats from '../../mockData';
const ContentContainer = (props) => {
    const [mockData, setMockData] = useState([]);

    useEffect(() => {
        //setMockData(mockStats)

        fetch('/getStats')
            .then(res => res.json())
            .then(data => setMockData([...data]))
            .catch(err => console.log(err))
    }, [])

    console.log(`mock data: `, mockData)

    const [activeBuild, handleClick] = useState(mockData.length - 1);

    const clickHandler = e => {
        const length = mockData.length;
        const i = length - e.target.getAttribute('data-build');
        handleClick()
    }

    return (
        <React.Fragment>
            <Switch>
                <Route
                    exact path="/"
                    render={() => (
                        <Overview mockData={mockData} activeBuild={activeBuild} />
                    )}
                />
                <Route
                    exact path="/builds"
                    render={() => (
                        <BuildData />
                    )}
                />
                <Route
                    exact path="/recommendations"
                    render={() => (
                        <Recommendations />
                    )}
                />
            </Switch>
        </React.Fragment>
    );
}

export default ContentContainer;