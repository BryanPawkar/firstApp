import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Header from './components/Header/Header';
import ImageSearchBar from './components/ImageSearchBar/ImageSearchBar';
import './App.css';

class App extends Component{
  render(){
    return( 
      <div className="App">
        <Navigation />
        <Header />
        <Logo />
        <ImageSearchBar/>
        {/*
        <AiRecognition/>*/}
      </div>
    )
  }
}

export default App;
