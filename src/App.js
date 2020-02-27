import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ObjectivesContainer from './containers/ObjectivesContainer'
import GoalContainer from './containers/GoalContainer'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { api } from './services/api'
import './App.css';

const INITIAL_STATE = {
  user: {}
}

class App extends Component {
  state = INITIAL_STATE

  // Lifecycle Methods ###########################

  componentDidMount() {
    this.currentUser()
  }

  // User Management ###########################

  currentUser = () => {
    api.auth.getCurrentUser().then(data => {
      //console.log(user)
      if (!data.error) {
        this.setState({ user: data.user})
        // this.setState({ user: { id: user.id, username: user.username, fullname: user.fullname } }, () => this.loadObjectives(), () => this.loadGoals())
      }
    })
  }


  login = user => {
    api.auth.login(user).then(data => {
      localStorage.setItem("token", data.jwt)
      this.setState({user: data.user})
      // this.setState({ user: { id: user.id, username: user.username, fullname: user.fullname } }, () => this.loadObjectives(), () => this.loadGoals())
    })
  }

  logout = () => {
    this.setState(INITIAL_STATE)
    localStorage.removeItem('token')
  }

  // Building State Function(s) ###########################

  // loadObjectives = () => {
  //   api.data.getObjectives(this.state.user)
  //     .then(data => {
  //       //console.log(data)
  //       if (!data.error) {
  //         this.setState({ objectives: data.objectives })
  //       }
  //     })
  // }

  // loadGoals = () => {
  //   api.data.getGoals(this.state.user, this.state.objectives)
  //   .then(data => {
  //     console.log(data)
  //     if (!data.error) {
  //       this.setState({ goals: data.goals })
  //     }
  //   })
  // }

  // loadData = () => {
  //   this.loadObjectives()
  //   this.loadGoals()
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/"
          render={props =>
            <Navbar
              {...props}
              user={this.state.user}
              onLogout={this.logout}
              />
            }
            />
          <header className="App-header">

            <Route path="/" exact
              render={() =>
                <Home
                  user={this.state.user}
                />
              }
            />
            <Route path="/users/objectives" exact
              render={() =>
                <ObjectivesContainer
                  user={this.state.user}
                />
              }
            />
            <Route path="/users/objectives/:oid/goals" exact
              render={(props) =>
                <GoalContainer
                  {...props}
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

