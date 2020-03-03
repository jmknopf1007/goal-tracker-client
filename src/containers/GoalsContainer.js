import React from 'react'
import Goal from '../components/Goal'
import { Card } from 'semantic-ui-react'
import CreateGoalModal from '../components/CreateGoalModal'


const GoalsContainer = (props) => {

    const findObjective = () => {
        return props.user.id ? props.user.objectives.find(obj => obj.id === parseInt(props.match.params.oid)) : {}
    }

    // console.log(props)

    const showGoals = () => {
        let goals = props.user.id ? findObjective().goals : []
        return goals.map((goal, index) => {
            if (goal.complete_status === false) {

                return <Goal
                goal={goal}
                key={index}
                user={props.user}
                onSubmitGoal={props.onSubmitGoal}
                />

            }
        })
    }

    const potato = goal =>
        props.createGoal(goal, findObjective())
        

    return (
        <div className="goal-container">
            <Card style={{ width: '70vw' }}>
                 <Card.Content>
                    <Card.Header>Current Goals:</Card.Header>
        

                        <CreateGoalModal createGoal={potato} user={props.user}/>    

                        {props.user.id ? showGoals() : null}
       
                    </Card.Content>
            </Card>

         </div>

    )

}

export default GoalsContainer
