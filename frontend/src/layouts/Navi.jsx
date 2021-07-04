import React from 'react'
import { Menu, Segment, Button, Input } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Segment inverted >
                <Menu inverted pointing primary fixed >
                    <Menu.Item name='home'/>
                    <Menu.Item name='messages'/>
                    <Menu.Item name='friends'/>
                    <Menu.Item position='right'>
                        <Button secondary>Register</Button>
                        <Button secondary>Login</Button>
                    </Menu.Item>
                    
                    <Menu.Item>
                        <Input className='icon' icon='search' placeholder='Search...' />
                    </Menu.Item>
                    
                </Menu>
            </Segment>
        </div>
    )
}
