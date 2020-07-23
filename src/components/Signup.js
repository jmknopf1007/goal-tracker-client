import React, {Component} from 'react';
import { Form, Button, Grid, Header } from 'semantic-ui-react';
import {Link, Redirect} from 'react-router-dom'
import { api } from '../services/api'

class Signup extends Component {
  state = {
    fullname: "",
    username: "",
    password: "",
    password_confirmation: ""
  }

  handleChange = e => 
    this.setState({[e.target.name]: e.target.value})

  handleClick = () => {
    let {fullname, username, password, password_confirmation} = this.state
    if (fullname && username && password && password_confirmation){
      api.auth.postUser({user: this.state})
        .then(user => {
          console.log(user)
          this.props.onLogin({username: username, password: password})
          this.props.history.push('/') 
        })
    } 
  }

  render() {
    let {fullname, username, password, password_confirmation} = this.state
    return (
      <div className="home">
        {this.props.redirect ? <Redirect to='/' /> : null}
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h1' inverted textAlign='center'>
              Please create your account 
            </Header>
            <Form size='small' autoComplete="off">
              <Form.Input
                fluid
                icon='user circle'
                iconPosition='left'
                placeholder='Full Name'
                name="fullname"
                value={fullname}
                onChange={this.handleChange}
              />
              <Form.Input 
                fluid 
                icon='user circle' 
                iconPosition='left' 
                placeholder='Username'
                name="username"
                value={username} 
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                icon='file text'
                iconPosition='left'
                placeholder='Password'
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              <Form.Input 
                fluid 
                icon='file text'
                iconPosition='left' 
                placeholder='Password Confirmation'
                type="password"
                name="password_confirmation"
                value={password_confirmation} 
                onChange={this.handleChange}
              />
              <Button 
                color='teal' 
                fluid size='large'
                onClick={this.handleClick}
              >
                Sign Up 
              </Button>
            </Form>
            <Header as='h1' inverted textAlign='center'>
              Already have an account? <Link to='/login'>Log In</Link>
            </Header>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
  
export default Signup
