import React, { useState } from 'react'
import './Post.css'
import {Avatar, IconButton, Menu, MenuItem} from '@material-ui/core'
import {Comments} from '../../Components'
import {useHistory} from 'react-router-dom'
import {MoreHoriz, TurnedInNot, Favorite, FavoriteBorder, Telegram, ChatBubbleOutline} from '@material-ui/icons'
const Post = () => {
    const [comment, setComment] = useState("")
    const [open, setOpen] = useState(false)
    const [liked, setLiked] = useState(false)
    const [menu, setMenu] = useState(null)
    const history = useHistory()
    const postComment = (e)=>{
        e.preventDefault();
    }
    const handleLike =()=>{
        setLiked(!liked)
    }
    const handleClose =()=>{
        setOpen(false)
    }
    const handleOpen =()=>{
        setOpen(true)
    }
    const messages = ()=>{
        history.push('/messages')
    }
    const handleOpenMenu = (event) => {
        setMenu(event.currentTarget);
      };
      const handleCloseMenu = () => {
        setMenu(null);
      };
    return (
        <div className="post">
            <Comments open={open} handleClose={handleClose}/>
           <div className="post__top">
               <Avatar className="post__avatar"/>
                <div className="post__userinfo">
                    <h1>User name</h1>
                    <small>Location</small>
                </div>
                <IconButton onClick={handleOpenMenu}>
                    <MoreHoriz className="post__options"/>
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={menu}
                    keepMounted
                    open={Boolean(menu)}
                    onClose={handleCloseMenu}
                    className="post__menu"
                >
                    
                    <MenuItem className="post__menu__item" onClick={handleCloseMenu}>Report</MenuItem>
                    <MenuItem className="post__menu__item" onClick={handleCloseMenu} >Unfollow</MenuItem>
                    <MenuItem className="post__menu__item" onClick={handleCloseMenu} >Go to post</MenuItem>
                    <MenuItem className="post__menu__item" onClick={handleCloseMenu} >Cancel</MenuItem>
                 </Menu>
           </div>
           <div className="post__center">
                <img src="https://memegenerator.net/img/instances/66655536.jpg" alt="post"/>
           </div>
           <div className="post__bottom">
               <div className="post__controls">
                    <div className="post__controls__left">
                        {
                            liked? <Favorite className="post__liked" onClick={handleLike}/> : <FavoriteBorder className="post__unliked" onClick={handleLike}/>
                        }
                        <ChatBubbleOutline className="post__commentIcon" onClick={handleOpen} />
                        <Telegram onClick={messages}/>
                    </div>
                    <div className="post__controls__right">
                        <TurnedInNot/>
                    </div>
               </div>
               <p className="post__likes">
                   <Avatar className="post__likers__avatar"/>
                    Liked by {" "} <strong>Username</strong> {" "} and {" "} <strong>55 others</strong> 
                </p>
               <p className="post__caption"><strong>Username</strong> this is a caption that the user...</p>
               <p onClick={handleOpen} className="post__all_comments">View All 36 comments</p>
               <p><strong>Username</strong> this is a caption that the user...</p>
           </div>
           <form className="post__commentForm">
               <input value={comment} onChange={e=>setComment(e.target.value)}type="text" placeholder="Add a comment"/>
               <button disabled ={!(Boolean(comment))} type="submit" className={`post__commentBtn ${Boolean(comment) && "post__commentBtn--active"}`} onClick={postComment}>
                   Post
               </button>
           </form>
        </div>
    )
}
export default Post
