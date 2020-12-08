import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation, Footer, Home, About, Receipe ,Forum} from "./components";
import './App.css';

class App extends Component{
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
  render(){
    return (
      <div className="App">
        <Router>
          <header className="App-header">
          <Navigation/>
          <Switch>
            <Route path="/" exact component={()=> <Home/>}/>
            <Route path="/about" exact component={()=> <About/>}/>
            <Route path="/receipe" exact component={()=> <Receipe/>}/>
            <Route path="/forum" exact component={()=> <Forum/>}/>
          </Switch>
            <p>{this.state.response}</p>
            <form onSubmit={this.handleSubmit}>
              <p>
                <strong>Post to Server:</strong>
              </p>
              <input
                type="text"
                value={this.state.post}
                onChange={e => this.setState({ post: e.target.value })}
              />
              <button type="submit">Submit</button>
            </form>
          <p>{this.state.responseToPost}</p>
          </header>
          <Footer/>
        </Router> 
      </div>
  );
  }
}



export default App;