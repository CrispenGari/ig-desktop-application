

import React, {useState, useEffect} from 'react'
import './Comments.css'
import {Modal, Avatar, IconButton} from '@material-ui/core'
import {Favorite, MoreHoriz, CloseOutlined, AddCircleOutline, TurnedInNot, FavoriteBorder, Telegram, ChatBubbleOutline} from '@material-ui/icons'
import {Comment} from '../../Components'
const Comments = ({open, handleClose}) => {
    const [comment, setComment] = useState("")
    const [liked, setLiked] = useState(false)
    const postComment =(e)=>{
        e.preventDefault()
    }
    const handleLike =()=>{
        setLiked(!liked)
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            className="comments"
        >
            <div className="comments__comments">
            <div>
              <div className="comments__left">
                <img src="https://memegenerator.net/img/instances/66655536.jpg" alt=""/>
              </div>
              <div className="comments__right">
                    <div className="comments__right__top">
                        <Avatar className="comments__avatar"/>
                        <div className="comments__post_info">
                            <p>Username  <span>• Followings</span> </p> 
                            <small>Location</small>
                        </div>
                        <IconButton className="comments__iconBtn">
                            <MoreHoriz/>
                        </IconButton>
                    </div>
                    <div className="comments__right__center">
                        {
                            Array(10).fill(null).map((el, i)=>{
                                return <Comment key={i}/>
                            })
                        }
                        
                        <div className="comments__addIcon">
                            <AddCircleOutline/>
                        </div>
                    </div>
                    <div className="comments__right__bottom">
                    <div className="comments__controls">
                        <div className="comments__controls__left">
                                {
                                    liked? <Favorite className="comments__liked" onClick={handleLike}/> : <FavoriteBorder className="comments__unliked" onClick={handleLike}/>
                                }
                                <ChatBubbleOutline className="comments__commentIcon"/>
                                <Telegram/>
                        </div>
                        <div className="comments__controls__right">
                                <TurnedInNot/>
                        </div>
                        </div>
                        <p className="comments__likes_number"><strong>23 likes</strong></p>
                        <small className="comments__timestamp">10 hours ago</small>
                        <form className="comments__addcomment">
                        <input value={comment} onChange={e=>setComment(e.target.value)}type="text" placeholder="Add a comment"/>
                        <button disabled ={!(Boolean(comment))} type="submit" className={`post__commentBtn ${Boolean(comment) && "comments__commentBtn--active"}`} onClick={postComment}>
                            Post
                        </button>
                    </form>
                    </div>
              </div>
              </div>
            </div>
      </Modal> 
    )
}

export default Comments
