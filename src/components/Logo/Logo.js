import React from 'react';
import './style.css';
import Tilt from 'react-tilt'; 
import logo from './logo.png'; 

const Logo = () =>{
    return(
        <div className = 'center'>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
            <div className="Tilt-inner braco">
                <a href="https://www.bryanpawkar.com/">
                    <img src={logo} alt="Logo Bryan Pawkar" />        
                </a>
            </div>
            </Tilt>
        </div>
    )
}
export default Logo; 