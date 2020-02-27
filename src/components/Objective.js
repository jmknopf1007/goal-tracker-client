import React from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Objective = ({ objective }) => {
 
    return (
        <div className="objective-content">  
            <ul>
                <li>
                    {objective.title}--
                    {/* {objective.created_at} */}
                </li>
            </ul>
            <Link to={`/users/objectives/${objective.id}/goals`}>
                <Button>Goals</Button>
            </Link>
            <Button>✎</Button>
            <Button>✓</Button>
        </div>
    )
}

export default Objective
