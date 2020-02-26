import React from 'react'

const Objective = ({objective: {title}}) => {
 
    return (
        <div className="objective-content">  
            <ul>
                <li>
                    {title}
                </li>
            </ul>
        </div>
    )
}

export default Objective