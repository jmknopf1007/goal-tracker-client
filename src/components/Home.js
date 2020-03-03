import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Grid, Button } from 'semantic-ui-react'
import Lightning from '../LightningGT.png'


class Home extends Component {

    

    render() {
        let {user} = this.props
        return (
            <div className="home" >
                <div className="home-box">
            {/* <Card style={{width: '40vw', color: 'teal', padding: '20px'}}> */}
                <img src={Lightning} className="App-logo" style={{height: '50vh'}} alt="" />
                {user.id ? <h1>Don't forget to shoot for the stars!</h1> : <h1>Welcome to the Goal Tracker!</h1>}
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
}
  
export default Home
