import React from 'react'
import {Button} from 'semantic-ui-react'
import EditGoalModal from '../components/EditGoalModal'


const Goal = ({ goal }) => {
 
    return (
        <div className="goal-content">  
            <ul>
                <li>
                    {goal.description}--
                    {goal.category}
                    {goal.complete_status}
                    {/* Day Counter--{goal.day_count} */}
                </li>
            </ul>
                <div>
                    {/* <Button>✎</Button> */}
                    <EditGoalModal />
                    <Button>Submit</Button>
                </div>
        </div>
    )
}

export default Goal
