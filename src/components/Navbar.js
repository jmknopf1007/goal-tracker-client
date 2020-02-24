import React from 'react';
import { Menu } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'


const Navbar = ({user, onLogout}) => {

    const handleClick = () =>
    onLogout()
    
        return (
            <Menu>
            <Menu.Item as={NavLink} exact to='/'>Home</Menu.Item>
            {user ? (
                <>
                    <Menu.Item as={NavLink} exact to='/photos/'>Photos</Menu.Item>
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



// Render method with user ternary logic built in (will need this soon)
    
    // render() {
    //     return (
    //         <Menu>
    //         <Menu.Item as={NavLink} exact to='/'>Home</Menu.Item>
    //         {user ? (
    //             <>
    //                 <Menu.Item as={NavLink} exact to='/objectives/'>Objectives</Menu.Item>
    //                 <Menu.Item position="right">Welcome, {user.fullname}!</Menu.Item>
    //                 <Menu.Item onClick={handleClick}>Logout</Menu.Item>
    //             </>
    //         ) : (
    //             <>
    //                 <Menu.Item position="right" as={NavLink} exact to='/login'>Login</Menu.Item>
    //                 <Menu.Item as={NavLink} exact to='/signup/'>Sign up</Menu.Item>
    //             </>
    //         )}
    //     </Menu>
    //     )
    // }


// Navbar component with click functionality from semantic

    // constructor() {
    //     super()
    //     this.state = {}
    // }

    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    //      render() {
    //           const { activeItem } = this.state
          
    //           return (
    //             <Menu>
    //               <Menu.Item
    //                 name='Home'
    //                 active={activeItem === 'Home'}
    //                 onClick={this.handleItemClick}
    //               >
    //                 Home
    //               </Menu.Item>
          
    //               <Menu.Item
    //                 position="right"
    //                 as={NavLink} exact to='/login'
    //                 name='Login'
    //                 active={activeItem === 'Login'}
    //                 onClick={this.handleItemClick}
    //               >
    //                 Login
    //               </Menu.Item>
          
    //               <Menu.Item
    //                 name='Signup'
    //                 active={activeItem === 'Signup'}
    //                 onClick={this.handleItemClick}
    //               >
    //                 Signup
    //               </Menu.Item>
    //             </Menu>
    //           )
    //         }