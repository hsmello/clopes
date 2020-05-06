import React from 'react';
import ResponsiveMenu from './Menu/ResponsiveMenu';
import { Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home'
import Sobre from './Pages/Sobre/Sobre'

function App() {
  return (
    <div>

      <ResponsiveMenu />

      <Route exact path="/" component={Home} />  
      <Route exact path="/sobre" component={Sobre} />  
    
    </div>
  );
}

export default App;
