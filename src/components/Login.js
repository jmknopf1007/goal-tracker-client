import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import {Form, Button, Grid, Header} from 'semantic-ui-react';
import {Link} from 'react-router-dom'

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

//   handleChange = e => 
//     this.setState({
//         username: e.target.value,
//         password: e.target.value 
//     })

handleChange = e => 
    this.setState({[e.target.name]: e.target.value})

  handleClick = () => {
      this.props.onLogin(this.state)
      this.props.history.push('/') 
  }

  render() {
    let {username, password} = this.state
    return (
      <div className="home">
        {this.props.redirect ? <Redirect to='/' /> : null}
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h1' inverted textAlign='center'>
              Please log in 
            </Header>
            <Form size='small'>
              <Form.Input 
                fluid 
                icon='user circle' 
                iconPosition='left' 
                placeholder='Username' 
                name='username'
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
              <Button 
                color='teal'
                //type="button" 
                fluid 
                size='large'
                onClick={this.handleClick}
              >
                Log In 
              </Button>
            </Form>
            <Header as='h1' inverted textAlign='center'>
                New to us? <Link to='/signup'>Sign Up</Link>
            </Header>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Login
