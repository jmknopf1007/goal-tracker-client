import React from 'react'
import {Button, Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import EditObjectiveModal from '../components/EditObjectiveModal'


const Objective = (props) => {

    const handleSubmit = () => {
        props.onSubmitObjective(props.objective)
    }
 
    return (  
            <Card className='objective-content' style={{ width: '80vw' }}>
              <Card.Content>
                <Card.Header>{props.objective.title}</Card.Header>
                <Card.Meta>~</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <div className='ui buttons'>
                <Link to={`/users/objectives/${props.objective.id}/goals`}>
                        <Button color="teal">
                            Goal List
                        </Button>
                    </Link>
                    <EditObjectiveModal
                    objective={props.objective} 
                    user={props.user}
                    editObjective={props.editObjective}
                    />
                  <Button onClick={handleSubmit}>Submit</Button>
                </div>
              </Card.Content>
            </Card>
    )
}

export default Objective


