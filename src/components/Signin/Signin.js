import React from 'react'; 
import './style.css';

const Signin = ({ onRouteChange }) =>{
    return(
            <div>
                <div className= 'form' action="#" method="post">
                    <h2>Ingresar</h2>
                        <p>
                            <label htmlFor="email" className="floatLabel">Email</label>
                            <input id="email" name="email" type="text"/>
                            <span>Enter a correct password</span>
                        </p>
                        <p>
                            <label htmlFor="password" className="floatLabel">Password</label>
                            <input id="password" name="password" type="password"/>
                            <span>Your passwords must be longer than 8 characteres</span>
                        </p>
                        <p>
                        <input 
                            onClick = {() => onRouteChange('home')}
                            type="submit" 
                            value="Ingresar" 
                            id="submit"/>
                        </p>
                    <p  style={{color: 'gray', textDecoration: 'underline', cursor: 'pointer'}} onClick = {() => onRouteChange('registre')}>Registrarse</p>
                </div>
        </div>
    );
}
export default Signin; 