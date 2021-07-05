import React from 'react'
import { Menu, Segment, Button, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function Navi() {
    return (
        <div>
            <Segment inverted >
                <Menu inverted pointing primary fixed >

                    <Menu.Item><Link to="/home">Home</Link></Menu.Item>
                    <Menu.Item><Link to="/profile">Profile</Link></Menu.Item>

                    <Menu.Item position='right'><Link to="/login">Login</Link></Menu.Item>
                    <Menu.Item><Link to="/register">Register</Link></Menu.Item>
                    
                    <Menu.Item>
                        <Input className='icon' icon='search' placeholder='Search...' />
                    </Menu.Item>

                </Menu>
            </Segment>
        </div>
    )
}
