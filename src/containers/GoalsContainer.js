import React from 'react'
import Goal from '../components/Goal'
import { Card } from 'semantic-ui-react'
import CreateGoalModal from '../components/CreateGoalModal'


const GoalsContainer = (props) => {

    // console.log(props)

    const showGoals = () => {
        let objective = props.user.objectives.find(obj => obj.id === parseInt(props.match.params.oid))
        // console.log(objective)
        let goals = objective.goals
        return goals.map((goal, index) => {
            if (goal.complete_status === false) {

                return <Goal
                goal={goal}
                key={index}
                user={props.user}
                // objective={props.objective}
                onSubmitGoal={props.onSubmitGoal}
                />

            }
        })
    }

    return (
        <div className="goal-container">
            <Card style={{ width: '70vw' }}>
                 <Card.Content>
                    <Card.Header>Current Goals:</Card.Header>
        

                        <CreateGoalModal />    

                        {props.user.id ? showGoals() : null}
       
                    </Card.Content>
            </Card>

         </div>

    )

}

export default GoalsContainer
