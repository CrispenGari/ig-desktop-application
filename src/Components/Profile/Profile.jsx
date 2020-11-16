import React, {useState} from 'react'
import {SettingsOutlined, ChatBubble, Favorite, BookmarkBorder, AccountBox
, GridOn,LiveTv} from '@material-ui/icons'
import {Avatar} from '@material-ui/core'
import {useSelector} from 'react-redux'
import './Profile.css'
const Profile = () => {
    const user = useSelector(state => state.user)
    return (
        <div className="profile">
            <div className="profile__top">
                <div className="profile__top__user">
                    <Avatar className="profile__avatar" src={user?.photoURL} alt={user?.displayName} title={user?.email}/>
                    <div className="profile__top__info">
                        <p><h1>{user?.displayName}</h1> <button>Edit Profile</button> <SettingsOutlined/></p>
                        <p><span><small>2</small><small>Posts</small></span>
                        <span><small>965 </small><small> followers</small></span>
                        <span><small>3</small><small>followings</small></span></p>
                        <p>
                            <strong>user_name</strong>
                            <small>{user?.email}</small>
                        </p>
                    </div>
                </div>
                <div className="profile__top__highlights">
                    <div>
                        <Avatar className="profile__highlight"/>
                        <h3>Highlights</h3>
                    </div>
                    <div>
                        <Avatar className="profile__highlight"/>
                        <h3>Highlights</h3>
                    </div>
                    <div>
                        <Avatar className="profile__highlight"/>
                        <h3>Highlights</h3>
                    </div>
                </div>
            </div>
            <div className="profile__posts">
                <div className="profile__post__nav">
                    <div></div>
                    <div>
                    <p><GridOn/> Post</p>
                    <p><LiveTv/> igtv</p>
                    <p>< BookmarkBorder/> Saved</p>
                    <p> <AccountBox/> Tagged</p>
                    </div>
                </div>
                <div className="profile__posts__container">
                {
                    Array(8).fill(0).map((el, i)=>{
                        return (
                        <div className="profile__post" key={i} style={{
                            backgroundImage: `url("https://memegenerator.net/img/instances/66655536.jpg")`,
                        }}>
                        <div className="profile__post__summary">
                        <small>{<Favorite/>} 45 </small>
                        <small><ChatBubble /> 5</small>
                            </div>
                        {/* <img src="" alt="post"/> */}
                       </div>)
                    })
                }
            </div>
            </div>
            <div className="profile__trademarks">

            </div>
        </div>
    )
}

export default Profile
