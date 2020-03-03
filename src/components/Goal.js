import React from 'react'
import {Button, Card} from 'semantic-ui-react'
import EditGoalModal from '../components/EditGoalModal'


const Goal = ({ goal }) => {
 
    return (
        // <div className="goal-content">  
            <Card style={{ width: '70vw' }}>
                <Card.Content>
                    <Card.Header>{goal.description}</Card.Header>
                        <Card.Meta>~ {goal.category}</Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui buttons'>

                                    <EditGoalModal />
                                    <Button>Submit</Button>
                                </div>
                </Card.Content>
            </Card>
        // </div>
    )
}

export default Goal
