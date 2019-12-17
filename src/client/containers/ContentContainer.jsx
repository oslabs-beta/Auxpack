import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Overview from '../content/containers/Overview.jsx';
import BuildData from '../content/containers/BuildData.jsx';
import TreeShaking from '../content/containers/TreeShaking.jsx';
import HistoryCharts from '../content/containers/HistoryCharts.jsx';

const ContentContainer = ({ build, activeBuild, handleInc, handleDec }) => {
    //Switch creates exclusive routes
    //Route creates paths that conditionally render components
    return (
        <React.Fragment>
            <Router>
            <Switch>
                <Route
                    exact path="/"
                    render={() => (
                        <Overview
                            build={build}
                            activeBuild={activeBuild}
                        />
                    )}
                />
                <Route
                    exact path="/build"
                    render={() => (
                        <BuildData
                            build={build}
                            activeBuild={activeBuild}
                            handleDec={handleDec}
                            handleInc={handleInc}
                        />
                    )}
                />
                <Route
                    exact path="/treeshaking"
                    render={() => (
                        <TreeShaking
                            build={build}
                            activeBuild={activeBuild}
                        />
                    )}
                />
                <Route
                    exact path="/history"
                    render={() => (
                        <HistoryCharts
                            build={build}
                        />
                    )}
                />
            </Switch>
            </Router>
        </React.Fragment>
    );
}

export default ContentContainer;