import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Navigation.css'

const Navigation = ({onRouteChange, isSignedIn}) => {
            return(
                isSignedIn &&
                (
                <div className="navigation">
                    <p onClick={() => onRouteChange('signout')}>Sign Out</p>
                    
                    <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 120, width: 150 }} >
                        <div className="Tilt-inner pa3">
                            <img style={{ paddingTop:'5px', filter:'invert(1)', width: '80px', height: '80px'}} src={brain} alt='logo'/>     
                        </div>
                    </Tilt>

                </div>
                
                )
            )
}


export default Navigation