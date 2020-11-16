import React from 'react'
import './Message.css'
import {Avatar} from '@material-ui/core'
const Message = () => {
    return (
        <div className="message">
            <Avatar className="message__avatar"/> 
            <div className="message__info">
                <h1>Username</h1>
                <small>Active 21hr ago</small>
            </div>
        </div>
    )
}

export default Message
