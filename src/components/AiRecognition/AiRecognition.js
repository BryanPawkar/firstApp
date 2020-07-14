import React from 'react'; 
import './style.css'; 

const AiRecognition = ({ imageUrl, box }) =>{
    return(
        <div style = {{ position: "relative", width: '60%', height: 'auto', margin: '0 auto'}}>
            <img id= "inputImage" className= 'foto' src= { imageUrl } alt= "" />
            <div className= "cajita" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
        </div>
    );
}
export default AiRecognition; 