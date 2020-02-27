import React from 'react'
import {Button} from 'semantic-ui-react'

const Goal = ({ goal }) => {
 
    return (
        <div className="goal-content">  
            <ul>
                <li>
                    {goal.description}--
                    {goal.category}
                    {/* Day Counter--{goal.day_count} */}
                </li>
            </ul>
                <div>
                    <Button>✎</Button>
                    <Button>✓</Button>
                </div>
        </div>
    )
}

export default Goal
