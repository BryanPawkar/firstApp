import React from 'react'; 
import './style.css';

const Registre = ({ onRouteChange }) =>{
    return(
            <div>
                <div className = 'form' action="#" method="post">
                    <h2>Crear Usuario</h2>
                        <p>
                            <label htmlFor="name" className="floatLabel">Name</label>
                            <input id="name" name="name" type="text"/>
                        </p>
                        <p>
                            <label htmlFor="email" className="floatLabel">Email</label>
                            <input id="email" name="email" type="text"/>
                            <span>Enter a valid mail direction</span>
                        </p>
                        <p>
                            <label htmlFor="password" className="floatLabel">Create Password</label>
                            <input id="password" name="password" type="password"/>
                            <span>Your passwords must be longer</span>
                        </p>
                        <p>
                        <input 
                            onClick = {() => onRouteChange('home')}
                            type="submit" 
                            value="Crear" 
                            id="submit"/>
                        </p>
                </div>
        </div>
    );
}
export default Registre; 