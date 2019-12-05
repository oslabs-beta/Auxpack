import React, { useEffect, useState } from 'react'
import NavbarContainer from './NavbarContainer';
import ContentContainer from './ContentContainer'

const MainContainer = (props) => {
    const [build, setBuild] = useState([]);
    const [activeBuild, setActiveBuild] = useState(0);

    useEffect(() => {
        console.log(`fetching in USEEFFECT`)
        fetch('/getStats')
            .then(res => res.json())
            .then(data => {
                setBuild(data)
                setActiveBuild(data.length - 1)
            })
            .catch(err => console.log(err))
    }, [])



    const clickHandler = e => {
        const length = build.length;
        const i = length - e.target.getAttribute('data-build');
        setActiveBuild(length - i);
    }

    const selectBuild = e => {
        const i = parseInt(e.target.value);
        setActiveBuild(i)
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
                build={(build.length !== 0) ? build : []}
                activeBuild={activeBuild}
                selectBuild={selectBuild}
            />
            <ContentContainer
                build={(build.length !== 0) ? build : []}
                activeBuild={activeBuild}
                clickHandler={clickHandler}
                handleInc={handleInc}
                handleDec={handleDec}
            />
        </React.Fragment>
    );

}

export default MainContainer;