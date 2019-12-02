import React from 'react'
import NavbarContainer from './NavbarContainer';
import ContentContainer from './ContentContainer'

const MainContainer = (props) => {

        return ( 
            <React.Fragment>
                <NavbarContainer/>
                <ContentContainer/>
            </React.Fragment>
         );  
         
}
 
export default MainContainer;