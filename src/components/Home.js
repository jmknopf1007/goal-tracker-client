import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Grid, Button} from 'semantic-ui-react'

class Home extends Component {

    

    render() {
        let {user} = this.props
        return (
            <div className="home">
                <h1>
                Welcome to Goal Tracker!
                </h1>
                <Grid className="homebox" verticalAlign='middle'>
                    <Grid.Column className="homecontent">
                        <div className="homeimage"></div>
                        <div className="homespacer"></div>
                        {user ? (
                            <></>
                        ) : (
                            <div className="homebuttonbox">
                                <Button size="huge" color="teal" as={Link} to='/login'>Login</Button>
                                <Button size="huge" color="teal" as={Link} to='/signup'>Signup</Button>
                            </div>
                        )}
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
  
export default Home