import React, { useEffect, useState } from 'react'
import NavbarContainer from './NavbarContainer';
import ContentContainer from './ContentContainer'

const MainContainer = (props) => {
    const [build, setBuild] = useState([]);
    const [activeBuild, setActiveBuild] = useState(0);

    useEffect(() => {
        //fetch used to hit enpoint that bring data from Webpack plugin to be displayed on front end
        //setActiveBuild at the end of the length to start from last build analyzed as "first"
        fetch('getStats')
            .then(res => res.json())
            .then(data => {
                setBuild(data)
                setActiveBuild(data.length - 1)
            })
            .catch(err => console.log(err))
    }, [])


    //clickHandler to change build (unused)
    const clickHandler = e => {
        const length = build.length;
        const i = length - parseInt(e.target.value);
        setActiveBuild(length - i);
    }

    //Selecting a build utilizing a select element that alters the active build to be displayed
    const selectBuild = e => {
        const i = parseInt(e.target.value);
        setActiveBuild(i)
    }

    //method for incrementing the active build for buttons (unused)
    const handleInc = () => {
        if (activeBuild < build.length - 1) {
            activeBuild += 1;
            setActiveBuild(activeBuild)
        }
    }

    //method for decrementing the active build for buttons (unused)
    const handleDec = () => {
        if (activeBuild > 0) {
            activeBuild -= 1;
            setActiveBuild(activeBuild)
        }
    }

    // Navbar props: build, activeBuild, selectBuild
    // ContentContainer props: build, activeBuild, selectBuild 
    //all methods except build

    return (
        //conditional rendering to prevent errors without data being available 
        <React.Fragment>
            <ContentContainer
                build={(build.length !== 0) ? build : []}
                activeBuild={activeBuild}
                clickHandler={clickHandler}
                handleInc={handleInc}
                handleDec={handleDec}
            />
            <NavbarContainer
                build={(build.length !== 0) ? build : []}
                activeBuild={activeBuild}
                selectBuild={selectBuild}
            />
        </React.Fragment>
    );

}

export default MainContainer;