import React from 'react'
import Objective from '../components/Objective'
import CreateObjectiveModal from '../components/CreateObjectiveModal'


//import {Redirect} from 'react-router-dom'

const ObjectivesContainer = ({ user, user: {objectives}, onSubmitObjective }) => {

    //console.log(user)

    const showObjectives = () => {
        // console.log(objectives)
        return objectives.map((objective, index) => {
            if (objective.complete_status === false) {
                //console.log(objective)
                return <Objective
                objective={objective}
                key={index}
                user={user}
                onSubmitObjective={onSubmitObjective}
                />
            } else {
                return null
            }
        })
    }

    return (
        <div className="objective-container">
           
            <h2>Current Objectives:</h2>
           
            {/* <Button>✛  Objective</Button> */}
            {/* <Modal trigger={<Button>✛ Objective</Button>}></Modal> */}
            <CreateObjectiveModal />

            {user.id ? showObjectives() : null}
        </div>
    )

}

export default ObjectivesContainer
