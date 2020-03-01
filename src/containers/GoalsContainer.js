import React from 'react'
import Goal from '../components/Goal'
import {Button, Card} from 'semantic-ui-react'
import CreateGoalModal from '../components/CreateGoalModal'


//import {Redirect} from 'react-router-dom'

const GoalsContainer = ({user, match: {params}}) => {

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
            <Card style={{ width: 450 }}>
                 <Card.Content>
                    <Card.Header>Current Goals:</Card.Header>
        

                        <CreateGoalModal />    

                        {user.id ? showGoals() : null}
       
                    </Card.Content>
            </Card>

         </div>

    )

}

export default GoalsContainer
