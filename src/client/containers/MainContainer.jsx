import React, { useEffect, useState } from 'react'
import NavbarContainer from './NavbarContainer';
import ContentContainer from './ContentContainer'

const MainContainer = (props) => {
    const [build, setBuild] = useState([]);

    useEffect(() => {
        fetch('/getStats')
            .then(res => res.json())
            .then(data => setBuild(data))
            .catch(err => console.log(err))
    }, [])

    console.log(`build in MainContainer: `, build)

    const [activeBuild, setActiveBuild] = useState(0);

    const clickHandler = e => {
        const length = build.length;
        const i = length - e.target.getAttribute('data-build');
        setActiveBuild(length - i);
    }
    const selectBuild = e => {
        const i = e.target.getAttribute('data-build');
        setActiveBuild(i - 1)
    }

    const handleInc = () => {
        if (activeBuild < build.length - 1) {
            activeBuild += 1;
            setActiveBuild(activeBuild)
        }
    }

    const handleDec = () => {
        if (activeBuild > 0) {
            activeBuild -= 1;
            setActiveBuild(activeBuild)
        }
    }

    // Navbar props: build, activeBuild, selectBuild
    // ContentContainer props: build, activeBuild, all methods except selectBuild

    return (
        <React.Fragment>
            <NavbarContainer
                build={build}
                activeBuild={activeBuild}
                selectBuild={selectBuild}
            />
            <ContentContainer
                build={build}
                activeBuild={activeBuild}
                clickHandler={clickHandler}
                handleInc={handleInc}
                handleDec={handleDec}
            />
        </React.Fragment>
    );

}

export default MainContainer;