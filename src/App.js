import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Header from './components/Header/Header';
import ImageSearchBar from './components/ImageSearchBar/ImageSearchBar';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin'; 
import AiRecognition from './components/AiRecognition/AiRecognition';
import Space from './components/Space/Space'; 
import './App.css';


const app = new Clarifai.App({
  apiKey: 'cb5b3e569b3741ee93a08272e14f332b'
 });
const particlesCustom = {
  particles: {
    number:{
      value: 100,
      density:{
        enable: true, 
        value_area: 1200
      }
    },
    shadow: {
      enable: true,
      color: "#3CA9D1",
      blur: 6
    }
  },
  interactivity:{
      onclick: {
        enable: true, 
        mode: "push"
      },
      repulse: {
        distance: 112
      },
      detect_on: "window",
      onhover: {
        enable: true, 
        mode: "repulse"
      }
    },
    retina_detect: true
  }

class App extends Component{
  constructor(){
    super();
    this.state = {
      input: '', 
      imageUrl: '',
      box: {},
    }
  }

  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height); 
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height) 

    }
  }
  displayFace = (box) =>{
    this.setState( { box: box }) 
  }
  onInputChange = (event) =>{
    this.setState({input: event.target.value}) 
  }
  onSubmitButton = () =>{
      this.setState({imageUrl: this.state.input})
        app.models.predict(
          Clarifai.FACE_DETECT_MODEL, 
          this.state.input)
        .then(response => this.displayFace(this.calculateFaceLocation(response)))
        .catch( err => console.log(err));
  }
  render(){
    return( 
      <div className="App">
        <Particles 
          className = 'particles'
          params={particlesCustom}
        />
        <Navigation />
        <Header />
        <Logo />
        <Signin />
        <Space/>
        <ImageSearchBar 
          onInputChange={this.onInputChange}
          onSubmitButton={this.onSubmitButton}
        />
        <AiRecognition box={ this.state.box } imageUrl= {this.state.imageUrl}/>
        <Rank/>
      </div>
    )
  }
}

export default App;
