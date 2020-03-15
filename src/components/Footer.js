import React from "react"
import { Header,Segment, Container} from 'semantic-ui-react'

const Footer = props => {

  return (
    <div className="footer">
        <Segment 
            inverted
            vertical 
            color= 'teal'
            >
        <Container>
            <Header as='h4' inverted>
                Copyright ~
                Jacob Knopf 2020
            </Header>
        </Container>
        </Segment>
    </div>
  );
};

export default Footer
