import React from 'react'
import {Button} from 'semantic-ui-react'

const Goal = ({ goal }) => {
 
    return (
        <div className="goal-content">  
            <ul>
                <li>
                    {goal.description}
                    {goal.category}
                    {goal.day_count}
                </li>
            </ul>
            <Button>Edit Goal</Button>
            <Button>Mark Complete</Button>
        </div>
    )
}

export default Goal
