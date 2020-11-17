
import React, {useState} from 'react'
import {FavoriteBorder, Favorite} from '@material-ui/icons'
import {Avatar} from '@material-ui/core'
import './Comment.css'
const Comment = ({comment, setTag}) => {
    const [liked, setLiked] = useState(false)
    const handleLike =()=>{
        setLiked(!liked)
    }
    const tagSomeone =()=>{
        if(comment?.data?.username){
            setTag(comment?.data?.username)
        }
    }
    return (
        <div className="comment">
            <Avatar className="comment__avatar" src={comment?.data?.user_photo} alt={comment?.data?.username}/>
            <div className="comment__info">
                <p> <strong>{comment?.data?.username}</strong> <span className="comment__tag">{String(comment?.data?.comment).indexOf("@") !== -1 ?String(comment?.data?.comment).split("@")[0]: ""}</span> <span>{String(comment?.data?.comment).indexOf("@") !== -1 ?String(comment?.data?.comment).split("@")[1]: String(comment?.data?.comment).split("@")[0]}</span></p>
                <div className="comment__info__timestamp">
                    <small>now</small>
                    <small onClick={tagSomeone}>Reply</small>
                    <small></small>
                </div>
            </div>
            {
             liked? <Favorite className="comment__liked" 
             onClick={handleLike}/> : 
             <FavoriteBorder onClick={handleLike}/>
            }
        </div>
    )
}
export default Comment
