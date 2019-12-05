import React from 'react';
import BottomNavigation from '../components/BottomNavigation.jsx'
import BuildSelect from '../components/BuildSelect.jsx'

const NavbarContainer = ({build, activeBuild, selectBuild}) => {
    return ( 
        <div id="nav">
            <BottomNavigation />
            <BuildSelect build={build} activeBuild={activeBuild} selectBuild={selectBuild} />
        </div>
        
     );
}
 
export default NavbarContainer;