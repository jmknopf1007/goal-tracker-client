import React from 'react'
import Goal from '../components/Goal'
import {Button} from 'semantic-ui-react'

//import {Redirect} from 'react-router-dom'

const GoalContainer = ({user, match: {params}}) => {

    // console.log(props)

    const showGoals = () => {
        // console.log(user)
        let objective = user.objectives.find(obj => obj.id === parseInt(params.oid))
        // console.log(objective)
        let goals = objective.goals
        return goals.map((goal, index) => {

            return <Goal
            goal={goal}
            key={index}
            user={user}
            />
        }
        )
    }

    return (
        <div className="goal-container">
           
            <h2>Current Goals:</h2>
           
            <Button>Add New Goal</Button>
            
            {user.id ? showGoals() : null}
        </div>
    )

}

export default GoalContainer
