import React, { useState , useRef, useEffect } from 'react'
import './Post.css'
import {Avatar, IconButton, Menu, MenuItem} from '@material-ui/core'
import {Comments} from '../../Components'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {db} from '../../backend/firebase'
import firebase from 'firebase'
import axios from '../../data/axios'
import {MoreHoriz, TurnedInNot, Favorite, FavoriteBorder, Telegram, ChatBubbleOutline} from '@material-ui/icons'
const Post = ({data, id}) => {
    const [comment, setComment] = useState("")
    const [location, setLocation] = useState(null)
    const [likes, setLikes] = useState([])
    const [open, setOpen] = useState(false)
    const [liked, setLiked] = useState(false)
    const [menu, setMenu] = useState(null)
    const [comments, setComments] = useState([])
    const [playing, setPlaying] = useState(false)
    const user = useSelector(state => state.user)
    const history = useHistory()
    const videoRef = useRef()
    const handlePlayVideo =()=>{
        playing? videoRef.current.pause(): videoRef.current.play()
        setPlaying(!playing)
        return;
    }
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

    useEffect(()=>{
        if(id){
            db.DATABASE.collection("posts").doc(id).collection("likes").onSnapshot(snapshot =>{
                setLikes(snapshot.docs.map(doc=>doc.data()));
            })
        }
        const fetchLocation = async ()=>{
            const _ = await axios.get()
            setLocation(_.data)
        }
        fetchLocation()
    }, [id])

    const postComment = (e)=>{
        e.preventDefault();
        if(id){
           db.DATABASE.collection("posts").doc(id).collection("comments").add({
                username: user?.displayName,
                user_photo: user?.photoURL,
                comment: comment,
                location: location,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
           })
        }
        setComment("")
    }
    const handleLike =()=>{
        setLiked(!liked)
        if(!liked && id){
            db.DATABASE.collection("posts").doc(id).collection("likes").add({
                username: user?.displayName,
                user_photo: user?.photoURL,
                location: location,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
           })
        }else{
            db.DATABASE.collection("posts").doc(id).collection("likes").where("username", "==", user?.displayName).get().then(documents=>{
                documents.forEach(doc=>{
                    doc.ref.delete();
                })
            })
        }
        
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
            <Comments likes={likes}open={open} handleClose={handleClose} post={data} id={id} comments={comments}/>
           <div className="post__top">
               <Avatar className="post__avatar" src={data?.user_photo} alt={data?.full_name} title={data?.user_name}/>
                <div className="post__userinfo">
                    <h1>{data?.username}</h1>
                    <small>{`${data?.continent}, ${data?.country}, ${data?.region}, ${data?.city}`}</small>
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
                {
                    data?.media_type !== "VIDEO"? <img src={data?.media_url} alt="post"/> :
                    <video onClick={handlePlayVideo} src={data?.media_url} ref={videoRef} alt="post"></video>
                }
                
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
                   {
                       likes?.length !==0 &&<Avatar className="post__likers__avatar" alt={likes[0]?.username} src={likes[0]?.user_photo}/>
                   }
                  {
                      likes?.length ===1 ? <p>Liked by {" "} <strong>{likes[0]?.username}</strong> </p>: likes?.length ===2?  <p>Liked by {" "} <strong>{likes[0]?.username}</strong> {" "} and {" "} <strong>{likes[1]?.username}</strong> </p> : likes?.length >2?  <p>Liked by {" "} <strong>{likes[0]?.username}</strong> {" "} and {" "} <strong>{likes.length -1 } others</strong> </p>:<strong>No likes yet</strong>
                  }
                    
                </p>
               <p className="post__caption"><strong>{data?.username}</strong> {data?.caption}</p>
             
               {comments?.length !== 0 && <p onClick={handleOpen} className="post__all_comments">View All {comments?.length} comments</p>}
               {comments?.length !== 0 &&  <p><strong>{comments[0]?.data?.username}</strong> {String(comments[0]?.data?.comment).substr(0, 50)+"..."}</p>}
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
