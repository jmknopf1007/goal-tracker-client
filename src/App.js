import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ObjectivesContainer from './containers/ObjectivesContainer'
import GoalsContainer from './containers/GoalsContainer'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Footer from './components/Footer'
import {api} from './services/api'
import './App.css'

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
  
  // Updating State Functions ###########################

  
  createObjective = (objective) => {
    // console.log(objective)
    api.data.postObjective({...objective})
    .then(this.currentUser)
  } 
  
  editObjective = (objective) => {
    api.data.patchObjective(objective)
    .then(this.currentUser)
  }
  
  submitObjective = (objective) => {
    // console.log(objective)
    api.data.patchObjective({...objective, complete_status: true})
    .then(this.currentUser)
    }

  createGoal = (goal, objective) => {
    api.data.postGoal({...goal, objective_id: objective.id})
    .then(this.currentUser)
  }
    
  editGoal = (goal) => {
    api.data.patchThisGoal(goal)//.then(console.log)
    .then(this.currentUser)
  }

  submitGoal = (goal) => {
    api.data.patchGoal({...goal, complete_status: true})
    .then(this.currentUser) 
  }

  
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/"
          render={(props) =>
            <Navbar
              {...props}
              user={this.state.user}
              onLogout={this.logout}
              />
            }
            />
          <header className="app-header">

            <Route path="/" exact
              render={() =>
                <Home
                  user={this.state.user}
                />
              }
            />
            <Route path="/users/objectives" exact
              render={(props) =>
                <ObjectivesContainer
                  {...props}
                  user={this.state.user}
                  onSubmitObjective={this.submitObjective}
                  createObjective={this.createObjective}
                  editObjective={this.editObjective}
                />
              }
            />
            <Route path="/users/objectives/:oid/goals" exact
              render={(props) =>
                <GoalsContainer
                  {...props}
                  user={this.state.user}  
                  onSubmitGoal={this.submitGoal}
                  createGoal={this.createGoal}  
                  editGoal={this.editGoal}    
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
             <Route
              path="/"
              render={props => 
              <Footer 
              {...props} 
              />}
            />
        </div>
      </Router>
    )
  }



}


export default App

