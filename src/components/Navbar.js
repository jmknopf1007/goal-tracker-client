import React from 'react';
import { Menu } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'


const Navbar = ({user, onLogout}) => {

    const handleClick = () =>
        onLogout()
    
        return (
            <Menu>
            <Menu.Item as={NavLink} exact to='/'>Home</Menu.Item>
            {user.id ? (
                <>
                    <Menu.Item as={NavLink} exact to={`/users/${user.id}/objectives`}>Objectives</Menu.Item>
                    <Menu.Item position="right">Welcome, {user.fullname}!</Menu.Item>
                    <Menu.Item onClick={handleClick}>Logout</Menu.Item>
                </>
            ) : (
                <>
                    <Menu.Item position="right" as={NavLink} exact to='/login'>Login</Menu.Item>
                    <Menu.Item as={NavLink} exact to='/signup'>Sign up</Menu.Item>
                </>
            )}
        </Menu>
        )

    
}

export default Navbar 

