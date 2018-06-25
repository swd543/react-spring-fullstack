import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GenericButton from './components/GenericButton';
import GenericTextEntry from './components/GenericTextEntry';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      isLoading:true,
      beers:0
    }
  }


  render() {
    if(this.state.isLoading){
      return <p>Loading {this.state.beers}</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          Last refreshed at {new Date(this.state.beers).toUTCString()}
        </p>
        <GenericTextEntry/>
        <GenericButton url="http://localhost:8080/ping" name="Ping"/>
        <GenericButton url="http://localhost:8080/users" name="Users"/>
        <GenericButton url="http://localhost:8080/time" name="Time"/>
        <GenericButton url="http://localhost:8080/" name="Default"/>
      </div>
    );
  }

  componentDidMount() {
    this.setState({isLoading: true});
  
    fetch('http://localhost:8080/time')
      .then(response => response.json())
      .then(data => this.setState({beers: data, isLoading: false}));
  }
}

export default App;
