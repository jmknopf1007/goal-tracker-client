import React from 'react'
import { Card } from 'semantic-ui-react'
import Objective from '../components/Objective'
import CreateObjectiveModal from '../components/CreateObjectiveModal'

const ObjectivesContainer = (props) => {

    //console.log(user)

    const showObjectives = () => {
        // console.log(objectives)
        return props.user.objectives.map((objective, index) => {
            // console.log(objective)
            if (objective.complete_status === false) {
                //console.log(objective)
                return <Objective
                objective={objective}
                key={index}
                user={props.user}
                onSubmitObjective={props.onSubmitObjective}
                editObjective={props.editObjective}
                />
            } else {
                return null
            }
        })
    }

    return (
        <Card  className="objective-card"style={{ width: '70vw' }}>
            <Card.Content>
                <Card.Header>Current Objectives:</Card.Header>
                <Card.Meta>~ Add to your list below!</Card.Meta>
            </Card.Content>
                <Card.Content>
                    <CreateObjectiveModal createObjective={props.createObjective} user={props.user}/>

                    {props.user.id ? showObjectives() : null}
            </Card.Content>
        </Card>
    )
}

export default ObjectivesContainer
