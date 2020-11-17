import React, {useState, useEffect} from 'react'
import {SettingsOutlined, ChatBubble, Favorite, BookmarkBorder, AccountBox
, GridOn,LiveTv} from '@material-ui/icons'
import {Avatar} from '@material-ui/core'
import {useSelector} from 'react-redux'
import {db} from '../../backend/firebase'
import './Profile.css'
const Profile = () => {
    const user = useSelector(state => state.user)
    const [myposts, setMyPosts] = useState([])
    useEffect(()=>{
        db.DATABASE.collection('posts').orderBy('timestamp', 'desc').where("username", "==", user?.displayName).onSnapshot(snapshot => {
            setMyPosts(snapshot.docs.map(doc=>doc.data()))
        })
    }, [user])
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
                    myposts?.map((mypost, i)=>{
                        return (
                        <div className="profile__post" key={i} style={{
                            backgroundImage: `url(${mypost?.media_type=== "VIDEO"? "https://lh3.googleusercontent.com/proxy/2GEF7_tXHAZvbRvvgbOwmwz23bIzDtmkjTXUP_TyujobBWE8vgJMjwx1FSBUNIsVxwo5Y_fVcgCcio0jF5Dy04zc8KUiH5KUc1XwiG0WQKbpMaXxBR6QTicbf6z56e_1LKyfnA0jDO1pZpP3t7Jq6FyHS_yRH8IFq5uo8H6F" : mypost?.media_url})`,
                        }}>
                        <div className="profile__post__summary">
                        <small>{<Favorite/>} 45 </small>
                        <small><ChatBubble /> 5</small>
                            </div>
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
