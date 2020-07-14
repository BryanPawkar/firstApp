import React from 'react'; 
import './style.css';
const Navigation = ({ onRouteChange, isSignIn}) => {
        if(isSignIn){
            return(
                <nav style={{display: 'flex', justifyContent:'flex-end', padding: '0 1em' }}>
                    <h3 onClick={()=> onRouteChange('signOut')}>Salir</h3>
                </nav>
            )
        }else{
            return(
                <nav style={{display: 'flex', justifyContent:'flex-end', padding: '0 1em' }}>
                    <h3 onClick={()=> onRouteChange('signin')}>Ingresar</h3>
                    <h3 onClick={()=> onRouteChange('registre')}> /Registrarse</h3>
                </nav>
            )
        }
}
export default Navigation; 