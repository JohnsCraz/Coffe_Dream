import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
    </div>
  );
}

class Header extends React.Component{
  render(){
    return <h1>Coffee Highway</h1>
  }
}

class EnterButton extends React.Component{
  render(){
    return <div className = "enter-button" onClick></div>
  }
}

export default App;