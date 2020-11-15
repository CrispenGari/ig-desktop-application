
import React from 'react'
import './User.css'
import {Avatar} from '@material-ui/core'
import {useSelector} from 'react-redux'
const User = () => {
    const user = useSelector(state => state.user)
    return (
        <div className="user">
            <Avatar className="user__avatar" alt={user?.displayName} title={user?.email} src={user?.photoURL}/>
            <div className="user__info">
                <h1>{user?.displayName}</h1>
                <small>{user?.email}</small>
            </div>
            <small>Switch</small>
        </div>
    )
}
export default User
