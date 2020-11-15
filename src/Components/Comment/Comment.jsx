
import React, {useState} from 'react'
import {FavoriteBorder, Favorite} from '@material-ui/icons'
import {Avatar} from '@material-ui/core'
import './Comment.css'
const Comment = () => {
    const [liked, setLiked] = useState(false)
    const handleLike =()=>{
        setLiked(!liked)
    }
    return (
        <div className="comment">
            <Avatar className="comment__avatar"/>
            <div className="comment__info">
                <p> <strong>username</strong> <span>@tags</span> <span>Im a comment 🧮</span></p>
                <div className="comment__info__timestamp">
                    <small>10 hr</small>
                    <small>Reply</small>
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
