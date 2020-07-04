import React from 'react'; 
import './style.css'; 

const ImageSearchBar = () =>{
    return(
        <div className = 'barra'>
            <p>
                {'This magic will detect faces in your pictures,'}<span className='parpadeo'> try it.</span>
            </p>
            <div>
                <input type= 'text' placeholder= "https://www.example.com/imagen.jpeg"/>
                <button>DETECTAR</button>
            </div>
        </div> 
    )
}
export default ImageSearchBar; 