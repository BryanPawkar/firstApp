import React from 'react'; 
import './style.css'; 

const ImageSearchBar = () =>{
    return(
        <div className = 'barra'>
            <p>
                {'This magic will detect faces in your pictures,'}<span className='parpadeo'> try it.</span>
            </p>
            <div className= 'center'>
                <div className='caja'>
                    <input type= 'text' placeholder= "https://www.example.com/imagen.jpeg"/>
                    <button><div class="brillo"></div>DETECTAR</button>
                </div>
            </div>
        </div> 
    )
}
export default ImageSearchBar; 