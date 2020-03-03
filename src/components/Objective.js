import React from 'react'
import {Button, Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import EditObjectiveModal from '../components/EditObjectiveModal'


const Objective = (props) => {

    const handleSubmit = () => {
        props.onSubmitObjective(props.objective)
    }
 
    return ( 
        // <div className="objective-content">  
            <Card style={{ width: '70vw' }}>
              <Card.Content>
                <Card.Header>{props.objective.title}</Card.Header>
                <Card.Meta>~</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <div className='ui buttons'>
                <Link to={`/users/objectives/${props.objective.id}/goals`}>
                        <Button color="blue">
                            Goal List
                        </Button>
                    </Link>
                    <EditObjectiveModal
                    objective={props.objective} 
                    />
                  <Button onClick={handleSubmit}>Submit</Button>
                </div>
              </Card.Content>
            </Card>
        // </div>
    )
}

export default Objective


