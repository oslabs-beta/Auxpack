import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import Overview from '../content/containers/Overview.jsx'
import BuildData from '../content/containers/BuildData.jsx'
import Recommendations from '../content/containers/Recommendations.jsx'
import mockStats from '../../mockData';
const ContentContainer = (props) => {
    const [mockData, setMockData] = useState([])

    useEffect(() => {
        setMockData(mockStats)
    }, [])
    console.log(`mock data: `, mockData)
    return (
        <React.Fragment>
            <Switch>
                <Route
                    exact path="/"
                    render={() => (
                        <Overview mockData={mockData} />
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