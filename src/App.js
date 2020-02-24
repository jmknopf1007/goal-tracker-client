import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
//import Sky from './sky-photo-314703.jpeg'
import './App.css';

const INITIAL_STATE = {
  user: null,
  objectives: [],
  goals: []
}

class App extends Component {
  state = INITIAL_STATE

// Lifecycle Methods
  componentDidMount() {
    let localUser = localStorage.getItem('username')
    if (localUser) this.login(localUser)
  }

// User Management 
login = username => {
  this.getUser(username)
  //.then(console.log(user))
  .then(this.buildState)
}

logout = () => {
  this.setState(INITIAL_STATE)
  // localStorage.removeItem('username')
}

signup = user =>
  this.postUser(user)
  .then(console.log(user))


  // Fetches
  getUser = user =>
    fetch(`http://localhost:4000/users/${user.id}`)
      .then(r => r.json())
  postUser = user => 
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({user: user}) 
    }).then(r => r.json())
  patchUser = user => 
    fetch(`http://localhost:4000/users/${user.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({user: user})
    }).then(r => r.json())  
  deleteUser = user => 
    fetch(`http://localhost:4000/users/${user.id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json", "Accept": "application/json"}
    }).then(r => r.json())
  getObjectives = () =>
    fetch("http://localhost:4000/objectives")
      .then(r => r.json())
  postObjective = objective => 
    fetch("http://localhost:4000/objectives", {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify(objective) 
    }).then(r => r.json())
  patchObjective = objective => 
    fetch(`http://localhost:4000/objectives/${objective.id}`, {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify(objective) 
    }).then(r => r.json())
  deleteObjective = objective => 
    fetch(`http://localhost:4000/objectives/${objective.id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json", "Accept": "application/json"}
    }).then(r => r.json())
  getGoals = () =>
    fetch("http://localhost:4000/goals")
      .then(r => r.json())
  postGoal = goal => 
    fetch("http://localhost:4000/goals", {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify(goal) 
    }).then(r => r.json())
  patchGoal = goal => 
    fetch(`http://localhost:4000/goals/${goal.id}`, {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify(goal) 
    }).then(r => r.json())
  deleteGoal = goal => 
    fetch(`http://localhost:4000/goals/${goal.id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json", "Accept": "application/json"}
    }).then(r => r.json())

    //Building State Functions
    buildState = (data) => {
      console.log("the page is loaded let's make some dreams come true")
      // if (data) {}
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
              <h1>
                Welcome to Goal Tracker!
                </h1>
                {/* <img src={Sky} className="App-logo" alt="" /> */}

                  <Route path="/"  
                    render={() => 
                      <Home 
                      user={this.state.user}
                      // onRedirected={this.redirected}
                      />
                    }
                  />
                <Route path="/login" exact
                  render={() => 
                    <Login
                    // redirect={redirect} 
                    onLogin={this.login}
                    />
                  }
                />
                <Route path="/signup" exact
                  render={() => 
                    <Signup 
                      // redirect={redirect}
                      onSignup={this.signup}
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
