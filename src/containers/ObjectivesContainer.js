import React from 'react'
import Objective from '../components/Objective'
//import {Redirect} from 'react-router-dom'

const ObjectivesContainer = ({ objectives }) => {

    console.log(objectives)

    const showObjectives = () => {
        //console.log(objectives)
        return objectives.map((objective, index) => {

            return <Objective
            objective={objective}
            index={index}
            // onLoadObjectives={onLoadObjectives} 
            />
        }
        )
    }

    return (
        <div className="objective-list-content">
            {showObjectives()}
        </div>
    )

}

export default ObjectivesContainer