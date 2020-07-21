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
                {/* <Card style={{width: '40vw', color: 'teal', padding: '20px'}}> */}
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
                    <Grid className="homebox" verticalAlign='middle'>
                        <Grid.Column className="homecontent">
                            <div className="homeimage"></div>
                            <div className="homespacer"></div>
                            {user.id ? (
                                <></>
                            ) : (
                                <div className="homebuttonbox">
                                    <Button size="huge" color="teal" as={Link} to='/login'>Login</Button>
                                    <Button size="huge" color="teal" as={Link} to='/signup'>Signup</Button>
                                </div>
                            )}
                </Grid.Column>
            </Grid>
            {/* </Card> */}
            </div>

            </div> )
            : 
                ( <div className="home" >
                        <div className="home-box">
                        {/* <Card style={{width: '40vw', color: 'teal', padding: '20px'}}> */}
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
                            <Grid className="homebox" verticalAlign='middle'>
                                <Grid.Column className="homecontent">
                                    <div className="homeimage"></div>
                                    <div className="homespacer"></div>
                                    {user.id ? (
                                        <></>
                                    ) : (
                                        <div className="homebuttonbox">
                                            <Button size="huge" color="teal" as={Link} to='/login'>Login</Button>
                                            <Button size="huge" color="teal" as={Link} to='/signup'>Signup</Button>
                                        </div>
                                    )}
                        </Grid.Column>
                    </Grid>
                    {/* </Card> */}
                    </div>
                    
                </div>
                     )
                 }
            </>
        )
    }
}
  
export default Home
