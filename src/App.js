import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ObjectivesContainer from './containers/ObjectivesContainer'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { api } from './services/api'
import './App.css';

const INITIAL_STATE = {
  user: {},
  objectives: [],
  goals: []
}

class App extends Component {
  state = INITIAL_STATE

  // Lifecycle Methods
  componentDidMount() {
    api.auth.getCurrentUser().then(user => {
      console.log(user)
      if (!user.error) {
        this.setState({user: {id: user.id, username: user.username, fullname: user.fullname}})
      }
    })
  }

  // User Management 
  login = data => {
    api.auth.login(data).then( user => {
      localStorage.setItem("token", user.jwt)
      this.setState({user: {id: user.id, username: user.username, fullname: user.fullname}})
    })
  }

  logout = () => {
    this.setState(INITIAL_STATE)
    localStorage.removeItem('token')
  }

  // signup = data => {
  //   api.auth.postUser(data).then( user => {
  //     localStorage.setItem("token", user.jwt)
  //     this.setState({user: {id: user.id, username: user.username, fullname: user.fullname}})
  //   })  
  // }
    

  //Building State Function(s) 
  buildState = (data) => {
    //console.log("the page is loaded let's make some dreams come true!")
    // if (data) {}
    // .then(data => ...) 
    this.setState({
      user: data,
      objectives: data,
      goals: data
    })
    localStorage.setItem('user', data.user)
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Navbar
            user={this.state.user}
            onLogout={this.logout}
          />
          <header className="App-header">

            {/* <img src={Sky} className="App-logo" alt="" /> */}

            <Route path="/" exact
              render={() =>
                <Home
                  user={this.state.user}
                />
              }
            />
            <Route path="/objectives" exact
              render={() =>
                <ObjectivesContainer
                  user={this.state.user}
                />
              }
            />
            <Route path="/login" exact
              render={props =>
                <Login
                  {...props}
                  onLogin={this.login}
                />
              }
            />
            <Route path="/signup" exact
              render={props =>
                <Signup
                  {...props}
                  onLogin={this.login}
                />
              }
            />
          </header>
        </div>
      </Router>
    );
  }



}

export default App;

