import React from 'react';
import { Menu } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'


const Navbar = ({user, onLogout, history}) => {

    const handleClick = () => {
        onLogout()
        history.push("/")
    }

    
        return (
            <Menu 
            color='teal'
            inverted
            >
            <Menu.Item as={NavLink} exact to='/'>Home</Menu.Item>
            {user.id ? (
                <>
                    <Menu.Item as={NavLink} exact to={`/users/objectives`}>Objectives</Menu.Item>
                    <Menu.Item position="right">Welcome, {user.fullname}!</Menu.Item>
                    <Menu.Item as={NavLink} onClick={handleClick}>Log Out</Menu.Item>
                </>
            ) : (
                <>
                    <Menu.Item position="right" as={NavLink} exact to='/login'>Log In</Menu.Item>
                    <Menu.Item as={NavLink} exact to='/signup'>Sign Up</Menu.Item>
                </>
            )}
        </Menu>
        )

    
}

export default Navbar 

