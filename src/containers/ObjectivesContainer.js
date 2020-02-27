import React from 'react'
import Objective from '../components/Objective'
import {Button} from 'semantic-ui-react'

//import {Redirect} from 'react-router-dom'

const ObjectivesContainer = ({ user, user: {objectives} }) => {

    // console.log(user)

    const showObjectives = () => {
        // console.log(objectives)
        return objectives.map((objective, index) => {

            return <Objective
            objective={objective}
            key={index}
            user={user}
            />
        }
        )
    }

    return (
        <div className="objective-container">
           
            <h2>Current Objectives:</h2>
           
            <Button>Add New Objective</Button>

            {showObjectives()}
        </div>
    )

}

export default ObjectivesContainer
