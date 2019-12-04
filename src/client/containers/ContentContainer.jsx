import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Overview from '../content/containers/Overview.jsx'
import BuildData from '../content/containers/BuildData.jsx'

const ContentContainer = (props) => {
    console.log(`build prop in ContentContainer: `, props.build)
    const { build, activeBuild, handleInc, handleDec } = props;
    return (
        <React.Fragment>
            <Switch>
                <Route
                    exact path="/"
                    render={() => (
                        <Overview build={build} activeBuild={activeBuild} />
                    )}
                />
                <Route
                    exact path="/builds"
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