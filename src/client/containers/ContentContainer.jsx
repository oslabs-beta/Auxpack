import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Overview from '../content/containers/Overview.jsx'
import BuildData from '../content/containers/BuildData.jsx'

const ContentContainer = (props) => {

    const { build, activeBuild } = props;
    //console.log(`build prop in ContentContainer: `, build)
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