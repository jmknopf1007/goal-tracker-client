import React from 'react'
import {Button, Card} from 'semantic-ui-react'
import EditGoalModal from '../components/EditGoalModal'


const Goal = (props) => {

    const handleSubmit = () => {
        props.onSubmitGoal(props.goal)
    }
 
    return (
        // <div className="goal-content">  
            <Card style={{ width: '70vw' }}>
                <Card.Content>
                    <Card.Header>{props.goal.description}</Card.Header>
                        <Card.Meta>~ {props.goal.category}</Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui buttons'>

                                    <EditGoalModal 
                                     goal={props.goal}
                                     user={props.user}
                                     editGoal={props.editGoal}
                                    />
                                    <Button onClick={handleSubmit}>Submit</Button>
                                </div>
                </Card.Content>
            </Card>
        // </div>
    )
}

export default Goal
