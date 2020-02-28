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
                    {/* {objective.complete_status?<p>TRUE</p>:<p>False</p>} */}
                    {/* {objective.id} */}
                </li>
            </ul>
            <Link to={`/users/objectives/${objective.id}/goals`}>
                <Button
                color="blue" 
                >
                    Goal List
                </Button>
            </Link>
            {/* <Button>✎</Button> */}
            <EditObjectiveModal
            objective={objective} 
            />
            <Button>Submit</Button>
        </div>
    )
}

export default Objective
