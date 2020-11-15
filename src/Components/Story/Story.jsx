
import React from 'react'
import {Avatar} from '@material-ui/core'
import './Story.css'
const Story = () => {
    return (
        <div className="story">
            <Avatar className="story__avatar"/>
            <small>user_name</small>
        </div>
    )
}

export default Story
