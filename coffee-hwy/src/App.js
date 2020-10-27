import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation, Footer, Home, About,Receipe,Forum} from "./components";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={()=> <Home/>}/>
          <Route path="/about" exact component={()=> <About/>}/>
          <Route path="./receipe" exact componet={()=> <Receipe/>}/>
          <Route path="./forum" exact component={()=> <Forum/>}/>
        </Switch>
        <header className="App-header">
        <Header/>
      </header>
        <Footer/>
      </Router>
    </div>
  );
}

class Header extends React.Component{
  render(){
    return <h1>Coffee Highway</h1>
  }
}

export default App;