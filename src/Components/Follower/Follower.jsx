import React from 'react'
import './Follower.css'
import {Avatar} from '@material-ui/core'
const Follower = () => {
    return (
        <div className="follower">
            <Avatar className="follower__avatar"/>
            <div className="follower__info">
                <h1>User</h1>
                <small>New on Instagram</small>
            </div>
            <small>Follow</small>
        </div>
    )
}

export default Follower
