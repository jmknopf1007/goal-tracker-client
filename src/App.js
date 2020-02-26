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

  // Lifecycle Methods ###########################

  componentDidMount() {
    this.currentUser()
  }

  // User Management ###########################

  currentUser = () => {
    api.auth.getCurrentUser().then(user => {
      //console.log(user)
      if (!user.error) {
        this.setState({ user: { id: user.id, username: user.username, fullname: user.fullname } }, () => this.loadObjectives())
      }
    })
  }


  login = data => {
    api.auth.login(data).then(user => {
      localStorage.setItem("token", user.jwt)
      this.setState({ user: { id: user.id, username: user.username, fullname: user.fullname } }, () => this.loadObjectives())
    })
  }

  logout = () => {
    this.setState(INITIAL_STATE)
    localStorage.removeItem('token')
  }

  // Building State Function(s) ###########################

  loadObjectives = () => {
    api.data.getObjectives(this.state.user)
      .then(data => {
        console.log(data)
        if (!data.error) {

          this.setState({ objectives: data.objectives }, console.log(this.state))
        }
      })
  }

  // loadObjectives = () => {
  //   api.data.getObjectives(this.state.objectives)
  //     .then(data => {
  //       this.setState({
  //         objectives: data.user.objectives 
  //       })
  //       console.log(this.state.objectives)
  //   })
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar
            user={this.state.user}
            onLogout={this.logout}
          />
          <header className="App-header">

            <Route path="/" exact
              render={() =>
                <Home
                  user={this.state.user}
                />
              }
            />
            <Route path="/users/:id/objectives" exact
              render={() =>
                <ObjectivesContainer
                  user={this.state.user}
                  // onLoadObjectives={this.loadObjectives} 
                  objectives={this.state.objectives}
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

