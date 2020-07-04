import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Header from './components/Header/Header';
import ImageSearchBar from './components/ImageSearchBar/ImageSearchBar';
import Rank from './components/Rank/Rank';
import './App.css';

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
    }, 
    interactivity:{
      detect_on: "window",
      onhover: {
        enable: true, 
        mode: "bubble"
      }
    },
    retina_detect: true
  }
}

class App extends Component{
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
        <Rank/>
        <ImageSearchBar/>
        {/*
        <AiRecognition/>*/}
      </div>
    )
  }
}

export default App;
