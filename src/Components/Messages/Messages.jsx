
import React from 'react'
import './Messages.css'
import {useSelector} from 'react-redux'
import {Button} from '@material-ui/core'
import {Message} from '../../Components'
import {ExpandMore, Create, Telegram} from '@material-ui/icons'
const Messages = () => {

    const user = useSelector(state => state.user)
    return (
        <div className="messages">
        <div className="messages__left">
            <div className="messages__left__header">
                <div className=""></div>
                <h1>
                    {user?.displayName}
                    <ExpandMore/>
                </h1>
                <Create/>
            </div>
            <div className="messages__container">
                <h1><span>Messages</span><span>1 Requests</span></h1>
                {
                    Array(20).fill(null).map((el, i)=>{
                        return <Message key={i}/>
                    })
                }
            </div>
        </div>
        <div className="messages__right">
            <div className="">
                <div className="">
                    <Telegram/>
                </div>
                <h1>Your Messages</h1>
                <small>Send private photos and messages to a friend or group.</small>
                <Button className="messages__right_button">Send Message</Button>
            </div>
        </div>
    </div>
    )
}

export default Messages
