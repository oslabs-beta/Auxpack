import React from 'react';
import BottomNavigation from '../components/BottomNavigation.jsx'
import BuildSelect from '../components/BuildSelect.jsx'

const NavbarContainer = ({build, activeBuild, selectBuild}) => {
    //navbar split up into components for the bottom navigation that changes routes and a selector for active builds
    return ( 
        <div id="nav">
            <BottomNavigation />
            <BuildSelect build={build} activeBuild={activeBuild} selectBuild={selectBuild} />
        </div>
        
     );
}
 
export default NavbarContainer;