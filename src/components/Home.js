import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Grid, Button } from 'semantic-ui-react'
import Lightning from '../Lightning8.png'


class Home extends Component {

    

    render() {
        let {user} = this.props
        return (
            <>
            {user.id ? (
            <div className="home-too" >
                <div className="home-box">
                {user.id ? (
                <img src={Lightning} className="App-logo" style={{height: '50vh'}} alt="" />
            ) : (
                <img src={Lightning} className="App-logo-too" style={{height: '50vh'}} alt="" />
            )}
            {user.id ? (
                <div className="app-header-text">
                    <h1>Don't forget to shoot for the stars!</h1>
                    <h1>Use the objectives tab above to begin your journey.</h1> 
                </div>
            ) : (
                <div className="app-header-text-too">
                    <h1>Welcome to Elevate!</h1>
                </div>
            )}
                    <Grid className="home-content" verticalAlign='middle'>
                        <Grid.Column>
                            {user.id ? (
                                <></>
                            ) : (
                                <div className="home-button-box">
                                    <Button size="huge" color="teal" as={Link} to='/login'>Log In</Button>
                                    <Button size="huge" color="teal" as={Link} to='/signup'>Sign Up</Button>
                                </div>
                            )}
                        </Grid.Column>
                    </Grid>
                </div>
            </div> )
            : 
                ( <div className="home" >
                        <div className="home-box">
                        {user.id ? (
                        <img src={Lightning} className="App-logo" style={{height: '50vh'}} alt="" />
                    ) : (
                        <img src={Lightning} className="App-logo-too" style={{height: '50vh'}} alt="" />
                    )}
                    {user.id ? (
                        <div className="app-header-text">
                            <h1>Don't forget to shoot for the stars!</h1>
                            <h1>Use the objectives tab above to begin your journey.</h1> 
                        </div>
                    ) : (
                        <div className="app-header-text-too">
                            <h1>Welcome to Elevate!</h1>
                        </div>
                    )}
                            <Grid className="home-content" verticalAlign='middle'>
                                <Grid.Column>
                                    {user.id ? (
                                        <></>
                                    ) : (
                                        <div className="home-button-box">
                                            <Button size="huge" color="teal" as={Link} to='/login'>Log In</Button>
                                            <Button size="huge" color="teal" as={Link} to='/signup'>Sign Up</Button>
                                        </div>
                                    )}
                                </Grid.Column>
                            </Grid>
                        </div>
                    </div>
                     )
                 }
            </>
        )
    }
}
  
export default Home
