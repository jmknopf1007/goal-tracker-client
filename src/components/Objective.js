import React from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import EditObjectiveModal from '../components/EditObjectiveModal'


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
                <Button
                color="blue" 
                >
                    ⚙️ Goals
                </Button>
            </Link>
            {/* <Button>✎</Button> */}
            <EditObjectiveModal
            objective={objective} 
            />
            <Button>☑️ Complete</Button>
        </div>
    )
}

export default Objective
