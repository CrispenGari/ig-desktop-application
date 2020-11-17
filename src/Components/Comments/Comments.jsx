import React, {useState, useEffect, useRef} from 'react'
import './Comments.css'
import {Modal, Avatar, IconButton} from '@material-ui/core'
import {Favorite, MoreHoriz, AddCircleOutline, TurnedInNot, FavoriteBorder, Telegram, ChatBubbleOutline} from '@material-ui/icons'
import {Comment} from '../../Components'
import {useSelector} from 'react-redux'
import axios from '../../data/axios'
import {db} from '../../backend/firebase'
import firebase from 'firebase'
const Comments = ({open, handleClose, post, id, likes}) => {
    const [tag, setTag] = useState("")
    const [comment, setComment] = useState("")
    const [liked, setLiked] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [location, setLocation] = useState(null)
    const [comments, setComments] = useState([])
    const user = useSelector(state => state.user)
    const videoRef = useRef()
     useEffect(()=>{
        const setTag_ = ()=>{
            setComment(comment+"@"+tag.trim())
        }
        setTag_()
    }, [tag])
    useEffect(()=>{
        if(id){
            db.DATABASE.collection("posts").doc(id).collection("comments").orderBy("timestamp", "desc").onSnapshot(snapshot =>{
                setComments(snapshot.docs.map(doc=>({id: doc.id, data: doc.data()})));
            })
        }
        const fetchLocation = async ()=>{
            const _ = await axios.get()
            setLocation(_.data)
        }
        fetchLocation()
    }, [id])
    const handleLike =()=>{
        setLiked(!liked)
    }
    const handlePlayVideo =()=>{
        playing? videoRef.current.pause(): videoRef.current.play()
        setPlaying(!playing)
        return;
    }
    const postComment = (e)=>{
        e.preventDefault();
        if(id){
           db.DATABASE.collection("posts").doc(id).collection("comments").add({
                username: user?.displayName,
                user_photo: user?.photoURL,
                comment: String(comment),
                location: location,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
           })
        }
        setComment("")
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
                {
                    post?.media_type !== "VIDEO"? <img src={post?.media_url} alt="post"/> :
                    <video onClick={handlePlayVideo} src={post?.media_url} ref={videoRef} alt="post"></video>
                }
              </div>
              <div className="comments__right">
                    <div className="comments__right__top">
                        <Avatar className="comments__avatar" src={post?.user_photo} alt={post?.full_name} title={post?.user_name}/>
                        <div className="comments__post_info">
                            <p>{post?.username}  <span>• Following</span> </p> 
                            <small>{`${post?.continent}, ${post?.country}, ${post?.region}, ${post?.city}`}</small>
                        </div>
                        <IconButton className="comments__iconBtn">
                            <MoreHoriz/>
                        </IconButton>
                    </div>
                    <div className="comments__right__center">
                        {
                            comments?.map((comment)=>{
                                return <Comment setTag={setTag} key={comment?.id} comment={comment}/>
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
                        <p className="comments__likes_number"><strong>{
                            likes?.length===0? "No likes yet": likes?.length===1 ? likes?.length + " like": likes?.length + " likes"
                            }</strong></p>
                        <small className="comments__timestamp">{new Date(post?.timestamp?.toDate())?.toDateString()}</small>
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
