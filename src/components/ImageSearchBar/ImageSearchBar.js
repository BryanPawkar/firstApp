import React from 'react'; 
import './style.css'; 

const ImageSearchBar = ({ onInputChange, onSubmitButton }) =>{
    return(
        <div className = 'barra'>
            <p style={{width: "95%", textAlign: 'center', margin: '0 auto', padding: '1rem'}}>
                {'This magic will detect faces in your pictures,'}<span className='parpadeo'> try it.</span>
            </p>
            <div className= 'center'>
                <div className='caja'>
                    <input style={{fontSize: '1em'}} type= 'text' placeholder= "https://www.example.com/imagen.jpeg" onChange= {onInputChange}/>
                    <button onClick= {onSubmitButton}><div className="brillo"></div>DETECTAR</button>
                </div>
            </div>
        </div> 
    )
}
export default ImageSearchBar; 